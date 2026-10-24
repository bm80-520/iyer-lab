import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pages } from '@/lib/content';
import {
  ResearchPage,
  ProjectPage,
  PrimerPage,
  TeamPage,
  PublicationsPage,
  ResourcesPage,
  RecruitmentPage,
  NewsPage,
  NewsArticle,
  ProtectedResourcesPage,
} from '@/components/site-pages';

type Props = { params: Promise<{ slug: string[] }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return pages.filter((page) => page.slug).map((page) => ({ slug: page.slug.split('/') }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages.find((page) => page.slug === slug.join('/'))?.title };
}
export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const route = slug.join('/');
  switch (route) {
    case 'research':
      return <ResearchPage />;
    case 'research/primer':
      return <PrimerPage />;
    case 'research/lysosomal-projects':
      return <ProjectPage kind="lysosomal" />;
    case 'research/microglia-and-brain-disorders':
      return <ProjectPage kind="disorders" />;
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
    case 'iyer-lab-resources':
      return <ProtectedResourcesPage />;
    default:
      if (pages.some((page) => page.slug === route && page.kind === 'news'))
        return <NewsArticle slug={route} />;
  }
  notFound();
}
