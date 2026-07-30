import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import BlogPostContent from "@/components/blog/BlogPostContent";
import { constructMetadata } from "@/lib/generateMetadata";
import {
  getBlogPostingSchema,
  getFAQSchema,
  getBreadcrumbSchema,
} from "@/data/schemas";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return constructMetadata({
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    });
  }

  return constructMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    urlPath: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = getBlogPostingSchema(post);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const faqSchema =
    post.faqs && post.faqs.length > 0 ? getFAQSchema(post.faqs) : null;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <BlogPostContent post={post} />
    </main>
  );
}
