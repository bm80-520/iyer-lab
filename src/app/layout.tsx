import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Iyer Lab | Rice University', template: '%s | Iyer Lab' },
  description: 'The Iyer Laboratory at Rice University studies microglia, lysosomal biology, and the mechanisms of brain health and disease.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main">{children}</main>
    <footer className="site-footer"><div><strong>Iyer Laboratory</strong><p>Department of Biosciences · Rice University<br />6100 Main Street, Houston, TX 77005</p></div><div><a href="mailto:iyer@rice.edu">iyer@rice.edu</a><br /><Link href="/join-our-shoal/">Join our shoal →</Link></div></footer>
  </body></html>;
}
