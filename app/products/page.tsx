import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "../site";
import styles from "./products.module.css";

export const metadata: Metadata = {
  title: "Workforce, Recruitment, Payroll & Arabic AI Products | i8is",
  description: "Explore i8is-built platforms for workforce management, recruitment operations, payroll workflows and Arabic OCR and translation.",
  alternates: { canonical: "https://i8is.com/products/" },
};

const products = [
  {
    category: "Workforce management",
    name: "sstrack.io",
    description: "sstrack.io is workforce management software for distributed, office, field and job-site teams. It connects time, attendance, leave and operational visibility across web, desktop, mobile and Chrome so organizations can better understand how work is being performed.",
    features: ["Time and attendance management", "Leave and absence workflows", "Workforce visibility", "Multi-platform access", "Operational reporting", "Team and role management"],
    technology: "React · Node.js · Python",
    href: "https://www.sstrack.io",
    logo: "/products page/SSTrack-logo.png",
    dimensions: [1126, 201] as const,
  },
  {
    category: "Recruitment operations",
    name: "ClickHR",
    description: "ClickHR is recruitment management software that centralizes job posting, applicant tracking, interview management, approvals, communication and hiring workflows. It gives recruitment teams a more structured way to manage candidates, roles, decisions and hiring activity.",
    features: ["Job posting management", "Applicant tracking", "Interview coordination", "Role-based approvals", "Candidate communication", "Recruitment records", "Hiring workflow visibility"],
    technology: "Multi-organization SaaS",
    href: "https://www.click-hr.com",
    logo: "/products page/clickHR-logo.png",
    dimensions: [858, 167] as const,
  },
  {
    category: "Payroll operations",
    name: "VerdeBooks",
    description: "VerdeBooks is payroll and employee-records software supporting pay stubs, working hours, tax-related workflows and practical business administration. It helps organizations organize payroll information and employee records in a more consistent operational workflow.",
    features: ["Payroll record management", "Pay-stub support", "Employee hours", "Employee records", "Tax-related workflows", "Business administration"],
    href: "https://verdebooks.com",
    logo: "/products page/verdebookd-logo.png",
    dimensions: [2112, 372] as const,
  },
  {
    category: "Arabic language intelligence",
    name: "Camel Translator",
    description: "Camel Translator is AI-assisted Arabic OCR and translation software for complex documents. It is designed to support layout-aware processing, document meaning, human review and language workflows that require more than basic text conversion.",
    features: ["Arabic optical character recognition", "Document translation", "Layout-aware processing", "Human review workflows", "Complex document handling", "Language intelligence"],
    href: "/contact",
    logo: "/products page/CamelTranslator-logo.png",
    dimensions: [454, 110] as const,
  },
];

export default function ProductsPage() {
  return <>
    <Header />
    <main className={styles.scope}>
      <section className="productsHero">
        <div className="kicker">Products and platforms</div>
        <h1>Software products for complex operational work.</h1>
        <p>i8is builds practical software products for organizations managing distributed workforces, recruitment, payroll operations and complex Arabic-language documents.</p>
        <p>Our products are designed around real workflows involving multiple users, approvals, operational deadlines, sensitive information and the need for reliable visibility.</p>
      </section>

      <section className="productsList" aria-label="i8is products">
        {products.map((product, index) => <article key={product.name}>
          <div className="productIdentity">
            <span>0{index + 1}</span>
            {product.href.startsWith("http") ? <a className="productLogo" href={product.href} target="_blank" rel="noreferrer" aria-label={`Visit ${product.name}`}><Image src={product.logo} alt={`${product.name} logo`} width={product.dimensions[0]} height={product.dimensions[1]} sizes="(max-width: 800px) 65vw, 310px" /></a> : <div className="productLogo"><Image src={product.logo} alt={`${product.name} logo`} width={product.dimensions[0]} height={product.dimensions[1]} sizes="(max-width: 800px) 65vw, 310px" /></div>}
          </div>
          <div className="productContent">
            <div className="kicker">{product.category}</div>
            {product.href.startsWith("http") ? <h2><a href={product.href} target="_blank" rel="noreferrer">{product.name}</a></h2> : <h2>{product.name}</h2>}
            <p>{product.description}</p>
            <div className="featureBlock"><h3>Key capabilities</h3><ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
            <div className="productAction">
              {product.technology && <span>{product.technology}</span>}
              {product.href.startsWith("http") ? <a className="btn primary" href={product.href} target="_blank" rel="noreferrer">Explore {product.name} ↗</a> : <Link className="btn primary" href={product.href}>Explore Camel Translator ↗</Link>}
            </div>
          </div>
        </article>)}
      </section>

      <section className="portfolioNote">
        <div><div className="kicker">Built around real workflows</div><h2>Operational detail is product detail.</h2></div>
        <p>Our products are designed for the operational details that determine whether software succeeds: different user roles, changing approvals, sensitive records, recurring deadlines and the need for clear information.</p>
      </section>
      <section className="portfolioClosing">
        <div className="kicker">i8is product portfolio</div>
        <h2>One portfolio. Multiple operating problems solved.</h2>
        <p>The i8is product portfolio addresses recurring operational challenges across workforce management, recruitment, payroll and Arabic document processing.</p>
        <p>Products can be used independently or incorporated into a broader technology and digital transformation program.</p>
      </section>
    </main>
    <Footer />
  </>;
}
