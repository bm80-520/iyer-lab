'use client';

import '@/styles/admin.css';
import { useEffect, useState } from 'react';
import { currentUser, isAdmin, signIn } from '@/lib/cms/admin';
import { cmsEnabled } from '@/lib/cms/config';
import { withBasePath } from '@/lib/site';

const notices: Record<string, string> = {
  idle: 'You were signed out after an hour without activity. Sign in again to continue.',
  'signed-out': 'You have been signed out.',
};

/** Only dashboard addresses are accepted as the page to return to. */
function returnTo() {
  const next = new URLSearchParams(window.location.search).get('next') ?? '';
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return next.startsWith(`${base}/admin/`) && !next.startsWith('//')
    ? next
    : withBasePath('/admin/');
}

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [missing, setMissing] = useState(false);
  const [pending, setPending] = useState(false);
  useEffect(() => {
    if (!cmsEnabled) return;
    setNotice(notices[new URLSearchParams(window.location.search).get('reason') ?? ''] ?? '');
    // Already signed in: go straight to the dashboard.
    currentUser().then(async (user) => {
      if (user && (await isAdmin())) window.location.replace(returnTo());
    });
  }, []);
  if (!cmsEnabled)
    return (
      <p className="admin-notice login-form" role="note">
        Sign-in is unavailable: this copy of the website is not connected to Supabase.
      </p>
    );
  return (
    <form
      className="login-form"
      noValidate
      onSubmit={async (event) => {
        event.preventDefault();
        setNotice('');
        setMissing(!email.trim() || !password);
        if (!email.trim() || !password) {
          setError('Enter your email address and your password.');
          return;
        }
        setPending(true);
        const result = await signIn(email, password);
        if (result.ok) {
          window.location.replace(returnTo());
          return;
        }
        setPending(false);
        setPassword('');
        setError(result.message);
      }}
    >
      <h2>Lab member sign-in</h2>
      <p>Sign in to manage the website’s publications, team, news and research pages.</p>
      <div className="login-error" role="alert" aria-live="assertive">
        {error && <p>{error}</p>}
      </div>
      {notice && (
        <p className="login-notice" role="status">
          {notice}
        </p>
      )}
      <label htmlFor="login-email">Email address</label>
      <input
        id="login-email"
        name="email"
        type="email"
        autoComplete="username"
        value={email}
        aria-invalid={missing && !email.trim() ? true : undefined}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="login-password">Password</label>
      <input
        id="login-password"
        name="password"
        type="password"
        autoComplete="current-password"
        value={password}
        aria-invalid={missing && !password ? true : undefined}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="button" type="submit" disabled={pending}>
        {pending ? 'Signing in…' : 'Log in'}
      </button>
      <p className="login-help">
        Forgotten your password? Ask the lab’s website administrator to reset it in Supabase.
      </p>
    </form>
  );
}
