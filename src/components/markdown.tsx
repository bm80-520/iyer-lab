import { getMarkdown } from '@/lib/content';

export { InlineMarkdown } from './markdown-text';

export async function Markdown({ file, className = '' }: { file: string; className?: string }) {
  return (
    <div
      className={`prose ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: await getMarkdown(file) }}
    />
  );
}
