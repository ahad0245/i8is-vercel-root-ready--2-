import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../site";
import { categoryFor, getWordPressPost, getWordPressPosts, safePostHtml, textFromHtml } from "../../../lib/wordpress";

type PageProps = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { return (await getWordPressPosts()).map((post) => ({ slug: post.slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { slug } = await params; const post = await getWordPressPost(slug); if (!post) return {}; const title = textFromHtml(post.title.rendered); const description = textFromHtml(post.excerpt.rendered || post.content.rendered).slice(0, 160); return { title: `${title} | i8is`, description, alternates: { canonical: `https://i8is.com/insights/${post.slug}/` }, openGraph: { title, description, type: "article", publishedTime: post.date, modifiedTime: post.modified } }; }
export default async function WordPressArticle({ params }: PageProps) { const { slug } = await params; const post = await getWordPressPost(slug); if (!post) notFound(); const date = new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(post.date)); return <><Header /><main><article className="wpArticle"><Link className="backToInsights" href="/insights">← All insights</Link><div className="kicker">{categoryFor(post)} · {date}</div><h1>{textFromHtml(post.title.rendered)}</h1><div className="wpArticleContent" dangerouslySetInnerHTML={{ __html: safePostHtml(post.content.rendered) }} /></article></main><Footer /></>; }
