'use client';
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { projects } from '../content';
import { ProjectCard } from './ui';
export default function ProjectBrowser() {
  const [category, setCategory] = useState('All projects');
  const [query, setQuery] = useState('');
  const filtered = projects.filter(p => (category === 'All projects' || p.category === category) && `${p.title} ${p.description} ${p.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <><div className="browse-tools"><div className="filter-pills" aria-label="Filter projects">{['All projects', 'Everyday essentials', 'Faith & learning', 'Community care'].map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="search-field"><Search size={19}/><span className="sr-only">Search projects</span><input placeholder="Find a project…" value={query} onChange={event => setQuery(event.target.value)}/>{query && <button onClick={() => setQuery('')} aria-label="Clear project search"><X size={16}/></button>}</label></div><p className="result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'project' : 'projects'}</p><div className="project-grid">{filtered.map(project => <ProjectCard key={project.slug} project={project}/>)}</div>{!filtered.length && <div className="empty-state"><h2>No projects found</h2><p>Try a different word or browse all our projects.</p><button className="button button-blue" onClick={() => { setQuery(''); setCategory('All projects'); }}>Show all projects</button></div>}</>;
}
