// Verify every rendered local page, download, image, CSS, and JS URL exists.
import { load } from 'cheerio';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('out');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const errors = new Set();
let count = 0;
async function check(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { await check(file); continue; }
    if (!entry.name.endsWith('.html')) continue;
    count++;
    const $ = load(await readFile(file, 'utf8'));
    const pagePath = `/${path.relative(root, file).replaceAll(path.sep, '/').replace(/index\.html$/, '')}`;
    for (const element of $('[href], [src]').toArray()) {
      const value = $(element).attr('href') || $(element).attr('src');
      if (!value || /^(#|https?:|mailto:|tel:|data:)/i.test(value)) continue;
      const url = new URL(value, `https://preview.local${basePath}${pagePath}`);
      if (basePath && !url.pathname.startsWith(`${basePath}/`)) { errors.add(`${pagePath}: URL outside base path: ${value}`); continue; }
      let target = path.join(root, decodeURIComponent(url.pathname.slice(basePath.length)));
      try {
        if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
        await stat(target);
      } catch { errors.add(`${pagePath}: Missing ${value}`); }
    }
  }
}
await check(root);
if (errors.size) { console.error([...errors].join('\n')); process.exitCode = 1; }
else console.log(`Checked links and assets in ${count} exported HTML files (base path: ${basePath || '/'}).`);
