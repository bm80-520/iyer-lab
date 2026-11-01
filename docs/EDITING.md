# Editing the Iyer Lab website

**Publications, team members, lab news, research areas, page text, and uploaded
images are edited in the website's dashboard, not here.** See [CMS.md](CMS.md).
This guide covers what stays in the repository: the site's structure, fixed
images, and styling. Content lives in `content/`; appearance lives in
`src/styles/`. Reference screenshots remain in `docs/ui-verification/`.
The original downloaded site and migration tooling are recoverable from Git
history before their removal; ordinary editing uses only the current content.

## Find the right file

| Change                                            | File                                         |
| ------------------------------------------------- | -------------------------------------------- |
| Navigation, lab banners, footer links, Rice logos | `content/data/site.json`                     |
| Homepage slides and research card images          | `content/data/home.json`                     |
| Research overview image and image strip           | `content/data/research.json`                 |
| Primer sections and image order                   | `content/data/primer.json`                   |
| Team page image strip                             | `content/data/team.json` (`gallery`)         |
| Publications page image strip                     | `content/data/publications.json` (`gallery`) |
| Resource section titles, images and image strip   | `content/data/resources.json`                |
| Recruitment card images and image strip           | `content/data/recruitment.json`              |
| Password form wording and live-site destination   | `content/data/protected-resources.json`      |

The dashboard manages the publications, team members, news, research topics
and projects, the Research introduction, the recruitment and Resources text,
and the footer contact details. Their records in `content/data/` and
`content/text/` (`publications.json`, `team.json` members, `news.json`,
`lysosomal-projects.json`, `microglia-and-brain-disorders.json`, and the
matching Markdown) are the original content: `npm run cms:import` copied them
into Supabase, and a checkout without Supabase settings builds from them. Once
the website is connected to Supabase, editing them no longer changes the site.

Each remaining `body` field (the Primer) points to a Markdown file under `content/text/`. That file
contains the paragraphs and headings. Shared React layouts supply the columns,
image placement, header, footer, and interactive controls.

## Edit paragraphs, headings, and links

Open the Markdown file named in a record's `body` field. Use blank lines between
paragraphs. Formatting is independent of presentation:

- `## Heading` creates an H2 with the original site's heading font, size, color,
  letter spacing, and margins. `### Heading` creates an H3.
- `**bold**` and `*italic*` preserve scientific emphasis.
- `[label](https://example.org)` adds a link.
- `/research/primer/` is an internal destination; deployment prefixes are added
  automatically. Do not put `/iyer-lab/` into content files.
- `<sub>` and `<sup>` are available for scientific notation.

Do not put colors, font sizes, layout HTML, or inline styles into Markdown.
Changes to paragraph or heading styling belong in the shared CSS.

The original site uses visible H2 headings for research sections and an H1 for
news article titles. Those levels are retained in the templates and Markdown.

## Change images

Images for publications, news, team profiles and research are uploaded in the
dashboard's Media Library. For the fixed images listed above, put images and
PDFs in `public/images/`, preferably grouped by year/month.
Use a path such as `/images/2026/05/photo.jpg` in a data file. Keep meaningful
`alt` text. `width` and `height`, when present, describe the image's actual pixel
dimensions and prevent movement while it loads. A gallery image's `full` field
names the large image shown in its lightbox.

The original Rice University logos and campus photograph are configured once in
`site.json`; all pages share the same footer.

## Change styling

| CSS file                 | Responsibility                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------- |
| `src/styles/theme.css`   | Sitewide colors, font families, type sizes, paragraph/section spacing, container width |
| `src/styles/fonts.css`   | Local font files and original weight declarations                                      |
| `src/styles/base.css`    | Headings, paragraphs, links, lists, emphasis, and Markdown defaults                    |
| `src/styles/layout.css`  | Header, navigation, banners, footer, and overall page geometry                         |
| `src/styles/media.css`   | Slideshow, galleries, image controls, and lightbox                                     |
| `src/styles/content.css` | Repeated research/profile/resource/publication/news layouts                            |
| `src/styles/admin.css`   | Login page and dashboard only; never part of the public CSS                            |

`src/app/globals.css` imports these files once (except `admin.css`, which the
dashboard imports itself). For example, change
`--heading-2-size` in `theme.css` to resize H2 headings everywhere, or change
`--paragraph-space` to adjust paragraph margins. Edit the semantic layout rule
when changing one pattern, such as `.team-profile` or `.research-row`.

Hover feedback uses three theme settings: `--transition` (200 ms),
`--image-rest-filter` (clickable figures rest slightly desaturated and return
to full colour on hover), and `--anchor-offset` (keeps jump-link targets clear
of the fixed header).

Responsive rules are grouped at the ends of their CSS files. The original
breakpoints are 767px for content layouts, 799px for profiles/project columns,
and 867px for lab banner selection. Galleries and the news grid handle their
own small amount of interaction/layout logic; content files never include it.

## Preview and check

Use the Node version in `.nvmrc`, install dependencies with `npm ci`, and run
`npm run dev`. Open the printed localhost URL. Check a desktop window and a
phone-sized window, especially after changing text length or images.

Before submitting changes:

```sh
npm run format
npm run typecheck
npm run build
npm run check:export
```

To check a GitHub Pages project deployment, use the same base path for build,
validation, and preview:

```sh
NEXT_PUBLIC_BASE_PATH=/iyer-lab npm run build
NEXT_PUBLIC_BASE_PATH=/iyer-lab npm run check:export
NEXT_PUBLIC_BASE_PATH=/iyer-lab npm run preview
```
