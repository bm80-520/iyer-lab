'use client';

// Everything the dashboard does to Supabase. Each call runs as the signed-in
// administrator; Row Level Security in the database decides what is allowed.
import { getAdminClient } from './client';
import { privateBucket, publicBucket } from './config';
import type { Database, Tables, TablesInsert } from './database.types';
import type { MediaRow } from './mappers';

export type ContentTable =
  'publications' | 'team_members' | 'news' | 'research_areas' | 'research_projects';
export type ContentRow<T extends ContentTable = ContentTable> = Tables<T>;
export type ContentStatus = Database['public']['Enums']['content_status'];

// ---------------------------------------------------------------------------
// Errors
// ---------------------------------------------------------------------------

type DbError = { message: string; code?: string; details?: string } | null;

/** Turns database errors into sentences an editor can act on. */
export function explain(error: DbError | Error | unknown): string {
  const err = error as { message?: string; code?: string };
  const message = err?.message ?? String(error);
  if (err?.code === '23505')
    return 'Another entry already uses this web address (slug). Change it and save again.';
  if (err?.code === '23503')
    return 'This file is still used on the website. Remove it from those entries first.';
  if (err?.code === '23514') return `A value is not allowed: ${message}`;
  if (err?.code === '42501' || /row-level security/i.test(message))
    return 'You are not allowed to make this change. Sign in again as an administrator.';
  if (/JWT|session/i.test(message)) return 'Your session has expired. Sign in again.';
  if (/Failed to fetch|NetworkError|Load failed/i.test(message))
    return 'The website database could not be reached. Check your internet connection and try again.';
  return message;
}

function check<T>(result: { data: T; error: DbError }) {
  if (result.error) throw Object.assign(new Error(explain(result.error)), result.error);
  return result.data as NonNullable<T>;
}

// ---------------------------------------------------------------------------
// Sign-in
// ---------------------------------------------------------------------------

export async function signIn(email: string, password: string) {
  const client = getAdminClient();
  const { error } = await client.auth.signInWithPassword({ email: email.trim(), password });
  if (error)
    return {
      ok: false as const,
      message: /invalid login credentials/i.test(error.message)
        ? 'The email address or password is incorrect.'
        : explain(error),
    };
  if (!(await isAdmin())) {
    await client.auth.signOut();
    return {
      ok: false as const,
      message: 'This account is not authorized to edit the website. Ask the lab’s administrator.',
    };
  }
  return { ok: true as const };
}

export async function isAdmin() {
  const { data } = await getAdminClient().rpc('is_admin');
  return data === true;
}

export async function currentUser() {
  const { data } = await getAdminClient().auth.getSession();
  return data.session?.user ?? null;
}

export function signOut(scope: 'local' | 'global' = 'local') {
  return getAdminClient().auth.signOut({ scope });
}

export async function changePassword(email: string, current: string, next: string) {
  const client = getAdminClient();
  const verify = await client.auth.signInWithPassword({ email, password: current });
  if (verify.error) throw new Error('Your current password is incorrect.');
  const { error } = await client.auth.updateUser({ password: next });
  if (error) throw new Error(explain(error));
}

// ---------------------------------------------------------------------------
// Content records
// ---------------------------------------------------------------------------

export async function listRows<T extends ContentTable>(table: T): Promise<ContentRow<T>[]> {
  const client = getAdminClient();
  return check(
    await client.from(table).select('*').order('updated_at', { ascending: false }),
  ) as ContentRow<T>[];
}

/** Creates or updates a record and returns it as stored. */
export async function saveRow<T extends ContentTable>(
  table: T,
  row: ContentRow<T>,
): Promise<ContentRow<T>> {
  const { created_at, updated_at, ...values } = row as ContentRow & Record<string, unknown>;
  void created_at;
  void updated_at;
  const client = getAdminClient();
  return check(
    await client
      .from(table)
      .upsert(values as never)
      .select('*')
      .single(),
  ) as ContentRow<T>;
}

/** Archive (soft delete): hidden from the website, recoverable under Archived. */
export async function archiveRow(table: ContentTable, id: string) {
  check(
    await getAdminClient()
      .from(table)
      .update({ deleted_at: new Date().toISOString() } as never)
      .eq('id', id),
  );
}

export async function restoreRow(table: ContentTable, id: string) {
  check(
    await getAdminClient()
      .from(table)
      .update({ deleted_at: null } as never)
      .eq('id', id),
  );
}

export async function deleteRowPermanently(table: ContentTable, id: string) {
  check(await getAdminClient().from(table).delete().eq('id', id));
}

/** Saves a new display order: the first id gets 10, the next 20, and so on. */
export async function saveOrder(table: ContentTable, ids: string[]) {
  const client = getAdminClient();
  await Promise.all(
    ids.map(async (id, index) =>
      check(
        await client
          .from(table)
          .update({ display_order: (index + 1) * 10 } as never)
          .eq('id', id),
      ),
    ),
  );
}

export async function listProjectPublications() {
  return check(
    await getAdminClient().from('research_project_publications').select('*').order('display_order'),
  );
}

export async function setProjectPublications(projectId: string, publicationIds: string[]) {
  const client = getAdminClient();
  check(await client.from('research_project_publications').delete().eq('project_id', projectId));
  if (publicationIds.length)
    check(
      await client.from('research_project_publications').insert(
        publicationIds.map((publication_id, index) => ({
          project_id: projectId,
          publication_id,
          display_order: index,
        })),
      ),
    );
}

// ---------------------------------------------------------------------------
// Website text
// ---------------------------------------------------------------------------

export async function listSiteText() {
  return check(await getAdminClient().from('site_content').select('*').order('display_order'));
}

export async function saveSiteText(key: string, value: string) {
  return check(
    await getAdminClient()
      .from('site_content')
      .update({ content_value: value })
      .eq('content_key', key)
      .select('*')
      .single(),
  );
}

// ---------------------------------------------------------------------------
// Media library
// ---------------------------------------------------------------------------

export const imageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
export const documentTypes = ['application/pdf'];
const extensions: Record<string, string[]> = {
  'image/jpeg': ['jpg', 'jpeg'],
  'image/png': ['png'],
  'image/webp': ['webp'],
  'image/gif': ['gif'],
  'application/pdf': ['pdf'],
};
const maxImageBytes = 20 * 1024 * 1024;
const maxPublicPdfBytes = 25 * 1024 * 1024;
const maxPrivatePdfBytes = 50 * 1024 * 1024;

export type MediaKind = 'image' | 'pdf';
export const mediaKind = (row: Pick<MediaRow, 'file_type'>): MediaKind =>
  row.file_type === 'application/pdf' ? 'pdf' : 'image';

export function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

/** Returns a reason the file cannot be uploaded, or '' when it is acceptable. */
export function rejectFile(file: File, options: { kind?: MediaKind; isPublic?: boolean } = {}) {
  const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
  const type = Object.keys(extensions).find((mime) => extensions[mime].includes(extension));
  if (!type || (file.type && file.type !== type))
    return `${file.name}: only JPEG, PNG, WebP or GIF images and PDF documents can be uploaded.`;
  const kind = type === 'application/pdf' ? 'pdf' : 'image';
  if (options.kind && options.kind !== kind)
    return `${file.name}: choose ${options.kind === 'pdf' ? 'a PDF document' : 'an image (JPEG, PNG, WebP or GIF)'}.`;
  const limit =
    kind === 'image'
      ? maxImageBytes
      : options.isPublic === false
        ? maxPrivatePdfBytes
        : maxPublicPdfBytes;
  if (file.size > limit)
    return `${file.name} is ${formatBytes(file.size)}; the limit is ${formatBytes(limit)}.`;
  return '';
}

function fileType(file: File) {
  const extension = file.name.split('.').pop()!.toLowerCase();
  return Object.keys(extensions).find((mime) => extensions[mime].includes(extension))!;
}

function safeName(name: string) {
  const [base, ...rest] = name.toLowerCase().split('.');
  const extension = rest.pop() ?? '';
  const slug = [base, ...rest]
    .join('-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
  return `${slug || 'file'}.${extension}`;
}

/** Reads an image's size and makes a small WebP preview; the original is untouched. */
async function inspectImage(file: File) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 480 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const thumbnail = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, 'image/webp', 0.85),
  );
  const size = { width: bitmap.width, height: bitmap.height };
  bitmap.close();
  return { ...size, thumbnail };
}

async function storeFile(file: File, bucket: string) {
  const client = getAdminClient();
  const type = fileType(file);
  const now = new Date();
  const folder = `${now.getUTCFullYear()}/${String(now.getUTCMonth() + 1).padStart(2, '0')}`;
  const id = crypto.randomUUID();
  const storagePath = `${folder}/${id.slice(0, 8)}-${safeName(file.name)}`;
  const details =
    type === 'application/pdf'
      ? { width: null, height: null, thumbnail: null }
      : await inspectImage(file);
  check(
    await client.storage
      .from(bucket)
      .upload(storagePath, file, { contentType: type, cacheControl: '31536000', upsert: false }),
  );
  let thumbnailPath: string | null = null;
  if (details.thumbnail) {
    thumbnailPath = `thumbnails/${id}.webp`;
    const { error } = await client.storage.from(bucket).upload(thumbnailPath, details.thumbnail, {
      contentType: 'image/webp',
      cacheControl: '31536000',
    });
    if (error) thumbnailPath = null; // the full image is shown instead
  }
  return {
    storage_path: storagePath,
    thumbnail_path: thumbnailPath,
    file_type: type,
    file_size: file.size,
    width: details.width,
    height: details.height,
  };
}

async function removeObjects(bucket: string, paths: (string | null)[]) {
  const existing = paths.filter((path): path is string => Boolean(path));
  if (existing.length) await getAdminClient().storage.from(bucket).remove(existing);
}

export async function listMedia() {
  return check(
    await getAdminClient().from('media').select('*').order('uploaded_at', { ascending: false }),
  );
}

/**
 * Uploads a file to the Media Library. Images are always public (they are
 * shown on pages); PDFs are private unless `isPublic` is set.
 */
export async function uploadMedia(file: File, options: { isPublic?: boolean } = {}) {
  const problem = rejectFile(file, { isPublic: options.isPublic });
  if (problem) throw new Error(problem);
  const bucket =
    fileType(file) === 'application/pdf' && !options.isPublic ? privateBucket : publicBucket;
  const stored = await storeFile(file, bucket);
  const row: TablesInsert<'media'> = {
    ...stored,
    bucket,
    filename: file.name,
    alt_text: '',
    description: '',
  };
  const result = await getAdminClient().from('media').insert(row).select('*').single();
  if (result.error) {
    await removeObjects(bucket, [stored.storage_path, stored.thumbnail_path]);
    throw new Error(explain(result.error));
  }
  return result.data;
}

/**
 * Replaces a file's contents. Every page using it shows the new file, because
 * content refers to the library entry, not to the file itself.
 */
export async function replaceMedia(media: MediaRow, file: File) {
  const problem = rejectFile(file, {
    kind: mediaKind(media),
    isPublic: media.bucket === publicBucket,
  });
  if (problem) throw new Error(problem);
  const stored = await storeFile(file, media.bucket);
  const result = await getAdminClient()
    .from('media')
    .update({ ...stored, filename: file.name })
    .eq('id', media.id)
    .select('*')
    .single();
  if (result.error) {
    await removeObjects(media.bucket, [stored.storage_path, stored.thumbnail_path]);
    throw new Error(explain(result.error));
  }
  await removeObjects(media.bucket, [media.storage_path, media.thumbnail_path]);
  return result.data;
}

export async function updateMediaDetails(
  id: string,
  details: Pick<MediaRow, 'filename' | 'alt_text' | 'description'>,
) {
  return check(
    await getAdminClient().from('media').update(details).eq('id', id).select('*').single(),
  );
}

/** Moves a PDF between the public and private buckets. */
export async function setMediaVisibility(media: MediaRow, isPublic: boolean) {
  const target = isPublic ? publicBucket : privateBucket;
  if (media.bucket === target) return media;
  const storage = getAdminClient().storage;
  check(
    await storage
      .from(media.bucket)
      .move(media.storage_path, media.storage_path, { destinationBucket: target }),
  );
  const result = await getAdminClient()
    .from('media')
    .update({ bucket: target })
    .eq('id', media.id)
    .select('*')
    .single();
  if (result.error) {
    await storage
      .from(target)
      .move(media.storage_path, media.storage_path, { destinationBucket: media.bucket });
    throw new Error(explain(result.error));
  }
  return result.data;
}

export type MediaUse = { kind: string; record_id: string; title: string; field: string };

export async function mediaUsage(id: string): Promise<MediaUse[]> {
  return check(await getAdminClient().rpc('media_usage', { target: id }));
}

/** Deletes a file that nothing uses (the database refuses otherwise). */
export async function deleteMedia(media: MediaRow) {
  check(await getAdminClient().from('media').delete().eq('id', media.id));
  await removeObjects(media.bucket, [media.storage_path, media.thumbnail_path]);
}

/** A temporary link for viewing a private file (valid for one hour). */
export async function privateFileUrl(media: MediaRow) {
  const { data, error } = await getAdminClient()
    .storage.from(privateBucket)
    .createSignedUrl(media.storage_path, 3600);
  if (error) throw new Error(explain(error));
  return data.signedUrl;
}

// ---------------------------------------------------------------------------
// Backup
// ---------------------------------------------------------------------------

/** Every table's rows, for the Settings page's backup download. */
export async function exportContent() {
  const client = getAdminClient();
  const tables = [
    'media',
    'publications',
    'team_members',
    'news',
    'research_areas',
    'research_projects',
    'research_project_publications',
    'site_content',
  ] as const;
  const entries = await Promise.all(
    tables.map(async (table) => [table, check(await client.from(table).select('*'))] as const),
  );
  return { exported_at: new Date().toISOString(), tables: Object.fromEntries(entries) };
}

// ---------------------------------------------------------------------------
// Web addresses
// ---------------------------------------------------------------------------

export function slugify(text: string, maxLength = 80) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[*_]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, maxLength)
    .replace(/-$/, '');
}

/** `base`, or `base-2`, `base-3`… when that slug is taken. */
export function uniqueSlug(base: string, taken: Iterable<string>) {
  const used = new Set(taken);
  const root = base || 'entry';
  if (!used.has(root)) return root;
  for (let index = 2; ; index++) if (!used.has(`${root}-${index}`)) return `${root}-${index}`;
}
