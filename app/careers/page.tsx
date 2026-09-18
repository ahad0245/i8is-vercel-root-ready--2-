import type { Metadata } from "next";
import { Footer, Header } from "../site";
import ZohoCareers from "../../components/zoho-careers";

export const metadata: Metadata = { title: "Careers | i8is", description: "Explore current opportunities and join the i8is team.", alternates: { canonical: "https://i8is.com/careers/" } };

export default function CareersPage() { return <><Header /><main><section className="careersHero"><div className="kicker">CAREERS</div><h1>Do the work that moves things forward.</h1><p>Join a multidisciplinary team building secure, useful technology for organizations across three regions.</p></section><section className="careersEmbedIntro"><div><div className="kicker">Current opportunities</div><h2>Find a role with real impact.</h2><p>Explore open positions and apply directly through our careers portal.</p></div></section><ZohoCareers /></main><Footer /></>; }
