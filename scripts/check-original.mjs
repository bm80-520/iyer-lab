// Guard the source-of-truth requirement: every page keeps main's copy and layout.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { load } from 'cheerio';

const pages = JSON.parse(await readFile('content/pages.json', 'utf8'));
const normalize = text => text.replace(/\s+/g, ' ').trim();
for (const page of pages) {
  const original = load(await readFile(`archive/iyerlaboratory.org/${page.slug ? page.slug + '/' : ''}index.html`, 'utf8'));
  const imported = load(await readFile(`content/pages/${page.file}`, 'utf8'));
  const emailClass = original('style[data-eae-name]').attr('data-eae-name');
  if (emailClass) original(`.${emailClass}`).each((_, element) => {
    const el = original(element);
    el.text([...el.text()].reverse().join(''));
  });
  original('script, style').remove();
  const sourceText = original('#wrap_all').text() + original('#scroll-top-link').text();
  imported('style').remove();
  assert.equal(normalize(imported('body').text()), normalize(sourceText), `${page.slug || 'Home'}: visible copy differs from main`);
  for (const selector of ['#header', '#main', '#footer', '#socket', '.large-banner', '.small-banner', '.av-masonry-entry', '.av-horizontal-gallery', '.avia-slideshow-slide']) {
    assert.equal(imported(selector).length, original(selector).length, `${page.slug || 'Home'}: layout missing ${selector}`);
  }
  assert.deepEqual(imported('#avia-menu .avia-menu-text').map((_, e) => imported(e).text()).get(), original('#avia-menu .avia-menu-text').map((_, e) => original(e).text()).get(), `${page.slug || 'Home'}: navigation differs`);
  for (const name of ['Rice-SNS-Biosciences.png', 'rice-university-for-footer-300x169.jpg']) {
    assert.ok(imported(`#footer img[src$="${name}"]`).length, `${page.slug || 'Home'}: missing Rice branding ${name}`);
  }
  assert.ok(page.styles.every(href => href.startsWith('/original/')), 'Styles must be hosted locally');
}
const resources = load(await readFile('content/pages/iyer-lab-resources.html', 'utf8'));
assert.equal(resources('form').attr('action'), 'https://iyerlaboratory.org/wp-login.php?action=postpass');
console.log(`Verified original copy, layout, navigation, and Rice branding in ${pages.length} pages.`);
