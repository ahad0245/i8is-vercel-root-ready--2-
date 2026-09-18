import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../site";
import styles from "./industry-detail.module.css";
import governmentStyles from "./government-detail.module.css";
import financialStyles from "./financial-detail.module.css";
import healthcareStyles from "./healthcare-detail.module.css";
import technologyStyles from "./technology-detail.module.css";
import manufacturingStyles from "./manufacturing-detail.module.css";
import logisticsStyles from "./logistics-detail.module.css";
import modernStyles from "./modern-industry-detail.module.css";
import visualStyles from "./capability-visual.module.css";

const industries = [
  { slug: "government-public-sector", name: "Government and public sector", title: "Secure digital transformation for government organizations.", lead: "Government organizations need technology that is secure, accessible, dependable and accountable.", copy: ["i8is helps public-sector teams modernize services, improve internal operations, connect information and build digital systems that support better outcomes for the people and teams they serve."], priorities: ["Fragmented government systems", "Manual administrative workflows", "Legacy technology", "Disconnected operational data", "Workforce coordination", "Accessibility requirements", "Cybersecurity and privacy risk", "Difficulty measuring service performance"], image: "/industry page/indus1.png" },
  { slug: "financial-services", name: "Financial services", title: "Secure and resilient technology for financial services.", lead: "Financial institutions require accuracy, security, resilience and customer trust at every stage of the operating journey.", copy: ["i8is helps financial-services organizations improve platforms, workflows, controls and customer experiences while managing technology and operational risk.", "Our work supports organizations that need reliable systems for financial operations, payments, reporting, customer service and internal decision-making."], priorities: ["Secure financial platforms", "Payment workflows", "Intelligent controls", "Customer experience", "Data and reporting", "Operational resilience", "Workflow automation", "Compliance-aware engineering"], image: "/industry page/indus2.png" },
  { slug: "healthcare", name: "Healthcare", title: "Connected technology for better healthcare operations.", lead: "Healthcare organizations need connected workflows, protected information and digital experiences that support both professionals and the people they serve.", copy: ["i8is helps healthcare teams improve operational coordination, information visibility and technology usability.", "We design solutions around the practical realities of healthcare environments, including multiple stakeholders, sensitive information, complex workflows and the need for dependable access to accurate data."], priorities: ["Connected care operations", "Protected information", "Workforce coordination", "Workflow automation", "Data visibility", "Human-centered digital experiences", "Secure system integration", "Operational reporting"], image: "/industry page/indus3.png" },
  { slug: "technology", name: "Technology", title: "Scalable engineering for technology companies.", lead: "Technology companies need reliable engineering, scalable systems and experienced teams that can move quickly without creating unnecessary complexity.", copy: ["i8is supports technology organizations with product engineering, cloud infrastructure, data, cybersecurity and delivery expertise.", "We help technology teams build new products, improve existing platforms, strengthen technical foundations and deliver reliable experiences for their users."], priorities: ["Product development", "Platform engineering", "Cloud modernization", "Technical team support", "Cybersecurity", "Data and analytics", "SaaS delivery", "Quality engineering"], image: "/industry page/indus4.png" },
  { slug: "manufacturing", name: "Manufacturing", title: "Technology for safer and more productive manufacturing.", lead: "Manufacturing operations depend on visibility, reliable processes, workforce coordination and safe execution.", copy: ["i8is helps manufacturing organizations use automation, data and software to improve operational control and productivity.", "Our solutions can connect people, processes and information so teams can identify issues earlier, coordinate work more effectively and make better operational decisions."], priorities: ["Workflow automation", "Operational dashboards", "Workforce visibility", "Industrial data", "Process improvement", "Safety and resilience", "Asset and task coordination", "Performance reporting"], image: "/industry page/indus5.png" },
  { slug: "transportation-logistics", name: "Transportation and logistics", title: "Connected technology for complex transportation networks.", lead: "Transportation and logistics organizations coordinate people, assets, schedules, locations and information across complex networks.", copy: ["i8is helps transportation and logistics teams improve coordination, visibility and decision-making across operational workflows.", "We support solutions that help organizations manage distributed workforces, connect operational data, automate repetitive processes and respond more effectively to changing conditions."], priorities: ["Workforce coordination", "Asset visibility", "Scheduling", "Operational data", "Workflow automation", "Real-time decision support", "Network coordination", "Resilient infrastructure"], image: "/industry page/indus6.png" },
];

export function generateStaticParams() { return industries.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return {};
  if (slug === "government-public-sector") return { title: "Government Technology and Digital Transformation Solutions | i8is", description: "i8is helps government and public-sector organizations modernize services, connect data, improve workflows and deliver secure digital experiences.", alternates: { canonical: "https://i8is.com/industries/government-public-sector/" } };
  if (slug === "financial-services") return { title: "Financial Services Technology and FinTech Solutions | i8is", description: "i8is helps financial-services organizations build secure platforms, improve payment workflows, connect data and strengthen operational control.", alternates: { canonical: "https://i8is.com/industries/financial-services/" } };
  if (slug === "healthcare") return { title: "Healthcare Technology and Digital Transformation Solutions | i8is", description: "i8is helps healthcare organizations improve operational workflows, protect information, connect data and build human-centered digital experiences.", alternates: { canonical: "https://i8is.com/industries/healthcare/" } };
  if (slug === "technology") return { title: "Technology Company Software Engineering and Cloud Solutions | i8is", description: "i8is supports technology companies with product engineering, SaaS development, cloud modernization, cybersecurity and technical delivery teams.", alternates: { canonical: "https://i8is.com/industries/technology/" } };
  if (slug === "manufacturing") return { title: "Manufacturing Technology, Automation and Workforce Solutions | i8is", description: "i8is helps manufacturing organizations improve operational visibility, automate workflows, coordinate workforces and build resilient technology systems.", alternates: { canonical: "https://i8is.com/industries/manufacturing/" } };
  if (slug === "transportation-logistics") return { title: "Transportation and Logistics Technology Solutions | i8is", description: "i8is helps transportation and logistics organizations improve workforce coordination, asset visibility, scheduling, data and workflow automation.", alternates: { canonical: "https://i8is.com/industries/transportation-logistics/" } };
  return { title: `${industry.name} Technology Solutions | i8is`, description: industry.lead, alternates: { canonical: `https://i8is.com/industries/${industry.slug}/` } };
}

function GovernmentPublicSectorPage() {
  const capabilities = [
    ["Digital service modernization", "We help teams improve digital services so users can access information and complete important tasks more clearly and efficiently."],
    ["Secure software delivery", "We design and build software with access control, testing, resilience and information protection considered throughout delivery."],
    ["Government workforce technology", "We help organizations improve workforce visibility, attendance, recruitment, approvals and operational coordination."],
    ["Data and reporting", "We connect operational data and create reporting tools that help leaders understand performance and make informed decisions."],
    ["Workflow automation", "We identify repetitive processes that can be simplified, automated or made more visible."],
    ["Technology strategy and delivery", "We help public-sector teams move from a technology requirement to a practical roadmap and an implementable solution."],
  ];
  const outcomes = ["Clearer digital services", "More connected workflows", "Better operational visibility", "Reduced manual administration", "Stronger information control", "Improved workforce coordination", "More reliable reporting", "Better foundations for future modernization"];

  return <><Header /><main className={styles.scope + " " + governmentStyles.scope + " " + modernStyles.scope + " " + visualStyles.scope}>
    <section className="detailHero"><div className="detailHeroCopy"><Link href="/industries" className="backLink">Back to all industries</Link><div className="kicker">Government and public sector</div><h1>Secure digital transformation for government organizations.</h1><p>Government organizations need technology that is secure, accessible, dependable and accountable.</p></div><div className="detailVisual"><Image src="/industry page/indus1.png" alt="Government technology and digital transformation" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></section>
    <section className="detailIntro"><div><div className="kicker">Government technology</div><h2>Built to support public outcomes.</h2></div><div><p>i8is helps public-sector teams modernize services, improve internal operations, connect information and build digital systems that support better outcomes for the people and teams they serve.</p></div></section>
    <section className="prioritySection"><div><div className="kicker">The challenges we help address</div><h2>Complex operations. Clearer services.</h2><p>Public-sector organizations often need to improve services while working within complex policies, legacy systems, procurement requirements and strict information-handling expectations.</p><p>Common challenges include:</p></div><ul>{industries[0].priorities.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section>
    <section className="governmentCapabilities"><div className="sectionHeading"><div className="kicker">How i8is can help</div><h2>Practical delivery for public-sector teams.</h2><div className="capabilityVisual"><Image src="/industry page/indus1.png" alt="Government digital services" fill sizes="(max-width: 900px) 88vw, 38vw" /></div></div><div className="capabilityGrid">{capabilities.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="governmentOutcomes"><div><div className="kicker">Typical project outcomes</div><h2>Better foundations for public service.</h2><p>Our work is designed to help organizations achieve outcomes such as:</p></div><ul>{outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></section>
    <section className="detailPrinciples"><div className="kicker">Security and accountability</div><h2>Government technology must support public trust.</h2><div className="securityCopy"><p>i8is considers security, privacy, accessibility, role-based access, operational continuity and responsible technology use throughout the delivery lifecycle.</p><p>Specific procurement, certification, clearance and compliance requirements must be confirmed for each engagement.</p></div></section>
  </main><Footer /></>;
}

function FinancialServicesPage() {
  const challenges = ["Aging platforms", "Manual payment and approval workflows", "Fragmented customer information", "Increasing cybersecurity risk", "Disconnected reporting", "Complex integrations", "Limited operational visibility", "Pressure to improve customer experience"];
  const capabilities = [
    ["Financial platform development", "We build and improve software platforms that support financial operations, records, workflows and customer-facing services."],
    ["Payment workflow automation", "We help organizations create clearer, more controlled workflows for payments, approvals, records and operational review."],
    ["Data and reporting", "We connect information from multiple systems to improve reporting, analysis and decision-making."],
    ["Security engineering", "We consider identity, access, data protection, secure development and resilience throughout the technology lifecycle."],
    ["Customer experience", "We help improve digital journeys so customers and employees can complete important tasks more clearly and reliably."],
    ["Modernization", "We help organizations improve legacy systems through practical, phased modernization that protects business continuity."],
  ];
  const outcomes = ["More reliable financial workflows", "Better operational control", "Improved reporting", "Stronger customer journeys", "Reduced manual processing", "Clearer approvals and accountability", "More resilient technology foundations", "Better visibility into risk and performance"];

  return <><Header /><main className={styles.scope + " " + financialStyles.scope + " " + modernStyles.scope + " " + visualStyles.scope}>
    <section className="detailHero"><div className="detailHeroCopy"><Link href="/industries" className="backLink">Back to all industries</Link><div className="kicker">Financial services</div><h1>Secure and resilient technology for financial services.</h1><p>Financial institutions operate in environments where accuracy, security, trust and resilience are essential.</p></div><div className="detailVisual"><Image src="/industry page/indus2.png" alt="Financial services technology" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></section>
    <section className="detailIntro"><div><div className="kicker">Financial technology</div><h2>Technology built for trust and control.</h2></div><div><p>i8is helps financial-services organizations improve platforms, customer journeys, internal workflows, reporting and technology controls.</p></div></section>
    <section className="prioritySection"><div><div className="kicker">The challenges we help address</div><h2>Control without unnecessary complexity.</h2><p>Financial-services organizations may need to manage:</p></div><ul>{challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section>
    <section className="financialCapabilities"><div className="sectionHeading"><div className="kicker">How i8is can help</div><h2>Practical technology for financial operations.</h2><div className="capabilityVisual"><Image src="/industry page/indus2.png" alt="Financial operations technology" fill sizes="(max-width: 900px) 88vw, 38vw" /></div></div><div className="capabilityGrid">{capabilities.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="financialOutcomes"><div><div className="kicker">Typical project outcomes</div><h2>Stronger foundations for better financial services.</h2></div><ul>{outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></section>
    <section className="detailPrinciples"><div className="kicker">Trust and risk</div><h2>Financial technology must account for what is at stake.</h2><div className="securityCopy"><p>Financial technology must be designed around the sensitivity of the information and the consequences of disruption.</p><p>i8is considers security, privacy, access control, auditability, resilience and applicable client requirements during discovery and delivery.</p></div></section>
  </main><Footer /></>;
}

function HealthcarePage() {
  const challenges = ["Disconnected systems", "Manual administrative work", "Workforce coordination challenges", "Sensitive information", "Complex approval processes", "Limited operational visibility", "Difficult user experiences", "Pressure to improve efficiency without reducing quality"];
  const capabilities = [
    ["Connected healthcare workflows", "We help teams connect processes and information so the right people can access what they need at the right point in the workflow."],
    ["Protected information", "We consider privacy, access control, information handling and security requirements when designing healthcare technology."],
    ["Workforce coordination", "We support workflows for scheduling, attendance, leave, recruitment, approvals and operational visibility."],
    ["Data and analytics", "We help teams organize information and create reporting that supports operational decisions."],
    ["Workflow automation", "We identify repetitive administrative work that can be simplified while preserving appropriate human oversight."],
    ["Human-centered experiences", "We design digital experiences that are clearer and easier for professionals, administrators and other users to navigate."],
  ];
  const outcomes = ["Better operational coordination", "More connected information", "Reduced administrative effort", "Improved workforce visibility", "Clearer reporting", "Stronger access controls", "Easier-to-use digital services", "More consistent workflows"];

  return <><Header /><main className={styles.scope + " " + healthcareStyles.scope + " " + modernStyles.scope + " " + visualStyles.scope}>
    <section className="detailHero"><div className="detailHeroCopy"><Link href="/industries" className="backLink">Back to all industries</Link><div className="kicker">Healthcare</div><h1>Connected technology for better healthcare operations.</h1><p>Healthcare organizations need technology that supports people, protects information and works reliably in complex environments.</p></div><div className="detailVisual"><Image src="/industry page/indus3.png" alt="Healthcare technology" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></section>
    <section className="detailIntro"><div><div className="kicker">Healthcare technology</div><h2>Built for care operations and the people behind them.</h2></div><div><p>i8is helps healthcare teams improve operational coordination, information visibility, workflow efficiency and digital usability.</p></div></section>
    <section className="prioritySection"><div><div className="kicker">The challenges we help address</div><h2>Complex environments. More connected work.</h2><p>Healthcare organizations often manage:</p></div><ul>{challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section>
    <section className="healthcareCapabilities"><div className="sectionHeading"><div className="kicker">How i8is can help</div><h2>Practical technology for healthcare teams.</h2><div className="capabilityVisual"><Image src="/industry page/indus3.png" alt="Connected healthcare technology" fill sizes="(max-width: 900px) 88vw, 38vw" /></div></div><div className="capabilityGrid">{capabilities.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="healthcareOutcomes"><div><div className="kicker">Typical project outcomes</div><h2>More reliable operational foundations.</h2></div><ul>{outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></section>
    <section className="detailPrinciples"><div className="kicker">Designed around people</div><h2>Healthcare technology affects every person in the workflow.</h2><div className="securityCopy"><p>Healthcare technology affects professionals, administrators and the people receiving care.</p><p>i8is considers usability, accessibility, privacy, security and operational reality throughout the design and delivery process.</p></div></section>
  </main><Footer /></>;
}

function TechnologyPage() {
  const challenges = ["Limited engineering capacity", "Product delivery pressure", "Legacy architecture", "Platform scalability", "Cloud complexity", "Security gaps", "Technical debt", "Fragmented product workflows", "Difficulty hiring specialized talent"];
  const capabilities = [
    ["Product engineering", "We help teams design, build and improve digital products that solve clear customer and business problems."],
    ["SaaS development", "We support the architecture, workflows, user experiences and operational foundations required for scalable SaaS products."],
    ["Platform engineering", "We help improve technical foundations, integrations, reliability and maintainability."],
    ["Cloud modernization", "We help organizations improve infrastructure, deployment processes, performance and operational control."],
    ["Cybersecurity", "We build security into architecture, development, identity, access and release processes."],
    ["Technical team support", "We provide experienced technology, delivery and specialist support for teams that need additional capacity or expertise."],
  ];
  const outcomes = ["Faster product delivery", "More maintainable software", "Better platform reliability", "Improved cloud operations", "Stronger security foundations", "Better user experiences", "Reduced technical debt", "More predictable delivery"];

  return <><Header /><main className={styles.scope + " " + technologyStyles.scope + " " + modernStyles.scope + " " + visualStyles.scope}>
    <section className="detailHero"><div className="detailHeroCopy"><Link href="/industries" className="backLink">Back to all industries</Link><div className="kicker">Technology</div><h1>Scalable engineering for technology companies.</h1><p>Technology companies need to move quickly while building systems that remain reliable, secure and maintainable as they grow.</p></div><div className="detailVisual"><Image src="/industry page/indus4.png" alt="Technology company software engineering" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></section>
    <section className="detailIntro"><div><div className="kicker">Technology delivery</div><h2>Build for today. Engineer for what comes next.</h2></div><div><p>i8is supports technology organizations with product engineering, platform development, cloud infrastructure, data, cybersecurity and delivery expertise.</p></div></section>
    <section className="prioritySection"><div><div className="kicker">The challenges we help address</div><h2>Speed without compromising the foundation.</h2><p>Technology companies may need to manage:</p></div><ul>{challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section>
    <section className="technologyCapabilities"><div className="sectionHeading"><div className="kicker">How i8is can help</div><h2>Engineering support where it matters most.</h2><div className="capabilityVisual"><Image src="/industry page/indus4.png" alt="Technology platform engineering" fill sizes="(max-width: 900px) 88vw, 38vw" /></div></div><div className="capabilityGrid">{capabilities.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="technologyOutcomes"><div><div className="kicker">Typical project outcomes</div><h2>More reliable delivery and sustainable growth.</h2></div><ul>{outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></section>
    <section className="detailPrinciples"><div className="kicker">Built for growth</div><h2>Early technology choices shape what comes next.</h2><div className="securityCopy"><p>Technology decisions made early can affect product speed, operational cost and customer trust later.</p><p>i8is helps teams make practical decisions that support both immediate delivery and long-term sustainability.</p></div></section>
  </main><Footer /></>;
}

function ManufacturingPage() {
  const challenges = ["Disconnected operational information", "Manual processes", "Limited production visibility", "Workforce coordination", "Inconsistent reporting", "Maintenance and task tracking", "Safety and continuity requirements", "Legacy systems", "Difficult system integrations"];
  const capabilities = [
    ["Workflow automation", "We help simplify repetitive processes and connect the people, information and approvals involved in daily operations."],
    ["Operational dashboards", "We create clearer views of activity, performance, tasks, workforce information and operational exceptions."],
    ["Workforce visibility", "We support attendance, scheduling, leave, workforce coordination and other processes that help teams understand how work is progressing."],
    ["Data integration", "We connect information across systems to reduce fragmentation and improve reporting."],
    ["Process improvement", "We identify where work slows down, where information is lost and where technology can create better control."],
    ["Resilient technology", "We consider security, reliability, continuity and maintainability in the systems supporting operations."],
  ];
  const outcomes = ["Better operational visibility", "Reduced manual administration", "Improved workforce coordination", "Clearer performance reporting", "More consistent processes", "Faster access to information", "Better task and asset coordination", "Stronger operational resilience"];

  return <><Header /><main className={styles.scope + " " + manufacturingStyles.scope + " " + modernStyles.scope + " " + visualStyles.scope}>
    <section className="detailHero"><div className="detailHeroCopy"><Link href="/industries" className="backLink">Back to all industries</Link><div className="kicker">Manufacturing</div><h1>Technology for safer and more productive manufacturing.</h1><p>Manufacturing operations depend on visibility, reliable processes, workforce coordination and safe execution.</p></div><div className="detailVisual"><Image src="/industry page/indus5.png" alt="Manufacturing technology and automation" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></section>
    <section className="detailIntro"><div><div className="kicker">Manufacturing technology</div><h2>Built for better operational control.</h2></div><div><p>i8is helps manufacturing organizations use software, data and automation to improve operational control and productivity.</p></div></section>
    <section className="prioritySection"><div><div className="kicker">The challenges we help address</div><h2>Connected systems for more consistent work.</h2><p>Manufacturing organizations may need to manage:</p></div><ul>{challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section>
    <section className="manufacturingCapabilities"><div className="sectionHeading"><div className="kicker">How i8is can help</div><h2>Practical technology for daily operations.</h2><div className="capabilityVisual"><Image src="/industry page/indus5.png" alt="Manufacturing operations technology" fill sizes="(max-width: 900px) 88vw, 38vw" /></div></div><div className="capabilityGrid">{capabilities.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="manufacturingOutcomes"><div><div className="kicker">Typical project outcomes</div><h2>More reliable operational foundations.</h2></div><ul>{outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></section>
    <section className="detailPrinciples"><div className="kicker">Designed for real operations</div><h2>Technology has to work where work happens.</h2><div className="securityCopy"><p>Manufacturing technology must work alongside people, equipment, schedules and existing processes.</p><p>i8is focuses on practical delivery that respects the operating environment and supports adoption.</p></div></section>
  </main><Footer /></>;
}

function TransportationLogisticsPage() {
  const challenges = ["Distributed workforces", "Multiple locations", "Asset visibility", "Scheduling complexity", "Manual coordination", "Delayed operational information", "Disconnected systems", "Changing demand", "Business continuity risks"];
  const capabilities = [
    ["Workforce coordination", "We help organizations improve visibility into attendance, schedules, leave, assignments and operational responsibilities."],
    ["Asset visibility", "We support systems and workflows that help teams understand where assets are, how they are being used and what action is required."],
    ["Scheduling and coordination", "We help connect schedules, people, tasks and information so teams can coordinate work more effectively."],
    ["Operational data", "We organize data from different systems to improve reporting, monitoring and decision-making."],
    ["Workflow automation", "We simplify repetitive coordination, approval, notification and information-sharing processes."],
    ["Resilient infrastructure", "We design technology with reliability, security, monitoring and continuity requirements in mind."],
  ];
  const outcomes = ["Better workforce coordination", "Improved asset visibility", "Clearer scheduling", "Faster access to operational information", "Reduced manual coordination", "Better reporting", "More responsive decision-making", "Stronger infrastructure resilience"];

  return <><Header /><main className={styles.scope + " " + logisticsStyles.scope + " " + modernStyles.scope + " " + visualStyles.scope}>
    <section className="detailHero"><div className="detailHeroCopy"><Link href="/industries" className="backLink">Back to all industries</Link><div className="kicker">Transportation and logistics</div><h1>Connected technology for complex transportation networks.</h1><p>Transportation and logistics organizations coordinate people, assets, schedules, locations and information across complex networks.</p></div><div className="detailVisual"><Image src="/industry page/indus6.png" alt="Transportation and logistics technology" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></section>
    <section className="detailIntro"><div><div className="kicker">Transportation and logistics technology</div><h2>More connected work across the network.</h2></div><div><p>i8is helps teams improve coordination, visibility and decision-making across operational workflows.</p></div></section>
    <section className="prioritySection"><div><div className="kicker">The challenges we help address</div><h2>Distributed operations. Clearer control.</h2><p>Transportation and logistics organizations may need to manage:</p></div><ul>{challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section>
    <section className="logisticsCapabilities"><div className="sectionHeading"><div className="kicker">How i8is can help</div><h2>Practical technology for complex networks.</h2><div className="capabilityVisual"><Image src="/industry page/indus6.png" alt="Transportation and logistics technology" fill sizes="(max-width: 900px) 88vw, 38vw" /></div></div><div className="capabilityGrid">{capabilities.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="logisticsOutcomes"><div><div className="kicker">Typical project outcomes</div><h2>More visible, responsive operations.</h2></div><ul>{outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></section>
    <section className="detailPrinciples"><div className="kicker">Designed for distributed operations</div><h2>Technology must work wherever the operation does.</h2><div className="securityCopy"><p>Transportation and logistics systems must work across locations, teams, schedules and changing conditions.</p><p>i8is designs technology around the practical reality of distributed operations.</p></div></section>
  </main><Footer /></>;
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  if (slug === "government-public-sector") return <GovernmentPublicSectorPage />;
  if (slug === "financial-services") return <FinancialServicesPage />;
  if (slug === "healthcare") return <HealthcarePage />;
  if (slug === "technology") return <TechnologyPage />;
  if (slug === "manufacturing") return <ManufacturingPage />;
  if (slug === "transportation-logistics") return <TransportationLogisticsPage />;
  return <><Header /><main className={styles.scope}>
    <section className="detailHero"><div className="detailHeroCopy"><Link href="/industries" className="backLink">← All industries</Link><div className="kicker">Industry expertise</div><h1>{industry.title}</h1><p>{industry.lead}</p></div><div className="detailVisual"><Image src={industry.image} alt={`${industry.name} technology placeholder`} fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></section>
    <section className="detailIntro"><div><div className="kicker">Built for your environment</div><h2>Context comes before technology.</h2></div><div>{industry.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="prioritySection"><div><div className="kicker">Typical priorities</div><h2>Where we can help.</h2><p>Every industry has different users, processes, risks, regulations and measures of success. We begin by understanding how your organization operates before recommending a technology solution.</p></div><ul>{industry.priorities.map((priority) => <li key={priority}>{priority}</li>)}</ul></section>
    <section className="detailPrinciples"><div className="kicker">How we approach delivery</div><h2>Practical systems for the people who use them.</h2><div><article><span>01</span><p>We learn how work is performed today, where it breaks down and what users need to do their jobs effectively.</p></article><article><span>02</span><p>We create systems that are clear, accessible and practical for the people who use them.</p></article><article><span>03</span><p>We consider privacy, access, resilience and risk throughout design, engineering and delivery.</p></article><article><span>04</span><p>We connect technology delivery to clearer workflows, better visibility and faster decisions.</p></article></div></section>
  </main><Footer /></>;
}
