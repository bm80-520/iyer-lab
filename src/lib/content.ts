import 'server-only';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import pages from '../../content/pages.json';
import { withBasePath } from './site';

export { pages };

export function getNews() {
  return pages.filter(page => page.kind === 'news').sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export async function getPageHtml(file: string) {
  const html = await readFile(path.join(process.cwd(), 'content/pages', file), 'utf8');
  // Content is checked-in HTML from the migration, never untrusted user input.
  return html.replace(/(href|src)="(\/[^"\s]*)"/g, (_, attr, url) => `${attr}="${withBasePath(url)}"`);
}
