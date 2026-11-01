'use client';

import { useEffect, useState } from 'react';
import type { CmsClient } from './client';
import { getPublicClient } from './client';
import { cmsEnabled } from './config';

// Requests are shared by every component that needs the same content (the
// footer and the Resources page both read site text) and reused for a minute
// while a visitor moves between pages.
const reuseFor = 60_000;
const requests = new Map<string, { promise: Promise<unknown>; time: number }>();

function request<T>(key: string, load: (client: CmsClient) => Promise<T>) {
  const cached = requests.get(key);
  if (cached && Date.now() - cached.time < reuseFor) return cached.promise as Promise<T>;
  const promise = load(getPublicClient());
  requests.set(key, { promise, time: Date.now() });
  promise.catch(() => requests.delete(key));
  return promise;
}

/**
 * Shows the content baked into the page, then replaces it with the latest
 * published content from Supabase. If Supabase cannot be reached the baked-in
 * copy stays on screen, so a failed request never leaves the page empty.
 * `load` must be a module-level function: it is identified by `key`.
 */
export function useLiveContent<T>(
  key: string,
  initial: T,
  load: (client: CmsClient) => Promise<T>,
) {
  const [value, setValue] = useState(initial);
  useEffect(() => {
    if (!cmsEnabled) return;
    let active = true;
    request(key, load)
      .then((latest) => active && setValue(latest))
      .catch((error) =>
        console.warn(`Showing the saved copy of ${key}: live content could not be loaded.`, error),
      );
    return () => {
      active = false;
    };
    // `load` is identified by `key` (see above), so it is not a dependency.
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps
  return value;
}
