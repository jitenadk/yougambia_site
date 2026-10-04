'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Heart, Menu, Search, X } from 'lucide-react';
import { navigation } from '../content';
import { Brand } from './ui';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  return <>
    <div className="utility-bar"><div className="wrap"><span>Serving the Ummah with love.</span><div><Link href="/giving#policy">Our donation policy <ArrowUpRight size={12}/></Link><Link href="/help">Help & FAQs</Link><Link href="/contact">Contact us</Link></div></div></div>
    <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); button.current?.focus(); } }}>
      <div className="header-inner wrap"><Brand/><nav id="site-navigation" className={`navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
        <Link className="mobile-nav-link" href="/help" onClick={() => setMenuOpen(false)}>Help & FAQs</Link><Link className="mobile-nav-link" href="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link>
      </nav><div className="header-actions"><Link className="icon-button" href="/search" aria-label="Search the website"><Search size={21}/></Link><Link className="button button-blue header-donate" href="/donate" onClick={() => setMenuOpen(false)}>Donate <Heart size={16}/></Link><button ref={button} className="icon-button menu-toggle" aria-controls="site-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button></div></div>
    </header>
  </>;
}
