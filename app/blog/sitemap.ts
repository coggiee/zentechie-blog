import { MetadataRoute } from "next";
import { getTotalPosts } from "../_libs/hygraph";

const BASE_URL = "https://coggie.dev/blog";

export async function generateSitemaps() {
  const { edges } = await getTotalPosts(50);
  const posts = edges.map((post: any) => post.node);
  return posts.map((post: any) => ({
    id: post.id,
  }));
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const routes = [""].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  const { edges } = await getTotalPosts(50);
  const posts = edges.map((post: any) => post.node);

  const post_routes = posts.map((post: any) => ({
    url: `${BASE_URL}/${post.id}`,
    lastModified: post.date,
    priority: 0.8,
  }));

  return [...routes, ...post_routes];
}
