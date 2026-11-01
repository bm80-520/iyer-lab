// Saves a complete copy of the website's content: every table as JSON and
// every uploaded file, in backups/<date-time>/ (ignored by Git).
//
//   npm run cms:backup
//
// Restore it with `npm run cms:restore -- backups/<date-time>` (see docs/CMS.md).
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { check, contentTables, signInAsAdmin } from './lib/cms-session.ts';

const client = await signInAsAdmin();
const stamp = new Date().toISOString().replace(/:/g, '-').slice(0, 19);
const folder = path.join('backups', stamp);
await mkdir(folder, { recursive: true });

const tables: Record<string, unknown[]> = {};
for (const table of contentTables) {
  tables[table] = check(await client.from(table).select('*'), `Reading ${table}`) as unknown[];
  console.log(`${table}: ${tables[table].length} rows`);
}
await writeFile(
  path.join(folder, 'content.json'),
  JSON.stringify({ exported_at: new Date().toISOString(), tables }, null, 2),
);

type MediaRow = { bucket: string; storage_path: string; thumbnail_path: string | null };
let files = 0;
for (const row of tables.media as MediaRow[]) {
  for (const storagePath of [row.storage_path, row.thumbnail_path]) {
    if (!storagePath) continue;
    const { data, error } = await client.storage.from(row.bucket).download(storagePath);
    if (error) {
      console.warn(`  could not download ${row.bucket}/${storagePath}: ${error.message}`);
      continue;
    }
    const target = path.join(folder, 'files', row.bucket, storagePath);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, Buffer.from(await data.arrayBuffer()));
    files++;
  }
}
console.log(`Saved ${files} files and all tables to ${folder}`);
