# Iyer Lab website: content management

The website has a private dashboard for adding and editing publications, team
members, lab news, research areas, page text, and uploaded files. Changes made
there appear on the public website straight away; nobody needs to edit code,
upload files to GitHub, or redeploy.

- **Part 1** explains everyday use of the dashboard.
- **Part 2** is the one-time setup (about 30 minutes, done once).
- **Part 3** covers backups, recovery, and local development.
- **Part 4** is the technical reference.

---

## Part 1 — Using the dashboard

Open the website, choose **Login** at the bottom of any page (or go to
`/login/`), and sign in with your email address and password. The dashboard
has one section per kind of content, listed on the left:

| Section             | What it controls                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Overview**        | Counts, drafts awaiting publication, recently changed entries, quick-add buttons                                        |
| **Publications**    | The Publications page (grouped by year) and the three papers on the homepage                                            |
| **Team**            | The Team page, its order, and the Alumni section                                                                        |
| **Lab News**        | The Lab News page and each news article page                                                                            |
| **Research Areas**  | The Research page: its topic sections, and the research projects within them                                            |
| **Media Library**   | Every uploaded image and PDF, reusable anywhere                                                                         |
| **Website Content** | Introductory and descriptive text: Research introduction, recruitment cards, Resources sections, footer contact details |
| **Settings**        | Password, signing out everywhere, and downloading a backup                                                              |

### Drafts, publishing, and archiving

Every entry is either a **Draft** (visible only in the dashboard) or
**Published** (on the website). The buttons under each form are:

- **Save draft**: keep working on it later; nothing appears on the website.
- **Publish**: put it on the website. Some checks run first (for example, a
  news item needs an image, and an image needs alt text).
- **Save and update website** (for published entries): save your edits; the
  website shows them immediately.
- **Unpublish**: take it off the website but keep it as a draft.
- **Duplicate**: start a new draft from a copy, e.g. a similar publication.
- **Archive**: remove it from the website. Archived entries are listed under
  the **Archived** tab, where they can be **restored** or, if you are sure,
  **deleted permanently**.

The right-hand side of every form is a **preview** drawn with the website's own
page components, so it shows exactly how the entry will look. The dashboard
says “Unsaved changes” until you save, and asks before you leave a form with
unsaved changes.

You are signed out automatically after an hour without activity.

### Walkthrough: add a publication with an image

1. **Publications** → **Add publication** (or **Add publication** on the
   Overview).
2. Fill in the title, publication date, journal, and authors. Wrap lab members
   in `**double asterisks**` to show them in bold, and species or gene names in
   `*single asterisks*` for italics.
3. Add the citation (e.g. `2024. 137(4): jcs261616.`), DOI, PMID/PMCID and links
   you have. The Publication URL defaults to the DOI link.
4. Under **Publication image**, choose **Upload an image** and pick the figure
   from your computer (or **Choose from library** for one uploaded before). It
   appears in the field and in the preview. Write a short **alt text**
   describing the figure.
5. Optional: attach a **PDF**. New PDFs are **private** (never shown on the
   website). If the PDF may be shared publicly, for example an open-access
   article, choose **Make public**; only then does a PDF button appear.
6. Tick **Show on the homepage** if it should be one of the three papers on the
   homepage.
7. Choose **Publish**. The paper appears on the Publications page under its
   year, in date order; a new year is added to the year links automatically.

### Walkthrough: add a team member with a photograph

1. **Team** → **Add team member**.
2. Enter the name, position (suggestions appear as you type), joining month,
   optional public email and research interests, and a biography.
3. Under **Profile photograph**, choose **Upload an image** and pick the photo.
4. Add links (ORCID, LinkedIn, personal website…) with **Add link**.
5. Choose **Publish**. The profile appears on the Team page.
6. To change the order of the Team page, go back to the Team list and choose
   **Arrange order**. Drag people into place (or use the ↑ ↓ buttons), then
   **Save order**.
7. When someone leaves the lab, open their profile, set **Member status** to
   **Alumnus / alumna**, and save. They move to the Alumni section; there is no
   need to delete them.

### Walkthrough: publish a lab announcement

1. **Lab News** → **Add news item**.
2. Write the headline, date, and optional category (e.g. Presentations,
   Awards).
3. Write the **Main text**. Separate paragraphs with a blank line.
4. Upload a **Card image** and give it alt text. Optionally add a wider
   **Article page image** for the top of the article.
5. Optionally add an **External link** (e.g. a Rice news story) and its link
   text. If you give an external link and no main text, the news card opens the
   link directly instead of an article page.
6. Choose **Publish**. The item appears first on the Lab News page and has its
   own page at `/<web address>/`.

### Walkthrough: replace an existing image

- **For one entry only**: open the entry, choose **Upload a replacement**
  under its image (or **Choose from library**), then save. Other entries using
  the old image are unaffected.
- **Everywhere the image is used**: open **Media Library**, select the image,
  check **Used in**, and choose **Replace file…**. Every page using it shows the
  new file. Figures keep their proportions; they are never stretched or cropped.

A file that is still used somewhere cannot be deleted; remove it from those
entries first. An unused file can be deleted from its details panel.

### Walkthrough: edit a research description

1. **Research Areas** → **Research projects** tab.
2. Find the project (e.g. “Stress signals and lysosomes”) and choose **Edit**.
3. Edit the **Description**, or upload a new **Figure**.
4. Choose **Save and update website**. The Research page shows the new text.

The **Research areas** tab edits the topic sections themselves (title, optional
introductory text, the image in the Research Topics navigation) and their
order. A project's **Related publications** list is optional; none are linked
at present, so no list appears on the page until you tick some.

### Editing page text

**Website Content** lists the editable passages of each page (the Research
introduction, the four “Join our shoal!” cards, each Resources section, and the
footer contact details). Edit a passage, check its **Preview**, and choose
**Save**. Page layout, fonts and colours are fixed by the website's design and
cannot be changed here, which keeps every page consistent.

### Formatting text

Text boxes accept a little Markdown:

| Type                     | To get                   |
| ------------------------ | ------------------------ |
| `**bold**`               | **bold**                 |
| `*italic*`               | _italic_                 |
| `[link text](https://…)` | a link                   |
| A blank line             | a new paragraph          |
| `H<sub>2</sub>O`         | subscript (also `<sup>`) |

Other HTML is shown as plain text, and links may only point to web pages,
email addresses, or phone numbers.

### What is still edited in the repository

The dashboard manages content that changes often. The following stay in the
repository (see [EDITING.md](EDITING.md)) because they are part of the site's
design: the navigation menu, the banner and Rice logos, the image strips at the
top of pages, the homepage slideshow, the Primer, footer links, and all
styling.

---

## Part 2 — One-time setup

You need: a free Supabase account (<https://supabase.com>), access to the
GitHub repository's settings, and this repository on a computer with Node.js 22
(`npm ci` run once).

### 1. Create the Supabase project

1. In Supabase, **New project**. Name it e.g. `iyer-lab`, choose a strong
   database password (store it in your password manager; the website never
   uses it), and the region closest to Houston (e.g. East US).
2. Wait for the project to start.

### 2. Create the database tables and storage

Either of these applies the files in `supabase/migrations/`, in order:

- **With the Supabase CLI (recommended)**: in the repository folder run
  `npx supabase login`, then `npx supabase link --project-ref <ref>` (the
  reference is in the project URL, `https://<ref>.supabase.co`), then
  `npx supabase db push`.
- **In the browser**: open the project's **SQL Editor**, paste each migration
  file in turn (oldest first), and choose **Run** for each.

This creates the tables, Row Level Security policies, and the two storage
buckets (`media`, public; `private-files`, administrators only).

### 3. Turn off public registration

In **Authentication → Sign In / Providers**:

- Turn **off** “Allow new users to sign up”.
- Keep the **Email** provider enabled (it is how administrators sign in).
- Under **Email**, set the minimum password length to **12** and require
  letters and digits.

Under **Authentication → URL Configuration**, set **Site URL** to the website's
address (e.g. `https://bm80-520.github.io/iyer-lab/` or the custom domain).

### 4. Create the administrator account and set its password

1. **Authentication → Users → Add user → Create new user**. Enter the
   administrator's email address and the password you choose, and tick
   **Auto Confirm User**.
2. Allow that account to edit the website: in **SQL Editor**, run (with the
   same email address)

   ```sql
   insert into public.admins (user_id)
   select id from auth.users where email = 'you@rice.edu';
   ```

Only accounts listed in `public.admins` can change anything. To add another
administrator later, repeat both steps; to remove one, delete their row from
`public.admins` (Table Editor) or delete the user.

**Forgotten password**: an administrator with access to the Supabase project
can set a new one in **SQL Editor**:

```sql
update auth.users
set encrypted_password = extensions.crypt('the-new-password', extensions.gen_salt('bf'))
where email = 'you@rice.edu';
```

A signed-in administrator can also change their own password under
**Settings** in the dashboard.

### 5. Connect this computer

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SUPABASE_URL`: **Project Settings → Data API → Project URL**.
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`: **Project Settings → API Keys →
  Publishable key** (or the legacy **anon** key). This key is public by design.
- `CMS_ADMIN_EMAIL`: the administrator email from step 4.

**Never** put the `secret`/`service_role` key in `.env.local`, in GitHub, or
anywhere in this repository. Nothing here needs it.

### 6. Copy the current website content into Supabase

```sh
npm run cms:import
```

It asks for the administrator password, uploads every image and PDF the
current pages use (about 80 MB) to the Media Library, and creates all
publications, team members, news items, research areas, and page text as
published entries. It refuses to run if any content already exists, so it can
never overwrite work done in the dashboard.

Then check the access rules against the real project:

```sh
npm run cms:check
```

Every line should say `PASS`. It creates and removes a few temporary test
records.

If checks fail with “permission denied for table …”, the second migration
(`20261101120000_api_grants.sql`, which lets the website's API reach the
tables) has not been applied: run `npx supabase db push` again, or paste that
file into the SQL Editor and run it.

### 7. Connect the live website

In GitHub: **Settings → Secrets and variables → Actions → Variables → New
repository variable**, add

- `NEXT_PUBLIC_SUPABASE_URL` (same value as above)
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (same value as above)

These are variables, not secrets, because both values are public. Then commit
and push to `main` (or run the workflow from the **Actions** tab). After the
deployment, sign in at `/login/` on the live site.

### Re-running the import

The import only fills an empty project. To start over on a project that is not
yet in use, run `npx supabase db reset --linked` (this **erases** the project's
tables), empty the two storage buckets in **Storage**, then repeat steps 4 and 6.
Do not do this once the dashboard has been used: take a backup first (Part 3).

---

## Part 3 — Backups, recovery, and local development

### Backups

The free Supabase plan does not keep downloadable backups, so make your own:

- **Dashboard → Settings → Download content backup** saves all content
  (database rows) as one JSON file. Quick, but it does not include the files.
- **Full backup** (content and every uploaded file), from this repository:

  ```sh
  npm run cms:backup
  ```

  It writes `backups/<date-time>/content.json` and `backups/<date-time>/files/`.
  The `backups/` folder is excluded from Git; copy it to lab storage. Take one
  before large changes and, say, monthly.

### Recovering content

- **An archived entry**: the entry's section → **Archived** tab → **Restore**.
- **An edit you regret**: open the latest backup's `content.json`, find the
  entry, and copy the old text back in the dashboard.
- **Restoring everything** into a new, empty project (after steps 1–5 of Part
  2, but instead of step 6):

  ```sh
  npm run cms:restore -- backups/<date-time>
  ```

- **Restoring into the project in use**: `npm run cms:restore --
backups/<date-time> --upsert` puts every entry and file from the backup back,
  replacing any entry with the same id. Entries created after the backup are
  kept; nothing is deleted.

### Local development

The repository includes everything for a private copy of the backend in
Docker (Docker Desktop must be running; it needs about 8 GB of disk):

```sh
npx supabase start -x realtime,edge-runtime,logflare,vector,supavisor,studio,imgproxy
```

It applies the migration and creates a local administrator
(`admin@iyerlab.local`, password `local-dev-password-1`; see
`supabase/seed.sql`, never applied to the hosted project). Put the printed API
URL and publishable key in `.env.local` with that email, then:

```sh
npm run cms:import          # once, to load the current content
npm run dev                 # http://localhost:3000, dashboard at /admin/
npm run cms:check           # optional: verify the access rules
```

`npx supabase stop` stops it; `npx supabase db reset` restores an empty local
database. After changing the schema, add a new file to `supabase/migrations/`
(never edit one that has been applied to the hosted project), run
`npx supabase db reset`, then `npm run cms:types` to regenerate
`src/lib/cms/database.types.ts`, and `npx supabase db push` to apply it to the
hosted project.

Without Supabase settings, `npm run dev` and `npm run build` use the content
files in `content/` instead, and the dashboard explains that it is not
connected.

---

## Part 4 — Reference

### Architecture

```text
Visitors' browsers ─┬─ GitHub Pages: static HTML, CSS, JS (built by GitHub Actions)
                    └─ Supabase (published content only, read with the public key)

Dashboard (/admin/) ─── Supabase Auth (email + password)
                    └── Postgres + Storage, as the signed-in administrator
```

- The website stays a static site on GitHub Pages: no server to run.
- **At build time** the pages are rendered from the published content in
  Supabase, so the HTML is complete for search engines and visitors without
  JavaScript. If Supabase cannot be reached during a build, the build fails and
  the previous version stays online.
- **In the browser** every managed section (publications, team, news, research,
  page text, footer contact) asks Supabase for the latest published version
  and replaces the built copy. That is why dashboard changes are live
  immediately without redeploying. If the request fails, the built copy stays
  on screen.
- A **nightly rebuild** (`.github/workflows/deploy.yml`) refreshes the built
  copy. News articles published since the last build are served through the
  site's 404 page, which looks the article up and shows it, until the next
  rebuild gives them their own page.
- Supabase pauses free projects after a week without any activity. Visitors'
  page views and the nightly build keep it active; if it is ever paused,
  restore it from the Supabase dashboard (pages keep showing the built copy
  meanwhile).

### Security

- Registration is closed; administrators are created by hand (Part 2, step 4)
  and must be listed in `public.admins`.
- **Row Level Security** on every table: visitors (`anon`) may only read
  published, non-archived rows, website text, and records of public files.
  Visitors' insert/update/delete privileges are revoked entirely. Everything
  else requires `public.is_admin()`, which checks `public.admins` for the
  signed-in user. Being signed in without being an administrator grants
  nothing.
- **Storage policies** mirror this: anyone can download files in the public
  `media` bucket by URL; only administrators can list, upload, replace, or
  delete, and only administrators can read `private-files`.
- Buckets accept only JPEG, PNG, WebP, GIF, and PDF (no SVG or HTML), up to
  25 MB (public) and 50 MB (private); the dashboard checks types and sizes
  before uploading as well.
- Text from the dashboard is rendered without raw HTML and with only web,
  email, and phone links, so a compromised account cannot inject scripts.
- The browser only ever holds the publishable key and the administrator's own
  session. Sessions use Supabase's short-lived tokens; the dashboard signs out
  after an hour of inactivity, and **Settings → Sign out on every device**
  ends all sessions.
- `npm run cms:check` tests these rules against a live project.

### Database

Defined in `supabase/migrations/20261101000000_cms_schema.sql`.

| Table                           | Holds                                                                                                     |
| ------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `media`                         | One row per uploaded file: bucket, storage path, thumbnail, type, size, pixel size, alt text, description |
| `publications`                  | Title, date, journal, authors, citation, DOI, PMID/PMCID, URLs, image, PDF, abstract, type, homepage flag |
| `team_members`                  | Name, position, joined, photograph, biography, interests, email, links, current/alumni, order             |
| `news`                          | Headline, date, category, text, card and article images, external link, web address (slug)                |
| `research_areas`                | Research page sections: title, anchor, introduction, navigation image, order                              |
| `research_projects`             | Projects within an area: title, navigation label, description, figure, order                              |
| `research_project_publications` | Which publications are linked to which project, in order                                                  |
| `site_content`                  | Editable page text by key (keys are defined in `src/lib/cms/site-text.ts`)                                |
| `admins`                        | User ids allowed to edit                                                                                  |

Every content table has `status` (`draft` or `published`), `created_at`,
`updated_at` (set by a trigger), and `deleted_at` (archiving). Images are
referenced by `media.id` with `on delete restrict`, so a file in use cannot be
deleted, and replacing a file's contents updates every page that uses it.
`media_usage(id)` lists where a file is used.

### Files

| Path                                              | Purpose                                                                                                  |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `supabase/migrations/`                            | Database schema, policies, and buckets (tracked migrations)                                              |
| `supabase/config.toml`, `seed.sql`                | Local Supabase settings and local-only administrator                                                     |
| `src/lib/cms/`                                    | Supabase client, public queries, row → page mappers, dashboard API, build snapshot, fallback             |
| `src/components/live-content.tsx`                 | Public page sections that refresh from Supabase                                                          |
| `src/components/admin/`                           | Dashboard: shell, collection editor, managers, media library, fields                                     |
| `src/app/admin/`, `src/app/login/`                | Dashboard and login routes                                                                               |
| `scripts/import-content.ts`                       | One-time import of the repository content                                                                |
| `scripts/backup-content.ts`, `restore-content.ts` | Full backup and restore                                                                                  |
| `scripts/check-permissions.ts`                    | Access-rule test                                                                                         |
| `content/`                                        | Static page structure, plus the original content used for the import and when Supabase is not configured |
