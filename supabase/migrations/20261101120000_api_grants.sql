-- Table privileges for the Data API roles. Newer Supabase projects do not
-- grant these automatically on tables created by migrations, which leaves the
-- tables unreachable ("permission denied for table …"). Row Level Security
-- (see 20261101000000_cms_schema.sql) still decides which rows each role may
-- read or change: visitors read published rows only, and every write requires
-- an account listed in public.admins.

grant usage on schema public to anon, authenticated;

grant select on
  public.media,
  public.publications,
  public.team_members,
  public.news,
  public.research_areas,
  public.research_projects,
  public.research_project_publications,
  public.site_content
to anon, authenticated;

grant insert, update, delete on
  public.media,
  public.publications,
  public.team_members,
  public.news,
  public.research_areas,
  public.research_projects,
  public.research_project_publications,
  public.site_content
to authenticated;

-- Signed-in users may see only their own row (policy in the schema migration).
-- Visitors get no access to the list of administrators at all.
grant select on public.admins to authenticated;
revoke all on public.admins from anon;
