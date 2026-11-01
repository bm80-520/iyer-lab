import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// A static export for GitHub Pages. Content managed in the dashboard is read
// from Supabase at build time and again in the browser (see docs/CMS.md).
const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default config;
