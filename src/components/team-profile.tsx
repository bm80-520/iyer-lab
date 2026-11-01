import type { TeamMember } from '@/lib/content-types';
import { withBasePath } from '@/lib/site';
import { SiteImage } from './site-image';

// The biography is passed in already rendered, so the Team page and the
// dashboard preview share this layout.
export function TeamProfile({ member, bio }: { member: TeamMember; bio: React.ReactNode }) {
  return (
    <section className="team-profile">
      <div className="profile-image">
        {member.image ? (
          <SiteImage image={member.image} />
        ) : (
          <img
            className="profile-placeholder"
            src={withBasePath('/images/iyer-lab-emblem.svg')}
            alt=""
          />
        )}
      </div>
      <div className="profile-description">
        <div className="profile-name">
          {member.name}
          <br />
          {member.role}
        </div>
        {member.joined && <div>Joined: {member.joined}</div>}
        {member.email && <div>{member.email}</div>}
        {member.interests && <div>Research interests: {member.interests}</div>}
        <div className="profile-links">
          {member.links.map((link) => (
            <a
              key={link.href}
              href={link.href.startsWith('/') ? withBasePath(link.href) : link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="profile-bio">{bio}</div>
      </div>
    </section>
  );
}

/** Members arrive in display order; alumni are listed in their own section. */
export function splitTeam<T extends Pick<TeamMember, 'status'>>(members: T[]) {
  return {
    current: members.filter((member) => member.status !== 'alumni'),
    alumni: members.filter((member) => member.status === 'alumni'),
  };
}
