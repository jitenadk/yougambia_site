import Link from 'next/link';
import { ArrowRight, ArrowUpRight, HandHeart, Heart, Instagram, MapPin, MessageCircle, Moon, Sprout } from 'lucide-react';
import { external, links, projects } from './content';
import { CtaBand, ProjectCard } from './components/ui';
import DonationPicker from './components/donation-picker';
import FaqList from './components/faq-list';
import PhotoGallery from './components/photo-gallery';
import PhotoStrip from './components/photo-strip';

export default function Home() {
  return <>
    {/* HERO — full-photo immersive */}
    <section className="home-hero">
      <div className="hero-photo-bg">
        <img src="/photos/rice-distribution.jpeg" alt="YouGambia volunteers distributing rice to families in The Gambia" fetchPriority="high" className="hero-bg-img"/>
        <div className="hero-bg-overlay"/>
      </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> TOGETHER FOR THE GAMBIA</div>
          <h1>Small acts.<br/><em>Lasting</em><br/>kindness<span className="blue-dot">.</span></h1>
          <p>A meal shared. A place to learn. A community cared for. Help us turn compassion into action in The Gambia.</p>
          <div className="hero-actions">
            <Link className="button button-blue" href="/donate">Make a difference <Heart size={17}/></Link>
            <Link className="text-link" href="/projects">Explore our work <ArrowRight size={17}/></Link>
          </div>
          <div className="hero-signoff">
            <span className="mini-symbol"><Sprout size={22}/></span>
            <span>Rooted in faith.<br/><strong>United in care.</strong></span>
          </div>
        </div>

        {/* Photo stack — real images */}
        <div className="hero-scene">
          <div className="hero-photo-stack">
            <div className="stack-card stack-card-back">
              <img src="/photos/elder-care.jpeg" alt="YouGambia volunteer with an elderly community member"/>
            </div>
            <div className="stack-card stack-card-mid">
              <img src="/photos/smiling-volunteer.jpeg" alt="Smiling YouGambia volunteer in the community"/>
            </div>
            <div className="stack-card stack-card-front">
              <img src="/photos/food-distribution-1.jpeg" alt="YouGambia Ramadan food distribution" fetchPriority="high"/>
              <div className="hero-image-shade"/>
            </div>
          </div>
          <span className="location-pill"><span className="gambia-flag"/> THE GAMBIA, WEST AFRICA</span>
          <div className="scene-caption">
            <span>Our roots run here.<br/>Our kindness reaches further.</span>
            <span className="round-arrow"><ArrowUpRight size={28}/></span>
          </div>
          <div className="hero-stamp"><Heart size={24}/><span>CHARITY. UNITY.<br/>BARAKAH.</span></div>
        </div>
      </div>
    </section>

    {/* Quick nav strip */}
    <section className="welcome-strip" aria-label="Find your way">
      <div className="wrap">
        <span className="welcome-label">I&apos;d like to…</span>
        <Link href="/projects"><Sprout size={19}/> Explore the projects <ArrowUpRight size={16}/></Link>
        <Link href="/giving#zakat"><HandHeart size={19}/> Ask about zakat <ArrowUpRight size={16}/></Link>
        <Link href="/get-involved"><Heart size={19}/> Lend a hand <ArrowUpRight size={16}/></Link>
        <Link href="/contact"><MessageCircle size={19}/> Talk to the team <ArrowUpRight size={16}/></Link>
      </div>
    </section>

    {/* IMPACT NUMBERS — three real photos + stats */}
    <section className="impact-section wrap section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">GOODNESS IN ACTION</span>
          <h2>Kindness you can<br/><em>see and feel.</em></h2>
        </div>
        <div className="heading-aside">
          <p>Every visit. Every bag of rice. Every clean masjid.<br/>This is You Gambia in action.</p>
        </div>
      </div>
      <div className="impact-photo-grid">
        <div className="impact-photo-card impact-photo-large">
          <img src="/photos/volunteers-women.jpeg" alt="YouGambia women volunteers at a community event"/>
          <div className="impact-photo-label">
            <span className="eyebrow">COMMUNITY</span>
            <strong>United volunteers</strong>
          </div>
        </div>
        <div className="impact-photo-col">
          <div className="impact-photo-card">
            <img src="/photos/hospital-delivery-1.jpeg" alt="Delivering care packages to hospital patients"/>
            <div className="impact-photo-label">
              <span className="eyebrow">HOSPITAL VISITS</span>
              <strong>Care delivered</strong>
            </div>
          </div>
          <div className="impact-photo-card">
            <img src="/photos/cleaning-team.jpeg" alt="Volunteers sweeping and cleaning community spaces"/>
            <div className="impact-photo-label">
              <span className="eyebrow">COMMUNITY CARE</span>
              <strong>Spaces restored</strong>
            </div>
          </div>
        </div>
        <div className="impact-stats-col">
          {[
            { num: '6+', label: 'Active projects', desc: 'Water wells, food, education, masjids, trees and hospital visits.' },
            { num: '100%', label: 'Donation policy', desc: 'Every penny goes to those who need it most.' },
            { num: '🇬🇲', label: 'The Gambia', desc: 'West Africa — where our community roots run deep.' },
          ].map(s => (
            <div className="impact-stat" key={s.num}>
              <span className="impact-num">{s.num}</span>
              <strong>{s.label}</strong>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PHOTO STRIP — animated scroll */}
    <PhotoStrip/>

    {/* PROJECTS */}
    <section className="wrap section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">GOODNESS TAKES MANY FORMS</span>
          <h2>One community.<br/><em>So many ways to care.</em></h2>
        </div>
        <div className="heading-aside">
          <p>Discover the work at the heart of You Gambia.<br/>Find a cause that means something to you.</p>
          <Link href="/projects" className="text-link">See all projects <ArrowRight size={18}/></Link>
        </div>
      </div>
      <div className="project-grid">{projects.slice(0, 3).map(project => <ProjectCard project={project} key={project.slug}/>)}</div>
      <div className="more-projects">
        <span>And there&apos;s more to discover</span>
        {projects.slice(3).map(project => <Link href={`/projects/${project.slug}`} key={project.slug}>{project.title} <ArrowUpRight size={15}/></Link>)}
      </div>
    </section>

    {/* PHOTO GALLERY — full filterable grid */}
    <PhotoGallery/>

    {/* GIVING */}
    <section className="giving-feature">
      <div className="wrap giving-grid">
        <div className="giving-copy">
          <span className="eyebrow">YOUR GENEROSITY. OUR SHARED PURPOSE.</span>
          <h2>Give a little.<br/>Be part of<br/><em>something good.</em></h2>
          <p>Giving should feel simple. Choose the official donation platform that works for you, and take the next step in your own time.</p>
          <div className="giving-policy">
            <HandHeart size={30}/>
            <div>
              <h3>100% donation &amp; zakat policy</h3>
              <p>As stated on our official Instagram profile.</p>
              <Link href="/giving#policy">Explore our giving guidance <ArrowRight size={15}/></Link>
            </div>
          </div>
          <span className="giving-scribble" aria-hidden="true">a little kindness, from you ♡</span>
        </div>
        <DonationPicker compact/>
      </div>
    </section>

    {/* STORY + a real photo side-by-side */}
    <section className="wrap section story-grid">
      <div className="story-photo-side">
        <div className="story-photo-main">
          <img src="/photos/elder-care.jpeg" alt="YouGambia volunteer sitting with an elderly community member, sharing a moment of care"/>
        </div>
        <div className="story-photo-float">
          <img src="/photos/team-leader.jpeg" alt="YouGambia team leader at a community event"/>
        </div>
        <div className="story-photo-badge">
          <Heart size={18}/>
          <span>Faith in<br/>our hearts</span>
        </div>
      </div>
      <div className="story-copy">
        <span className="eyebrow">GET TO KNOW YOU GAMBIA</span>
        <h2>From the heart.<br/><em>For our community.</em></h2>
        <p className="lead">We&apos;re brought together by a simple belief: caring for one another matters.</p>
        <p>You Gambia is a nonprofit focused on community work in The Gambia. From food assistance and education to caring for masjids, our work is rooted in faith, compassion and connection.</p>
        <Link className="text-link" href="/about">Our story &amp; values <ArrowRight size={18}/></Link>
      </div>
    </section>

    {/* RAMADAN */}
    <section className="wrap ramadan-feature">
      <div className="ramadan-art" aria-hidden="true"><Moon size={94} strokeWidth={1}/><span>RAMADAN<br/>2026</span></div>
      <div>
        <span className="eyebrow">FROM OUR CAMPAIGNS</span>
        <h2>A shared meal.<br/><em>A shared blessing.</em></h2>
        <p>Explore our Ramadan 2026 food and iftar appeal. Read the campaign story and visit GoFundMe for its current status and updates.</p>
        <Link href="/projects/ramadan" className="text-link">Explore the Ramadan appeal <ArrowRight size={18}/></Link>
      </div>
      <a href={links.ramadan} {...external} className="round-link" aria-label="Open Ramadan 2026 on GoFundMe"><ArrowUpRight size={29}/></a>
    </section>

    {/* GET INVOLVED */}
    <section className="wrap section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">IT&apos;S ABOUT PEOPLE, TOO</span>
          <h2>You have something<br/><em>good to give.</em></h2>
        </div>
        <p>Your time. Your ideas. Your voice.<br/>There&apos;s more than one way to help.</p>
      </div>
      <div className="involvement-grid">{[
        { number: '01', title: 'Bring your energy.', text: 'Share your skills and ask about volunteering with the team.', href: '/get-involved#volunteer', label: 'Explore volunteering' },
        { number: '02', title: 'Bring people together.', text: 'Have a fundraising idea? Let\'s start a conversation.', href: '/get-involved#fundraise', label: 'Plan a fundraiser' },
        { number: '03', title: 'Pass the kindness on.', text: 'Help someone else discover our projects and community.', href: '/updates', label: 'Follow & share our story' },
      ].map(item => <article className="involvement-card" key={item.number}>
        <span className="card-number">{item.number}<ArrowUpRight size={25}/></span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <Link href={item.href} className="text-link">{item.label} <ArrowRight size={16}/></Link>
      </article>)}</div>
    </section>

    {/* INSTAGRAM */}
    <section className="community-banner">
      <div className="wrap">
        <div className="community-icon"><Instagram size={45} strokeWidth={1.4}/></div>
        <div>
          <span className="eyebrow">REAL MOMENTS. SHARED BY OUR TEAM.</span>
          <h2>Stay close to <em>the good.</em></h2>
          <p>Project highlights and everyday stories, directly from You Gambia.</p>
        </div>
        <a href={links.instagram} {...external} className="button button-outline">Follow @yougambiaa <ArrowUpRight size={18}/></a>
      </div>
    </section>

    {/* FAQ */}
    <section className="wrap section faq-preview">
      <div>
        <span className="eyebrow">A LITTLE CLARITY</span>
        <h2>Good questions.<br/><em>Helpful answers.</em></h2>
        <p>Find what you need before you give.</p>
        <Link className="text-link" href="/help">Visit the help centre <ArrowRight size={17}/></Link>
      </div>
      <FaqList preview/>
    </section>
    <CtaBand/>
  </>;
}
