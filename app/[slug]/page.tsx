import Site from "../site";
import type { Metadata } from "next";

const titles:Record<string,string>={
  services:"Services",products:"Products & Platforms",industries:"Industries", "case-studies":"Case Studies",insights:"Insights",about:"About",leadership:"Leadership",trust:"Trust Center",procurement:"Government Procurement",careers:"Careers",contact:"Contact",
  "ai-machine-learning":"AI & Machine Learning Services","software-development":"Custom Software Development","cybersecurity":"Cybersecurity Solutions","data-analytics":"Data Analytics & Insights","cloud-automation":"Cloud Infrastructure & Automation","fintech":"FinTech Solutions","research-development":"Research & Development","digital-transformation":"Digital Transformation Services","enterprise-ai-operating-model":"Enterprise AI Operating Model"
};

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const title=titles[slug]||"i8is";return {title:`${title} | i8is`,description:`Explore ${title.toLowerCase()} from i8is—enterprise technology, AI, secure engineering and workforce solutions across Saudi Arabia, Canada and the United States.`,alternates:{canonical:`https://i8is.com/${slug}/`},openGraph:{title:`${title} | i8is`,description:`Enterprise ${title.toLowerCase()} built for measurable outcomes.`,type:"website"}}}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <Site page={slug} />;
}
