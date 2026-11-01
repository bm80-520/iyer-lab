import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { cmsEnabled, supabaseKey, supabaseUrl } from './config';
import type { Database } from './database.types';

export type CmsClient = SupabaseClient<Database>;

let publicClient: CmsClient | undefined;
let adminClient: CmsClient | undefined;

function requireConfig() {
  if (!cmsEnabled)
    throw new Error(
      'Supabase is not configured: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.',
    );
}

/**
 * Reads exactly what an anonymous visitor may see. It never uses the
 * dashboard's session, so a signed-in administrator browsing the public site
 * sees published content only, like everyone else.
 */
export function getPublicClient() {
  requireConfig();
  return (publicClient ??= createClient<Database>(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  }));
}

/** The dashboard's client: keeps the administrator's session in this browser. */
export function getAdminClient() {
  requireConfig();
  return (adminClient ??= createClient<Database>(supabaseUrl, supabaseKey, {
    auth: { persistSession: true, autoRefreshToken: true, storageKey: 'iyer-lab-admin-session' },
  }));
}
