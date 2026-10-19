import { getPageHtml, pages } from '@/lib/content';
import { withBasePath } from '@/lib/site';
import { OriginalPresentation } from './original-presentation';

type Page = (typeof pages)[number];

export async function OriginalPage({ page }: { page: Page }) {
  return <>
    {page.styles.map(href => <link key={href} rel="stylesheet" href={withBasePath(href)} precedence="original" />)}
    <div id="wrap_all" dangerouslySetInnerHTML={{ __html: await getPageHtml(page.file) }} />
    <OriginalPresentation htmlClass={page.htmlClass} bodyClass={page.bodyClass} />
  </>;
}
