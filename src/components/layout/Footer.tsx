"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-grey text-white pt-16 pb-8 border-t-4 border-primary relative overflow-hidden font-primary">
      {/* Background Decorative Accent Glows */}
      <div className="absolute -left-24 -top-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Top Brand & Summary Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-12 mb-12 border-b border-white/10">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <Image
              src="/assets/logo.png"
              alt="Arunayoga Logo"
              width={60}
              height={60}
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
            />
            <div>
              <h2 className="text-2xl font-bold text-primary font-primary leading-tight">
                ATRI — Arunayoga
              </h2>
              <p className="text-sm text-gray-300 font-medium">
                Arunayoga Training & Research Institute | Banjara Hills, Hyderabad
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-4 py-2 rounded-full text-xs font-semibold text-gray-200">
              <ShieldCheck className="w-4 h-4 text-primary" /> Yoga Alliance USA Certified
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-4 py-2 rounded-full text-xs font-semibold text-gray-200">
              <Heart className="w-4 h-4 text-primary" /> 30+ Years Legacy
            </span>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-primary text-white border-l-3 border-primary pl-3">
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>About Institute & Founder</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Daily Yoga Classes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/teacher-training"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Teacher Training Courses</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/wellness"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Wellness & Therapeutic Yoga</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Yoga & Health Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Teacher Training & Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-primary text-white border-l-3 border-primary pl-3">
              Certified Programs
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/teacher-training/diploma-200"
                  className="text-gray-300 hover:text-primary transition-colors block"
                >
                  Diploma in Yoga (200 Hours RYT)
                </Link>
              </li>
              <li>
                <Link
                  href="/teacher-training/advanced-300"
                  className="text-gray-300 hover:text-primary transition-colors block"
                >
                  Advanced Diploma (300 Hours RYT)
                </Link>
              </li>
              <li>
                <Link
                  href="/teacher-training/pg-diploma-500"
                  className="text-gray-300 hover:text-primary transition-colors block"
                >
                  PG Diploma in Yoga (500 Hours RYT)
                </Link>
              </li>
              <li>
                <Link
                  href="/wellness/treatments"
                  className="text-gray-300 hover:text-primary transition-colors block"
                >
                  Ayurvedic Shirodhara & Massage
                </Link>
              </li>
              <li>
                <Link
                  href="/wellness/detox"
                  className="text-gray-300 hover:text-primary transition-colors block"
                >
                  Ayurvedic Detox & Cleansing
                </Link>
              </li>
              <li>
                <Link
                  href="/wellness/stress-relief"
                  className="text-gray-300 hover:text-primary transition-colors block"
                >
                  Stress Relief & Meditation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-primary text-white border-l-3 border-primary pl-3">
              Visit Our Institute
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  <strong className="text-white">Arunayoga (ATRI)</strong>
                  <br />
                  8-3, 833/13A, Kundan Marble Ln,
                  <br />
                  Sagar Society, Sri Nagar Colony,
                  <br />
                  Banjara Hills, Hyderabad, TS 500073.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+919440698003"
                  className="hover:text-primary transition-colors font-medium"
                >
                  +91 9440698003
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@arunayoga.co.in"
                  className="hover:text-primary transition-colors font-medium"
                >
                  info@arunayoga.co.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Mon – Sat: 6:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-primary text-white border-l-3 border-primary pl-3">
              Stay Connected
            </h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed font-light">
              Subscribe to receive authentic yoga tips, meditation guides, and workshop announcements.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2.5 mb-6"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                required
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-red-700 text-white font-bold rounded-xl py-2.5 text-sm transition-all shadow-md"
              >
                Subscribe to Updates
              </Button>
            </form>

            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
              Follow Arunayoga:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-primary rounded-full transition-all text-white border border-white/10"
                aria-label="YouTube"
                title="YouTube - @ArunaYogaOfficial"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-primary rounded-full transition-all text-white border border-white/10"
                aria-label="Instagram"
                title="Instagram - @arunayoga.india"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-primary rounded-full transition-all text-white border border-white/10"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-primary rounded-full transition-all text-white border border-white/10"
                aria-label="WhatsApp"
                title="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar — Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          <p>
            © {currentYear}{" "}
            <strong className="text-gray-200">
              Arunayoga Training & Research Institute (ATRI)
            </strong>
            . All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
            <Link href="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/classes" className="hover:text-primary transition-colors">
              Yoga Classes
            </Link>
            <Link href="/teacher-training" className="hover:text-primary transition-colors">
              Teacher Training
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
