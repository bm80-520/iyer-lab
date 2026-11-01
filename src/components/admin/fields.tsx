'use client';

import { useId, useRef, useState } from 'react';
import {
  explain,
  formatBytes,
  mediaKind,
  setMediaVisibility,
  uploadMedia,
  type MediaKind,
} from '@/lib/cms/admin';
import { publicBucket } from '@/lib/cms/config';
import { MediaPicker } from './media-library';
import { thumbnailUrl, useMedia } from './media-context';

type FieldProps = {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  wide?: boolean;
};

function Field({
  label,
  hint,
  error,
  required,
  wide,
  children,
}: FieldProps & { children: (id: string, describedBy?: string) => React.ReactNode }) {
  const id = useId();
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ');
  return (
    <div className={`admin-field${wide ? ' is-wide' : ''}${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children(id, describedBy || undefined)}
      {hint && (
        <p className="admin-hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="admin-error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({
  value,
  onChange,
  type = 'text',
  placeholder,
  suggestions,
  ...field
}: FieldProps & {
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'date' | 'email' | 'url' | 'number';
  placeholder?: string;
  /** Offered as the person types; any other value is still allowed. */
  suggestions?: string[];
}) {
  const listId = useId();
  return (
    <Field {...field}>
      {(id, describedBy) => (
        <>
          <input
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            required={field.required}
            list={suggestions ? listId : undefined}
            aria-invalid={field.error ? true : undefined}
            aria-describedby={describedBy}
            onChange={(event) => onChange(event.target.value)}
          />
          {suggestions && (
            <datalist id={listId}>
              {suggestions.map((option) => (
                <option key={option} value={option} />
              ))}
            </datalist>
          )}
        </>
      )}
    </Field>
  );
}

export function TextArea({
  value,
  onChange,
  rows = 4,
  placeholder,
  ...field
}: FieldProps & {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <Field {...field} wide>
      {(id, describedBy) => (
        <textarea
          id={id}
          rows={rows}
          value={value}
          placeholder={placeholder}
          required={field.required}
          aria-invalid={field.error ? true : undefined}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </Field>
  );
}

export const markdownHint =
  'Separate paragraphs with a blank line. **Bold**, *italic* and [link text](https://…) work.';

export function SelectField<T extends string>({
  value,
  onChange,
  options,
  ...field
}: FieldProps & {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <Field {...field}>
      {(id, describedBy) => (
        <select
          id={id}
          value={value}
          aria-describedby={describedBy}
          aria-invalid={field.error ? true : undefined}
          onChange={(event) => onChange(event.target.value as T)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </Field>
  );
}

export function CheckboxField({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string;
  hint?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="admin-field admin-checkbox">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />{' '}
        {label}
      </label>
      {hint && <p className="admin-hint">{hint}</p>}
    </div>
  );
}

/**
 * An image or PDF from the Media Library. Choosing a file from the computer
 * uploads it to the library straight away (with a preview), so it is stored
 * even before the entry is saved and can be reused elsewhere.
 */
export function MediaField({
  label,
  kind,
  value,
  onChange,
  alt,
  onAltChange,
  error,
  altError,
  hint,
}: {
  label: string;
  kind: MediaKind;
  value: string | null;
  onChange: (id: string | null) => void;
  /** Alt text for this use of the image; empty means the library's alt text. */
  alt?: string;
  onAltChange?: (alt: string) => void;
  error?: string;
  altError?: string;
  hint?: string;
}) {
  const { lookup, remember } = useMedia();
  const input = useRef<HTMLInputElement>(null);
  const [picking, setPicking] = useState(false);
  const [busy, setBusy] = useState('');
  const [problem, setProblem] = useState('');
  const media = lookup(value);
  const upload = async (file: File | undefined) => {
    if (!file) return;
    setProblem('');
    setBusy(`Uploading ${file.name}…`);
    try {
      const row = await uploadMedia(file, { isPublic: kind === 'image' });
      remember(row);
      onChange(row.id);
    } catch (failure) {
      setProblem(explain(failure));
    } finally {
      setBusy('');
      if (input.current) input.current.value = '';
    }
  };
  const togglePublic = async () => {
    if (!media) return;
    setBusy(media.bucket === publicBucket ? 'Making the file private…' : 'Making the file public…');
    try {
      remember(await setMediaVisibility(media, media.bucket !== publicBucket));
    } catch (failure) {
      setProblem(explain(failure));
    } finally {
      setBusy('');
    }
  };
  const preview = thumbnailUrl(media);
  return (
    <fieldset className={`admin-image-field${error ? ' has-error' : ''}`}>
      <legend>{label}</legend>
      <div className="admin-image-row">
        <div className="admin-image-preview">
          {preview ? (
            <img src={preview} alt="" />
          ) : media ? (
            <span className="admin-file-icon">PDF</span>
          ) : (
            <span>{kind === 'pdf' ? 'No PDF' : 'No image'}</span>
          )}
        </div>
        <div>
          <input
            ref={input}
            className="visually-hidden"
            type="file"
            tabIndex={-1}
            accept={
              kind === 'pdf' ? 'application/pdf' : 'image/jpeg,image/png,image/webp,image/gif'
            }
            onChange={(event) => upload(event.target.files?.[0])}
          />
          <button
            type="button"
            className="admin-button"
            disabled={Boolean(busy)}
            onClick={() => input.current?.click()}
          >
            {media ? 'Upload a replacement' : `Upload ${kind === 'pdf' ? 'a PDF' : 'an image'}`}
          </button>
          <button
            type="button"
            className="admin-button"
            disabled={Boolean(busy)}
            onClick={() => setPicking(true)}
          >
            Choose from library
          </button>
          {media && (
            <button
              type="button"
              className="admin-button is-quiet"
              disabled={Boolean(busy)}
              onClick={() => onChange(null)}
            >
              Remove
            </button>
          )}
          <p className="admin-hint" role="status">
            {busy ||
              (media
                ? `${media.filename} · ${formatBytes(media.file_size)}${
                    media.width ? ` · ${media.width}×${media.height}` : ''
                  }`
                : (hint ??
                  (kind === 'pdf'
                    ? 'PDF, up to 25 MB.'
                    : 'JPEG, PNG, WebP or GIF, up to 20 MB. Figures keep their proportions.')))}
          </p>
          {media && kind === 'pdf' && (
            <p className="admin-hint">
              {media.bucket === publicBucket
                ? 'Public: visitors can download this file.'
                : 'Private: kept in the Media Library and never linked on the website.'}{' '}
              <button
                type="button"
                className="admin-link-button"
                disabled={Boolean(busy)}
                onClick={togglePublic}
              >
                {media.bucket === publicBucket ? 'Make private' : 'Make public'}
              </button>
            </p>
          )}
          {(problem || error) && <p className="admin-error">{problem || error}</p>}
        </div>
      </div>
      {media && kind === 'image' && onAltChange && (
        <TextArea
          label="Image alt text"
          hint="Describe what the image shows for visitors using screen readers."
          rows={2}
          placeholder={media.alt_text || undefined}
          value={alt ?? ''}
          error={altError}
          onChange={onAltChange}
        />
      )}
      {picking && (
        <MediaPicker
          kind={kind}
          onClose={() => setPicking(false)}
          onSelect={(row) => {
            if (mediaKind(row) !== kind) return;
            onChange(row.id);
            setPicking(false);
          }}
        />
      )}
    </fieldset>
  );
}
