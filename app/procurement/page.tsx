import type { Metadata } from "next";
import { Footer, Header } from "../site";
import styles from "./procurement.module.css";

export const metadata: Metadata = {
  title: "Government Technology Procurement and Staffing | i8is",
  description:
    "Learn about i8is government procurement positioning, technology services, staffing capabilities and public-sector delivery support.",
  alternates: { canonical: "https://i8is.com/procurement/" },
};

const technologyServices = [
  "Software engineering",
  "Artificial intelligence",
  "Data and analytics",
  "Cloud infrastructure",
  "Cybersecurity",
  "Digital transformation",
  "Workflow automation",
  "Product and platform delivery",
];

const staffingServices = [
  "Role-based sourcing",
  "Candidate screening",
  "Technical assessment",
  "Placement support",
  "Onboarding coordination",
  "Continuity support",
  "Workforce operations",
];

function CapabilityList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ProcurementPage() {
  return (
    <>
      <Header />
      <main className={styles.scope}>
        <section className="procurementHero">
          <div className="container">
            <p className="eyebrow">Public-sector procurement</p>
            <h1>Technology and workforce delivery for public-sector buyers.</h1>
            <div className="intro">
              <p>
                i8is supports public-sector buyers with technology delivery, software
                engineering, artificial intelligence, cybersecurity, workforce
                solutions and specialized technical staffing.
              </p>
              <p>
                Our delivery approach is shaped around clear requirements,
                accountable execution, information handling and the operating
                environment of each engagement.
              </p>
            </div>
          </div>
        </section>

        <section className="capabilities">
          <div className="container capabilityGrid">
            <article>
              <p className="index">01</p>
              <h2>Government technology services</h2>
              <p>i8is provides technology capabilities across:</p>
              <CapabilityList items={technologyServices} />
            </article>
            <article>
              <p className="index">02</p>
              <h2>Technical workforce staffing</h2>
              <p>Our workforce solutions may include:</p>
              <CapabilityList items={staffingServices} />
            </article>
          </div>
        </section>

        <section className="deliveryNotes">
          <div className="container noteGrid">
            <article>
              <p className="eyebrow">Security-aware delivery</p>
              <h2>Requirements are confirmed for each environment.</h2>
              <p>
                Delivery practices are shaped around access control, information
                handling, project risk and the requirements of each government
                environment.
              </p>
              <p>
                Specific security requirements, personnel eligibility and clearance
                conditions must be confirmed for each opportunity.
              </p>
            </article>
            <article className="verification">
              <p className="eyebrow">Procurement verification</p>
              <p>
                Procurement eligibility, vendor status, security clearance
                requirements, contracting limits, applicable thresholds and terms
                must be confirmed for each opportunity before proposal submission.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
