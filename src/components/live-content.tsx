'use client';

// The parts of public pages managed in the dashboard. Each renders the
// content baked in at build time, then the latest published content from
// Supabase (see useLiveContent), so dashboard changes appear without a rebuild.
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type {
  NewsItem,
  Publication,
  ResearchArea,
  SiteText,
  TeamMember,
} from '@/lib/content-types';
import { getPublicClient } from '@/lib/cms/client';
import { cmsEnabled } from '@/lib/cms/config';
import { useLiveContent } from '@/lib/cms/live';
import {
  fetchNews,
  fetchNewsArticle,
  fetchPublications,
  fetchResearch,
  fetchSiteText,
  fetchTeam,
} from '@/lib/cms/public-queries';
import { formatDate, groupByYear } from '@/lib/publications';
import { safeUrl } from '@/lib/markdown';
import {
  BackLink,
  JumpNav,
  PublicationList,
  ResearchProject,
  RuledHeading,
} from './content-sections';
import { MarkdownText } from './markdown-text';
import { NewsCard } from './news-card';
import { NewsGrid } from './news-grid';
import { PublicationEntry } from './publication-entry';
import { SiteImage } from './site-image';
import { TeamProfile, splitTeam } from './team-profile';

export const useSiteText = (initial: SiteText) =>
  useLiveContent('site text', initial, fetchSiteText);

/** One passage of editable page text (see src/lib/cms/site-text.ts). */
export function SiteTextBlock({
  textKey,
  initial,
  format,
}: {
  textKey: string;
  initial: SiteText;
  format: 'markdown' | 'lines' | 'text';
}) {
  const value = useSiteText(initial)[textKey] ?? '';
  if (format === 'markdown') return <MarkdownText source={value} />;
  if (format === 'text') return <>{value}</>;
  return value
    .split('\n')
    .filter((line) => line.trim())
    .map((line) => <p key={line}>{line}</p>);
}

export function HomePublications({ initial }: { initial: Publication[] }) {
  const items = useLiveContent('publications', initial, fetchPublications);
  return <PublicationList items={items.filter((item) => item.selected).slice(0, 3)} />;
}

export function PublicationsByYear({ initial }: { initial: Publication[] }) {
  const years = groupByYear(useLiveContent('publications', initial, fetchPublications));
  return (
    <>
      <JumpNav
        id="publication-years"
        label="Jump to year"
        items={years.map(({ year }) => ({ id: `year-${year}`, label: year }))}
      />
      <div className="publications-sections">
        {years.map(({ year, items }) => (
          <section className="publication-year" id={`year-${year}`} key={year}>
            <RuledHeading>{year}</RuledHeading>
            {items.map((item) => (
              <PublicationEntry item={item} key={item.id} />
            ))}
            <BackLink href="#publication-years">Back to years</BackLink>
          </section>
        ))}
      </div>
    </>
  );
}

export function ResearchOverviewText({ initial }: { initial: SiteText }) {
  const text = useSiteText(initial);
  return (
    <>
      <h2>{text['research.overview.title']}</h2>
      <MarkdownText source={text['research.overview.body'] ?? ''} />
    </>
  );
}

export function ResearchTopics({ initial, title }: { initial: ResearchArea[]; title: string }) {
  const areas = useLiveContent('research', initial, fetchResearch);
  return (
    <>
      <nav className="research-topics" id="research-topics" aria-labelledby="research-topics-title">
        <h2 id="research-topics-title">{title}</h2>
        <div className="topic-cards">
          {areas.map((area) => (
            <div className="topic-card" key={area.id}>
              <a className="topic-image" href={`#${area.slug}`} tabIndex={-1} aria-hidden="true">
                {area.image && <SiteImage image={area.image} />}
              </a>
              <div>
                <h3>
                  <a href={`#${area.slug}`}>{area.title}</a>
                </h3>
                <ul>
                  {area.projects.map((project) => (
                    <li key={project.id}>
                      <a href={`#${project.slug}`}>{project.navLabel}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </nav>
      {areas.map((area) => (
        <section className="research-topic" id={area.slug} key={area.id}>
          <RuledHeading>{area.title}</RuledHeading>
          {area.introduction && <MarkdownText source={area.introduction} />}
          {area.projects.map((project) => (
            <ResearchProject item={project} key={project.id} />
          ))}
          <BackLink href="#research-topics">Back to research topics</BackLink>
        </section>
      ))}
    </>
  );
}

export function TeamList({ initial }: { initial: TeamMember[] }) {
  const { current, alumni } = splitTeam(useLiveContent('team', initial, fetchTeam));
  const profiles = (members: TeamMember[]) => (
    <div className="team-list">
      {members.map((member) => (
        <TeamProfile key={member.id} member={member} bio={<MarkdownText source={member.bio} />} />
      ))}
    </div>
  );
  return (
    <>
      {profiles(current)}
      {alumni.length > 0 && (
        <section className="team-alumni">
          <RuledHeading>Alumni</RuledHeading>
          {profiles(alumni)}
        </section>
      )}
    </>
  );
}

export function NewsList({ initial }: { initial: NewsItem[] }) {
  const news = useLiveContent('news', initial, fetchNews);
  // CSS masonry follows source reading order across columns rather than down
  // newspaper columns, so adding one record keeps chronology easy to follow.
  // The key re-runs the masonry layout when the list changes.
  return (
    <NewsGrid key={news.map((item) => item.id).join(' ')}>
      {news.map((item) => (
        <NewsCard item={item} key={item.id} />
      ))}
    </NewsGrid>
  );
}

export function NewsArticleView({ item }: { item: NewsItem }) {
  const image = item.articleImage ?? item.image;
  const external = item.externalUrl && safeUrl(item.externalUrl);
  return (
    <div className="container page-content article-content news-article">
      <article>
        {image && (
          <a href={item.image?.src ?? image.src}>
            <SiteImage image={image} eager />
          </a>
        )}
        <h1>{item.title}</h1>
        <time dateTime={item.date}>{formatDate(item.date)}</time>
        {item.body && <MarkdownText source={item.body} />}
        {external && (
          <p>
            <a href={external}>{item.externalLinkText || item.externalUrl}</a>
          </p>
        )}
      </article>
    </div>
  );
}

function Unavailable() {
  return (
    <div className="container page-content">
      <h1>This news item is no longer available</h1>
      <p>
        <Link href="/lab-news/">See all lab news</Link>
      </p>
    </div>
  );
}

/** A prebuilt article page, kept in step with the dashboard. */
export function LiveNewsArticle({ initial }: { initial: NewsItem }) {
  const item = useLiveContent(`news ${initial.slug}`, initial as NewsItem | null, (client) =>
    fetchNewsArticle(client, initial.slug),
  );
  return item ? <NewsArticleView item={item} /> : <Unavailable />;
}

/**
 * Articles published after the last deployment have no prebuilt page, so the
 * host serves the 404 page for them. It looks the address up here and shows
 * the article when one exists.
 */
export function NewsArticleLookup({ fallback }: { fallback: React.ReactNode }) {
  const [state, setState] = useState<{ item: NewsItem | null; done: boolean }>({
    item: null,
    done: !cmsEnabled,
  });
  useEffect(() => {
    if (!cmsEnabled) return;
    const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const path = decodeURIComponent(window.location.pathname.slice(base.length));
    const slug = /^\/([a-z0-9][a-z0-9-]*)\/?$/.exec(path)?.[1];
    if (!slug) {
      setState({ item: null, done: true });
      return;
    }
    fetchNewsArticle(getPublicClient(), slug)
      .then((item) => {
        if (item) document.title = `${item.title} – Iyer Lab`;
        setState({ item, done: true });
      })
      .catch(() => setState({ item: null, done: true }));
  }, []);
  if (!state.done) return <div className="container page-content" aria-busy="true" />;
  return state.item ? <NewsArticleView item={state.item} /> : fallback;
}
