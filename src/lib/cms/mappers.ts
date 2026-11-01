// Database rows → the shapes public pages render (src/lib/content-types.ts).
// Used by the public queries and by the dashboard's previews, so a preview is
// produced by exactly the same conversion as the live page.
import type {
  ImageData,
  LinkData,
  NewsItem,
  Publication,
  PublicationType,
  ResearchArea,
  ResearchProject,
  TeamMember,
} from '../content-types';
import { publicBucket, publicFileUrl } from './config';
import type { Tables } from './database.types';

export type MediaRow = Tables<'media'>;
export type PublicationRow = Tables<'publications'>;
export type TeamMemberRow = Tables<'team_members'>;
export type NewsRow = Tables<'news'>;
export type ResearchAreaRow = Tables<'research_areas'>;
export type ResearchProjectRow = Tables<'research_projects'>;
export type SiteContentRow = Tables<'site_content'>;

/** Finds a media row by id (null when missing, private, or not visible). */
export type MediaLookup = (id: string | null) => MediaRow | null;

export function lookupFrom(rows: (MediaRow | null | undefined)[]): MediaLookup {
  const byId = new Map(rows.filter((row) => row).map((row) => [row!.id, row!]));
  return (id) => (id ? (byId.get(id) ?? null) : null);
}

export function isImage(media: MediaRow | null) {
  return Boolean(media?.file_type.startsWith('image/'));
}

/** Public URL of a file, or '' for private files. */
export function fileUrl(media: MediaRow | null) {
  return media && media.bucket === publicBucket ? publicFileUrl(media.storage_path) : '';
}

export function imageFrom(media: MediaRow | null, alt: string): ImageData | null {
  if (!media || !isImage(media) || media.bucket !== publicBucket) return null;
  return {
    src: publicFileUrl(media.storage_path),
    alt: alt.trim() || media.alt_text,
    width: media.width ?? undefined,
    height: media.height ?? undefined,
  };
}

export function publicationFromRow(row: PublicationRow, media: MediaLookup): Publication {
  return {
    id: row.slug,
    type: row.publication_type as PublicationType,
    selected: row.featured,
    date: row.publication_date,
    title: row.title,
    authors: row.authors,
    journal: row.journal,
    citation: row.citation,
    doi: row.doi,
    pmid: row.pmid,
    pmcid: row.pmcid,
    url: row.publication_url,
    pubmedUrl: row.pubmed_url,
    preprintUrl: row.preprint_url,
    pdf: fileUrl(media(row.pdf_id)),
    image: imageFrom(media(row.image_id), row.image_alt_text),
    description: row.abstract,
  };
}

export function teamMemberFromRow(row: TeamMemberRow, media: MediaLookup): TeamMember {
  return {
    id: row.slug,
    name: row.name,
    role: row.position,
    joined: row.joined,
    email: row.email,
    links: (Array.isArray(row.external_links) ? row.external_links : []) as LinkData[],
    image: imageFrom(media(row.photograph_id), row.photograph_alt_text || row.name),
    bio: row.biography,
    interests: row.research_interests,
    status: row.member_status === 'alumni' ? 'alumni' : 'current',
  };
}

export function newsFromRow(row: NewsRow, media: MediaLookup): NewsItem {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    date: row.publication_date,
    category: row.category,
    body: row.content,
    image: imageFrom(media(row.image_id), row.image_alt_text),
    articleImage: imageFrom(media(row.article_image_id), row.image_alt_text),
    externalUrl: row.external_url,
    externalLinkText: row.external_link_text,
  };
}

export function researchProjectFromRow(
  row: ResearchProjectRow,
  media: MediaLookup,
  publications: Publication[] = [],
): ResearchProject {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    navLabel: row.nav_label || row.title,
    body: row.main_content,
    image: imageFrom(media(row.image_id), row.image_alt_text),
    publications,
  };
}

export function researchAreaFromRow(
  row: ResearchAreaRow,
  media: MediaLookup,
  projects: ResearchProject[],
): ResearchArea {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    introduction: row.introductory_text,
    image: imageFrom(media(row.image_id), row.image_alt_text),
    projects,
  };
}
