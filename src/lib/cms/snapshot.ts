import 'server-only';
import type { SiteContent } from '../content-types';
import { getPublicClient } from './client';
import { cmsEnabled } from './config';
import { loadFallbackContent } from './fallback';
import { fetchSiteContent } from './public-queries';

let snapshot: Promise<SiteContent> | undefined;

/**
 * The content baked into the static HTML at build time. With Supabase
 * configured it is the published database content, and the build fails if
 * the database cannot be reached (the previous deployment stays online).
 * Without Supabase it is the repository's content files. Either way, pages
 * refresh from Supabase in the browser, so edits appear without a rebuild.
 */
export function loadSiteContent() {
  return (snapshot ??= cmsEnabled ? fetchSiteContent(getPublicClient()) : loadFallbackContent());
}
