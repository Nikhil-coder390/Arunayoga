"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Clock, MapPin, Users, Award, Calendar } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const curriculum = [
    "Asanas, Mudras, Bandhas, Pranayamas",
    "Shatkriyas (Cleansing Techniques)",
    "Chanting and Mantras",
    "Relaxation techniques including Yoga Nidra",
    "Meditation (Dhyan)",
    "Teaching Methodology",
    "Asana alignment and modifications",
    "Voice modulation and use of props",
    "Patanjali Yoga Sutras",
    "Principles of Anatomy & Physiology",
    "Yogic Anatomy",
    "Yoga Philosophy, Lifestyle and Ethics",
    "Teaching practicum with feedback",
    "Communication techniques",
    "Time management and boundaries"
];

const codeOfConduct = [
    "Discipline is an integral part of the training program",
    "Course routine must be strictly observed",
    "Minimum 90% attendance required for evaluation",
    "Ensure punctuality - late entry not permitted once class begins",
    "Smoking and alcohol are not permitted during training",
    "Respect for rules and regulations is mandatory"
];

export default function Diploma200Page() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-brand-dark-grey text-white overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/assets/community-1.jpeg"
                            alt="Yoga Teacher Training"
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
                                Yoga Alliance Certified
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold font-primary mb-6">
                                Diploma in Yoga
                                <span className="block text-primary">200 Hours</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Perfect for beginners and those looking to deepen their personal practice. 
                                Learn the fundamentals of traditional yoga techniques.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Quick Info */}
                <section className="py-12 bg-white border-b">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Duration</p>
                                    <p className="font-bold text-gray-900">4 Weeks</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-bold text-gray-900">Hyderabad, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Batch Size</p>
                                    <p className="font-bold text-gray-900">25 Students</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Certification</p>
                                    <p className="font-bold text-gray-900">RYT200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold font-primary text-center mb-12">Course Fees</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary">
                                    <h3 className="text-xl font-bold mb-2">International Students</h3>
                                    <div className="text-4xl font-bold text-primary mb-4">USD 1,800</div>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Food & Accommodation Included
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Shared Accommodation
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            All Course Materials
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <h3 className="text-xl font-bold mb-2">Indian Students</h3>
                                    <div className="text-4xl font-bold text-primary mb-4">INR 75,000</div>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Course Fee Only
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Food & Accommodation: INR 25,000 extra
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            All Course Materials
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-6">
                                * Non-refundable booking amount: INR 10,000 or USD 200. Option to switch batches within 12 months.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Curriculum */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold font-primary text-center mb-4">What You Will Learn</h2>
                            <p className="text-center text-gray-600 mb-12">
                                Comprehensive curriculum covering all aspects of traditional yoga
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {curriculum.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                                    >
                                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certification */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold font-primary mb-8">Certification</h2>
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <p className="text-lg text-gray-700 mb-6">
                                    Upon successful completion, you will receive certification from:
                                </p>
                                <div className="flex flex-wrap justify-center gap-8">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Award className="w-10 h-10 text-primary" />
                                        </div>
                                        <p className="font-bold">Arunayoga</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Award className="w-10 h-10 text-primary" />
                                        </div>
                                        <p className="font-bold">RYT200 - Yoga Alliance USA</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Award className="w-10 h-10 text-primary" />
                                        </div>
                                        <p className="font-bold">Annamalai University*</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-6">
                                    * University affiliation may change. Certification from university based on their evaluation criteria.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Code of Conduct */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold font-primary text-center mb-8">Ethical Guidelines & Code of Conduct</h2>
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <p className="text-gray-700 mb-6">
                                    Arunayoga adopts the ancient approach to yoga. The day begins with daily regimen (Dinacharya) 
                                    and ancient code of conduct. Maharishi Patanjali prescribed Yama (social conduct) and 
                                    Niyama (personal conduct) which students are expected to practice sincerely.
                                </p>
                                <ul className="space-y-3">
                                    {codeOfConduct.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-primary text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold font-primary mb-4">Ready to Begin Your Journey?</h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Join our next batch and transform your life through the ancient wisdom of yoga.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?subject=diploma-200">
                                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                                    Apply Now
                                </Button>
                            </Link>
                            <Link href="/teacher-training">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
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
