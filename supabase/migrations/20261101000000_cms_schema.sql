-- Iyer Lab content-management schema.
--
-- Anonymous visitors may read published content only. Every write, and every
-- read of drafts, archived (soft-deleted) records and private files, requires
-- a signed-in account listed in public.admins. Row Level Security enforces
-- this in the database; hiding buttons in the dashboard is not relied upon.

-- ---------------------------------------------------------------------------
-- Administrators
-- ---------------------------------------------------------------------------

create table public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admins enable row level security;

create policy "Admins can see their own admin row"
  on public.admins for select to authenticated
  using (user_id = (select auth.uid()));

-- Security definer so policies can consult public.admins without granting
-- visitors read access to it.
create function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.admins where user_id = (select auth.uid()));
$$;

revoke execute on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

create function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create type public.content_status as enum ('draft', 'published');

-- ---------------------------------------------------------------------------
-- Media library
-- ---------------------------------------------------------------------------

-- One row per uploaded file. Content refers to files by id, so replacing a
-- file's contents (a new storage_path) updates every page that uses it.
-- Files in the public `media` bucket can be linked from the website; files in
-- `private-files` are visible only to administrators.
create table public.media (
  id uuid primary key default gen_random_uuid(),
  bucket text not null default 'media' check (bucket in ('media', 'private-files')),
  storage_path text not null,
  thumbnail_path text,
  filename text not null check (length(trim(filename)) > 0),
  file_type text not null check (
    file_type in ('image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf')
  ),
  file_size bigint not null check (file_size >= 0),
  width integer check (width > 0),
  height integer check (height > 0),
  alt_text text not null default '',
  description text not null default '',
  uploaded_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (bucket, storage_path)
);

create index media_uploaded_at_idx on public.media (uploaded_at desc);

-- ---------------------------------------------------------------------------
-- Publications
-- ---------------------------------------------------------------------------

create table public.publications (
  id uuid primary key default gen_random_uuid(),
  -- Stable anchor on the Publications page (/publications/#slug).
  slug text not null unique check (slug ~ '^[a-z0-9][a-z0-9-]*$'),
  title text not null check (length(trim(title)) > 0),
  publication_date date not null,
  journal text not null default '',
  authors text not null default '',
  citation text not null default '',
  doi text not null default '',
  pmid text not null default '',
  pmcid text not null default '',
  publication_url text not null default '',
  pubmed_url text not null default '',
  preprint_url text not null default '',
  image_id uuid references public.media (id) on delete restrict,
  image_alt_text text not null default '',
  pdf_id uuid references public.media (id) on delete restrict,
  abstract text not null default '',
  publication_type text not null default 'article' check (
    publication_type in ('article', 'review', 'methods', 'perspective', 'preprint', 'chapter', 'other')
  ),
  -- Shown on the homepage (the newest three featured papers).
  featured boolean not null default false,
  status public.content_status not null default 'draft',
  -- Breaks ties between papers with the same date; lower first.
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index publications_public_idx on public.publications (publication_date desc, display_order)
  where status = 'published' and deleted_at is null;
create index publications_image_idx on public.publications (image_id);
create index publications_pdf_idx on public.publications (pdf_id);

-- ---------------------------------------------------------------------------
-- Team
-- ---------------------------------------------------------------------------

create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9][a-z0-9-]*$'),
  name text not null check (length(trim(name)) > 0),
  position text not null default '',
  joined text not null default '',
  photograph_id uuid references public.media (id) on delete restrict,
  photograph_alt_text text not null default '',
  biography text not null default '',
  research_interests text not null default '',
  email text not null default '',
  -- [{ "label": "ORCID", "href": "https://orcid.org/…" }, …]
  external_links jsonb not null default '[]' check (jsonb_typeof(external_links) = 'array'),
  member_status text not null default 'current' check (member_status in ('current', 'alumni')),
  status public.content_status not null default 'draft',
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index team_members_public_idx on public.team_members (member_status, display_order)
  where status = 'published' and deleted_at is null;
create index team_members_photograph_idx on public.team_members (photograph_id);

-- ---------------------------------------------------------------------------
-- Lab news
-- ---------------------------------------------------------------------------

create table public.news (
  id uuid primary key default gen_random_uuid(),
  -- Articles live at the site root (/slug/), so page names are reserved.
  slug text not null unique check (
    slug ~ '^[a-z0-9][a-z0-9-]*$'
    and slug not in (
      'admin', 'fonts', 'images', 'iyer-lab-resources', 'join-our-shoal', 'lab-news', 'login',
      'publications', 'research', 'resources', 'team'
    )
  ),
  title text not null check (length(trim(title)) > 0),
  publication_date date not null,
  category text not null default '',
  -- Markdown. Items without text link straight to external_url instead.
  content text not null default '',
  image_id uuid references public.media (id) on delete restrict,
  image_alt_text text not null default '',
  -- Optional wider crop for the article page; defaults to the card image.
  article_image_id uuid references public.media (id) on delete restrict,
  external_url text not null default '',
  external_link_text text not null default '',
  status public.content_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index news_public_idx on public.news (publication_date desc)
  where status = 'published' and deleted_at is null;
create index news_image_idx on public.news (image_id);
create index news_article_image_idx on public.news (article_image_id);

-- ---------------------------------------------------------------------------
-- Research
-- ---------------------------------------------------------------------------

-- A research area is one topic section of the Research page.
create table public.research_areas (
  id uuid primary key default gen_random_uuid(),
  -- Section anchor (/research/#slug).
  slug text not null unique check (slug ~ '^[a-z0-9][a-z0-9-]*$'),
  title text not null check (length(trim(title)) > 0),
  -- Optional Markdown shown under the section heading.
  introductory_text text not null default '',
  image_id uuid references public.media (id) on delete restrict,
  image_alt_text text not null default '',
  status public.content_status not null default 'draft',
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

-- A research question within an area, with its figure and description.
create table public.research_projects (
  id uuid primary key default gen_random_uuid(),
  area_id uuid not null references public.research_areas (id) on delete cascade,
  slug text not null unique check (slug ~ '^[a-z0-9][a-z0-9-]*$'),
  title text not null check (length(trim(title)) > 0),
  -- Short label in the Research Topics navigation.
  nav_label text not null default '',
  main_content text not null default '',
  image_id uuid references public.media (id) on delete restrict,
  image_alt_text text not null default '',
  status public.content_status not null default 'draft',
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index research_projects_area_idx on public.research_projects (area_id, display_order);
create index research_projects_image_idx on public.research_projects (image_id);
create index research_areas_image_idx on public.research_areas (image_id);

create table public.research_project_publications (
  project_id uuid not null references public.research_projects (id) on delete cascade,
  publication_id uuid not null references public.publications (id) on delete cascade,
  display_order integer not null default 0,
  primary key (project_id, publication_id)
);

create index research_project_publications_publication_idx
  on public.research_project_publications (publication_id);

-- ---------------------------------------------------------------------------
-- Editable website text
-- ---------------------------------------------------------------------------

-- Short passages of page text. Keys are fixed by the website's components;
-- the dashboard edits values only.
create table public.site_content (
  content_key text primary key check (content_key ~ '^[a-z0-9.-]+$'),
  page text not null,
  label text not null,
  format text not null default 'text' check (format in ('text', 'markdown')),
  content_value text not null default '',
  display_order integer not null default 0,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Timestamps
-- ---------------------------------------------------------------------------

create trigger media_updated_at before update on public.media
  for each row execute function public.set_updated_at();
create trigger publications_updated_at before update on public.publications
  for each row execute function public.set_updated_at();
create trigger team_members_updated_at before update on public.team_members
  for each row execute function public.set_updated_at();
create trigger news_updated_at before update on public.news
  for each row execute function public.set_updated_at();
create trigger research_areas_updated_at before update on public.research_areas
  for each row execute function public.set_updated_at();
create trigger research_projects_updated_at before update on public.research_projects
  for each row execute function public.set_updated_at();
create trigger site_content_updated_at before update on public.site_content
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table public.media enable row level security;
alter table public.publications enable row level security;
alter table public.team_members enable row level security;
alter table public.news enable row level security;
alter table public.research_areas enable row level security;
alter table public.research_projects enable row level security;
alter table public.research_project_publications enable row level security;
alter table public.site_content enable row level security;

-- Visitors never write, whatever the policies below say.
revoke insert, update, delete, truncate on all tables in schema public from anon;

-- Public reads.
create policy "Public files are visible to everyone"
  on public.media for select to anon, authenticated
  using (bucket = 'media');

create policy "Published publications are visible to everyone"
  on public.publications for select to anon, authenticated
  using (status = 'published' and deleted_at is null);

create policy "Published team members are visible to everyone"
  on public.team_members for select to anon, authenticated
  using (status = 'published' and deleted_at is null);

create policy "Published news is visible to everyone"
  on public.news for select to anon, authenticated
  using (status = 'published' and deleted_at is null);

create policy "Published research areas are visible to everyone"
  on public.research_areas for select to anon, authenticated
  using (status = 'published' and deleted_at is null);

create policy "Published research projects in published areas are visible to everyone"
  on public.research_projects for select to anon, authenticated
  using (
    status = 'published'
    and deleted_at is null
    and exists (
      select 1 from public.research_areas area
      where area.id = area_id and area.status = 'published' and area.deleted_at is null
    )
  );

create policy "Research publication links are visible to everyone"
  on public.research_project_publications for select to anon, authenticated
  using (true);

create policy "Website text is visible to everyone"
  on public.site_content for select to anon, authenticated
  using (true);

-- Administrators: full access to every content table.
create policy "Admins manage media" on public.media for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admins manage publications" on public.publications for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admins manage team members" on public.team_members for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admins manage news" on public.news for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admins manage research areas" on public.research_areas for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admins manage research projects" on public.research_projects for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admins manage research publication links"
  on public.research_project_publications for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admins manage website text" on public.site_content for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));

-- ---------------------------------------------------------------------------
-- Media usage
-- ---------------------------------------------------------------------------

-- Where a file is used, so the Media Library can warn before replacing it and
-- refuse to delete it. Runs with the caller's rights: visitors see nothing
-- beyond what RLS already shows them.
create function public.media_usage(target uuid)
returns table (kind text, record_id uuid, title text, field text)
language sql
stable
set search_path = ''
as $$
  select 'publication', id, title, 'image' from public.publications where image_id = target
  union all
  select 'publication', id, title, 'pdf' from public.publications where pdf_id = target
  union all
  select 'team member', id, name, 'photograph' from public.team_members where photograph_id = target
  union all
  select 'news', id, title, 'image' from public.news where image_id = target
  union all
  select 'news', id, title, 'article image' from public.news where article_image_id = target
  union all
  select 'research area', id, title, 'image' from public.research_areas where image_id = target
  union all
  select 'research project', id, title, 'image' from public.research_projects where image_id = target;
$$;

revoke execute on function public.media_usage(uuid) from public, anon;
grant execute on function public.media_usage(uuid) to authenticated;

-- ---------------------------------------------------------------------------
-- Storage
-- ---------------------------------------------------------------------------

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('media', 'media', true, 26214400,
    array['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf']),
  ('private-files', 'private-files', false, 52428800,
    array['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf']);

-- Files in the public bucket are served to everyone by URL without a policy.
-- Listing, uploading, replacing and deleting are for administrators only.
create policy "Admins read lab files" on storage.objects for select to authenticated
  using (bucket_id in ('media', 'private-files') and (select public.is_admin()));
create policy "Admins upload lab files" on storage.objects for insert to authenticated
  with check (bucket_id in ('media', 'private-files') and (select public.is_admin()));
create policy "Admins update lab files" on storage.objects for update to authenticated
  using (bucket_id in ('media', 'private-files') and (select public.is_admin()))
  with check (bucket_id in ('media', 'private-files') and (select public.is_admin()));
create policy "Admins delete lab files" on storage.objects for delete to authenticated
  using (bucket_id in ('media', 'private-files') and (select public.is_admin()));
