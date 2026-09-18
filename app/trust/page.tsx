import type { Metadata } from "next";
import { Footer, Header } from "../site";
import styles from "./trust.module.css";

export const metadata: Metadata = {
  title: "Security, Privacy and Responsible AI | i8is Trust Center",
  description:
    "Learn how i8is approaches secure engineering, privacy, responsible AI, accessibility, quality assurance and operational resilience.",
  alternates: { canonical: "https://i8is.com/trust/" },
};

const trustPrinciples = [
  {
    title: "Secure software development",
    copy: [
      "We consider threat modeling, secure coding, dependency management, access control and security testing throughout the development lifecycle.",
      "Security requirements are shaped around the systems being built, the information being handled and the risks faced by each client environment.",
    ],
  },
  {
    title: "Responsible AI",
    copy: [
      "We use human accountability, suitable data, documented use cases, explainable decisions and proportionate controls when designing AI-assisted systems.",
      "AI should support better decisions without removing appropriate human responsibility.",
    ],
  },
  {
    title: "Privacy-aware design",
    copy: [
      "We consider data minimization, purpose limitation, access controls, retention and appropriate handling of personal information during system and workflow design.",
    ],
  },
  {
    title: "Quality engineering",
    copy: [
      "We use acceptance criteria, iterative testing, cross-platform validation and release discipline to reduce avoidable operational issues.",
      "Quality is evaluated throughout delivery rather than only at the end of a project.",
    ],
  },
  {
    title: "Accessibility",
    copy: [
      "We aim to provide semantic structure, keyboard access, readable content, sufficient contrast and meaningful alternatives for important visual information.",
      "Accessibility requirements should be considered from the beginning of design and implementation.",
    ],
  },
  {
    title: "Operational resilience",
    copy: [
      "We define monitoring, backup, incident response and continuity requirements according to the risks and needs of each client environment.",
      "Resilience planning should reflect the importance of the system, the information it handles and the consequences of disruption.",
    ],
  },
];

export default function TrustPage() {
  return (
    <>
      <Header />
      <main className={styles.scope}>
        <section className="trustHero">
          <div className="container">
            <p className="eyebrow">Trust center</p>
            <h1>Security and trust built into every delivery.</h1>
            <div className="intro">
              <p>Trust is not a statement added after implementation.</p>
              <p>
                It is an engineering requirement considered throughout discovery,
                architecture, development, testing, deployment and ongoing operations.
              </p>
            </div>
          </div>
        </section>

        <section className="trustPrinciples" aria-label="Trust principles">
          <div className="container">
            <div className="sectionLead">
              <p className="eyebrow">How we work</p>
              <h2>Trust is part of the delivery process.</h2>
            </div>
            <div className="principleGrid">
              {trustPrinciples.map((principle, index) => (
                <article className="principle" key={principle.title}>
                  <span>0{index + 1}</span>
                  <h2>{principle.title}</h2>
                  {principle.copy.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="compliance">
          <div className="container">
            <p className="eyebrow">Compliance statement</p>
            <h2>Clear about what this page represents.</h2>
            <p>
              This page describes i8is delivery practices. It does not represent a
              third-party certification, audit or legal compliance determination.
            </p>
            <p>
              Certifications, attestations and formal compliance claims will be
              displayed only after verification.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
