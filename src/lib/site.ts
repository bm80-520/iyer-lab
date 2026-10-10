export const navigation = [
  { href: '/research/', label: 'Research' },
  { href: '/team/', label: 'Team' },
  { href: '/publications/', label: 'Publications' },
  { href: '/resources/', label: 'Resources' },
  { href: '/lab-news/', label: 'Lab news' },
  { href: '/join-our-shoal/', label: 'Join our shoal' },
];

// Next's Link handles basePath; raw HTML URLs and public assets need it explicitly.
export function withBasePath(url: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${url}`;
}
