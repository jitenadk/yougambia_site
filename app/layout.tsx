import type { Metadata } from 'next';
import Header from './components/header';
import Footer from './components/footer';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'You Gambia — Small acts. Lasting kindness.', template: '%s | You Gambia' },
  description: 'Serving the Ummah with love. Explore You Gambia’s community projects, discover ways to help and give through our official donation links.',
  icons: { icon: '/favicon.svg' },
  openGraph: { title: 'You Gambia — Charity. Unity. Barakah.', description: 'Rooted in faith. United in care. For our community in The Gambia.', type: 'website', locale: 'en_GB' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main" tabIndex={-1}>{children}</main><Footer/></body></html>;
}
