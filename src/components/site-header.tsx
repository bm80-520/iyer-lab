import Link from 'next/link';
import { navigation } from '@/lib/site';

export function SiteHeader() {
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="wordmark" aria-label="Iyer Lab home">IYER<span>LAB</span><small>Rice University · Biosciences</small></Link>
      <nav aria-label="Main navigation">{navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    </div>
  </header>;
}
