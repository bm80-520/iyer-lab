# UI verification

The reference was the downloaded `main` website. Its archive and migration
tooling were removed after verification; the source remains recoverable from
Git history before the removal commit. These screenshots are retained.
Screenshots were captured in Chrome at 1440×1000 and 390×1000 CSS pixels, after
fonts and images loaded. They show the same research page in the source and
the native Next.js implementation.

| View    | Main reference                         | Next.js replacement                      |
| ------- | -------------------------------------- | ---------------------------------------- |
| Desktop | [Reference](main-research-desktop.png) | [Replacement](next-research-desktop.png) |
| Mobile  | [Reference](main-research-mobile.png)  | [Replacement](next-research-mobile.png)  |

Browser comparisons covered home, research, team, publications, resources,
recruitment, primer, both project pages, news, and protected resources at both
widths, plus two representative news articles. Measurements included heading/paragraph bounds, computed font size,
weight, line height and color, page height, broken images, and horizontal overflow.
The original news entrance animations must settle before comparing masonry.
Measurements and screenshots are evidence of the checked views, not an automated
pixel-perfect guarantee for every viewport or animation frame.

Interaction checks exercised slideshow next, mobile menu open/close, gallery
scrolling, lightbox open, keyboard next, Escape close, recruitment keyboard focus,
and hydrated news layout with all 12 cards. No client runtime exceptions were
reported during those checks.

Before removal, the source comparison verified copy, navigation and Rice
branding across 19 pages. That archive-dependent check has been removed.
`npm run check:export`
checks local links, srcsets, form destinations, and assets, including CSS fonts.
See [the editing guide](../EDITING.md) for build and base-path commands.
