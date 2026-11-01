'use client';

import { publicationTypes, type PublicationType } from '@/lib/content-types';
import { slugify, uniqueSlug } from '@/lib/cms/admin';
import { publicBucket } from '@/lib/cms/config';
import { publicationFromRow, type PublicationRow } from '@/lib/cms/mappers';
import { formatDate } from '@/lib/publications';
import { PublicationEntry } from '../publication-entry';
import { CollectionManager, type EditorProps, type Errors } from './collection-manager';
import { CheckboxField, MediaField, SelectField, TextArea, TextField } from './fields';
import { thumbnailUrl, useMedia } from './media-context';
import { checkSlug, copyRecord, isWebUrl, newRecord, plain, today } from './shared';

const typeOptions = Object.entries(publicationTypes).map(([value, label]) => ({
  value: value as PublicationType,
  label,
}));

const year = (row: PublicationRow) => row.publication_date.slice(0, 4);

/** e.g. "gallman-2026-biorxiv", matching the lab's existing anchors. */
function suggestedSlug(row: PublicationRow) {
  const firstAuthor = plain(row.authors).split(/[,;]/)[0]?.trim().split(/\s+/)[0] ?? '';
  const journal = row.journal.split(/[\s.]+/)[0] ?? '';
  return (
    slugify([firstAuthor, year(row), journal].filter(Boolean).join(' ')) || slugify(row.title, 40)
  );
}

function emptyPublication(): PublicationRow {
  return {
    ...newRecord(),
    slug: '',
    title: '',
    publication_date: today(),
    journal: '',
    authors: '',
    citation: '',
    doi: '',
    pmid: '',
    pmcid: '',
    publication_url: '',
    pubmed_url: '',
    preprint_url: '',
    image_id: null,
    image_alt_text: '',
    pdf_id: null,
    abstract: '',
    publication_type: 'article',
    featured: false,
    status: 'draft',
    display_order: 0,
  };
}

function validate(draft: PublicationRow, others: PublicationRow[]): Errors {
  const errors: Errors = {};
  if (!draft.title.trim()) errors.title = 'Enter the publication title.';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(draft.publication_date))
    errors.date = 'Enter the publication date.';
  if (!draft.journal.trim()) errors.journal = 'Enter the journal or venue.';
  if (!draft.authors.trim()) errors.authors = 'Enter the author list.';
  if (draft.doi && !/^10\.\S+\/\S+$/.test(draft.doi))
    errors.doi = 'A DOI starts with “10.” and contains a slash, e.g. 10.1242/jcs.261616.';
  for (const [key, label] of [
    ['publication_url', 'Publication URL'],
    ['pubmed_url', 'PubMed URL'],
    ['preprint_url', 'Preprint URL'],
  ] as const)
    if (!isWebUrl(draft[key])) errors[key] = `${label} must start with https://.`;
  checkSlug(errors, draft.slug, others);
  return errors;
}

function PublicationForm({ draft, update, errors }: EditorProps<PublicationRow>) {
  return (
    <>
      <fieldset>
        <legend>Publication</legend>
        <TextArea
          label="Title"
          required
          rows={2}
          hint="Use *asterisks* for italic species or gene names."
          value={draft.title}
          error={errors.title}
          onChange={(title) => update({ title })}
        />
        <div className="admin-field-row">
          <TextField
            label="Publication date"
            type="date"
            required
            hint="Decides the year heading and the order on the Publications page."
            value={draft.publication_date}
            error={errors.date}
            onChange={(publication_date) => update({ publication_date })}
          />
          <SelectField
            label="Publication type"
            value={draft.publication_type as PublicationType}
            options={typeOptions}
            onChange={(publication_type) => update({ publication_type })}
          />
        </div>
        <TextField
          label="Journal"
          required
          placeholder="e.g. J. Cell Sci."
          value={draft.journal}
          error={errors.journal}
          onChange={(journal) => update({ journal })}
        />
        <TextArea
          label="Authors"
          required
          rows={3}
          hint="Wrap lab members in **double asterisks** to show them in bold."
          value={draft.authors}
          error={errors.authors}
          onChange={(authors) => update({ authors })}
        />
        <TextField
          label="Citation"
          placeholder="e.g. 2024. 137(4): jcs261616."
          hint="Year, volume, issue, and pages as printed. Leave empty for preprints."
          value={draft.citation}
          onChange={(citation) => update({ citation })}
        />
        <CheckboxField
          label="Show on the homepage"
          hint="The homepage lists the three newest publications with this ticked."
          checked={draft.featured}
          onChange={(featured) => update({ featured })}
        />
      </fieldset>
      <fieldset>
        <legend>Links and identifiers</legend>
        <div className="admin-field-row">
          <TextField
            label="DOI"
            placeholder="10.xxxx/…"
            value={draft.doi}
            error={errors.doi}
            onChange={(doi) =>
              update({ doi: doi.trim().replace(/^https?:\/\/(dx\.)?doi\.org\//, '') })
            }
          />
          <TextField
            label="PMID"
            value={draft.pmid}
            onChange={(pmid) => update({ pmid: pmid.trim() })}
          />
          <TextField
            label="PMCID"
            value={draft.pmcid}
            onChange={(pmcid) => update({ pmcid: pmcid.trim() })}
          />
        </div>
        <TextField
          label="Publication URL"
          type="url"
          hint="The article on the journal’s website. Defaults to the DOI link when empty."
          value={draft.publication_url}
          error={errors.publication_url}
          onChange={(publication_url) => update({ publication_url })}
        />
        <TextField
          label="PubMed URL"
          type="url"
          value={draft.pubmed_url}
          error={errors.pubmed_url}
          onChange={(pubmed_url) => update({ pubmed_url })}
        />
        <TextField
          label="Preprint URL"
          type="url"
          value={draft.preprint_url}
          error={errors.preprint_url}
          onChange={(preprint_url) => update({ preprint_url })}
        />
        <MediaField
          label="PDF (optional)"
          kind="pdf"
          value={draft.pdf_id}
          error={errors.pdf}
          hint="Only make a PDF public if it may be shared (for example, open access). New PDFs start private."
          onChange={(pdf_id) => update({ pdf_id })}
        />
      </fieldset>
      <fieldset>
        <legend>Image and description</legend>
        <MediaField
          label="Publication image"
          kind="image"
          value={draft.image_id}
          alt={draft.image_alt_text}
          onAltChange={(image_alt_text) => update({ image_alt_text })}
          error={errors.image}
          altError={errors.imageAlt}
          onChange={(image_id) => update({ image_id })}
        />
        <TextArea
          label="Abstract or short description (optional)"
          rows={4}
          value={draft.abstract}
          onChange={(abstract) => update({ abstract })}
        />
      </fieldset>
      <fieldset>
        <legend>Advanced</legend>
        <TextField
          label="Link anchor"
          hint={`Links to this paper use /publications/#${draft.slug || '…'}. Leave empty to create one from the first author, year and journal.`}
          value={draft.slug}
          error={errors.slug}
          onChange={(slug) => update({ slug: slug.trim() })}
        />
      </fieldset>
    </>
  );
}

export function PublicationsManager() {
  const { lookup } = useMedia();
  return (
    <CollectionManager<PublicationRow>
      table="publications"
      title="Publications"
      singular="publication"
      intro="Published papers appear on the Publications page under their year, newest first. Drafts are visible only here."
      label={(item) => plain(item.title) || 'Untitled publication'}
      createDraft={emptyPublication}
      duplicate={(item) => copyRecord(item, { slug: '', title: `${item.title} (copy)` })}
      prepare={(draft, others) =>
        draft.slug
          ? draft
          : {
              ...draft,
              slug: uniqueSlug(
                suggestedSlug(draft),
                others.map((other) => other.slug),
              ),
            }
      }
      validate={validate}
      validateForPublish={(draft) => {
        const errors: Errors = {};
        const pdf = lookup(draft.pdf_id);
        if (pdf && pdf.bucket !== publicBucket)
          errors.pdf =
            'The attached PDF is private. Make it public (if it may be shared) or remove it before publishing.';
        if (draft.image_id && !(draft.image_alt_text.trim() || lookup(draft.image_id)?.alt_text))
          errors.imageAlt = 'Describe the image in the alt text field.';
        return errors;
      }}
      sort={(items) =>
        [...items].sort(
          (a, b) =>
            b.publication_date.localeCompare(a.publication_date) ||
            a.display_order - b.display_order,
        )
      }
      searchText={(item) =>
        `${item.title} ${item.authors} ${item.journal} ${item.publication_date}`
      }
      filters={[
        {
          label: 'Year',
          options: (items) =>
            [...new Set(items.map(year))]
              .sort()
              .reverse()
              .map((value) => ({ value, label: value })),
          match: (item, value) => year(item) === value,
        },
        {
          label: 'Type',
          options: () => typeOptions,
          match: (item, value) => item.publication_type === value,
        },
      ]}
      Form={PublicationForm}
      Preview={({ draft }) => {
        const item = publicationFromRow(draft, lookup);
        return (
          <div className="publications-page">
            <p className="admin-preview-note">
              {draft.status === 'draft' ? 'Draft · ' : ''}Listed under {year(draft)}
              {draft.featured ? ' · also on the homepage' : ''}
            </p>
            <PublicationEntry item={{ ...item, title: item.title || 'Publication title' }} />
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
        { label: 'Title', className: 'admin-col-title', render: (item) => plain(item.title) },
        { label: 'Journal', render: (item) => item.journal },
        {
          label: 'Date',
          render: (item) => (
            <>
              {formatDate(item.publication_date)}
              <span className="admin-hint">
                {' '}
                · {publicationTypes[item.publication_type as PublicationType]}
              </span>
            </>
          ),
        },
      ]}
    />
  );
}
