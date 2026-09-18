import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site";
import styles from "./industries.module.css";

export const metadata: Metadata = {
  title: "Technology Solutions for Government, Finance, Healthcare & Industry | i8is",
  description: "i8is delivers secure AI, software, data and operational solutions for government, financial services, healthcare, technology, manufacturing and logistics.",
  alternates: { canonical: "https://i8is.com/industries/" },
};

const industries = [
  ["Government and public sector", "Government organizations need digital services that are secure, accessible and dependable under public scrutiny.", "i8is helps public-sector teams modernize workflows, improve service delivery, connect operational data and build technology that supports accountability and public trust.", ["Digital service modernization", "Secure government operations", "Citizen and public services", "Workforce management", "Data integration", "Accessibility", "Procurement and delivery support"], "Explore government technology solutions", "government-public-sector"],
  ["Financial services", "Financial institutions require accuracy, security, resilience and customer trust at every stage of the operating journey.", "i8is helps financial-services organizations improve platforms, workflows, controls and customer experiences while managing technology and operational risk.", ["Secure financial platforms", "Payment workflows", "Intelligent controls", "Customer experience", "Data and reporting", "Operational resilience", "Compliance-aware engineering"], "Explore financial-services solutions", "financial-services"],
  ["Healthcare", "Healthcare organizations need connected workflows, protected information and digital experiences that support both professionals and the people they serve.", "i8is helps healthcare teams improve operational coordination, information visibility and technology usability.", ["Connected care operations", "Protected information", "Workforce coordination", "Workflow automation", "Data visibility", "Human-centered digital experiences"], "Explore healthcare technology solutions", "healthcare"],
  ["Technology", "Technology companies need reliable engineering, scalable systems and experienced teams that can move quickly without creating unnecessary complexity.", "i8is supports technology organizations with product engineering, cloud infrastructure, data, cybersecurity and delivery expertise.", ["Product development", "Platform engineering", "Cloud modernization", "Technical team support", "Cybersecurity", "Data and analytics", "SaaS delivery"], "Explore technology solutions", "technology"],
  ["Manufacturing", "Manufacturing operations depend on visibility, reliable processes, workforce coordination and safe execution.", "i8is helps manufacturing organizations use automation, data and software to improve operational control and productivity.", ["Workflow automation", "Operational dashboards", "Workforce visibility", "Industrial data", "Process improvement", "Safety and resilience"], "Explore manufacturing solutions", "manufacturing"],
  ["Transportation and logistics", "Transportation and logistics organizations coordinate people, assets, schedules, locations and information across complex networks.", "i8is helps teams improve coordination, visibility and decision-making across operational workflows.", ["Workforce coordination", "Asset visibility", "Scheduling", "Operational data", "Workflow automation", "Real-time decision support", "Resilient infrastructure"], "Explore transportation and logistics solutions", "transportation-logistics"],
] as const;

export default function IndustriesPage() {
  return <><Header /><main className={styles.scope}>
    <section className="industriesHero"><div className="kicker">Industry expertise</div><h1>Technology solutions designed for your operating environment.</h1><p>The best technology solutions reflect the environment in which they will be used.</p><p>i8is combines sector understanding, delivery discipline and modern technology to address the operational realities behind transformation.</p></section>
    <section className="industryList" aria-label="Industry solutions">{industries.map(([name, lede, description, priorities, cta, slug], index) => <article key={name}><div className="industryNumber">0{index + 1}</div><div className="industryCopy"><h2>{name}</h2><p className="lede">{lede}</p><p>{description}</p><Link className="industryLink" href={`/industries/${slug}`}>{cta} ↗</Link></div><div className="priorities"><div className="kicker">Typical priorities</div><ul>{priorities.map((priority) => <li key={priority}>{priority}</li>)}</ul></div></article>)}</section>
  </main><Footer /></>;
}
