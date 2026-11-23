import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronRight, Maximize2, X, ZoomIn, ZoomOut, Truck, Smartphone, Radio, Wallet, LayoutDashboard } from 'lucide-react';
import logo from '../../assets/images/expeditedtransport.png';
import portalScreenshot from '../../assets/images/expedited-hover.png';
import appScreenshot from '../../assets/images/cmjl-hover.png';
import data from './cmjlCaseStudyData.json';
import './CmjlCaseStudy.css';
import './CmjlCaseStudyV2.css';

const assets = '/images/cmjl/';
const groups = [
  { title: 'Manage', subtitle: 'A clear view of people and operations.', icon: LayoutDashboard, features: [0, 1], image: 'operations-v2.png' },
  { title: 'Dispatch', subtitle: 'Keep assignments and conversations moving.', icon: Radio, features: [2, 3, 4, 5], image: 'dispatch-v2.png' },
  { title: 'Compensate', subtitle: 'Bring completed work and contractor pay together.', icon: Wallet, features: [6, 7, 8], image: 'settlements-v2.png' },
  { title: 'Connect', subtitle: 'Extend the ecosystem from the office to the road.', icon: Smartphone, features: [9], image: 'driver-app-v2.png' },
];
const images = [
  { src: assets + 'operations-v2.png', alt: 'CMJL operations dashboard illustration with contractor applications, route assignments and a delivery overview', caption: 'Operations dashboard · illustrative UI with sample data', width: 2160, height: 1620 },
  { src: assets + 'dispatch-v2.png', alt: 'CMJL dispatch illustration showing imported routes, stops and a communication panel', caption: 'Route dispatch · illustrative UI with sample data', width: 2160, height: 1620 },
  { src: assets + 'settlements-v2.png', alt: 'CMJL settlements illustration showing route pay, bonuses, deductions and net payable', caption: 'Contractor settlements · illustrative UI with sample data', width: 2160, height: 1620 },
  { src: assets + 'driver-app-v2.png', alt: 'Illustration of CMJL mobile experiences for assignments, delivery notifications and contractor earnings', caption: 'Driver experience · illustrative mobile screens', width: 2400, height: 1575 },
  { src: portalScreenshot, alt: 'Existing CMJL web portal sign-in screen with administrator and driver options', caption: 'Web portal · existing product screenshot', width: 1024, height: 462 },
  { src: appScreenshot, alt: 'Existing Google Play listing screenshot for the CMJL driver app showing application screens', caption: 'Android app listing · existing product screenshot', width: 1024, height: 490 },
  { src: assets + 'driver-field.png', alt: 'AI-generated illustration of a delivery contractor using a phone beside parcels in a van', caption: 'Driver in the field · AI-generated illustrative scene', width: 1448, height: 1086 },
  { src: assets+'workspace-showcase-v2.png', alt:'CMJL operations and dispatch interface concepts in layered desktop frames', caption:'Product showcase · interface concepts with fictional sample data', width:2400, height:1650 },
  { src: assets+'dispatch-team-v2.png', alt:'AI-generated illustrative scene of two dispatch coordinators reviewing transport operations', caption:'AI-generated dispatch scene · not actual CMJL staff', width:1536, height:1024 },
  { src: assets+'delivery-network-v2.png', alt:'AI-generated miniature delivery van and mint route sculpture', caption:'Connected delivery artwork · AI-generated concept', width:1024, height:1024 },
  { src: assets+'onboarding-v2.png', alt:'CMJL contractor application and document review interface concept', caption:'Contractor onboarding concept · fictional sample applications', width:2160, height:1620 },
];
type CaseImage = typeof images[number];
function Visual({ image, open, className = '', eager = false }: { image: CaseImage; open: (image: CaseImage) => void; className?: string; eager?: boolean }) {
  return <figure className={`cmjl-visual ${className}`}><button onClick={() => open(image)} aria-label={`Enlarge: ${image.alt}`}><img src={image.src} alt={image.alt} width={image.width} height={image.height} loading={eager ? 'eager' : 'lazy'} /><span aria-hidden="true"><Maximize2 size={17} /></span></button><figcaption>{image.caption}</figcaption></figure>;
}

export default function CmjlCaseStudy() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<CaseImage | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);
  const group = groups[active];
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }, []);
  useEffect(() => {
    if (!expanded) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.getElementById('cmjl-close-image')?.focus();
    const handleKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setExpanded(null);
      if (event.key === 'Tab') {
        const buttons = [...(dialog.current?.querySelectorAll<HTMLButtonElement>('button') || [])];
        if (event.shiftKey && document.activeElement === buttons[0]) { event.preventDefault(); buttons.at(-1)?.focus(); }
        else if (!event.shiftKey && document.activeElement === buttons.at(-1)) { event.preventDefault(); buttons[0]?.focus(); }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', handleKey); previousFocus?.focus(); };
  }, [expanded]);
  const openImage = (image: CaseImage) => { setZoomed(false); setExpanded(image); };
  const handleTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next = event.key === 'ArrowRight' ? (index + 1) % groups.length : event.key === 'ArrowLeft' ? (index + groups.length - 1) % groups.length : event.key === 'Home' ? 0 : event.key === 'End' ? groups.length - 1 : null;
    if (next === null) return;
    event.preventDefault(); setActive(next); document.getElementById(`cmjl-tab-${next}`)?.focus();
  };

  return <main className="cmjl-case-study case-study-readable">
    <Helmet><title>CMJL & Expedited Transport — Logistics Case Study | BytechSol</title><meta name="description" content="How BytechSol connected Expedited Transport’s contractor management, dispatch, driver apps and compensation in the CMJL logistics ecosystem." /><link rel="canonical" href="https://bytechsolllc.com/portfolio/cmjl/" /><meta property="og:title" content="CMJL — From the office to the road, connected." /><meta property="og:description" content="Explore the web and mobile logistics ecosystem for Expedited Transport Services." /></Helmet>

    <section className="cmjl-v2-hero cmjl-wrap"><Link className="cmjl-v2-back" to="/portfolio/"><ArrowLeft size={15}/> All projects <span>/ CMJL</span></Link><div className="cmjl-v2-label"><span className="cmjl-kicker">TRANSPORTATION & LOGISTICS / CASE STUDY</span><img src={logo} alt="CMJL" width="65" height="65"/></div><h1>Dispatch, drivers and pay.<br/> <em>One connected platform.</em></h1><div className="cmjl-v2-intro"><p>A web platform and driver apps that bring daily delivery operations together for Expedited Transport Services.</p><a href="#platform">Explore the platform <ArrowUpRight size={18}/></a></div><Visual image={images[7]} open={openImage} eager/></section>

    <div className="cmjl-project-meta cmjl-wrap"><div><span>CLIENT</span><strong>Expedited Transport Services</strong></div><div><span>PRODUCT</span><strong>CMJL logistics ecosystem</strong></div><div><span>PLATFORMS</span><strong>Web · iOS · Android</strong></div><div><span>FOCUS</span><strong>Operations, people & payments</strong></div></div>
    <nav className="cmjl-section-nav" aria-label="Case study sections"><div className="cmjl-wrap">{[['overview','Overview'],['challenge','The challenge'],['platform','The platform'],['drivers','Driver experience'],['integrations','Integration strategy'],['impact','The outcome']].map(([id, title]) => <a key={id} href={`#${id}`}>{title}</a>)}</div></nav>

    <section id="overview" className="cmjl-section cmjl-wrap">
      <div className="cmjl-section-heading"><div><span className="cmjl-kicker">01 / PROJECT OVERVIEW</span><h2>Delivery operations,<br /> from office to road.</h2></div><div><p className="cmjl-lead">{data.overview[0]}</p><p>{data.overview[1]}</p></div></div>
      <div className="cmjl-product-composition"><div className="cmjl-composition-label"><span><span className="cmjl-status-dot" /> THE CONNECTED OPERATIONS WORKSPACE</span><span>WEB + MOBILE</span></div><Visual image={images[0]} open={openImage} eager /><div className="cmjl-composition-strip"><span><LayoutDashboard size={17} /> Centralized operations</span><span><Truck size={17} /> Connected dispatch</span><span><Smartphone size={17} /> Driver applications</span><span><Wallet size={17} /> Contractor compensation</span></div></div>
    </section>

    <div className="cmjl-wrap cmjl-v2-pair"><div className="cmjl-v2-brand"><Visual image={images[9]} open={openImage}/><div><span className="cmjl-kicker">A CONNECTED DELIVERY ECOSYSTEM</span><h3>Every route.<br/> Part of a bigger picture.</h3></div></div><div className="cmjl-v2-photo"><Visual image={images[8]} open={openImage}/><div><span className="cmjl-kicker">BUILT AROUND PEOPLE</span><h3>The team behind<br/> every moving part.</h3><p>Give dispatchers and contractors a shared operational context, from the first assignment to the final settlement.</p></div></div></div>

    <section id="challenge" className="cmjl-challenge"><div className="cmjl-wrap cmjl-section cmjl-challenge-layout"><div className="cmjl-sticky-heading"><span className="cmjl-kicker">02 / THE CHALLENGE</span><h2>Complex operations.<br /> Too many handoffs.</h2><p>Routes, contractor applications, urgent deliveries and pay all depend on one another. The challenge was to bring those separate workflows into a clearer operating picture.</p><div className="cmjl-before-after"><span>FROM</span><strong>Separate processes</strong><ArrowRight size={23} /><span>TO</span><strong>Connected workflows</strong></div></div><div className="cmjl-challenge-list">{data.challenges.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div></section>

    <section className="cmjl-section cmjl-wrap"><div className="cmjl-section-heading"><div><span className="cmjl-kicker">03 / OUR SOLUTION</span><h2>The office and the field.<br /> Working as one.</h2></div><p className="cmjl-lead">{data.solution[0]}</p></div><div className="cmjl-solution-pair"><Visual image={images[1]} open={openImage} /><Visual image={images[6]} open={openImage} /></div><div className="cmjl-workflow-line">{['Onboard contractors','Import & assign routes','Notify & communicate','Calculate & settle'].map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < 3 && <ChevronRight size={17} aria-hidden="true" />}</div>)}</div></section>

    <section id="platform" className="cmjl-platform"><div className="cmjl-section cmjl-wrap"><div className="cmjl-section-heading"><div><span className="cmjl-kicker">04 / FEATURES & CAPABILITIES</span><h2>Manage, dispatch,<br /> pay and connect.</h2></div><p>Ten capabilities connect day-to-day administration, delivery coordination, driver communications and financial operations.</p></div>
      <div className="cmjl-tabs" role="tablist" aria-label="CMJL capability groups">{groups.map((item, index) => <button role="tab" id={`cmjl-tab-${index}`} key={item.title} aria-controls="cmjl-feature-panel" aria-selected={active === index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => handleTabKey(event, index)}><item.icon size={20} /><span>{item.title}</span><small>0{index + 1}</small></button>)}</div>
      <div className="cmjl-feature-panel" id="cmjl-feature-panel" role="tabpanel" aria-labelledby={`cmjl-tab-${active}`} tabIndex={0}><div className="cmjl-feature-copy"><h3>{group.subtitle}</h3>{group.features.map(index => <article key={index}><div className="cmjl-feature-title"><span>{String(index + 1).padStart(2,'0')}</span><h4>{data.features[index].title}</h4></div><p>{data.features[index].description}</p><div className="cmjl-business-value"><Check size={15} /><span>{data.features[index].value}</span></div></article>)}</div><div className="cmjl-feature-art"><Visual image={images[active]} open={openImage} /></div></div>
    </div></section>

    <section className="cmjl-section cmjl-wrap"><div className="cmjl-section-heading"><div><span className="cmjl-kicker">THE CONTRACTOR JOURNEY</span><h2>A clearer start.<br/> A stronger connection.</h2></div><p>Applications, document reviews, approval decisions and onboarding actions belong in one structured workflow.</p></div><div className="cmjl-v2-frame"><Visual image={images[10]} open={openImage}/></div></section>

    <section id="drivers" className="cmjl-driver-section"><div className="cmjl-wrap cmjl-section"><div className="cmjl-section-heading"><div><span className="cmjl-kicker">05 / THE DRIVER EXPERIENCE</span><h2>A connection that<br /> goes beyond the office.</h2></div><div><p className="cmjl-lead">Dedicated iOS and Android applications bring the driver-facing experience into the CMJL ecosystem.</p><p>Driver applications, delivery coordination, operational communications and payment features connect contractors with the company’s operations.</p><div className="cmjl-platform-tags"><span>iOS</span><span>Android</span><span>Driver-facing</span></div></div></div><Visual image={images[3]} open={openImage} className="cmjl-mobile-showcase" /><div className="cmjl-driver-details"><div><span>01</span><h3>Stay connected</h3><p>Operational alerts and messages connect contractors to delivery opportunities.</p></div><div><span>02</span><h3>Clarify the next step</h3><p>Calling and chat in the management portal help dispatchers resolve assignment questions.</p></div><div><span>03</span><h3>Connect work and pay</h3><p>Settlements and Early Payout support the contractor compensation experience.</p></div></div></div></section>

    <section className="cmjl-section cmjl-wrap cmjl-finance"><div><span className="cmjl-kicker">06 / PAYROLL & SETTLEMENTS</span><h2>From completed work<br /> to clearer compensation.</h2><p>Formula-based payroll connects delivery activity to compensation rules. Weekly settlements bring route pay, bonuses, deductions, net payable amounts and payment disputes into one process.</p><p>Early Payout adds an option for contractors to access payment for completed work sooner, as described in the project updates.</p><div className="cmjl-pay-equation"><span>Route activity</span><b>+</b><span>Bonuses</span><b>−</b><span>Deductions</span><b>=</b><strong>Net payable</strong></div></div><Visual image={images[2]} open={openImage} /></section>

    <section id="integrations" className="cmjl-integration-section"><div className="cmjl-wrap cmjl-section"><div className="cmjl-section-heading"><div><span className="cmjl-kicker">07 / INTEGRATION STRATEGY</span><h2>Integration work,<br /> with clear next steps.</h2></div><p>The project included analysis of direct OnTrac connectivity and work on OptimoRoute-based route analysis. Each stage has a distinct status in the documented review.</p></div><div className="cmjl-integration-timeline"><article><span className="cmjl-status cmjl-status-current">DOCUMENTED WORKFLOW</span><h3>OnTrac route-file intake</h3><p>Operations select driver routes in OnTrac, export CSV or Excel files, then import driver-specific data into Expedited’s platform.</p><div className="cmjl-integration-path"><span>OnTrac</span><ArrowRight size={16} /><span>CSV / Excel</span><ArrowRight size={16} /><span>CMJL</span></div></article><article><span className="cmjl-status cmjl-status-proposed">PROPOSED</span><h3>Direct OnTrac API</h3><p>A phased proposal investigates read-only route, manifest, assignment, reference-code and change data access.</p><p>A separately approved future phase would return delivery events and proof of delivery, with validation, retry, audit and reconciliation controls.</p></article><article><span className="cmjl-status cmjl-status-progress">IN IMPLEMENTATION · SEP 2026</span><h3>OptimoRoute analysis</h3><p>Planned-versus-actual activity, distance, time and service outcomes were being explored through route analysis.</p><p>Direct OnTrac API connectivity and OptimoRoute analysis are not presented as verified completed production integrations.</p></article></div></div></section>

    <section className="cmjl-section cmjl-wrap"><div className="cmjl-section-heading"><div><span className="cmjl-kicker">08 / OUR APPROACH</span><h2>Make everyday work<br /> easier to coordinate.</h2></div><p>A connected operational foundation supports the needs of dispatch staff and contractors while allowing room for additional integrations and reporting.</p></div><div className="cmjl-approach">{data.approach.map((text, index) => { const separator=text.indexOf(':'); return <article key={text}><span>0{index + 1}</span><h3>{text.slice(0,separator)}</h3><p>{text.slice(separator+1).trim()}</p></article>; })}</div></section>

    <section className="cmjl-section cmjl-wrap cmjl-v2-design"><div className="cmjl-section-heading"><div><span className="cmjl-kicker">VISUAL DIRECTION</span><h2>Clarity at the desk.<br/> Confidence on the road.</h2></div><p>Deep navy, operational teal and calm mint accents create a consistent visual language across the office and driver experience.</p></div><div className="cmjl-v2-design-grid"><div className="cmjl-v2-type"><span>CONNECTED BY DESIGN</span><strong>Always.<br/> Moving.</strong><small>Aa / Clear type. Familiar controls.</small></div><div className="cmjl-v2-system"><div className="cmjl-v2-colors">{[['#102738','Deep navy'],['#087C7B','Route teal'],['#A8E7D1','Soft mint'],['#F4F8FA','Cloud']].map(([color,label])=><div key={color}><span style={{background:color}}/><strong>{label}</strong><small>{color}</small></div>)}</div><div className="cmjl-v2-statuses"><span>● Assigned</span><span>In progress</span><span>Under review</span></div><div className="cmjl-v2-actions"><span><Truck size={16}/> Assign route</span><span><Radio size={16}/> Contact driver</span></div></div></div></section>

    <section className="cmjl-gallery-section"><div className="cmjl-wrap cmjl-section"><div className="cmjl-section-heading"><div><span className="cmjl-kicker">09 / A CLOSER LOOK</span><h2>One platform.<br /> Multiple perspectives.</h2></div><p>Explore the product’s existing web and Android listing screenshots, alongside illustrations of the operational workflows. Open any image to view it in detail.</p></div><div className="cmjl-gallery"><Visual image={images[4]} open={openImage} /><Visual image={images[5]} open={openImage} /><Visual image={images[1]} open={openImage} /><Visual image={images[2]} open={openImage} /></div></div></section>

    <section id="impact" className="cmjl-section cmjl-wrap"><div className="cmjl-section-heading"><div><span className="cmjl-kicker">10 / BUSINESS IMPACT</span><h2>Daily operations,<br /> brought into one place.</h2></div><div><p className="cmjl-lead">{data.result[0]}</p></div></div><div className="cmjl-impact-list">{data.impact.slice(0,-1).map((text, index) => <div key={text}><span>{String(index+1).padStart(2,'0')}</span><p>{text}</p><Check size={19} /></div>)}</div><p className="cmjl-impact-note">{data.impact.at(-1)}</p><div className="cmjl-solution-areas"><h3>Technology & solution areas</h3><dl>{data.technology.map(text=>{const [label,...rest]=text.split(/\s{2,}/);return <div key={text}><dt>{label}</dt><dd>{rest.join(' ')}</dd></div>;})}</dl></div></section>

    <section className="cmjl-cta"><img src={assets+'logistics-hero.png'} alt="" loading="lazy" width="1672" height="941" /><div className="cmjl-wrap"><span className="cmjl-kicker">YOUR NEXT OPERATIONAL ADVANTAGE</span><h2>Complex operations.<br /> <em>Connected possibilities.</em></h2><p>We build custom platforms that connect people, processes and technology, simplify everyday work and support long-term growth.</p><div><Link className="cmjl-button" to="/contact/">Build with BytechSol <ArrowUpRight size={20} /></Link><Link className="cmjl-cta-back" to="/portfolio/">View all projects <ArrowRight size={17} /></Link></div></div></section>

    {expanded && <div className="cmjl-lightbox" role="dialog" aria-modal="true" aria-label="Expanded CMJL image" ref={dialog}><div className="cmjl-lightbox-toolbar"><span>{expanded.caption}</span><button onClick={()=>setZoomed(!zoomed)} aria-pressed={zoomed} aria-label={zoomed?'Fit image to screen':'Zoom image'}>{zoomed?<ZoomOut size={21}/>:<ZoomIn size={21}/>}</button><button id="cmjl-close-image" onClick={()=>setExpanded(null)} aria-label="Close expanded image"><X size={24}/></button></div><div className={`cmjl-lightbox-canvas ${zoomed?'is-zoomed':''}`} onClick={event=>{if(event.target===event.currentTarget)setExpanded(null);}}><img src={expanded.src} alt={expanded.alt} /></div></div>}
  </main>;
}
