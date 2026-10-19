import 'server-only';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import pages from '../../content/pages.json';

export { pages };

export async function getPageHtml(file: string) {
  const html = await readFile(path.join(process.cwd(), 'content/pages', file), 'utf8');
  // Trusted, checked-in source HTML. Tokens cover srcset and inline CSS as well
  // as links and images, including deployment under a GitHub Pages project path.
  return html.replaceAll('__SITE_BASE_PATH__', process.env.NEXT_PUBLIC_BASE_PATH || '');
}
