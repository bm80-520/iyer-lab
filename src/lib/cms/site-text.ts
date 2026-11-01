// The passages of page text editable under Website Content. Components read
// them by key; adding a key here (and to the import in fallback.ts) is the
// only code change needed to make another passage editable.
export type SiteTextField = {
  key: string;
  page: string;
  label: string;
  format: 'text' | 'markdown';
  /** Plain text over several lines (each line shown separately). */
  multiline?: boolean;
  hint?: string;
};

const resourceSections = [
  ['sci-comm', 'Science Communication'],
  ['tools', 'Reading, Citing, Copywriting, and Imaging Tools'],
  ['inspiration', 'Inspirational Resources, Thoughts, and Blogs'],
  ['career', 'Career Development Reading and Resources'],
  ['zebrafish', 'Zebrafish Resources'],
  ['outreach', 'Diversity, Equity, Inclusion, and Outreach'],
] as const;

export const recruitmentKeys = [
  'recruitment.lab-technician',
  'recruitment.undergraduate',
  'recruitment.graduate',
  'recruitment.postdoc',
] as const;

export const siteTextFields: SiteTextField[] = [
  {
    key: 'research.overview.title',
    page: 'Research',
    label: 'Introduction heading',
    format: 'text',
  },
  {
    key: 'research.overview.body',
    page: 'Research',
    label: 'Introduction text',
    format: 'markdown',
  },
  ...recruitmentKeys.map((key, index) => ({
    key,
    page: 'Join our shoal!',
    label: `${['Lab technician', 'Undergraduate students', 'Graduate students', 'Postdoctoral Fellows'][index]} card`,
    format: 'markdown' as const,
    hint: 'Shown when a visitor hovers over or taps the card.',
  })),
  ...resourceSections.map(([id, title]) => ({
    key: `resources.${id}`,
    page: 'Resources',
    label: title,
    format: 'markdown' as const,
  })),
  {
    key: 'footer.contact',
    page: 'Footer (every page)',
    label: 'Contact details',
    format: 'text',
    multiline: true,
    hint: 'One line per row: street, building, city, phone, or email.',
  },
];

export const resourceTextKey = (sectionId: string) => `resources.${sectionId}`;
