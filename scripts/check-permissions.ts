// Verifies the database's access rules against a real Supabase project:
// visitors may read published content only and may change nothing; the
// administrator may do everything. Creates a few temporary test records and
// files, then removes them.
//
//   npm run cms:check
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../src/lib/cms/database.types';
import { signInAsAdmin } from './lib/cms-session.ts';

const admin = await signInAsAdmin();
const visitor = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  { auth: { persistSession: false, autoRefreshToken: false } },
);

let failures = 0;
function expect(condition: boolean, description: string, detail = '') {
  console.log(
    `${condition ? 'PASS' : 'FAIL'}  ${description}${!condition && detail ? ` (${detail})` : ''}`,
  );
  if (!condition) failures++;
}

const marker = `permission-check-${Date.now()}`;
const pdf = new Blob(['%PDF-1.4\n%permission check\n'], { type: 'application/pdf' });

// Temporary records, as the administrator.
const draft = await admin
  .from('publications')
  .insert({ slug: `${marker}-draft`, title: 'Draft check', publication_date: '2000-01-01' })
  .select()
  .single();
expect(!draft.error, 'Administrator can create a draft publication', draft.error?.message);
const archived = await admin
  .from('publications')
  .insert({
    slug: `${marker}-archived`,
    title: 'Archived check',
    publication_date: '2000-01-01',
    status: 'published',
    deleted_at: new Date().toISOString(),
  })
  .select()
  .single();
const privatePath = `${marker}/private.pdf`;
const privateUpload = await admin.storage
  .from('private-files')
  .upload(privatePath, pdf, { contentType: 'application/pdf' });
expect(
  !privateUpload.error,
  'Administrator can upload a private file',
  privateUpload.error?.message,
);

try {
  // Reading.
  const published = await visitor.from('publications').select('status, deleted_at');
  expect(
    !published.error &&
      published.data.length > 0 &&
      published.data.every((row) => row.status === 'published' && !row.deleted_at),
    'Visitors see published publications only',
    published.error?.message,
  );
  for (const [label, row] of [
    ['draft', draft.data],
    ['archived', archived.data],
  ] as const) {
    const seen = await visitor
      .from('publications')
      .select('id')
      .eq('id', row?.id ?? '');
    expect(
      !seen.error && seen.data.length === 0,
      `Visitors cannot see ${label === 'archived' ? 'an' : 'a'} ${label} publication`,
    );
  }
  const text = await visitor.from('site_content').select('content_key').limit(1);
  expect(!text.error, 'Visitors can read website text', text.error?.message);
  const usage = await visitor.rpc('media_usage', { target: draft.data?.id ?? marker });
  expect(Boolean(usage.error), 'Visitors cannot query where files are used');
  const admins = await visitor.from('admins').select('user_id');
  expect(Boolean(admins.error) || admins.data?.length === 0, 'Visitors cannot list administrators');

  // Writing.
  const insert = await visitor
    .from('publications')
    .insert({ slug: `${marker}-visitor`, title: 'Visitor', publication_date: '2000-01-01' });
  expect(Boolean(insert.error), 'Visitors cannot create content');
  const update = await visitor
    .from('publications')
    .update({ title: 'Changed by a visitor' })
    .eq('id', draft.data?.id ?? '')
    .select();
  expect(Boolean(update.error) || update.data?.length === 0, 'Visitors cannot change content');
  const remove = await visitor.from('site_content').delete().neq('content_key', '').select();
  expect(Boolean(remove.error) || remove.data?.length === 0, 'Visitors cannot delete content');
  const media = await visitor.from('media').insert({
    storage_path: `${marker}.png`,
    filename: 'x.png',
    file_type: 'image/png',
    file_size: 1,
  });
  expect(Boolean(media.error), 'Visitors cannot add Media Library records');

  // Files.
  const upload = await visitor.storage
    .from('media')
    .upload(`${marker}/visitor.pdf`, pdf, { contentType: 'application/pdf' });
  expect(Boolean(upload.error), 'Visitors cannot upload files');
  const download = await visitor.storage.from('private-files').download(privatePath);
  expect(Boolean(download.error), 'Visitors cannot download private files');
  const list = await visitor.storage.from('private-files').list(marker);
  expect(!list.data?.length, 'Visitors cannot list private files');
  const unsafe = await admin.storage
    .from('media')
    .upload(
      `${marker}/script.html`,
      new Blob(['<script>alert(1)</script>'], { type: 'text/html' }),
      {
        contentType: 'text/html',
      },
    );
  expect(Boolean(unsafe.error), 'Storage refuses file types other than images and PDFs');

  // Accounts.
  const signUp = await visitor.auth.signUp({
    email: `${marker}@example.com`,
    password: 'a-long-test-password-123',
  });
  expect(Boolean(signUp.error) && !signUp.data.user, 'Public registration is disabled');
  const wrong = await visitor.auth.signInWithPassword({
    email: process.env.CMS_ADMIN_EMAIL!,
    password: 'not-the-password-123',
  });
  expect(Boolean(wrong.error), 'An incorrect password is rejected');
} finally {
  await admin.from('publications').delete().like('slug', `${marker}%`);
  await admin.storage.from('private-files').remove([privatePath]);
  await admin.storage.from('media').remove([`${marker}/script.html`, `${marker}/visitor.pdf`]);
}

console.log(failures ? `\n${failures} check(s) failed.` : '\nAll permission checks passed.');
process.exit(failures ? 1 : 0);
