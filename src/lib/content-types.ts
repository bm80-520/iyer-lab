// Record shapes the public pages render. The database rows (see
// src/lib/cms/mappers.ts) and the repository's fallback JSON (see
// src/lib/cms/fallback.ts) are both converted into these shapes, so page
// components do not depend on where content is stored.
import type { ImageData } from '@/components/site-image';

export type { ImageData };
export type LinkData = { label: string; href: string };

export const publicationTypes = {
  article: 'Research article',
  review: 'Review',
  methods: 'Methods',
  perspective: 'Perspective',
  preprint: 'Preprint',
  chapter: 'Book chapter',
  other: 'Other',
} as const;
export type PublicationType = keyof typeof publicationTypes;

export type Publication = {
  /** Anchor on the Publications page (/publications/#id). */
  id: string;
  type: PublicationType;
  /** Shown on the homepage (newest three). */
  selected: boolean;
  /** ISO date (YYYY-MM-DD); the publication year is derived from it. */
  date: string;
  title: string;
  /** Markdown: lab members are wrapped in **bold**. */
  authors: string;
  journal: string;
  /** Year, volume, issue, and pages as printed, e.g. "2024. 137(4): jcs261616." */
  citation: string;
  doi: string;
  pmid: string;
  pmcid: string;
  url: string;
  pubmedUrl: string;
  preprintUrl: string;
  pdf: string;
  image: ImageData | null;
  description: string;
};

export type NewsItem = {
  id: string;
  /** The article lives at /slug/. */
  slug: string;
  title: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  category: string;
  /** Markdown. Items with an external link and no text open the link instead of an article. */
  body: string;
  image: ImageData | null;
  /** Wider crop for the article page; the card image is used when absent. */
  articleImage: ImageData | null;
  externalUrl: string;
  externalLinkText: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  joined: string;
  email: string;
  links: LinkData[];
  image: ImageData | null;
  /** Markdown biography. */
  bio: string;
  interests: string;
  status: 'current' | 'alumni';
};

export type ResearchProject = {
  id: string;
  /** Anchor on the Research page (/research/#slug). */
  slug: string;
  title: string;
  /** Short label in the Research Topics navigation. */
  navLabel: string;
  /** Markdown. */
  body: string;
  image: ImageData | null;
  publications: Publication[];
};

export type ResearchArea = {
  id: string;
  slug: string;
  title: string;
  /** Optional Markdown under the section heading. */
  introduction: string;
  image: ImageData | null;
  projects: ResearchProject[];
};

/** Editable page text by key (see src/lib/cms/site-text.ts). */
export type SiteText = Record<string, string>;

/** Everything the CMS manages, as the public pages need it. */
export type SiteContent = {
  publications: Publication[];
  team: TeamMember[];
  news: NewsItem[];
  research: ResearchArea[];
  text: SiteText;
};
