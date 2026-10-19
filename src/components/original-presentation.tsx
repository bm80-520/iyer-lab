'use client';

import { useEffect } from 'react';
import { withBasePath } from '@/lib/site';

// Original links deliberately use full-page navigation, so the theme initializes
// once per document and never competes with React over a changing content tree.
export function OriginalPresentation({ htmlClass, bodyClass }: { htmlClass: string; bodyClass: string }) {
  useEffect(() => {
    document.documentElement.className = htmlClass;
    document.body.className = bodyClass;
    if (document.getElementById('original-presentation')) return;
    const script = document.createElement('script');
    script.id = 'original-presentation';
    script.src = withBasePath('/original/presentation.js');
    document.body.appendChild(script);
  }, [htmlClass, bodyClass]);
  return null;
}
