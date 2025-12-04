export const WP_BASE = "https://bytechsol.com/cms/wp-json/wp/v2";

const DEFAULT_IMAGE =
  "https://bytechsol.com/wp-content/uploads/2024/11/default-blog.png";

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

function extractOGImageFromHead(head: string = "") {
  const match = head?.match(/<meta property="og:image" content="([^"]+)"/);
  return match ? match[1] : null;
}

export function getImage(post: any) {
  const yoastJson = post?.yoast_head_json?.og_image?.[0]?.url;
  const yoastHtml = extractOGImageFromHead(post?.yoast_head);
  const featured = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const jetpack = post?.jetpack_featured_media_url;

  return yoastJson || yoastHtml || featured || jetpack || DEFAULT_IMAGE;
}

function stripOldTOC(html: string) {
  return html
    .replace(/<div id="ez-toc-container[\s\S]*?<\/div>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<ul[\s\S]*?ez-toc-list[\s\S]*?<\/ul>/gi, "")
    .trim();
}

export async function fetchAllPosts() {
  const url = `${WP_BASE}/posts?_embed=true&per_page=100`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch posts");

  const posts = await res.json();

  return posts.map((post: any) => ({
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    date: new Date(post.date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    image: getImage(post),
    category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
    linkpath: `/blog/${post.slug}`,
  }));
}

export async function fetchPostBySlug(slug: string) {
  const url = `${WP_BASE}/posts?slug=${slug}&_embed=true`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch post");

  const data = await res.json();
  const post = data[0];

  let content = stripOldTOC(post.content.rendered);

  const finalImage = getImage(post);

  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    content,
    date: new Date(post.date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    image: finalImage,
    og_image: finalImage,
    author: post._embedded?.author?.[0]?.name || "BytechSol Team",
    category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
  };
}