'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  explain,
  listProjectPublications,
  listRows,
  saveRow,
  setProjectPublications,
  slugify,
  uniqueSlug,
} from '@/lib/cms/admin';
import {
  publicationFromRow,
  researchProjectFromRow,
  type PublicationRow,
  type ResearchAreaRow,
  type ResearchProjectRow,
} from '@/lib/cms/mappers';
import { MarkdownText } from '../markdown-text';
import { ResearchProject, RuledHeading } from '../content-sections';
import { SiteImage } from '../site-image';
import { imageFrom } from '@/lib/cms/mappers';
import { CollectionManager, type EditorProps, type Errors } from './collection-manager';
import { MediaField, SelectField, TextArea, TextField, markdownHint } from './fields';
import { thumbnailUrl, useMedia } from './media-context';
import { checkSlug, copyRecord, newRecord, nextOrder, plain } from './shared';

type ProjectDraft = ResearchProjectRow & { publication_ids: string[] };

const byOrder = (a: { display_order: number }, b: { display_order: number }) =>
  a.display_order - b.display_order;

// Slugs of areas and projects share the Research page, so they must not clash.
function slugFor(title: string, taken: string[]) {
  return uniqueSlug(slugify(title, 50), taken);
}

function AreaForm({ draft, update, errors }: EditorProps<ResearchAreaRow>) {
  return (
    <>
      <fieldset>
        <legend>Research area</legend>
        <TextField
          label="Title"
          required
          placeholder="e.g. Lysosomal Biology"
          value={draft.title}
          error={errors.title}
          onChange={(title) => update({ title })}
        />
        <TextArea
          label="Introductory text (optional)"
          rows={5}
          hint={`Shown under the section heading, above its projects. ${markdownHint}`}
          value={draft.introductory_text}
          onChange={(introductory_text) => update({ introductory_text })}
        />
        <MediaField
          label="Image for the Research Topics navigation"
          kind="image"
          value={draft.image_id}
          alt={draft.image_alt_text}
          onAltChange={(image_alt_text) => update({ image_alt_text })}
          onChange={(image_id) => update({ image_id })}
        />
      </fieldset>
      <fieldset>
        <legend>Advanced</legend>
        <TextField
          label="Section anchor"
          hint={`Links to this section use /research/#${draft.slug || '…'}. Leave empty to create one from the title.`}
          value={draft.slug}
          error={errors.slug}
          onChange={(slug) => update({ slug: slug.trim() })}
        />
      </fieldset>
    </>
  );
}

function ProjectForm({
  draft,
  update,
  errors,
  areas,
  publications,
}: EditorProps<ProjectDraft> & { areas: ResearchAreaRow[]; publications: PublicationRow[] }) {
  const [query, setQuery] = useState('');
  const shown = publications.filter(
    (publication) =>
      !publication.deleted_at &&
      `${publication.title} ${publication.journal} ${publication.publication_date}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const toggle = (id: string, on: boolean) =>
    update({
      publication_ids: on
        ? [...draft.publication_ids, id]
        : draft.publication_ids.filter((other) => other !== id),
    });
  return (
    <>
      <fieldset>
        <legend>Research project</legend>
        <SelectField
          label="Research area"
          required
          value={draft.area_id}
          error={errors.area}
          options={[
            { value: '', label: 'Choose an area' },
            ...areas
              .filter((area) => !area.deleted_at)
              .map((area) => ({ value: area.id, label: area.title })),
          ]}
          onChange={(area_id) => update({ area_id })}
        />
        <TextArea
          label="Title (the research question)"
          required
          rows={2}
          value={draft.title}
          error={errors.title}
          onChange={(title) => update({ title })}
        />
        <TextField
          label="Short label for the navigation"
          placeholder="e.g. Stress signals and lysosomes"
          hint="Shown in the Research Topics list at the top of the page."
          value={draft.nav_label}
          onChange={(nav_label) => update({ nav_label })}
        />
        <TextArea
          label="Description"
          rows={10}
          hint={markdownHint}
          value={draft.main_content}
          onChange={(main_content) => update({ main_content })}
        />
        <MediaField
          label="Figure"
          kind="image"
          value={draft.image_id}
          alt={draft.image_alt_text}
          onAltChange={(image_alt_text) => update({ image_alt_text })}
          altError={errors.imageAlt}
          onChange={(image_id) => update({ image_id })}
        />
      </fieldset>
      <fieldset>
        <legend>Related publications (optional)</legend>
        <p className="admin-hint">
          Ticked papers are listed under the project as “Related publications”. Only published
          papers appear on the website.
        </p>
        <label className="admin-search">
          <span className="visually-hidden">Search publications</span>
          <input
            type="search"
            placeholder="Search publications"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <ul className="admin-checklist">
          {shown.map((publication) => (
            <li key={publication.id}>
              <label>
                <input
                  type="checkbox"
                  checked={draft.publication_ids.includes(publication.id)}
                  onChange={(event) => toggle(publication.id, event.target.checked)}
                />{' '}
                {plain(publication.title)}{' '}
                <span className="admin-hint">
                  ({publication.journal} {publication.publication_date.slice(0, 4)}
                  {publication.status === 'draft' ? ', draft' : ''})
                </span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
      <fieldset>
        <legend>Advanced</legend>
        <TextField
          label="Anchor"
          hint={`Links to this project use /research/#${draft.slug || '…'}. Leave empty to create one from the short label.`}
          value={draft.slug}
          error={errors.slug}
          onChange={(slug) => update({ slug: slug.trim() })}
        />
      </fieldset>
    </>
  );
}

function AreasManager({ projects }: { projects: ResearchProjectRow[] }) {
  const { lookup } = useMedia();
  return (
    <CollectionManager<ResearchAreaRow>
      table="research_areas"
      title="Research areas"
      singular="research area"
      intro="Each published area is a section of the Research page with its projects, in the order set with “Arrange order”."
      label={(item) => item.title || 'Untitled area'}
      createDraft={(items) => ({
        ...newRecord(),
        slug: '',
        title: '',
        introductory_text: '',
        image_id: null,
        image_alt_text: '',
        status: 'draft',
        display_order: nextOrder(items),
      })}
      duplicate={(item, items) =>
        copyRecord(item, {
          slug: '',
          title: `${item.title} (copy)`,
          display_order: nextOrder(items),
        })
      }
      prepare={(draft, others) =>
        draft.slug
          ? draft
          : {
              ...draft,
              slug: slugFor(draft.title, [
                ...others.map((other) => other.slug),
                ...projects.map((project) => project.slug),
              ]),
            }
      }
      validate={(draft, others) => {
        const errors: Errors = {};
        if (!draft.title.trim()) errors.title = 'Enter a title.';
        checkSlug(errors, draft.slug, [...others, ...projects]);
        return errors;
      }}
      sort={(items) => [...items].sort(byOrder)}
      searchText={(item) => `${item.title} ${item.introductory_text}`}
      orderGroups={(items) => [{ label: 'Research areas', items: [...items].sort(byOrder) }]}
      Form={AreaForm}
      Preview={({ draft }) => {
        const image = imageFrom(lookup(draft.image_id), draft.image_alt_text);
        const own = projects
          .filter((project) => project.area_id === draft.id && !project.deleted_at)
          .sort(byOrder);
        return (
          <div className="research-page">
            <div className="topic-card">
              <span className="topic-image">{image && <SiteImage image={image} />}</span>
              <div>
                <h3>{draft.title || 'Research area'}</h3>
                <ul>
                  {own.map((project) => (
                    <li key={project.id}>{project.nav_label || project.title}</li>
                  ))}
                </ul>
              </div>
            </div>
            <section className="research-topic">
              <RuledHeading>{draft.title || 'Research area'}</RuledHeading>
              {draft.introductory_text && <MarkdownText source={draft.introductory_text} />}
              <p className="admin-preview-note">
                {own.length} project{own.length === 1 ? '' : 's'} follow here (edit them under
                Research projects).
              </p>
            </section>
          </div>
        );
      }}
      columns={[
        {
          label: 'Image',
          className: 'admin-col-thumb',
          render: (item) => {
            const src = thumbnailUrl(lookup(item.image_id));
            return src ? <img src={src} alt="" /> : <span className="admin-hint">None</span>;
          },
        },
        { label: 'Title', className: 'admin-col-title', render: (item) => item.title },
        {
          label: 'Projects',
          render: (item) =>
            projects.filter((project) => project.area_id === item.id && !project.deleted_at).length,
        },
      ]}
    />
  );
}

async function loadProjects(): Promise<ProjectDraft[]> {
  const [rows, links] = await Promise.all([
    listRows('research_projects'),
    listProjectPublications(),
  ]);
  return rows.map((row) => ({
    ...row,
    publication_ids: links
      .filter((link) => link.project_id === row.id)
      .map((link) => link.publication_id),
  }));
}

async function saveProject({ publication_ids, ...row }: ProjectDraft): Promise<ProjectDraft> {
  const saved = await saveRow('research_projects', row);
  await setProjectPublications(saved.id, publication_ids);
  return { ...saved, publication_ids };
}

function ProjectsManager({
  areas,
  publications,
}: {
  areas: ResearchAreaRow[];
  publications: PublicationRow[];
}) {
  const { lookup } = useMedia();
  const areaTitle = (id: string) => areas.find((area) => area.id === id)?.title ?? '—';
  const Form = useMemo(
    () =>
      function Form(props: EditorProps<ProjectDraft>) {
        return <ProjectForm {...props} areas={areas} publications={publications} />;
      },
    [areas, publications],
  );
  return (
    <CollectionManager<ProjectDraft>
      table="research_projects"
      title="Research projects"
      singular="research project"
      intro="Projects are the research questions within each area, each with a figure and description."
      load={loadProjects}
      save={saveProject}
      label={(item) => item.nav_label || item.title || 'Untitled project'}
      createDraft={(items) => ({
        ...newRecord(),
        area_id: areas.find((area) => !area.deleted_at)?.id ?? '',
        slug: '',
        title: '',
        nav_label: '',
        main_content: '',
        image_id: null,
        image_alt_text: '',
        status: 'draft',
        display_order: nextOrder(items),
        publication_ids: [],
      })}
      duplicate={(item, items) =>
        copyRecord(item, {
          slug: '',
          title: `${item.title} (copy)`,
          nav_label: item.nav_label && `${item.nav_label} (copy)`,
          display_order: nextOrder(items),
        })
      }
      prepare={(draft, others) =>
        draft.slug
          ? draft
          : {
              ...draft,
              slug: slugFor(draft.nav_label || draft.title, [
                ...others.map((other) => other.slug),
                ...areas.map((area) => area.slug),
              ]),
            }
      }
      validate={(draft, others) => {
        const errors: Errors = {};
        if (!draft.area_id) errors.area = 'Choose the research area this project belongs to.';
        if (!draft.title.trim()) errors.title = 'Enter the title.';
        checkSlug(errors, draft.slug, [...others, ...areas]);
        return errors;
      }}
      validateForPublish={(draft): Errors =>
        draft.image_id && !(draft.image_alt_text.trim() || lookup(draft.image_id)?.alt_text)
          ? { imageAlt: 'Describe the figure in the alt text field.' }
          : {}
      }
      sort={(items) =>
        [...items].sort(
          (a, b) =>
            byOrder(
              areas.find((area) => area.id === a.area_id) ?? { display_order: 0 },
              areas.find((area) => area.id === b.area_id) ?? { display_order: 0 },
            ) || byOrder(a, b),
        )
      }
      searchText={(item) => `${item.title} ${item.nav_label} ${areaTitle(item.area_id)}`}
      filters={[
        {
          label: 'Area',
          options: () => areas.map((area) => ({ value: area.id, label: area.title })),
          match: (item, value) => item.area_id === value,
        },
      ]}
      orderGroups={(items) =>
        [...areas]
          .filter((area) => !area.deleted_at)
          .sort(byOrder)
          .map((area) => ({
            label: area.title,
            items: items.filter((item) => item.area_id === area.id).sort(byOrder),
          }))
      }
      Form={Form}
      Preview={({ draft }) => {
        const linked = draft.publication_ids
          .map((id) => publications.find((publication) => publication.id === id))
          .filter((row): row is PublicationRow => Boolean(row) && row!.status === 'published')
          .map((row) => publicationFromRow(row, lookup));
        const item = researchProjectFromRow(draft, lookup, linked);
        return (
          <div className="research-page">
            <p className="admin-preview-note">In {areaTitle(draft.area_id)}</p>
            <ResearchProject item={{ ...item, title: item.title || 'Research question' }} />
          </div>
        );
      }}
      columns={[
        {
          label: 'Figure',
          className: 'admin-col-thumb',
          render: (item) => {
            const src = thumbnailUrl(lookup(item.image_id));
            return src ? <img src={src} alt="" /> : <span className="admin-hint">None</span>;
          },
        },
        {
          label: 'Project',
          className: 'admin-col-title',
          render: (item) => item.nav_label || plain(item.title),
        },
        { label: 'Area', render: (item) => areaTitle(item.area_id) },
      ]}
    />
  );
}

export function ResearchManager() {
  const [tab, setTab] = useState<'areas' | 'projects'>('areas');
  const [related, setRelated] = useState<{
    areas: ResearchAreaRow[];
    projects: ResearchProjectRow[];
    publications: PublicationRow[];
  } | null>(null);
  const [problem, setProblem] = useState('');
  useEffect(() => {
    setRelated(null);
    Promise.all([
      listRows('research_areas'),
      listRows('research_projects'),
      listRows('publications'),
    ])
      .then(([areas, projects, publications]) => setRelated({ areas, projects, publications }))
      .catch((failure) => setProblem(explain(failure)));
  }, [tab]);
  return (
    <>
      <div className="admin-tabs is-section" role="tablist" aria-label="Research content">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'areas'}
          onClick={() => setTab('areas')}
        >
          Research areas
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'projects'}
          onClick={() => setTab('projects')}
        >
          Research projects
        </button>
      </div>
      {problem && (
        <p className="admin-error" role="alert">
          {problem}
        </p>
      )}
      {related &&
        (tab === 'areas' ? (
          <AreasManager projects={related.projects} />
        ) : (
          <ProjectsManager areas={related.areas} publications={related.publications} />
        ))}
    </>
  );
}
