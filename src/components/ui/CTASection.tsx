"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Calendar } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export default function CTASection({
  title = "Ready to Begin Your Yoga Journey?",
  subtitle = "Transform your health, find peace of mind, and master authentic yoga techniques under the guidance of Master Instructors at Arunayoga Hyderabad.",
  primaryButtonText = "Book a Free Trial Class",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Talk to Our Experts",
  secondaryButtonHref = "tel:+919876543210",
  className = "",
}: CTASectionProps) {
  return (
    <section
      className={`py-16 bg-gradient-to-r from-brand-dark-grey via-black to-brand-dark-grey text-white relative overflow-hidden ${className}`}
    >
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">
            Start Today
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-primary mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryButtonHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-primary/30 group"
            >
              <Calendar className="w-5 h-5" />
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {secondaryButtonText && (
              <Link
                href={secondaryButtonHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all"
              >
                <PhoneCall className="w-5 h-5 text-primary" />
                <span>{secondaryButtonText}</span>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
