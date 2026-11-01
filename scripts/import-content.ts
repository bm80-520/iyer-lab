// One-time copy of the repository's content (content/data, content/text and
// the images and PDFs they reference) into an empty Supabase project.
//
//   npm run cms:import
//
// It refuses to run when any content table already has rows, so it can never
// overwrite or duplicate content edited in the dashboard. To start over on a
// project that is not yet in use, see "Re-running the import" in docs/CMS.md.
import { randomUUID } from 'node:crypto';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import type { ImageData } from '../src/lib/content-types';
import { loadFallbackContent } from '../src/lib/cms/fallback.ts';
import { siteTextFields } from '../src/lib/cms/site-text.ts';
import { check, contentTables, signInAsAdmin } from './lib/cms-session.ts';

const mimeTypes: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.pdf': 'application/pdf',
};

const client = await signInAsAdmin();

for (const table of contentTables) {
  const { count, error } = await client.from(table).select('*', { count: 'exact', head: true });
  if (error) throw new Error(`Checking ${table}: ${error.message}`);
  if (count) {
    console.error(
      `Nothing imported: ${table} already has ${count} row(s). The import only fills an empty project.`,
    );
    process.exit(1);
  }
}

const content = await loadFallbackContent();
const uploaded = new Map<string, string>();

/** Uploads a file from public/ once and returns its media id. */
async function media(src: string, details: { alt?: string; width?: number; height?: number }) {
  if (uploaded.has(src)) return uploaded.get(src)!;
  const file = path.join('public', src);
  const type = mimeTypes[path.extname(src).toLowerCase()];
  if (!type) throw new Error(`Unsupported file type: ${src}`);
  const storagePath = `imported/${src.replace(/^\/images\//, '')}`;
  const body = await readFile(file);
  check(
    await client.storage
      .from('media')
      .upload(storagePath, body, { contentType: type, cacheControl: '31536000' }),
    `Uploading ${src}`,
  );
  const id = randomUUID();
  check(
    await client.from('media').insert({
      id,
      bucket: 'media',
      storage_path: storagePath,
      filename: path.basename(src),
      file_type: type,
      file_size: (await stat(file)).size,
      width: details.width ?? null,
      height: details.height ?? null,
      alt_text: details.alt ?? '',
    }),
    `Recording ${src}`,
  );
  uploaded.set(src, id);
  console.log(`  uploaded ${src}`);
  return id;
}

const image = (value: ImageData | null) => (value ? media(value.src, value) : null);

console.log(`Publications (${content.publications.length})`);
for (const [index, item] of content.publications.entries()) {
  check(
    await client.from('publications').insert({
      slug: item.id,
      title: item.title,
      publication_date: item.date,
      journal: item.journal,
      authors: item.authors,
      citation: item.citation,
      doi: item.doi,
      pmid: item.pmid,
      pmcid: item.pmcid,
      publication_url: item.url,
      pubmed_url: item.pubmedUrl,
      preprint_url: item.preprintUrl,
      image_id: await image(item.image),
      image_alt_text: item.image?.alt ?? '',
      pdf_id: item.pdf ? await media(item.pdf, {}) : null,
      abstract: item.description,
      publication_type: item.type,
      featured: item.selected,
      status: 'published',
      display_order: index,
    }),
    `Publication ${item.id}`,
  );
}

console.log(`Team members (${content.team.length})`);
for (const [index, member] of content.team.entries()) {
  check(
    await client.from('team_members').insert({
      slug: member.id,
      name: member.name,
      position: member.role,
      joined: member.joined,
      photograph_id: await image(member.image),
      photograph_alt_text: member.image?.alt ?? member.name,
      biography: member.bio.trim(),
      research_interests: member.interests,
      email: member.email,
      external_links: member.links,
      member_status: member.status,
      status: 'published',
      display_order: (index + 1) * 10,
    }),
    `Team member ${member.id}`,
  );
}

console.log(`News (${content.news.length})`);
for (const item of content.news) {
  check(
    await client.from('news').insert({
      slug: item.slug,
      title: item.title,
      publication_date: item.date,
      category: item.category,
      content: item.body.trim(),
      image_id: await image(item.image),
      image_alt_text: item.image?.alt ?? '',
      article_image_id: await image(item.articleImage),
      external_url: item.externalUrl,
      external_link_text: item.externalLinkText,
      status: 'published',
    }),
    `News ${item.slug}`,
  );
}

console.log(`Research areas (${content.research.length})`);
for (const [areaIndex, area] of content.research.entries()) {
  const areaId = randomUUID();
  check(
    await client.from('research_areas').insert({
      id: areaId,
      slug: area.slug,
      title: area.title,
      introductory_text: area.introduction,
      image_id: await image(area.image),
      image_alt_text: area.image?.alt ?? '',
      status: 'published',
      display_order: (areaIndex + 1) * 10,
    }),
    `Research area ${area.slug}`,
  );
  for (const [index, project] of area.projects.entries()) {
    check(
      await client.from('research_projects').insert({
        area_id: areaId,
        slug: project.slug,
        title: project.title,
        nav_label: project.navLabel,
        main_content: project.body.trim(),
        image_id: await image(project.image),
        image_alt_text: project.image?.alt ?? '',
        status: 'published',
        display_order: (index + 1) * 10,
      }),
      `Research project ${project.slug}`,
    );
  }
}

console.log(`Website text (${siteTextFields.length})`);
check(
  await client.from('site_content').insert(
    siteTextFields.map((field, index) => ({
      content_key: field.key,
      page: field.page,
      label: field.label,
      format: field.format,
      content_value: content.text[field.key] ?? '',
      display_order: index,
    })),
  ),
  'Website text',
);

console.log(`Done: ${uploaded.size} files uploaded and all content published.`);
