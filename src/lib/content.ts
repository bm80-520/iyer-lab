import 'server-only';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import pageData from '../../content/data/pages.json';
import { loadSiteContent } from './cms/snapshot';
import { newsHref } from '@/components/news-card';
import { renderMarkdown } from './markdown';

export { renderMarkdown };

/** Every prebuilt route: the fixed pages plus one per published news article. */
export async function getPages() {
  const { news } = await loadSiteContent();
  return [
    ...pageData,
    ...news
      .filter((item) => newsHref(item) === `/${item.slug}/`)
      .map((item) => ({ slug: item.slug, title: item.title, kind: 'news' })),
  ];
}

// Markdown that stays in the repository (the Primer). Layout and presentation
// never live in these files; only paragraphs, headings, emphasis, links, and lists do.
export async function readMarkdownSource(file: string) {
  return readFile(path.join(process.cwd(), 'content', file), 'utf8');
}

export async function getMarkdown(file: string) {
  return renderMarkdown(await readMarkdownSource(file));
}
