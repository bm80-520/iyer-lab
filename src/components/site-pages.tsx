import Link from 'next/link';
import home from '../../content/data/home.json';
import research from '../../content/data/research.json';
import primer from '../../content/data/primer.json';
import lysosomal from '../../content/data/lysosomal-projects.json';
import disorders from '../../content/data/microglia-and-brain-disorders.json';
import team from '../../content/data/team.json';
import publications from '../../content/data/publications.json';
import resources from '../../content/data/resources.json';
import recruitment from '../../content/data/recruitment.json';
import protectedResources from '../../content/data/protected-resources.json';
import { news } from '@/lib/content';
import { Gallery } from './gallery';
import { Slideshow } from './slideshow';
import { SiteImage } from './site-image';
import { Markdown } from './markdown';
import { PublicationList, ResearchRows, RuledHeading } from './content-sections';
import { NewsGrid } from './news-grid';
import { withBasePath } from '@/lib/site';

export function HomePage() {
  return (
    <>
      <Slideshow images={home.slides} />
      <div className="research-cards">
        {research.items.map((item, index) => (
          <Link key={item.id} className="research-card" href={item.link!.href}>
            <SiteImage image={home.researchImages[index]} eager />
            <h3>{item.title}</h3>
          </Link>
        ))}
      </div>
      <div className="container page-content home-columns">
        <section>
          <RuledHeading href="/resources/">Resources</RuledHeading>
          <ul className="resource-links">
            {resources.sections.map((section) => (
              <li key={section.id}>
                <Link href={`/resources/#${section.id}`}>{section.title}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <RuledHeading href="/publications/">Publications</RuledHeading>
          <PublicationList items={publications.sections[0].items.slice(0, 3)} />
          <div className="button-row button-right">
            <Link href="/publications/" className="button button-small">
              All Publications
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export function ResearchPage() {
  return (
    <div className="container page-content research-page">
      <Gallery images={research.gallery} hideOnMobile />
      <ResearchRows items={research.items} />
    </div>
  );
}

export function ProjectPage({ kind }: { kind: 'lysosomal' | 'disorders' }) {
  return (
    <div className="container page-content article-content project-page">
      <ResearchRows items={(kind === 'lysosomal' ? lysosomal : disorders).items} />
    </div>
  );
}

export function PrimerPage() {
  return (
    <div className="container page-content article-content primer-page">
      {primer.items.map((item) => (
        <section className={`primer-section${item.reverse ? ' is-reversed' : ''}`} key={item.id}>
          <div className="primer-image">
            <SiteImage image={item.image} />
          </div>
          <Markdown file={item.body} />
        </section>
      ))}
    </div>
  );
}

export function TeamPage() {
  return (
    <div className="container page-content">
      <Gallery images={team.gallery} />
      <div className="team-list">
        {team.members.map((member) => (
          <section className="team-profile" key={member.id}>
            <div className="profile-image">
              <SiteImage image={member.image} />
            </div>
            <div className="profile-description">
              <div className="profile-name">
                {member.name}
                <br />
                {member.role}
              </div>
              <div>Joined: {member.joined}</div>
              {member.email && <div>{member.email}</div>}
              <div className="profile-links">
                {member.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href.startsWith('/') ? withBasePath(link.href) : link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="profile-bio">
                <Markdown file={member.body} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function PublicationsPage() {
  return (
    <div className="container page-content publications-page">
      <Gallery images={publications.gallery} />
      <div className="publications-sections">
        {publications.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <PublicationList items={section.items} />
          </section>
        ))}
      </div>
    </div>
  );
}

export function ResourcesPage() {
  return (
    <div className="container page-content resources-page">
      <Gallery images={resources.gallery} />
      {resources.sections.map((section) => (
        <section className="resource-section" id={section.id} key={section.id}>
          <div className="resource-image">
            <SiteImage image={section.image} />
          </div>
          <div>
            <RuledHeading>{section.title}</RuledHeading>
            <Markdown file={section.body} />
          </div>
        </section>
      ))}
    </div>
  );
}

export function RecruitmentPage() {
  return (
    <div className="container page-content">
      <Gallery images={recruitment.gallery} />
      <div className="opportunity-grid">
        {recruitment.opportunities.map((item) => (
          <section className="opportunity" key={item.id} tabIndex={0}>
            <div className="opportunity-front" aria-hidden="true" />
            <div className="opportunity-copy">
              <Markdown file={item.body} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function NewsPage() {
  // CSS masonry follows source reading order across columns rather than down
  // newspaper columns, so adding one record keeps chronology easy to follow.
  return (
    <>
      <NewsGrid>
        {news.map((item) => (
          <article className="news-card" key={item.id}>
            <SiteImage image={item.image} eager />
            <div className="news-caption">
              <h3>{item.title}</h3>
              <time>{item.date}</time>
            </div>
          </article>
        ))}
      </NewsGrid>
      <a className="load-more" href="https://iyerlaboratory.org/lab-news/">
        Load more
      </a>
      <div className="news-bottom-space" />
    </>
  );
}

export function NewsArticle({ slug }: { slug: string }) {
  const item = news.find((item) => item.slug === slug)!;
  return (
    <div className="container page-content article-content news-article">
      <article>
        {item.articleImage && (
          <a href={withBasePath(item.image.src)}>
            <SiteImage image={item.articleImage} eager />
          </a>
        )}
        <h1>{item.title}</h1>
        <time>{item.date}</time>
        {item.body && <Markdown file={item.body} />}
      </article>
    </div>
  );
}

export function ProtectedResourcesPage() {
  return (
    <div className="container page-content protected-resources">
      <form action={protectedResources.action} method="post">
        <input type="hidden" name="redirect_to" value={protectedResources.redirect} />
        <p>{protectedResources.notice}</p>
        <p>
          <label>
            {protectedResources.passwordLabel}{' '}
            <input type="password" name="post_password" required />
          </label>
          <input type="submit" value={protectedResources.submitLabel} />
        </p>
      </form>
    </div>
  );
}
