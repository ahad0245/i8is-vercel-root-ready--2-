import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{
  const pages=["","services","products","industries","case-studies","insights","about","leadership","trust","procurement","careers","contact","ai-machine-learning","software-development","cybersecurity","data-analytics","cloud-automation","fintech","research-development","digital-transformation","enterprise-ai-operating-model"];
  return pages.map((p,i)=>({url:`https://i8is.com/${p}`,lastModified:new Date(),changeFrequency:i===0?"weekly":"monthly",priority:i===0?1:.8}));
}
