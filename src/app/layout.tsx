import type { Metadata } from 'next';
import site from '../../content/data/site.json';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { withBasePath } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: { default: site.title, template: '%s – Iyer Lab' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        <SiteHeader />
        <main id="main">
          <div className="lab-banner">
            <img
              className="banner-desktop"
              src={withBasePath(site.banner.desktop.src)}
              alt={site.banner.desktop.alt}
            />
            <img
              className="banner-mobile"
              src={withBasePath(site.banner.mobile.src)}
              alt={site.banner.mobile.alt}
            />
          </div>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
