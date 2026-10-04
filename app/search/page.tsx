import type { Metadata } from 'next';
import { PageIntro } from '../components/ui';
import SiteSearch from '../components/search';
export const metadata: Metadata = { title: 'Search' };
export default function SearchPage() { return <><PageIntro eyebrow="Search" title={<>Find your way<br/><em>to something good.</em></>} description="Search projects, ways to give, help and more."/><section className="wrap section narrow"><SiteSearch/></section></>; }
