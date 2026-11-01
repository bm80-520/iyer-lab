// Published content, read with the visitor (anon) client. Row Level Security
// already hides drafts and archived records from visitors; the explicit
// filters below keep the queries correct even if a privileged client is used.
import type { NewsItem, SiteContent, SiteText } from '../content-types';
import type { CmsClient } from './client';
import {
  lookupFrom,
  newsFromRow,
  publicationFromRow,
  researchAreaFromRow,
  researchProjectFromRow,
  teamMemberFromRow,
  type MediaRow,
  type PublicationRow,
} from './mappers';

const published = { status: 'published' } as const;

function check<T>({ data, error }: { data: T | null; error: { message: string } | null }) {
  if (error) throw new Error(error.message);
  return data!;
}

export async function fetchPublications(client: CmsClient) {
  const rows = check(
    await client
      .from('publications')
      .select('*, image:media!publications_image_id_fkey(*), pdf:media!publications_pdf_id_fkey(*)')
      .match(published)
      .is('deleted_at', null)
      .order('publication_date', { ascending: false })
      .order('display_order'),
  );
  return rows.map((row) => publicationFromRow(row, lookupFrom([row.image, row.pdf])));
}

export async function fetchTeam(client: CmsClient) {
  const rows = check(
    await client
      .from('team_members')
      .select('*, photograph:media!team_members_photograph_id_fkey(*)')
      .match(published)
      .is('deleted_at', null)
      .order('display_order')
      .order('name'),
  );
  return rows.map((row) => teamMemberFromRow(row, lookupFrom([row.photograph])));
}

const newsSelect =
  '*, image:media!news_image_id_fkey(*), article_image:media!news_article_image_id_fkey(*)';

export async function fetchNews(client: CmsClient) {
  const rows = check(
    await client
      .from('news')
      .select(newsSelect)
      .match(published)
      .is('deleted_at', null)
      .order('publication_date', { ascending: false })
      .order('created_at', { ascending: false }),
  );
  return rows.map((row) => newsFromRow(row, lookupFrom([row.image, row.article_image])));
}

/** One published article, or null when it does not exist or is unpublished. */
export async function fetchNewsArticle(client: CmsClient, slug: string): Promise<NewsItem | null> {
  const { data: row, error } = await client
    .from('news')
    .select(newsSelect)
    .eq('status', 'published')
    .eq('slug', slug)
    .is('deleted_at', null)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return row ? newsFromRow(row, lookupFrom([row.image, row.article_image])) : null;
}

export async function fetchResearch(client: CmsClient) {
  const areas = check(
    await client
      .from('research_areas')
      .select(
        `*, image:media!research_areas_image_id_fkey(*),
        projects:research_projects(*, image:media!research_projects_image_id_fkey(*),
          links:research_project_publications(display_order,
            publication:publications(*, image:media!publications_image_id_fkey(*),
              pdf:media!publications_pdf_id_fkey(*))))`,
      )
      .match(published)
      .is('deleted_at', null)
      .order('display_order')
      .order('display_order', { referencedTable: 'research_projects' }),
  );
  return areas.map((area) => {
    const projects = area.projects
      .filter((project) => project.status === 'published' && !project.deleted_at)
      .map((project) => {
        const publications = [...project.links]
          .sort((a, b) => a.display_order - b.display_order)
          .map((link) => link.publication as (PublicationRow & Record<string, unknown>) | null)
          .filter((row) => row && row.status === 'published' && !row.deleted_at)
          .map((row) =>
            publicationFromRow(
              row!,
              lookupFrom([row!.image as MediaRow | null, row!.pdf as MediaRow | null]),
            ),
          );
        return researchProjectFromRow(project, lookupFrom([project.image]), publications);
      });
    return researchAreaFromRow(area, lookupFrom([area.image]), projects);
  });
}

export async function fetchSiteText(client: CmsClient): Promise<SiteText> {
  const rows = check(await client.from('site_content').select('content_key, content_value'));
  return Object.fromEntries(rows.map((row) => [row.content_key, row.content_value]));
}

export async function fetchSiteContent(client: CmsClient): Promise<SiteContent> {
  const [publications, team, news, research, text] = await Promise.all([
    fetchPublications(client),
    fetchTeam(client),
    fetchNews(client),
    fetchResearch(client),
    fetchSiteText(client),
  ]);
  return { publications, team, news, research, text };
}
