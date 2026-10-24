import { getMarkdown, renderMarkdown } from '@/lib/content';

export async function Markdown({ file, className = '' }: { file: string; className?: string }) {
  return (
    <div
      className={`prose ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: await getMarkdown(file) }}
    />
  );
}

export function InlineMarkdown({ children }: { children: string }) {
  return <span dangerouslySetInnerHTML={{ __html: renderMarkdown(children, true) }} />;
}
