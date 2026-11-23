import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock3, ScanLine, Maximize2, X, ZoomIn, ZoomOut } from 'lucide-react';
import logo from '../../assets/images/clockit-logo.png';
import homepage from '../../assets/images/clockit-hover.png';
import data from './clockitCaseStudyData.json';
import './ClockItCaseStudy.css';
import './ClockItCaseStudyV2.css';

const root = '/images/clockit/';
const visuals = [
  { src: root+'worker-v2.png', alt: 'ClockIt worker demo screen with a shift timer, breaks, daily hours and estimated pay', caption: 'Worker portal · interface illustration with anonymous demo data', width:2100, height:1500 },
  { src: root+'manager-v2.png', alt: 'ClockIt manager demo dashboard with employee activity, attendance and actual versus scheduled hours', caption: 'Manager portal · interface illustration with anonymous demo data', width:2100, height:1500 },
  { src: root+'admin-v2.png', alt: 'ClockIt admin demo dashboard with shift activity, labor costs and employee time records', caption: 'Admin portal · interface illustration with anonymous demo data', width:2100, height:1500 },
  { src: root+'scanner-v2.png', alt: 'ClockIt Route Scanner demo matching a sample package to a driver, route, stop and source workbook', caption: 'Route Scanner · interface illustration with anonymous demo data', width:2100, height:1500 },
  { src: root+'source-workflow.png', alt: 'Source workflow diagram: worker activity feeds shared records, dashboard, payroll and time off; route workbooks feed package lookup', caption: 'Workforce and route operations · original case-study diagram', width:2280, height:1128 },
  { src: homepage, alt: 'Existing ClockIt product homepage showing its Admin, Manager and Worker portal entry points', caption: 'ClockIt homepage · existing product screenshot', width:1024, height:465 },
  { src: root+'operations-review.png', alt: 'AI-generated illustrative scene of a warehouse supervisor reviewing a laptop at an operations desk', caption: 'Operations in context · AI-generated illustrative scene', width:1536, height:1024 },
  { src:root+'workspace-showcase-v2.png', alt:'ClockIt desktop dashboard and worker shift timer presented together', caption:'Workspace concept · illustrative interfaces with sample records', width:2400, height:1650 },
  { src:root+'shift-handoff-v2.png', alt:'Illustrative warehouse colleagues reviewing a tablet and scanning a parcel', caption:'AI-generated warehouse scene · not the client’s actual team', width:1536, height:1024 },
  { src:root+'time-sculpture-v2.png', alt:'Lime glass clock sculpture beside miniature parcels', caption:'Time and movement · AI-generated brand artwork', width:1024, height:1024 },
  { src:root+'mobile-showcase-v2.png', alt:'Mobile web concepts for a worker shift, package scan and time-off request', caption:'Responsive web concepts · sample records, not a native mobile app', width:2400, height:1575 },
  { src:root+'payroll-v2.png', alt:'ClockIt payroll concept with hours, rates, estimated earnings and CSV export', caption:'Payroll preparation concept · fictional sample records', width:2100, height:1500 },
  { src:root+'leave-v2.png', alt:'ClockIt time-off concept with a calendar, availability and leave review', caption:'Time-off concept · fictional sample records', width:2100, height:1500 },
];

type VisualAsset = typeof visuals[number];
function Visual({ asset, onOpen, className='', eager=false }: { asset:VisualAsset; onOpen:(asset:VisualAsset)=>void; className?:string; eager?:boolean }) {
  return <figure className={`clockit-visual ${className}`}><button onClick={()=>onOpen(asset)} aria-label={`Enlarge: ${asset.alt}`}><img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} loading={eager?'eager':'lazy'}/><span aria-hidden="true"><Maximize2 size={17}/></span></button><figcaption>{asset.caption}</figcaption></figure>;
}
const portalTags = [['Clock in & breaks','Hours & estimated pay','Time off & profile'],['Staff & activity','Routes & reporting','Payroll restricted'],['Payroll & records','Time history','Scheduling & reports']];

export default function ClockItCaseStudy() {
  const [portal,setPortal] = useState(0);
  const [expanded,setExpanded] = useState<VisualAsset|null>(null);
  const [zoomed,setZoomed] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);
  useEffect(()=>{window.scrollTo({top:0,left:0,behavior:'instant'});},[]);
  useEffect(()=>{
    if(!expanded)return;
    const previousFocus=document.activeElement as HTMLElement|null;
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';document.getElementById('clockit-close-image')?.focus();
    const handleKey=(event:globalThis.KeyboardEvent)=>{
      if(event.key==='Escape')setExpanded(null);
      if(event.key==='Tab'){
        const buttons=[...(dialog.current?.querySelectorAll<HTMLButtonElement>('button')||[])];
        if(event.shiftKey&&document.activeElement===buttons[0]){event.preventDefault();buttons.at(-1)?.focus();}
        else if(!event.shiftKey&&document.activeElement===buttons.at(-1)){event.preventDefault();buttons[0]?.focus();}
      }
    };
    window.addEventListener('keydown',handleKey);
    return()=>{document.body.style.overflow=previousOverflow;window.removeEventListener('keydown',handleKey);previousFocus?.focus();};
  },[expanded]);
  const open=(asset:VisualAsset)=>{setZoomed(false);setExpanded(asset);};
  const tabKey=(event:KeyboardEvent<HTMLButtonElement>,index:number)=>{
    const next=event.key==='ArrowRight'?(index+1)%3:event.key==='ArrowLeft'?(index+2)%3:event.key==='Home'?0:event.key==='End'?2:null;
    if(next===null)return;event.preventDefault();setPortal(next);document.getElementById(`clockit-tab-${next}`)?.focus();
  };
  return <main className="clockit-case-study case-study-readable">
    <Helmet><title>ClockIt — Workforce & Route Operations Case Study | BytechSol</title><meta name="description" content="Explore ClockIt: workforce time tracking, labor insights and barcode route lookup for a small parcel and logistics operation."/><link rel="canonical" href="https://bytechsolllc.com/portfolio/clockit/"/><meta property="og:title" content="ClockIt — Every shift. Every package. In view."/><meta property="og:description" content="A connected working day, from clock-in to package lookup. A BytechSol product case study."/></Helmet>

    <section className="clockit-v2-hero clockit-wrap">
      <Link className="clockit-back" to="/portfolio/"><ArrowLeft size={16}/> All projects</Link>
      <div className="clockit-v2-intro"><div className="clockit-v2-brand"><img src={logo} alt="ClockIt" width="175" height="57"/><span>WORKFORCE & ROUTE OPERATIONS</span></div><span className="clockit-v2-project">BYTECHSOL / CASE STUDY 04</span></div>
      <h1>A clearer shift.<br/>  <em>A connected day.</em></h1>
      <div className="clockit-v2-deck"><p>From the first clock-in to the last package scan. One workspace that keeps people, time and routes in view.</p><a href="#portals">Explore the experience <ArrowUpRight size={20}/></a></div>
      <Visual asset={visuals[7]} onOpen={open} eager className="clockit-v2-cover"/>
    </section>

    <div className="clockit-meta clockit-wrap"><div><span>CLIENT</span><strong>US parcel & logistics operation<br/> <small>Name withheld</small></strong></div><div><span>DELIVERED</span><strong>Role-based web portal</strong></div><div><span>IN USE SINCE</span><strong>Early July 2026</strong></div><div><span>DATA REVIEWED</span><strong>2 November 2026</strong></div></div>
    <nav className="clockit-nav" aria-label="ClockIt case study sections"><div className="clockit-wrap">{[['overview','Overview'],['challenge','The challenge'],['portals','The portals'],['scanner','Route Scanner'],['results','Live-use results'],['next','What’s next']].map(([id,label])=><a href={`#${id}`} key={id}>{label}</a>)}</div></nav>

    <section id="overview" className="clockit-section clockit-wrap"><div className="clockit-section-heading"><div><span className="clockit-eyebrow">01 / PROJECT OVERVIEW</span><h2>Shifts, pay and routes.<br/> One shared workspace.</h2></div><div><p className="clockit-lead">ClockIt gives a small parcel and logistics operation one system for shifts, labor cost, time off and package routes.</p><p>A team of nine—seven workers, one manager and one admin—has used the system since early July 2026. The web portal brings self-service tools, operational oversight and administration into three role-based experiences.</p></div></div><div className="clockit-overview-preview"><div className="clockit-preview-top"><span><span className="clockit-status-dot"/> THE CONNECTED WORKSPACE</span><span>ADMIN VIEW</span></div><Visual asset={visuals[2]} onOpen={open} eager/><div className="clockit-preview-bottom"><span>Time tracking</span><span>Labor insights</span><span>Time off</span><span>Package lookup</span></div></div></section>

    <section className="clockit-v2-pair clockit-wrap" aria-label="ClockIt in context"><Visual asset={visuals[9]} onOpen={open}/><Visual asset={visuals[8]} onOpen={open}/></section>

    <section id="challenge" className="clockit-challenge"><div className="clockit-section clockit-wrap clockit-challenge-layout"><div><span className="clockit-eyebrow">02 / THE CHALLENGE</span><h2>Hours in one place.<br/> Routes in another.</h2><p className="clockit-lead">{data.challenge[0]}</p><p>{data.challenge.at(-1)}</p><div className="clockit-shift-note"><Clock3 size={25}/><div><strong>A morning-shift operation</strong><span>Seven days a week. Route data arriving in Excel workbooks.</span></div></div></div><div className="clockit-needs"><span className="clockit-small-label">WHAT THE TEAM NEEDED</span>{data.challenge.slice(2,-1).map((requirement,index)=><article key={requirement}><span>0{index+1}</span><p>{requirement}</p><ArrowUpRight size={18}/></article>)}</div></div></section>

    <section id="portals" className="clockit-section clockit-wrap"><div className="clockit-section-heading"><div><span className="clockit-eyebrow">03 / THE SOLUTION</span><h2>A clear workspace<br/> for every role.</h2></div><p className="clockit-lead">{data.solution[0]}</p></div><div className="clockit-portal-tabs" role="tablist" aria-label="ClockIt portal roles">{data.portals.map(([role,who],index)=><button role="tab" id={`clockit-tab-${index}`} aria-controls="clockit-portal-panel" aria-selected={portal===index} tabIndex={portal===index?0:-1} onClick={()=>setPortal(index)} onKeyDown={event=>tabKey(event,index)} key={role}><span>0{index+1}</span><div><strong>{role} portal</strong><small>{who}</small></div><ArrowUpRight size={19}/></button>)}</div><div className="clockit-portal-panel" id="clockit-portal-panel" role="tabpanel" aria-labelledby={`clockit-tab-${portal}`} tabIndex={0}><div className="clockit-portal-description"><h3>{data.portals[portal][0]} portal</h3><p>{data.portals[portal][2]}</p><div>{portalTags[portal].map(tag=><span key={tag}><Check size={13}/>{tag}</span>)}</div></div><Visual asset={visuals[portal]} onOpen={open}/></div></section>

    <section id="scanner" className="clockit-scanner"><div className="clockit-section clockit-wrap"><div className="clockit-section-heading"><div><span className="clockit-eyebrow"><ScanLine size={16}/> 04 / THE ROUTE SCANNER</span><h2>From a barcode<br/> to the next stop.</h2></div><div><p className="clockit-lead">A package scan connects warehouse staff to its driver, route, stop and order details—without opening and searching route workbooks.</p><p>The Route Scanner connects imported route files to a fast package lookup.</p></div></div><Visual asset={visuals[3]} onOpen={open}/><div className="clockit-scanning-methods">{[['01','Scan at the workstation','Use a USB or Bluetooth barcode scanner at a warehouse workstation.'],['02','Scan with a camera','Phone camera scanning supports Code128 and QR codes.'],['03','Type an Order ID','Enter an Order ID when a scanner is unavailable.']].map(([number,title,text])=><article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="clockit-import-line"><span>Excel / ZIP upload</span><ArrowRight size={17}/><span>Up to 25 workbooks per batch</span><ArrowRight size={17}/><span>Searchable package details</span></div></div></section>

    <section className="clockit-section clockit-wrap clockit-v2-mobile"><div className="clockit-section-heading"><div><span className="clockit-eyebrow">THE WORKING DAY, WITHIN REACH</span><h2>Everyday tools,<br/>  ready for a phone.</h2></div><p>Clock in, check a package or request time away. A responsive web experience brings the tools closer to the people using them.</p></div><Visual asset={visuals[10]} onOpen={open}/></section>

    <section className="clockit-section clockit-wrap"><div className="clockit-section-heading"><div><span className="clockit-eyebrow">05 / KEY CAPABILITIES</span><h2>The tools behind<br/> each working day.</h2></div><p>Explore eleven tools for attendance, payroll preparation, time off, employee records and package routes.</p></div><div className="clockit-capabilities">{data.capabilities.map(([title,description,value],index)=><details key={title} open={index===0}><summary><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><span className="clockit-toggle" aria-hidden="true">+</span></summary><div><p>{description}</p><p className="clockit-capability-value"><Check size={15}/><span>{value}</span></p></div></details>)}</div></section>

    <section className="clockit-v2-detail-pair clockit-wrap" aria-label="Payroll and time-off experiences"><div><span className="clockit-eyebrow">FROM HOURS TO EARNINGS</span><h3>A record ready for payroll.</h3><p>Review hours, rates and estimated earnings, then export a CSV for payroll processing.</p><Visual asset={visuals[11]} onOpen={open}/></div><div><span className="clockit-eyebrow">ROOM FOR TIME AWAY</span><h3>Plan the next shift together.</h3><p>Leave requests, approvals and weekly availability give the team a shared view of time off.</p><Visual asset={visuals[12]} onOpen={open}/></div></section>

    <section className="clockit-context"><div className="clockit-wrap clockit-context-grid"><Visual asset={visuals[6]} onOpen={open}/><div><span className="clockit-eyebrow">A CLEARER OPERATING PICTURE</span><h2>The shift is moving.<br/> The record keeps up.</h2><p>Live status, employee activity and searchable time history make attendance easier to review. Manual entries and corrections carry audit labels showing who created or edited a record.</p><p>Recorded hours feed estimated earnings and labor-cost analysis, while CSV exports prepare time data for the next payroll step.</p></div></div></section>

    <section className="clockit-section clockit-wrap"><div className="clockit-section-heading"><div><span className="clockit-eyebrow">06 / HOW IT CONNECTS</span><h2>Two workflows.<br/> One operational view.</h2></div><p>Worker actions become the shared record behind the Admin views. Route workbooks follow a separate path, turning uploaded files into package lookup.</p></div><div className="clockit-workflow"><Visual asset={visuals[4]} onOpen={open}/></div><div className="clockit-technical"><div><h3>Technical implementation</h3><p>ClockIt is a Next.js web application with role-based portal experiences. Route imports are stored in Supabase, and warehouse hardware works through standard scanner input.</p></div><dl>{data.technology.map(([area,implementation])=><div key={area}><dt>{area}</dt><dd>{implementation}</dd></div>)}</dl></div></section>

    <section className="clockit-v2-design clockit-wrap" aria-label="ClockIt visual direction"><div><span className="clockit-eyebrow">A VISUAL LANGUAGE FOR EVERYDAY WORK</span><h2>Calm by design.<br/>  Clear at a glance.</h2><p>Forest tones ground the workspace. Lime accents bring active shifts and key actions into focus. Generous spacing makes dense operational records easier to scan.</p></div><div className="clockit-v2-design-board"><div className="clockit-v2-type"><span>SYSTEM SANS / REGULAR + SEMIBOLD</span><strong>Aa</strong><p>Every minute.<br/>  Every moving part.</p></div><div className="clockit-v2-swatches"><span>Forest<small>#17211D</small></span><span>Lime<small>#C7F36B</small></span><span>Cloud<small>#F4F6F0</small></span></div></div></section>

    <section id="results" className="clockit-results"><div className="clockit-section clockit-wrap"><div className="clockit-section-heading"><div><span className="clockit-eyebrow">07 / RESULTS IN LIVE USE</span><h2>Four months<br/> of daily use.</h2></div><div><p className="clockit-lead">{data.resultsNotes[0]}</p><span className="clockit-snapshot">REPORTED AS OF 2 NOVEMBER 2026</span></div></div><div className="clockit-numbers"><div><strong>9</strong><span>People on the system</span><small>7 workers · 1 manager · 1 admin</small></div><div><strong>≈400</strong><span>Regular shift records</span><small>From early July 2026</small></div><div><strong>≈1,977</strong><span>Recorded regular-shift hours</span><small>Approximate source figures</small></div></div><div className="clockit-results-detail"><div><h3>A shared record of the working day.</h3><p>{data.resultsNotes.at(-1)}</p></div><dl>{data.results.filter(([label])=>['Live use','Typical shift','Recent route imports reviewed'].includes(label)).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div><p className="clockit-results-note">{data.resultsNotes[1]}</p></div></section>

    <section id="next" className="clockit-section clockit-wrap clockit-next"><div><span className="clockit-eyebrow">08 / WHAT LIVE USE TAUGHT US</span><h2>The next step:<br/> more reliable shift records.</h2><p className="clockit-lead">{data.lessons[0]}</p><div className="clockit-learning"><span>THE NEXT STAGE</span><strong>Protect the shift record.<br/> Make exceptions visible.</strong></div></div><ol>{data.lessons.slice(2).map((lesson,index)=>{const split=lesson.indexOf(':');return <li key={lesson}><span>0{index+1}</span><div><h3>{lesson.slice(0,split)}</h3><p>{lesson.slice(split+1).trim()}</p></div></li>;})}</ol></section>

    <section className="clockit-gallery-section"><div className="clockit-section clockit-wrap"><div className="clockit-section-heading"><div><span className="clockit-eyebrow">09 / THE PRODUCT, UP CLOSE</span><h2>A closer look<br/> at the working experience.</h2></div><p>The original product homepage sits alongside detailed interface illustrations. Demo records keep the unnamed client’s personal and operational details out of the visuals.</p></div><div className="clockit-gallery"><Visual asset={visuals[5]} onOpen={open}/><Visual asset={visuals[0]} onOpen={open}/><Visual asset={visuals[2]} onOpen={open}/><Visual asset={visuals[3]} onOpen={open}/></div></div></section>

    <section className="clockit-cta"><div className="clockit-wrap"><div><img src={logo} alt="ClockIt" width="175" height="57"/><span className="clockit-eyebrow">YOUR NEXT PRODUCT STARTS HERE</span></div><h2>Make everyday work<br/> <em>work better.</em></h2><p>From workforce tools to operational platforms, we turn complex processes into clear digital experiences.</p><div className="clockit-cta-actions"><Link className="clockit-primary" to="/contact/">Build with BytechSol <ArrowUpRight size={20}/></Link><Link className="clockit-cta-back" to="/portfolio/">Back to all projects <ArrowRight size={17}/></Link></div></div></section>

    {expanded&&<div className="clockit-lightbox" role="dialog" aria-modal="true" aria-label="Expanded ClockIt image" ref={dialog}><div className="clockit-lightbox-toolbar"><span>{expanded.caption}</span><button onClick={()=>setZoomed(!zoomed)} aria-label={zoomed?'Fit image to screen':'Zoom image'}>{zoomed?<ZoomOut size={21}/>:<ZoomIn size={21}/>}</button><button id="clockit-close-image" onClick={()=>setExpanded(null)} aria-label="Close expanded image"><X size={24}/></button></div><div className={`clockit-lightbox-canvas ${zoomed?'is-zoomed':''}`} onClick={event=>{if(event.target===event.currentTarget)setExpanded(null);}}><img src={expanded.src} alt={expanded.alt}/></div></div>}
  </main>;
}
