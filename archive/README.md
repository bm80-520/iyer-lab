# Original website snapshot

This directory preserves the downloaded WordPress site, its fonts, and download
log. It is reference material, not the active website. Next.js builds use `src/`,
`content/`, and `public/`; the archive is not included in the static export.

`npm run migrate:wordpress` can re-import content from `iyerlaboratory.org/` here.
That command overwrites the migrated HTML and page index. Normal content edits
should be made directly in the top-level `content/` directory.
