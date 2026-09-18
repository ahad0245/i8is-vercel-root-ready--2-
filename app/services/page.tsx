import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "AI, Software, Cybersecurity & Digital Transformation Services | i8is",
  description: "Explore i8is services in artificial intelligence, custom software, cybersecurity, data analytics, cloud automation, fintech and digital transformation.",
  alternates: { canonical: "https://i8is.com/services/" },
};

const delivery = [
  ["Discover", "We define the business problem, users, constraints, risks and measurable outcome before recommending a solution."],
  ["Build", "We design, engineer and validate the solution with security, quality and adoption built into the delivery process."],
  ["Improve", "We monitor performance, address new requirements and continuously improve the solution after launch."],
];

const capabilities = [
  ["Artificial Intelligence and Machine Learning", "AI applications, machine-learning models and intelligent automation designed to improve decisions, reduce manual work and create measurable operational value.", "/ai-machine-learning"],
  ["Custom Software Development", "Secure web, mobile and enterprise software built around your workflows, users, integrations and long-term growth requirements.", "/software-development"],
  ["Cybersecurity Solutions", "Security architecture, risk assessment, secure development and resilience practices that protect critical systems and sensitive information.", "/cybersecurity"],
  ["Data Analytics and Insights", "Connected data platforms, reporting systems, dashboards and predictive models that turn fragmented information into practical decisions.", "/data-analytics"],
  ["Cloud Infrastructure and Workflow Automation", "Cloud modernization, infrastructure engineering and automated workflows that improve speed, reliability, control and scalability.", "/cloud-automation"],
  ["FinTech Solutions", "Secure financial platforms, payment workflows, records systems and intelligent controls for institutions that require trust and accuracy.", "/fintech"],
  ["Research and Development", "Rapid discovery, prototyping and applied research that helps organizations test ambitious technology ideas before making larger investments.", "/research-development"],
  ["Digital Transformation Services", "End-to-end transformation support that connects business strategy, operating models, software delivery, data, security and organizational change.", "/digital-transformation"],
];

const deliverables = ["Business and technology assessment", "Product and service roadmap", "Solution architecture", "User and workflow design", "Software implementation", "Data and AI development", "Security and risk controls", "Testing and quality assurance", "Deployment and adoption support", "Ongoing improvement planning"];
const lifecycle = [["Strategy", "Clarify priorities, opportunities and constraints."], ["Design", "Translate business requirements into practical user, process and technology designs."], ["Engineering", "Build, integrate and test secure systems."], ["Adoption", "Support users, operations and stakeholders as the solution enters real-world use."], ["Evolution", "Improve the system as the organization, technology and operating environment change."]];

export default function ServicesPage() {
  return <><Header /><main className={styles.scope}>
    <section className="servicesHero"><div className="kicker">End-to-end technology capabilities</div><h1>Technology services built around business outcomes.</h1><p>i8is helps organizations move from strategy to implementation through connected capabilities in artificial intelligence, custom software, cybersecurity, data analytics, cloud infrastructure, fintech and digital transformation.</p><p>We combine strategic thinking with hands-on engineering so that important ideas become secure, usable and sustainable systems.</p></section>
    <section className="delivery"><div><div className="kicker">How we deliver</div><h2>From a defined need to lasting improvement.</h2></div><div className="deliveryGrid">{delivery.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="capabilities"><div className="capabilityHead"><div className="kicker">Our capabilities</div><h2>Connected expertise for complex work.</h2><p>Each capability can stand on its own or work together as part of a broader transformation program.</p></div><div className="capabilityGrid">{capabilities.map(([title, text, href], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><Link href={href}>Explore service ↗</Link></article>)}</div></section>
    <section className="deliverables"><div><div className="kicker">What you receive</div><h2>Delivery shaped around your needs.</h2><p>Every engagement is shaped around the organization’s needs. Typical deliverables may include:</p></div><ul>{deliverables.map((item) => <li key={item}>{item}</li>)}</ul></section>
    <section className="lifecycle"><div className="kicker">Built for the full transformation lifecycle</div><h2>Strategy through evolution.</h2><div>{lifecycle.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  </main><Footer /></>;
}
