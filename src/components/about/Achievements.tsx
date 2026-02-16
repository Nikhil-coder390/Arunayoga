"use client";

import { Award, BookOpen, Tv, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import arunadeviOne from "@/assets/arunadevi-1.jpg";
import communityOne from "@/assets/community-1.jpeg";
import communityTwo from "@/assets/community-2.jpg";
import arunadeviThree from "@/assets/arunadevi-3.jpg";

const achievements = [
    {
        title: "State Government Recognition",
        description: "Honored by Chief Minister for outstanding contribution to Yoga",
        image: arunadeviOne,
    },
    {
        title: "National Awards",
        description: "Multiple awards for excellence in Yoga education and practice",
        image: communityOne,
    },
    {
        title: "Community Leadership",
        description: "Recognized for transforming lives through Yoga therapy",
        image: communityTwo,
    },
    {
        title: "Wonder Book of Records",
        description: "Record holder for longest headstand and mass yoga events",
        image: arunadeviThree,
    },
];

const stats = [
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: BookOpen, label: "Books Published", value: "3" },
    { icon: Tv, label: "TV Appearances", value: "50+" },
    { icon: Star, label: "Records Held", value: "5" },
];

export default function Achievements() {
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
                        Recognition & Honors
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-bold font-primary text-text mb-4"
                    >
                        Achievements & Recognition
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Honored by government officials, celebrities, and yoga organizations worldwide
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Achievement Gallery */}
                <div className="grid md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={achievement.image}
                                    alt={achievement.title}
                                    fill
                                    priority
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-bold font-primary mb-2">
                                    {achievement.title}
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
