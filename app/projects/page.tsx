import type { Metadata } from 'next';
import { CtaBand, PageIntro } from '../components/ui';
import ProjectBrowser from '../components/project-browser';
export const metadata: Metadata = { title: 'Our projects', description: 'Explore water wells, food and Ramadan, Qur’an education, masjid care, tree planting and hospital visits with You Gambia.' };
export default function Projects() { return <><PageIntro eyebrow="Our projects" title={<>Different ways to help.<br/><em>One shared purpose.</em></>} description="Explore the projects and activities shared by our team in The Gambia. Find the work you would like to learn more about."/><section className="wrap section"><ProjectBrowser/></section><CtaBand/></>; }
