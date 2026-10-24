import Link from 'next/link';
import { Markdown, InlineMarkdown } from './markdown';
import { SiteImage, type ImageData } from './site-image';

type ResearchItem = {
  id: string;
  title: string;
  image: ImageData;
  body: string;
  link?: { label: string; href: string };
};

export function ResearchRows({ items }: { items: ResearchItem[] }) {
  return (
    <div className="research-rows">
      {items.map((item) => (
        <section className="research-row" key={item.id}>
          <div className="research-image">
            <SiteImage image={item.image} />
          </div>
          <div className="research-description">
            <h2>{item.title}</h2>
            <Markdown file={item.body} />
            {item.link && (
              <div className="button-row">
                <Link className="button" href={item.link.href}>
                  {item.link.label}
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

type Publication = { authors: string; title: string; citation: string };
export function PublicationList({ items }: { items: Publication[] }) {
  return (
    <ul className="publication-list">
      {items.map((item) => (
        <li key={item.title}>
          <InlineMarkdown>{item.authors}</InlineMarkdown>{' '}
          <span className="publication-title">
            <InlineMarkdown>{item.title}</InlineMarkdown>
          </span>{' '}
          <InlineMarkdown>{item.citation}</InlineMarkdown>
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
