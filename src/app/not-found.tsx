import Link from 'next/link';

export default function NotFound() {
  return <div className="page-shell"><p className="eyebrow">404</p><h1>Page not found</h1><p>Let’s get you back to the lab.</p><Link className="button" href="/">Return home →</Link></div>;
}
