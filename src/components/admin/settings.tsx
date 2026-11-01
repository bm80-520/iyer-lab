'use client';

import { useEffect, useState } from 'react';
import { changePassword, currentUser, explain, exportContent, signOut } from '@/lib/cms/admin';
import { supabaseUrl } from '@/lib/cms/config';

function PasswordForm({ email }: { email: string }) {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [repeat, setRepeat] = useState('');
  const [message, setMessage] = useState<{ text: string; error?: boolean }>({ text: '' });
  const [busy, setBusy] = useState(false);
  return (
    <form
      className="admin-form"
      noValidate
      onSubmit={async (event) => {
        event.preventDefault();
        if (next.length < 12 || !/[a-z]/i.test(next) || !/\d/.test(next))
          return setMessage({
            text: 'Use at least 12 characters, including letters and numbers.',
            error: true,
          });
        if (next !== repeat)
          return setMessage({ text: 'The new passwords do not match.', error: true });
        setBusy(true);
        try {
          await changePassword(email, current, next);
          setCurrent('');
          setNext('');
          setRepeat('');
          setMessage({ text: 'Password changed. Use the new password next time you sign in.' });
        } catch (failure) {
          setMessage({ text: explain(failure), error: true });
        } finally {
          setBusy(false);
        }
      }}
    >
      <fieldset>
        <legend>Change password</legend>
        <TextFieldPassword
          label="Current password"
          value={current}
          onChange={setCurrent}
          autoComplete="current-password"
        />
        <TextFieldPassword
          label="New password"
          hint="At least 12 characters, including letters and numbers."
          value={next}
          onChange={setNext}
          autoComplete="new-password"
        />
        <TextFieldPassword
          label="Repeat the new password"
          value={repeat}
          onChange={setRepeat}
          autoComplete="new-password"
        />
        <div className="admin-actions is-compact">
          <button type="submit" className="button" disabled={busy || !current || !next}>
            {busy ? 'Changing…' : 'Change password'}
          </button>
          <span className={`admin-status${message.error ? ' is-error' : ''}`} role="status">
            {message.text}
          </span>
        </div>
      </fieldset>
    </form>
  );
}

function TextFieldPassword({
  label,
  hint,
  value,
  onChange,
  autoComplete,
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete: string;
}) {
  const id = label.toLowerCase().replace(/\W+/g, '-');
  return (
    <div className="admin-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="password"
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {hint && <p className="admin-hint">{hint}</p>}
    </div>
  );
}

export function Settings() {
  const [email, setEmail] = useState('');
  const [backup, setBackup] = useState<{ text: string; error?: boolean }>({ text: '' });
  useEffect(() => {
    currentUser().then((user) => setEmail(user?.email ?? ''));
  }, []);
  return (
    <section>
      <div className="admin-toolbar">
        <h2>Settings</h2>
      </div>
      <div className="admin-settings">
        <div className="admin-form">
          <fieldset>
            <legend>Account</legend>
            <p>
              Signed in as <strong>{email}</strong>
            </p>
            <p className="admin-hint">
              You are signed out automatically after an hour without activity. New administrator
              accounts are added in Supabase (see docs/CMS.md); the website has no public
              registration.
            </p>
            <div className="admin-actions is-compact">
              <button type="button" className="admin-button" onClick={() => signOut()}>
                Sign out
              </button>
              <button
                type="button"
                className="admin-button is-quiet"
                onClick={() => signOut('global')}
              >
                Sign out on every device
              </button>
            </div>
          </fieldset>
        </div>
        {email && <PasswordForm email={email} />}
        <div className="admin-form">
          <fieldset>
            <legend>Backup</legend>
            <p>
              Download every publication, team member, news item, research entry, website text and
              media record as one file. Keep a copy before large changes. The files themselves stay
              in Supabase Storage; the full backup command in docs/CMS.md also downloads them.
            </p>
            <div className="admin-actions is-compact">
              <button
                type="button"
                className="admin-button"
                onClick={async () => {
                  setBackup({ text: 'Preparing…' });
                  try {
                    const data = await exportContent();
                    const blob = new Blob([JSON.stringify(data, null, 2)], {
                      type: 'application/json',
                    });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = `iyer-lab-content-${data.exported_at.slice(0, 10)}.json`;
                    link.click();
                    URL.revokeObjectURL(link.href);
                    setBackup({ text: 'Backup downloaded.' });
                  } catch (failure) {
                    setBackup({ text: explain(failure), error: true });
                  }
                }}
              >
                Download content backup
              </button>
              <span className={`admin-status${backup.error ? ' is-error' : ''}`} role="status">
                {backup.text}
              </span>
            </div>
          </fieldset>
        </div>
        <div className="admin-form">
          <fieldset>
            <legend>Connection</legend>
            <p className="admin-hint">
              Content is stored in Supabase at {new URL(supabaseUrl).host}.
            </p>
          </fieldset>
        </div>
      </div>
    </section>
  );
}
