'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  deleteMedia,
  explain,
  formatBytes,
  mediaKind,
  mediaUsage,
  privateFileUrl,
  rejectFile,
  replaceMedia,
  setMediaVisibility,
  updateMediaDetails,
  uploadMedia,
  type MediaKind,
  type MediaUse,
} from '@/lib/cms/admin';
import { publicBucket } from '@/lib/cms/config';
import { fileUrl, type MediaRow } from '@/lib/cms/mappers';
import { thumbnailUrl, useMedia } from './media-context';
import { CheckboxField, TextArea, TextField } from './fields';

function useFilteredMedia(kind: MediaKind | 'all', query: string) {
  const { media } = useMedia();
  return useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    return media.filter(
      (row) =>
        (kind === 'all' || mediaKind(row) === kind) &&
        words.every((word) =>
          `${row.filename} ${row.description} ${row.alt_text}`.toLowerCase().includes(word),
        ),
    );
  }, [media, kind, query]);
}

function MediaTile({
  row,
  selected,
  onClick,
}: {
  row: MediaRow;
  selected: boolean;
  onClick: () => void;
}) {
  const preview = thumbnailUrl(row);
  return (
    <button
      type="button"
      className="admin-media-tile"
      aria-pressed={selected}
      onClick={onClick}
      title={row.filename}
    >
      <span className="admin-media-thumb">
        {preview ? (
          <img src={preview} alt="" loading="lazy" />
        ) : (
          <span className="admin-file-icon">PDF</span>
        )}
      </span>
      <span className="admin-media-name">{row.filename}</span>
      <span className="admin-media-meta">
        {formatBytes(row.file_size)}
        {row.bucket !== publicBucket && ' · Private'}
      </span>
    </button>
  );
}

/** Upload buttons and drag-and-drop for one or more files. */
function UploadZone({
  kind,
  onUploaded,
}: {
  kind?: MediaKind;
  onUploaded: (rows: MediaRow[]) => void;
}) {
  const { remember } = useMedia();
  const input = useRef<HTMLInputElement>(null);
  const [publicPdfs, setPublicPdfs] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [status, setStatus] = useState('');
  const [problems, setProblems] = useState<string[]>([]);
  const upload = async (files: File[]) => {
    if (!files.length) return;
    const found: string[] = [];
    const rows: MediaRow[] = [];
    for (const [index, file] of files.entries()) {
      const problem = rejectFile(file, { kind, isPublic: publicPdfs });
      if (problem) {
        found.push(problem);
        continue;
      }
      setStatus(`Uploading ${index + 1} of ${files.length}: ${file.name}…`);
      try {
        const row = await uploadMedia(file, { isPublic: publicPdfs });
        remember(row);
        rows.push(row);
      } catch (failure) {
        found.push(`${file.name}: ${explain(failure)}`);
      }
    }
    setProblems(found);
    setStatus(rows.length ? `Uploaded ${rows.length} file${rows.length > 1 ? 's' : ''}.` : '');
    if (input.current) input.current.value = '';
    onUploaded(rows);
  };
  return (
    <div
      className={`admin-upload-zone${dragging ? ' is-dragging' : ''}`}
      onDragOver={(event) => {
        event.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(event) => {
        event.preventDefault();
        setDragging(false);
        upload([...event.dataTransfer.files]);
      }}
    >
      <input
        ref={input}
        className="visually-hidden"
        type="file"
        multiple
        tabIndex={-1}
        accept={
          kind === 'image'
            ? 'image/jpeg,image/png,image/webp,image/gif'
            : kind === 'pdf'
              ? 'application/pdf'
              : 'image/jpeg,image/png,image/webp,image/gif,application/pdf'
        }
        onChange={(event) => upload([...(event.target.files ?? [])])}
      />
      <button type="button" className="button" onClick={() => input.current?.click()}>
        Upload files
      </button>
      <p className="admin-hint">
        Or drag files here.{' '}
        {kind === 'pdf'
          ? 'PDF documents up to 25 MB.'
          : kind === 'image'
            ? 'JPEG, PNG, WebP or GIF images up to 20 MB.'
            : 'Images (JPEG, PNG, WebP, GIF; up to 20 MB) and PDF documents (up to 25 MB).'}
      </p>
      {kind !== 'image' && (
        <CheckboxField
          label="Make uploaded PDFs public"
          hint="Leave unticked for PDFs that may not be shared publicly; you can change this later."
          checked={publicPdfs}
          onChange={setPublicPdfs}
        />
      )}
      <p className="admin-status" role="status">
        {status}
      </p>
      {problems.length > 0 && (
        <div className="admin-error-summary" role="alert">
          <ul>
            {problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MediaDetails({ row, onClose }: { row: MediaRow; onClose: () => void }) {
  const { remember, forget } = useMedia();
  const replaceInput = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState({
    filename: row.filename,
    alt_text: row.alt_text,
    description: row.description,
  });
  const [usage, setUsage] = useState<MediaUse[] | null>(null);
  const [busy, setBusy] = useState('');
  const [message, setMessage] = useState('');
  const [problem, setProblem] = useState('');
  const [privateUrl, setPrivateUrl] = useState('');
  useEffect(() => {
    setDraft({ filename: row.filename, alt_text: row.alt_text, description: row.description });
    setMessage('');
    setProblem('');
    setUsage(null);
    mediaUsage(row.id)
      .then(setUsage)
      .catch((failure) => setProblem(explain(failure)));
    if (row.bucket !== publicBucket)
      privateFileUrl(row)
        .then(setPrivateUrl)
        .catch(() => setPrivateUrl(''));
  }, [row]);
  const run = async (label: string, action: () => Promise<string>) => {
    setBusy(label);
    setProblem('');
    setMessage('');
    try {
      setMessage(await action());
    } catch (failure) {
      setProblem(explain(failure));
    } finally {
      setBusy('');
    }
  };
  const dirty =
    draft.filename !== row.filename ||
    draft.alt_text !== row.alt_text ||
    draft.description !== row.description;
  const url = row.bucket === publicBucket ? fileUrl(row) : privateUrl;
  const used = usage?.length ?? 0;
  return (
    <aside className="admin-media-details" aria-label="File details">
      <div className="admin-toolbar">
        <h3>File details</h3>
        <button type="button" className="admin-button is-quiet" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="admin-media-large">
        {mediaKind(row) === 'image' ? (
          <img src={fileUrl(row)} alt="" />
        ) : (
          <span className="admin-file-icon">PDF</span>
        )}
      </div>
      <dl className="admin-facts">
        <dt>Type</dt>
        <dd>{row.file_type.replace('image/', '').replace('application/', '').toUpperCase()}</dd>
        <dt>Size</dt>
        <dd>
          {formatBytes(row.file_size)}
          {row.width ? ` · ${row.width}×${row.height} pixels` : ''}
        </dd>
        <dt>Uploaded</dt>
        <dd>{new Date(row.uploaded_at).toLocaleDateString('en-US', { dateStyle: 'medium' })}</dd>
        <dt>Visibility</dt>
        <dd>{row.bucket === publicBucket ? 'Public' : 'Private (administrators only)'}</dd>
      </dl>
      {url && (
        <p className="admin-hint">
          <a href={url} target="_blank" rel="noreferrer">
            Open the file
          </a>
          {row.bucket === publicBucket && (
            <>
              {' · '}
              <button
                type="button"
                className="admin-link-button"
                onClick={() =>
                  navigator.clipboard.writeText(url).then(() => setMessage('Link copied.'))
                }
              >
                Copy link
              </button>
            </>
          )}
        </p>
      )}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          run('Saving…', async () => {
            remember(await updateMediaDetails(row.id, draft));
            return 'Details saved.';
          });
        }}
      >
        <TextField
          label="File name"
          value={draft.filename}
          onChange={(filename) => setDraft({ ...draft, filename })}
        />
        {mediaKind(row) === 'image' && (
          <TextArea
            label="Default alt text"
            rows={2}
            hint="Used wherever this image appears without its own alt text."
            value={draft.alt_text}
            onChange={(alt_text) => setDraft({ ...draft, alt_text })}
          />
        )}
        <TextArea
          label="Description (for your reference)"
          rows={2}
          value={draft.description}
          onChange={(description) => setDraft({ ...draft, description })}
        />
        <button
          type="submit"
          className="button"
          disabled={!dirty || Boolean(busy) || !draft.filename.trim()}
        >
          Save details
        </button>
      </form>
      <h4>Used in</h4>
      {usage === null ? (
        <p className="admin-hint">Checking…</p>
      ) : used === 0 ? (
        <p className="admin-hint">Not used on the website.</p>
      ) : (
        <ul className="admin-usage">
          {usage.map((use) => (
            <li key={`${use.record_id}-${use.field}`}>
              {use.title.replace(/[*_]/g, '')}{' '}
              <span className="admin-hint">
                ({use.kind}, {use.field})
              </span>
            </li>
          ))}
        </ul>
      )}
      <div className="admin-media-actions">
        <input
          ref={replaceInput}
          className="visually-hidden"
          type="file"
          tabIndex={-1}
          accept={
            mediaKind(row) === 'pdf'
              ? 'application/pdf'
              : 'image/jpeg,image/png,image/webp,image/gif'
          }
          onChange={(event) => {
            const file = event.target.files?.[0];
            event.target.value = '';
            if (!file) return;
            if (
              used > 0 &&
              !window.confirm(
                `Replace this file everywhere it is used (${used} place${used > 1 ? 's' : ''})?`,
              )
            )
              return;
            run('Replacing…', async () => {
              remember(await replaceMedia(row, file));
              return 'File replaced. Every page using it now shows the new file.';
            });
          }}
        />
        <button
          type="button"
          className="admin-button"
          disabled={Boolean(busy)}
          onClick={() => replaceInput.current?.click()}
        >
          Replace file…
        </button>
        {mediaKind(row) === 'pdf' && (
          <button
            type="button"
            className="admin-button"
            disabled={Boolean(busy)}
            onClick={() =>
              run('Updating…', async () => {
                const updated = await setMediaVisibility(row, row.bucket !== publicBucket);
                remember(updated);
                return updated.bucket === publicBucket
                  ? 'The file is now public.'
                  : 'The file is now private.';
              })
            }
          >
            {row.bucket === publicBucket ? 'Make private' : 'Make public'}
          </button>
        )}
        <button
          type="button"
          className="admin-button is-danger"
          disabled={Boolean(busy) || usage === null || used > 0}
          title={
            used > 0 ? 'Remove the file from the entries above before deleting it.' : undefined
          }
          onClick={() => {
            if (!window.confirm(`Permanently delete ${row.filename}? This cannot be undone.`))
              return;
            run('Deleting…', async () => {
              await deleteMedia(row);
              forget(row.id);
              onClose();
              return '';
            });
          }}
        >
          Delete
        </button>
      </div>
      {used > 0 && (
        <p className="admin-hint">
          Files in use cannot be deleted; remove them from those entries first.
        </p>
      )}
      <p className="admin-status" role="status">
        {busy || message}
      </p>
      {problem && (
        <p className="admin-error" role="alert">
          {problem}
        </p>
      )}
    </aside>
  );
}

function MediaBrowser({
  kind: fixedKind,
  selectedId,
  onSelect,
  onUploaded,
}: {
  kind?: MediaKind;
  selectedId: string | null;
  onSelect: (row: MediaRow) => void;
  onUploaded: (rows: MediaRow[]) => void;
}) {
  const { loading, error } = useMedia();
  const [kind, setKind] = useState<MediaKind | 'all'>(fixedKind ?? 'all');
  const [query, setQuery] = useState('');
  const files = useFilteredMedia(fixedKind ?? kind, query);
  return (
    <>
      <UploadZone kind={fixedKind} onUploaded={onUploaded} />
      <div className="admin-filters">
        <label className="admin-search">
          <span className="visually-hidden">Search files</span>
          <input
            type="search"
            placeholder="Search by file name or description"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        {!fixedKind && (
          <label>
            <span className="visually-hidden">File type</span>
            <select value={kind} onChange={(event) => setKind(event.target.value as typeof kind)}>
              <option value="all">All files</option>
              <option value="image">Images</option>
              <option value="pdf">PDF documents</option>
            </select>
          </label>
        )}
      </div>
      {error && (
        <p className="admin-error" role="alert">
          {error}
        </p>
      )}
      {loading ? (
        <p className="admin-hint">Loading files…</p>
      ) : files.length === 0 ? (
        <p className="admin-hint">{query ? `No files match “${query}”.` : 'No files yet.'}</p>
      ) : (
        <div className="admin-media-grid">
          {files.map((row) => (
            <MediaTile
              key={row.id}
              row={row}
              selected={row.id === selectedId}
              onClick={() => onSelect(row)}
            />
          ))}
        </div>
      )}
    </>
  );
}

/** The Media Library page. */
export function MediaLibrary() {
  const { media } = useMedia();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = media.find((row) => row.id === selectedId) ?? null;
  return (
    <section>
      <div className="admin-toolbar">
        <h2>
          Media Library <span className="admin-count">{media.length}</span>
        </h2>
      </div>
      <p className="admin-intro">
        Upload images and PDFs once and reuse them for publications, news, team profiles and
        research. Replacing a file here updates every page that uses it.
      </p>
      <div className={`admin-media-layout${selected ? ' has-details' : ''}`}>
        <div>
          <MediaBrowser
            selectedId={selectedId}
            onSelect={(row) => setSelectedId(row.id)}
            onUploaded={(rows) => rows[0] && setSelectedId(rows[0].id)}
          />
        </div>
        {selected && <MediaDetails row={selected} onClose={() => setSelectedId(null)} />}
      </div>
    </section>
  );
}

/**
 * A dialog for choosing (or uploading) a file for one field. It is rendered
 * outside the entry's form so pressing Enter in its search box cannot submit it.
 */
export function MediaPicker({
  kind,
  onSelect,
  onClose,
}: {
  kind: MediaKind;
  onSelect: (row: MediaRow) => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<MediaRow | null>(null);
  useEffect(() => {
    dialog.current?.showModal();
  }, []);
  return createPortal(
    <dialog
      ref={dialog}
      className="admin-dialog"
      aria-label={kind === 'pdf' ? 'Choose a PDF' : 'Choose an image'}
      onClose={onClose}
    >
      <div className="admin-toolbar">
        <h2>{kind === 'pdf' ? 'Choose a PDF' : 'Choose an image'}</h2>
        <button type="button" className="admin-button is-quiet" onClick={onClose}>
          Cancel
        </button>
      </div>
      <MediaBrowser
        kind={kind}
        selectedId={selected?.id ?? null}
        onSelect={setSelected}
        onUploaded={(rows) => rows[0] && setSelected(rows[0])}
      />
      <div className="admin-actions">
        <button
          type="button"
          className="button"
          disabled={!selected}
          onClick={() => selected && onSelect(selected)}
        >
          Use {selected ? selected.filename : 'selected file'}
        </button>
      </div>
    </dialog>,
    document.body,
  );
}
