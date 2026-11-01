'use client';

import { useEffect, useState } from 'react';
import { explain, listSiteText, saveSiteText } from '@/lib/cms/admin';
import type { SiteContentRow } from '@/lib/cms/mappers';
import { siteTextFields } from '@/lib/cms/site-text';
import { MarkdownText } from '../markdown-text';
import { TextArea, TextField, markdownHint } from './fields';

// Short passages of page text. The page layouts, fonts and colours stay in the
// website's code; only the words are edited here.
export function SiteTextManager() {
  const [rows, setRows] = useState<SiteContentRow[] | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Record<string, { text: string; error?: boolean }>>({});
  const [problem, setProblem] = useState('');
  useEffect(() => {
    listSiteText()
      .then((loaded) => {
        setRows(loaded);
        setValues(Object.fromEntries(loaded.map((row) => [row.content_key, row.content_value])));
      })
      .catch((failure) => setProblem(explain(failure)));
  }, []);
  const saved = (key: string) => rows?.find((row) => row.content_key === key)?.content_value ?? '';
  const dirtyKeys = Object.keys(values).filter((key) => values[key] !== saved(key));
  useEffect(() => {
    if (!dirtyKeys.length) return;
    const warn = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirtyKeys.length]);

  const save = async (key: string) => {
    setStatus((current) => ({ ...current, [key]: { text: 'Saving…' } }));
    try {
      const row = await saveSiteText(key, values[key]);
      setRows((current) => current!.map((item) => (item.content_key === key ? row : item)));
      setStatus((current) => ({ ...current, [key]: { text: 'Saved. The website shows it now.' } }));
    } catch (failure) {
      setStatus((current) => ({ ...current, [key]: { text: explain(failure), error: true } }));
    }
  };

  if (problem)
    return (
      <p className="admin-error" role="alert">
        {problem}
      </p>
    );
  if (!rows) return <p className="admin-hint">Loading…</p>;
  const pages = [...new Set(siteTextFields.map((field) => field.page))];
  return (
    <section>
      <div className="admin-toolbar">
        <h2>Website Content</h2>
        {dirtyKeys.length > 0 && (
          <button
            type="button"
            className="button"
            onClick={() => dirtyKeys.forEach((key) => save(key))}
          >
            Save all changes ({dirtyKeys.length})
          </button>
        )}
      </div>
      <p className="admin-intro">
        Edit the introductory and descriptive text of the website’s pages. Changes appear on the
        website as soon as they are saved.
      </p>
      {pages.map((page) => (
        <section className="admin-form admin-text-group" key={page}>
          <fieldset>
            <legend>{page}</legend>
            {siteTextFields
              .filter((field) => field.page === page)
              .map((field) => {
                const row = rows.find((item) => item.content_key === field.key);
                if (!row) return null;
                const dirty = values[field.key] !== row.content_value;
                return (
                  <div className="admin-text-item" key={field.key}>
                    {field.format === 'text' && !field.multiline ? (
                      <TextField
                        label={field.label}
                        hint={field.hint}
                        value={values[field.key]}
                        onChange={(value) => setValues({ ...values, [field.key]: value })}
                      />
                    ) : (
                      <TextArea
                        label={field.label}
                        rows={field.format === 'markdown' ? 6 : 5}
                        hint={[field.hint, field.format === 'markdown' && markdownHint]
                          .filter(Boolean)
                          .join(' ')}
                        value={values[field.key]}
                        onChange={(value) => setValues({ ...values, [field.key]: value })}
                      />
                    )}
                    {field.format === 'markdown' && (
                      <details className="admin-text-preview">
                        <summary>Preview</summary>
                        <MarkdownText source={values[field.key]} />
                      </details>
                    )}
                    <div className="admin-actions is-compact">
                      <button
                        type="button"
                        className="admin-button"
                        disabled={!dirty}
                        onClick={() => save(field.key)}
                      >
                        Save
                      </button>
                      {dirty && (
                        <button
                          type="button"
                          className="admin-button is-quiet"
                          onClick={() => setValues({ ...values, [field.key]: row.content_value })}
                        >
                          Undo changes
                        </button>
                      )}
                      <span
                        className={`admin-status${status[field.key]?.error ? ' is-error' : ''}`}
                        role="status"
                      >
                        {dirty ? 'Unsaved changes' : status[field.key]?.text}
                      </span>
                    </div>
                  </div>
                );
              })}
          </fieldset>
        </section>
      ))}
    </section>
  );
}
