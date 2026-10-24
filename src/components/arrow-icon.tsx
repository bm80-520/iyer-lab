// Original navigation arrows, shared by the slideshow, galleries and lightbox.
export function ArrowIcon({ direction }: { direction: 'previous' | 'next' }) {
  const path =
    direction === 'previous'
      ? 'M14.464 27.84q0.832 0.832 0 1.536-0.832 0.832-1.536 0l-12.544-12.608q-0.768-0.768 0-1.6l12.544-12.608q0.704-0.832 1.536 0 0.832 0.704 0 1.536l-11.456 11.904z'
      : 'M0.416 27.84l11.456-11.84-11.456-11.904q-0.832-0.832 0-1.536 0.832-0.832 1.536 0l12.544 12.608q0.768 0.832 0 1.6l-12.544 12.608q-0.704 0.832-1.536 0-0.832-0.704 0-1.536z';
  return (
    <svg width="15" height="32" viewBox="0 0 15 32" aria-hidden="true">
      <path d={path} fill="currentColor" />
    </svg>
  );
}
