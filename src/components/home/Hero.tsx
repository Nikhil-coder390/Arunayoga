"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
    const [videoEnded, setVideoEnded] = useState(false);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-16">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/classes-1.jpg"
                    alt="Yogini Arunadevi leading a yoga session"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-white drop-shadow-md">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="text-center lg:text-left">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-base md:text-lg mb-4 font-medium"
                        >
                            "Yoga is not a religion. It is a science."
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-primary leading-tight drop-shadow-lg"
                        >
                            Arunayoga Training
                            <br />
                            & Research Institute
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.35 }}
                            className="text-lg md:text-xl mb-8 max-w-2xl font-light"
                        >
                            Surrounded by lush greenery - a unique and serene place to practice yoga and meditation.
                            <span className="text-gray-200 text-base mt-2 block">
                                Daily Classes • Yoga Teacher Training • Treatments
                            </span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                        >
                            <Link href="/classes">
                                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-0">
                                    To know more
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-black"
                                >
                                    Contact Us
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45 }}
                        className="mx-auto w-full max-w-[340px]"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/25 bg-black/25 shadow-2xl">
                            {!videoEnded ? (
                                <video
                                    src="/assets/logo-reveal-video.mp4"
                                    autoPlay
                                    muted
                                    playsInline
                                    onEnded={() => setVideoEnded(true)}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-white/90">
                                    <Image
                                        src="/assets/logo.png"
                                        alt="Arunayoga logo"
                                        width={240}
                                        height={240}
                                        className="h-100 w-100 object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </motion.div>
        </section>
    );
}
