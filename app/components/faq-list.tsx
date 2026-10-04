'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plus, Search } from 'lucide-react';
import { external, faqs } from '../content';
export default function FaqList({ preview = false }: { preview?: boolean }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All questions');
  const visible = (preview ? [faqs[0], faqs[3], faqs[6], faqs[8]] : faqs).filter(faq => (category === 'All questions' || faq.category === category) && `${faq.question} ${faq.answer}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <>{!preview && <div className="faq-tools"><label className="search-field search-large"><Search size={21}/><span className="sr-only">Search frequently asked questions</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Try ‘zakat’, ‘receipt’ or ‘volunteer’…"/></label><div className="filter-pills" aria-label="Filter questions">{['All questions', 'Donating', 'Zakat & policy', 'Our work', 'Getting involved'].map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><p className="result-count" aria-live="polite">{visible.length} {visible.length === 1 ? 'answer' : 'answers'}</p></div>}<div className="faq-list">{visible.map(faq => <details className="faq-item" key={faq.question}><summary>{faq.question}<Plus size={18}/></summary><div><p>{faq.answer}</p>{faq.href.startsWith('https:') ? <a href={faq.href} {...external} className="text-link">{faq.label} <ArrowRight size={15}/></a> : <Link href={faq.href} className="text-link">{faq.label} <ArrowRight size={15}/></Link>}</div></details>)}</div>{!visible.length && <div className="empty-state"><h2>Let’s find you an answer.</h2><p>Try another search, or ask our team directly.</p><Link className="button button-blue" href="/contact">Contact the team</Link></div>}</>;
}
