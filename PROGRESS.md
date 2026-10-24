# Current status — 2026-10-23

The approved maintainability refactor has been resumed and verified. Continue on
`fix/restore-main-ui` and update existing PR 1:
https://github.com/vedant-80/iyer-lab/pull/1 (base `dev`). Do not merge or deploy.

Current architecture: semantic CSS in `src/styles/`, global tokens in `theme.css`,
Markdown prose and JSON data in `content/`, and shared native React components.
Original copy, Rice branding, fonts, and images remain the reference.
`docs/EDITING.md` explains human maintenance; `docs/ui-verification/` contains
reference/replacement screenshots and validation notes.

Completed since the previous handoff:

- Production comparisons across the 11 main page types at 1440px and 390px.
- Corrected mobile homepage margin collapse, team paragraph/end spacing, project
  footer spacing, recruitment URL wrapping, and original news colors/crop width.
- Mobile team/project heading and paragraph positions and page heights match the
  measured source. Homepage differs by less than one pixel in measured headings.
- All slideshow/menu/gallery/lightbox/recruitment-focus/news interaction checks
  passed at both `/` and `/iyer-lab/`, without client runtime exceptions.
- Production builds, source checks (19 pages), export checks (22 HTML/one CSS),
  formatting, and TypeScript checks passed for root and base-path configurations.
- Added source/replacement screenshots with images fully decoded. Broad geometry
  comparisons are not a pixel-perfect guarantee for every viewport or animation.

Next.js emitted a dependency security notice and initially interrupted builds;
retries completed. No dependency upgrade was included in this UI refactor.
The final root build and all checks passed. This handoff accompanies the refactor
commit for PR 1; inspect Git status and PR 1 rather than assuming the historical
uncommitted state below.

The earlier handoff below is retained as historical implementation detail. Its
pending-work and validation status sections are superseded by this update.

---

# Progress and handoff — 2026-10-18

## Goal and approved decisions

Match the `main` branch website's UI on the Next.js `dev` implementation, including original copy, Rice University branding, images, fonts, headings, paragraphs, layout, and responsive behavior. Do not invent website text.

The user subsequently requested maintainable, human-readable styling, DRY content, and appropriate abstractions. They approved:

- Semantic CSS files with a central global theme.
- Markdown prose and simple JSON data for human editing, provided the original styling is preserved.

The user requested a PR. Continue updating the existing PR; do not merge or deploy. Their latest request was to save this handoff before another agent takes over.

## Git and PR state

- Repository: `/home/vdnt/repos/iyer-lab`.
- Current branch: `fix/restore-main-ui`, tracking `iyer-lab/fix/restore-main-ui`.
- Existing PR: https://github.com/vedant-80/iyer-lab/pull/1 (base `dev`).
- HEAD: `83cc128` — `Restore main website UI and original Rice branding`.
- That commit/PR contains the earlier restoration using copied WordPress markup and styles. The maintainability refactor described below is **uncommitted and unpushed**.
- Working tree has many intentional staged deletions plus unstaged edits and untracked replacement files. Preserve them; do not reset or clean.
- `main` reference commit: `b5284f1`; `dev`: `bb3eb4c`.
- Remotes: `origin` is `https://github.com/bm80-520/iyer-lab.git`; `iyer-lab` is `https://github.com/vedant-80/iyer-lab`.

## Implementation completed in the working tree

Replaced the generated WordPress presentation with native React templates, readable CSS, Markdown prose, and JSON content. This is implemented but still requires final visual/interaction verification before committing.

- Removed `public/original/`, `content/pages/`, `content/pages.json`, `scripts/migrate-wordpress.mjs`, and the original presentation components. These deletions are intentional.
- Added `content/data/*.json` for site navigation/footer, page metadata, research, primer, team, publications, resources, recruitment, news, and the protected resources form.
- Added `content/text/**/*.md` for biographies and prose. Some news article bodies are empty because the original contains only an image, title, and date.
- Original assets are under readable dated paths in `public/images/`; local fonts are in `public/fonts/`. The source archive remains intact.
- `src/components/site-pages.tsx` contains explicit templates. Shared components include the header/footer, Markdown, research rows, publication lists, images, gallery/lightbox, slideshow, and news grid.
- Home publications derive from the first three selected publication records; home resource links derive from resource section data. News routes derive from the news records.
- `src/app/globals.css` imports six CSS files in `src/styles/`: `theme.css`, `fonts.css`, `base.css`, `layout.css`, `media.css`, and `content.css`. About 20 KB of authored styling; global colors/fonts/spacing live in `theme.css`.
- `scripts/import-content.mjs` is an explicit archive import tool, using Cheerio, Turndown, and Sharp. It generates content/assets, not CSS or React. **Rerunning it overwrites content**, so read its documentation first.
- Updated source-preservation/export checks, formatting configuration, package scripts, README, and `docs/EDITING.md`.
- New dependencies include `marked`; development dependencies include Turndown, Prettier, and Sharp.

## Validation status at handoff

Passed on the latest root-path production export:

- `npm run build` (production build and TypeScript checks; all pages generated).
- `npm run check:original`: “Verified source copy, navigation, Rice branding, and absence of legacy styling in 19 exported pages.”
- `npm run check:export`: “Checked links, srcsets, forms, and assets in 22 HTML and 1 CSS files (base path: /).”
- `git diff --check` passed before this handoff file was added.

Formatting was run throughout the refactor, including the latest source-check script. Run `npm run format:check` again before committing.

**Still pending:** final production desktop/mobile visual comparisons after the latest spacing changes, current-component interaction tests, and a `/iyer-lab/` base-path build/check of this refactor. Earlier base-path checks covered the previous implementation and do not establish correctness of the current one. Do not claim exact visual parity yet.

## Next steps

1. Inspect this working tree and `docs/EDITING.md`; preserve the user's approved architecture and original content.
2. Finish production visual comparison against the archived main website at desktop/mobile widths (1440 and 390 were used), with targeted tablet checks as useful. Pay particular attention to project footer space, mobile team/resources/recruitment, heading/paragraph typography, news masonry/date spacing, and article image/title/date placement.
3. Exercise current controls: slideshow next/previous; mobile menu; gallery scrolling and dialog open/close/keyboard behavior; news positioning and overflow.
4. Correct evidence-backed differences while retaining semantic CSS and shared content. Some CSS media blocks could be consolidated carefully, but preserve cascade order: the <=479px recruitment single-column rule must win over <=767px two-column styling.
5. Run formatting, type checks, build, source preservation, and export checks. Verify the `/iyer-lab/` deployment base path too (see Next config/workflow for the existing build environment setting).
6. Commit the refactor on `fix/restore-main-ui`, push to `iyer-lab`, and update PR 1's title/body to describe the final maintainable implementation. The old PR body is now outdated. Do not create a duplicate PR, merge, or deploy.

## Reference material and implementation details

`archive/iyerlaboratory.org` is the main-branch website reference (matching main except omitted `.DS_Store` files). Use the archived source rather than inventing copy or assets.

Source styling measurements already incorporated:

- Body Open Sans 15px with fixed 24.75px line height; Merriweather headings; main background `#eeeeee`; heading navy `#002569`.
- H1 22px, H2 20px/30px, H3 18px, heading weight 600. Listing/primer/resources/publications H2 letter spacing 1px; project-page H2 normal spacing.
- Paragraph margins `.85em` (12.75px). Desktop container max 1310px with 50px padding; mobile <=767px uses 85% width without side padding.
- Desktop header 88px (90px outer), mobile 82px; banner breakpoint 868px; profile/project columns switch at 800px.
- Profile link rows reserve height even when empty. Mobile profile images preserve the original inline-image baseline space.
- Original research card fractions and crop ratios are deliberate and documented in CSS.
- News dates are visible on desktop in the source: an old source selector misspells the date class, so hiding the actual dates is incorrect.
- Copyright uses 11px text but fixed 24.75px leading. Protected-resource notice and original live WordPress password form destination are preserved.
- News cards currently remain static articles, matching the original disabled-pointer presentation; do not describe them as clickable.

## Browser validation setup and pitfalls

Temporary servers/browser may still be running; verify availability before using:

- Production preview: `http://127.0.0.1:3000/` (`npm run preview`).
- Archive reference: `http://127.0.0.1:3001/iyerlaboratory.org/` (Python serving `archive`).
- Base-path preview: `http://127.0.0.1:3002/iyer-lab/` (Python serving `/tmp/iyer-ui-preview`, whose `iyer-lab` symlink points to `out`).
- Next dev on 3003 was unreliable for browser validation because dev-origin restrictions blocked client chunks. Use the completed production export on 3000.
- Headless Chrome CDP on port 9222, user data `/tmp/iyer-ui-chrome`. Many old tabs may exist.

Browser automation must call `Page.bringToFront`, wait for `document.readyState === 'complete'` (allow 30 seconds), wait for `document.fonts.ready`, and allow layout/animations to settle. Fixed 1–3 second sleeps were insufficient with large images and produced misleading hydration/masonry findings. Never inspect export pages while a build is still replacing their HTML/chunks.

The latest production news debug confirmed `.news-grid.is-positioned`, client hydration, and correct shortest-column placement. Earlier failures without that class were incomplete page loads, not an identified grid algorithm bug. Reference masonry animations may take 7–10 seconds.

Temporary scripts/artifacts (outside Git):

- `/tmp/iyer-ui-check.mjs`: current single-page production news debug through Chrome CDP using `undici.WebSocket`.
- `/tmp/iyer-ui-compare-refactor.mjs` and `/tmp/iyer-ui-compare-main.mjs`: comparison scripts; **update their dev URL to production 3000 and their waits before reuse**.
- `/tmp/iyer-ui-interaction-check.mjs`: older legacy-selector checks; adapt to current components.
- `/tmp/iyer-ui-measure-reference.mjs`: detailed style measurements.
- `/tmp/iyer-reference/`: original and refactor JSON geometry/style captures and PNGs. Some captures predate the latest fixes; distinguish them carefully.
- `/tmp/iyer-ui-pr-body.md`: obsolete original-restoration PR body; rewrite it.

Useful current interaction selectors: `.slideshow .next`, `.slideshow-slide.is-active`, `.menu-toggle`, `.site-navigation.is-open`, `.gallery .next`, `dialog[open]`, `.news-grid.is-positioned`.

## Skills and execution notes

The requested `mattpocock-skills:grill-me` maps to the installed grilling skill; its questions were answered and implementation authorized. Grilling and codebase-design skills were read. PR skill was read and requires Summary, Evidence, and Merge Danger sections when updating the PR body.

Skill files:

- `/home/vdnt/.codex/plugins/cache/mattpocock/mattpocock-skills/1.3.1/skills/productivity/grilling/SKILL.md`
- `/home/vdnt/.codex/plugins/cache/mattpocock/mattpocock-skills/1.3.1/skills/engineering/codebase-design/SKILL.md`
- `/home/vdnt/.codex/plugins/cache/mattpocock/mattpocock-skills/1.3.1/skills/engineering/pr/SKILL.md`

No root AGENTS.md was found during initial inspection. Fact-finding agents `compare_branches` and `maintenance_audit` were used earlier; no implementation was delegated. Follow current delegation instructions before spawning agents.

Filesystem writes inside the workspace are allowed; `.git` writes and network/local socket operations may require escalation. Production builds needed approved escalation because sandbox child-process restrictions caused a misleading TypeScript `--showConfig` error. Node in this environment is 20.19.1 while `.nvmrc` specifies 22; the latest production build succeeded.
