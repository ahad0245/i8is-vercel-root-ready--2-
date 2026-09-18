import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "../site";
import styles from "./tools.module.css";

export const metadata: Metadata = {
  title: "AI Tools | i8is",
  description: "Explore i8is AI-powered tools for recruitment, website monitoring, software development, translation, healthcare and workforce operations.",
  alternates: { canonical: "https://i8is.com/tools/" },
};

const tools = [
  { name: "i8is Recruitment Bot", category: "Recruitment automation", image: "/tools/recruitment-bot.jpg", summary: "Transform your hiring process with our automated recruitment bot. Leverage AI to streamline talent sourcing and candidate screening.", points: ["Automated form processing", "Instant candidate evaluation", "24/7 screening and workflow triggers"] },
  { name: "Site Monitor", category: "Website down checker", image: "/tools/site-monitor.jpg", summary: "An automated, precise way to track your site’s availability and performance, with instant alerts and detailed reports.", points: ["Daily status reporting", "Instant downtime alerts", "24/7 uptime and loss prevention"] },
  { name: "GPT-Engineer", category: "AI development", image: "/tools/gpt-engineer.jpg", summary: "An AI-powered tool that interprets user prompts to generate production-ready code for web applications.", points: ["AI-powered code generation", "Efficient and time-saving", "User-friendly at all skill levels"] },
  { name: "Camel Translator", category: "Arabic translation", image: "/tools/camel-translator.jpg", summary: "AI-assisted Arabic OCR and translation workflows designed for complex documents, human review and layout-aware processing.", points: ["AI-powered translation", "User-friendly for all skill levels", "Customizable and flexible"] },
  { name: "MOH Bot", category: "Healthcare assistant", image: "/tools/moh-bot.jpg", summary: "An advanced AI-powered solution designed to handle healthcare inquiries and provide information for common questions.", points: ["Arabic language processing", "Automated FAQ and triage", "Real-time, accurate responses"] },
  { name: "Click HR", category: "Workforce management", image: "/tools/clickhr.jpg", summary: "An AI-driven HR solution for recruitment, employee data, attendance, performance tracking and workforce operations.", points: ["AI-driven HR automation", "User-friendly for HR teams", "Customizable and scalable"], href: "https://www.click-hr.com" },
];

export default function ToolsPage() {
  return <><Header /><main className={styles.scope}>
    <section className="toolsHero"><Image className="toolsHeroBanner" src="/tools/top-banner.png" alt="AI-powered business tools" fill priority sizes="100vw" /><div className="toolsHeroCopy"><div className="kicker">Our tools</div><h1>Powerful tools<br/>for a smarter tomorrow.</h1><p>Built for performance and ease of use, our tools leverage AI to automate complex processes, improve productivity and drive success across your organization.</p><div className="toolsHeroActions"><a className="btn primary" href="#tools">Explore our tools ↗</a><Link className="textLink" href="/contact">Talk to an expert ↗</Link></div></div></section>
    <section id="tools" className="toolsOverview"><div><div className="kicker">Our AI tools</div><h2>A suite of intelligent tools for real business impact.</h2></div><p>From recruitment and workforce management to website monitoring, translation and more—our AI-powered tools are designed to solve real problems and deliver measurable results.</p><div className="toolsOverviewGrid">{tools.map((tool) => <a href={tool.href || `#${tool.name.toLowerCase().replaceAll(" ", "-")}`} target={tool.href ? "_blank" : undefined} rel={tool.href ? "noreferrer" : undefined} key={tool.name}><span>{tool.name === "i8is Recruitment Bot" ? "⌘" : tool.name === "Site Monitor" ? "⌾" : "✦"}</span><b>{tool.name}</b><small>{tool.category}</small></a>)}</div></section>
    <section className="toolsDetails">{tools.map((tool, index) => <article id={tool.name.toLowerCase().replaceAll(" ", "-")} className={index % 2 ? "reverse" : ""} key={tool.name}><div className="toolDetailCopy"><div className="kicker">{tool.category}</div><h2>{tool.href ? <a href={tool.href} target="_blank" rel="noreferrer">{tool.name}</a> : tool.name}</h2><p>{tool.summary}</p><ul>{tool.points.map((point) => <li key={point}>{point}</li>)}</ul>{tool.href ? <a className="btn primary" href={tool.href} target="_blank" rel="noreferrer">Explore Click HR ↗</a> : <Link className="btn primary" href="/contact">Explore product ↗</Link>}</div><div className="toolDetailImage">{tool.href ? <a href={tool.href} target="_blank" rel="noreferrer" aria-label={`Visit ${tool.name}`}><Image src={tool.image} alt={`${tool.name} interface`} fill sizes="(max-width: 900px) 100vw, 50vw" /></a> : <Image src={tool.image} alt={`${tool.name} interface`} fill sizes="(max-width: 900px) 100vw, 50vw" />}</div></article>)}</section>
  </main><Footer /></>;
}
