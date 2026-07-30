import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    "",
    "/about",
    "/about/founder",
    "/about/institute",
    "/about/team",
    "/classes",
    "/teacher-training",
    "/teacher-training/diploma-200",
    "/teacher-training/advanced-300",
    "/teacher-training/pg-diploma-500",
    "/wellness",
    "/wellness/detox",
    "/wellness/stress-relief",
    "/wellness/treatments",
    "/events",
    "/contact",
    "/blog",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate || Date.now()),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
