# Iyer Lab

A Next.js static website preserving the main branch's original wording, images,
typography, and layouts. Shared React layouts and semantic CSS replace the
WordPress presentation. Routine content updates use Markdown and JSON data.

## Run locally

Use Node.js 22 (see `.nvmrc`):

```sh
npm ci
npm run dev
```

## Maintain the website

Read [the editing guide](docs/EDITING.md) for content updates, images, shared
styling, and examples. Start with these locations:

```text
content/data/     Navigation, team, publications, research, resources, and news
content/text/     Markdown paragraphs and headings, referenced by the data
src/styles/       Readable CSS: theme, typography, layout, media, page patterns
src/components/   Shared header/footer, content layouts, gallery, and slideshow
public/images/    Original Rice branding, photographs, illustrations, and PDFs
public/fonts/     Local copies of the original fonts
archive/          Original main website; read-only reference, not deployed
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
npm run check:original
npm run preview
```

The export validator checks page links, responsive images, forms, fonts, and CSS
assets. The source comparison checks preservation of the main website's copy,
navigation, and Rice branding, without requiring WordPress classes or markup.

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

The protected resources form uses the existing WordPress authentication endpoint;
protected content is not stored in the static export. “Load more” opens the live
news archive for older entries absent from the downloaded source.
