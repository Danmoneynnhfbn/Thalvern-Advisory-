const mailtoHref = 'mailto:kathleenwelch@thalvernadvisory.com';

const homeHeroVideo = 'https://assets.mixkit.co/videos/preview/mixkit-city-skyscrapers-in-the-evening-3847-large.mp4';
const homeFeatureVideo = 'https://assets.mixkit.co/videos/preview/mixkit-business-people-having-a-meeting-in-the-office-4047-large.mp4';
const homeCtaVideo = 'https://assets.mixkit.co/videos/preview/mixkit-network-connections-on-a-city-map-3705-large.mp4';
const aboutVideo = 'https://assets.mixkit.co/videos/preview/mixkit-executive-team-discussing-business-ideas-5184-large.mp4';
const contactVideo = 'https://assets.mixkit.co/videos/preview/mixkit-dark-business-lights-at-night-1378-large.mp4';

const sectors = [
  { slug: 'healthcare-healthcare-services', name: 'Healthcare & Healthcare Services', description: 'Leadership across health systems, healthcare services, payer organizations, providers, and healthcare technology.' },
  { slug: 'life-sciences', name: 'Life Sciences', description: 'Pharmaceuticals, biotechnology, medical devices, diagnostics, and life sciences services.' },
  { slug: 'technology', name: 'Technology', description: 'Software, AI, data, cybersecurity, cloud, enterprise technology, and digital transformation.' },
  { slug: 'financial-services', name: 'Financial Services', description: 'Banking, asset management, insurance, fintech, investment management, and financial technology.' },
  { slug: 'private-equity', name: 'Private Equity', description: 'Executive search and leadership solutions for PE firms and portfolio companies.' },
  { slug: 'aerospace-defense', name: 'Aerospace & Defense', description: 'Aerospace, defense, national security, government contracting, space, and advanced technologies.' },
  { slug: 'industrial-manufacturing', name: 'Industrial & Manufacturing', description: 'Industrial technology, manufacturing, engineering, automation, and advanced manufacturing.' },
  { slug: 'energy-infrastructure', name: 'Energy & Infrastructure', description: 'Energy, utilities, infrastructure, industrial services, and transportation systems.' },
  { slug: 'consumer', name: 'Consumer', description: 'Consumer products, retail, food and beverage, and consumer technology.' },
  { slug: 'professional-services', name: 'Professional Services', description: 'Consulting, legal, accounting, advisory, and business services.' },
  { slug: 'real-estate', name: 'Real Estate', description: 'Real estate investment, development, property services, and infrastructure.' },
  { slug: 'nonprofit-mission-driven-organizations', name: 'Nonprofit & Mission-Driven Organizations', description: 'Leadership for organizations with complex social, institutional, or mission-driven mandates.' }
];

const industrySlugAliases = {
  healthcare: 'healthcare-healthcare-services',
  'healthcare-healthcare-services': 'healthcare-healthcare-services',
  'energy-infrastructure': 'energy-infrastructure',
  consumer: 'consumer',
  nonprofit: 'nonprofit-mission-driven-organizations',
  'nonprofit-mission-driven-organizations': 'nonprofit-mission-driven-organizations',
  'real-estate': 'real-estate',
  'professional-services': 'professional-services',
  'private-equity': 'private-equity',
  'aerospace-defense': 'aerospace-defense',
  technology: 'technology',
  'financial-services': 'financial-services',
  'life-sciences': 'life-sciences'
};

const methodologyStages = [
  { number: '01', title: 'Define', text: 'Understand the organization\'s strategy, leadership mandate, business context, culture, and definition of success.' },
  { number: '02', title: 'Map', text: 'Build a comprehensive view of the relevant executive talent market.' },
  { number: '03', title: 'Identify', text: 'Target high-caliber executives from relevant organizations and leadership environments.' },
  { number: '04', title: 'Assess', text: 'Evaluate leadership capability, strategic experience, functional expertise, cultural alignment, motivation, and potential.' },
  { number: '05', title: 'Engage', text: 'Conduct confidential, personalized executive outreach.' },
  { number: '06', title: 'Present', text: 'Deliver a focused shortlist supported by detailed candidate assessments and market intelligence.' },
  { number: '07', title: 'Support', text: 'Assist throughout interviews, references, negotiations, offer discussions, and leadership transition.' }
];

const coreServices = [
  { title: 'Executive Search', summary: 'Identifying exceptional leaders for the roles that matter most.', list: ['CEO', 'President', 'COO', 'CFO', 'CHRO', 'CIO', 'CTO', 'CMO', 'General Counsel', 'Chief Strategy Officer', 'Chief Revenue Officer', 'Division Presidents', 'EVPs', 'SVPs', 'Board Directors'], href: '/executive-search' },
  { title: 'Talent Intelligence', summary: 'Turning the leadership market into actionable intelligence.', list: ['Talent mapping', 'Competitor talent mapping', 'Executive benchmarking', 'Succession mapping', 'Compensation intelligence', 'Leadership availability analysis', 'Organizational structure analysis', 'Emerging leadership identification'], href: '/talent-intelligence' },
  { title: 'Leadership Advisory', summary: 'Helping organizations make stronger leadership decisions before, during, and after the search.', list: ['Executive assessment', 'Succession planning', 'Leadership benchmarking', 'Executive onboarding', 'Organizational leadership assessment', 'Leadership transition support', 'Strategic talent advisory'], href: '/leadership-advisory' }
];

const stats = [
  { value: 12, label: 'Industry practices covered with dedicated sector research.' },
  { value: 7, label: 'Stages in every search, from mandate definition to onboarding.' },
  { value: 100, suffix: '%', label: 'Engagements led personally by senior search leadership.' },
  { value: 30, suffix: '+', label: 'Markets mapped across the Americas, EMEA, and Asia-Pacific.' }
];

const insights = [
  { title: 'Defining the leadership mandate before the search begins', description: 'Most difficult searches are not talent problems. They are definition problems. A precise mandate is the highest-leverage stage of the process.' },
  { title: 'Board composition as a strategic instrument', description: 'Boards increasingly recruit against forward strategy rather than historical committee structure. What that changes about director search.' },
  { title: 'Succession readiness is a capability, not a document', description: 'How organizations move from a named successor list to a genuinely resilient leadership bench.' }
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Executive Search', href: '/executive-search' },
  { name: 'Industries', href: '/industries' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Opportunities', href: '/opportunities' },
  { name: 'For Employers', href: '/for-employers' },
  { name: 'For Executives', href: '/for-executives' },
  { name: 'Insights', href: '/insights' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

const footerNavigate = [
  { name: 'Executive Search', href: '/executive-search' },
  { name: 'Industries', href: '/industries' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Opportunities', href: '/opportunities' },
  { name: 'For Employers', href: '/for-employers' },
  { name: 'For Executives', href: '/for-executives' },
  { name: 'Insights', href: '/insights' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

const footerPractice = [
  { name: 'Talent Intelligence', href: '/talent-intelligence' },
  { name: 'Leadership Advisory', href: '/leadership-advisory' },
  { name: 'Search Methodology', href: '/search-methodology' },
  { name: 'Executive Compensation', href: '/executive-compensation' },
  { name: 'FAQ', href: '/faq' }
];

const pageVideoMap = {
  '/': homeHeroVideo,
  '/about': aboutVideo,
  '/contact': contactVideo
};

const industryVideoMap = {};

function getCurrentHashPath() {
  const hash = window.location.hash || '#/';
  const raw = hash.replace(/^#/, '');
  if (!raw || raw === '/') return '/';
  if (!raw.startsWith('/')) return `/${raw}`;
  return raw;
}

function Link({ to, children, className, onClick }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        if (onClick) onClick(event);
        if (event.defaultPrevented) return;
        if (to.startsWith('http') || to.startsWith('mailto:')) return;
        event.preventDefault();
        const nextPath = to.startsWith('/') ? to : `/${to}`;
        window.location.hash = nextPath;
      }}
    >
      {children}
    </a>
  );
}

function NavLink({ to, children, className = '', onClick }) {
  const currentPath = getCurrentHashPath();
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  return (
    <Link to={to} onClick={onClick} className={`${className} ${isActive ? 'text-white' : ''}`.trim()}>
      {children}
    </Link>
  );
}

function getPageVideoForRoute(route, slug) {
  if (route.startsWith('/industries/')) {
    return industryVideoMap[slug] || pageVideoMap['/industries'];
  }
  return pageVideoMap[route] || pageVideoMap['/'];
}

function PageVideoBackground({ route, slug }) {
  const videoSrc = pageVideoMap[route];

  if (!videoSrc) {
    return (
      <div className="page-video-frame bg-slate-950" aria-hidden="true">
        <div className="page-video-overlay" />
      </div>
    );
  }

  return (
    <div className="page-video-frame" aria-hidden="true">
      <video autoPlay loop muted playsInline className="page-video object-cover" src={videoSrc} />
      <div className="page-video-overlay" />
    </div>
  );
}

function PageShell({ eyebrow, title, intro, children }) {
  return (
    <main className="section-shell pt-28 py-16 md:py-20 relative z-10">
      <div className="mb-10 rounded-sm border border-slate-800 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/40 md:p-12">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{intro}</p>}
      </div>
      <div className="space-y-8 content-copy">{children}</div>
    </main>
  );
}

function SiteHeader({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
        <Link to="/" className="flex shrink-0 items-center pr-2 md:pr-3">
          <img src="./favicon.png" alt="Thalvern Advisory" className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white xl:flex">
          {navigation.map((item) => (
            <NavLink key={item.href} to={item.href} className="nav-link whitespace-nowrap text-white hover:text-white">
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <Link to="/contact" className="hidden shrink-0 whitespace-nowrap rounded-sm bg-sky-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-sky-500 md:inline-flex md:text-sm">
            Discuss a Search
          </Link>
          <button type="button" aria-label="Toggle mobile navigation" onClick={() => setMobileMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-slate-700 bg-slate-900 text-xl text-white xl:hidden">☰</button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-4 shadow-2xl xl:hidden">
          <nav className="flex flex-col gap-3 text-sm uppercase tracking-wide">
            {navigation.map((item) => (
              <NavLink key={item.href} to={item.href} onClick={() => setMobileMenuOpen(false)} className="nav-link whitespace-nowrap text-white hover:text-white">
                {item.name}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-slate-800 pt-3">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="inline-flex shrink-0 whitespace-nowrap rounded-sm bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white">
                Discuss a Search
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="section-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="./favicon.png" alt="Thalvern Advisory" className="h-10 w-auto object-contain" />
              <div>
                <div className="text-sm font-semibold tracking-[0.2em] text-white uppercase">THALVERN</div>
                <div className="text-[10px] tracking-[0.26em] text-slate-400 uppercase">Advisory</div>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">Executive Search | Talent Intelligence | Leadership Advisory</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">An independent executive search and leadership advisory firm helping organizations make consequential leadership decisions.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Navigate</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">{footerNavigate.map((item) => <li key={item.href}><Link to={item.href} className="hover:text-white">{item.name}</Link></li>)}</ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Practice</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">{footerPractice.map((item) => <li key={item.href}><Link to={item.href} className="hover:text-white">{item.name}</Link></li>)}</ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Contact</h4>
            <div className="mt-4 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3 rounded-sm border border-slate-700 bg-slate-900 p-3">
                <img src="./assets/Kathleen Welch.jpg" alt="Kathleen Welch" className="h-14 w-14 object-cover ring-2 ring-sky-400/30" />
                <div>
                  <p className="font-semibold text-white">Kathleen Welch</p>
                  <p>Founder & Managing Partner</p>
                </div>
              </div>
              <a href={mailtoHref} className="block text-white hover:text-white">kathleenwelch@thalvernadvisory.com</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-400">© 2026 Thalvern Advisory. All rights reserved.</div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Use</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
            <Link to="/candidate-privacy" className="hover:text-white">Candidate Privacy Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Home Page Sub-Components
function HomeHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="hero-orb left-[-80px] top-14 h-72 w-72 bg-cyan-500/25" />
      <div className="hero-orb right-[-50px] top-16 h-80 w-80 bg-violet-500/20" />
      <div className="hero-orb bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 bg-emerald-500/10" />
      
      <div className="hero-video-wrapper absolute inset-0">
        <video autoPlay loop muted playsInline className="hero-video object-cover" src={homeHeroVideo} />
        <div className="hero-overlay" />
      </div>

      <div className="section-shell hero-shell relative">
        <div className="hero-grid">
          <div className="relative z-10">
            <div className="kicker">Executive Search · Talent Intelligence · Leadership Advisory</div>
            <h1 className="hero-title mt-6">Executive Search for Leaders Who Move Businesses Forward.</h1>
            <p className="hero-copy mt-6">Thalvern Advisory is an independent executive search and leadership advisory firm helping organizations identify, assess, and secure exceptional leaders for critical roles across industries and markets.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="mailto:kathleenwelch@thalvernadvisory.com?subject=Discuss%20a%20Search" className="primary-button">Discuss Your Search</a>
              <a href="/#/opportunities" className="secondary-button">Explore Executive Opportunities</a>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <div className="glass-card hover-lift stat-card"><div className="stat-number">12</div><div className="stat-label">industry practices</div></div>
              <div className="glass-card hover-lift stat-card"><div className="stat-number">7</div><div className="stat-label">search stages</div></div>
              <div className="glass-card hover-lift stat-card"><div className="stat-number">100%</div><div className="stat-label">senior led</div></div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="feature-visual">
              <div className="media-frame">
                <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="Executive boardroom" className="media-image" />
                <div className="media-overlay" />
              </div>
              <div className="floating-note glass-card">
                <p className="eyebrow eyebrow-small">Positioning</p>
                <h2 className="float-title">Leadership decisions require more than a shortlist.</h2>
                <p className="float-copy">An executive appointment shapes strategy, culture, growth, investor confidence, succession, and organizational performance for years. It deserves a process built on research rather than availability. Thalvern Advisory combines executive search, market intelligence, leadership assessment, talent mapping, and strategic advisory within a single, highly confidential and personalized engagement model. Exceptional leadership is not found by searching harder. It is found by searching smarter.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeCapabilities() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover" src={homeFeatureVideo} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="section-shell">
        <div className="section-heading-block text-center">
          <p className="eyebrow">Core capabilities</p>
          <h2 className="section-heading">Three disciplines, one integrated practice.</h2>
        </div>
        
        <div className="service-grid">
          {coreServices.map((service, index) => (
            <article key={service.title} className={`glass-card hover-lift service-card ${index === 1 ? 'is-featured' : ''}`}>
              <div className="service-mark">{service.title.split(' ')[0][0]}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-summary">{service.summary}</p>
              <ul className="service-list">
                {service.list.map((item) => (
                  <li key={item}>
                    <span className="dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to={service.href} className="service-link">Explore {service.title} →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeMethodology() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="methodology-wrap">
          <div className="methodology-intro text-center">
            <p className="eyebrow">Methodology</p>
            <h2 className="section-heading">Seven stages. One disciplined process.</h2>
            <p className="section-copy">Every engagement follows a defined research process, adapted to the mandate and the market.</p>
          </div>
          
          <div className="methodology-panel glass-card">
            <div className="methodology-media">
              <div className="method-video page-video--gradient" />
              <div className="method-overlay" />
            </div>
            
            <div className="methodology-grid">
              {methodologyStages.map((stage) => (
                <div key={stage.number} className="method-card hover-lift">
                  <div className="method-step-row">
                    <span className="method-number">{stage.number}</span>
                    <span className="method-badge">{stage.title[0]}</span>
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/methodology" className="secondary-button">Full Methodology</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeInsights() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="section-heading-block text-center">
          <p className="eyebrow">Thalvern Insights</p>
          <h2 className="section-heading">Perspective on the leadership market.</h2>
          <div className="mt-6">
            <Link to="/insights" className="inline-link">All Insights →</Link>
          </div>
        </div>
        
        <div className="insight-grid mt-12">
          {insights.map((item, index) => (
            <article key={item.title} className="insight-card hover-lift">
              <div className="insight-visual">
                <span className="text-xs font-semibold text-slate-400">Insight {index + 1}</span>
                <div className="insight-bubble mt-2" />
              </div>
              <div className="insight-body">
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeGlobalReach() {
  const regions = ['North America', 'Latin America', 'Europe', 'Middle East', 'Africa', 'Asia-Pacific'];

  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="section-heading-block text-center">
          <p className="eyebrow">Global reach</p>
          <h2 className="section-heading">Mandates researched across every major leadership market.</h2>
        </div>
        
        <div className="global-panel glass-card">
          <div className="regional-pill-row">
            {regions.map((region) => (
              <span key={region} className="regional-pill">{region}</span>
            ))}
          </div>
          
          <div className="global-grid">
            <div className="global-box">
              <h3>North America</h3>
              <p>Deep coverage of listed, private, and sponsor-backed leadership markets.</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-300">
                <li>Executive Search</li>
                <li>Board Search</li>
                <li>Leadership Advisory</li>
                <li>Talent Intelligence</li>
              </ul>
            </div>
            
            <div className="global-box">
              <h3>United States · Canada · Mexico</h3>
              <p>Deep market coverage across North American leadership markets for executive search, board recruitment, and talent intelligence services.</p>
            </div>
            
            <div className="global-box">
              <h3>Global Search Reach</h3>
              <p>An illustration of the markets in which mandates are researched. It does not indicate physical offices.</p>
            </div>
          </div>
          
          <div className="global-cta-row">
            <a href="mailto:kathleenwelch@thalvernadvisory.com?subject=Request%20for%20a%20Confidential%20Consultation" className="secondary-button">Discuss a Search</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const [activeSector, setActiveSector] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setActiveSector((prev) => (prev + 1) % sectors.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <HomeHero />

      <section className="py-8 md:py-12">
        <div className="section-shell">
          <div className="elevated-panel tilt-panel">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="eyebrow">Why Thalvern Advisory</p>
                <h3 className="section-heading large">We identify the leaders who can move organizations forward.</h3>
              </div>
              <div className="mini-stat-grid">
                {['Research-led', 'Confidential', 'Trusted counsel'].map((item) => (
                  <div key={item} className="mini-stat glass-card">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeCapabilities />

      <section className="py-20 md:py-28">
        <div className="section-shell editorial-split">
          <div className="editorial-copy">
            <p className="eyebrow">A more precise approach</p>
            <h2 className="section-heading">A more precise approach to executive search.</h2>
          </div>
          <div className="feature-stack">
            {['Senior-Level Attention','Precision Market Mapping','Confidential Executive Engagement','Evidence-Based Assessment','Market Intelligence'].map((item, index) => (
              <div key={item} className="glass-card hover-lift feature-item">
                <div className="feature-number">0{index + 1}</div>
                <h3>{item}</h3>
                <p>{index === 0 && 'Every engagement receives direct involvement from senior search leadership.'}{index === 1 && 'We identify the relevant leadership universe before narrowing the field.'}{index === 2 && 'We reach accomplished executives who may never respond to traditional job advertisements.'}{index === 3 && 'Candidates are evaluated against clearly defined leadership, strategic, functional, and cultural criteria.'}{index === 4 && 'Clients receive insight into talent availability, compensation, competitors, organizational structures, and leadership trends.'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeMethodology />

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="industry-header">
            <div>
              <p className="eyebrow">Industries</p>
              <h2 className="section-heading">Sector fluency across complex markets.</h2>
            </div>
            <Link to="/industries" className="inline-link">All Industries →</Link>
          </div>
          <div className="industry-grid">
            {sectors.map((sector, index) => (
              <button key={sector.name} onClick={() => setActiveSector(index)} className={`industry-card hover-lift ${activeSector === index ? 'is-active' : ''}`}>
                <div className="industry-topline"><span>{sector.name}</span><span>→</span></div>
                <p>{sector.description}</p>
              </button>
            ))}
          </div>
          <div className="featured-industry glass-card">
            <div className="featured-copy">
              <p className="eyebrow">Featured practice</p>
              <h3>{sectors[activeSector].name}</h3>
              <p>{sectors[activeSector].description}</p>
            </div>
            <div className="featured-rail">
              <div className="featured-rail-header">Leadership focus</div>
              <div className="featured-rail-list">{[...Array(4)].map((_, i) => <div key={i} className="rail-row"><span>Executive Search</span><span>{i + 1}/4</span></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <HomeInsights />

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="stats-panel glass-card">
            <div className="stats-copy">
              <p className="eyebrow">Practice at a glance</p>
              <h2 className="section-heading">Depth measured in research, not volume.</h2>
              <p className="section-copy">Indicative figures reflecting the way Thalvern Advisory works across leadership markets.</p>
            </div>
            <div className="stats-grid">{stats.map((stat) => <div key={stat.label} className="stat-box"><div className="stat-big">{stat.value}{stat.suffix || ''}</div><p>{stat.label}</p></div>)}</div>
          </div>
        </div>
      </section>

      <HomeGlobalReach />

      <section className="relative overflow-hidden pb-20 pt-12 md:pb-28">
        <div className="absolute inset-0 -z-10">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover" src={homeCtaVideo} />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="section-shell">
          <div className="cta-panel">
            <div className="cta-media">
              <div className="cta-video page-video--gradient" />
              <div className="cta-overlay" />
            </div>
            <div className="cta-content">
              <p className="eyebrow">Next step</p>
              <h2 className="section-heading">Let’s discuss the leadership challenge.</h2>
              <p className="section-copy">Every conversation with Thalvern Advisory is confidential and without obligation.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="primary-button">Discuss Your Search</Link>
                <Link to="/contact" className="secondary-button alt">Submit Your Executive Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function LeadershipPage() {
  return (
    <PageShell eyebrow="Leadership" title="Leadership is the multiplier for strategic execution." intro="The quality of leadership determines how effectively strategy is translated into organizational performance, market confidence, and long-term resilience.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">The leadership equation</h2>
        <p className="mt-4">Leadership is no longer a support function for business strategy. It is the mechanism that turns strategy into execution across culture, talent, risk, innovation, and operating discipline.</p>
        <p className="mt-4">Organizations benefit when leadership is assessed not just for experience, but for judgment, adaptability, clarity, and ability to influence the systems around them.</p>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">What leaders need to move organizations forward</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">{['Strategic clarity','Operational discipline','Cultural influence','Commercial judgment','Talent activation','Transition readiness'].map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </PageShell>
  );
}

function ExecutiveSearchPage() {
  return (
    <PageShell eyebrow="Executive Search" title="Exceptional leadership requires an exceptional search." intro="Executive search is not accelerated recruiting. It is a research discipline built to reach, assess, and secure leaders who are not looking for a role.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Recruiting responds to the market. Search defines it.</h2>
        <p className="mt-4">Traditional recruiting works from applicants, databases, and advertised interest. It optimizes for speed and volume, and it surfaces the executives who are available.</p>
        <p className="mt-4">Executive search begins with the strategy behind the role. We construct the relevant leadership universe, approach accomplished executives confidentially, and assess them against explicit leadership, strategic, functional, and cultural criteria.</p>
        <p className="mt-4">The output is not a stack of résumés. It is a short, defensible slate accompanied by assessment evidence and intelligence about the market the decision is being made in.</p>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Roles we search.</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">{['CEO Search','President Search','COO Search','CFO Search','CHRO Search','CIO Search','CTO Search','CMO Search','Chief Strategy Officer Search','Chief Revenue Officer Search','General Counsel Search','Division President Search','Board Search','Senior Leadership Search','Specialized Executive Search'].map((role) => <li key={role}>{role}</li>)}</ul>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Structured to the mandate, not to a template.</h2>
        <p className="mt-4">Engagement structure is agreed in advance and confirmed in writing. Fees are discussed directly and confidentially with each client.</p>
        <h3 className="mt-5 text-2xl font-bold text-white">Retained Executive Search</h3>
        <p className="mt-2">A dedicated, research-led engagement for the most consequential leadership appointments, with committed senior involvement throughout.</p>
        <h3 className="mt-5 text-2xl font-bold text-white">Exclusive Search</h3>
        <p className="mt-2">A single-firm engagement with defined milestones, suited to organizations that want focused market coverage without a full retained structure.</p>
        <h3 className="mt-5 text-2xl font-bold text-white">Contingent Search</h3>
        <p className="mt-2">Selective engagements where the mandate, level, and market conditions make a contingent structure appropriate.</p>
        <h3 className="mt-5 text-2xl font-bold text-white">Project-Based Search</h3>
        <p className="mt-2">Defined-scope work such as multi-role build-outs, leadership team assembly, or a targeted slate for a single mandate.</p>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">How a search progresses.</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5">{methodologyStages.map((stage) => <li key={stage.number}><strong>{stage.number} {stage.title}</strong><div className="mt-1">{stage.text}</div></li>)}</ol>
      </div>
    </PageShell>
  );
}

function TalentIntelligencePage() {
  return (
    <PageShell eyebrow="Talent Intelligence" title="Know the market before you make the hire." intro="Organizations frequently need intelligence before they need a search. Understanding who exists, where they sit, and what it would take to move them changes the decision itself.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Decisions improve when the market is visible.</h2>
        <p className="mt-4">A mandate written without market context often describes a leader who does not exist, or overlooks one who does.</p>
        <p className="mt-4">Talent intelligence establishes the realistic leadership universe for a role: where relevant executives sit today, how organizations around you are structured, what compensation is required, and how quickly a credible slate can be assembled.</p>
        <p className="mt-4">The work stands alone as an advisory engagement, or precedes a search so that the mandate, timeline, and compensation position are grounded in evidence.</p>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">What we deliver.</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">{['Executive talent mapping','Competitor talent mapping','Organizational mapping','Succession mapping','Executive benchmarking','Compensation benchmarking','Talent availability analysis','Geographic talent mapping','Leadership pipeline analysis','Emerging talent identification'].map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Discuss an intelligence brief.</h2>
        <p className="mt-4 text-white">Email Kathleen Welch to scope a mapping, benchmarking, or succession study.</p>
        <p className="mt-4"><strong>Kathleen Welch</strong><br />Founder & Managing Partner, Thalvern Advisory<br /><a href={mailtoHref} className="text-white underline">kathleenwelch@thalvernadvisory.com</a></p>
      </div>
    </PageShell>
  );
}

function LeadershipAdvisoryPage() {
  return (
    <PageShell eyebrow="Leadership Advisory" title="Stronger leadership decisions, before and after the appointment." intro="Search answers who. Advisory answers whether the organization is structured, prepared, and aligned to make the appointment succeed.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Advisory that complements the search.</h2>
        <p className="mt-4">These engagements are frequently run alongside a search, and just as frequently in place of one.</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">{['Executive Assessment','Succession Planning','Leadership Benchmarking','Executive Onboarding','Leadership Transition','Organizational Leadership Assessment','Strategic Talent Advisory'].map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">How advisory strengthens search outcomes.</h2>
        <p className="mt-4">Assessment frameworks used in advisory work inform how candidates are evaluated in search. Market benchmarking sharpens the mandate. Onboarding support protects the investment made in the appointment.</p>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Discuss an advisory engagement.</h2>
        <p className="mt-4 text-white">Email Kathleen Welch to explore assessment, succession, or transition support.</p>
        <p className="mt-4"><strong>Kathleen Welch</strong><br />Founder & Managing Partner, Thalvern Advisory<br /><a href={mailtoHref} className="text-white underline">kathleenwelch@thalvernadvisory.com</a></p>
      </div>
    </PageShell>
  );
}

function MethodologyPage() {
  return (
    <PageShell eyebrow="Methodology" title="A defined process behind every appointment." intro="Seven stages, applied with discipline and adapted to the mandate, the market, and the confidentiality the engagement requires.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Seven stages of a Thalvern search.</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5">{methodologyStages.map((stage) => <li key={stage.number}><strong>{stage.number} {stage.title}</strong><div className="mt-1">{stage.text}</div></li>)}</ol>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Communication throughout the engagement.</h2>
        <p className="mt-4">Clients receive structured progress reporting: market coverage, executives approached, response patterns, assessment findings, and compensation observations gathered during the search.</p>
      </div>
    </PageShell>
  );
}

function ExecutiveCompensationPage() {
  return (
    <PageShell eyebrow="Executive Compensation" title="Compensation strategy for the leader who must create value immediately." intro="Executive compensation is not simply a negotiation item. It is a strategic signal about market position, leadership expectations, risk tolerance, and incentive design.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Compensation decisions shape leadership outcomes.</h2>
        <p className="mt-4">For executives and boards alike, compensation design sets the context for how the role is perceived, how performance is measured, and how strongly the organization can attract the right leader at the right moment.</p>
        <p className="mt-4">Thalvern Advisory supports clients with compensation benchmarking, market intelligence, executive positioning, and design discussions that help align pay with strategic priorities rather than simply matching a peer set.</p>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">What the work includes.</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">{['Market benchmarking across peer organizations and geographies','Short-term and long-term incentive design review','Base salary and total compensation positioning','Retention and transition planning','Executive compensation guidance for boards and founders','Role and market calibration for new or transformed mandates'].map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Discuss a compensation mandate.</h2>
        <p className="mt-4 text-white">Email Kathleen Welch to discuss market intelligence or a compensation strategy engagement.</p>
        <p className="mt-4"><strong>Kathleen Welch</strong><br />Founder & Managing Partner, Thalvern Advisory<br /><a href={mailtoHref} className="text-white underline">kathleenwelch@thalvernadvisory.com</a></p>
      </div>
    </PageShell>
  );
}

function IndustriesOverviewPage() {
  return (
    <PageShell eyebrow="Industries" title="Sector fluency, applied to leadership decisions." intro="Leadership requirements differ by industry. So do talent markets, compensation structures, and the credibility a candidate must carry into the role.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Where we search.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">{sectors.map((sector) => <Link key={sector.slug} to={`/industries/${sector.slug}`} className="rounded-sm border border-white/10 bg-slate-950/60 p-5"><h3 className="text-xl font-bold text-white">{sector.name}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{sector.description}</p></Link>)}</div>
      </div>
    </PageShell>
  );
}

function OpportunitiesPage() {
  return (
    <PageShell eyebrow="Opportunities" title="Confidential Executive Opportunities." intro="A selection of current mandates. Many Thalvern Advisory searches are never published; the fullest picture comes from a direct, confidential conversation.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Selected searches.</h2>
        <div className="mt-6 space-y-5">{[
          { title: 'Chief Financial Officer', org: 'Confidential Healthcare Services Company', summary: 'Lead the finance function through a multi-site growth agenda, strengthen reporting infrastructure, and prepare the organization for its next capital event.' },
          { title: 'Chief Technology Officer', org: 'Private Equity-Backed Technology Company', summary: 'Modernize a maturing platform, establish engineering operating discipline, and define the applied AI roadmap.' },
          { title: 'President, Business Unit', org: 'Global Aerospace & Defense Organization', summary: 'Own P&L performance for a program-driven business unit and lead growth across government and commercial customers.' },
          { title: 'Chief Human Resources Officer', org: 'Confidential Industrial Manufacturer', summary: 'Build the people function for a distributed manufacturing footprint and lead succession planning across the leadership team.' },
          { title: 'Independent Board Director', org: 'Confidential Life Sciences Organization', summary: 'Add commercial-stage governance experience to the board ahead of a planned product launch.' },
          { title: 'Chief Revenue Officer', org: 'Confidential Financial Technology Company', summary: 'Build an enterprise go-to-market organization and establish repeatable revenue operations.' }
        ].map((item) => <div key={item.title} className="rounded-sm border border-white/10 bg-slate-950/70 p-5"><h3 className="text-2xl font-bold text-white">{item.title}</h3><p className="mt-2 font-medium text-cyan-200">{item.org}</p><p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p></div>)}</div>
      </div>
    </PageShell>
  );
}

function ForEmployersPage() {
  return (
    <PageShell eyebrow="For Employers" title="When the leadership mandate is critical, precision matters." intro="Thalvern Advisory partners with boards, CEOs, founders, investors, and CHROs on the appointments that carry the most consequence.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">How we work with clients.</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5">{['Confidential consultation','Mandate definition','Engagement agreement','Research and market mapping','Shortlist and assessment','Offer and transition'].map((item, idx) => <li key={item}><strong>{idx + 1}. {item}</strong></li>)}</ol>
      </div>

      <div className="video-panel overflow-hidden rounded-sm border border-slate-700 bg-slate-900/70">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover -z-10" src={aboutVideo} />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative z-10 p-6 md:p-8">
          <h2 className="text-3xl font-black text-white">Tell us about the mandate.</h2>
          <p className="mt-4 text-white">Information submitted here is treated as confidential and used solely to prepare for our conversation.</p>
          <p className="mt-4 text-white">Click below to send a direct email and begin your confidential mandate conversation.</p>
          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-sm bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500">Submit Mandate</Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function ForExecutivesPage() {
  return (
    <PageShell eyebrow="For Executives" title="The most important opportunities are not always advertised." intro="Thalvern Advisory works with accomplished executives on confidential leadership searches. Conversations are discreet, unhurried, and without obligation.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">A relationship, not a transaction.</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">{['Executive Profile Submission','Confidential Opportunities','Career Market Intelligence','Executive Positioning','Interview Preparation','Compensation Insights'].map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Submit your executive profile.</h2>
        <p className="mt-4 text-white">Your information is held confidentially and is never published, sold, or shared with a client organization without your explicit permission.</p>
        <div className="mt-6">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-sm bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500">Contact Kathleen Welch</Link>
        </div>
      </div>
    </PageShell>
  );
}

function InsightsPage() {
  const insightsArticles = [
    {
      title: 'Defining the leadership mandate before the search begins',
      copy: 'The most difficult executive searches are not talent problems. They are definition problems. When the mandate is vague, the process expands, the market becomes harder to read, and the organization starts evaluating candidates against assumptions rather than strategic outcomes.'
    },
    {
      title: 'Board composition as a strategic instrument',
      copy: 'The most effective boards are not simply composed of talented names. They are designed around the strategic decisions the organization must make, the risks it must govern, and the capabilities it needs to accelerate the next chapter.'
    },
    {
      title: 'Succession readiness is a capability, not a document',
      copy: 'Healthy succession planning is operational, not ceremonial. It requires market visibility, leadership bench development, decision rights clarity, and disciplined continuity planning across the leadership team.'
    },
    {
      title: 'Leadership as a value-creation lever in sponsor-backed companies',
      copy: 'In private equity and growth-oriented businesses, leadership quality often determines whether a portfolio company creates value or simply absorbs capital. The strongest operators can translate strategic ambition into execution.'
    },
    {
      title: 'Reaching executives who never respond to advertisements',
      copy: 'Most accomplished executives are not actively looking for a new role. That is precisely why confidentiality, research depth, and trusted outreach matter. The most important conversations often begin privately.'
    },
    {
      title: 'Reading executive compensation beyond base salary',
      copy: 'Total compensation is a signal of market position, risk, and how a firm intends to align incentives with long-term value creation. Effective compensation discussions require careful benchmarking and strategic clarity.'
    }
  ];

  return (
    <PageShell eyebrow="Insights" title="Perspective on leadership, markets, and consequential decisions." intro="Research-informed commentary for boards, CEOs, investors, and senior leadership teams.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">{insightsArticles.map((item) => <div key={item.title} className="rounded-sm border border-white/10 bg-slate-950/60 p-5"><h3 className="text-xl font-bold text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p></div>)}</div>
      </div>
    </PageShell>
  );
}

function AboutPage() {
  const teamMembers = [
    { name: 'Brianna Minnie', title: 'U.S Defense, Aerospace & Space Talent Acquisition Specialist' },
    { name: 'Janel Swinchock', title: 'Senior Executive Recruiter' },
    { name: 'Gerald Towle', title: 'Executive Search Specialist' }
  ];

  const differences = [
    { number: '01', title: 'Senior-level involvement', description: 'The person you meet is the person who leads the search.' },
    { number: '02', title: 'Agility', description: 'An independent model moves at the pace the mandate requires.' },
    { number: '03', title: 'Discretion', description: 'Confidentiality is a working practice, not a policy statement.' },
    { number: '04', title: 'Research depth', description: 'Coverage is built through research rather than existing lists.' },
    { number: '05', title: 'Personalized engagement', description: 'Every executive approach is written and made individually.' },
    { number: '06', title: 'Long-term relationships', description: 'We measure success in tenure and outcomes, not placements.' },
    { number: '07', title: 'Market intelligence', description: 'Clients leave every engagement knowing their market better.' }
  ];

  const testimonials = [
    { name: 'Sheila Rosenberg', title: 'Chief Executive Officer', company: 'Johnson & Johnson', industry: 'Healthcare', quote: 'Kathleen Welch brought a level of strategic discipline to our CEO search that went far beyond what we expected from a search partner. She took the time to understand where the organization was going, not simply where it was today. Her ability to challenge our assumptions and translate our strategy into a leadership mandate was exceptional.' },
    { name: 'Henry Morgan', title: 'Board Director', company: 'General Electric', industry: 'Industrial', quote: 'What impressed me most about Kathleen was the depth of her judgment. She never treated the shortlist as the end product. Every candidate came with context, perspective, and a clear explanation of why that individual could succeed in the role. It made the Board\'s decision considerably more informed.' },
    { name: 'William Mitchell', title: 'Chief Human Resources Officer', company: 'Microsoft', industry: 'Technology', quote: 'Kathleen and the Thalvern team operated as a genuine extension of our leadership function. Their research was disciplined, their communication was thoughtful, and their engagement with senior executives was exceptionally discreet. We ultimately appointed a leader who was not actively considering a move when the search began.' },
    { name: 'Justin Ronning', title: 'Founder & Executive Chairman', company: 'Salesforce', industry: 'Enterprise Software', quote: 'Kathleen understood immediately that we did not need someone simply capable of managing the business. We needed a leader who could transform it. She helped us redefine the mandate, challenged our thinking, and ultimately introduced us to a caliber of executive we would not have reached through a conventional search.' },
    { name: 'Garrett Nelson', title: 'Managing Partner, Private Equity', company: 'Blackstone', industry: 'Private Equity', quote: 'Kathleen understands that executive selection is fundamentally a value-creation decision. Her approach gave us a much clearer view of the leadership market, the competitive talent landscape, and the capabilities required to execute our investment thesis. The quality of the work was exceptional.' },
    { name: 'Omar Bailey', title: 'Chief Operating Officer', company: 'Accenture', industry: 'Professional Services', quote: 'My experience with Kathleen was completely different from a typical recruiter interaction. She understood my career trajectory, took the time to explain why the opportunity was relevant, and handled the entire conversation with genuine discretion. I always felt that the quality of the match mattered more than simply closing the search.' }
  ];

  return (
    <PageShell eyebrow="About" title="Independent by design. Focused by purpose." intro="Thalvern Advisory was established to give organizations an alternative to volume-driven search: an independent firm where senior attention, research depth, and discretion are the standard rather than the exception.">
      <div className="about-showcase glass-card">
        <div className="about-art">
          <div className="portrait-shell">
            <div className="portrait-backdrop" />
            <img src="./assets/Kathleen Welch.jpg" alt="Kathleen Welch" className="portrait-image" />
            <div className="founder-card glass-card">
              <span className="founder-label">Founder & Managing Partner</span>
              <strong>Kathleen Welch</strong>
            </div>
          </div>
        </div>
        <div className="about-copy">
          <h2 className="text-3xl font-black text-white">Kathleen Welch</h2>
          <p className="mt-2 text-lg font-semibold text-sky-300">Founder & Managing Partner</p>
          <p className="mt-4 leading-7 text-slate-200">Kathleen Welch is the founder of Thalvern Advisory, an independent executive search and leadership advisory platform focused on helping organizations make consequential leadership decisions with greater precision, discretion, and market intelligence.</p>
          <p className="mt-4 leading-7 text-slate-200">Her work is positioned at the intersection of executive search, leadership assessment, talent intelligence, succession, and organizational transformation. Through Thalvern Advisory, Kathleen works with senior leadership teams, Boards, founders, investors, and organizations navigating critical leadership transitions and growth mandates.</p>
          <p className="mt-4 leading-7 text-slate-200">She believes exceptional executive search should go beyond identifying accomplished individuals. It should identify leaders whose capabilities, judgment, experience, and leadership style align with the organization's next chapter.</p>
        </div>
      </div>

      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Our team</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-sm border border-white/10 bg-slate-950/80 p-5">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="quote-panel glass-card">
        <h2 className="text-3xl font-black text-white">Leadership decisions shape organizations.</h2>
        <blockquote className="mt-6 text-lg leading-8 text-slate-200">"Every consequential leadership appointment carries implications far beyond the position itself. It influences strategy, culture, execution, investor confidence, succession, and the organization's ability to navigate what comes next."</blockquote>
      </div>

      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Founder philosophy</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white">On judgment, discretion, and the decisions that define a decade.</h3>
            <p className="mt-4 leading-7 text-slate-200">I founded Thalvern Advisory because the most consequential decision an organization makes is rarely a product, a market, or a transaction. It is a person. The right leader compounds every other advantage a company has. The wrong one quietly undoes them.</p>
            <p className="mt-4 leading-7 text-slate-200">Executive search, done properly, is an exercise in judgment rather than retrieval. Anyone can produce a list of accomplished names. The harder work is understanding what this organization, at this moment, in this market, actually requires — and then having the discipline to hold candidates to that standard even when the calendar argues otherwise.</p>
            <p className="mt-4 leading-7 text-slate-200">Confidentiality is not an administrative courtesy. Leadership change is sensitive for boards, for incumbents, for investors, and for the executives who agree to have a private conversation about their future. That trust is the reason the best people take the call. I protect it without exception.</p>
            <p className="mt-4 leading-7 text-slate-200">Market intelligence is what separates a considered appointment from a hopeful one. Knowing where relevant leaders sit, how they are compensated, what would move them, and how peer organizations are structured turns a hiring decision into a strategic one. Clients should finish an engagement knowing their leadership market better than when they started.</p>
            <p className="mt-4 leading-7 text-slate-200">That is the firm I wanted to build: independent, research-led, deliberately small, and personally delivered. If you are facing a decision of this kind, I would welcome the conversation.</p>
          </div>
        </div>
      </div>

      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">The Thalvern Advisory difference.</h2>
        <p className="mt-3 leading-7 text-slate-200">An independent model is a deliberate choice. It removes off-limits constraints, layered handoffs, and the incentive to prioritize volume over fit.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {differences.map((item) => (
            <div key={item.number} className="rounded-sm border border-white/10 bg-slate-950/50 p-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-2xl font-black text-sky-400">{item.number}</div>
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Our team</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-sm border border-white/10 bg-slate-950/80 p-5">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Trusted by leaders. Chosen for consequential searches.</h2>
        <p className="mt-3 leading-7 text-slate-200">Leadership decisions deserve perspective, discretion, and judgment. Thalvern Advisory works alongside Boards, founders, investors, and senior executives when the stakes are high and the right leadership appointment matters.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((client, index) => (
            <div key={index} className="rounded-sm border border-white/10 bg-slate-950/50 p-5">
              <blockquote className="text-sm leading-7 italic text-slate-300">"{client.quote}"</blockquote>
              <div className="mt-4 border-t border-slate-700 pt-4">
                <p className="font-semibold text-white">{client.name}</p>
                <p className="text-xs text-slate-400">{client.title}</p>
                <p className="text-xs text-slate-500">{client.company} · {client.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Firm at a glance.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-black text-sky-400">12+</div>
            <p className="mt-2 text-sm text-slate-300">Industry practices</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-sky-400">100%</div>
            <p className="mt-2 text-sm text-slate-300">Senior-led engagements</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-sky-400">30+</div>
            <p className="mt-2 text-sm text-slate-300">Markets mapped</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-sky-400">Global</div>
            <p className="mt-2 text-sm text-slate-300">Executive reach</p>
          </div>
        </div>
      </div>

      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Media and speaking inquiries.</h2>
        <p className="mt-4 leading-7 text-slate-200">Requests for commentary on leadership markets, succession, and executive compensation are welcome.</p>
        <div className="mt-6">
          <p className="font-semibold text-white">Kathleen Welch</p>
          <p className="text-sm text-slate-300">Founder & Managing Partner, Thalvern Advisory</p>
          <Link to="/contact" className="mt-4 inline-flex items-center justify-center rounded-sm bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500">
            Submit Media Inquiry
          </Link>
        </div>
      </div>

      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Next step</h2>
        <p className="mt-4 leading-7 text-slate-200">Every conversation with Thalvern Advisory is confidential and without obligation.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-sm bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500">
            Discuss Your Search
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-sm border border-sky-600 bg-transparent px-5 py-3 text-sm font-semibold text-sky-400 transition hover:bg-sky-600/10">
            Submit Your Executive Profile
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [consentGiven, setConsentGiven] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!consentGiven) {
      return;
    }

    const subject = `Inquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company/Title: ${formData.company}`,
      '',
      'Message:',
      formData.message
    ].join('%0D%0A');

    const mailtoUrl = `mailto:kathleenwelch@thalvernadvisory.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <PageShell eyebrow="Contact" title="Let’s discuss the leadership challenge." intro="Every conversation is confidential and without obligation.">
      <div className="video-panel overflow-hidden rounded-sm border border-slate-700 bg-slate-900/70">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover -z-10" src={contactVideo} />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative z-10 grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div>
            <h2 className="text-3xl font-black text-white">Start the conversation.</h2>
            <p className="mt-4 text-white">We welcome confidential conversations about a leadership mandate, an executive opportunity, or an advisory engagement.</p>

            <div className="mt-6 space-y-5 text-white">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Email</p>
                <a href={mailtoHref} className="mt-2 block text-lg font-semibold text-white hover:text-white">kathleenwelch@thalvernadvisory.com</a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Advisory Hours</p>
                <p className="mt-2 text-lg text-white">Monday–Friday · 9:00 AM–5:00 PM ET</p>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-white/10 bg-slate-950/80 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Send a message</p>
            <h3 className="mt-3 text-2xl font-black text-white">Request a confidential introduction.</h3>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <label className="block text-sm text-slate-200">
                <span className="mb-2 block">Name</span>
                <input name="name" type="text" value={formData.name} onChange={handleChange} className="form-control" required />
              </label>
              <label className="block text-sm text-slate-200">
                <span className="mb-2 block">Email</span>
                <input name="email" type="email" value={formData.email} onChange={handleChange} className="form-control" required />
              </label>
              <label className="block text-sm text-slate-200">
                <span className="mb-2 block">Company / Title</span>
                <input name="company" type="text" value={formData.company} onChange={handleChange} className="form-control" required />
              </label>
              <label className="block text-sm text-slate-200">
                <span className="mb-2 block">Message</span>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} className="form-control" required />
              </label>

              <label className="flex items-start gap-3 text-sm text-slate-200">
                <input
                  type="checkbox"
                  checked={consentGiven}
                  onChange={(event) => setConsentGiven(event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900 text-sky-500 focus:ring-sky-400"
                  required
                />
                <span>I acknowledge that information submitted here is treated as confidential.</span>
              </label>

              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-sm bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function PrivacyPage() {
  return (
    <PageShell eyebrow="Legal" title="Privacy Policy" intro="How Thalvern Advisory collects, uses, stores, and protects personal information.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8"><h2 className="text-3xl font-black text-white">Information we collect</h2><p className="mt-4">Insert verified description of the categories of personal information collected through this website and through search engagements.</p></div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8"><h2 className="text-3xl font-black text-white">How information is used</h2><p className="mt-4">Insert verified description of processing purposes, including search delivery, client reporting, and communications.</p></div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8"><h2 className="text-3xl font-black text-white">Sharing and disclosure</h2><p className="mt-4">Candidate information is never published or sold. Information is shared with a client organization only with the individual’s permission. Insert verified processor and sub-processor details.</p></div>
    </PageShell>
  );
}

function TermsPage() {
  return (
    <PageShell eyebrow="Legal" title="Terms of Use" intro="Terms governing access to and use of the Thalvern Advisory website.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8"><h2 className="text-3xl font-black text-white">Acceptance of terms</h2><p className="mt-4">Insert verified acceptance language.</p></div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8"><h2 className="text-3xl font-black text-white">Use of the site</h2><p className="mt-4">The site is provided for informational purposes. Submissions do not create a client, candidate, or agency relationship. Insert verified permitted-use language.</p></div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8"><h2 className="text-3xl font-black text-white">Intellectual property</h2><p className="mt-4">All content, marks, and materials on this site are the property of Thalvern Advisory unless otherwise stated.</p></div>
    </PageShell>
  );
}

function CookiesPage() {
  return (
    <PageShell eyebrow="Legal" title="Cookie Policy" intro="How cookies and similar technologies are used on this website.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8"><h2 className="text-3xl font-black text-white">What cookies we use</h2><p className="mt-4">Insert verified inventory of strictly necessary, analytics, and marketing cookies.</p></div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8"><h2 className="text-3xl font-black text-white">Analytics</h2><p className="mt-4">Analytics are used to understand site performance and improve content. Insert verified analytics provider and configuration.</p></div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8"><h2 className="text-3xl font-black text-white">Managing preferences</h2><p className="mt-4">Insert verified instructions for managing cookie preferences and browser controls.</p></div>
    </PageShell>
  );
}

function CandidatePrivacyPage() {
  return (
    <PageShell eyebrow="Legal" title="Candidate Privacy Notice" intro="Executive search involves sensitive information. Candidate information is handled with discretion at every stage.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8"><h2 className="text-3xl font-black text-white">Confidentiality commitment</h2><p className="mt-4">Executive profiles are held confidentially. Information is never published, sold, or provided to a client organization without the individual’s explicit permission.</p></div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8"><h2 className="text-3xl font-black text-white">Information we hold</h2><p className="mt-4">Insert verified description of executive profile data, assessment notes, and references held.</p></div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8"><h2 className="text-3xl font-black text-white">Consent</h2><p className="mt-4">Consent is obtained before an executive is presented to a client and before references are approached. Insert verified consent process.</p></div>
    </PageShell>
  );
}

function FAQPage() {
  const faqs = [
    {
      question: 'How do you define the search mandate?',
      answer: 'We begin with the strategy behind the role, not just the job description. That includes the business context, stage of growth, culture, operating model, leadership gaps, and the definition of success for the appointment.'
    },
    {
      question: 'When is talent intelligence preferable to search?',
      answer: 'Talent intelligence is useful when an organization needs clarity before hiring, including candidate mapping, compensation benchmarking, succession review, or an understanding of the leadership market before a formal mandate is launched.'
    },
    {
      question: 'How do you ensure confidentiality?',
      answer: 'Confidentiality is central to our model. We conduct discreet outreach, protect identities appropriately, and ensure that sensitive conversations are handled with care from the first introduction through the final decision.'
    },
    {
      question: 'What should executive candidates expect?',
      answer: 'Candidates can expect a thoughtful, discreet conversation focused on fit, leadership capability, and strategic alignment. We do not publish profiles or circulate information without appropriate consent.'
    },
    {
      question: 'Do you work with boards and founders directly?',
      answer: 'Yes. Thalvern Advisory works with boards, founders, CEOs, investors, and senior leadership teams on leadership appointments and strategic talent questions that carry real operational consequence.'
    },
    {
      question: 'Can your work extend beyond search into succession or transition support?',
      answer: 'Absolutely. Leadership advisory, succession planning, and transition support are often part of the same strategic conversation, particularly when an organization is preparing for a major leadership move or market transition.'
    }
  ];

  return (
    <PageShell eyebrow="FAQ" title="Questions clients and executives ask most often." intro="Conversations are confidential and designed to provide clarity before any formal engagement begins.">
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <div className="space-y-5">{faqs.map((item) => <div key={item.question} className="rounded-sm border border-white/10 bg-slate-950/60 p-5"><h3 className="text-xl font-bold text-white">{item.question}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p></div>)}</div>
      </div>
    </PageShell>
  );
}

function IndustryDetailPage({ slug }) {
  const normalizedSlug = industrySlugAliases[slug] || slug;
  const industry = sectors.find((item) => item.slug === normalizedSlug);
  const detailCopy = {
    'healthcare-healthcare-services': {
      focus: 'Healthcare leadership requires operational resilience, regulatory fluency, and talent capable of balancing patient care, growth, and organizational discipline.',
      bullets: ['Health system and provider leadership appointments', 'Payer and value-based care transformation leaders', 'Clinical operations, growth, and service delivery executives', 'Healthcare technology and digital transformation mandates']
    },
    'energy-infrastructure': {
      focus: 'Leadership in energy and infrastructure must combine capital discipline, operational resilience, and strategic execution across complex, regulated environments.',
      bullets: ['Infrastructure and utilities leadership roles', 'Energy transition and capital project mandates', 'Operations, engineering, and transformation leadership', 'Commercial and strategic growth appointments']
    },
    consumer: {
      focus: 'Consumer businesses move quickly, and leadership needs to align brand, operations, and growth with changing demand and market dynamics.',
      bullets: ['Brand and commercial leadership roles', 'Omnichannel and customer experience leadership', 'Retail operations and supply chain appointments', 'Growth and portfolio transformation mandates']
    },
    'nonprofit-mission-driven-organizations': {
      focus: 'Mission-driven organizations require leaders who can balance mission, governance, funding realities, and durable operational performance.',
      bullets: ['Executive leadership and operating roles', 'Fundraising, strategy, and program leadership', 'Board and governance aligned appointments', 'Transformation and multi-stakeholder engagement mandates']
    },
    'real-estate': {
      focus: 'Real estate leadership sits at the intersection of capital allocation, asset strategy, development discipline, and operational management across complex portfolios.',
      bullets: ['Development, investment, and asset management leaders', 'Operating and property leadership roles', 'Capital strategy and portfolio transformation mandates', 'Construction and real estate services appointments']
    },
    'professional-services': {
      focus: 'Professional services leaders must balance client trust, growth strategy, talent attraction, and service model evolution in fast-moving markets.',
      bullets: ['Client-facing leadership roles', 'Practice and regional growth mandates', 'Operating model and transformation leadership', 'Advisory and professional staffing appointments']
    },
    'private-equity': {
      focus: 'Private equity leadership requires sharp execution, growth ambition, and a working understanding of value creation across capital, operations, and talent.',
      bullets: ['Portfolio company CEO and functional leadership roles', 'Operating partner and transformation mandates', 'Board and value-creation appointments', 'Growth equity and sponsor-backed leadership search']
    },
    'aerospace-defense': {
      focus: 'Aerospace and defense leadership appointments demand technical credibility, mission awareness, and a high level of execution under complex procurement and regulatory conditions.',
      bullets: ['Program and business unit leadership roles', 'Defense technology and national security appointments', 'Mission-critical operational leaders', 'Government and commercial growth mandates']
    },
    technology: {
      focus: 'Technology leadership is defined by product velocity, commercial clarity, operational discipline, and the ability to lead teams through change.',
      bullets: ['CEO, CTO, COO, and product leadership searches', 'AI, data, cybersecurity, and software platform leadership', 'Scale-up and transformation mandates', 'Digital operating model appointments']
    },
    'financial-services': {
      focus: 'Financial services organizations need leaders who combine capital acumen, regulatory awareness, and a strong understanding of customer and market dynamics.',
      bullets: ['Banking, insurance, and fintech leadership roles', 'Commercial, operations, and transformation appointments', 'Risk, compliance, and strategic growth leaders', 'Capital markets and customer experience mandates']
    },
    'life-sciences': {
      focus: 'Life sciences leadership must connect innovation, regulatory discipline, data-driven decision making, and the execution needed to bring products to market.',
      bullets: ['Biotech and pharmaceutical leadership roles', 'Medical device and diagnostics appointments', 'Commercial and product strategy leaders', 'Scientific and operational transformation mandates']
    }
  };

  if (!industry) {
    return <HomePage />;
  }

  const detail = detailCopy[normalizedSlug] || {
    focus: industry.description,
    bullets: ['Board and executive leadership appointments', 'Critical succession and transition mandates', 'Business unit and functional leadership roles', 'Leadership advisory and market intelligence support']
  };

  return (
    <PageShell eyebrow="Industries" title={industry.name} intro={industry.description}>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Leadership across the sector.</h2>
        <p className="mt-4">{detail.focus}</p>
        <p className="mt-4">Thalvern Advisory develops executive search, talent intelligence, and leadership advisory solutions tailored to the operating realities of this market.</p>
        <p className="mt-4">We help organizations identify leaders who can navigate complexity, create value, and strengthen the organizations they serve.</p>
      </div>
      <div className="rounded-sm border border-white/10 bg-slate-900/70 p-6 md:p-8">
        <h2 className="text-3xl font-black text-white">Search engagement profile.</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">{detail.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </PageShell>
  );
}

function App() {
  const [route, setRoute] = React.useState(getCurrentHashPath());
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onHashChange = () => setRoute(getCurrentHashPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const routeSegments = route.split('/').filter(Boolean);
  const slug = routeSegments[1] || null;
  const pageMap = {
    '/': <HomePage />,
    '/executive-search': <ExecutiveSearchPage />,
    '/leadership': <LeadershipPage />,
    '/industries': <IndustriesOverviewPage />,
    '/insights': <InsightsPage />,
    '/about': <AboutPage />,
    '/opportunities': <OpportunitiesPage />,
    '/for-executives': <ForExecutivesPage />,
    '/for-employers': <ForEmployersPage />,
    '/leadership-advisory': <LeadershipAdvisoryPage />,
    '/talent-intelligence': <TalentIntelligencePage />,
    '/methodology': <MethodologyPage />,
    '/search-methodology': <MethodologyPage />,
    '/compensation': <ExecutiveCompensationPage />,
    '/executive-compensation': <ExecutiveCompensationPage />,
    '/faq': <FAQPage />,
    '/contact': <ContactPage />,
    '/privacy': <PrivacyPage />,
    '/terms': <TermsPage />,
    '/cookies': <CookiesPage />,
    '/candidate-privacy': <CandidatePrivacyPage />,
    '/healthcare': <IndustryDetailPage slug="healthcare" />,
    '/energy-infrastructure': <IndustryDetailPage slug="energy-infrastructure" />,
    '/consumer': <IndustryDetailPage slug="consumer" />,
    '/nonprofit': <IndustryDetailPage slug="nonprofit" />,
    '/real-estate': <IndustryDetailPage slug="real-estate" />,
    '/professional-services': <IndustryDetailPage slug="professional-services" />,
    '/private-equity': <IndustryDetailPage slug="private-equity" />,
    '/aerospace-defense': <IndustryDetailPage slug="aerospace-defense" />,
    '/technology': <IndustryDetailPage slug="technology" />,
    '/financial-services': <IndustryDetailPage slug="financial-services" />,
    '/life-sciences': <IndustryDetailPage slug="life-sciences" />
  };

  let Page = pageMap[route] || <HomePage />;
  if (route.startsWith('/industries/')) {
    Page = <IndustryDetailPage slug={slug} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <SiteHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="site-page-shell pt-20">
        <PageVideoBackground route={route} slug={slug} />
        {Page}
      </div>
      <SiteFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
