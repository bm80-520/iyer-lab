'use client';

import { slugify, uniqueSlug } from '@/lib/cms/admin';
import { newsFromRow, type NewsRow } from '@/lib/cms/mappers';
import { formatDate } from '@/lib/publications';
import { NewsArticleView } from '../live-content';
import { NewsCard, newsHref } from '../news-card';
import { CollectionManager, type EditorProps, type Errors } from './collection-manager';
import { MediaField, TextArea, TextField, markdownHint } from './fields';
import { thumbnailUrl, useMedia } from './media-context';
import { checkSlug, copyRecord, isWebUrl, newRecord, today } from './shared';

const defaultCategories = [
  'Lab life',
  'Publications',
  'Presentations',
  'Awards',
  'Grants',
  'New members',
  'Announcements',
];

// News articles live at the site root, so these names are taken.
const reservedSlugs = [
  'admin',
  'fonts',
  'images',
  'iyer-lab-resources',
  'join-our-shoal',
  'lab-news',
  'login',
  'publications',
  'research',
  'resources',
  'team',
];

function emptyNews(): NewsRow {
  return {
    ...newRecord(),
    slug: '',
    title: '',
    publication_date: today(),
    category: '',
    content: '',
    image_id: null,
    image_alt_text: '',
    article_image_id: null,
    external_url: '',
    external_link_text: '',
    status: 'draft',
  };
}

function validate(draft: NewsRow, others: NewsRow[]): Errors {
  const errors: Errors = {};
  if (!draft.title.trim()) errors.title = 'Enter a headline.';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(draft.publication_date))
    errors.date = 'Enter the date of the news item.';
  if (!isWebUrl(draft.external_url))
    errors.external_url = 'The external link must start with https://.';
  checkSlug(errors, draft.slug, others, reservedSlugs);
  return errors;
}

function NewsForm({ draft, update, errors, items }: EditorProps<NewsRow>) {
  const categories = [
    ...new Set([...defaultCategories, ...items.map((item) => item.category).filter(Boolean)]),
  ];
  return (
    <>
      <fieldset>
        <legend>News item</legend>
        <TextArea
          label="Headline"
          required
          rows={2}
          value={draft.title}
          error={errors.title}
          onChange={(title) => update({ title })}
        />
        <div className="admin-field-row">
          <TextField
            label="Date"
            type="date"
            required
            hint="News is listed newest first."
            value={draft.publication_date}
            error={errors.date}
            onChange={(publication_date) => update({ publication_date })}
          />
          <TextField
            label="Category (optional)"
            placeholder="e.g. Presentations"
            suggestions={categories}
            value={draft.category}
            onChange={(category) => update({ category })}
          />
        </div>
        <TextArea
          label="Main text"
          rows={10}
          hint={`${markdownHint} A card with an external link but no text opens the link directly instead of an article page.`}
          value={draft.content}
          onChange={(content) => update({ content })}
        />
        <div className="admin-field-row">
          <TextField
            label="External link (optional)"
            type="url"
            placeholder="https://"
            value={draft.external_url}
            error={errors.external_url}
            onChange={(external_url) => update({ external_url: external_url.trim() })}
          />
          <TextField
            label="Link text (optional)"
            placeholder="e.g. Read the Rice news story"
            value={draft.external_link_text}
            onChange={(external_link_text) => update({ external_link_text })}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Images</legend>
        <MediaField
          label="Card image"
          kind="image"
          value={draft.image_id}
          alt={draft.image_alt_text}
          onAltChange={(image_alt_text) => update({ image_alt_text })}
          error={errors.image}
          altError={errors.imageAlt}
          onChange={(image_id) => update({ image_id })}
        />
        <MediaField
          label="Article page image (optional)"
          kind="image"
          hint="A wider crop for the top of the article page. The card image is used when empty."
          value={draft.article_image_id}
          onChange={(article_image_id) => update({ article_image_id })}
        />
      </fieldset>
      <fieldset>
        <legend>Advanced</legend>
        <TextField
          label="Web address"
          hint={`The article page is /${draft.slug || '…'}/. Leave empty to create one from the headline. Changing it after publishing breaks existing links.`}
          value={draft.slug}
          error={errors.slug}
          onChange={(slug) => update({ slug: slug.trim() })}
        />
      </fieldset>
    </>
  );
}

const year = (row: NewsRow) => row.publication_date.slice(0, 4);

export function NewsManager() {
  const { lookup } = useMedia();
  return (
    <CollectionManager<NewsRow>
      table="news"
      title="Lab News"
      singular="news item"
      intro="Published news appears on the Lab News page, newest first."
      label={(item) => item.title || 'Untitled news item'}
      createDraft={emptyNews}
      duplicate={(item) => copyRecord(item, { slug: '', title: `${item.title} (copy)` })}
      prepare={(draft, others) =>
        draft.slug
          ? draft
          : {
              ...draft,
              slug: uniqueSlug(slugify(draft.title, 80) || 'news', [
                ...others.map((other) => other.slug),
                ...reservedSlugs,
              ]),
            }
      }
      validate={validate}
      validateForPublish={(draft) => {
        const errors: Errors = {};
        if (!draft.image_id) errors.image = 'Choose an image for the news card before publishing.';
        else if (!(draft.image_alt_text.trim() || lookup(draft.image_id)?.alt_text))
          errors.imageAlt = 'Describe the image in the alt text field.';
        return errors;
      }}
      sort={(items) =>
        [...items].sort(
          (a, b) =>
            b.publication_date.localeCompare(a.publication_date) ||
            b.created_at.localeCompare(a.created_at),
        )
      }
      searchText={(item) => `${item.title} ${item.category} ${item.publication_date}`}
      filters={[
        {
          label: 'Category',
          options: (items) =>
            [...new Set(items.map((item) => item.category).filter(Boolean))]
              .sort()
              .map((value) => ({ value, label: value })),
          match: (item, value) => item.category === value,
        },
        {
          label: 'Year',
          options: (items) =>
            [...new Set(items.map(year))]
              .sort()
              .reverse()
              .map((value) => ({ value, label: value })),
          match: (item, value) => year(item) === value,
        },
      ]}
      Form={NewsForm}
      Preview={({ draft }) => {
        const item = newsFromRow(draft, lookup);
        const preview = { ...item, title: item.title || 'Headline', slug: draft.slug || 'preview' };
        return (
          <>
            {draft.status === 'draft' && (
              <p className="admin-preview-note">Draft: not shown on the Lab News page.</p>
            )}
            <p className="admin-preview-heading">News card</p>
            <div className="admin-news-card">
              <NewsCard item={preview} />
            </div>
            {newsHref(preview).startsWith('/') ? (
              <>
                <p className="admin-preview-heading">Article page</p>
                <div className="admin-news-article">
                  <NewsArticleView item={preview} />
                </div>
              </>
            ) : (
              <p className="admin-preview-note">The card opens {preview.externalUrl}.</p>
            )}
          </>
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
        { label: 'Headline', className: 'admin-col-title', render: (item) => item.title },
        { label: 'Date', render: (item) => formatDate(item.publication_date) },
        { label: 'Category', render: (item) => item.category || '—' },
      ]}
    />
  );
}
