// Supabase connection settings. Both values are public by design: the
// publishable (anon) key only grants what Row Level Security allows visitors.
// Never put the service-role or secret key in a NEXT_PUBLIC_ variable.
export const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? '').replace(/\/$/, '');
export const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? '';

/** False in a checkout without Supabase settings: pages use the repository's content. */
export const cmsEnabled = Boolean(supabaseUrl && supabaseKey);

export const publicBucket = 'media';
export const privateBucket = 'private-files';

export function publicFileUrl(storagePath: string) {
  const path = storagePath.split('/').map(encodeURIComponent).join('/');
  return `${supabaseUrl}/storage/v1/object/public/${publicBucket}/${path}`;
}
