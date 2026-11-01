'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { explain, listRows, type ContentTable } from '@/lib/cms/admin';
import { useMedia } from './media-context';
import { plain } from './shared';

type Entry = {
  id: string;
  table: ContentTable;
  title: string;
  status: string;
  updated_at: string;
  deleted_at: string | null;
};

const sections: Record<ContentTable, { label: string; href: string }> = {
  publications: { label: 'Publication', href: '/admin/publications/' },
  team_members: { label: 'Team member', href: '/admin/team/' },
  news: { label: 'News', href: '/admin/news/' },
  research_areas: { label: 'Research area', href: '/admin/research/' },
  research_projects: { label: 'Research project', href: '/admin/research/' },
};

function EntryList({ entries, empty }: { entries: Entry[]; empty: string }) {
  if (!entries.length) return <p className="admin-hint">{empty}</p>;
  return (
    <ul className="admin-entry-list">
      {entries.map((entry) => (
        <li key={`${entry.table}-${entry.id}`}>
          <Link
            href={`${sections[entry.table].href}${entry.table.startsWith('research') ? '' : `?edit=${entry.id}`}`}
          >
            {entry.title}
          </Link>
          <span className="admin-hint">
            {' '}
            {sections[entry.table].label} ·{' '}
            {new Date(entry.updated_at).toLocaleDateString('en-US', { dateStyle: 'medium' })}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Overview() {
  const { media } = useMedia();
  const [data, setData] = useState<{ counts: Record<string, number>; entries: Entry[] } | null>(
    null,
  );
  const [problem, setProblem] = useState('');
  useEffect(() => {
    Promise.all([
      listRows('publications'),
      listRows('team_members'),
      listRows('news'),
      listRows('research_areas'),
      listRows('research_projects'),
    ])
      .then(([publications, team, news, areas, projects]) => {
        const live = <T extends { status: string; deleted_at: string | null }>(rows: T[]) =>
          rows.filter((row) => row.status === 'published' && !row.deleted_at);
        setData({
          counts: {
            publications: live(publications).length,
            team: live(team).filter((member) => member.member_status === 'current').length,
            news: live(news).length,
            research: live(projects).length,
          },
          entries: [
            ...publications.map((row) => ({
              ...row,
              table: 'publications' as const,
              title: plain(row.title),
            })),
            ...team.map((row) => ({ ...row, table: 'team_members' as const, title: row.name })),
            ...news.map((row) => ({ ...row, table: 'news' as const, title: row.title })),
            ...areas.map((row) => ({ ...row, table: 'research_areas' as const, title: row.title })),
            ...projects.map((row) => ({
              ...row,
              table: 'research_projects' as const,
              title: row.nav_label || plain(row.title),
            })),
          ].sort((a, b) => b.updated_at.localeCompare(a.updated_at)),
        });
      })
      .catch((failure) => setProblem(explain(failure)));
  }, []);

  const cards = [
    {
      href: '/admin/publications/',
      add: '/admin/publications/?new',
      title: 'Publications',
      count: data?.counts.publications,
      text: 'published papers',
      action: 'Add publication',
    },
    {
      href: '/admin/team/',
      add: '/admin/team/?new',
      title: 'Team',
      count: data?.counts.team,
      text: 'current members on the Team page',
      action: 'Add team member',
    },
    {
      href: '/admin/news/',
      add: '/admin/news/?new',
      title: 'Lab News',
      count: data?.counts.news,
      text: 'published news items',
      action: 'Post news',
    },
    {
      href: '/admin/media/',
      add: '/admin/media/',
      title: 'Media Library',
      count: media.length,
      text: 'uploaded images and PDFs',
      action: 'Upload files',
    },
  ];
  const drafts =
    data?.entries.filter((entry) => entry.status === 'draft' && !entry.deleted_at) ?? [];
  return (
    <section>
      <div className="admin-toolbar">
        <h2>Overview</h2>
      </div>
      {problem && (
        <p className="admin-error" role="alert">
          {problem}
        </p>
      )}
      <div className="admin-overview">
        {cards.map((card) => (
          <div className="admin-overview-card" key={card.title}>
            <Link href={card.href}>
              <h3>{card.title}</h3>
            </Link>
            <p>
              <span className="admin-count">{card.count ?? '…'}</span> {card.text}
            </p>
            <Link className="button button-small" href={card.add}>
              {card.action}
            </Link>
          </div>
        ))}
      </div>
      <div className="admin-overview-lists">
        <section className="admin-panel">
          <h3>Drafts awaiting publication</h3>
          {data ? (
            <EntryList entries={drafts} empty="No drafts: everything is published." />
          ) : (
            <p className="admin-hint">Loading…</p>
          )}
        </section>
        <section className="admin-panel">
          <h3>Recently updated</h3>
          {data ? (
            <EntryList entries={data.entries.slice(0, 8)} empty="Nothing yet." />
          ) : (
            <p className="admin-hint">Loading…</p>
          )}
        </section>
      </div>
    </section>
  );
}
