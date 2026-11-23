import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Maximize2, Phone, Sparkles, X, ZoomIn, ZoomOut, Headphones, MessageSquare, BarChart3, ShieldCheck } from 'lucide-react';
import logo from '../../assets/images/voxiq-darker.png';
import websiteImage from '../../assets/images/voxiq-hover.png';
import data from './voxiqCaseStudyData.json';
import './VoxiqCaseStudy.css';

type CaseImage = { src: string; alt: string; caption?: string };
const assets = '/images/voxiq/';
const groupImages = ['dialer-v2.png', 'inbox-v2.png', 'analytics-v2.png', 'governance-v2.png'];
const groupIcons = [Phone, MessageSquare, BarChart3, ShieldCheck];
const sections = [['overview', 'Overview'], ['platform', 'The platform'], ['integrations', 'Integrations'], ['outcomes', 'Reported outcomes'], ['industries', 'Industry scenarios'], ['pricing', 'Plans']];
const moduleGroups = [
  { title: 'Dialing & routing', description: 'Keep reps connected to the next conversation.', start: 0, end: 6 },
  { title: 'AI & messaging', description: 'Continue the conversation across calls, SMS and WhatsApp.', start: 6, end: 9 },
  { title: 'Coaching & analytics', description: 'Give managers a clear view of the call floor.', start: 9, end: 12 },
  { title: 'Governance', description: 'Bring calling controls and team access into the workflow.', start: 12, end: 14 },
];
const challenges = [
  ['Dead time between calls', 'Reps look up the next number, dial by hand and wait through rings and voicemail greetings.'],
  ['Voicemail drag', 'Leaving the same message dozens of times a day takes time away from live conversations.'],
  ['Low answer rates', 'Unfamiliar out-of-area numbers get ignored.'],
  ['Slow lead response', 'Inbound form fills wait hours for a callback, after the lead has gone cold.'],
  ['Tool sprawl', 'Calls, texts, WhatsApp, recordings and CRM notes live in separate apps, leaving managers without a clear view of the work.'],
  ['Rules across regions', 'Calling hours, recording consent, DNC checks and collections call windows need to be part of the calling workflow.'],
];
const overview = [
  ['Product', 'Voxiq'],
  ['Category', 'Sales dialer and multichannel outreach'],
  ['Platform', 'Browser-based calling in Chrome over WebRTC'],
  ['Core CRM', 'GoHighLevel (native) and Pipedrive'],
  ['Connections', 'Zapier and a REST API for custom builds'],
  ['Channels', 'Voice calls, SMS and WhatsApp'],
  ['Audience', 'Nine segments, from small businesses to enterprise and GHL agencies'],
];

function CaseStudyImage({ src, alt, caption, onExpand, eager = false }: CaseImage & { caption: string; onExpand: (image: CaseImage) => void; eager?: boolean }) {
  const dimensions = src === websiteImage ? [1024, 493] : src.includes('integrations.svg') ? [1200, 620] : src.includes('workspace-showcase') ? [2400, 1650] : src.includes('responsive-showcase') ? [2400, 1620] : src.includes('voice-sculpture') ? [1024, 1024] : src.includes('sales-conversation') ? [1536, 1024] : [2160, 1620];
  return <figure className="vq-visual">
    <button className="vq-image-button" onClick={() => onExpand({ src, alt, caption })} aria-label={`Enlarge image: ${alt}`}>
      <img src={src} alt={alt} width={dimensions[0]} height={dimensions[1]} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} />
      <span className="vq-enlarge" aria-hidden="true"><Maximize2 size={16} /></span>
    </button>
    <figcaption>{caption}<span>Click to explore <ArrowUpRight size={13} /></span></figcaption>
  </figure>;
}

export default function VoxiqCaseStudy() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [expandedImage, setExpandedImage] = useState<CaseImage | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);
  const expand = (image: CaseImage) => { setZoomed(false); setExpandedImage(image); };
  const selectedGroup = moduleGroups[activeGroup];

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }, []);
  useEffect(() => {
    if (!expandedImage) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.getElementById('voxiq-close-image')?.focus();
    const handleKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedImage(null);
      if (event.key === 'Tab') { const buttons = [...(dialog.current?.querySelectorAll<HTMLButtonElement>('button') || [])]; if (event.shiftKey && document.activeElement === buttons[0]) { event.preventDefault(); buttons.at(-1)?.focus(); } else if (!event.shiftKey && document.activeElement === buttons.at(-1)) { event.preventDefault(); buttons[0]?.focus(); } }
    };
    window.addEventListener('keydown', handleKey);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', handleKey); previousFocus?.focus(); };
  }, [expandedImage]);

  const handleTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next = event.key === 'ArrowRight' ? (index + 1) % moduleGroups.length
      : event.key === 'ArrowLeft' ? (index + moduleGroups.length - 1) % moduleGroups.length
        : event.key === 'Home' ? 0 : event.key === 'End' ? moduleGroups.length - 1 : null;
    if (next === null) return;
    event.preventDefault(); setActiveGroup(next);
    document.getElementById(`voxiq-tab-${next}`)?.focus();
  };

  return <main className="voxiq-case-study case-study-readable">
    <Helmet>
      <title>Voxiq — Sales Calling Platform Case Study | BytechSol</title>
      <meta name="description" content="Explore Voxiq: a browser-based sales calling platform bringing dialing, AI, SMS, WhatsApp, CRM integrations and coaching into one workspace." />
      <link rel="canonical" href="https://bytechsolllc.com/portfolio/voxiq/" />
      <meta property="og:title" content="Voxiq — More conversations. One workspace." />
      <meta property="og:description" content="A product case study of Voxiq’s calling workflow, CRM connections and nine illustrative industry scenarios." />
    </Helmet>

    <section className="vq-hero vq-wrap">
      <div className="vq-breadcrumb"><Link to="/portfolio/"><ArrowLeft size={15}/> All projects</Link><span>/</span><span>Voxiq</span></div>
      <div className="vq-hero-top"><span className="vq-eyebrow"><Headphones size={16}/> SALES ENGAGEMENT / PRODUCT CASE STUDY</span><img src={logo} alt="Voxiq" width="160" height="63"/></div>
      <h1>Calls and follow-ups.<br/> <span>One connected workspace.</span></h1>
      <div className="vq-hero-intro"><p>A browser-based workspace for calling, SMS, WhatsApp and CRM activity. Keep the next conversation and its context together.</p><a href="#platform" className="vq-text-link">Explore the platform <ArrowUpRight size={18}/></a></div>
      <div className="vq-hero-art"><CaseStudyImage src={assets+'workspace-showcase-v2.png'} alt="Voxiq dialer and shared inbox interface concepts in layered desktop frames" caption="Voxiq product showcase · illustrative interfaces with fictional sample data" eager onExpand={expand}/></div>
      <div className="vq-facts"><div><strong>14</strong><span>Platform modules</span></div><div><strong>9</strong><span>Industry segments</span></div><div><strong>3</strong><span>Outreach channels</span></div><div><strong>1</strong><span>Connected browser workspace</span></div></div>
    </section>

    <div className="vq-content-nav"><nav className="vq-wrap" aria-label="Voxiq case study sections">{sections.map(([id, title]) => <a key={id} href={`#${id}`}>{title}</a>)}</nav></div>

    <section id="overview" className="vq-section vq-wrap vq-two-col">
      <div><span className="vq-eyebrow">01 / AT A GLANCE</span><h2>The calling workflow,<br /> in one browser tab.</h2><p className="vq-lead">Voxiq brings dialing, messages, recordings and analytics into one workspace. An early-access AI agent supports lead qualification and handoffs.</p><p>Calling runs in Chrome through WebRTC. Teams can connect GoHighLevel, Pipedrive, Zapier or a custom system through the REST API.</p><p>The case study covers nine audience segments, including sales teams, small businesses and agencies that offer the platform under their own brand.</p></div>
      <dl className="vq-overview">{overview.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </section>

    <div className="vq-wrap vq-showcase-stack"><div className="vq-screen-stage"><div className="vq-stage-heading"><div><span className="vq-eyebrow">THE DAILY CALLING WORKSPACE</span><h3>Stay in the conversation.<br/> Keep the context close.</h3></div><span className="vq-stage-pill"><Phone size={13}/> VOICE / CRM / FOLLOW-UP</span></div><CaseStudyImage src={assets+'dialer-v2.png'} alt="Detailed Voxiq dialer concept showing campaign queue, live call controls, notes and CRM contact context" caption="Calling workspace concept · fictional contacts and activity" onExpand={expand}/></div><div className="vq-image-pair"><div className="vq-brand-tile"><CaseStudyImage src={assets+'voice-sculpture-v2.png'} alt="AI-generated cyan glass audio waveform sculpture on a navy pedestal" caption="Voice-inspired brand artwork · AI-generated concept" onExpand={expand}/><div className="vq-brand-copy"><span className="vq-eyebrow">MADE FOR THE CONVERSATION</span><h3>A clearer signal.<br/> A human connection.</h3></div></div><div className="vq-photo-tile"><CaseStudyImage src={assets+'sales-conversation-v2.png'} alt="AI-generated illustrative photograph of a sales consultant listening attentively through a headset" caption="AI-generated sales scene · illustrative, not a Voxiq employee" onExpand={expand}/><div><span className="vq-eyebrow">PEOPLE AT THE CENTRE</span><h3>More attention for<br/> the person on the line.</h3><p>The workspace brings the next step closer, so the rep can stay focused on the conversation.</p></div></div></div></div>

    <section className="vq-challenge"><div className="vq-section vq-wrap">
      <div className="vq-two-col"><div><span className="vq-eyebrow">02 / THE CHALLENGE</span><h2>Too much admin<br /> between conversations.</h2></div><p className="vq-lead">Manual dialing, separate communication tools and delayed follow-ups take time away from conversations with leads.</p></div>
      <div className="vq-challenge-grid voxiq-challenges">{challenges.map(([title, description], index) => <article key={title}><span className="vq-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </div></section>

    <section id="platform" className="vq-section vq-wrap">
      <div className="vq-section-heading"><div><span className="vq-eyebrow">03 / THE PLATFORM</span><h2>A complete calling workflow.<br /> One shared workspace.</h2></div><p>Each module addresses a different gap, from dialing the next contact to coaching a live conversation. Calls and follow-ups stay connected through one shared inbox.</p></div>
      <div className="vq-tabs" role="tablist" aria-label="Voxiq platform capabilities">{moduleGroups.map((group, index) => { const Icon = groupIcons[index]; return <button role="tab" key={group.title} id={`voxiq-tab-${index}`} aria-selected={activeGroup === index} aria-controls="voxiq-capabilities" tabIndex={activeGroup === index ? 0 : -1} onClick={() => setActiveGroup(index)} onKeyDown={event => handleTabKey(event, index)}><Icon size={16}/>{group.title}</button>; })}</div>
      <div id="voxiq-capabilities" role="tabpanel" aria-labelledby={`voxiq-tab-${activeGroup}`} tabIndex={0}>
        <div className="voxiq-group-heading"><span className="vq-eyebrow">0{activeGroup + 1} / {selectedGroup.title.toUpperCase()}</span><p className="voxiq-group-description">{selectedGroup.description}</p></div>
        <div className="vq-module-screen"><div className="vq-window-bar"><span><i/><i/><i/></span><span>VOXIQ / {selectedGroup.title.toUpperCase()}</span><span>INTERFACE CONCEPT</span></div><CaseStudyImage src={assets + groupImages[activeGroup]} alt={`Voxiq ${selectedGroup.title.toLowerCase()} product interface concept`} caption="Product interface concept · fictional sample data" onExpand={expand}/></div>
        <div className="voxiq-capabilities">{data.modules.slice(selectedGroup.start, selectedGroup.end).map((module, index) => <article key={module.name}><div className="voxiq-capability-top"><span>{String(selectedGroup.start + index + 1).padStart(2, '0')}</span><span>{module.problem}</span></div><h3>{module.name}</h3><p>{module.description}</p></article>)}</div>
      </div>
    </section>

    <section className="vq-ai voxiq-agent"><div className="vq-section vq-wrap">
      <div className="vq-section-heading"><div><span className="vq-eyebrow"><Sparkles size={17} /> 04 / AI AGENT CALLER</span><h2>A new lead.<br /> A faster first conversation.</h2></div><div><span className="voxiq-early-access">EARLY ACCESS</span><p className="vq-lead">The AI voice agent is designed to qualify leads with your questions, book meetings through Calendly or GHL, and hand off a summary and lead score to a rep.</p><p className="voxiq-claim-note">Voxiq reports a response target of 60 seconds, 24/7. The case study lists the agent as early access; pricing and plan inclusion are unspecified.</p></div></div>
      <CaseStudyImage src={assets + 'ai-v2.png'} alt="Illustrated Voxiq lead workflow: new lead, AI qualification, calendar booking and a human handoff with a summary" caption="AI lead-response workflow · illustrative journey, not a live call" onExpand={expand} />
      <div className="voxiq-agent-points">{[['Qualify', 'Ask the questions that matter to the team, then return useful context.'], ['Book', 'Place the next conversation on a Calendly or GoHighLevel calendar.'], ['Hand off', 'Give the rep a summary and lead score before they pick up.']].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section id="integrations" className="vq-section vq-wrap">
      <div className="vq-section-heading"><div><span className="vq-eyebrow">05 / CONNECTED TO THE CRM</span><h2>Keep call activity<br /> connected to the CRM.</h2></div><p>GoHighLevel integration syncs contacts and connects call outcomes to pipeline stages and follow-ups. SMS and WhatsApp activity appears on the contact timeline.</p></div>
      <div className="voxiq-integration-art"><CaseStudyImage src={assets + 'crm-v2.png'} alt="Voxiq integration workspace concept with GoHighLevel, Pipedrive, Zapier, REST API and contact field mapping" caption="CRM connections concept · fictional sample configuration" onExpand={expand} /></div>
      <div className="vq-principles">{[['GoHighLevel', 'Two-way contact sync; call outcomes trigger workflows, move pipeline stages and add channel activity to the contact timeline.'], ['Pipedrive', 'Move deal stages based on call outcomes so pipeline status reflects the conversation.'], ['Zapier', 'Route call events into connected apps and automations. The source describes a catalogue of 5,000+ apps.'], ['REST API', 'Connect internal systems, a custom CRM, a data warehouse or other custom builds.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>

    <section className="vq-coaching"><div className="vq-wrap vq-section"><div className="vq-section-heading"><div><span className="vq-eyebrow">BUILT FOR THE WHOLE CALL FLOOR</span><h2>Listen closely.<br/> Learn together.</h2></div><p>Live coaching, searchable recordings and a shared view of team activity help managers turn individual conversations into useful learning.</p></div><CaseStudyImage src={assets+'coaching-v2.png'} alt="Voxiq coaching interface concept with live call floor, listen whisper and barge controls, coaching playlists and a sample transcript" caption="Live coaching concept · fictional sessions and sample transcript" onExpand={expand}/><div className="vq-coaching-notes">{[['Listen, whisper, barge','Support a rep during the conversation with the coaching mode the situation needs.'],['Find the useful moment','Search transcripts by keyword and organise recordings into coaching playlists.'],['See the day clearly','Follow the team’s calling activity, connect rates and outcomes in one place.']].map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="vq-workspace"><div className="vq-section vq-wrap">
      <div className="vq-section-heading"><div><span className="vq-eyebrow">06 / GETTING STARTED</span><h2>From setup<br /> to the first dial.</h2></div><div><p>Voxiq describes an approximately 10-minute setup, with reps learning the tool in under 15 minutes.</p><p className="voxiq-source-note">Product-reported onboarding estimates from the {data.sourceDate} case study.</p></div></div>
      <ol className="voxiq-setup">{data.steps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol>
    </div></section>

    <div className="vq-wrap vq-responsive-visual"><CaseStudyImage src={assets+'responsive-showcase-v2.png'} alt="Two phone mockups illustrating Voxiq’s shared inbox and WhatsApp follow-up conversation" caption="Responsive web concepts · fictional sample conversations" onExpand={expand}/></div>

    <section id="outcomes" className="vq-section vq-wrap">
      <div className="vq-two-col"><div><span className="vq-eyebrow">07 / REPORTED OUTCOMES</span><h2>More time<br /> for live conversations.</h2></div><div><p className="vq-lead">Voxiq’s headline claim is a fourfold increase in daily dials, from 50 to 200 per rep.</p><p className="voxiq-source-note">These are Voxiq’s reported figures in the {data.sourceDate} case study. They are not independently verified customer results or guaranteed outcomes.</p></div></div>
      <div className="voxiq-dial-comparison" aria-label="Voxiq claims an increase from 50 to 200 daily calls per rep"><div><span>REPORTED BASELINE</span><strong>50 <small>calls / day</small></strong><div className="voxiq-volume-bar" /></div><ArrowRight size={32} aria-hidden="true" /><div><span>VOXIQ HEADLINE CLAIM</span><strong>200 <small>calls / day</small></strong><div className="voxiq-volume-bar" /></div></div>
      <div className="vq-table-scroll" tabIndex={0} role="region" aria-label="Product reported figures"><table className="vq-stack"><caption>Figures reported by Voxiq</caption><thead><tr><th scope="col">Area</th><th scope="col">Reported figure</th></tr></thead><tbody>{data.outcomes.map(([area, value]) => <tr key={area}><th scope="row">{area}</th><td>{value}</td></tr>)}</tbody></table></div>
      <div className="voxiq-measures"><span className="vq-eyebrow">WHAT TEAMS CAN MEASURE</span><div>{['Call volume', 'Connect rate', 'Average talk time', 'Outcome rate', 'Pipeline created'].map(metric => <span key={metric}><Check size={14} /> {metric}</span>)}</div></div>
    </section>

    <section className="vq-design vq-wrap vq-section"><div className="vq-section-heading"><div><span className="vq-eyebrow">VISUAL DIRECTION</span><h2>Clear on the screen.<br/> Calm through the day.</h2></div><p>Deep navy, bright cyan and open white surfaces keep the conversation in focus. Consistent controls give every next step a familiar place.</p></div><div className="vq-design-board"><div className="vq-type-tile"><span>CONVERSATION, FIRST.</span><strong>Hello.<br/> Let’s talk.</strong><div><span>Aa</span><p>Clear type.<br/> Room to focus.</p></div></div><div className="vq-system-tile"><div className="vq-palette">{[['#102C42','Deep navy'],['#087EAF','Signal blue'],['#8BD9EE','Ice cyan'],['#F5F9FC','Cloud white']].map(([color,title])=><div key={color}><span style={{background:color}}/><strong>{title}</strong><small>{color}</small></div>)}</div><div className="vq-ui-samples"><span>● Available</span><span>Call connected</span><span>Follow-up</span><span>Early access</span></div><div className="vq-control-samples"><span><Phone size={16}/> Start call</span><span><MessageSquare size={16}/> Reply</span><span>D <small>to dial</small></span></div></div></div></section>

    <section id="industries" className="voxiq-industries"><div className="vq-section vq-wrap">
      <div className="vq-section-heading"><div><span className="vq-eyebrow">08 / INDUSTRY SCENARIOS</span><h2>How different teams<br /> could use Voxiq.</h2></div><div><p>The same platform serves nine segments. The lead feature, daily workflow and measures of success change with the team.</p><p className="voxiq-source-note">Illustrative scenarios from the case study, not verified customer stories. Any figures and suggested plans below are attributed to the source.</p></div></div>
      <div className="voxiq-scenarios">{data.industries.map((industry, index) => <details key={industry.id} id={industry.id} className="voxiq-scenario"><summary><span className="voxiq-scenario-number">{String(index + 1).padStart(2, '0')}</span><h3>{industry.name}</h3><span className="voxiq-scenario-toggle" aria-hidden="true">+</span></summary><div className="voxiq-scenario-body"><p className="vq-lead">{industry.scenario}</p><div className="voxiq-scenario-columns"><div><h4>A day in the workflow</h4><ol>{industry.steps.map(step => <li key={step}>{step}</li>)}</ol></div><aside><h4>Features that matter</h4><p>{industry.features}</p><h4>Measure success by</h4><p>{industry.measures}</p><h4>Plan suggested in the source</h4><p>{industry.plan}</p>{industry.economics && <><h4>Illustrative agency economics</h4><p>{industry.economics}</p></>}</aside></div></div></details>)}</div>
      <details className="vq-data-model voxiq-industry-fit"><summary>Compare all nine industries at a glance</summary><div className="vq-table-scroll" tabIndex={0} role="region" aria-label="Industry comparison"><table className="vq-stack"><caption>Industry fit · illustrative source scenarios</caption><thead><tr>{['Industry', 'Main goal', 'Lead feature', 'Calling controls', 'Source plan'].map(heading => <th scope="col" key={heading}>{heading}</th>)}</tr></thead><tbody>{data.industryFit.map(row => <tr key={row[0]}><th scope="row">{row[0]}</th>{row.slice(1).map((value, i) => <td key={i}>{value}</td>)}</tr>)}</tbody></table></div></details>
    </div></section>

    <section id="pricing" className="vq-section vq-wrap">
      <div className="vq-section-heading"><div><span className="vq-eyebrow">09 / PRICING & PACKAGING</span><h2>Calling plans<br /> and optional add-ons.</h2></div><div><p>The source describes three calling plans, a separate SMS add-on and 10% off annual billing.</p><p className="voxiq-source-note">Pricing snapshot from {data.sourceDate}, in USD per seat per month. This is case-study context, not a live pricing quote.</p></div></div>
      <div className="voxiq-plans">{data.plans.slice(0, 3).map((plan, index) => <article key={plan.name} className={index === 1 ? 'voxiq-plan-featured' : ''}><span className="vq-eyebrow">{index === 1 ? 'GROWTH · MOST POPULAR IN SOURCE' : plan.name.replace('Calls – ', '')}</span><strong>{plan.price}<small>/ seat / month</small></strong><p>{plan.description}</p></article>)}</div>
      <div className="voxiq-sms"><div><Phone size={22} /><h3>SMS add-on</h3><strong>$70 <small>/ seat / month</small></strong></div><p>{data.plans[3].description}</p></div>
      <p className="voxiq-source-note">WhatsApp and the early-access AI Agent Caller are not assigned to a plan in the source. Call recordings begin on Growth; missed-call text-back requires the SMS add-on.</p>
      <div className="voxiq-agency"><div><span className="vq-eyebrow">FOR GOHIGHLEVEL AGENCIES</span><h3>Your name.<br /> Your clients. One dashboard.</h3><p>Agencies can rebrand Voxiq with their own name, logo and domain, manage client sub-accounts, and connect calling outcomes to each client’s existing GHL workflows.</p></div><div><dl><div><dt>Starter</dt><dd>Up to 5 clients</dd></div><div><dt>Growth</dt><dd>Up to 25 clients</dd></div><div><dt>Enterprise</dt><dd>Unlimited clients</dd></div></dl><p>Agency pricing is on request. The source’s margin example uses $49 wholesale and $149 resale per seat, with suggested resale of $97–197. These are illustrative figures.</p></div></div>
    </section>

    <section className="voxiq-product-view"><div className="vq-section vq-wrap"><div className="vq-section-heading"><div><span className="vq-eyebrow">10 / PRODUCT IN FOCUS</span><h2>A calling-first<br /> product experience.</h2></div><p>The Voxiq website introduces the platform through the rep’s daily workflow: dialing, AI assistance, multichannel follow-up and a live view of the team’s calls.</p></div><CaseStudyImage src={websiteImage} alt="Existing Voxiq website screenshot featuring a sales representative, a live call panel and the platform’s marketing message" caption="Existing Voxiq website screenshot · figures shown are product marketing claims" onExpand={expand} /></div></section>

    <section className="vq-cta"><div className="vq-wrap"><div className="vq-footer-logo"><img src={logo} alt="Voxiq" width="150" height="59"/></div><span className="vq-eyebrow">YOUR NEXT PRODUCT STARTS HERE</span><h2>Let’s build the next<br /> great conversation.</h2><div><Link to="/contact/" className="vq-button">Build with BytechSol <ArrowUpRight size={20} /></Link><Link to="/portfolio/" className="vq-text-link">Back to all projects <ArrowRight size={18} /></Link></div></div></section>
    {expandedImage && <div className="voxiq-lightbox" role="dialog" aria-modal="true" aria-label="Expanded Voxiq case study image" ref={dialog}><div className="voxiq-lightbox-toolbar"><span>{expandedImage.caption}</span><button onClick={()=>setZoomed(!zoomed)} aria-pressed={zoomed} aria-label={zoomed?'Fit image to screen':'Zoom image'}>{zoomed?<ZoomOut size={21}/>:<ZoomIn size={21}/>}</button><button id="voxiq-close-image" aria-label="Close expanded image" onClick={()=>setExpandedImage(null)}><X size={24}/></button></div><div className={'voxiq-lightbox-canvas'+(zoomed?' is-zoomed':'')} onClick={event=>{if(event.target===event.currentTarget)setExpandedImage(null);}}><img src={expandedImage.src} alt={expandedImage.alt}/></div></div>}
  </main>;
}
