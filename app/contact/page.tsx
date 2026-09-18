import type { Metadata } from "next";
import { ContactExperience, Footer, Header } from "../site";
import styles from "./contact.module.css";

export const metadata: Metadata = { title: "Contact i8is | AI, Software and Digital Transformation", description: "Contact i8is to discuss AI, custom software, cybersecurity, data, cloud, workforce technology or digital transformation.", alternates: { canonical: "https://i8is.com/contact/" } };

export default function ContactPage() { return <><Header /><main className={styles.scope}><ContactExperience /></main><Footer /></>; }
