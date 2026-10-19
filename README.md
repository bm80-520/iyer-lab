# Iyer Lab

A Next.js App Router site for the Iyer Laboratory at Rice University. Pages are
exported as static HTML, so GitHub Pages can host the entire site without a server.
The existing research, team, publications, resources, recruitment, and news content
has been migrated from the downloaded WordPress site.

## Run locally

Use Node.js 22 (see `.nvmrc`), then:

```sh
npm ci
npm run dev
```

Open <http://localhost:3000>. To check the production export:

```sh
npm run typecheck
npm run build
npm run check:export
npm run preview
```

`npm run build` writes the deployable website to `out/`. The preview command serves
that folder at <http://localhost:3000>. Stop the development server first if it is
already using port 3000.

## File structure

```text
src/
  app/
    layout.tsx            Shared page layout and metadata
    page.tsx              Home page
    globals.css           Responsive site styles
    not-found.tsx         Custom 404 page
    [...slug]/page.tsx    Static routes for entries in content/pages.json
  components/             Shared header and news list
  lib/                    Content loading and navigation configuration
content/
  pages.json              Page titles, URLs, content filenames, and news dates
  pages/                  Editable HTML content, one file per page
public/
  images/                 Migrated images and downloadable files, grouped by date
  .nojekyll               Allows GitHub Pages to serve Next.js assets
scripts/
  check-export.mjs        Checks exported internal links and asset references
  preview.mjs             Local static export preview
  migrate-wordpress.mjs   One-time migration from the original snapshot
.github/workflows/
  deploy.yml              Build checks and GitHub Pages deployment
archive/                  Original WordPress download; excluded from deployment
next.config.ts            Static export and hosting path configuration
```

## Edit content

- Change home page text and sections in `src/app/page.tsx`.
- Edit existing page HTML in `content/pages/`. Keep semantic headings, paragraphs,
  lists, and links; no WordPress plugins or scripts are needed.
- Add a page by creating an HTML file and adding an entry to `content/pages.json`:

  ```json
  {
    "slug": "research/new-project",
    "title": "New project",
    "file": "research--new-project.html",
    "kind": "page"
  }
  ```

- For a news article, use `"kind": "news"` and add a `"date": "2026-10-09"` field.
  News lists update automatically, newest first.
- Put images or PDFs in `public/images/` and reference them as
  `/images/your-file.jpg`. Use meaningful `alt` text on images. Internal page links
  use `/research/primer/`, for example. The content loader adds the deployment
  base path to these URLs during the build.
- Change the navigation in `src/lib/site.ts`, and styles in `src/app/globals.css`.

HTML files are trusted, reviewed repository content. Do not insert untrusted HTML.
The migration command overwrites migrated content; run it only when deliberately
re-importing the archived snapshot. The original archive is retained for reference
and is not needed for normal builds or edits.

The password-protected internal resources were not present in the download; that
page provides a contact link. Research links to pages absent from the snapshot
continue to point to the original website. Image galleries and WordPress widgets
have been replaced by static content; research illustrations and team photos are
retained.

## Deploy on GitHub Pages

1. Push this repository, including `package-lock.json`, to GitHub.
2. In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` or `master`, or run **Build and deploy Next.js to GitHub Pages**
   manually from the **Actions** tab. The workflow builds and deploys `out/`.
4. The deployment URL appears in the workflow and **Settings → Pages**. For this
   repository, the default project URL is <https://bm80-520.github.io/iyer-lab/>.

The workflow reads the Pages base path automatically, supporting both project
URLs (`/iyer-lab/`) and root URLs (a custom domain or `<owner>.github.io` repository).
Pull requests run build checks without deploying. If you rename the default branch
to something other than `main` or `master`, update the workflow's branch list.

To verify the project path locally:

```sh
NEXT_PUBLIC_BASE_PATH=/iyer-lab npm run build
NEXT_PUBLIC_BASE_PATH=/iyer-lab npm run check:export
NEXT_PUBLIC_BASE_PATH=/iyer-lab npm run preview
```

Then open <http://localhost:3000/iyer-lab/>. Set the same base path for both build and
preview. Local development normally leaves this variable unset.

For a custom domain, configure the domain and its DNS in **Settings → Pages** and
re-run the workflow. No domain is assumed or registered by this repository.

This uses [Next.js static export](https://nextjs.org/docs/app/guides/static-exports)
and the [GitHub Pages custom workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
GitHub Pages serves static files; features requiring a running server (such as API
routes, server actions, or a live WordPress CMS) require a different host.
