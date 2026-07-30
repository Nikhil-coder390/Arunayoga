"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, User, Calendar, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { BlogPost, blogPosts } from "@/data/blogPosts";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQSection from "@/components/ui/FAQSection";
import CTASection from "@/components/ui/CTASection";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const relatedPosts = (post.relatedSlugs || [])
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean) as BlogPost[];

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <article className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Post Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-brand-dark-grey leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm border-y border-gray-100 py-4 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span className="font-medium text-gray-700">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image & Caption */}
        <figure className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <div className="relative h-[300px] sm:h-[450px] w-full">
            <Image
              src={post.image}
              alt={post.featuredImageAlt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          {post.featuredImageCaption && (
            <figcaption className="bg-gray-50 p-3 text-center text-xs text-gray-500 font-primary italic border-t border-gray-100">
              {post.featuredImageCaption}
            </figcaption>
          )}
        </figure>

        {/* Social Share Bar */}
        <div className="flex items-center justify-between gap-4 py-3 px-4 bg-gray-50 rounded-xl mb-10 border border-gray-100">
          <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
            <Share2 className="w-4 h-4 text-primary" /> Share Article:
          </span>
          <div className="flex items-center gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors text-gray-600 shadow-xs"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors text-gray-600 shadow-xs"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} - ${shareUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors text-gray-600 shadow-xs"
              aria-label="Share on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-primary mb-12">
          {post.content.map((paragraph, idx) => (
            <div
              key={idx}
              className="mb-6"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

        {/* Post Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-8 border-b border-gray-100">
            <Tag className="w-4 h-4 text-primary" />
            <span className="font-semibold text-sm text-gray-600 mr-2">Tags:</span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-12 flex items-center gap-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary">
            <Image
              src="/about-founder.png"
              alt="Yogini Arunadevi"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg font-primary text-brand-dark-grey">
              Written by {post.author}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Founder & Director of Arunayoga Training & Research Institute. With 30+ years of dedicated yoga experience, Yogini Arunadevi has empowered thousands of practitioners worldwide.
            </p>
          </div>
        </div>

        {/* Blog Specific FAQ */}
        {post.faqs && post.faqs.length > 0 && (
          <FAQSection
            title="Blog FAQs"
            subtitle="Common questions related to this article"
            faqs={post.faqs}
            className="mb-12 rounded-2xl"
          />
        )}

        {/* Blog CTA */}
        <CTASection
          title="Ready to Begin Your Yoga Journey?"
          subtitle="Experience authentic yoga, meditation, and therapeutic wellness under master guidance at Arunayoga Banjara Hills, Hyderabad."
          primaryButtonText="Book a Free Trial Class"
          primaryButtonHref="/contact"
          secondaryButtonText="Contact Arunayoga Today"
          secondaryButtonHref="tel:+919876543210"
          className="rounded-2xl mb-16"
        />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold font-primary text-brand-dark-grey mb-6">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.id}
                  href={`/blog/${relPost.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative h-44 w-full">
                    <Image
                      src={relPost.image}
                      alt={relPost.featuredImageAlt || relPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-xs text-primary font-bold uppercase tracking-wider mb-2">
                      {relPost.category}
                    </span>
                    <h3 className="font-bold text-lg text-brand-dark-grey group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {relPost.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-auto">
                      {relPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blogs */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>
        </div>
      </div>
    </article>
  );
}
