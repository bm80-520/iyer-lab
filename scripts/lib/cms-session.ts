// Signs in to Supabase as a website administrator for the maintenance
// scripts. Uses the same publishable key as the website and the
// administrator's own email and password, so no privileged key is needed.
// Settings come from .env.local (see .env.example) or the environment:
//   NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
//   CMS_ADMIN_EMAIL, and optionally CMS_ADMIN_PASSWORD (otherwise prompted).
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { createInterface } from 'node:readline';
import type { Database } from '../../src/lib/cms/database.types';

export type AdminClient = SupabaseClient<Database>;

function setting(name: string) {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing ${name}. Add it to .env.local (see .env.example).`);
    process.exit(1);
  }
  return value;
}

function askHidden(question: string) {
  return new Promise<string>((resolve) => {
    const prompt = createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: true,
    });
    const write = (prompt as unknown as { _writeToOutput: (text: string) => void })._writeToOutput;
    (prompt as unknown as { _writeToOutput: (text: string) => void })._writeToOutput = (text) =>
      write.call(prompt, text.startsWith(question) ? text : '');
    prompt.question(question, (answer) => {
      prompt.close();
      process.stdout.write('\n');
      resolve(answer);
    });
  });
}

export async function signInAsAdmin(): Promise<AdminClient> {
  const url = setting('NEXT_PUBLIC_SUPABASE_URL');
  const key = setting('NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY');
  const email = setting('CMS_ADMIN_EMAIL');
  const password = process.env.CMS_ADMIN_PASSWORD || (await askHidden(`Password for ${email}: `));
  const client = createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { error } = await client.auth.signInWithPassword({ email, password });
  if (error) {
    console.error(`Could not sign in as ${email}: ${error.message}`);
    process.exit(1);
  }
  const { data: isAdmin } = await client.rpc('is_admin');
  if (!isAdmin) {
    console.error(`${email} signed in but is not listed in public.admins (see docs/CMS.md).`);
    process.exit(1);
  }
  console.log(`Signed in to ${new URL(url).host} as ${email}.`);
  return client;
}

export function check<T>(result: { data: T; error: { message: string } | null }, what: string) {
  if (result.error) throw new Error(`${what}: ${result.error.message}`);
  return result.data;
}

export const contentTables = [
  'media',
  'publications',
  'team_members',
  'news',
  'research_areas',
  'research_projects',
  'research_project_publications',
  'site_content',
] as const;
