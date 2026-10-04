'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { searchEntries } from '../content';
export default function SiteSearch() {
  const [query, setQuery] = useState('');
  const matches = searchEntries.filter(item => `${item.label} ${item.description}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <><label className="search-field search-large"><Search size={23}/><span className="sr-only">Search the website</span><input autoFocus value={query} onChange={event => setQuery(event.target.value)} placeholder="What would you like to find?"/>{query && <button aria-label="Clear search" onClick={() => setQuery('')}><X size={19}/></button>}</label><p className="result-count" aria-live="polite">{query ? `${matches.length} results for “${query}”` : 'Explore the website'}</p><div className="search-results">{matches.map(item => <Link href={item.href} key={item.href}><div><h2>{item.label}</h2><p>{item.description}</p></div><ArrowUpRight size={22}/></Link>)}</div>{!matches.length && <div className="empty-state"><h2>Nothing here just yet.</h2><p>Try a broader search such as water, donate or help.</p><Link href="/contact" className="text-link">Ask the team <ArrowUpRight size={17}/></Link></div>}</>;
}
