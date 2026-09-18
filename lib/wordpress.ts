export type WordPressPost = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
    "wp:term"?: Array<Array<{ name: string }>>;
  };
};

// Keep the WordPress host separate from the public Next.js domain. Once i8is.com
// points to Vercel, set WORDPRESS_API_URL to the retained WordPress host.
const apiBase = (process.env.WORDPRESS_API_URL || "https://i8is.com/wp-json/wp/v2").replace(/\/$/, "");

function endpoint(path: string) { return `${apiBase}${path}`; }

export function textFromHtml(value = "") {
  return value.replace(/<[^>]*>/g, " ").replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#039;|&apos;/gi, "'").replace(/&[a-z0-9#]+;/gi, "").replace(/\s+/g, " ").trim();
}

// Posts come from a trusted WordPress editorial backend. Remove executable and
// embedded elements before rendering the rich-text HTML in the public site.
export function safePostHtml(html = "") {
  return html.replace(/<(script|style|iframe|object|embed|form)[^>]*>[\s\S]*?<\/\1>/gi, "").replace(/<\/?(script|style|iframe|object|embed|form)[^>]*>/gi, "").replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(/\s(href|src)\s*=\s*("|')\s*javascript:[\s\S]*?\2/gi, ' $1="#"');
}

async function getPosts(path: string) {
  try {
    const response = await fetch(endpoint(path), { next: { revalidate: 300 } });
    if (!response.ok) return [] as WordPressPost[];
    return (await response.json()) as WordPressPost[];
  } catch { return [] as WordPressPost[]; }
}

export async function getWordPressPostsPage(page = 1) {
  try {
    const response = await fetch(endpoint(`/posts?per_page=12&page=${page}&_embed=1&orderby=date&order=desc`), { next: { revalidate: 300 } });
    if (!response.ok) return { posts: [] as WordPressPost[], totalPages: 1 };
    const totalPages = Math.max(1, Number(response.headers.get("x-wp-totalpages")) || 1);
    return { posts: await response.json() as WordPressPost[], totalPages };
  } catch { return { posts: [] as WordPressPost[], totalPages: 1 }; }
}

export async function getWordPressPosts() { return (await getWordPressPostsPage()).posts; }
export async function getWordPressPost(slug: string) { return (await getPosts(`/posts?slug=${encodeURIComponent(slug)}&_embed=1`))[0] ?? null; }
export function categoryFor(post: WordPressPost) { return post._embedded?.["wp:term"]?.flat().find(Boolean)?.name || "Insights"; }
export function featuredImageFor(post: WordPressPost) { return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url; }
