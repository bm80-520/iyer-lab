import data from '../../content/data/publications.json';
import type { Publication } from './content-types';

// Newest first. Years, navigation, and homepage selections are all derived
// from each record's date, so adding a publication is a single data edit.
export function sortPublications(items: Publication[]) {
  return [...items].sort((a, b) => b.date.localeCompare(a.date));
}

export const publications = sortPublications(data.items as Publication[]);

export function publicationYear(item: Publication) {
  return item.date.slice(0, 4);
}

export function groupByYear(items: Publication[]) {
  const years = new Map<string, Publication[]>();
  for (const item of sortPublications(items)) {
    const year = publicationYear(item);
    years.set(year, [...(years.get(year) ?? []), item]);
  }
  return [...years].map(([year, items]) => ({ year, items }));
}

export function formatDate(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function doiUrl(doi: string) {
  return doi ? `https://doi.org/${doi}` : '';
}

/** The journal page, falling back to the DOI resolver or the preprint. */
export function paperUrl(item: Publication) {
  return item.url || doiUrl(item.doi) || item.preprintUrl;
}

/** Journal, issue, and identifiers in the lab's original citation style. */
export function citationMarkdown(item: Publication) {
  const parts = [`*${item.journal}*`, item.citation || `${publicationYear(item)}.`];
  if (item.doi) parts.push(`doi: [${item.doi}](${doiUrl(item.doi)}).`);
  if (item.pmid) parts.push(`PMID: ${item.pmid}${item.pmcid ? `; PMCID: ${item.pmcid}` : ''}.`);
  return parts.join(' ');
}
