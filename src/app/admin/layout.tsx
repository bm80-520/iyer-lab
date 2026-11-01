import type { Metadata } from 'next';
import { AdminShell } from '@/components/admin/admin-shell';

export const metadata: Metadata = {
  title: { default: 'Dashboard', template: '%s – Dashboard' },
  robots: { index: false, follow: false },
};

// The dashboard is a static page like the rest of the site: everything in it
// loads in the browser, for a signed-in administrator only.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
