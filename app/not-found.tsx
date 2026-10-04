import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export default function NotFound() { return <section className="wrap section empty-state"><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>Let’s get you<br/><em>back on track.</em></h1><p>This page may have moved, or the link may be incomplete.</p><div className="hero-actions"><Link className="button button-blue" href="/">Back to home <ArrowRight size={17}/></Link><Link className="text-link" href="/search">Search the website <ArrowRight size={17}/></Link></div></section>; }
