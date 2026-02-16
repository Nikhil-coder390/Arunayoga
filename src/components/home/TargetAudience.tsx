"use client";

import { User, Activity, GraduationCap, Globe, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const audiences = [
    {
        icon: User,
        title: "New to Yoga",
        text: "Arunayoga helps identify your goals, evaluate your current condition, and carve an individual yoga path.",
        cta: "Contact for Demo",
        href: "/contact?subject=demo",
    },
    {
        icon: Activity,
        title: "Advanced Yoga",
        text: "Deepen your practice through Hatha, Ashtanga, Vinyasa, Kriya, Therapeutic and Competitive Yoga with advanced Mudra, Bandha and Pranayama.",
        cta: "To know more",
        href: "/classes",
    },
    {
        icon: GraduationCap,
        title: "Yoga Teacher Training",
        text: "Become a teacher through Diploma, Advanced Diploma and PG Diploma programs with traditional and internationally recognized curriculum.",
        cta: "Explore Courses",
        href: "/teacher-training",
    },
    {
        icon: Globe,
        title: "International Students",
        text: "One-month full-time intensive training for visiting students to prepare for global teacher certification pathways.",
        cta: "Learn More",
        href: "/teacher-training",
    },
    {
        icon: Heart,
        title: "Health Problems",
        text: "Natural therapies for stress and chronic conditions including Ayurveda, Detoxification, Stress-relief, Panchakarma and allied healing approaches.",
        cta: "View Treatments",
        href: "/wellness",
    },
];

export default function TargetAudience() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold font-primary text-secondary mb-4">
                        Who We Serve
                    </h2>
                    <p className="text-text max-w-2xl mx-auto">
                        Programs and guidance for beginners, advanced practitioners, aspiring teachers, international learners and wellness seekers.
                    </p>
                </div>

                {/* Responsive Grid/Scroll */}
                <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 lg:grid lg:grid-cols-5 lg:gap-6 lg:space-x-0 font-sans scrollbar-hide">
                    {audiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex-shrink-0 w-80 lg:w-auto bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-primary">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                                {item.text}
                            </p>
                            <Link href={item.href} className="w-full">
                                <Button variant="outline" size="sm" className="w-full">
                                    {item.cta}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
