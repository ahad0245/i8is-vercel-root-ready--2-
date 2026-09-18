import type { Metadata } from "next";
import { Footer, Header } from "../site";

export const metadata: Metadata = {
  title: "Accessibility Statement | i8is",
  description: "Read the i8is accessibility statement and learn how to report barriers related to website content, navigation, forms or digital experiences.",
  alternates: { canonical: "https://i8is.com/accessibility/" },
};

export default function AccessibilityPage() {
  return <><Header /><main><section className="legalHero"><div className="kicker">Accessibility</div><h1>Accessibility Statement</h1><p>Last reviewed: <strong>September 14, 2026</strong></p></section><div className="legalShell" style={{ display: "block", width: "100%" }}><article className="legalContent" style={{ width: "100%" }}>
    <p className="legalIntro">i8is is committed to making i8is.com usable by people with disabilities.</p><p>We aim to provide an accessible experience through clear content, semantic structure, keyboard navigation, readable typography, sufficient color contrast and meaningful alternative text for important images.</p>
    <h2>Our approach</h2><p>Accessibility is considered during content creation, design, development and ongoing website improvement.</p><p>We aim to make it possible for users to:</p><ul><li>Navigate the website using a keyboard</li><li>Understand page structure through headings</li><li>Read content with assistive technologies</li><li>Identify links and controls clearly</li><li>Complete forms using labels and instructions</li><li>Access meaningful information provided through images</li><li>Use the website across different screen sizes</li></ul>
    <h2>Current status</h2><p>We are continuing to improve the accessibility of our website and digital products.</p><p>Some content, embedded services or third-party functionality may not yet meet every accessibility requirement.</p><div className="legalReview">A WCAG conformance level will only be stated after an accessibility audit has been completed.</div>
    <h2>Known limitations</h2><p>We are not currently aware of any significant accessibility barriers on the website. We continue to review and improve the experience.</p>
    <h2>Feedback and assistance</h2><p>If you experience an accessibility barrier, please contact <a href="mailto:contact@i8is.com">contact@i8is.com</a>.</p><p>When contacting us, please include:</p><ul><li>The page URL</li><li>A description of the issue</li><li>The assistive technology or browser being used, if relevant</li><li>Your preferred method of communication</li></ul><p>We will review the request and work toward an appropriate solution.</p>
    <h2>Alternative communication</h2><p>If you cannot use a website form, contact us directly:</p><address><strong>i8is Inc.</strong><br/>Email: <a href="mailto:contact@i8is.com">contact@i8is.com</a><br/>Phone: <a href="tel:+16479300988">+1 647 930 0988</a></address>
  </article></div></main><Footer /></>;
}
