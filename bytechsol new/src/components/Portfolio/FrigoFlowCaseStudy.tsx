import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, CheckCircle2, Database, FlaskConical, HeartPulse, Maximize2, Package, ShieldCheck, X, ZoomIn, ZoomOut } from 'lucide-react';
import data from './frigoCaseStudyData.json';
import './FrigoFlowCaseStudy.css';
import './FrigoFlowCaseStudyV2.css';

const root='/images/frigo-flow/';
const visuals=[
  {src:root+'clinic-v2.png',alt:'Frigo Flow clinic workspace illustration with fictional patients, diagnostic orders and internal status tracking',caption:'Clinic workspace · interface illustration with fictional records',width:2100,height:1500},
  {src:root+'patient-v2.png',alt:'Frigo Flow patient experience concept showing a sample diagnostic journey and report availability',caption:'Patient portal · white-label experience concept, fictional data',width:2100,height:1500},
  {src:root+'integration-v2.png',alt:'Illustrative provider operations view distinguishing Terra sandbox evidence from Tasso requirements and callback readiness',caption:'Provider coordination · illustrative view of reported integration status',width:2100,height:1500},
  {src:root+'admin-v2.png',alt:'Frigo Flow platform administration concept with fictional clinic organizations and portal responsibilities',caption:'Platform administration · interface concept with fictional clinics',width:2100,height:1500},
  {src:root+'lab-coordination.png',alt:'AI-generated illustrative scene of a laboratory technician reviewing sealed packaging and a tablet',caption:'Laboratory coordination · AI-generated illustrative scene',width:1536,height:1024},
];
const showcase={src:root+'workspace-showcase-v2.png',alt:'Frigo Flow clinic and patient interface concepts presented together on a mint background',caption:'Clinic + patient experiences · original interface concepts with fictional records',width:2400,height:1650};
const responsive={src:root+'responsive-showcase-v2.png',alt:'Three Frigo Flow mobile interface concepts showing order progress, collection and report availability',caption:'Patient experience across smaller screens · illustrative interface concepts',width:2400,height:1575};
const conversation={src:root+'clinic-conversation-v2.png',alt:'AI-generated illustrative scene of a clinic coordinator and an adult patient reviewing a tablet',caption:'The human side of coordination · AI-generated illustrative scene',width:1536,height:1024};
const flowArt={src:root+'diagnostic-flow-v2.png',alt:'Conceptual mint glass arch connecting two platforms beside an unlabelled diagnostic kit',caption:'A connected diagnostic journey · AI-generated brand artwork',width:1024,height:1024};
const details=[
{src:root+'order-detail-v2.png',alt:'Frigo Flow illustrative order record linking a sample patient, provider reference and coordination timeline',caption:'Order detail · fictional record and illustrative workflow',width:2100,height:1500},
{src:root+'report-review-v2.png',alt:'Frigo Flow report coordination concept showing sample availability and a clinic follow-up checklist without diagnostic results',caption:'Report coordination · UI concept, no clinical results or real patient data',width:2100,height:1500},
];
type Asset=typeof visuals[number];
function Brand(){return <span className="frigo-brand"><b aria-hidden="true">F</b>Frigo Flow</span>;}
function Visual({asset,onOpen,eager=false}:{asset:Asset;onOpen:(asset:Asset)=>void;eager?:boolean}){
  return <figure className="frigo-visual"><button onClick={()=>onOpen(asset)} aria-label={`Enlarge: ${asset.alt}`}><img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} loading={eager?'eager':'lazy'}/><span aria-hidden="true"><Maximize2 size={17}/></span></button><figcaption>{asset.caption}</figcaption></figure>;
}
const screens=[
  {tab:'Clinic workspace',title:'Patients, orders and reports in one workspace.',area:1,tags:['Patient registration','Diagnostic orders','Tracking & review']},
  {tab:'Patient experience',title:'A patient experience connected to the clinic.',area:2,tags:['Clinic-branded direction','Order progress','Relevant next steps']},
  {tab:'Provider integration',title:'One order workflow across different providers.',area:3,tags:['External references','Status mapping','Event processing']},
  {tab:'Platform administration',title:'Manage clinics, services and access.',area:0,tags:['Organizations','Service configuration','Permissions & oversight']},
];
const journey=[
  {title:'Register',detail:'The clinic registers the patient in its own workspace and starts a diagnostic order.'},
  {title:'Select',detail:'The clinic chooses a test package. The provider and product determine the available collection options.'},
  {title:'Order',detail:'A provider-specific integration creates the external order and maps its reference to Frigo Flow’s internal record.'},
  {title:'Collect',detail:'The patient uses an at-home collection kit or visits a participating laboratory, depending on the provider.'},
  {title:'Synchronize',detail:'Shipment and sample updates are translated into shared order statuses, even when providers use different event names.'},
  {title:'Results',detail:'The provider makes results available for report handling and clinic review.'},
  {title:'Follow up',detail:'The clinic reviews the next step with the patient and coordinates follow-up.'},
];

export default function FrigoFlowCaseStudy(){
  const [screen,setScreen]=useState(0);
  const [step,setStep]=useState(0);
  const [expanded,setExpanded]=useState<Asset|null>(null);
  const [zoomed,setZoomed]=useState(false);
  const dialog=useRef<HTMLDivElement>(null);
  useEffect(()=>{window.scrollTo({top:0,left:0,behavior:'instant'});},[]);
  useEffect(()=>{
    if(!expanded)return;
    const previousFocus=document.activeElement as HTMLElement|null;
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';document.getElementById('frigo-close-image')?.focus();
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
  const open=(asset:Asset)=>{setZoomed(false);setExpanded(asset);};
  const tabKey=(event:KeyboardEvent<HTMLButtonElement>,index:number)=>{
    const next=event.key==='ArrowRight'?(index+1)%4:event.key==='ArrowLeft'?(index+3)%4:event.key==='Home'?0:event.key==='End'?3:null;
    if(next===null)return;event.preventDefault();setScreen(next);document.getElementById(`frigo-tab-${next}`)?.focus();
  };
  const journeyKey=(event:KeyboardEvent<HTMLButtonElement>,index:number)=>{
    const next=event.key==='ArrowRight'?(index+1)%journey.length:event.key==='ArrowLeft'?(index+journey.length-1)%journey.length:event.key==='Home'?0:event.key==='End'?journey.length-1:null;
    if(next===null)return;event.preventDefault();setStep(next);document.getElementById(`frigo-step-${next}`)?.focus();
  };
  return <main className="frigo-case-study case-study-readable">
    <Helmet><title>Frigo Flow — Healthcare Diagnostics Case Study | BytechSol</title><meta name="description" content="Explore Frigo Flow: a healthcare SaaS platform connecting clinic workflows, patient onboarding, diagnostic orders and provider coordination, built by BytechSol."/><link rel="canonical" href="https://bytechsolllc.com/portfolio/frigo-flow/"/><meta property="og:title" content="Frigo Flow — From clinic to results | BytechSol"/><meta property="og:description" content="An approved MVP, sandbox diagnostic integrations and an AWS application foundation for clinic-driven workflows."/></Helmet>

    <section className="frigo-hero frigo-v2-hero"><div className="frigo-wrap"><Link className="frigo-back" to="/portfolio/"><ArrowLeft size={15}/> All projects</Link><div className="frigo-v2-hero-top"><Brand/><span className="frigo-eyebrow">HEALTHCARE SOFTWARE / CASE STUDY</span></div><div className="frigo-v2-hero-copy"><h1>From clinic to results.<br/>  <em>Keep every step connected.</em></h1><div><p>A shared workspace for clinics to coordinate patients, test orders, collection and reports.</p><a href="#frigo-platform" className="frigo-primary">Explore the experience <ArrowRight size={18}/></a><div className="frigo-hero-tags"><span><HeartPulse size={14}/> Healthcare SaaS</span><span><CheckCircle2 size={14}/> Client-approved MVP</span></div></div></div><Visual asset={showcase} onOpen={open} eager/><div className="frigo-meta">{data.metadata.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section>
    <nav className="frigo-nav" aria-label="Frigo Flow case study sections"><div className="frigo-wrap">{[['frigo-overview','Overview'],['frigo-platform','The platform'],['frigo-journey','Diagnostic journey'],['frigo-integrations','Integrations'],['frigo-engineering','Engineering'],['frigo-results','Verified progress']].map(([id,label])=><a href={`#${id}`} key={id}>{label}</a>)}</div></nav>

    <section id="frigo-overview" className="frigo-section frigo-wrap"><div className="frigo-heading"><div><span className="frigo-eyebrow">01 / THE PROJECT</span><h2>Connecting clinics,<br/> patients and providers.</h2></div><p className="frigo-lead">The brief: bring diagnostic orders and patient follow-up into one clinic-led platform.</p></div><div className="frigo-summary">{data.summary.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div><div className="frigo-position"><HeartPulse size={24}/><p>Frigo Flow coordinates the diagnostic workflow. Laboratory testing is delivered by external providers.</p></div></section>

    <section className="frigo-wrap frigo-v2-pair" aria-label="Frigo Flow visual direction"><Visual asset={conversation} onOpen={open}/><div className="frigo-v2-art"><Visual asset={flowArt} onOpen={open}/><div className="frigo-v2-art-copy"><span className="frigo-eyebrow">A SHARED NEXT STEP</span><h2>Less distance.<br/>  More connection.</h2></div></div></section>

    <section className="frigo-challenge"><div className="frigo-section frigo-wrap frigo-challenge-grid"><div><span className="frigo-eyebrow">02 / THE BUSINESS CHALLENGE</span><h2>Too many handoffs.<br/> Too little shared visibility.</h2><p>{data.challengeIntro}</p></div><div className="frigo-needs">{data.challenges.map((item,index)=><article key={item}><span>0{index+1}</span><p>{item}</p><ArrowUpRight size={16}/></article>)}</div></div></section>

    <section id="frigo-platform" className="frigo-section frigo-wrap"><div className="frigo-heading"><div><span className="frigo-eyebrow">03 / THE PLATFORM EXPERIENCE</span><h2>A workspace for<br/> every role.</h2></div><p>{data.solution}</p></div><div className="frigo-tabs" role="tablist" aria-label="Explore Frigo Flow interfaces">{screens.map(({tab},index)=><button key={tab} id={`frigo-tab-${index}`} role="tab" aria-controls="frigo-screen-panel" aria-selected={screen===index} tabIndex={screen===index?0:-1} onClick={()=>setScreen(index)} onKeyDown={event=>tabKey(event,index)}><span>0{index+1}</span>{tab}<ArrowUpRight size={16}/></button>)}</div><div id="frigo-screen-panel" role="tabpanel" aria-labelledby={`frigo-tab-${screen}`} tabIndex={0}><div className="frigo-screen-copy"><h3>{screens[screen].title}</h3><p>{data.areas[screens[screen].area][1]}</p></div><div className="frigo-screen-frame"><div className="frigo-screen-bar"><span><i/> FRIGO FLOW WORKSPACE</span><span>ILLUSTRATIVE DEMO</span></div><Visual asset={visuals[screen]} onOpen={open} eager/></div><div className="frigo-screen-tags">{screens[screen].tags.map(tag=><span key={tag}><Check size={13}/>{tag}</span>)}</div></div><p className="frigo-demo-note">Screens use fictional records. Patient portal and clinic-branded concepts show the intended experience; they do not confirm that every feature is complete.</p></section>

    <section id="frigo-journey" className="frigo-journey"><div className="frigo-section frigo-wrap"><div className="frigo-heading"><div><span className="frigo-eyebrow">04 / THE INTENDED DIAGNOSTIC WORKFLOW</span><h2>How a diagnostic<br/> order moves.</h2></div><p>{data.workflow[1]}</p></div><p className="frigo-journey-hint">Choose a step to see how it works. Use the arrow keys to move between steps.</p><ol className="frigo-journey-steps">{journey.map(({title},index)=><li key={title}><button id={`frigo-step-${index}`} aria-pressed={step===index} aria-controls="frigo-journey-detail" onClick={()=>setStep(index)} onKeyDown={event=>journeyKey(event,index)}><span>0{index+1}</span><strong>{title}</strong></button></li>)}</ol><div id="frigo-journey-detail" className="frigo-journey-detail" aria-live="polite"><span>STEP 0{step+1}</span><div><h3>{journey[step].title}</h3><p>{journey[step].detail}</p></div><ArrowRight size={25}/></div><div className="frigo-collection-paths"><div><Package size={22}/><span>At-home kit<small>Provider-dependent collection path</small></span></div><div><FlaskConical size={22}/><span>Participating laboratory<small>Provider-dependent testing path</small></span></div></div></div></section>

    <section className="frigo-section frigo-wrap frigo-v2-mobile"><div className="frigo-heading"><div><span className="frigo-eyebrow">THE PATIENT PERSPECTIVE</span><h2>Clarity that travels<br/>  with the patient.</h2></div><p>Order progress, collection arrangements and report availability in a clinic-branded experience. A visual exploration of the patient portal direction.</p></div><Visual asset={responsive} onOpen={open}/></section>

    <section id="frigo-integrations" className="frigo-section frigo-wrap"><div className="frigo-heading"><div><span className="frigo-eyebrow">05 / PROVIDER INTEGRATION</span><h2>Provider integrations.<br/> A clear view of progress.</h2></div><p>Each provider connects through its own API. The statuses below separate tested sandbox work from the latest integration request.</p></div><div className="frigo-providers">{data.providers.map(({name,status,description},index)=><article key={name}><div><span>0{index+1} / INTEGRATION HISTORY</span><h3>{name}</h3><strong className={`frigo-provider-status status-${index}`}>{status}</strong></div><p>{description}</p></article>)}</div><div className="frigo-integration-evidence"><span>TERRA SANDBOX EVIDENCE</span><div><strong>200</strong><small>Authentication</small></div><div><strong>201</strong><small>Order creation</small></div><p>Catalog retrieval and associated order verification were also demonstrated. Production-secured webhooks remain unconfirmed.</p></div></section>

    <section className="frigo-section frigo-wrap frigo-v2-detail-section"><div className="frigo-heading"><div><span className="frigo-eyebrow">FROM ORDER TO FOLLOW-UP</span><h2>Every handoff.<br/>  In context.</h2></div><p>Keep the patient, external reference and next coordination step connected. These concepts explore how the clinic could move between an order record and report review.</p></div><div className="frigo-v2-details">{details.map(asset=><Visual key={asset.src} asset={asset} onOpen={open}/>)}</div></section>

    <section className="frigo-context"><div className="frigo-wrap frigo-context-grid"><Visual asset={visuals[4]} onOpen={open}/><div><span className="frigo-eyebrow">THE COORDINATION LAYER</span><h2>The provider may change.<br/> The workflow needs continuity.</h2><p>Clinic operations, external order references, specimen progress and result handling need a shared model. The engineering approach kept the platform adaptable as vendor and product requirements evolved.</p><div className="frigo-context-tags"><span>Reference mapping</span><span>Status synchronization</span><span>Result handling</span></div></div></div></section>

    <section id="frigo-engineering" className="frigo-section frigo-wrap"><div className="frigo-heading"><div><span className="frigo-eyebrow">06 / ENGINEERING & INFRASTRUCTURE</span><h2>The application stack.<br/> The database migration.</h2></div><p>The application combines clinic and patient interfaces, business workflows, provider integrations and relational data on AWS-hosted infrastructure.</p></div><div className="frigo-architecture" aria-label="Frigo Flow application architecture"><div><span>EXPERIENCE</span><h3>Next.js + React</h3><p>Clinic, patient and administration interfaces</p></div><ArrowRight size={22}/><div><span>APPLICATION</span><h3>NestJS + TypeScript</h3><p>Authentication, orders, APIs and integrations</p></div><ArrowRight size={22}/><div><span>DATA</span><h3>PostgreSQL + Prisma</h3><p>Tenant, patient and workflow records</p></div></div><dl className="frigo-tech-list">{data.technology.map(([layer,description])=><div key={layer}><dt>{layer}</dt><dd>{description}</dd></div>)}</dl><div className="frigo-migration"><div><span className="frigo-eyebrow">OCTOBER 2026 / SCHEMA-ONLY MIGRATION</span><h3>Supabase PostgreSQL <ArrowRight size={23}/> Amazon RDS</h3><p>{data.migration}</p></div><div className="frigo-schema-counts">{[['16','Tables'],['3','ENUM types'],['2','Functions'],['5','Triggers']].map(([number,label])=><div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></div><div className="frigo-deployment"><Database size={24}/><p>{data.deployment}</p></div></section>

    <section className="frigo-readiness"><div className="frigo-section frigo-wrap"><div className="frigo-heading"><div><span className="frigo-eyebrow">07 / SECURITY & HEALTHCARE READINESS</span><h2>Security by design.<br/> Readiness still in progress.</h2></div><p>{data.security}</p></div><p className="frigo-controls-caption">Controls considered in the design. Production validation remains part of the work ahead.</p><div className="frigo-controls">{['Authenticated access','Clinic data boundaries','Role-based permissions','Protected reports','Hashed, expiring OTP design','API signature checks','Duplicate-event handling','Audit, backup & monitoring requirements'].map(item=><span key={item}><ShieldCheck size={17}/>{item}</span>)}</div><div className="frigo-compliance-note"><ShieldCheck size={24}/><p>{data.compliance}</p></div></div></section>

    <section className="frigo-section frigo-wrap"><div className="frigo-heading"><div><span className="frigo-eyebrow">08 / DELIVERY & COLLABORATION</span><h2>Delivery milestones.<br/> From MVP to integration.</h2></div><p>Engagement began on 12 June 2026. Product scope, provider direction and infrastructure work evolved together through the following milestones.</p></div><ol className="frigo-timeline">{data.timeline.map(([period,milestone],index)=><li key={period}><span>0{index+1}</span><h3>{period}</h3><p>{milestone}</p></li>)}</ol><p className="frigo-pilot-note">{data.pilot}</p><div className="frigo-engineering-heading"><h3>Engineering challenges and response</h3><span>HOW THE APPROACH ADAPTED</span></div><div className="frigo-responses">{data.engineering.map(([challenge,response])=><details key={challenge}><summary><span>{challenge}</span><span aria-hidden="true">+</span></summary><p>{response}</p></details>)}</div></section>

    <section id="frigo-results" className="frigo-results"><div className="frigo-section frigo-wrap"><div className="frigo-heading"><div><span className="frigo-eyebrow">09 / VERIFIED PROGRESS</span><h2>What has been delivered.<br/> What the evidence shows.</h2></div><span className="frigo-snapshot">PROJECT HISTORY AS OF {data.asOf.toUpperCase()}</span></div><div className="frigo-result-list">{data.results.map((result,index)=><article key={result}><span>0{index+1}</span><p>{result}</p><CheckCircle2 size={21}/></article>)}</div><div className="frigo-outcome-note"><strong>What remains to be measured</strong><p>{data.outcomeNote}</p></div></div></section>

    <section className="frigo-section frigo-wrap"><div className="frigo-heading"><div><span className="frigo-eyebrow">10 / THE EXPERIENCE, UP CLOSE</span><h2>Explore the details<br/> behind the flow.</h2></div><p>Clinic, patient, integration and administration concepts. Open any image to view the details at full size.</p></div><div className="frigo-gallery">{visuals.slice(0,4).map(asset=><Visual key={asset.src} asset={asset} onOpen={open}/>)}</div></section>

    <section className="frigo-wrap frigo-v2-brand-section" aria-label="Visual language"><div className="frigo-v2-brand-card"><span className="frigo-eyebrow">THE VISUAL LANGUAGE</span><Brand/><p>Calm by design.<br/>  Clear at every step.</p><span className="frigo-v2-brand-foot">A HEALTHCARE WORKFLOW EXPERIENCE</span></div><div className="frigo-v2-type-card"><span className="frigo-eyebrow">TYPE & TONE</span><strong>Aa</strong><p>Open. Human. Considered.</p><span>Editorial typography / generous space / clear hierarchy</span></div><div className="frigo-v2-palette">{[['Deep teal','#147C73'],['Sage','#A3CFC0'],['Soft ivory','#F4F8F4']].map(([label,color])=><div key={color} style={{background:color}}><span>{label}</span><small>{color}</small></div>)}</div></section>

    <section className="frigo-cta"><div className="frigo-wrap"><Brand/><span className="frigo-eyebrow">BUILD YOUR NEXT HEALTHCARE PLATFORM</span><h2>Connect the workflow.<br/> <em>Support the journey.</em></h2><p>Bring product design, application engineering and provider integration together around the way your organization works.</p><div><Link to="/contact/" className="frigo-primary">Build with BytechSol <ArrowUpRight size={19}/></Link><Link to="/portfolio/" className="frigo-cta-back">All projects <ArrowRight size={17}/></Link></div></div></section>
    {expanded&&<div className="frigo-lightbox" role="dialog" aria-modal="true" aria-label="Expanded Frigo Flow image" ref={dialog}><div className="frigo-lightbox-toolbar"><span>{expanded.caption}</span><button onClick={()=>setZoomed(!zoomed)} aria-label={zoomed?'Fit image to screen':'Zoom image'}>{zoomed?<ZoomOut size={21}/>:<ZoomIn size={21}/>}</button><button id="frigo-close-image" onClick={()=>setExpanded(null)} aria-label="Close expanded image"><X size={24}/></button></div><div className={`frigo-lightbox-canvas ${zoomed?'is-zoomed':''}`} onClick={event=>{if(event.target===event.currentTarget)setExpanded(null);}}><img src={expanded.src} alt={expanded.alt}/></div></div>}
  </main>;
}
