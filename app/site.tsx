"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  ["Artificial Intelligence & Machine Learning", "Production-ready AI, intelligent automation and decision systems built around measurable business outcomes.", "AI"],
  ["Custom Software Development", "Secure web, mobile and enterprise platforms engineered for scale, reliability and adoption.", "SW"],
  ["Cybersecurity Solutions", "Risk-led security architecture, threat resilience and compliance for critical digital operations.", "CS"],
  ["Data Analytics & Insights", "Connected data platforms, predictive models and dashboards that turn complexity into action.", "DA"],
  ["Cloud Infrastructure & Workflow Automation", "Cloud modernization and automated workflows that improve speed, control and resilience.", "CL"],
  ["FinTech Solutions", "Secure financial platforms, payment workflows and intelligent controls for modern institutions.", "FT"],
  ["Research & Development", "Rapid discovery, prototyping and applied research that de-risks ambitious technology bets.", "RD"],
  ["Digital Transformation Services", "End-to-end strategy, product delivery and change enablement for lasting transformation.", "DX"],
];

const cases = [
  { title: "Intelligent workforce operations, unified", sector: "Workforce technology", result: "One operating view", text: "A multi-platform workforce suite connecting time, attendance, leave and operational insight across distributed teams.", tone: "blue", image: "/workforce technology.png" },
  { title: "Arabic documents transformed with AI", sector: "Language intelligence", result: "Faster review cycles", text: "OCR and translation workflows designed to preserve document meaning, structure and human oversight at scale.", tone: "violet", image: "/language intelligence.png" },
  { title: "Recruitment rebuilt around real workflows", sector: "Talent technology", result: "Less hiring friction", text: "A role-aware recruitment platform connecting candidate pipelines, collaboration and operational control.", tone: "green", image: "/talent technology.png" },
];

const insights = [
  ["AI strategy", "From AI pilots to operating advantage: the governance layer most teams miss", "7 min read", "/AI Strategy.png"],
  ["Cybersecurity", "Secure by design: why custom software changes the compliance equation", "6 min read", "/cybersecurity.png"],
  ["Cloud", "Modernization without disruption: a practical path out of legacy complexity", "8 min read", "/cloud.png"],
  ["Data", "The bias–variance tradeoff, explained for business decision-makers", "5 min read", "/insights page/ins4.png"],
  ["Product", "How to build SaaS platforms that scale beyond the first release", "9 min read", "/insights page/ins5.png"],
  ["Transformation", "Turning fragmented operations into a measurable digital roadmap", "7 min read", "/insights page/ins6.png"],
];

const industries = ["Government & public sector", "Financial services", "Healthcare", "Technology", "Manufacturing", "Transportation & logistics"];

const products = [
  {name:"sstrack.io", tag:"Workforce intelligence", text:"A cross-platform workforce management product for distributed, office, field and job-site teams, available across web, desktop, mobile and Chrome.", stack:"React · Node.js · Python", href:"https://www.sstrack.io", logo:"/products page/SSTrack-logo.png", logoWidth:1126, logoHeight:201},
  {name:"ClickHR", tag:"Recruitment operations", text:"A centralized recruitment platform for job posting, applicant tracking, interview management, role-based approvals and hiring collaboration.", stack:"Multi-organization SaaS", href:"https://www.click-hr.com", logo:"/products page/clickHR-logo.png", logoWidth:858, logoHeight:167},
  {name:"VerdeBooks", tag:"Payroll operations", text:"Payroll management software supporting pay stubs, employee hours and tax-filing workflows with practical business integrations.", stack:"Payroll · Time · Records", href:"https://verdebooks.com", logo:"/products page/verdebookd-logo.png", logoWidth:2112, logoHeight:372},
  {name:"Camel Translator", tag:"Arabic language intelligence", text:"An AI-assisted Arabic OCR and translation workflow designed for complex documents, human review and layout-aware processing.", stack:"OCR · Translation · AI", href:"/contact", logo:"/products page/CamelTranslator-logo.png", logoWidth:454, logoHeight:110},
];

const leaders = [
  ["Kamran Tariq","Chief Executive Officer"],["Sameera Ajaz","Chief Operating Officer & VP Operations"],["Ibraheem Idrees","Chief Technology Officer"],["Syed Abrar Hussain","Director, Sales"],["Bijan Dey","Senior Vice President"],["Hayat Ahmed","Technical Team Lead"]
];

const serviceSlugs:Record<string,number>={
  "ai-machine-learning":0,"software-development":1,"cybersecurity":2,"data-analytics":3,
  "cloud-automation":4,"fintech":5,"research-development":6,"digital-transformation":7
};

const serviceImages = [
  "/services page/ser1.jpg",
  "/services page/ser2.jpg",
  "/services page/ser3.jpg",
  "/services page/ser4.jpg",
  "/services page/ser5.jpg",
  "/services page/ser6.jpg",
  "/services page/ser7.jpg",
  "/services page/ser8.jpg",
];

const industryImages = [
  "/industry page/indus1.png",
  "/industry page/indus2.png",
  "/industry page/indus3.png",
  "/industry page/indus4.png",
  "/industry page/indus5.png",
  "/industry page/indus6.png",
];

const caseStudyImages = [
  "/case study page/c1.png",
  "/case study page/c2.png",
  "/case study page/c3.png",
  "/case study page/c4.png",
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

type ValueIconName = "globe" | "ownership" | "engineering" | "people";

function ValueIcon({name}:{name:ValueIconName}) {
  return <span className="manifestoIcon" aria-hidden="true"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {name === "globe" && <><circle cx="12" cy="12" r="8.5"/><path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.4 5.1 3.4 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.6 8.6 8.6 12s1.2 6.2 3.4 8.5"/></>}
    {name === "ownership" && <><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.2"/><path d="M12 3.5V7M12 17v3.5M3.5 12H7M17 12h3.5"/></>}
    {name === "engineering" && <><path d="M12 3.2 19 6v5.2c0 4.3-2.8 7.7-7 9.6-4.2-1.9-7-5.3-7-9.6V6l7-2.8Z"/><path d="m8.8 12 2.1 2.1 4.5-4.6"/></>}
    {name === "people" && <><circle cx="9" cy="9" r="3"/><circle cx="16.5" cy="10" r="2.3"/><path d="M3.8 19c.5-3.1 2.3-4.8 5.2-4.8s4.7 1.7 5.2 4.8M14.2 15.2c.7-.5 1.5-.7 2.5-.7 2.2 0 3.5 1.3 3.9 3.7"/></>}
  </svg></span>;
}

const aboutValues:{title:string;text:string;icon:ValueIconName}[] = [
  {title:"Global reach",text:"Cross-border delivery with local awareness.",icon:"globe"},
  {title:"Ownership mindset",text:"Senior attention, candid advice, shared responsibility.",icon:"ownership"},
  {title:"Engineering rigor",text:"Secure, scalable systems designed to endure.",icon:"engineering"},
  {title:"Human progress",text:"Technology measured by the value it creates for people.",icon:"people"},
];

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <Link className="brand brandLogo" href="/" aria-label="i8is home"><Image src="/logoq-04-04.png" alt="i8is inc." width={522} height={346} priority /></Link>
    <button className="menuBtn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? "Close" : "Menu"}</button>
    <nav className={open ? "nav open" : "nav"}>
      <Link href="/services">Services</Link><Link href="/products">Products</Link><Link href="/industries">Industries</Link><Link href="/case-studies">Case studies</Link><Link href="/insights">Insights</Link><Link href="/about">About</Link>
    </nav>
    <Link className="contactTop" href="/contact">Let’s talk <Arrow /></Link>
  </header>;
}

function Footer() { return <footer>
  <div className="footerLead"><p>Ready to move from ambition to outcome?</p><h2>Let’s build what’s next.</h2><Link href="/contact" className="circleArrow">↗</Link></div>
  <div className="footerGrid"><div><Image className="footerLogo" src="/logoq-06.png" alt="i8is inc." width={148} height={98} /><p>Technology, talent and transformation<br/>for organizations that cannot stand still.</p></div><div><b>Explore</b><Link href="/services">Services</Link><Link href="/products">Products</Link><Link href="/industries">Industries</Link><Link href="/case-studies">Case studies</Link><Link href="/insights">Insights</Link></div><div><b>Company</b><Link href="/about">About</Link><Link href="/leadership">Leadership</Link><Link href="/trust">Trust center</Link><Link href="/procurement">Procurement</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div><div><b>Global offices</b><span>Riyadh · Saudi Arabia</span><span>Woodbridge · Canada</span><span>Houston · United States</span><a href="mailto:contact@i8is.com">contact@i8is.com</a><span>+1 647 930 0988</span></div></div>
  <div className="copyright"><span>© 2026 i8is Inc. All rights reserved.</span><span><Link href="/privacy">Privacy</Link> · <Link href="/accessibility">Accessibility</Link> · <Link href="/terms">Terms</Link></span></div>
  </footer> }

function Home() { return <>
  <section className="hero heroArtwork"><Image className="heroBgImage" src="/Hero Section.jpg" alt="" fill priority sizes="100vw" /><div className="heroCopy"><div className="eyebrow heroKicker">Enterprise technology. Built for impact.</div><h1>Own the future<br/>before it arrives.</h1><p>i8is combines AI, secure engineering and operational expertise to help<br/>governments and enterprises turn complex ambition into measurable<br/>progress.</p><div className="actions"><Link className="btn primary" href="/contact">Talk to an expert <Arrow /></Link><Link className="textLink" href="/case-studies">See client outcomes →</Link></div></div></section>
  <section className="proof"><div><strong>3</strong><span>strategic regions</span></div><div><strong>8</strong><span>integrated capabilities</span></div><div><strong>25+</strong><span>active initiatives delivered</span></div><p>Global perspective.<br/><b>Local accountability.</b></p></section>
  <section className="intro section"><div className="introVisual"><div className="kicker">What we do</div><Image className="introImage" src="/what we do.png" alt="Connected technology workflow" width={1487} height={1058} /></div><div><h2>Strategy is only valuable<br/>when it ships.</h2><p>We work across the full transformation lifecycle—from defining the opportunity and designing the operating model to engineering, securing and scaling the solution.</p></div></section>
  <section className="serviceGrid">{services.map((s,i)=><Link href="/services" className="serviceCard" key={s[0]}><div><span className="serviceNo">0{i+1}</span><span className="serviceIcon">{s[2]}</span></div><h3>{s[0]}</h3><p>{s[1]}</p><Arrow /></Link>)}</section>
  <section className="darkBand"><div className="darkContent"><div className="kicker focusKicker">Where we focus</div><h2>Deep context.<br/><em>Decisive delivery.</em></h2><div className="industryList">{industries.map((x,i)=><Link href="/industries" key={x}><span>0{i+1}</span>{x}<Arrow /></Link>)}</div></div><div className="darkVisual"><Image src="/cc2.png" alt="Connected industry technology platform" width={1064} height={908} /></div></section>
  <section className="cases section"><div className="sectionHead"><div><div className="kicker selectedWorkKicker">Selected work</div><h2 className="selectedWorkTitle">Outcomes, not output.</h2></div><Link className="textLink" href="/case-studies">View all case studies →</Link></div><div className="caseGrid">{cases.map(c=><article className={`caseCard ${c.tone}`} key={c.title}><div className="caseArt"><Image src={c.image} alt={c.title} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" /><span>{c.result}</span></div><small>{c.sector}</small><h3>{c.title}</h3><p>{c.text}</p><Link href="/case-studies" aria-label={`Read ${c.title}`}><Arrow /></Link></article>)}</div></section>
  <section className="insightStrip"><div><div className="kicker">Ideas that move business</div><h2><span className="nowrap">Signal over</span><br/>noise.</h2></div>{insights.slice(0,3).map(x=><Link href="/insights" className="insightCard" key={x[1]}><div className="insightImage"><Image src={x[3]} alt={x[1]} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw" /></div><small>{x[0]} · {x[2]}</small><h3>{x[1]}</h3><Arrow /></Link>)}</section>
  </> }

function PageHero({kicker,title,body}:{kicker:string,title:string,body:string}) { return <section className="pageHero"><div className="kicker heroKicker">{kicker}</div><h1>{title}</h1><p>{body}</p></section> }

function Services() { const paths=["ai-machine-learning","software-development","cybersecurity","data-analytics","cloud-automation","fintech","research-development","digital-transformation"]; return <div className="servicesPage"><section className="pageHero"><div className="kicker heroKicker">End-to-end capabilities</div><h1>From first question to lasting advantage.</h1><p>Eight connected capabilities. One accountable partner. We pair strategic clarity with hands-on engineering to deliver secure, scalable change.</p></section><section className="serviceDetail">{services.map((s,i)=><article key={s[0]}><span>0{i+1}</span><div><h2>{s[0]}</h2><p>{s[1]}</p><ul><li>Strategy and discovery</li><li>Architecture and implementation</li><li>Optimization and managed evolution</li></ul></div><div className="serviceDetailImage" style={{ position: "relative" }}><Image src={serviceImages[i]} alt={s[0]} fill sizes="(max-width: 600px) 88vw, (max-width: 900px) 44vw, 260px" /></div><Link href={`/${paths[i]}`} aria-label={`Explore ${s[0]}`}><Arrow /></Link></article>)}</section></div> }

function ServicePage({index}:{index:number}) {
  const s=services[index];
  const content=[
    ["AI opportunity and readiness assessment","Custom LLM and machine-learning solutions","Intelligent document and workflow automation","Responsible AI governance and human oversight"],
    ["Web applications and SaaS platforms","Mobile applications for iOS and Android","APIs, integrations and enterprise systems","Cloud-native architecture, QA and DevOps"],
    ["Security architecture and zero-trust planning","Application and cloud security reviews","Threat detection and response workflows","Compliance-aware engineering and remediation"],
    ["Data strategy and platform architecture","Predictive analytics and forecasting","Executive dashboards and visualization","Real-time pipelines and decision intelligence"],
    ["AWS, Azure and Google Cloud architecture","CI/CD and infrastructure automation","Workflow orchestration and system integration","Performance, resilience and cost optimization"],
    ["Financial workflow and platform engineering","Payment and transaction experiences","Fraud-risk and compliance automation","Secure APIs and data-driven controls"],
    ["Technical feasibility and rapid prototyping","Applied AI and blockchain research","Proofs of concept and validation","Product discovery and innovation roadmaps"],
    ["Operating-model and technology strategy","Legacy modernization and process redesign","Digital product and service delivery","Adoption, change and measurable value realization"]
  ][index];
  return <><PageHero kicker={`Capability 0${index+1}`} title={s[0]} body={s[1]}/><section className="deepPage"><div><div className="kicker">What we deliver</div><h2>Built around the outcome—not the technology trend.</h2><p>Every engagement begins with the operating problem, the people affected and the evidence needed to prove value. We then design the smallest credible path from discovery to production.</p></div><div className="deliverables">{content.map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3><p>Focused consulting, practical implementation and clear handover designed around your environment.</p></article>)}</div></section><Process/><FAQ/><CTA/></>;
}

function Process(){return <section className="process"><div className="kicker">How we work</div><h2>Clarity at every stage.</h2><div>{[["01","Discover","Define objectives, users, constraints and success measures."],["02","Design","Shape the experience, architecture and delivery roadmap."],["03","Deliver","Build iteratively with continuous testing and stakeholder visibility."],["04","Evolve","Launch, measure, optimize and transfer knowledge."]].map(x=><article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>}
function FAQ(){return <section className="faq"><div><div className="kicker">Frequently asked</div><h2>What clients ask first.</h2></div><div>{[["Can i8is work with our existing systems?","Yes. Discovery includes your current architecture, vendors, data and constraints so modernization can be phased without unnecessary disruption."],["Do you provide strategy or implementation?","Both. i8is can lead discovery and planning, implement the solution, or work alongside internal and incumbent teams."],["Can engagements start with a proof of concept?","Yes. A time-boxed prototype or proof of concept is often the right way to validate technical feasibility and business value before scaling."],["How do you approach security?","Security, privacy and operational resilience are considered during discovery, architecture, development, testing and deployment—not added at the end."]].map(x=><details key={x[0]}><summary>{x[0]}<span>+</span></summary><p>{x[1]}</p></details>)}</div></section>}
function CTA(){return <section className="miniCta"><h2>Have a challenge worth solving?</h2><p>Bring us the outcome, constraints and timing. We’ll help define a credible next move.</p><Link className="btn primary" href="/contact">Talk to an expert <Arrow/></Link></section>}

function Products(){return <><PageHero kicker="Products & platforms" title="We do not only advise. We build." body="i8is-owned and engineered products turn recurring operational problems into practical platforms for workforce, recruitment, payroll and language intelligence."/><section className="productGrid">{products.map((p,i)=><article key={p.name}><div className="productCardMain"><small>0{i+1} · {p.tag}</small><div className={`productLogo productLogo${i+1}`}><Image className="productLogoImage" src={p.logo} alt={`${p.name} logo`} width={p.logoWidth} height={p.logoHeight} sizes="(max-width: 900px) 88vw, 620px" /></div><h2 className="productName">{p.name}</h2><p>{p.text}</p></div><div className="productCardFooter"><b>{p.stack}</b><a href={p.href} target={p.href.startsWith("http")?"_blank":undefined} rel="noreferrer">Explore product <Arrow/></a></div></article>)}</section><section className="suite"><div className="kicker">Connected operations</div><h2>One portfolio. Multiple operating problems solved.</h2><p>The i8is product portfolio spans workforce visibility, recruitment workflows, payroll operations and AI-assisted language processing. Products can stand alone or form part of a wider transformation program.</p></section><CTA/></>}

function Industries() { return <><PageHero kicker="Industry expertise" title="Technology works better when context comes first." body="We combine sector knowledge, delivery discipline and modern technology to solve the operational realities behind transformation."/><section className="industryCards">{industries.map((x,i)=><article key={x}><div className="industryImage"><Image className="industryPhoto" src={industryImages[i]} alt={x} width={1689} height={941} sizes="(max-width: 900px) 100vw, 50vw" /></div><div className="industryCopy"><span>0{i+1}</span><h2>{x}</h2><p>{["Secure digital services, citizen experiences and mission-ready operations.","Resilient platforms, intelligent controls and trusted customer journeys.","Connected care operations, protected data and human-centered experiences.","Modern products, scalable engineering and high-performance technical teams.","Automation, visibility and safer, more productive industrial operations.","Real-time coordination across complex networks, assets and workforces."][i]}</p><Link href="/contact">Explore solutions <Arrow /></Link></div></article>)}</section></> }

function CaseStudies() { const verified=[
  {title:"Integrated employee management and operations dashboard",sector:"Workforce operations",text:"i8is developed employee-management modules and a unified operations dashboard to improve attendance tracking, leave workflows and visibility across internal business operations.",challenge:"Scattered operational data",approach:"Connected modules and interfaces",impact:"A unified operating view",tone:"blue"},
  {title:"AI-assisted review for faster team alignment",sector:"Enterprise delivery",text:"i8is introduced AI-assisted review practices using tools including Gemini and ChatGPT to analyze shared materials, extract action points and support alignment around fast-moving development work.",challenge:"High-volume project material",approach:"Structured, human-reviewed AI",impact:"Clearer action and alignment",tone:"orange"},
  {title:"sstrack.io: cross-platform workforce visibility",sector:"Workforce technology",text:"i8is engineered a workforce management product across web, desktop, mobile and Chrome, supporting teams working remotely, in offices, in the field and at specific job sites.",challenge:"Distributed team visibility",approach:"React, Node.js and Python",impact:"Connected workforce oversight",tone:"violet"},
  {title:"ClickHR: recruitment workflows in one platform",sector:"Talent technology",text:"ClickHR centralizes job posting, applicant tracking and interview management with hierarchical access, registration approvals, archiving and operational notifications.",challenge:"Fragmented hiring workflows",approach:"Role-based recruitment SaaS",impact:"More structured hiring operations",tone:"green"}
  ]; return <><PageHero kicker="Client and product outcomes" title="Complex work. Clear evidence." body="Published examples based on i8is’s current portfolio and delivery record. Quantified performance claims are added only after client approval."/><section className="casePage">{verified.map((c,i)=><article key={c.title}><div className={`caseArt ${c.tone}`}><Image src={caseStudyImages[i]} alt={c.title} fill sizes="(max-width: 900px) 100vw, 42vw" /><span>{c.impact}</span></div><div><small>{c.sector} · 0{i+1}</small><h2>{c.title}</h2><p>{c.text}</p><div className="caseMeta"><span>Challenge<br/><b>{c.challenge}</b></span><span>Approach<br/><b>{c.approach}</b></span><span>Outcome<br/><b>{c.impact}</b></span></div><Link href="/contact" className="textLink">Discuss a similar challenge →</Link></div></article>)}</section><section className="evidenceNote"><b>Evidence standard</b><p>i8is does not publish invented ROI figures. Client names, quotations and quantified results are released only when approved for public use.</p></section></> }

function Insights() { return <><PageHero kicker="Insights" title="Useful thinking for leaders building what’s next." body="Practical perspectives on AI, software, cyber resilience, cloud, data and enterprise transformation—written for decisions, not impressions."/><section className="featuredInsightSplit"><div className="featuredInsightText"><small>Featured · AI strategy · 10 min read</small><h2>The operating model for responsible, scalable enterprise AI</h2><p>Moving beyond isolated pilots requires clear ownership, trustworthy data, measurable use cases and governance that accelerates good decisions.</p><Link href="/enterprise-ai-operating-model">Read the executive brief <Arrow /></Link></div><div className="featuredInsightMedia"><Image className="featuredInsightPhoto" src="/insights page/insight1.png" alt="Enterprise AI operating model visual" fill sizes="(max-width: 900px) 100vw, 54vw" priority /></div></section><section className="insightGrid">{insights.map((x,i)=><article className={x[3]?"insightGridCard hasImage":"insightGridCard"} key={x[1]}>{x[3]&&<div className="insightGridImage"><Image className="insightGridPhoto" src={x[3]} alt={x[1]} width={1536} height={1024} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" /></div>}<div className="insightGridCopy"><small>{x[0]} · {x[2]}</small><h2>{x[1]}</h2><p>{["A practical framework for scaling AI with accountability.","How architecture choices create stronger defenses.","Prioritize value while protecting continuity.","A clear guide to better predictive model decisions.","Principles for durable product and platform design.","Connect investment to operating outcomes."][i]}</p><Link href={i===0?"/enterprise-ai-operating-model":"/contact"}>{i===0?"Read insight":"Request the brief"} <Arrow /></Link></div></article>)}</section></> }

function Article(){return <><article className="article"><div className="kicker">AI strategy · Executive brief</div><h1>The operating model for responsible, scalable enterprise AI</h1><p className="lede">AI pilots are easy to start and hard to scale. The difference is rarely the model alone—it is the operating system around the model.</p><div className="articleBody"><aside><b>In this brief</b><a href="#value">Start with value</a><a href="#ownership">Assign ownership</a><a href="#governance">Govern for speed</a><a href="#scale">Design to scale</a></aside><div><h2 id="value">Start with business value, not model selection</h2><p>Strong AI programs begin with a constrained operating problem: a decision that takes too long, a document process that consumes specialist time, or a workflow where important signals are repeatedly missed. Define the baseline, the user and the acceptable risk before choosing technology.</p><h2 id="ownership">Give every system a human owner</h2><p>AI output needs accountable ownership. Product, operational, data, security and legal roles should be explicit. Human review is not a temporary weakness; for sensitive workflows, it is part of the intended control design.</p><h2 id="governance">Governance should accelerate safe decisions</h2><p>Effective governance establishes which use cases may proceed, what data can be used, how output is evaluated, when escalation is required and how incidents are handled. A lightweight risk tier allows low-risk experiments to move faster while sensitive systems receive deeper review.</p><h2 id="scale">Design the path from pilot to production</h2><p>Production systems need monitoring, cost controls, data-quality checks, evaluation datasets, change management and user feedback. Teams should plan for those requirements during discovery instead of rebuilding the pilot after it demonstrates value.</p><h2>A practical first 30 days</h2><ol><li>Prioritize three high-value workflows.</li><li>Establish baseline measures and responsible owners.</li><li>Assess data, integration and risk constraints.</li><li>Prototype one constrained use case.</li><li>Define the controls and production roadmap.</li></ol><CTA/></div></div></article></>}

function About() { return <><PageHero kicker="About i8is" title="Built to make ambitious change feel possible." body="i8is is a global technology and workforce solutions company headquartered in Riyadh, with operations across Canada, the United States and Pakistan."/><section className="manifesto"><blockquote>“We believe the best technology partner does more than advise. They stand beside you, build with you and stay accountable to the outcome.”</blockquote><div className="manifestoValues">{aboutValues.map(value=><div className="manifestoValue" key={value.title}><ValueIcon name={value.icon}/><div><strong>{value.title}</strong><p>{value.text}</p></div></div>)}</div></section><section className="timeline aboutStory"><div className="aboutStoryMedia"><Image className="aboutStoryImage" src="/about page/ab1 (1).jpg" alt="Global team collaborating toward shared success" fill sizes="100vw" /></div><div className="aboutStoryCopy"><div className="kicker">Our story</div><h2><span>Independent by design.</span><span>Global by ambition.</span></h2><p>We bring consultants, designers, engineers, security specialists and operational leaders together around one goal: turning a client’s most consequential ideas into working, valuable systems.</p></div></section></> }

function Leadership(){return <><PageHero kicker="Leadership" title="Accountability starts at the top." body="i8is leadership brings together enterprise operations, technology, delivery, sales and workforce expertise across our international business."/><section className="leaderGrid">{leaders.map((x,i)=><article key={x[0]}><div className="leaderMark">{x[0].split(" ").map(n=>n[0]).join("")}</div><small>0{i+1}</small><h2>{x[0]}</h2><p>{x[1]}</p></article>)}</section><section className="leadNote"><h2>Expertise should be visible.</h2><p>Detailed biographies, certifications and professional profiles will be published after individual review and approval.</p></section></>}

function Trust(){return <><PageHero kicker="Trust center" title="Trust is an engineering requirement." body="Our approach is built around security, privacy, quality, accessibility and responsible use of AI throughout the delivery lifecycle."/><section className="trustGrid">{[["Security by design","Threat modeling, least-privilege access, secure development practices and testing are considered from architecture through release."],["Responsible AI","Human accountability, data suitability, documented use cases and proportionate controls guide AI-assisted systems."],["Privacy awareness","Data minimization, purpose limitation and appropriate access controls are considered in system and workflow design."],["Quality engineering","Iterative QA, acceptance criteria, cross-platform validation and release discipline reduce operational surprises."],["Accessibility","Interfaces are designed with semantic structure, keyboard access, contrast and readable content in mind."],["Operational resilience","Monitoring, backup, incident handling and continuity requirements are defined according to each client environment."]].map((x,i)=><article key={x[0]}><span>0{i+1}</span><h2>{x[0]}</h2><p>{x[1]}</p></article>)}</section><section className="disclosure"><b>Compliance statement</b><p>This page describes delivery practices, not third-party certification. Formal certifications and audited controls will only be displayed when verified.</p><a href="mailto:contact@i8is.com?subject=Security%20questionnaire">Request a security conversation <Arrow/></a></section></>}

function Procurement(){return <><PageHero kicker="Public-sector procurement" title="Structured to support government delivery." body="i8is publishes the procurement vehicles and security positioning currently presented by its Canadian operations."/><section className="procureGrid">{[["TBIPS — Government of Canada","Tier 1 and Tier 2 qualified stream holder for task-based informatics professional services and enterprise IT talent."],["ProServices","Pre-qualified professional-services procurement channel supporting streamlined access to specialized consultants for requirements below the published threshold."],["Ontario Vendor of Record","Approved vendor positioning under provincial master service arrangements for technology solutions and workforce staffing."],["Security and clearances","The live i8is site states participation in the PSPC Contract Security Program and access to personnel with Reliability and Secret clearances."],["PIPEDA-aware delivery","Canadian workforce and information-handling practices are positioned around applicable privacy responsibilities."],["Government staffing","Role-based sourcing, screening, placement, onboarding and continuity support for public-facing and mission-critical environments."]].map((x,i)=><article key={x[0]}><span>0{i+1}</span><h2>{x[0]}</h2><p>{x[1]}</p></article>)}</section><section className="evidenceNote"><b>Buyer verification</b><p>Procurement eligibility, security status and applicable contracting limits should be confirmed for each opportunity before proposal submission.</p></section><CTA/></>}

function Contact({careers=false}:{careers?:boolean}) { return <><PageHero kicker={careers?"Careers":"Contact"} title={careers?"Do the work that moves things forward.":"Bring us the challenge that matters."} body={careers?"Join a multidisciplinary team building secure, useful technology for organizations across three regions.":"Tell us what you need to change, build or scale. We’ll connect you with the right i8is expert."}/><section className="contactPage"><div><h2>{careers?"Open talent network":"Start a conversation"}</h2><p>{careers?"We welcome engineers, designers, project leaders, analysts and specialists who care about outcomes and ownership.":"A useful first conversation starts with the business outcome—not a list of technologies."}</p><a href="mailto:contact@i8is.com">contact@i8is.com ↗</a><a href="tel:+16479300988">+1 647 930 0988</a></div><form onSubmit={e=>e.preventDefault()}><label>Name<input placeholder="Your full name"/></label><label>Work email<input type="email" placeholder="you@company.com"/></label><label>{careers?"Area of expertise":"How can we help?"}<select><option>Select one</option><option>AI & data</option><option>Software & cloud</option><option>Cybersecurity</option><option>Digital transformation</option><option>Workforce solutions</option></select></label><label>Context<textarea placeholder="Tell us about your goals, timing and current challenge."/></label><button className="btn primary">{careers?"Join our talent network":"Send inquiry"} <Arrow /></button></form></section></> }

export default function Site({page}:{page:string}) {
  const content:Record<string,React.ReactNode>={home:<Home/>,services:<Services/>,products:<Products/>,industries:<Industries/>,"case-studies":<CaseStudies/>,insights:<Insights/>,"enterprise-ai-operating-model":<Article/>,about:<About/>,leadership:<Leadership/>,trust:<Trust/>,procurement:<Procurement/>,contact:<Contact/>,careers:<Contact careers/>};
  if(page in serviceSlugs) return <><Header/><main><ServicePage index={serviceSlugs[page]}/></main><Footer/></>;
  return <div className={page === "home" ? "homePage" : undefined}><Header/><main>{content[page] || <Home/>}</main><Footer/></div>;
}
