import Link from 'next/link';
import type { NewsItem } from '@/lib/content-types';
import { formatDate } from '@/lib/publications';
import { withBasePath } from '@/lib/site';
import { SiteImage } from './site-image';

/** Items with only an external link open it directly; others open their article page. */
export function newsHref(item: NewsItem) {
  return item.externalUrl && !item.body.trim() ? item.externalUrl : `/${item.slug}/`;
}

export function NewsCard({ item }: { item: NewsItem }) {
  const href = newsHref(item);
  const content = (
    <>
      {item.image ? (
        <SiteImage image={item.image} eager />
      ) : (
        <span className="news-placeholder">
          <img src={withBasePath('/images/iyer-lab-emblem.svg')} alt="" />
        </span>
      )}
      <div className="news-caption">
        {item.category && <span className="news-category">{item.category}</span>}
        <h3>{item.title}</h3>
        <time dateTime={item.date}>{formatDate(item.date)}</time>
      </div>
    </>
  );
  return (
    <article className="news-card">
      {!href ? (
        content
      ) : href.startsWith('/') ? (
        <Link className="news-card-link" href={href}>
          {content}
        </Link>
      ) : (
        <a className="news-card-link" href={href}>
          {content}
        </a>
      )}
    </article>
  );
}
