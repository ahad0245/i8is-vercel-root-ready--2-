import type { Metadata } from "next";
import { Footer, Header } from "../site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About i8is | Global Technology and Workforce Solutions",
  description: "Learn how i8is combines strategy, engineering, cybersecurity and workforce expertise across Saudi Arabia, Canada, the United States and Pakistan.",
  alternates: { canonical: "https://i8is.com/about/" },
};

const principles = [
  ["Outcome ownership", "We connect our work to the business or operational result it is intended to create."],
  ["Engineering discipline", "We design and build systems with quality, security, scalability and maintainability in mind."],
  ["Clear communication", "We explain trade-offs, risks and decisions in language that stakeholders can act on."],
  ["Human progress", "We measure technology by how well it improves work, service delivery and decision-making for people."],
];

export default function AboutPage() {
  return <><Header /><main className={styles.scope}>
    <section className="aboutHero"><div className="kicker">About i8is</div><h1 style={{ fontSize: "clamp(48px, 4.2vw, 68px)", lineHeight: ".96", maxWidth: "980px" }}>A technology partner<br/>for consequential change.</h1><p>i8is is an enterprise technology and workforce solutions company headquartered in Riyadh, with operations across Saudi Arabia, Canada, the United States and Pakistan.</p><p>We bring together consultants, designers, engineers, cybersecurity specialists and operational leaders to help organizations turn important ideas into secure, useful and valuable systems.</p></section>
    <section className="whatWeDo"><div><div className="kicker">What we do</div><h2>Technology that improves the way work gets done.</h2></div><div><p>We help organizations understand complex problems, identify practical opportunities and deliver technology that improves how people, systems and operations work together.</p><p>Our work spans artificial intelligence, custom software, cybersecurity, data, cloud infrastructure, fintech, workforce technology and digital transformation.</p></div></section>
    <section className="howWeWork"><div className="kicker">How we work</div><h2>Accountable from first question to outcome.</h2><div className="principleGrid">{principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="global"><div><div className="kicker">Global delivery. Local understanding.</div><h2>Built for the realities of where you operate.</h2></div><p>Our teams support organizations across multiple regions while staying attentive to local operating environments, user needs, business realities and delivery requirements.</p></section>
    <section className="story"><div className="kicker">Our story</div><h2>Technology partners should do more than advise.</h2><p>i8is was built around a simple belief: technology partners should do more than advise.</p><p>They should stand beside the client, build with the team, explain the difficult decisions and remain accountable to the outcome.</p></section>
  </main><Footer /></>;
}
