import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight, ArrowUpRight, Building2, Check, Globe2, Layers3, Maximize2, ShieldCheck, X, ZoomIn, ZoomOut } from 'lucide-react';
import data from './odooCaseStudyData.json';
import './OdooErpCaseStudy.css';
import './OdooErpCaseStudyV2.css';

const root='/images/odoo-erp/';
const visuals=[
  {src:root+'workspace-v2.png',alt:'Illustrative multi-company Odoo workspace with US and Chile entities, accounting currencies and integration scope',caption:'Multi-company workspace · interface illustration with demo data',width:2100,height:1500},
  {src:root+'mandate-v2.png',alt:'Illustrative custom mandate record showing independent formalisation and commitment states with evidence and approval gates',caption:'Custom mandate workflow · interface illustration with demo data',width:2100,height:1500},
  {src:root+'finance-v2.png',alt:'Illustrative company accounting view with CLP ledger, USD reporting model and intercompany review records',caption:'Financial controls · interface illustration with demo data',width:2100,height:1500},
  {src:root+'procurement-v2.png',alt:'Illustrative Chilean procurement workspace connecting purchase orders, imports, inventory and landed-cost review',caption:'Procurement and imports · interface illustration with demo data',width:2100,height:1500},
  {src:root+'distribution-team.png',alt:'AI-generated illustrative scene of distribution staff reviewing a tablet beside warehouse pallets',caption:'Distribution in context · AI-generated illustrative scene',width:1536,height:1024},
  {src:root+'international-port.png',alt:'AI-generated illustrative container port with a cargo vessel, cranes and shipping containers',caption:'International trade in context · AI-generated illustrative scene',width:1536,height:1024},
  {src:root+'workspace-showcase-v2.png',alt:'Multi-company Odoo workspace and mandate interface concepts in layered desktop frames',caption:'Connected ERP workspace · illustrative concepts with sample data',width:2400,height:1650},
  {src:root+'trade-operations-v2.png',alt:'Illustrative distribution coordinators reviewing a tablet at a warehouse loading area',caption:'AI-generated distribution scene · not the actual client workplace',width:1536,height:1024},
  {src:root+'connected-trade-v2.png',alt:'Two separate metallic structures joined by a translucent aqua glass bridge',caption:'A shared foundation · AI-generated conceptual artwork',width:1024,height:1024},
  {src:root+'responsive-showcase-v2.png',alt:'Tablet and mobile concepts for procurement and commercial mandate review',caption:'Responsive interface concepts · intended workflows with sample records',width:2400,height:1575},
  {src:root+'approvals-v2.png',alt:'Governance concept with evidence checks, approval requests and controlled progression',caption:'Approval workflow concept · demonstration records, not live decisions',width:2100,height:1500},
  {src:root+'inventory-v2.png',alt:'Inventory operations concept linking incoming goods, stock movements and landed-cost review',caption:'Inventory workflow concept · fictional records within the implementation scope',width:2100,height:1500},
];
type Asset=typeof visuals[number];
function Visual({asset,onOpen,eager=false}:{asset:Asset;onOpen:(asset:Asset)=>void;eager?:boolean}){
  return <figure className="odoo-visual"><button onClick={()=>onOpen(asset)} aria-label={`Enlarge: ${asset.alt}`}><img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} loading={eager?'eager':'lazy'}/><span aria-hidden="true"><Maximize2 size={17}/></span></button><figcaption>{asset.caption}</figcaption></figure>;
}
const screens=[
  {tab:'Group workspace',title:'Independent businesses. A shared foundation.',description:'A coordinated environment for company-specific accounting, access permissions, master data and group visibility.',tags:['Separate legal entities','USD + CLP','Shared governance']},
  {tab:'Mandate management',title:'Commercial logic beyond the pipeline.',description:'A custom Odoo module models formalisation and commitment independently, with evidence, approvals and country-specific progression controls.',tags:['Independent classifications','Four execution tracks','Controlled handoffs']},
  {tab:'Financial controls',title:'Each company’s books. The group’s perspective.',description:'Company accounting, reconciliation, treasury and controlled intercompany transactions support a USD-based group reporting design.',tags:['Company ledgers','Intercompany flows','Consolidation design']},
  {tab:'Procurement & imports',title:'A consistent trail from supplier to distribution.',description:'The Chilean operating model connects purchasing, inbound goods, warehouse movements, landed costs and inventory valuation.',tags:['Supplier to stock','Landed-cost allocation','Logistics integration scope']},
];

export default function OdooErpCaseStudy(){
  const [screen,setScreen]=useState(0);
  const [formalisation,setFormalisation]=useState<'Explicit'|'Implicit'>('Implicit');
  const [commitment,setCommitment]=useState<'Confirmed'|'Provisional'>('Confirmed');
  const [expanded,setExpanded]=useState<Asset|null>(null);
  const [zoomed,setZoomed]=useState(false);
  const dialog=useRef<HTMLDivElement>(null);
  useEffect(()=>{window.scrollTo({top:0,left:0,behavior:'instant'});},[]);
  useEffect(()=>{
    if(!expanded)return;
    const previousFocus=document.activeElement as HTMLElement|null;
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';document.getElementById('odoo-close-image')?.focus();
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
    if(next===null)return;event.preventDefault();setScreen(next);document.getElementById(`odoo-tab-${next}`)?.focus();
  };
  const classificationDescription=commitment==='Provisional'
    ? `The mandate is ${formalisation.toLowerCase()}, but the commitment is provisional. Some actions stay restricted until the required conditions are met.`
    : formalisation==='Implicit'
      ? 'The mandate is established implicitly and the commercial commitment is confirmed. These describe separate parts of the same agreement.'
      : 'The mandate is explicit and the commitment is confirmed. The next step still depends on the required documents, approvals and local rules.';

  return <main className="odoo-case-study case-study-readable">
    <Helmet><title>Multi-Company Odoo ERP Case Study | BytechSol</title><meta name="description" content="Engineering a multi-company Odoo Enterprise ERP for international trade across the United States and Chile, with custom commercial mandate workflows and financial controls."/><link rel="canonical" href="https://bytechsolllc.com/portfolio/odoo-erp/"/><meta property="og:title" content="Two countries. One ERP foundation. | BytechSol"/><meta property="og:description" content="A multi-company Odoo Enterprise implementation for international trade and B2B distribution. Architecture, custom development and staged validation."/></Helmet>

    <section className="odoo-v2-hero odoo-wrap"><Link to="/portfolio/" className="odoo-back"><ArrowLeft size={15}/> All projects</Link><div className="odoo-v2-intro"><div className="odoo-v2-brand"><Layers3 size={28}/><div><strong>Odoo ERP</strong><span>INTERNATIONAL TRADE & DISTRIBUTION</span></div></div><span className="odoo-status"><i/> IMPLEMENTATION & STAGED VALIDATION</span></div><h1>Separate companies.<br/>  <em>Connected operations.</em></h1><div className="odoo-v2-deck"><p>{data.subtitle}</p><a href="#odoo-product">Explore the workspaces <ArrowUpRight size={20}/></a></div><Visual asset={visuals[6]} onOpen={open} eager/><div className="odoo-hero-meta"><div><span>SECTOR</span><strong>International trade & B2B distribution</strong></div><div><span>PLATFORM</span><strong>Odoo Enterprise v19</strong></div><div><span>ENGAGEMENT</span><strong>Architecture · Implementation · Integration</strong></div></div></section>
    <nav className="odoo-nav" aria-label="Odoo case study sections"><div className="odoo-wrap">{[['odoo-overview','Overview'],['odoo-architecture','Architecture'],['odoo-product','Product views'],['odoo-mandates','Mandate logic'],['odoo-delivery','Delivery approach'],['odoo-progress','Project progress']].map(([id,label])=><a href={`#${id}`} key={id}>{label}</a>)}</div></nav>

    <section id="odoo-overview" className="odoo-section odoo-wrap"><div className="odoo-heading"><div><span className="odoo-eyebrow">01 / THE CLIENT & THE BRIEF</span><h2>One ERP.<br/> Two connected businesses.</h2></div><p className="odoo-lead">{data.client[0]}</p></div><div className="odoo-overview-grid"><div className="odoo-client-copy">{data.client.slice(1).map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div><dl className="odoo-project-facts">{data.metadata.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div></section>

    <section className="odoo-v2-pair odoo-wrap" aria-label="Trade operations and a shared ERP foundation"><Visual asset={visuals[8]} onOpen={open}/><Visual asset={visuals[7]} onOpen={open}/></section>

    <section className="odoo-challenge"><div className="odoo-section odoo-wrap"><div className="odoo-heading"><div><span className="odoo-eyebrow">02 / THE CHALLENGE</span><h2>Two countries.<br/> Different ways of working.</h2></div><p>{data.challengeIntro}</p></div><div className="odoo-challenge-list">{data.challenges.map(({title,description},index)=><details key={title} open={index===0}><summary><span>0{index+1}</span><h3>{title}</h3><span aria-hidden="true">+</span></summary><p>{description}</p></details>)}</div></div></section>

    <section id="odoo-architecture" className="odoo-section odoo-wrap"><div className="odoo-heading"><div><span className="odoo-eyebrow">03 / THE ARCHITECTURE</span><h2>Separate businesses.<br/> Shared systems.</h2></div><p>{data.solutionIntro}</p></div><div className="odoo-architecture" aria-label="Conceptual multi-company ERP architecture"><div className="odoo-entity-grid"><article><span className="odoo-entity-label"><Building2 size={18}/> UNITED STATES</span><h3>Commercial agency</h3><p>Business development, mandates, retainers and commission-based relationships.</p><span className="odoo-currency">USD · Independent financial records</span></article><article><span className="odoo-entity-label"><Globe2 size={18}/> CHILE</span><h3>Distribution subsidiary</h3><p>Sourcing, purchasing, importing, inventory and B2B distribution.</p><span className="odoo-currency">CLP · Local accounting requirements</span></article></div><div className="odoo-connectors" aria-hidden="true"><span/><span/></div><div className="odoo-shared-core"><Layers3 size={26}/><div><span>SHARED ERP FOUNDATION</span><h3>Odoo Enterprise</h3></div><p>Permissions · Master data · Governance<br/> Intercompany flows · Group visibility</p></div><div className="odoo-stack-row">{['Python custom modules','PostgreSQL','AWS environments','REST API integrations'].map(item=><span key={item}>{item}</span>)}</div><div className="odoo-expansion"><span>DESIGNED FOR FUTURE EXPANSION</span><p>Argentina & Peru <ArrowRight size={16}/> Additional entities without a complete architectural redesign</p></div></div></section>

    <section id="odoo-product" className="odoo-product"><div className="odoo-section odoo-wrap"><div className="odoo-heading"><div><span className="odoo-eyebrow">04 / THE OPERATING EXPERIENCE</span><h2>Explore the<br/> ERP workspaces.</h2></div><p>These interface illustrations show the intended workflows. All records are sample data, rather than live client information.</p></div><div className="odoo-tabs" role="tablist" aria-label="Explore Odoo ERP interfaces">{screens.map(({tab},index)=><button key={tab} role="tab" id={`odoo-tab-${index}`} aria-controls="odoo-screen-panel" aria-selected={screen===index} tabIndex={screen===index?0:-1} onClick={()=>setScreen(index)} onKeyDown={event=>tabKey(event,index)}><span>0{index+1}</span>{tab}<ArrowUpRight size={15}/></button>)}</div><div id="odoo-screen-panel" role="tabpanel" aria-labelledby={`odoo-tab-${screen}`} tabIndex={0}><div className="odoo-screen-copy"><h3>{screens[screen].title}</h3><p>{screens[screen].description}</p></div><Visual asset={visuals[screen]} onOpen={open} eager/><div className="odoo-screen-tags">{screens[screen].tags.map(tag=><span key={tag}><Check size={14}/>{tag}</span>)}</div></div></div></section>

    <section className="odoo-section odoo-wrap odoo-v2-responsive"><div className="odoo-heading"><div><span className="odoo-eyebrow">THE WORKSPACE IN CONTEXT</span><h2>The right view<br/> for each team.</h2></div><p>From a commercial review to an incoming shipment, the interface concepts keep the company, workflow and next decision visible across screen sizes.</p></div><Visual asset={visuals[9]} onOpen={open}/></section>

    <section id="odoo-mandates" className="odoo-mandates"><div className="odoo-section odoo-wrap"><div className="odoo-heading"><div><span className="odoo-eyebrow">05 / TECHNICAL SPOTLIGHT</span><h2>Clear rules for<br/> commercial agreements.</h2></div><p>{data.spotlightIntro[0]}</p></div><div className="odoo-mandate-layout"><div className="odoo-rule-explorer"><span className="odoo-small-label">EXPLORE THE TWO CLASSIFICATIONS</span><fieldset><legend>How is the mandate established?</legend><div>{(['Explicit','Implicit'] as const).map(value=><label key={value}><input type="radio" name="odoo-formalisation" value={value} checked={formalisation===value} onChange={()=>setFormalisation(value)}/><span>{value}</span></label>)}</div></fieldset><fieldset><legend>Is the commitment confirmed?</legend><div>{(['Confirmed','Provisional'] as const).map(value=><label key={value}><input type="radio" name="odoo-commitment" value={value} checked={commitment===value} onChange={()=>setCommitment(value)}/><span>{value}</span></label>)}</div></fieldset><div className="odoo-rule-result" aria-live="polite"><span>{formalisation} <i>+</i> {commitment}</span><p>{classificationDescription}</p></div><p className="odoo-rule-note">Classification example only. Actual progression depends on configured evidence, approvals and country-specific rules.</p></div><div className="odoo-mandate-principles"><p>{data.spotlightIntro[1]}</p>{data.spotlight.map(({title,description},index)=><article key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div><div className="odoo-validation-note"><ShieldCheck size={24}/><p>{data.spotlightConclusion}</p></div></div></section>

    <section className="odoo-section odoo-wrap"><div className="odoo-heading"><div><span className="odoo-eyebrow">06 / THE SOLUTION IN DETAIL</span><h2>What we built.<br/> How it fits together.</h2></div><p>Six areas connect standard Odoo features with the client’s own workflows. Open an area to explore the scope.</p></div><div className="odoo-solution-list">{data.solutions.map(({title,blocks},index)=><details key={title} open={index===0}><summary><span>0{index+1}</span><h3>{title}</h3><span aria-hidden="true">+</span></summary><div>{blocks.map((block,i)=>block.kind==='list'?<ul key={i}>{block.items.map(item=><li key={item}><Check size={14}/><span>{item}</span></li>)}</ul>:<p key={i}>{block.text}</p>)}</div></details>)}</div></section>

    <section className="odoo-v2-detail-pair odoo-wrap" aria-label="Governance and inventory concepts"><div><span className="odoo-eyebrow">PROGRESSION WITH CONTEXT</span><h3>The evidence behind each decision.</h3><p>Supporting records, approval requirements and progression controls give commercial handoffs a clear structure.</p><Visual asset={visuals[10]} onOpen={open}/></div><div><span className="odoo-eyebrow">FROM INBOUND TO INVENTORY</span><h3>Follow the goods. Keep the record.</h3><p>Purchasing, warehouse movements and landed-cost review share a consistent operational trail.</p><Visual asset={visuals[11]} onOpen={open}/></div></section>

    <section className="odoo-context"><div className="odoo-wrap odoo-context-grid"><Visual asset={visuals[4]} onOpen={open}/><div><span className="odoo-eyebrow">FROM THE SYSTEM TO THE OPERATION</span><h2>Software that follows<br/> the business.</h2>{data.why.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></div></section>

    <section id="odoo-delivery" className="odoo-section odoo-wrap"><div className="odoo-heading"><div><span className="odoo-eyebrow">07 / IMPLEMENTATION APPROACH</span><h2>From discovery<br/> to launch.</h2></div><p>We build and test in separate environments. Features move to production after documented testing, client acceptance and release approval.</p></div><div className="odoo-phases">{data.phases.map(({number,title,description})=><article key={number}><span>PHASE 0{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="odoo-release-flow"><span>Development</span><ArrowRight size={17}/><span>Staged validation</span><ArrowRight size={17}/><span>Client acceptance</span><ArrowRight size={17}/><span>Authorized production release</span></div></section>

    <section className="odoo-v2-design odoo-wrap" aria-label="ERP visual direction"><div><span className="odoo-eyebrow">THE VISUAL DIRECTION</span><h2>Clarity across<br/>  every company.</h2><p>Deep blue grounds the architecture. Aqua connects the operational views, while muted plum distinguishes the enterprise workspace. Open layouts give financial and commercial detail room to breathe.</p></div><div className="odoo-v2-design-board"><div className="odoo-v2-type"><span>SYSTEM SANS / REGULAR + SEMIBOLD</span><strong>Aa</strong><p>Independent businesses.<br/>  Shared understanding.</p></div><div className="odoo-v2-swatches"><span>Deep blue<small>#173342</small></span><span>Aqua<small>#8FD1CE</small></span><span>Plum<small>#71506E</small></span></div></div></section>

    <section id="odoo-progress" className="odoo-progress"><div className="odoo-section odoo-wrap"><div className="odoo-heading"><div><span className="odoo-eyebrow">08 / PROGRESS & BUSINESS VALUE</span><h2>Built and configured.<br/> Now under validation.</h2></div><span className="odoo-status"><i/> IMPLEMENTATION & STAGED VALIDATION</span></div><div className="odoo-progress-copy"><div><span className="odoo-small-label">REPORTED TECHNICAL MILESTONE</span><h3>Mandate module deployed.<br/> Offline checks completed.</h3></div><p>{data.progress}</p></div><div className="odoo-benefits">{data.benefits.map(({title,description},index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="odoo-outcome-note"><ShieldCheck size={22}/><p>{data.outcomeNote}</p></div></div></section>

    <section className="odoo-section odoo-wrap"><div className="odoo-heading"><div><span className="odoo-eyebrow">09 / WORKFLOW GALLERY</span><h2>The details<br/> behind the architecture.</h2></div><p>Inspect the illustrative mandate, financial and operational views. Each screen can be opened and enlarged.</p></div><div className="odoo-gallery">{[1,2,3,0].map(index=><Visual key={index} asset={visuals[index]} onOpen={open}/>)}</div></section>

    <section className="odoo-cta"><div className="odoo-wrap"><span className="odoo-eyebrow">BUILDING BEYOND STANDARD ERP</span><h2>Your processes.<br/> A stronger <em>foundation.</em></h2><p>{data.closing[0]}</p><p>{data.closing[1]}</p><div><Link to="/contact/" className="odoo-primary">Discuss your ERP project <ArrowUpRight size={19}/></Link><Link to="/portfolio/" className="odoo-cta-back">All projects <ArrowRight size={17}/></Link></div></div></section>

    {expanded&&<div className="odoo-lightbox" role="dialog" aria-modal="true" aria-label="Expanded Odoo case-study image" ref={dialog}><div className="odoo-lightbox-toolbar"><span>{expanded.caption}</span><button onClick={()=>setZoomed(!zoomed)} aria-label={zoomed?'Fit image to screen':'Zoom image'}>{zoomed?<ZoomOut size={21}/>:<ZoomIn size={21}/>}</button><button id="odoo-close-image" onClick={()=>setExpanded(null)} aria-label="Close expanded image"><X size={24}/></button></div><div className={`odoo-lightbox-canvas ${zoomed?'is-zoomed':''}`} onClick={event=>{if(event.target===event.currentTarget)setExpanded(null);}}><img src={expanded.src} alt={expanded.alt}/></div></div>}
  </main>;
}
