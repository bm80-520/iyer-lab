'use client';

import '@/styles/admin.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getAdminClient } from '@/lib/cms/client';
import { cmsEnabled } from '@/lib/cms/config';
import { currentUser, isAdmin, signOut } from '@/lib/cms/admin';
import { withBasePath } from '@/lib/site';
import { MediaProvider } from './media-context';

export const adminSections = [
  { href: '/admin/', label: 'Overview' },
  { href: '/admin/publications/', label: 'Publications' },
  { href: '/admin/team/', label: 'Team' },
  { href: '/admin/news/', label: 'Lab News' },
  { href: '/admin/research/', label: 'Research Areas' },
  { href: '/admin/media/', label: 'Media Library' },
  { href: '/admin/content/', label: 'Website Content' },
  { href: '/admin/settings/', label: 'Settings' },
];

/** Signed-in administrators are signed out after this long without activity. */
const idleLimit = 60 * 60 * 1000;

function goToLogin(reason?: 'idle' | 'signed-out') {
  const next = window.location.pathname + window.location.search;
  const params = new URLSearchParams({ next });
  if (reason) params.set('reason', reason);
  window.location.replace(`${withBasePath('/login/')}?${params}`);
}

function useIdleSignOut(active: boolean) {
  useEffect(() => {
    if (!active) return;
    let timer = 0;
    const reset = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(async () => {
        await signOut();
        goToLogin('idle');
      }, idleLimit);
    };
    const events = ['pointerdown', 'keydown', 'scroll', 'focus'] as const;
    events.forEach((event) => window.addEventListener(event, reset, { passive: true }));
    reset();
    return () => {
      window.clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, reset));
    };
  }, [active]);
}

type Access = 'checking' | 'admin' | 'not-admin';

// Every dashboard page renders inside this shell. It only shows the dashboard
// to a signed-in administrator; the database enforces the same rule
// independently, so nothing here is a security boundary on its own.
export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [access, setAccess] = useState<Access>('checking');
  const [email, setEmail] = useState('');
  useIdleSignOut(access === 'admin');
  useEffect(() => {
    if (!cmsEnabled) return;
    (async () => {
      const user = await currentUser();
      if (!user) return goToLogin();
      setEmail(user.email ?? '');
      setAccess((await isAdmin()) ? 'admin' : 'not-admin');
    })();
    const { data } = getAdminClient().auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') goToLogin('signed-out');
    });
    return () => data.subscription.unsubscribe();
  }, []);

  if (!cmsEnabled)
    return (
      <div className="container page-content admin-page">
        <p className="admin-notice" role="note">
          This copy of the website is not connected to Supabase, so the dashboard is unavailable.
          See docs/CMS.md to set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.
        </p>
      </div>
    );
  if (access === 'checking')
    return <div className="container page-content admin-page" aria-busy="true" />;
  if (access === 'not-admin')
    return (
      <div className="container page-content admin-page">
        <p className="admin-notice" role="alert">
          {email} is signed in but is not authorized to edit the website.
        </p>
        <button type="button" className="admin-button" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  return (
    <div className="container page-content admin-page">
      <div className="admin-layout">
        <nav className="admin-sidebar" aria-label="Dashboard sections">
          <p className="admin-sidebar-title">Dashboard</p>
          {adminSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              aria-current={pathname === section.href ? 'page' : undefined}
            >
              {section.label}
            </Link>
          ))}
          <div className="admin-account">
            <span title={email}>{email}</span>
            <button type="button" className="admin-button is-quiet" onClick={() => signOut()}>
              Sign out
            </button>
            <Link href="/">View website</Link>
          </div>
        </nav>
        <div className="admin-main">
          <MediaProvider>{children}</MediaProvider>
        </div>
      </div>
    </div>
  );
}
