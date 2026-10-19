import Link from 'next/link';
import { getNews } from '@/lib/content';

export function NewsList({ limit }: { limit?: number }) {
  return <div className="news-list">{getNews().slice(0, limit).map(page => <article key={page.slug}>
    {page.date && <time dateTime={page.date}>{new Date(`${page.date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time>}
    <h2><Link href={`/${page.slug}/`}>{page.title}</Link></h2>
  </article>)}</div>;
}
