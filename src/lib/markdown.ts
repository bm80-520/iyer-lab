import { Marked, type Tokens } from 'marked';
import { withBasePath } from './site';

// Text edited in the dashboard is rendered on public pages, so Markdown is
// limited to formatting: raw HTML is shown as text (except sub/superscript and
// line breaks, used for scientific notation), and links may only point to web,
// email, or telephone addresses. Safe to import from client components.

const allowedTag = /^<\/?(sub|sup|br)\s*\/?>$/i;

const escapeHtml = (text: string) =>
  text.replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!,
  );

export function safeUrl(url: string) {
  const value = url.trim();
  const scheme = /^([a-z][a-z0-9+.-]*):/i.exec(value)?.[1]?.toLowerCase();
  if (scheme && !['http', 'https', 'mailto', 'tel'].includes(scheme)) return '';
  return withBasePath(value);
}

const markdown = new Marked({
  renderer: {
    html({ text }: Tokens.HTML | Tokens.Tag) {
      return allowedTag.test(text.trim()) ? text : escapeHtml(text);
    },
    link({ href, title, tokens }: Tokens.Link) {
      const text = this.parser.parseInline(tokens);
      const url = safeUrl(href);
      if (!url) return text;
      const titleAttribute = title ? ` title="${escapeHtml(title)}"` : '';
      return `<a href="${escapeHtml(url)}"${titleAttribute}>${text}</a>`;
    },
    image({ href, title, text }: Tokens.Image) {
      const url = safeUrl(href);
      if (!url) return escapeHtml(text);
      const titleAttribute = title ? ` title="${escapeHtml(title)}"` : '';
      return `<img src="${escapeHtml(url)}" alt="${escapeHtml(text)}"${titleAttribute}>`;
    },
  },
});

export function renderMarkdown(source: string, inline = false) {
  return inline
    ? markdown.parseInline(source, { async: false })
    : markdown.parse(source, { async: false });
}
