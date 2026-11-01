// Reads the repository's content files (content/data and content/text) into
// the public page shapes. Two uses:
//   1. Building the site without Supabase settings (a fresh checkout).
//   2. scripts/import-content.ts, which copies this content into Supabase once.
// Only Node built-ins and type imports, so the import script can run this file
// directly with Node's TypeScript support.
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type {
  ImageData,
  NewsItem,
  Publication,
  ResearchArea,
  SiteContent,
  SiteText,
  TeamMember,
} from '../content-types';

type FileNews = {
  id: string;
  title: string;
  href: string;
  date: string;
  image: ImageData;
  slug?: string;
  articleImage?: ImageData;
  body?: string;
  category?: string;
  externalLink?: string;
  published?: boolean;
};
type FileTeamMember = Omit<TeamMember, 'bio' | 'interests' | 'status' | 'image'> & {
  image: ImageData;
  body: string;
  interests?: string;
  order?: number;
  status?: 'active' | 'alumni';
};
type FileProject = {
  id: string;
  anchor: string;
  navLabel: string;
  title: string;
  image: ImageData;
  body: string;
};

function isoDate(display: string) {
  const date = new Date(`${display} 12:00 UTC`);
  return date.toISOString().slice(0, 10);
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80)
    .replace(/-$/, '');
}

export async function loadFallbackContent(root = process.cwd()): Promise<SiteContent> {
  const json = async <T>(name: string): Promise<T> =>
    JSON.parse(await readFile(path.join(root, 'content/data', `${name}.json`), 'utf8'));
  const text = (file: string) => readFile(path.join(root, 'content', file), 'utf8');

  const [publicationData, teamData, newsData, researchData, lysosomal, disorders] =
    await Promise.all([
      json<{ items: Publication[] }>('publications'),
      json<{ members: FileTeamMember[] }>('team'),
      json<{ items: FileNews[] }>('news'),
      json<{
        overview: { title: string; body: string };
        topics: { id: string; title: string; projects: string; image: ImageData }[];
      }>('research'),
      json<{ items: FileProject[] }>('lysosomal-projects'),
      json<{ items: FileProject[] }>('microglia-and-brain-disorders'),
    ]);

  const publications = [...publicationData.items].sort((a, b) => b.date.localeCompare(a.date));

  const team = await Promise.all(
    teamData.members
      .map((member, index) => ({ member, index }))
      .sort((a, b) => (a.member.order ?? a.index) - (b.member.order ?? b.index))
      .map(async ({ member }) => ({
        id: member.id,
        name: member.name,
        role: member.role,
        joined: member.joined,
        email: member.email,
        links: member.links,
        image: member.image,
        bio: await text(member.body),
        interests: member.interests ?? '',
        status: member.status === 'alumni' ? ('alumni' as const) : ('current' as const),
      })),
  );

  const news: NewsItem[] = await Promise.all(
    newsData.items
      .filter((item) => item.published !== false)
      .map(async (item) => ({
        id: item.id,
        slug: item.slug ?? slugify(item.id),
        title: item.title,
        date: isoDate(item.date),
        category: item.category ?? '',
        body: item.body ? await text(item.body) : '',
        image: item.image,
        articleImage: item.articleImage ?? null,
        externalUrl: item.externalLink || (/^https?:/.test(item.href) ? item.href : ''),
        externalLinkText: '',
      })),
  );
  news.sort((a, b) => b.date.localeCompare(a.date));

  const projectFiles: Record<string, FileProject[]> = {
    'lysosomal-projects': lysosomal.items,
    'microglia-and-brain-disorders': disorders.items,
  };
  const research: ResearchArea[] = await Promise.all(
    researchData.topics.map(async (topic) => ({
      id: topic.id,
      slug: topic.id,
      title: topic.title,
      introduction: '',
      image: topic.image,
      projects: await Promise.all(
        projectFiles[topic.projects].map(async (project) => ({
          id: project.id,
          slug: project.anchor,
          title: project.title,
          navLabel: project.navLabel,
          body: await text(project.body),
          image: project.image,
          publications: [],
        })),
      ),
    })),
  );

  return { publications, team, news, research, text: await loadFallbackText(root) };
}

async function loadFallbackText(root: string): Promise<SiteText> {
  const json = async <T>(name: string): Promise<T> =>
    JSON.parse(await readFile(path.join(root, 'content/data', `${name}.json`), 'utf8'));
  const text = async (file: string) =>
    (await readFile(path.join(root, 'content', file), 'utf8')).trim();
  const [research, recruitment, resources, site] = await Promise.all([
    json<{ overview: { title: string; body: string } }>('research'),
    json<{ opportunities: { body: string }[] }>('recruitment'),
    json<{ sections: { id: string; body: string }[] }>('resources'),
    json<{ footer: { address: string[] } }>('site'),
  ]);
  const recruitmentKeys = ['lab-technician', 'undergraduate', 'graduate', 'postdoc'];
  return Object.fromEntries([
    ['research.overview.title', research.overview.title],
    ['research.overview.body', await text(research.overview.body)],
    ...(await Promise.all(
      recruitment.opportunities.map(async (item, index) => [
        `recruitment.${recruitmentKeys[index]}`,
        await text(item.body),
      ]),
    )),
    ...(await Promise.all(
      resources.sections.map(async (section) => [
        `resources.${section.id}`,
        await text(section.body),
      ]),
    )),
    ['footer.contact', site.footer.address.join('\n')],
  ]);
}
