import Link from 'next/link';
import site from '../../content/data/site.json';
import { loadSiteContent } from '@/lib/cms/snapshot';
import { InlineMarkdown } from './markdown';
import { SiteImage } from './site-image';
import { SiteTextBlock } from './live-content';

export async function SiteFooter() {
  const footer = site.footer;
  const { text } = await loadSiteContent();
  return (
    <>
      <footer className="site-footer" id="footer">
        <div className="container footer-grid">
          <section className="footer-widget">
            <p>
              <SiteImage image={footer.biosciences} />
            </p>
          </section>
          <section className="footer-widget">
            <h3>{footer.linksTitle}</h3>
            <p>
              {footer.links.map((link, index) => (
                <span key={link.href}>
                  <a href={link.href}>{link.label}</a>
                  {index < footer.links.length - 1 && <br />}
                </span>
              ))}
            </p>
          </section>
          <section className="footer-widget footer-contact">
            <h3>{footer.contactTitle}</h3>
            <SiteTextBlock textKey="footer.contact" initial={text} format="lines" />
          </section>
          <section className="footer-widget">
            <p>
              <SiteImage image={footer.campus} />
            </p>
          </section>
        </div>
      </footer>
      <div className="site-copyright" id="socket">
        <div className="container copyright-inner">
          <span>
            <InlineMarkdown>{footer.copyright}</InlineMarkdown>
          </span>
          <nav aria-label="Footer navigation">
            {footer.linksInternal.map((item) =>
              item.href.startsWith('/') ? (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ),
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
