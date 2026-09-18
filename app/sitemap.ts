import type { MetadataRoute } from "next";
import { getWordPressPosts } from "../lib/wordpress";
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
  const pages=["","services","products","tools","industries","industries/government-public-sector","industries/financial-services","industries/healthcare","industries/technology","industries/manufacturing","industries/transportation-logistics","case-studies","insights","about","leadership","trust","procurement","careers","contact","terms","privacy","accessibility","ai-machine-learning","software-development","cybersecurity","data-analytics","cloud-automation","fintech","research-development","digital-transformation","enterprise-ai-operating-model"];
  const core: MetadataRoute.Sitemap = pages.map((p,i)=>({url:`https://i8is.com/${p}`,lastModified:new Date(),changeFrequency:(i===0?"weekly":"monthly") as "weekly" | "monthly",priority:i===0?1:.8}));
  const posts = await getWordPressPosts();
  return [...core, ...posts.map((post)=>({url:`https://i8is.com/insights/${post.slug}`,lastModified:new Date(post.modified),changeFrequency:"monthly" as const,priority:.7}))];
}
