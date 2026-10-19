# Iyer Lab

A Next.js App Router site for the Iyer Laboratory at Rice University. Pages are
exported as static HTML, so GitHub Pages can host the entire site without a server.
The presentation is restored from the original WordPress snapshot on `main`:
page layouts, wording, colors, typography, responsive banners, research images,
galleries, news cards, and Rice University footer branding. Next.js generates
static routes; the original presentation scripts run locally for the slideshow,
menus, galleries, tabs, accordions, and lightbox.

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
npm run check:original
npm run preview
```

`npm run build` writes the deployable website to `out/`. The preview command serves
that folder at <http://localhost:3000>. Stop the development server first if it is
already using port 3000.

## File structure

```text
src/app/                 Next.js routes, metadata, and document shell
src/components/          Original page renderer and presentation initialization
src/lib/                 Content loading and deployment base-path handling
content/pages.json       Original page titles, routes, classes, and stylesheets
content/pages/           Original page markup, including home.html
public/original/         Original styles, fonts, images, and presentation scripts
scripts/                 Migration, export validation, and local preview
archive/                 Unmodified original snapshot; excluded from deployment
```

## Edit content

Edit the checked-in HTML in `content/pages/`. The pages retain the source site's
layout classes and visible wording; shared navigation/footer markup appears in
each page. `content/pages.json` maps routes to these files and their original
stylesheets. Local URLs use `__SITE_BASE_PATH__`, replaced during export so both
root hosting and GitHub Pages project URLs work. CSS assets use relative URLs.

`public/original/` contains the original Rice University logos and campus photo,
lab banners, research illustrations, slideshow images, and team photographs.
The older `public/images/` directory is retained for compatibility with prior
migration URLs. No AI-generated imagery or replacement marketing copy is used.

`npm run migrate:wordpress` deliberately regenerates content and presentation
assets from `archive/`, overwriting manual edits to imported pages. The migration
preserves layout markup and styling, normalizes local links and asset URLs,
decodes obfuscated email links, and bundles the original local presentation
scripts. Only reviewed repository HTML should be imported.

The internal resources page preserves the original password form. It submits to
the existing site's WordPress authentication endpoint; static hosting does not
provide password authentication or contain the protected content. Destinations
absent from the snapshot remain links to the original website. Site links use
full document navigation so presentation scripts initialize once per page.
The news “Load more” control opens the live news archive because older entries
are absent from the snapshot. `npm run check:original` compares all imported
pages against the archive for unchanged wording, navigation, layout elements,
and Rice branding.

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
