"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Calendar, Tag, ArrowRight, Search, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { blogPosts, BlogPost } from "@/data/blogPosts";

type BlogListProps = {
  limit?: number;
  showHeader?: boolean;
};

export default function BlogList({ limit, showHeader = true }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    blogPosts.forEach((post) => {
      if (post.category) cats.add(post.category);
    });
    return ["All", ...Array.from(cats)];
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.tags &&
          post.tags.some((t) =>
            t.toLowerCase().includes(searchQuery.toLowerCase())
          ));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // For home page preview or when limit is set
  if (limit) {
    const previewPosts = blogPosts.slice(0, limit);
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full"
          >
            <div className="h-52 relative overflow-hidden">
              <Image
                src={post.image}
                alt={post.featuredImageAlt || post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                <Tag className="w-3 h-3" /> {post.category}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-primary" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-primary" /> {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold font-primary text-brand-dark-grey mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">By {post.author}</span>
                <Link href={`/blog/${post.slug}`}>
                  <span className="inline-flex items-center text-sm font-bold text-primary hover:text-red-700 transition-colors group/link">
                    Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}

        <div className="col-span-full text-center mt-8">
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-primary hover:bg-red-700 text-white font-bold rounded-full px-8 py-6 text-base shadow-lg hover:shadow-primary/20 transition-all"
            >
              Explore All Blog Articles <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Search & Filter Bar */}
        <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 mb-12 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles by keyword or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-800"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post (Displayed when searching/filtering allows) */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 bg-gradient-to-br from-brand-dark-grey via-black to-brand-dark-grey rounded-3xl overflow-hidden shadow-2xl text-white border border-white/10"
          >
            <div className="grid lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[350px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.featuredImageAlt || featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-6 left-6 bg-primary text-white font-bold text-xs uppercase px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" /> Featured Story
                </div>
              </div>

              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-3">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-primary mb-4 leading-tight">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light line-clamp-4">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-6 border-t border-white/10 pt-4">
                    <span>By {featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="w-full sm:w-auto bg-primary hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-all group">
                      Read Full Article{" "}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid of Remaining Articles */}
        {gridPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
              >
                <div className="h-52 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.featuredImageAlt || post.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                    <Tag className="w-3 h-3" /> {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-primary text-brand-dark-grey mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-600">
                      By {post.author}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <span className="inline-flex items-center text-sm font-bold text-primary hover:text-red-700 transition-colors group/link">
                        Read Article{" "}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-200">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-brand-dark-grey mb-2 font-primary">
              No Articles Found
            </h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any articles matching &ldquo;{searchQuery}&rdquo;. Try clearing your search or category filter.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Reset Filters
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
