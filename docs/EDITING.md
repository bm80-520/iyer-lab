# Editing the Iyer Lab website

Ordinary updates need only a text editor. Content lives in `content/`; appearance
lives in `src/styles/`. The original site remains in `archive/` as a reference.
Do not edit the archive or run the import command for ordinary updates.

## Find the right file

| Change                                                    | File                                              |
| --------------------------------------------------------- | ------------------------------------------------- |
| Navigation, lab banners, footer links/address, Rice logos | `content/data/site.json`                          |
| Homepage slides and research card images                  | `content/data/home.json`                          |
| Research overview and its image strip                     | `content/data/research.json`                      |
| Lysosomal projects                                        | `content/data/lysosomal-projects.json`            |
| Microglia and brain disorders projects                    | `content/data/microglia-and-brain-disorders.json` |
| Primer sections and image order                           | `content/data/primer.json`                        |
| Team members and team image strip                         | `content/data/team.json`                          |
| Publications and publication image strip                  | `content/data/publications.json`                  |
| Resource sections and image strip                         | `content/data/resources.json`                     |
| Recruitment notices and image strip                       | `content/data/recruitment.json`                   |
| News cards and articles                                   | `content/data/news.json`                          |
| Password form wording and live-site destination           | `content/data/protected-resources.json`           |

Each `body` field points to a Markdown file under `content/text/`. That file
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

## Update a team member

Edit the member in `content/data/team.json`. Name, role, joining month, email,
links, photograph, and biography are separate fields. Edit their Markdown
biography under `content/text/team/`. To add someone, copy an existing member
record, give it a unique `id`, and point `body` at a new Markdown file.

## Update publications

Edit `content/data/publications.json`. Each publication has `authors`, `title`,
and `citation`, with Markdown emphasis and links supported in each field.
The homepage displays the first three selected publications from this same list;
there is no second homepage bibliography to keep in sync. Homepage resource links
also come from the resource sections, so their titles are edited only once.

## Add news

Copy an existing item in `content/data/news.json`. Give it a unique `id`, title,
date, image, and destination. A local article also needs `slug`, `articleImage`,
and `body`. Set `href` to `/<slug>/` and create the Markdown file named by `body`.
The article route is generated from the record automatically. List order is
reading order, so put a new story first.

The data retains original story destinations, and local article routes can be
opened directly. Cards remain static to match the original site's presentation.
The “Load more” link opens the live news archive.

## Change images

Put images and PDFs in `public/images/`, preferably grouped by year/month.
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

`src/app/globals.css` imports these files once. For example, change
`--heading-2-size` in `theme.css` to resize H2 headings everywhere, or change
`--paragraph-space` to adjust paragraph margins. Edit the semantic layout rule
when changing one pattern, such as `.team-profile` or `.research-row`.

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

`npm run check:original` compares the exported content against the original
snapshot. It guards this visual-preservation refactor. An intentional future
content update may correctly differ from the archive; review those differences
rather than altering the archive to silence the comparison.

To check a GitHub Pages project deployment, use the same base path for build,
validation, and preview:

```sh
NEXT_PUBLIC_BASE_PATH=/iyer-lab npm run build
NEXT_PUBLIC_BASE_PATH=/iyer-lab npm run check:export
NEXT_PUBLIC_BASE_PATH=/iyer-lab npm run preview
```

The one-time `npm run import:archive` command replaces the imported Markdown/data
and recopies original images. It does not generate CSS or React layouts. Commit
any edits before deliberately rerunning it.
