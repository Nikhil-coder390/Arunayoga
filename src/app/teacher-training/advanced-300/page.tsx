"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Clock, MapPin, Users, Award } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const curriculum = [
    "Advanced Anatomy & Physiology",
    "Yoga Therapy Techniques",
    "Ayurveda Fundamentals",
    "Advanced Kriyas & Pranayama",
    "Advanced Asana Practice",
    "Sequencing and Class Design",
    "Adjustments and Modifications",
    "Working with Special Populations",
    "Advanced Meditation Techniques",
    "Yoga Philosophy Deep Dive",
    "Business of Yoga",
    "Ethics and Professional Development"
];

export default function Advanced300Page() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-brand-dark-grey text-white overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/assets/community-2.jpg"
                            alt="Advanced Yoga Teacher Training"
                            fill
                            className="object-cover opacity-40"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-0" />
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                                For Certified 200-Hour Teachers
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold font-primary mb-6">
                                Advanced Diploma
                                <span className="block text-primary">300 Hours</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Take your teaching skills to the next level. Dive deeper into therapy, 
                                advanced asanas, anatomy, and Ayurveda fundamentals.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Quick Info */}
                <section className="py-12 bg-white border-b">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Duration</p>
                                    <p className="font-bold text-gray-900">6 Weeks</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-bold text-gray-900">Hyderabad, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Prerequisite</p>
                                    <p className="font-bold text-gray-900">200-Hour Certified</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                                    <Award className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Certification</p>
                                    <p className="font-bold text-gray-900">RYT300</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Curriculum */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold font-primary text-center mb-4">Advanced Curriculum</h2>
                            <p className="text-center text-gray-600 mb-12">
                                Deepen your knowledge and expand your teaching capabilities
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {curriculum.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
                                    >
                                        <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certification */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold font-primary mb-8">Certification</h2>
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <p className="text-lg text-gray-700 mb-6">
                                    Upon successful completion, you will receive certification from:
                                </p>
                                <div className="flex flex-wrap justify-center gap-8">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Award className="w-10 h-10 text-brand-blue" />
                                        </div>
                                        <p className="font-bold">Arunayoga</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Award className="w-10 h-10 text-brand-blue" />
                                        </div>
                                        <p className="font-bold">RYT300 - Yoga Alliance USA</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Award className="w-10 h-10 text-brand-blue" />
                                        </div>
                                        <p className="font-bold">Annamalai University*</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-brand-blue text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold font-primary mb-4">Ready to Advance Your Teaching?</h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Contact us for detailed pricing and upcoming batch dates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?subject=advanced-300">
                                <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                                    Contact for Details
                                </Button>
                            </Link>
                            <Link href="/teacher-training">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
                                    View All Courses
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
