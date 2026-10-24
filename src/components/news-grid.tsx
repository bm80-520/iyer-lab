'use client';

import { useLayoutEffect, useRef } from 'react';

// The shortest-column layout reproduces the original news masonry. Its only
// inputs are ordinary article children; all visual styling stays in CSS.
export function NewsGrid({ children }: { children: React.ReactNode }) {
  const grid = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const element = grid.current!;
    let frame = 0;
    const layout = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const css = getComputedStyle(element);
        const columns = Number(css.getPropertyValue('--news-columns'));
        const trackScale = Number(css.getPropertyValue('--news-track-scale'));
        const left = parseFloat(css.paddingLeft),
          right = parseFloat(css.paddingRight),
          top = parseFloat(css.paddingTop),
          gap = parseFloat(css.gap);
        const width = ((element.clientWidth - left - right) * trackScale) / columns - gap;
        const heights = Array(columns).fill(top) as number[];
        element.classList.add('is-positioned');
        for (const child of Array.from(element.children) as HTMLElement[]) {
          const column = heights.indexOf(Math.min(...heights));
          child.style.width = `${width}px`;
          child.style.transform = `translate(${left + column * (width + gap)}px, ${heights[column]}px)`;
          heights[column] += child.getBoundingClientRect().height + gap;
        }
        element.style.height = `${Math.max(...heights)}px`;
      });
    };
    const observer = new ResizeObserver(layout);
    observer.observe(element);
    for (const child of element.children) observer.observe(child);
    document.fonts.ready.then(layout);
    layout();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div className="news-grid" ref={grid}>
      {children}
    </div>
  );
}
