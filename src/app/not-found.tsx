import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="container page-content">
      <h1>404</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
