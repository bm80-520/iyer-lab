// Compare rendered public copy and image identities, independently of the
// implementation's tags/classes. This permits clean abstractions and Markdown.
import assert from 'node:assert/strict';
import { load } from 'cheerio';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const normalize = (text) => text.replace(/\s+/g, '').replace(/\u00a0/g, '');
const snapshot = path.resolve('archive/iyerlaboratory.org');
const routes = [];
async function visit(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  if (entries.some((e) => e.name === 'index.html')) routes.push(path.relative(snapshot, directory));
  for (const e of entries)
    if (
      e.isDirectory() &&
      !e.name.startsWith('wp-') &&
      !['comments', 'feed', 'home-page'].includes(e.name)
    )
      await visit(path.join(directory, e.name));
}
await visit(snapshot);
for (const route of routes) {
  const source = load(await readFile(path.join(snapshot, route, 'index.html'), 'utf8'));
  const rendered = load(await readFile(path.join('out', route, 'index.html'), 'utf8'));
  const emailClass = source('style[data-eae-name]').attr('data-eae-name');
  if (emailClass)
    source(`.${emailClass}`).each((_, element) =>
      source(element).text([...source(element).text()].reverse().join('')),
    );
  source('style,script').remove();
  assert.equal(rendered('style').length, 0, 'Styles belong in shared CSS files');
  rendered('script,style').remove();
  const output = normalize(rendered('body').text());
  const selectors =
    route === ''
      ? '.av-masonry-entry h3, .avia_textblock li'
      : route === 'team'
        ? '.column-2'
        : route === 'lab-news'
          ? '.av-masonry-entry h3, .av-masonry-date'
          : route === 'publications'
            ? '.avia_textblock h2, .avia_textblock li'
            : route === 'join-our-shoal'
              ? '.avia-icongrid-text p'
              : route === 'iyer-lab-resources'
                ? 'form > p, label'
                : route.startsWith('research') || route === 'resources'
                  ? '#main .entry-content-wrapper h2, #main .entry-content-wrapper p, #main .entry-content h2, #main .entry-content p'
                  : 'article .post-title, article time.date-container, article .entry-content p';
  for (const element of source(selectors).toArray()) {
    const text = normalize(source(element).text());
    if (text)
      assert.ok(
        output.includes(text),
        `${route || 'Home'}: missing/changed source copy: ${source(element).text().trim().slice(0, 100)}`,
      );
  }
  assert.deepEqual(
    rendered('.site-navigation a')
      .map((_, e) => rendered(e).text())
      .get(),
    source('#avia-menu > li:not(.av-burger-menu-main) .avia-menu-text')
      .map((_, e) => source(e).text())
      .get(),
    `${route}: navigation changed`,
  );
  for (const file of ['Rice-SNS-Biosciences.png', 'rice-university-for-footer-300x169.jpg'])
    assert.ok(
      rendered(`.site-footer img[src$="${file}"]`).length,
      `${route}: missing Rice branding`,
    );
  assert.equal(rendered('link[href*="original/"]').length, 0, 'Legacy styles must not be loaded');
  assert.equal(
    rendered('[class*="avia-"], [class*="av-masonry"]').length,
    0,
    'Legacy layout markup must not be deployed',
  );
  assert.equal(
    normalize(rendered('.site-footer').text() + rendered('.site-copyright').text()),
    normalize(source('#footer').text() + source('#socket').text()),
    `${route || 'Home'}: footer copy changed`,
  );
  assert.ok(
    !rendered.html().includes('Small cells. Big questions.'),
    'Invented copy must not return',
  );
}
console.log(
  `Verified source copy, navigation, Rice branding, and absence of legacy styling in ${routes.length} exported pages.`,
);
