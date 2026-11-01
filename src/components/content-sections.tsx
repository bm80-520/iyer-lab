import Link from 'next/link';
import { InlineMarkdown, MarkdownText } from './markdown-text';
import { SiteImage } from './site-image';
import type { Publication, ResearchProject as ResearchProjectItem } from '@/lib/content-types';
import { citationMarkdown } from '@/lib/publications';

// One research question on the Research page: its figure, description, and
// any papers linked to it in the dashboard (none are linked at present).
export function ResearchProject({ item }: { item: ResearchProjectItem }) {
  return (
    <article className="research-row research-project" id={item.slug}>
      <div className="research-image">{item.image && <SiteImage image={item.image} />}</div>
      <div className="research-description">
        <h3>{item.title}</h3>
        <MarkdownText source={item.body} />
        {item.publications.length > 0 && (
          <p className="related-publications">
            <span>Related publication{item.publications.length > 1 ? 's' : ''}:</span>{' '}
            {item.publications.map((publication, index) => (
              <span key={publication.id}>
                {index > 0 && '; '}
                <Link href={`/publications/#${publication.id}`}>
                  <InlineMarkdown>{publication.title}</InlineMarkdown>
                </Link>{' '}
                ({publication.journal} {publication.date.slice(0, 4)})
              </span>
            ))}
          </p>
        )}
      </div>
    </article>
  );
}

// In-page links to the sections of a long page (publication years).
export function JumpNav({
  id,
  label,
  items,
}: {
  id: string;
  label: string;
  items: { id: string; label: string }[];
}) {
  return (
    <nav className="jump-nav" id={id} aria-label={label}>
      <span className="jump-nav-label">{label}</span>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <p className="back-link">
      <a href={href}>
        <span aria-hidden="true">↑</span> {children}
      </a>
    </p>
  );
}

function linkedCitation(item: Publication) {
  const links = [
    item.pdf && `\\[[PDF](${item.pdf})\\]`,
    item.pubmedUrl && `\\[[PubMed](${item.pubmedUrl})\\]`,
    item.preprintUrl && `\\[[Preprint](${item.preprintUrl})\\]`,
  ];
  return [citationMarkdown(item), ...links].filter(Boolean).join(' ');
}

export function PublicationList({ items }: { items: Publication[] }) {
  return (
    <ul className="publication-list">
      {items.map((item) => (
        <li key={item.id}>
          <InlineMarkdown>{item.authors}</InlineMarkdown>{' '}
          <span className="publication-title">
            <InlineMarkdown>{item.title}</InlineMarkdown>
          </span>{' '}
          <InlineMarkdown>{linkedCitation(item)}</InlineMarkdown>
        </li>
      ))}
    </ul>
  );
}

export function RuledHeading({ children, href }: { children: React.ReactNode; href?: string }) {
  return (
    <div className="ruled-heading">
      <h2>{href ? <Link href={href}>{children}</Link> : children}</h2>
      <span aria-hidden="true" />
    </div>
  );
}
