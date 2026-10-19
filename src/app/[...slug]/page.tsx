import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pages } from '@/lib/content';
import { OriginalPage } from '@/components/original-page';

type Props = { params: Promise<{ slug: string[] }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return pages.filter(page => page.slug).map(page => ({ slug: page.slug.split('/') }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages.find(page => page.slug === slug.join('/'))?.title };
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = pages.find(page => page.slug === slug.join('/'));
  if (!page) notFound();
  return <OriginalPage page={page} />;
}
