import Link from 'next/link';
import { pages } from '@/lib/content';
import { withBasePath } from '@/lib/site';

export default function NotFound() {
  const home = pages.find(page => page.slug === '')!;
  return <>
    {home.styles.map(href => <link key={href} rel="stylesheet" href={withBasePath(href)} precedence="original" />)}
    <main id="main" className="main_color"><div className="container"><h1>404</h1><Link href="/">Home</Link></div></main>
  </>;
}
