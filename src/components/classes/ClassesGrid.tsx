"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { X } from "lucide-react";

const classes = [
    {
        title: "Shat Karma",
        level: "All Levels",
        description: "Practice and techniques of cleansing techniques (Shat karma) to purify the body and prepare for deeper yoga practices.",
        benefits: ["Body purification", "Toxin removal", "Prepares for asana"],
        color: "bg-brand-green",
    },
    {
        title: "Asana Practice",
        level: "All Levels",
        description: "Practice and techniques of physical postures (Asana) to build strength, flexibility, and balance in body and mind.",
        benefits: ["Physical strength", "Flexibility", "Body alignment"],
        color: "bg-brand-blue",
    },
    {
        title: "Pranayama",
        level: "All Levels",
        description: "Practice and techniques of breathing practices (Pranayama) to control life force energy and calm the mind.",
        benefits: ["Breath control", "Energy balance", "Mental clarity"],
        color: "bg-accent",
    },
    {
        title: "Yoga Nidra",
        level: "All Levels",
        description: "Practice of deep relaxation (Yoga Nidra) - a powerful technique for complete physical, mental and emotional relaxation.",
        benefits: ["Deep relaxation", "Stress relief", "Better sleep"],
        color: "bg-primary",
    },
    {
        title: "Dhyan (Meditation)",
        level: "All Levels",
        description: "Practice of meditation (Dhyan) to develop concentration, awareness and inner peace through traditional techniques.",
        benefits: ["Mental focus", "Inner peace", "Self-awareness"],
        color: "bg-brand-dark-grey",
    },
    {
        title: "Mantra Chanting",
        level: "All Levels",
        description: "Traditional mantra chanting practices to create positive vibrations, enhance concentration and spiritual connection.",
        benefits: ["Spiritual growth", "Positive energy", "Mind purification"],
        color: "bg-secondary",
    }
];

export default function ClassesGrid() {
    const [selectedClass, setSelectedClass] = useState<string | null>(null);

    const morningSchedule = [
        "6:00 AM - 7:00 AM",
        "7:00 AM - 8:00 AM",
        "8:00 AM - 9:00 AM",
        "9:00 AM - 10:00 AM",
        "10:00 AM - 11:00 AM",
    ];

    const eveningSchedule = [
        "4:00 PM - 5:00 PM",
        "5:00 PM - 6:00 PM",
        "6:00 PM - 7:00 PM",
        "7:00 PM - 8:00 PM",
    ];

    return (
        <>
            <section id="daily-classes" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-primary text-secondary mb-12 text-center">
                        Our Daily Classes
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {classes.map((cls, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 bg-white flex flex-col h-full"
                            >
                                <div className={`h-2 ${cls.color}`} />
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold font-primary text-gray-800 group-hover:text-primary transition-colors">
                                            {cls.title}
                                        </h3>
                                        <span className={`text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 font-medium`}>
                                            {cls.level}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                                        {cls.description}
                                    </p>

                                    <div className="mb-6">
                                        <span className="text-sm font-semibold text-gray-700 block mb-2">Key Benefits:</span>
                                        <ul className="space-y-1">
                                            {cls.benefits.map((benefit, i) => (
                                                <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${cls.color}`} />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex gap-3 mt-auto">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="w-full"
                                            onClick={() => setSelectedClass(cls.title)}
                                        >
                                            View Schedule
                                        </Button>
                                        <Link href="/contact?subject=demo" className="w-full">
                                            <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                                                Book Demo
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedClass ? (
                <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden">
                        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                            <div>
                                <h3 className="text-xl font-bold font-primary text-primary">{selectedClass} - Class Schedule</h3>
                                <p className="text-sm text-gray-500">Monday to Saturday | Sunday off</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedClass(null)}
                                className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
                                aria-label="Close schedule popup"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 p-6">
                            <div className="rounded-xl border border-gray-200 overflow-hidden">
                                <div className="bg-primary text-white px-4 py-3 text-sm font-semibold">Morning Batches</div>
                                <ul className="divide-y divide-gray-100">
                                    {morningSchedule.map((slot) => (
                                        <li key={slot} className="px-4 py-2.5 text-sm text-gray-700">{slot}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-xl border border-gray-200 overflow-hidden">
                                <div className="bg-secondary text-white px-4 py-3 text-sm font-semibold">Evening Batches</div>
                                <ul className="divide-y divide-gray-100">
                                    {eveningSchedule.map((slot) => (
                                        <li key={slot} className="px-4 py-2.5 text-sm text-gray-700">{slot}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="px-6 pb-6 text-sm text-gray-600">
                            For consultation, trial class, or updated slot availability, call +91 9440698003 or contact us.
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
