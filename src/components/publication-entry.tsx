import { publicationTypes, type Publication } from '@/lib/content-types';
import { citationMarkdown, doiUrl, formatDate, paperUrl } from '@/lib/publications';
import { withBasePath } from '@/lib/site';
import { InlineMarkdown } from './markdown-text';
import { SiteImage } from './site-image';

// One publication on the Publications page. It has no server-only imports so
// the admin prototype can preview an unsaved record with the same markup.
export function PublicationEntry({ item }: { item: Publication }) {
  const href = paperUrl(item);
  const links = [
    { label: 'Paper', href: item.url || (item.type === 'preprint' ? '' : doiUrl(item.doi)) },
    { label: 'PDF', href: item.pdf && withBasePath(item.pdf) },
    { label: 'PubMed', href: item.pubmedUrl },
    { label: 'Preprint', href: item.preprintUrl },
  ].filter((link) => link.href);
  return (
    <article className="publication" id={item.id || undefined}>
      <a
        className={`publication-figure${item.image?.src ? '' : ' is-placeholder'}`}
        href={href || undefined}
        tabIndex={-1}
        aria-hidden={item.image ? undefined : true}
      >
        {item.image?.src ? (
          <SiteImage image={item.image} />
        ) : (
          <span className="publication-placeholder">
            <img src={withBasePath('/images/iyer-lab-emblem.svg')} alt="" />
            <span>{item.journal || 'Iyer Lab'}</span>
          </span>
        )}
      </a>
      <div className="publication-details">
        <p className="publication-meta">
          {item.journal && <span className="publication-journal">{item.journal}</span>}
          {item.type !== 'article' && (
            <span className="publication-type">{publicationTypes[item.type]}</span>
          )}
          {item.date && <time dateTime={item.date}>{formatDate(item.date)}</time>}
        </p>
        <h3 className="publication-heading">
          {href ? (
            <a href={href}>
              <InlineMarkdown>{item.title}</InlineMarkdown>
            </a>
          ) : (
            <InlineMarkdown>{item.title}</InlineMarkdown>
          )}
        </h3>
        <p className="publication-authors">
          <InlineMarkdown>{item.authors}</InlineMarkdown>
        </p>
        <p className="publication-citation">
          <InlineMarkdown>{citationMarkdown(item)}</InlineMarkdown>
        </p>
        {item.description && (
          <p className="publication-description">
            <InlineMarkdown>{item.description}</InlineMarkdown>
          </p>
        )}
        {links.length > 0 && (
          <p className="publication-links">
            {links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </p>
        )}
      </div>
    </article>
  );
}
