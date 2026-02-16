"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, Shield, Star } from "lucide-react";

const certifications = [
    {
        icon: GraduationCap,
        title: "University Affiliated",
        description: "Annamalai University certified programs",
    },
    {
        icon: Shield,
        title: "Government Recognized",
        description: "Ministry of AYUSH approved",
    },
    {
        icon: Award,
        title: "International Standards",
        description: "Yoga Alliance certified courses",
    },
    {
        icon: Star,
        title: "Award Winning",
        description: "Multiple national & state awards",
    },
];

export default function Certifications() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block"
                    >
                        Trusted & Certified
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-4xl font-bold font-primary text-text mb-4"
                    >
                        Internationally Recognized
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all"
                        >
                            <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                <cert.icon className="w-7 h-7" />
                            </div>
                            <h3 className="font-bold text-text mb-2">{cert.title}</h3>
                            <p className="text-sm text-gray-600">{cert.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* University Affiliation Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="relative w-48 h-48 flex-shrink-0">
                        <Image
                            src="/assets/affiliation.jpg"
                            alt="Annamalai University"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl lg:text-3xl font-bold font-primary text-primary mb-4">
                            Annamalai University Affiliation
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            Our yoga teacher training programs are affiliated with Annamalai University, one of India&apos;s premier educational institutions. This ensures our certifications meet the highest academic and professional standards.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                200 Hour YTT
                            </span>
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                500 Hour YTT
                            </span>
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                Yoga Therapy
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
