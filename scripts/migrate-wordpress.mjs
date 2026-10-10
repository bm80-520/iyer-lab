// One-time migration. Normal edits belong in content/, not the archived snapshot.
import { load } from 'cheerio';
import { mkdir, readFile, readdir, copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const source = 'archive/iyerlaboratory.org';
const pages = [];
const assets = new Map();
const allowed = new Set('div section p h2 h3 h4 h5 ul ol li a img strong em b i br hr blockquote table thead tbody tr th td figure figcaption span sub sup'.split(' '));

async function localUrl(value, slug) {
  if (!value || value.startsWith('#') || /^(mailto:|tel:)/i.test(value)) return value;
  const url = new URL(value, `https://iyerlaboratory.org/${slug}/`);
  if (url.hostname !== 'iyerlaboratory.org') return url.href;
  const pathname = decodeURIComponent(url.pathname);
  if (pathname.startsWith('/wp-content/uploads/')) {
    let relative = pathname.slice('/wp-content/uploads/'.length);
    // The downloader did not always save the requested thumbnail. Prefer an
    // available resolution of the same image instead of relying on WordPress.
    try { await readFile(path.join(source, 'wp-content/uploads', relative)); }
    catch {
      const folder = path.dirname(relative);
      const name = path.basename(relative).replace(/-\d+x\d+(?=\.[^.]+$)/, '');
      const alternatives = (await readdir(path.join(source, 'wp-content/uploads', folder))).filter(file => file.replace(/-\d+x\d+(?=\.[^.]+$)/, '') === name);
      if (alternatives.length) relative = path.join(folder, alternatives.sort()[0]);
    }
    const target = `/images/${relative}`;
    if (!assets.has(target)) {
      await mkdir(path.dirname(`public${target}`), { recursive: true });
      try {
        await copyFile(path.join(source, 'wp-content/uploads', relative), `public${target}`);
        assets.set(target, true);
      } catch { console.warn(`Missing archived asset: ${pathname}`); return url.href; }
    }
    return target;
  }
  if (pathname === '/home-page/') return '/';
  const route = pathname.replace(/index\.html$/, '');
  try { await readFile(path.join(source, route, 'index.html')); }
  catch { return url.href; } // Unsaved destinations remain links to the original site.
  return route + url.search + url.hash;
}

async function clean(html, slug, emailClass) {
  const $ = load(html, null, false);
  $('script, style, iframe, form, button, .av-horizontal-gallery, .avia-slideshow, .av-screen-reader-only, .image-overlay, .av-flex-placeholder, .av-masonry-entry-no-image, .av-social-sharing-box').remove();
  // Keep the content and useful layout, discarding WordPress behavior and attributes.
  for (const element of $('*').toArray()) {
    const el = $(element);
    if (!allowed.has(element.tagName)) { el.replaceWith(el.contents()); continue; }
    const classes = el.attr('class') || '';
    if (emailClass && classes.split(/\s+/).includes(emailClass)) el.text([...el.text()].reverse().join(''));
    const href = el.attr('href');
    const src = el.attr('src');
    const alt = el.attr('alt');
    const id = el.attr('id');
    for (const key of Object.keys(element.attribs)) el.removeAttr(key);
    if (id) el.attr('id', id);
    if (classes.split(/\s+/).includes('row') || classes.includes('flex_column_table')) el.attr('class', 'content-row');
    else if (classes.split(/\s+/).includes('column-1')) el.attr('class', 'content-column content-visual');
    else if (classes.split(/\s+/).includes('column-2') || classes.includes('flex_column')) el.attr('class', 'content-column');
    if (href) {
      el.attr('href', await localUrl(href, slug));
      if (/^https?:/.test(el.attr('href'))) el.attr('rel', 'noopener noreferrer');
    }
    if (src) {
      el.attr('src', await localUrl(src, slug));
      el.attr('alt', alt || '');
      el.attr('loading', 'lazy');
    }
  }
  return $.html().replace(/\n\s*\n/g, '\n');
}

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && !entry.name.startsWith('wp-') && !['feed', 'comments'].includes(entry.name)) await visit(path.join(directory, entry.name));
    if (entry.name !== 'index.html' || directory === source) continue;
    const slug = path.relative(source, directory).split(path.sep).join('/');
    const $ = load(await readFile(path.join(directory, entry.name), 'utf8'));
    const article = $('article.post-entry-type-standard').first();
    const isNews = article.length > 0 && !slug.startsWith('research/');
    const title = $('head > title').first().text().replace(/\s*[–—-]\s*Iyer Lab$/, '').trim();
    let html = article.length ? (article.find('.big-preview').html() || '') + (article.find('.entry-content').html() || '') : $('.entry-content-wrapper').first().html();
    if (!html) throw new Error(`No content found for ${slug}`);
    // Lab news gets a native list of the migrated articles instead of a JS masonry widget.
    if (slug === 'lab-news') html = '';
    if (slug === 'iyer-lab-resources') html = '<p>For internal lab resources, please contact <a href="mailto:iyer@rice.edu">iyer@rice.edu</a>.</p>';
    const file = `${slug.replaceAll('/', '--')}.html`;
    const emailClass = $('style[data-eae-name]').attr('data-eae-name');
    await writeFile(`content/pages/${file}`, await clean(html, slug, emailClass));
    pages.push({ slug, title, file, kind: isNews ? 'news' : 'page', ...(isNews ? { date: article.find('time').attr('datetime')?.slice(0, 10) } : {}) });
  }
}

await mkdir('content/pages', { recursive: true });
await visit(source);
pages.sort((a, b) => a.slug.localeCompare(b.slug));
await writeFile('content/pages.json', JSON.stringify(pages, null, 2) + '\n');
await writeFile('public/.nojekyll', '');
console.log(`Migrated ${pages.length} pages and ${assets.size} local assets.`);
