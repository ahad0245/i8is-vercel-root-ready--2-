import type { Metadata } from "next";
import { Footer, Header } from "../site";
import styles from "./leadership.module.css";

export const metadata: Metadata = {
  title: "i8is Leadership Team",
  description: "Meet the i8is leadership team responsible for technology, operations, delivery, sales and workforce solutions.",
  alternates: { canonical: "https://i8is.com/leadership/" },
};

const leaders = [
  { name: "Kamran Tariq", role: "Chief Executive Officer", image: "/leadership/kamran-tariq.jpg" },
  { name: "Syed Abrar Hussain", role: "Director, Sales", image: "/leadership/syed-abrar-hussain.jpg" },
  { name: "Bijan Dey", role: "Senior Vice President", image: "/leadership/bijan-dey.jpg" },
  { name: "Sandeep Kaur", role: "Head Recruiter", image: "/leadership/sandeep-kaur.jpg" },
  { name: "Neeraj Goyal", role: "Business Development Executive", image: "/leadership/neeraj-goyal.jpg" },
  { name: "Prateek Loungia", role: "Business Development Executive", image: "/leadership/team-placeholder.jpg" },
  { name: "Eashwar Yuvraj", role: "Technical Recruiter", image: "/leadership/team-placeholder.jpg" },
  { name: "Sikkandhar Basha", role: "Technical Recruiter", image: "/leadership/sikkandhar-basha.jpg" },
  { name: "Tooba Nadeem", role: "Management Head", image: "/leadership/tooba-nadeem.jpg" },
  { name: "Sameera Ajaz", role: "Project Manager", image: "/leadership/sameera-ajaz.jpg" },
  { name: "Ibraheem Idrees", role: "Chief Technology Officer", image: "/leadership/ibraheem-idrees.jpg" },
  { name: "Hayat Ahmed", role: "Team Leader", image: "/leadership/hayat-ahmed.jpg" },
  { name: "Abdul Ahad Sharif", role: "Frontend Developer", image: "/leadership/abdul-ahad-sharif.jpg" },
  { name: "Hashir Ahmed", role: "Backend Developer", image: "/leadership/hashir-ahmed.jpg" },
  { name: "Ehtisham Qazi", role: "React Developer", image: "/leadership/ehtisham-qazi.jpg" },
  { name: "Taimoor Ali", role: "Junior Backend", image: "/leadership/taimoor-ali.jpg" },
  { name: "Mannan Ali", role: "Mobile App Developer", image: "/leadership/mannan-ali.jpg" },
  { name: "Mohsin Arif", role: "UI/UX Designer", image: "/leadership/mohsin-arif.jpg" },
];

const descriptions: Record<string, string> = {
  "Kamran Tariq": "Guides i8is strategy, client partnerships and long-term business growth.",
  "Syed Abrar Hussain": "Leads client discovery and commercial relationships across i8is services.",
  "Bijan Dey": "Supports senior business leadership and the continued growth of i8is capabilities.",
  "Sandeep Kaur": "Connects talent with opportunities and supports effective recruitment delivery.",
  "Neeraj Goyal": "Supports business development, client outreach and new opportunity growth.",
  "Prateek Loungia": "Contributes to business development and relationship-building initiatives.",
  "Eashwar Yuvraj": "Supports technical recruiting and candidate coordination for delivery teams.",
  "Sikkandhar Basha": "Connects technical talent with i8is client and delivery requirements.",
  "Tooba Nadeem": "Supports management coordination and effective day-to-day operations.",
  "Sameera Ajaz": "Coordinates priorities, timelines and delivery communication across teams.",
  "Ibraheem Idrees": "Leads technology strategy, engineering and platform architecture.",
  "Hayat Ahmed": "Guides engineering coordination and reliable technical delivery.",
  "Abdul Ahad Sharif": "Builds responsive, usable interfaces for digital products and platforms.",
  "Hashir Ahmed": "Develops dependable backend systems, integrations and application services.",
  "Ehtisham Qazi": "Builds polished React experiences for web applications and platforms.",
  "Taimoor Ali": "Supports backend development and reliable application implementation.",
  "Mannan Ali": "Develops mobile application experiences for users and operations teams.",
  "Mohsin Arif": "Designs clear, useful digital experiences that support real workflows.",
};

const teamGroups = [
  { title: "Leadership", description: "Senior leaders guiding strategy, relationships and accountable delivery.", members: leaders.slice(0, 3), offset: 0 },
  { title: "Recruitment team", description: "Talent and business-development specialists supporting client and team growth.", members: leaders.slice(3, 9), offset: 3 },
  { title: "Software & technology team", description: "Engineering, product and delivery specialists building reliable digital solutions.", members: leaders.slice(9), offset: 9 },
];

export default function LeadershipPage() {
  return <><Header /><main className={styles.scope}><section className="leadershipHero"><div className="kicker">LEADERSHIP</div><h1>Experienced leaders accountable for delivery.</h1><p>The i8is leadership team brings together experience across enterprise operations, technology, delivery, sales and workforce solutions.</p><p>Our leaders stay close to the work, the decisions and the outcomes.</p></section><section className={styles.directory} aria-label="i8is team">{teamGroups.map((group) => <section className={styles.teamSection} key={group.title}><div className={styles.teamHeading}><div className="kicker">{group.title}</div><p>{group.description}</p></div><div className="leadershipGrid">{group.members.map((leader, index) => <article key={leader.name}><div className="leaderPortrait">{leader.image ? <img src={leader.image} alt={leader.name} /> : <><span>{leader.name.split(" ").map((part) => part[0]).join("")}</span><small>Portrait to be added</small></>}</div><div className="leaderContent"><span>{String(group.offset + index + 1).padStart(2, "0")}</span><h2>{leader.name}</h2><h3>{leader.role}</h3><p>{descriptions[leader.name]}</p></div></article>)}</div></section>)}</section></main><Footer /></>;
}
