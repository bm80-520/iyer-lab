import Link from 'next/link';
import { NewsArticleLookup } from '@/components/live-content';

// Also serves news articles published since the last deployment: they have no
// prebuilt page yet, so the host answers with this page and the lookup loads them.
export default function NotFound() {
  return (
    <NewsArticleLookup
      fallback={
        <div className="container page-content">
          <h1>404</h1>
          <Link href="/">Home</Link>
        </div>
      }
    />
  );
}
