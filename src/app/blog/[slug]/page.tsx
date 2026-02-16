import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((item) => item.id === params.slug);

  if (!post) {
    return {
      title: "Blog Post | Arunayoga",
      description: "Read yoga and ayurveda insights from Arunayoga."
    };
  }

  return {
    title: `${post.title} | Arunayoga Blog`,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((item) => item.id === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <article>
          <div className="mb-6 flex flex-wrap gap-3 text-xs">
            <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-gray-500">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1 text-gray-500">
              <User className="w-3 h-3" /> {post.author}
            </span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold font-primary text-text leading-tight mb-8">
            {post.title}
          </h1>

          <div className="relative h-[260px] md:h-[420px] rounded-2xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-primary prose-p:text-gray-700">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl border border-gray-200 bg-gray-50">
            <h2 className="text-xl font-bold font-primary text-primary mb-2">Need Personalized Guidance?</h2>
            <p className="text-gray-600 mb-4">
              Reach out to Arunayoga for classes, therapy consultations, or teacher training details.
            </p>
            <Link
              href="/contact?subject=general"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
