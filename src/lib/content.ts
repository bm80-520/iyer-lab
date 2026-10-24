import 'server-only';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { marked } from 'marked';
import pageData from '../../content/data/pages.json';
import newsData from '../../content/data/news.json';
import { withBasePath } from './site';

export const news = newsData.items;
export const pages = [
  ...pageData.filter((page) => page.kind !== 'news'),
  ...news
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug!, title: item.title, kind: 'news' })),
];

// Markdown is reviewed repository content. Layout and presentation never live
// in these files; only paragraphs, headings, emphasis, links, and lists do.
export async function getMarkdown(file: string) {
  const source = await readFile(path.join(process.cwd(), 'content', file), 'utf8');
  return renderMarkdown(source);
}

export function renderMarkdown(source: string, inline = false) {
  const html = inline
    ? marked.parseInline(source, { async: false })
    : marked.parse(source, { async: false });
  return html.replace(
    /(href|src)="(\/(?!\/)[^"]*)"/g,
    (_, attr, url) => `${attr}="${withBasePath(url)}"`,
  );
}
