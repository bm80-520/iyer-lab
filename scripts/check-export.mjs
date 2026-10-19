// Verify every rendered local page, download, image, CSS, and JS URL exists.
import { load } from 'cheerio';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('out');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const errors = new Set();
let count = 0;
let cssCount = 0;
async function checkUrl(value, pagePath) {
  if (!value || /^(#|https?:|mailto:|tel:|data:)/i.test(value)) return;
  const url = new URL(value, `https://preview.local${basePath}${pagePath}`);
  if (basePath && !url.pathname.startsWith(`${basePath}/`)) { errors.add(`${pagePath}: URL outside base path: ${value}`); return; }
  let target = path.join(root, decodeURIComponent(url.pathname.slice(basePath.length)));
  try {
    if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
    await stat(target);
  } catch { errors.add(`${pagePath}: Missing ${value}`); }
}
async function check(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { await check(file); continue; }
    if (entry.name.endsWith('.css')) {
      cssCount++;
      const cssPath = `/${path.relative(root, file).replaceAll(path.sep, '/')}`;
      const css = await readFile(file, 'utf8');
      for (const match of css.matchAll(/url\(\s*['"]?([^'"\)]+)['"]?\s*\)/g)) await checkUrl(match[1].trim(), cssPath);
    }
    if (!entry.name.endsWith('.html')) continue;
    count++;
    const $ = load(await readFile(file, 'utf8'));
    const pagePath = `/${path.relative(root, file).replaceAll(path.sep, '/').replace(/index\.html$/, '')}`;
    for (const element of $('[href], [src], [srcset], [action], [style]').toArray()) {
      for (const attribute of ['href', 'src', 'action']) await checkUrl($(element).attr(attribute), pagePath);
      const srcset = $(element).attr('srcset') || '';
      for (const candidate of srcset.split(',')) await checkUrl(candidate.trim().split(/\s+/)[0], pagePath);
      for (const match of ($(element).attr('style') || '').matchAll(/url\(\s*['"]?([^'"\)]+)['"]?\s*\)/g)) await checkUrl(match[1].trim(), pagePath);
    }
  }
}
await check(root);
if (errors.size) { console.error([...errors].join('\n')); process.exitCode = 1; }
else console.log(`Checked links, srcsets, forms, and assets in ${count} HTML and ${cssCount} CSS files (base path: ${basePath || '/'}).`);
