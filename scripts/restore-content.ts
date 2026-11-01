// Restores a backup made by `npm run cms:backup`.
//
//   npm run cms:restore -- backups/<date-time>
//       Into an empty project (for example, a new Supabase project).
//   npm run cms:restore -- backups/<date-time> --upsert
//       Into a project in use: records in the backup replace records with the
//       same id, and missing files are uploaded again. Records created after
//       the backup are left alone; nothing is deleted.
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { check, contentTables, signInAsAdmin } from './lib/cms-session.ts';

const [folder, mode] = process.argv.slice(2);
if (!folder) {
  console.error('Usage: npm run cms:restore -- backups/<date-time> [--upsert]');
  process.exit(1);
}
const upsert = mode === '--upsert';
const backup = JSON.parse(await readFile(path.join(folder, 'content.json'), 'utf8')) as {
  exported_at: string;
  tables: Record<string, Record<string, unknown>[]>;
};
console.log(`Backup from ${backup.exported_at}`);

const client = await signInAsAdmin();

if (!upsert)
  for (const table of contentTables) {
    const { count, error } = await client.from(table).select('*', { count: 'exact', head: true });
    if (error) throw new Error(`Checking ${table}: ${error.message}`);
    if (count) {
      console.error(
        `Nothing restored: ${table} already has rows. Restore into an empty project, or add --upsert (see docs/CMS.md).`,
      );
      process.exit(1);
    }
  }

type MediaRow = {
  bucket: string;
  storage_path: string;
  thumbnail_path: string | null;
  file_type: string;
};
let files = 0;
for (const row of backup.tables.media as MediaRow[]) {
  for (const storagePath of [row.storage_path, row.thumbnail_path]) {
    if (!storagePath) continue;
    const source = path.join(folder, 'files', row.bucket, storagePath);
    try {
      await stat(source);
    } catch {
      console.warn(`  missing from the backup: ${row.bucket}/${storagePath}`);
      continue;
    }
    const { error } = await client.storage
      .from(row.bucket)
      .upload(storagePath, await readFile(source), {
        contentType: storagePath === row.thumbnail_path ? 'image/webp' : row.file_type,
        cacheControl: '31536000',
        upsert: true,
      });
    if (error) throw new Error(`Uploading ${storagePath}: ${error.message}`);
    files++;
  }
}
console.log(`Uploaded ${files} files`);

// Parents before children, so references are valid as each table is written.
const keys: Record<string, string> = {
  research_project_publications: 'project_id,publication_id',
  site_content: 'content_key',
};
for (const table of contentTables) {
  const rows = backup.tables[table] ?? [];
  if (!rows.length) continue;
  check(
    await client.from(table).upsert(rows as never, { onConflict: keys[table] ?? 'id' }),
    `Restoring ${table}`,
  );
  console.log(`${table}: ${rows.length} rows restored`);
}
console.log('Restore complete.');
