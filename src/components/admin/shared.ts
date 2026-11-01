import type { Errors } from './collection-manager';

/** Columns every new record needs before its first save. */
export function newRecord() {
  const now = new Date().toISOString();
  return { id: crypto.randomUUID(), created_at: now, updated_at: now, deleted_at: null };
}

export function copyRecord<T extends object>(row: T, patch: Partial<T>): T {
  return { ...structuredClone(row), ...newRecord(), status: 'draft', ...patch };
}

export const today = () => new Date().toISOString().slice(0, 10);

export function nextOrder(items: { display_order: number }[]) {
  return Math.max(0, ...items.map((item) => item.display_order)) + 10;
}

export const isWebUrl = (value: string) => !value || /^https?:\/\/\S+$/i.test(value.trim());

export const plain = (markdown: string) => markdown.replace(/[*_]/g, '');

/** Shared checks for a hand-edited web address (slug). */
export function checkSlug(
  errors: Errors,
  slug: string,
  others: { slug: string }[],
  reserved: string[] = [],
) {
  if (!slug) return;
  if (!/^[a-z0-9][a-z0-9-]*$/.test(slug))
    errors.slug = 'The web address may only contain lowercase letters, numbers and hyphens.';
  else if (reserved.includes(slug))
    errors.slug = `“${slug}” is already a page of the website; choose another web address.`;
  else if (others.some((other) => other.slug === slug))
    errors.slug = 'Another entry already uses this web address.';
}
