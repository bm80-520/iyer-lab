'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  archiveRow,
  deleteRowPermanently,
  explain,
  listRows,
  restoreRow,
  saveOrder,
  saveRow,
  type ContentStatus,
  type ContentTable,
} from '@/lib/cms/admin';
import { ReorderList } from './reorder-list';

export type Errors = Record<string, string>;
export type BaseRow = {
  id: string;
  status: ContentStatus;
  deleted_at: string | null;
  updated_at: string;
  created_at: string;
};
export type EditorProps<T> = {
  draft: T;
  update: (patch: Partial<T>) => void;
  errors: Errors;
  /** Every record in the collection, e.g. to keep web addresses unique. */
  items: T[];
};
type Column<T> = { label: string; render: (item: T) => React.ReactNode; className?: string };
type Filter<T> = {
  label: string;
  options: (items: T[]) => { value: string; label: string }[];
  match: (item: T, value: string) => boolean;
};
type Tab = 'current' | 'published' | 'draft' | 'archived';

export type ManagerConfig<T extends BaseRow> = {
  table: ContentTable;
  title: string;
  singular: string;
  intro?: React.ReactNode;
  label: (item: T) => string;
  createDraft: (items: T[]) => T;
  duplicate: (item: T, items: T[]) => T;
  /** Fills in derived values (such as an empty web address) before saving. */
  prepare?: (draft: T, items: T[]) => T;
  /** Checked on every save. */
  validate: (draft: T, items: T[]) => Errors;
  /** Further checks before an entry can appear on the website. */
  validateForPublish?: (draft: T, items: T[]) => Errors;
  columns: Column<T>[];
  searchText: (item: T) => string;
  filters?: Filter<T>[];
  sort: (items: T[]) => T[];
  Form: (props: EditorProps<T>) => React.ReactNode;
  Preview: (props: { draft: T; items: T[] }) => React.ReactNode;
  /** Enables "Arrange order", one list per group. */
  orderGroups?: (items: T[]) => { label: string; items: T[] }[];
  load?: () => Promise<T[]>;
  save?: (draft: T) => Promise<T>;
};

type View<T> = { mode: 'list' } | { mode: 'order' } | { mode: 'edit'; draft: T; saved: T | null };

const isArchived = (item: BaseRow) => Boolean(item.deleted_at);
const updatedLabel = (iso: string) =>
  new Date(iso).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });

export function StatusBadge({ item }: { item: BaseRow }) {
  if (isArchived(item)) return <span className="admin-badge is-archived">Archived</span>;
  return item.status === 'published' ? (
    <span className="admin-badge is-published">Published</span>
  ) : (
    <span className="admin-badge is-draft">Draft</span>
  );
}

// The list → edit → preview → save → publish workflow shared by every
// collection in the dashboard.
export function CollectionManager<T extends BaseRow>(config: ManagerConfig<T>) {
  const { table, title, singular, label, Form, Preview } = config;
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [view, setView] = useState<View<T>>({ mode: 'list' });
  const [tab, setTab] = useState<Tab>('current');
  const [query, setQuery] = useState('');
  const [filterValues, setFilterValues] = useState<string[]>(() =>
    (config.filters ?? []).map(() => ''),
  );
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState<{ text: string; error?: boolean }>({ text: '' });
  const [busy, setBusy] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const load = config.load ?? (() => listRows(table) as unknown as Promise<T[]>);
  const save =
    config.save ?? ((draft: T) => saveRow(table, draft as never) as unknown as Promise<T>);

  const refresh = useCallback(async () => {
    try {
      setItems(await load());
      setLoadError('');
    } catch (failure) {
      setLoadError(explain(failure));
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table]);

  const open = (draft: T, saved: T | null) => {
    setView({ mode: 'edit', draft: structuredClone(draft), saved });
    setErrors({});
    setMessage({ text: '' });
    window.scrollTo({ top: 0 });
  };

  // Load, then honour ?new and ?edit=<id> links from the Overview page.
  useEffect(() => {
    (async () => {
      await refresh();
    })();
  }, [refresh]);
  const handledLink = useRef(false);
  useEffect(() => {
    if (loading || handledLink.current) return;
    handledLink.current = true;
    const params = new URLSearchParams(window.location.search);
    const target = params.get('edit') && items.find((item) => item.id === params.get('edit'));
    if (target) open(target, target);
    else if (params.has('new')) open(config.createDraft(items), null);
    if (params.size) window.history.replaceState(null, '', window.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, items]);

  const editing = view.mode === 'edit' ? view : null;
  const dirty = Boolean(
    editing && (!editing.saved || JSON.stringify(editing.draft) !== JSON.stringify(editing.saved)),
  );
  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const confirmDiscard = () =>
    !dirty || window.confirm('You have unsaved changes. Leave without saving them?');
  const backToList = (text = '') => {
    setView({ mode: 'list' });
    setErrors({});
    setMessage({ text });
  };

  const replaceItem = (saved: T) =>
    setItems((current) =>
      current.some((item) => item.id === saved.id)
        ? current.map((item) => (item.id === saved.id ? saved : item))
        : [saved, ...current],
    );

  /** Saves the entry, optionally changing whether it is published. */
  const persist = async (draft: T, status: ContentStatus, stayInEditor: boolean) => {
    const others = items.filter((item) => item.id !== draft.id);
    const candidate = config.prepare
      ? config.prepare({ ...draft, status }, others)
      : { ...draft, status };
    const found = {
      ...config.validate(candidate, others),
      ...(status === 'published' ? config.validateForPublish?.(candidate, others) : {}),
    };
    if (Object.keys(found).length) {
      if (!stayInEditor) open(draft, draft);
      setErrors(found);
      setMessage({
        text:
          status === 'published'
            ? 'This entry needs a few changes before it can be published.'
            : 'Please fix the highlighted fields.',
        error: true,
      });
      return;
    }
    setErrors({});
    setBusy(status === 'published' && draft.status !== 'published' ? 'Publishing…' : 'Saving…');
    try {
      const saved = await save(candidate);
      replaceItem(saved);
      const wasPublished = editing?.saved?.status === 'published' || draft.status === 'published';
      const text =
        status === 'published'
          ? wasPublished
            ? 'Changes saved. They are live on the website now.'
            : 'Published. It now appears on the website.'
          : wasPublished
            ? 'Unpublished. It is no longer shown on the website, and is kept as a draft.'
            : 'Draft saved. It is not shown on the website until you publish it.';
      if (stayInEditor) {
        setView({ mode: 'edit', draft: structuredClone(saved), saved });
        setMessage({ text });
      } else setMessage({ text: `“${label(saved)}”: ${text}` });
    } catch (failure) {
      setMessage({ text: explain(failure), error: true });
    } finally {
      setBusy('');
    }
  };

  const archive = async (item: T) => {
    if (
      !window.confirm(
        `Archive “${label(item)}”? It is removed from the website and can be restored from the Archived tab.`,
      )
    )
      return;
    try {
      await archiveRow(table, item.id);
      replaceItem({ ...item, deleted_at: new Date().toISOString() });
      backToList(`“${label(item)}” archived. Restore it from the Archived tab if needed.`);
    } catch (failure) {
      setMessage({ text: explain(failure), error: true });
    }
  };
  const restore = async (item: T) => {
    try {
      await restoreRow(table, item.id);
      replaceItem({ ...item, deleted_at: null });
      setMessage({
        text: `“${label(item)}” restored${item.status === 'published' ? ' and back on the website' : ' as a draft'}.`,
      });
    } catch (failure) {
      setMessage({ text: explain(failure), error: true });
    }
  };
  const destroy = async (item: T) => {
    if (!window.confirm(`Permanently delete “${label(item)}”? This cannot be undone.`)) return;
    try {
      await deleteRowPermanently(table, item.id);
      setItems((current) => current.filter((other) => other.id !== item.id));
      setMessage({ text: `“${label(item)}” deleted permanently.` });
    } catch (failure) {
      setMessage({ text: explain(failure), error: true });
    }
  };

  const counts = useMemo(
    () => ({
      current: items.filter((item) => !isArchived(item)).length,
      published: items.filter((item) => !isArchived(item) && item.status === 'published').length,
      draft: items.filter((item) => !isArchived(item) && item.status === 'draft').length,
      archived: items.filter(isArchived).length,
    }),
    [items],
  );
  const visible = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    return config
      .sort(items)
      .filter((item) =>
        tab === 'archived'
          ? isArchived(item)
          : !isArchived(item) && (tab === 'current' || item.status === tab),
      )
      .filter((item) => words.every((word) => config.searchText(item).toLowerCase().includes(word)))
      .filter((item) =>
        (config.filters ?? []).every(
          (filter, index) => !filterValues[index] || filter.match(item, filterValues[index]),
        ),
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, tab, query, filterValues]);

  const statusMessage = (
    <p
      className={`admin-status${message.error ? ' is-error' : ''}`}
      role={message.error ? 'alert' : 'status'}
    >
      {busy || message.text}
    </p>
  );

  if (editing) {
    const { draft, saved } = editing;
    const isPublished = saved?.status === 'published';
    const errorList = Object.values(errors);
    const others = items.filter((item) => item.id !== draft.id);
    return (
      <section className="admin-editor">
        <div className="admin-toolbar">
          <h2 ref={heading}>
            {saved ? `Edit ${singular}` : `Add ${singular}`}
            {saved && <span className="admin-subtitle">{label(draft)}</span>}
          </h2>
          <button
            type="button"
            className="admin-button is-quiet"
            onClick={() => confirmDiscard() && backToList()}
          >
            ← Back to {title.toLowerCase()}
          </button>
        </div>
        <p className="admin-save-state">
          {saved ? <StatusBadge item={saved} /> : <span className="admin-badge is-draft">New</span>}{' '}
          {dirty ? (
            <strong>{saved ? 'Unsaved changes' : 'Not saved yet'}</strong>
          ) : (
            <span>All changes saved · {updatedLabel(saved!.updated_at)}</span>
          )}
        </p>
        {statusMessage}
        <div className="admin-editor-grid">
          <form
            className="admin-form"
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              persist(draft, saved?.status ?? 'draft', true);
            }}
          >
            {errorList.length > 0 && (
              <div className="admin-error-summary" role="alert">
                <p>Please fix the following:</p>
                <ul>
                  {errorList.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </div>
            )}
            <Form
              draft={draft}
              errors={errors}
              items={others}
              update={(patch) =>
                setView((current) =>
                  current.mode === 'edit'
                    ? { ...current, draft: { ...current.draft, ...patch } }
                    : current,
                )
              }
            />
            <div className="admin-actions">
              {isPublished ? (
                <>
                  <button type="submit" className="button" disabled={Boolean(busy)}>
                    Save and update website
                  </button>
                  <button
                    type="button"
                    className="admin-button"
                    disabled={Boolean(busy)}
                    onClick={() => persist(draft, 'draft', true)}
                  >
                    Unpublish
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="button"
                    disabled={Boolean(busy)}
                    onClick={() => persist(draft, 'published', true)}
                  >
                    Publish
                  </button>
                  <button type="submit" className="admin-button" disabled={Boolean(busy)}>
                    Save draft
                  </button>
                </>
              )}
              {saved && (
                <button
                  type="button"
                  className="admin-button is-quiet"
                  onClick={() => confirmDiscard() && open(config.duplicate(saved, items), null)}
                >
                  Duplicate
                </button>
              )}
              {saved && !isArchived(saved) && (
                <button
                  type="button"
                  className="admin-button is-danger"
                  disabled={Boolean(busy)}
                  onClick={() => archive(saved)}
                >
                  Archive
                </button>
              )}
            </div>
          </form>
          <aside className="admin-preview" aria-label="Preview">
            <p className="admin-preview-label">Preview on the public website</p>
            <div className="admin-preview-surface">
              <Preview draft={draft} items={others} />
            </div>
          </aside>
        </div>
      </section>
    );
  }

  if (view.mode === 'order' && config.orderGroups) {
    return (
      <ReorderList
        title={`Arrange ${title.toLowerCase()}`}
        groups={config.orderGroups(items.filter((item) => !isArchived(item))).map((group) => ({
          label: group.label,
          items: group.items.map((item) => ({ id: item.id, label: label(item), status: item })),
        }))}
        onCancel={() => backToList()}
        onSave={async (ids) => {
          await saveOrder(table, ids);
          await refresh();
          backToList('New order saved. The website shows it now.');
        }}
      />
    );
  }

  return (
    <section className="admin-collection">
      <div className="admin-toolbar">
        <h2 ref={heading}>
          {title} <span className="admin-count">{counts.current}</span>
        </h2>
        <div className="admin-toolbar-actions">
          {config.orderGroups && (
            <button
              type="button"
              className="admin-button"
              onClick={() => setView({ mode: 'order' })}
              disabled={loading}
            >
              Arrange order
            </button>
          )}
          <button
            type="button"
            className="button"
            disabled={loading}
            onClick={() => open(config.createDraft(items), null)}
          >
            Add {singular}
          </button>
        </div>
      </div>
      {config.intro && <p className="admin-intro">{config.intro}</p>}
      {statusMessage}
      <div className="admin-tabs" role="tablist" aria-label={`Show ${title.toLowerCase()}`}>
        {(
          [
            ['current', 'All'],
            ['published', 'Published'],
            ['draft', 'Drafts'],
            ['archived', 'Archived'],
          ] as const
        ).map(([value, text]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={tab === value}
            onClick={() => setTab(value)}
          >
            {text} <span className="admin-tab-count">{counts[value]}</span>
          </button>
        ))}
      </div>
      <div className="admin-filters">
        <label className="admin-search">
          <span className="visually-hidden">Search {title.toLowerCase()}</span>
          <input
            type="search"
            placeholder={`Search ${title.toLowerCase()}`}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        {(config.filters ?? []).map((filter, index) => (
          <label key={filter.label}>
            <span className="visually-hidden">{filter.label}</span>
            <select
              value={filterValues[index]}
              onChange={(event) =>
                setFilterValues((values) =>
                  values.map((value, i) => (i === index ? event.target.value : value)),
                )
              }
            >
              <option value="">{filter.label}: all</option>
              {filter.options(items).map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
      {loadError && (
        <div className="admin-error-summary" role="alert">
          <p>{loadError}</p>
          <button type="button" className="admin-button" onClick={refresh}>
            Try again
          </button>
        </div>
      )}
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              {config.columns.map((column) => (
                <th key={column.label} scope="col" className={column.className}>
                  {column.label}
                </th>
              ))}
              <th scope="col">Status</th>
              <th scope="col">Last changed</th>
              <th scope="col">
                <span className="visually-hidden">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {visible.map((item) => (
              <tr key={item.id}>
                {config.columns.map((column) => (
                  <td key={column.label} className={column.className} data-label={column.label}>
                    {column.render(item)}
                  </td>
                ))}
                <td data-label="Status">
                  <StatusBadge item={item} />
                </td>
                <td data-label="Last changed" className="admin-col-date">
                  {updatedLabel(item.updated_at)}
                </td>
                <td className="admin-row-actions">
                  {isArchived(item) ? (
                    <>
                      <button type="button" className="admin-button" onClick={() => restore(item)}>
                        Restore<span className="visually-hidden"> {label(item)}</span>
                      </button>
                      <button
                        type="button"
                        className="admin-button is-danger"
                        onClick={() => destroy(item)}
                      >
                        Delete permanently<span className="visually-hidden"> {label(item)}</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="admin-button"
                        onClick={() => open(item, item)}
                      >
                        Edit<span className="visually-hidden"> {label(item)}</span>
                      </button>
                      <button
                        type="button"
                        className="admin-button is-quiet"
                        onClick={() =>
                          persist(item, item.status === 'published' ? 'draft' : 'published', false)
                        }
                      >
                        {item.status === 'published' ? 'Unpublish' : 'Publish'}
                        <span className="visually-hidden"> {label(item)}</span>
                      </button>
                      <button
                        type="button"
                        className="admin-button is-quiet"
                        onClick={() => open(config.duplicate(item, items), null)}
                      >
                        Duplicate<span className="visually-hidden"> {label(item)}</span>
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {!loading && visible.length === 0 && (
              <tr>
                <td colSpan={config.columns.length + 3}>
                  {query || filterValues.some(Boolean)
                    ? `No ${title.toLowerCase()} match your search.`
                    : tab === 'archived'
                      ? 'Nothing is archived.'
                      : `No ${title.toLowerCase()} yet.`}
                </td>
              </tr>
            )}
            {loading && (
              <tr>
                <td colSpan={config.columns.length + 3}>Loading…</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
