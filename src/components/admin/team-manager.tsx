'use client';

import type { LinkData } from '@/lib/content-types';
import { slugify, uniqueSlug } from '@/lib/cms/admin';
import { teamMemberFromRow, type TeamMemberRow } from '@/lib/cms/mappers';
import { MarkdownText } from '../markdown-text';
import { TeamProfile } from '../team-profile';
import { CollectionManager, type EditorProps, type Errors } from './collection-manager';
import { MediaField, SelectField, TextArea, TextField, markdownHint } from './fields';
import { thumbnailUrl, useMedia } from './media-context';
import { checkSlug, copyRecord, newRecord, nextOrder } from './shared';

const positions = [
  'Principal Investigator',
  'Postdoctoral Researcher',
  'Graduate Student',
  'Undergraduate Student',
  'Research Technician',
  'Lab Manager',
  'Rotation Student',
  'Visiting Scholar',
];

const links = (row: TeamMemberRow) => (row.external_links ?? []) as LinkData[];

function emptyMember(items: TeamMemberRow[]): TeamMemberRow {
  return {
    ...newRecord(),
    slug: '',
    name: '',
    position: '',
    joined: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    photograph_id: null,
    photograph_alt_text: '',
    biography: '',
    research_interests: '',
    email: '',
    external_links: [],
    member_status: 'current',
    status: 'draft',
    display_order: nextOrder(items),
  };
}

function validate(draft: TeamMemberRow, others: TeamMemberRow[]): Errors {
  const errors: Errors = {};
  if (!draft.name.trim()) errors.name = 'Enter the team member’s name.';
  if (!draft.position.trim()) errors.position = 'Enter their position.';
  if (draft.email && !/^\S+@\S+\.\S+$/.test(draft.email))
    errors.email = 'Enter a valid email address, or leave it empty.';
  links(draft).forEach((link, index) => {
    if (!link.label.trim() || !link.href.trim())
      errors[`link${index}`] = `Link ${index + 1} needs both a label and an address.`;
    else if (!/^(https?:\/\/|mailto:|\/)/.test(link.href.trim()))
      errors[`link${index}`] = `Link ${index + 1} must start with https://.`;
  });
  checkSlug(errors, draft.slug, others);
  return errors;
}

function TeamForm({ draft, update, errors }: EditorProps<TeamMemberRow>) {
  const setLink = (index: number, patch: Partial<LinkData>) =>
    update({
      external_links: links(draft).map((link, i) => (i === index ? { ...link, ...patch } : link)),
    });
  return (
    <>
      <fieldset>
        <legend>Profile</legend>
        <div className="admin-field-row">
          <TextField
            label="Name"
            required
            value={draft.name}
            error={errors.name}
            onChange={(name) => update({ name })}
          />
          <TextField
            label="Position"
            required
            placeholder="e.g. Graduate Student"
            suggestions={positions}
            value={draft.position}
            error={errors.position}
            onChange={(position) => update({ position })}
          />
        </div>
        <div className="admin-field-row">
          <TextField
            label="Joined"
            placeholder="e.g. January 2026"
            value={draft.joined}
            onChange={(joined) => update({ joined })}
          />
          <TextField
            label="Public email (optional)"
            type="email"
            value={draft.email}
            error={errors.email}
            onChange={(email) => update({ email: email.trim() })}
          />
        </div>
        <TextField
          label="Research interests (optional)"
          placeholder="e.g. microglia, lysosomes, cavefish"
          value={draft.research_interests}
          onChange={(research_interests) => update({ research_interests })}
        />
        <TextArea
          label="Biography"
          rows={8}
          hint={markdownHint}
          value={draft.biography}
          onChange={(biography) => update({ biography })}
        />
      </fieldset>
      <fieldset>
        <legend>Photograph</legend>
        <MediaField
          label="Profile photograph"
          kind="image"
          value={draft.photograph_id}
          alt={draft.photograph_alt_text}
          onAltChange={(photograph_alt_text) => update({ photograph_alt_text })}
          error={errors.photograph}
          onChange={(photograph_id) => update({ photograph_id })}
        />
      </fieldset>
      <fieldset>
        <legend>Links (optional)</legend>
        {links(draft).map((link, index) => (
          <div className="admin-field-row admin-link-row" key={index}>
            <TextField
              label={`Link ${index + 1} label`}
              placeholder="e.g. ORCID"
              suggestions={['Website', 'ORCID', 'LinkedIn', 'Google Scholar', 'BlueSky', 'X', 'CV']}
              value={link.label}
              error={errors[`link${index}`]}
              onChange={(label) => setLink(index, { label })}
            />
            <TextField
              label={`Link ${index + 1} address`}
              type="url"
              placeholder="https://"
              value={link.href}
              onChange={(href) => setLink(index, { href: href.trim() })}
            />
            <button
              type="button"
              className="admin-button is-quiet"
              onClick={() => update({ external_links: links(draft).filter((_, i) => i !== index) })}
            >
              Remove<span className="visually-hidden"> link {index + 1}</span>
            </button>
          </div>
        ))}
        <button
          type="button"
          className="admin-button"
          onClick={() => update({ external_links: [...links(draft), { label: '', href: '' }] })}
        >
          Add link
        </button>
        <p className="admin-hint">
          To link a CV, upload the PDF in the Media Library, make it public, and paste its link.
        </p>
      </fieldset>
      <fieldset>
        <legend>Placement on the Team page</legend>
        <SelectField
          label="Member status"
          hint="Alumni are listed in the Alumni section of the Team page."
          value={draft.member_status as 'current' | 'alumni'}
          options={[
            { value: 'current', label: 'Current member' },
            { value: 'alumni', label: 'Alumnus / alumna' },
          ]}
          onChange={(member_status) => update({ member_status })}
        />
        <p className="admin-hint">Change the order with “Arrange order” on the Team list.</p>
      </fieldset>
    </>
  );
}

const byOrder = (a: TeamMemberRow, b: TeamMemberRow) =>
  a.display_order - b.display_order || a.name.localeCompare(b.name);

export function TeamManager() {
  const { lookup } = useMedia();
  return (
    <CollectionManager<TeamMemberRow>
      table="team_members"
      title="Team"
      singular="team member"
      intro="Published profiles appear on the Team page in the order set with “Arrange order”. Mark people who have left as alumni instead of deleting them."
      label={(item) => item.name || 'Unnamed team member'}
      createDraft={emptyMember}
      duplicate={(item, items) =>
        copyRecord(item, { slug: '', name: `${item.name} (copy)`, display_order: nextOrder(items) })
      }
      prepare={(draft, others) =>
        draft.slug
          ? draft
          : {
              ...draft,
              slug: uniqueSlug(
                slugify(draft.name, 60),
                others.map((other) => other.slug),
              ),
            }
      }
      validate={validate}
      validateForPublish={(draft): Errors =>
        draft.photograph_id ? {} : { photograph: 'Add a profile photograph before publishing.' }
      }
      sort={(items) =>
        [...items].sort(
          (a, b) =>
            Number(a.member_status === 'alumni') - Number(b.member_status === 'alumni') ||
            byOrder(a, b),
        )
      }
      searchText={(item) => `${item.name} ${item.position} ${item.email}`}
      filters={[
        {
          label: 'Member status',
          options: () => [
            { value: 'current', label: 'Current members' },
            { value: 'alumni', label: 'Alumni' },
          ],
          match: (item, value) => item.member_status === value,
        },
      ]}
      orderGroups={(items) => [
        {
          label: 'Current members',
          items: items.filter((item) => item.member_status !== 'alumni').sort(byOrder),
        },
        {
          label: 'Alumni',
          items: items.filter((item) => item.member_status === 'alumni').sort(byOrder),
        },
      ]}
      Form={TeamForm}
      Preview={({ draft }) => {
        const member = teamMemberFromRow(draft, lookup);
        return (
          <>
            {draft.member_status === 'alumni' && (
              <p className="admin-preview-note">Listed in the Alumni section of the Team page.</p>
            )}
            <TeamProfile
              member={{ ...member, name: member.name || 'Name', role: member.role || 'Position' }}
              bio={<MarkdownText source={draft.biography} />}
            />
          </>
        );
      }}
      columns={[
        {
          label: 'Photo',
          className: 'admin-col-thumb',
          render: (item) => {
            const src = thumbnailUrl(lookup(item.photograph_id));
            return src ? <img src={src} alt="" /> : <span className="admin-hint">None</span>;
          },
        },
        { label: 'Name', className: 'admin-col-title', render: (item) => item.name },
        { label: 'Position', render: (item) => item.position },
        {
          label: 'Member',
          render: (item) => (item.member_status === 'alumni' ? 'Alumni' : 'Current'),
        },
      ]}
    />
  );
}
