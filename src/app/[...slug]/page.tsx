import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPages } from '@/lib/content';
import {
  ResearchPage,
  PrimerPage,
  TeamPage,
  PublicationsPage,
  ResourcesPage,
  RecruitmentPage,
  NewsPage,
  NewsArticle,
} from '@/components/site-pages';

type Props = { params: Promise<{ slug: string[] }> };
export const dynamicParams = false;
export async function generateStaticParams() {
  return (await getPages())
    .filter((page) => page.slug)
    .map((page) => ({ slug: page.slug.split('/') }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: (await getPages()).find((page) => page.slug === slug.join('/'))?.title };
}
export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const route = slug.join('/');
  switch (route) {
    case 'research':
      return <ResearchPage />;
    case 'research/primer':
      return <PrimerPage />;
    case 'team':
      return <TeamPage />;
    case 'publications':
      return <PublicationsPage />;
    case 'resources':
      return <ResourcesPage />;
    case 'join-our-shoal':
      return <RecruitmentPage />;
    case 'lab-news':
      return <NewsPage />;
    default:
      if ((await getPages()).some((page) => page.slug === route && page.kind === 'news'))
        return <NewsArticle slug={route} />;
  }
  notFound();
}
