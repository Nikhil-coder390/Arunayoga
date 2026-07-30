"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative h-[45vh] sm:h-[50vh] flex items-center justify-center bg-brand-dark-grey text-white overflow-hidden">
      <Image
        src="/assets/community-1.jpeg"
        alt="Arunayoga Blog & Insights"
        fill
        priority
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-grey/90 via-brand-dark-grey/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">
            Wisdom & Insights
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-primary mb-4">
            Yoga & Wellness Blog
          </h1>
          <p className="text-lg lg:text-xl font-light max-w-2xl mx-auto text-gray-300">
            Explore authentic articles on traditional yoga, meditation, Shat Karma cleansing, therapeutic healing, and healthy lifestyle tips from Master Instructors.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
