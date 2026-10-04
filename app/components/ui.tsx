import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen, Droplets, HandHeart, Hospital, Landmark, Leaf, Moon } from 'lucide-react';
import { external, links, type Project } from '../content';

export function ProjectIcon({ name, size = 28 }: { name: string; size?: number }) {
  const Icon = ({ water: Droplets, moon: Moon, book: BookOpen, mosque: Landmark, leaf: Leaf, care: Hospital })[name] || HandHeart;
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true"/>;
}
export function Brand() {
  return <Link href="/" className="brand" aria-label="You Gambia home"><span className="brand-symbol"><Leaf size={28}/></span><span>yougambia<span className="brand-dot">.</span><small>CHARITY. UNITY. BARAKAH.</small></span></Link>;
}
export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <Link href={`/projects/${project.slug}`} className={`project-art tone-${project.color}`} tabIndex={-1} aria-hidden="true"><div className="art-orbit"/><ProjectIcon name={project.icon} size={74}/><span className="art-label">YOUGAMBIA / {project.category.toUpperCase()}</span><span className="art-corner"><ArrowUpRight size={21}/></span></Link>
    <div className="project-card-body"><span className="eyebrow">{project.category}</span><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.description}</p><Link className="text-link" href={`/projects/${project.slug}`}>Explore this project <ArrowRight size={17}/></Link></div>
  </article>;
}
export function PageIntro({ eyebrow, title, description, children }: { eyebrow: string; title: React.ReactNode; description: string; children?: React.ReactNode }) {
  return <section className="page-intro"><div className="wrap"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>{eyebrow}</span></nav><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p>{children}</div></section>;
}
export function CtaBand() {
  return <section className="wrap cta-band"><div><span className="eyebrow">THERE’S A PLACE FOR YOU HERE</span><h2>Let’s do something <em>good.</em></h2><p>A gift, a little time, a conversation. It can start with you.</p></div><div className="cta-actions"><Link href="/donate" className="button button-lime">Give with heart <ArrowUpRight size={18}/></Link><Link href="/contact" className="light-link">Talk to our team <ArrowRight size={17}/></Link></div></section>;
}
export function PolicyNote() {
  return <div className="policy-note"><HandHeart size={28}/><div><strong>100% donation & zakat policy</strong><p>As stated on our official Instagram profile. <Link href="/giving#policy">Learn about giving with You Gambia <ArrowRight size={14}/></Link></p></div></div>;
}
export function SocialLinks() {
  return <div className="social-links"><a href={links.instagram} {...external}>Instagram <ArrowUpRight size={15}/></a><a href={links.tiktok} {...external}>TikTok <ArrowUpRight size={15}/></a></div>;
}
