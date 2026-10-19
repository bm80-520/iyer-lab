// Re-import the checked-in main-branch snapshot without rewriting its design or copy.
// Run deliberately: this replaces content/pages and the original presentation assets.
import { load } from 'cheerio';
import { mkdir, readFile, readdir, copyFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';

const archive = path.resolve('archive');
const source = path.join(archive, 'iyerlaboratory.org');
const destination = 'public/original';
const baseToken = '__SITE_BASE_PATH__';
const copied = new Map();
const missing = new Set();
const routes = new Set(['']);
const pages = [];

async function discover(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && !entry.name.startsWith('wp-') && !['feed', 'comments'].includes(entry.name)) await discover(path.join(directory, entry.name));
    if (entry.name === 'index.html' && directory !== source) routes.add(path.relative(source, directory));
  }
}
await discover(source);

function resolveUrl(value, from) {
  if (!value || /^(#|data:|mailto:|tel:|javascript:)/i.test(value)) return null;
  return new URL(value, `https://snapshot.local/${path.relative(archive, from)}`);
}

async function archivedFile(url) {
  let relative = decodeURIComponent(url.pathname).replace(/^\//, '');
  if (url.hostname !== 'snapshot.local') relative = `${url.hostname}/${relative}`;
  let file = path.join(archive, relative);
  if (!file.startsWith(`${archive}/`)) return null;
  try { if ((await stat(file)).isFile()) return file; } catch {}
  // Some thumbnails and versioned URLs were saved under a different resolution/version.
  const directory = path.dirname(file);
  const requested = path.basename(file);
  const stem = requested.replace(/[?﹖].*$/, '').replace(/-\d+x\d+(?=\.[^.]+$)/, '');
  try {
    const alternatives = (await readdir(directory)).filter(name => name.replace(/[?﹖].*$/, '').replace(/-\d+x\d+(?=\.[^.]+$)/, '') === stem).sort();
    if (alternatives.length) return path.join(directory, alternatives[0]);
  } catch {}
  return null;
}

function publicUrl(file) {
  return `/original/${path.relative(archive, file).split(path.sep).map(encodeURIComponent).join('/')}`;
}

async function copyAsset(file) {
  if (copied.has(file)) return copied.get(file);
  const url = publicUrl(file);
  copied.set(file, url);
  const target = path.join(destination, path.relative(archive, file));
  await mkdir(path.dirname(target), { recursive: true });
  if (file.endsWith('.css')) {
    const css = await rewriteCss(await readFile(file, 'utf8'), file, file);
    await writeFile(target, css);
  } else await copyFile(file, target);
  return url;
}

async function localUrl(value, from, cssFrom) {
  const url = resolveUrl(value, from);
  if (!url) return value;
  let pathname = decodeURIComponent(url.pathname);
  if (url.hostname === 'snapshot.local' && pathname.startsWith('/iyerlaboratory.org/')) pathname = pathname.slice('/iyerlaboratory.org'.length);
  if (url.hostname === 'iyerlaboratory.org' || (url.hostname === 'snapshot.local' && url.pathname.startsWith('/iyerlaboratory.org/'))) {
    const slug = pathname.replace(/^\//, '').replace(/index\.html$/, '').replace(/\/$/, '');
    if (routes.has(slug) || slug === 'home-page') return `${baseToken}/${slug === 'home-page' || !slug ? '' : slug + '/'}${url.search}${url.hash}`;
    // The downloader renamed the login endpoint; authentication still belongs
    // to the live WordPress site, never a copied login screen on static hosting.
    if (/\/wp-login\.(html|php)$/.test(pathname)) return `https://iyerlaboratory.org/wp-login.php${url.search}${url.hash}`;
  }
  const file = await archivedFile(url);
  if (file) {
    const asset = await copyAsset(file);
    if (cssFrom) return path.relative(path.dirname(cssFrom), file).split(path.sep).map(part => part === '..' ? part : encodeURIComponent(part)).join('/') + url.hash;
    return baseToken + asset + url.hash;
  }
  if (url.hostname === 'snapshot.local') {
    const website = url.pathname.split('/')[1];
    const external = `https://${website}${url.pathname.slice(website.length + 1)}${url.search}${url.hash}`;
    if (/\.(css|js|png|jpe?g|svg|woff2?)(?:[?﹖]|$)/i.test(value)) missing.add(external);
    return external;
  }
  return url.href;
}

async function replaceAsync(text, regex, replacement) {
  const matches = [...text.matchAll(regex)];
  const values = [];
  for (const match of matches) values.push(await replacement(...match));
  let index = 0;
  return text.replace(regex, () => values[index++]);
}
async function rewriteCss(css, from, cssFrom) {
  return replaceAsync(css, /url\(\s*(['"]?)([^'"\)]+)\1\s*\)/g, async (_, quote, url) => `url("${await localUrl(url.trim(), from, cssFrom)}")`);
}

await mkdir('content/pages', { recursive: true });
const home = load(await readFile(path.join(source, 'index.html'), 'utf8'));
// The home page originally injects this same archived font sheet with JavaScript.
const fontDirectory = path.join(archive, 'fonts.googleapis.com');
const fontFile = (await readdir(fontDirectory)).find(name => name.endsWith('.css'));
const fontUrl = await copyAsset(path.join(fontDirectory, fontFile));
for (const slug of routes) {
  const from = path.join(source, slug, 'index.html');
  const $ = load(await readFile(from, 'utf8'));
  const styles = [fontUrl];
  for (const element of $('link[rel="stylesheet"]').toArray()) {
    const url = await localUrl($(element).attr('href'), from);
    if (url.startsWith(baseToken)) styles.push(url.slice(baseToken.length));
    // A few pages reference generated WordPress sheets absent from the download.
    // Their captured inline styles remain below; no remote CSS is loaded.
  }
  let inlineCss = '';
  for (const element of $('head style').toArray()) inlineCss += '\n' + await rewriteCss($(element).text(), from);
  const wrap = $('#wrap_all');
  if (!wrap.length) throw new Error(`No original layout found: ${slug}`);
  // Keep the full design, forms, galleries and all visible source text. Script
  // behavior is initialized once by the shared local presentation bundle.
  wrap.find('script').remove();
  const emailClass = $('style[data-eae-name]').attr('data-eae-name');
  if (emailClass) {
    wrap.find(`.${emailClass}`).each((_, element) => {
      const el = $(element);
      el.text([...el.text()].reverse().join(''));
      el.removeClass(emailClass);
    });
  }
  for (const element of wrap.find('*').toArray()) {
    const el = $(element);
    for (const attr of ['href', 'src', 'poster', 'action', 'data-src']) {
      if (el.attr(attr)) el.attr(attr, await localUrl(el.attr(attr), from));
    }
    if (el.attr('srcset')) el.attr('srcset', await replaceAsync(el.attr('srcset'), /([^\s,]+)(\s+\d+[wx])?/g, async (_, url, size) => (await localUrl(url, from)) + (size || '')));
    if (el.attr('style')) el.attr('style', await rewriteCss(el.attr('style'), from));
    // Email obfuscation's JavaScript links are decoded to regular mailto links.
    const onclick = el.attr('onclick');
    if (onclick?.includes('__eae_open')) {
      const encoded = onclick.match(/__eae_open\(['"]([^'"]+)/)?.[1];
      if (encoded) el.attr('href', encoded.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() <= 'm' ? 13 : -13))));
    }
    for (const attr of Object.keys(element.attribs)) if (/^on/i.test(attr)) el.removeAttr(attr);
  }
  const file = `${slug ? slug.replaceAll('/', '--') : 'home'}.html`;
  const markup = `<style>${inlineCss}</style>\n${wrap.html()}\n${$('#scroll-top-link').toString()}`;
  await writeFile(`content/pages/${file}`, markup.replace(/^[ \t]+/gm, indent => indent.replace(/\t/g, '    ')).replace(/[ \t]+$/gm, ''));
  const article = $('article.post-entry-type-standard').first();
  const isNews = article.length > 0 && !slug.startsWith('research/');
  pages.push({ slug, title: $('head > title').text().replace(/\s*[–—-]\s*Iyer Lab$/, '').trim(), file, kind: isNews ? 'news' : 'page', styles: [...new Set(styles)], htmlClass: $('html').attr('class').replace(/\s+/g, ' ').trim(), bodyClass: $('body').attr('class').replace(/\s+/g, ' ').trim(), ...(isNews ? { date: article.find('time').attr('datetime')?.slice(0, 10) } : {}) });
}

// Retain the original theme's slideshow, galleries, masonry, tabs, menus and
// lightbox. These scripts run locally; no WordPress install is required.
const scripts = home('script[src]').toArray().filter(element => {
  const id = home(element).attr('id') || '';
  return /^(jquery|avia-|underscore|collapseomatic)/.test(id) && !/google_maps|dotlottie|audioplayer|chart|contact|lottie|video|image-diff/.test(id);
});
let bundle = '/* Original presentation scripts from the archived main branch. */\nvar avia_framework_globals = {};\nconst com_options = {colomatduration:"fast",colomatslideEffect:"slideFade",colomatpauseInit:"",colomattouchstart:""};\n';
for (const element of scripts) {
  const file = await archivedFile(resolveUrl(home(element).attr('src'), path.join(source, 'index.html')));
  if (!file) throw new Error(`Missing presentation script ${home(element).attr('src')}`);
  bundle += `\n;/* ${home(element).attr('id')} */\n${await readFile(file, 'utf8')}\n;\n`;
}
// Older news was never downloaded. Keep the original control and send readers
// to the live news archive rather than making a WordPress AJAX call on Pages.
bundle += `\ndocument.addEventListener('click', function(event) {
  if (event.target instanceof Element && event.target.closest('.av-masonry-load-more')) {
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign('https://iyerlaboratory.org/lab-news/');
  }
}, true);\n`;
await writeFile(`${destination}/presentation.js`, bundle);
pages.sort((a, b) => a.slug.localeCompare(b.slug));
await writeFile('content/pages.json', JSON.stringify(pages, null, 2) + '\n');
await writeFile('public/.nojekyll', '');
console.log(`Restored ${pages.length} original page layouts, ${copied.size} assets, and ${scripts.length} presentation scripts.`);
if (missing.size) console.log('Assets absent from the original snapshot:\n' + [...missing].join('\n'));
