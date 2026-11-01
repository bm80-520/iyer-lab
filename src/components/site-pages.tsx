import Link from 'next/link';
import home from '../../content/data/home.json';
import research from '../../content/data/research.json';
import primer from '../../content/data/primer.json';
import team from '../../content/data/team.json';
import publicationData from '../../content/data/publications.json';
import resources from '../../content/data/resources.json';
import recruitment from '../../content/data/recruitment.json';
import { loadSiteContent } from '@/lib/cms/snapshot';
import { recruitmentKeys, resourceTextKey } from '@/lib/cms/site-text';
import { Gallery } from './gallery';
import { Slideshow } from './slideshow';
import { SiteImage } from './site-image';
import { Markdown } from './markdown';
import { RuledHeading } from './content-sections';
import {
  HomePublications,
  LiveNewsArticle,
  NewsList,
  PublicationsByYear,
  ResearchOverviewText,
  ResearchTopics,
  SiteTextBlock,
  TeamList,
} from './live-content';

// Page layouts. Images, galleries and page structure come from content/data;
// the content managed in the dashboard comes from the build-time snapshot and
// is refreshed in the browser by the components in live-content.tsx.

export async function HomePage() {
  const content = await loadSiteContent();
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
          <HomePublications initial={content.publications} />
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

export async function ResearchPage() {
  const content = await loadSiteContent();
  const { overview } = research;
  return (
    <div className="container page-content research-page">
      <Gallery images={research.gallery} hideOnMobile />
      <section className="research-row research-overview">
        <div className="research-image">
          <SiteImage image={overview.image} />
        </div>
        <div className="research-description">
          <ResearchOverviewText initial={content.text} />
          <div className="button-row">
            <Link className="button" href={overview.link.href}>
              {overview.link.label}
            </Link>
          </div>
        </div>
      </section>
      <ResearchTopics initial={content.research} title={research.topicsTitle} />
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

export async function TeamPage() {
  const content = await loadSiteContent();
  return (
    <div className="container page-content">
      <Gallery images={team.gallery} />
      <TeamList initial={content.team} />
    </div>
  );
}

export async function PublicationsPage() {
  const content = await loadSiteContent();
  return (
    <div className="container page-content publications-page">
      <Gallery images={publicationData.gallery} />
      <PublicationsByYear initial={content.publications} />
    </div>
  );
}

export async function ResourcesPage() {
  const content = await loadSiteContent();
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
            <SiteTextBlock
              textKey={resourceTextKey(section.id)}
              initial={content.text}
              format="markdown"
            />
          </div>
        </section>
      ))}
    </div>
  );
}

export async function RecruitmentPage() {
  const content = await loadSiteContent();
  return (
    <div className="container page-content">
      <Gallery images={recruitment.gallery} />
      <div className="opportunity-grid">
        {recruitment.opportunities.map((item, index) => (
          <section className="opportunity" key={item.id} tabIndex={0}>
            <div className="opportunity-front">
              <SiteImage image={item.image} />
            </div>
            <div className="opportunity-copy">
              <SiteTextBlock
                textKey={recruitmentKeys[index]}
                initial={content.text}
                format="markdown"
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export async function NewsPage() {
  const content = await loadSiteContent();
  return (
    <>
      <NewsList initial={content.news} />
      <a className="load-more" href="https://iyerlaboratory.org/lab-news/">
        Load more
      </a>
      <div className="news-bottom-space" />
    </>
  );
}

export async function NewsArticle({ slug }: { slug: string }) {
  const content = await loadSiteContent();
  return <LiveNewsArticle initial={content.news.find((item) => item.slug === slug)!} />;
}
