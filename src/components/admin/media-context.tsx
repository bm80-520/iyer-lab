'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { listMedia, explain } from '@/lib/cms/admin';
import { publicBucket, publicFileUrl } from '@/lib/cms/config';
import { lookupFrom, type MediaLookup, type MediaRow } from '@/lib/cms/mappers';

type MediaState = {
  media: MediaRow[];
  lookup: MediaLookup;
  loading: boolean;
  error: string;
  refresh: () => Promise<void>;
  /** Adds or updates one file after an upload or edit, without reloading. */
  remember: (row: MediaRow) => void;
  forget: (id: string) => void;
};

const MediaContext = createContext<MediaState | null>(null);

// The Media Library is loaded once for the whole dashboard, so every image
// field, picker and preview shows the same, current files.
export function MediaProvider({ children }: { children: React.ReactNode }) {
  const [media, setMedia] = useState<MediaRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const refresh = useCallback(async () => {
    try {
      setMedia(await listMedia());
      setError('');
    } catch (failure) {
      setError(explain(failure));
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    refresh();
  }, [refresh]);
  const value = useMemo<MediaState>(
    () => ({
      media,
      lookup: lookupFrom(media),
      loading,
      error,
      refresh,
      remember: (row) =>
        setMedia((rows) =>
          rows.some((item) => item.id === row.id)
            ? rows.map((item) => (item.id === row.id ? row : item))
            : [row, ...rows],
        ),
      forget: (id) => setMedia((rows) => rows.filter((item) => item.id !== id)),
    }),
    [media, loading, error, refresh],
  );
  return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>;
}

export function useMedia() {
  const value = useContext(MediaContext);
  if (!value) throw new Error('useMedia must be used inside the dashboard');
  return value;
}

/** A small preview for lists and pickers: the thumbnail when one was made. */
export function thumbnailUrl(row: MediaRow | null) {
  if (!row || row.bucket !== publicBucket || row.file_type === 'application/pdf') return '';
  return publicFileUrl(row.thumbnail_path ?? row.storage_path);
}
