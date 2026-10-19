import type { Metadata } from 'next';
import { pages } from '@/lib/content';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Iyer Lab – Cellular and Developmental Neuroimmunology – Rice University', template: '%s – Iyer Lab' },
};

const home = pages.find(page => page.slug === '')!;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-US" className={home.htmlClass} suppressHydrationWarning>
    <body id="top" className={home.bodyClass} suppressHydrationWarning>{children}</body>
  </html>;
}
