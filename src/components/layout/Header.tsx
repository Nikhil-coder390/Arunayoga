"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Founder", href: "/about/founder" },
      { name: "Institute", href: "/about/institute" },
      { name: "Team", href: "/about/team" },
    ],
  },
  { name: "Classes", href: "/classes" },
  {
    name: "Yoga Teacher Training",
    href: "/teacher-training",
    children: [
      { name: "Courses Overview", href: "/teacher-training" },
      { name: "Diploma in Yoga (200 Hours)", href: "/teacher-training/diploma-200" },
      { name: "Advanced Diploma in Yoga (300 Hours)", href: "/teacher-training/advanced-300" },
      { name: "PG Diploma in Yoga (500 Hours)", href: "/teacher-training/pg-diploma-500" },
    ],
  },
  {
    name: "Wellness",
    href: "/wellness",
    children: [
      { name: "Ayurvedic Therapy", href: "/wellness/treatments" },
      { name: "Ayurvedic Detox", href: "/wellness/detox" },
      { name: "Stress Relief", href: "/wellness/stress-relief" },
    ],
  },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 sm:pt-4">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-white rounded-3xl shadow-xl border-2 border-gray-100/80 transition-all duration-300 ${
            isScrolled ? "py-3 px-6 sm:px-8 shadow-2xl" : "py-4 px-6 sm:px-10"
          } flex items-center justify-between gap-4`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Arunayoga"
              width={56}
              height={56}
              className="h-11 w-11 sm:h-13 sm:w-13 object-contain"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-xl sm:text-2xl leading-none font-bold font-primary text-primary">
                ATRI
              </p>
              <p className="text-[11px] sm:text-[13px] text-gray-600 font-semibold whitespace-nowrap mt-1">
                Arunayoga Training & Research Institute
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Supports all 7 nav items without wrapping */}
          <nav className="hidden lg:flex items-center gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm xl:text-[15px] font-bold text-gray-700 transition-colors hover:text-primary inline-flex items-center py-2.5 whitespace-nowrap font-primary"
                >
                  {item.name}
                  {item.children ? (
                    <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                  ) : null}
                </Link>
                {item.children ? (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full min-w-[270px] rounded-2xl border border-gray-100 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-3 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-red-700 text-white font-bold rounded-xl px-7 h-[48px] text-[15px] shadow-md tracking-wide hover:shadow-primary/30 transition-all">
                Book to Heal
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2.5 text-brand-dark-grey rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 shadow-2xl mt-2 max-w-[1536px] mx-auto rounded-b-3xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 pb-3">
                  <Link
                    href={item.href}
                    className="text-base font-bold text-brand-dark-grey hover:text-primary font-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children ? (
                    <div className="mt-2 ml-4 space-y-2 border-l-2 border-primary/20 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block text-sm font-medium text-gray-600 hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-2 pt-2">
                <div className="flex items-center gap-2 font-semibold text-gray-700">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 9440698003</span>
                </div>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 text-base shadow-md">
                    Book to Heal
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
