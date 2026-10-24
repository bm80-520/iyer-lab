// One-time import from the main-branch snapshot. Ordinary edits belong in
// content/data/*.json and content/text/*.md; importing again overwrites them.
import { load } from 'cheerio';
import TurndownService from 'turndown';
import sharp from 'sharp';
import { readFile, readdir, mkdir, copyFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('archive/iyerlaboratory.org');
const oldPages = [];
async function discover(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  if (entries.some((entry) => entry.name === 'index.html')) {
    const slug = path.relative(root, directory).split(path.sep).join('/');
    const $ = load(await readFile(path.join(directory, 'index.html'), 'utf8'));
    const article = $('article.post-entry-type-standard').first();
    const kind = article.length && !slug.startsWith('research/') ? 'news' : 'page';
    oldPages.push({
      slug,
      title: $('head > title')
        .text()
        .replace(/\s*[–—-]\s*Iyer Lab$/, '')
        .trim(),
      kind,
    });
  }
  for (const entry of entries)
    if (
      entry.isDirectory() &&
      !entry.name.startsWith('wp-') &&
      !['comments', 'feed', 'home-page'].includes(entry.name)
    )
      await discover(path.join(directory, entry.name));
}
await discover(root);
const routes = new Set(oldPages.map((p) => p.slug));
const markdown = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  emDelimiter: '*',
  strongDelimiter: '**',
});
markdown.keep(['sub', 'sup']);
const cleanText = (value) => value.replace(/\s+/g, ' ').trim();
const idFor = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
const copied = new Set();

async function json(name, data) {
  await mkdir('content/data', { recursive: true });
  await writeFile(`content/data/${name}.json`, JSON.stringify(data, null, 2) + '\n');
}
async function text(name, html) {
  const file = `text/${name}.md`;
  await mkdir(path.dirname(`content/${file}`), { recursive: true });
  await writeFile(`content/${file}`, markdown.turndown(html).replace(/\n{3,}/g, '\n\n') + '\n');
  return file;
}
async function localUrl(value, slug) {
  if (!value || /^(#|mailto:|tel:|data:)/.test(value)) return value;
  const from = path.join(root, slug, 'index.html');
  // Downloaded paths are relative to the archived HTML, including ../ segments.
  const url = new URL(
    value,
    `https://snapshot.local/${path.relative(path.resolve('archive'), from)}`,
  );
  let pathname = decodeURIComponent(url.pathname);
  if (url.hostname === 'snapshot.local' && pathname.startsWith('/iyerlaboratory.org/'))
    pathname = pathname.slice('/iyerlaboratory.org'.length);
  if (url.hostname === 'iyerlaboratory.org' || url.hostname === 'snapshot.local') {
    const route = pathname
      .replace(/^\//, '')
      .replace(/index\.html$/, '')
      .replace(/\/$/, '');
    if (routes.has(route) || route === 'home-page')
      return `/${route && route !== 'home-page' ? route + '/' : ''}${url.hash}`;
    if (/\/wp-login\.(html|php)$/.test(pathname))
      return `https://iyerlaboratory.org/wp-login.php${url.search}`;
    if (pathname.startsWith('/wp-content/uploads/')) {
      let relative = pathname.slice('/wp-content/uploads/'.length);
      let file = path.join(root, 'wp-content/uploads', relative);
      try {
        await stat(file);
      } catch {
        const directory = path.dirname(file);
        const stem = path.basename(file).replace(/-\d+x\d+(?=\.[^.]+$)/, '');
        const choices = (await readdir(directory))
          .filter((n) => n.replace(/-\d+x\d+(?=\.[^.]+$)/, '') === stem)
          .sort();
        if (!choices.length) return `https://iyerlaboratory.org${pathname}`;
        file = path.join(directory, choices[0]);
        relative = path.relative(path.join(root, 'wp-content/uploads'), file);
      }
      const target = `public/images/${relative}`;
      if (!copied.has(target)) {
        await mkdir(path.dirname(target), { recursive: true });
        await copyFile(file, target);
        copied.add(target);
      }
      return `/images/${relative.split(path.sep).map(encodeURIComponent).join('/')}`;
    }
  }
  if (url.hostname === 'snapshot.local')
    return `https://iyerlaboratory.org${pathname}${url.search}${url.hash}`;
  return url.href;
}
async function page(slug) {
  const $ = load(await readFile(path.join(root, slug, 'index.html'), 'utf8'));
  const emailClass = $('style[data-eae-name]').attr('data-eae-name');
  if (emailClass)
    $(`.${emailClass}`).each((_, el) => $(el).text([...$(el).text()].reverse().join('')));
  $('script,style,.av-screen-reader-only,.image-overlay').remove();
  for (const el of $('a,img,form').toArray())
    for (const attr of ['href', 'src', 'action'])
      if ($(el).attr(attr)) $(el).attr(attr, await localUrl($(el).attr(attr), slug));
  return $;
}
function image($, element) {
  const el = $(element);
  return {
    src: el.attr('src'),
    alt: el.attr('alt') || '',
    ...(el.attr('width')
      ? { width: Number(el.attr('width')), height: Number(el.attr('height')) }
      : {}),
  };
}
function gallery($) {
  return $('.av-horizontal-gallery-wrap')
    .map((_, e) => ({ ...image($, $(e).find('img').first()), full: $(e).find('a').attr('href') }))
    .get();
}
async function rows($, prefix) {
  const result = [];
  for (const [index, row] of $('.row').toArray().entries()) {
    const column = $(row).find('.column-2');
    const heading = column.find('h2').first();
    const title = cleanText(heading.text());
    const button = column.find('.avia-button').first();
    heading.remove();
    column.find('.avia-button-wrap,style').remove();
    result.push({
      id: `${prefix}-${index + 1}`,
      title,
      image: image($, $(row).find('.column-1 img').first()),
      body: await text(`${prefix}/${index + 1}`, column.html()),
      ...(button.length
        ? { link: { label: cleanText(button.text()), href: button.attr('href') } }
        : {}),
    });
  }
  return result;
}
const home = await page('');
const site = {
  title: 'Iyer Lab – Cellular and Developmental Neuroimmunology – Rice University',
  navigation: home('#avia-menu > li:not(.av-burger-menu-main)')
    .map((_, e) => ({
      label: cleanText(home(e).find('.avia-menu-text').first().text()),
      href: home(e).find('a').attr('href'),
    }))
    .get(),
  banner: {
    desktop: image(home, home('.large-banner')),
    mobile: image(home, home('.small-banner')),
  },
  footer: {
    biosciences: image(home, home('#footer img').first()),
    campus: image(home, home('#footer img').last()),
    linksTitle: home('#footer .widgettitle').first().text(),
    links: home('#footer .textwidget a')
      .map((_, e) => ({ label: home(e).text(), href: home(e).attr('href') }))
      .get(),
    contactTitle: home('#footer .widgettitle').last().text(),
    address: home('#footer .textwidget')
      .eq(2)
      .find('p')
      .map((_, e) => home(e).text())
      .get(),
    copyright: markdown.turndown(home('#socket .copyright').html()),
    linksInternal: home('#socket nav a')
      .map((_, e) => ({ label: cleanText(home(e).text()), href: home(e).attr('href') }))
      .get(),
  },
};
await json('site', site);
const research = await page('research');
const researchItems = await rows(research, 'research');
await json('research', { gallery: gallery(research), items: researchItems });
await json('home', {
  slides: home('.avia-slideshow-slide img')
    .map((_, e) => image(home, e))
    .get(),
  researchImages: [],
  resourceLinks: home('.avia_textblock')
    .first()
    .find('li a')
    .map((_, e) => ({ label: home(e).text(), href: home(e).attr('href') }))
    .get(),
});
// Research card backgrounds are the same original images as the research listing.
const homeData = JSON.parse(await readFile('content/data/home.json', 'utf8'));
delete homeData.resourceLinks;
homeData.researchImages = [];
for (const element of home('.av-masonry-image-container').toArray()) {
  const background = home(element)
    .attr('style')
    ?.match(/url\(([^)]+)\)/)?.[1];
  if (background) homeData.researchImages.push({ src: await localUrl(background, ''), alt: '' });
}
await json('home', homeData);
for (const slug of ['research/lysosomal-projects', 'research/microglia-and-brain-disorders']) {
  const $ = await page(slug);
  await json(slug.split('/')[1], { items: await rows($, slug) });
}
const primer = await page('research/primer');
const primerItems = [];
for (const [index, row] of primer('.flex_column_table').toArray().entries()) {
  const body = primer(row).find('.avia_textblock').first();
  primerItems.push({
    id: `primer-${index + 1}`,
    image: image(primer, primer(row).find('img').first()),
    reverse: !primer(row).children().first().find('img').length,
    body: await text(`research/primer/${index + 1}`, body.html()),
  });
}
await json('primer', { items: primerItems });
const team = await page('team');
const members = [];
for (const row of team('.row').toArray()) {
  const column = team(row).find('.column-2');
  const label = column.children('span').first();
  const [name, role] = label
    .html()
    .split(/<br\s*\/?>/)
    .map((s) => load(s).text().trim());
  const meta = column.clone();
  meta.find('.post-content').remove();
  const joined = meta.text().match(/Joined:\s*([A-Za-z]+ \d{4})/)?.[1];
  const email = column.children('span').eq(1).text().trim();
  members.push({
    id: idFor(name),
    name,
    role,
    joined,
    email,
    links: column
      .children('a')
      .map((_, e) => ({ label: team(e).text(), href: team(e).attr('href') }))
      .get(),
    image: image(team, team(row).find('img').first()),
    body: await text(`team/${idFor(name)}`, column.find('.post-content').html()),
  });
}
await json('team', { gallery: gallery(team), members });
const publications = await page('publications');
const sections = publications('.avia_textblock')
  .map((_, element) => {
    const block = publications(element);
    return {
      title: cleanText(block.find('h2').text()),
      items: block
        .find('li')
        .map((_, li) => {
          const item = publications(li).clone();
          const title = item.find('span').first();
          const titleHtml = title.html();
          title.replaceWith('<hr>');
          const [authors, citation] = item.html().split('<hr>');
          return {
            authors: markdown.turndown(authors),
            title: markdown.turndown(titleHtml),
            citation: markdown.turndown(citation),
          };
        })
        .get(),
    };
  })
  .get();
await json('publications', { gallery: gallery(publications), sections });
const resources = await page('resources');
const resourceSections = [];
for (const [index, row] of resources('.flex_column_table').toArray().entries()) {
  const heading = resources(row).find('.av-special-heading');
  resourceSections.push({
    id:
      heading.attr('id') ||
      ['sci-comm', 'tools', 'inspiration', 'career', 'zebrafish', 'outreach'][index],
    title: cleanText(heading.find('h2').text()),
    image: image(resources, resources(row).find('img').first()),
    body: await text(`resources/${index + 1}`, resources(row).find('.avia_textblock').html()),
  });
}
await json('resources', { gallery: gallery(resources), sections: resourceSections });
const recruitment = await page('join-our-shoal');
const opportunities = [];
for (const [index, element] of recruitment('.avia-icongrid-text').toArray().entries())
  opportunities.push({
    id: `opportunity-${index + 1}`,
    body: await text(`opportunities/${index + 1}`, recruitment(element).html()),
  });
await json('recruitment', { gallery: gallery(recruitment), opportunities });
const newsPage = await page('lab-news');
const news = [];
for (const element of newsPage('a.av-masonry-entry').toArray()) {
  const item = newsPage(element);
  const title = cleanText(item.find('h3').text());
  const href = item.attr('href');
  const slug = href.startsWith('/') ? href.replace(/^\//, '').replace(/\/$/, '') : undefined;
  const record = {
    id: idFor(title).slice(0, 80),
    title,
    href,
    date: cleanText(item.find('.av-masonry-date').text()),
    image: image(newsPage, item.find('img').first()),
  };
  if (slug && routes.has(slug)) {
    const $ = await page(slug);
    const article = $('article.post-entry-type-standard').first();
    record.slug = slug;
    record.articleImage = image($, article.find('.big-preview img').first());
    record.body = await text(`news/${record.id}`, article.find('.entry-content').html() || '');
  }
  news.push(record);
}
await json('news', { items: news });
const protectedPage = await page('iyer-lab-resources');
await json('protected-resources', {
  notice: protectedPage('form > p').eq(1).text(),
  action: protectedPage('form').attr('action'),
  redirect: protectedPage('input[name=redirect_to]').attr('value'),
  passwordLabel: cleanText(protectedPage('label').text()),
  submitLabel: protectedPage('input[type=submit]').attr('value'),
});
await json(
  'pages',
  oldPages.filter((page) => page.kind !== 'news'),
);
await mkdir('public/fonts', { recursive: true });
for (const [name, directory] of [
  ['merriweather', 'merriweather/v33'],
  ['open-sans', 'opensans/v44'],
]) {
  const folder = path.resolve('archive/fonts.gstatic.com/s', directory);
  const file = (await readdir(folder)).find((n) => n.endsWith('.woff2'));
  await copyFile(path.join(folder, file), `public/fonts/${name}.woff2`);
}
// Reserve the original image aspect ratios even before offscreen images load.
// This keeps long profiles and news pages stable while retaining lazy loading.
async function addDimensions(value) {
  if (!value || typeof value !== 'object') return;
  if (value.src?.startsWith('/images/') && (!value.width || !value.height)) {
    const metadata = await sharp(`public${decodeURIComponent(value.src)}`).metadata();
    value.width = metadata.width;
    value.height = metadata.height;
  }
  for (const child of Object.values(value))
    if (typeof child === 'object') await addDimensions(child);
}
for (const file of await readdir('content/data')) {
  if (!file.endsWith('.json')) continue;
  const data = JSON.parse(await readFile(`content/data/${file}`, 'utf8'));
  await addDimensions(data);
  await writeFile(`content/data/${file}`, JSON.stringify(data, null, 2) + '\n');
}
console.log(
  `Imported editable content for ${oldPages.length} pages and copied ${copied.size} assets. No theme CSS or scripts imported.`,
);
