# Progress — 2026-10-23

## Goal and decisions

Restore the main website UI on Next.js while preserving original wording, fonts,
images, Rice branding, and heading/paragraph styling. The user approved semantic
CSS with global theme settings, Markdown prose, JSON data, shared components,
and updating the existing PR without merging or deploying.

The maintainability refactor was committed as `5ea6a3c` on
`fix/restore-main-ui` and pushed to PR 1 (base `dev`):
https://github.com/vedant-80/iyer-lab/pull/1

## Archive removal

The user explicitly approved deleting the 226 MB downloaded source archive,
archive-only import/comparison scripts, unused dependencies, and obsolete docs.
Retain website content, public images/fonts, and verification screenshots.

Removed the downloaded source directory, `scripts/import-content.mjs`, and
`scripts/check-original.mjs`, their npm commands, and direct Turndown/Sharp
migration dependencies. Cheerio remains required by the export validator.
Next.js may still retain Sharp transitively. Git history retains the source and
migration tooling; the removal does not rewrite history or shrink old commits.

The cleanup passes formatting, production build (including TypeScript), and
export checks. It is included in the same PR. Inspect Git status and PR 1 for
the latest commit. Do not merge or deploy without a new instruction.

## Maintained files

- `content/data/`: navigation, people, publications, research, news, image records.
- `content/text/`: editable Markdown prose.
- `src/styles/theme.css`: global appearance settings; adjacent CSS files own
  typography, layout, content patterns, and media controls.
- `src/components/`: shared native React templates and controls.
- `public/images/`, `public/fonts/`: website assets, preserved by this cleanup.
- `docs/EDITING.md`: human editing instructions.
- `docs/ui-verification/`: retained source/replacement screenshots and historical
  comparison results.

## Verification history

Before source removal, copy/navigation/Rice branding comparisons passed across
19 pages. Production comparisons covered 11 main page types and representative
news articles at 1440px and 390px. Slideshow, menu, gallery scrolling/lightbox,
keyboard controls, recruitment focus, and news layout passed at both root and
`/iyer-lab/` deployment paths. Screenshots do not guarantee identical pixels at
every viewport or animation frame.

Ongoing checks are `npm run format:check`, `npm run typecheck`, `npm run build`,
and `npm run check:export`. The source comparison command no longer exists.
For project hosting set `NEXT_PUBLIC_BASE_PATH=/iyer-lab` consistently for build,
export checking, and preview.

Next.js previously emitted a dependency security notice; build retries succeeded.
No dependency security upgrade is included in the UI/archive cleanup.

## Execution notes

Read root AGENTS.md and relevant local Next.js docs before changing app code.
Git writes and local servers/builds may require approved escalation. The user
invoked the grilling skill and confirmed the archive removal scope with yes.
