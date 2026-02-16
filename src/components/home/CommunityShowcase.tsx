"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Heart, Globe } from "lucide-react";
import classesImage from "@/assets/classes-1.jpg";
import campusImage from "@/assets/IMG_0872.jpg";
import trainingImage from "@/assets/community-1.jpeg";

export default function CommunityShowcase() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block"
                    >
                        Our Community
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-bold font-primary text-text mb-4"
                    >
                        Join Our Global Yoga Family
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Students from around the world come together to learn, practice, and grow
                    </motion.p>
                </div>

                {/* Image Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative h-80 rounded-2xl overflow-hidden shadow-lg group"
                    >
                        <Image
                            src={classesImage}
                            alt="Yoga class in session"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">Daily Classes</h3>
                            <p className="text-gray-200 text-sm">Expert-led sessions for all levels</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative h-80 rounded-2xl overflow-hidden shadow-lg group"
                    >
                        <Image
                            src={campusImage}
                            alt="Outdoor yoga session"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">Outdoor Sessions</h3>
                            <p className="text-gray-200 text-sm">Connect with nature through yoga</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative h-80 rounded-2xl overflow-hidden shadow-lg group"
                    >
                        <Image
                            src={trainingImage}
                            alt="Teacher training program"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">Teacher Training</h3>
                            <p className="text-gray-200 text-sm">Internationally certified programs</p>
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <Users className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                        <div className="text-gray-600 font-medium">Certified Teachers</div>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                        <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                            <Globe className="w-8 h-8 text-secondary" />
                        </div>
                        <div className="text-4xl font-bold text-secondary mb-2">13+</div>
                        <div className="text-gray-600 font-medium">Countries Reached</div>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                        <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                            <Heart className="w-8 h-8 text-accent" />
                        </div>
                        <div className="text-4xl font-bold text-accent mb-2">10,000+</div>
                        <div className="text-gray-600 font-medium">Lives Transformed</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
