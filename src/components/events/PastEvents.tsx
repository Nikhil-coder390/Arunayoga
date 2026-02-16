"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const pastEvents = [
    { 
        title: "Community Yoga Sessions", 
        description: "Regular community yoga practice sessions bringing together practitioners of all levels",
        image: "/assets/community-1.jpeg" 
    },
    { 
        title: "Group Training Programs", 
        description: "Intensive yoga training programs for aspiring teachers and dedicated practitioners",
        image: "/assets/community-2.jpg" 
    },
    { 
        title: "Media Appearances", 
        description: "Yogini Arunadevi featured on TV9, ETV and other major media outlets",
        image: "/assets/etv-news-yoga.png" 
    },
    { 
        title: "Yoga Demonstrations", 
        description: "Public demonstrations and workshops showcasing traditional yoga practices",
        image: "/assets/classes-1.jpg" 
    },
];

export default function PastEvents() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-primary text-secondary mb-4">
                        Events & Activities
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join our community events, workshops, and special programs throughout the year
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pastEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative rounded-xl overflow-hidden group cursor-pointer h-80 shadow-lg"
                        >
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                                <p className="text-sm text-gray-200 line-clamp-2">{event.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/contact?subject=general" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                        Inquire About Upcoming Events
                    </Link>
                </div>
            </div>
        </section>
    );
}
