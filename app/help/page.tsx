import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageIntro } from '../components/ui';
import FaqList from '../components/faq-list';
export const metadata: Metadata = { title: 'Help & FAQs', description: 'Find answers about donating, zakat, receipts, project updates and getting involved with You Gambia.' };
export default function Help() { return <><PageIntro eyebrow="Help centre" title={<>A question on your mind?<br/><em>Let’s help you find the answer.</em></>} description="Search our frequently asked questions, or choose a topic to get started."/><section className="wrap section narrow"><FaqList/><div className="help-callout"><h2>Still looking for an answer?</h2><p>A conversation with the team is a good place to start.</p><Link href="/contact" className="button button-blue">Contact us <ArrowRight size={18}/></Link></div></section></>; }
