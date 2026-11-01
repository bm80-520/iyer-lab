# Iyer Lab

A Next.js static website preserving the main branch's original wording, images,
typography, and layouts. Shared React layouts and semantic CSS replace the
WordPress presentation. Publications, team members, lab news, research areas,
page text and uploaded files are managed in a private dashboard (`/admin/`)
backed by Supabase; see [the content-management guide](docs/CMS.md).

## Run locally

Use Node.js 22 (see `.nvmrc`):

```sh
npm ci
npm run dev
```

## Maintain the website

Routine content changes happen in the dashboard ([docs/CMS.md](docs/CMS.md):
setup, everyday use, backups). Read [the editing guide](docs/EDITING.md) for
the site's fixed structure, images, and styling. Start with these locations:

```text
content/data/     Navigation, page structure, image strips; original content for the import
content/text/     Markdown paragraphs and headings, referenced by the data
supabase/         Database schema, access policies, storage buckets (migrations)
src/lib/cms/      Supabase client, queries, and the dashboard's data layer
src/styles/       Readable CSS: theme, typography, layout, media, page patterns
src/components/   Shared header/footer, content layouts, gallery, and slideshow
public/images/    Original Rice branding, photographs, illustrations, and PDFs
public/fonts/     Local copies of the original fonts
```

`src/styles/theme.css` is the single place for sitewide colors, font sizes,
paragraph spacing, and container settings. Page templates and content share
repeated patterns rather than duplicating navigation, footers, or CSS.

## Validate

```sh
npm run format:check
npm run typecheck
npm run build
npm run check:export
npm run preview
npm run cms:check      # access rules, against the Supabase project in .env.local
```

The export validator checks page links, responsive images, forms, fonts, and CSS
assets. Reference screenshots and the completed comparison results are in
[UI verification](docs/ui-verification/README.md). The downloaded source archive
and its one-time migration tooling were removed after migration; they remain
recoverable from Git history.

## Deploy on GitHub Pages

The existing GitHub Actions workflow builds and deploys `out/` on pushes to
`main` or `master`. Pull requests run the build checks without deploying.
Enable **GitHub Actions** under **Settings → Pages → Build and deployment**.

Project URLs such as `/iyer-lab/` and root/custom-domain hosting are supported.
To validate a project URL locally:

```sh
NEXT_PUBLIC_BASE_PATH=/iyer-lab npm run build
NEXT_PUBLIC_BASE_PATH=/iyer-lab npm run check:export
NEXT_PUBLIC_BASE_PATH=/iyer-lab npm run preview
```

The build reads published content from Supabase when the repository variables
`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` are set
(Settings → Secrets and variables → Actions → Variables), and rebuilds nightly.
Dashboard edits do not need a rebuild: pages load the latest published content
in the browser. Without those variables, the build uses the files in `content/`.

The site icon (`src/app/icon.svg`, `favicon.ico`, `apple-icon.png`) is the
emblem from the lab banner.

The protected resources form uses the existing WordPress authentication endpoint;
protected content is not stored in the static export. “Load more” opens the live
news archive for older entries absent from the downloaded source.
