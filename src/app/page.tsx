import Link from 'next/link';
import { NewsList } from '@/components/news-list';

const research = [
  { title: 'Meet microglia', href: '/research/primer/', text: 'Explore the brain’s resident immune cells and why we are captivated by their biology.' },
  { title: 'Lysosomal biology', href: '/research/lysosomal-projects/', text: 'Understand how microglia clear cellular material and maintain a healthy brain.' },
  { title: 'Microglia & brain disorders', href: '/research/microglia-and-brain-disorders/', text: 'Investigate neuroimmune pathways in brain development, repair, aging, and disease.' },
];

export default function Home() {
  return <>
    <section className="hero"><div className="hero-inner"><p className="eyebrow">Rice University · Iyer Laboratory</p><h1>Small cells.<br />Big questions.</h1><p className="hero-description">We study microglia, the brain’s resident immune cells, to understand how they shape brain health and disease.</p><Link className="button" href="/research/">Explore our research <span>→</span></Link></div><div className="cell-art" aria-hidden="true"><div className="cell cell-one" /><div className="cell cell-two" /><div className="cell cell-three" /><span className="cell-caption">Curiosity at every scale</span></div></section>
    <section className="home-section"><div className="section-heading"><p className="eyebrow">What we explore</p><h2>The biology behind a healthy brain</h2></div><div className="research-grid">{research.map((item, index) => <Link key={item.href} href={item.href} className="research-card"><span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow">Learn more →</span></Link>)}</div></section>
    <section className="community home-section"><div><p className="eyebrow">Science is a shared adventure</p><h2>Get to know our shoal.</h2><p>Meet the people behind the questions, explore resources for researchers, and learn about opportunities to join the lab.</p><Link className="button" href="/team/">Meet the team →</Link></div><div className="community-links"><Link href="/publications/">Our publications <span>↗</span></Link><Link href="/resources/">Research resources <span>↗</span></Link><Link href="/join-our-shoal/">Join our shoal <span>↗</span></Link></div></section>
    <section className="home-section"><div className="section-heading"><p className="eyebrow">Life in the lab</p><h2>Latest lab news</h2></div><NewsList limit={3} /><Link className="text-link" href="/lab-news/">All lab news →</Link></section>
  </>;
}
