"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  User,
  Calendar,
  Tag,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  CheckCircle2,
  Quote,
  Copy,
  Check,
} from "lucide-react";
import { BlogPost, blogPosts } from "@/data/blogPosts";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQSection from "@/components/ui/FAQSection";
import CTASection from "@/components/ui/CTASection";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const relatedPosts = (post.relatedSlugs || [])
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean) as BlogPost[];

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="py-12 bg-white relative">
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

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
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary/10 text-primary font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-gray-500 text-xs font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-primary" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-brand-dark-grey leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author Meta Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-gray-500 text-sm border-y border-gray-100 py-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/30">
                <Image
                  src="/about-founder.png"
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-800 leading-tight">{post.author}</p>
                <p className="text-xs text-gray-500">Founder & Chief Master Instructor</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" /> Published {post.date}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Featured Main Image & Caption */}
        <figure className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
          <div className="relative h-[320px] sm:h-[480px] w-full">
            <Image
              src={post.image}
              alt={post.featuredImageAlt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          {post.featuredImageCaption && (
            <figcaption className="bg-gray-50 px-6 py-3 text-center text-xs text-gray-600 font-primary italic border-t border-gray-100">
              {post.featuredImageCaption}
            </figcaption>
          )}
        </figure>

        {/* Floating / Sticky Social Share Bar */}
        <div className="flex items-center justify-between gap-4 py-3.5 px-6 bg-gray-50 rounded-2xl mb-12 border border-gray-200/80 shadow-xs">
          <span className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
            <Share2 className="w-4 h-4 text-primary" /> Share this Guide
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-primary hover:text-white transition-all text-gray-600 shadow-xs border border-gray-100"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-primary hover:text-white transition-all text-gray-600 shadow-xs border border-gray-100"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} - ${shareUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-primary hover:text-white transition-all text-gray-600 shadow-xs border border-gray-100"
              aria-label="Share on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={copyToClipboard}
              className="p-2.5 rounded-full bg-white hover:bg-primary hover:text-white transition-all text-gray-600 shadow-xs border border-gray-100 flex items-center gap-1 text-xs font-medium"
              aria-label="Copy Link"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Main Article Body with Enhanced HTML Typography */}
        <div className="article-body prose prose-lg max-w-none text-gray-800 leading-relaxed font-primary mb-16">
          {post.content.map((paragraph, idx) => (
            <div
              key={idx}
              className="mb-8"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

        {/* Embedded Highlight Callout Box */}
        <div className="bg-primary/5 border-l-4 border-primary p-6 sm:p-8 rounded-r-3xl mb-12 shadow-xs">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg text-brand-dark-grey font-primary mb-2">
                Key Takeaway for Practitioners
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Consistency and proper guidance under a certified master are essential when practicing traditional yoga, pranayama, or meditation. Always respect your body structure and progress mindfully.
              </p>
            </div>
          </div>
        </div>

        {/* Post Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-8 border-b border-gray-200">
            <Tag className="w-4 h-4 text-primary" />
            <span className="font-semibold text-xs text-gray-500 uppercase tracking-wider mr-2">
              Topic Tags:
            </span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-100 hover:bg-primary/10 hover:text-primary transition-colors text-gray-700 text-xs px-3.5 py-1.5 rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl border border-gray-200 mb-16 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm">
          <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-3 border-primary shadow-md">
            <Image
              src="/about-founder.png"
              alt={post.author}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">
              About the Author
            </span>
            <h3 className="font-bold text-xl font-primary text-brand-dark-grey mb-2">
              {post.author}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
              Founder & Director of Arunayoga Training & Research Institute (ATRI) in Hyderabad. With over 35 years of dedicated practice, Yogini Arunadevi has trained over 35,000 yoga teachers and therapeutic practitioners worldwide.
            </p>
            <Link
              href="/about/founder"
              className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
            >
              Read Full Bio & Lineage →
            </Link>
          </div>
        </div>

        {/* Blog Specific FAQ */}
        {post.faqs && post.faqs.length > 0 && (
          <FAQSection
            title="Article FAQs"
            subtitle="Frequently asked questions about the topics covered in this article."
            faqs={post.faqs}
            className="mb-16 rounded-3xl border border-gray-200 p-2"
          />
        )}

        {/* Blog CTA */}
        <CTASection
          title="Ready to Begin Your Yoga Journey?"
          subtitle="Experience authentic traditional yoga, meditation, and therapeutic wellness under master guidance at Arunayoga Banjara Hills, Hyderabad."
          primaryButtonText="Book a Free Trial Class"
          primaryButtonHref="/contact"
          secondaryButtonText="Contact Arunayoga Today"
          secondaryButtonHref="tel:+919876543210"
          className="rounded-3xl mb-16 shadow-xl"
        />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-primary text-brand-dark-grey">
                Recommended Further Reading
              </h2>
              <Link
                href="/blog"
                className="text-sm font-bold text-primary hover:underline hidden sm:block"
              >
                View All Articles →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.id}
                  href={`/blog/${relPost.slug}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={relPost.image}
                      alt={relPost.featuredImageAlt || relPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 text-primary text-[10px] font-bold uppercase px-2.5 py-1 rounded-full backdrop-blur-xs">
                      {relPost.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-base text-brand-dark-grey group-hover:text-primary transition-colors line-clamp-2 mb-2 leading-snug font-primary">
                      {relPost.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-4 font-light">
                      {relPost.excerpt}
                    </p>
                    <span className="mt-auto text-xs font-bold text-primary flex items-center gap-1">
                      Read Guide →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blogs */}
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-primary hover:text-white text-gray-700 font-bold px-6 py-3 rounded-full transition-all text-sm shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>
        </div>
      </div>
    </article>
  );
}
