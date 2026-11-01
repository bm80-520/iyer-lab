import { renderMarkdown } from '@/lib/markdown';

// Markdown from a string rather than a file, so the admin previews can render
// the same output as the public pages while a form is being edited.
export function InlineMarkdown({ children }: { children: string }) {
  return <span dangerouslySetInnerHTML={{ __html: renderMarkdown(children, true) }} />;
}

export function MarkdownText({ source, className = '' }: { source: string; className?: string }) {
  return (
    <div
      className={`prose ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: renderMarkdown(source) }}
    />
  );
}
