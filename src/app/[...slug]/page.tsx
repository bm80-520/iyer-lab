import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pages, getPageHtml } from '@/lib/content';
import { NewsList } from '@/components/news-list';

type Props = { params: Promise<{ slug: string[] }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map(page => ({ slug: page.slug.split('/') }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages.find(page => page.slug === slug.join('/'))?.title || 'Page not found' };
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = pages.find(page => page.slug === slug.join('/'));
  if (!page) notFound();
  return <div className="page-shell">
    <header className="page-heading"><p className="eyebrow">{page.kind === 'news' ? 'Life in the lab' : 'Iyer Laboratory'}</p><h1>{page.title}</h1>{page.date && <time dateTime={page.date}>{page.date}</time>}</header>
    {page.slug === 'lab-news' ? <NewsList /> : <div className="prose" dangerouslySetInnerHTML={{ __html: await getPageHtml(page.file) }} />}
  </div>;
}
