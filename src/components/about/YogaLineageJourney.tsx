"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function YogaLineageJourney() {
    return (
        <section className="py-24 bg-[#fdf8f2] overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">
                        A Sacred Heritage
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold font-primary text-brand-dark-grey">
                        The Inheritance of Yoga Through Generations
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
                        From an ancient lineage of spiritual healers to a world-renowned institute — a journey spanning generations.
                    </p>
                </motion.div>

                {/* First Section: Siddhayogini Sadamma - details LEFT, image RIGHT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white/70 backdrop-blur rounded-2xl border border-black/5 shadow-sm p-6 lg:p-8 max-w-5xl mx-auto"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex-1 order-2 lg:order-1">
                            <h3 className="text-[#7a4f1e] font-bold text-2xl lg:text-3xl font-primary">Siddhayogini Sadamma</h3>
                            <p className="text-gray-500 text-sm mt-1">Legendary Healer & Yoga Guru</p>
                            <div className="mt-6 space-y-3">
                                {["Great-grandmother of Yogini Arunadevi", "Taught yoga to PM Jawaharlal Nehru & Indira Gandhi", "Renowned Siddha healer & spiritual master", "Preserved ancient Hatha & Kriya traditions", "A beacon of wisdom in pre-independence India"].map((point, i) => (
                                    <div key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <span className="w-2 h-2 rounded-full bg-[#c8a96e] mt-1.5 flex-shrink-0" />
                                        {point}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative w-[280px] h-[320px] rounded-xl overflow-hidden shadow-2xl border-4 border-[#c8a96e] flex-shrink-0 order-1 lg:order-2"
                             style={{ filter: "sepia(0.3) contrast(1.05)" }}>
                            <Image
                                src="/assets/siddhayogini-sadamma-1.jpg"
                                alt="Siddhayogini Sadamma"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                <p className="text-white font-bold text-lg font-primary leading-tight">Siddhayogini Sadamma</p>
                                <p className="text-[#f0d080] text-xs tracking-wide uppercase mt-1">Legendary Healer & Yoga Guru</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Arrow Transition labeled 'Parampara' */}
                <div className="relative flex items-center justify-center py-12">
                    <svg
                        className="hidden lg:block w-[300px] h-[180px]"
                        viewBox="0 0 300 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <path
                                id="paramparaPath"
                                d="M 150 20 C 100 60, 200 120, 150 160"
                            />
                        </defs>

                        <motion.path
                            d="M 150 20 C 100 60, 200 120, 150 160"
                            stroke="#c8a96e"
                            strokeWidth="2.5"
                            strokeDasharray="8 6"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.6, ease: "easeInOut" }}
                        />
                        <motion.polygon
                            points="142,160 158,160 150,172"
                            fill="#c8a96e"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.45, duration: 0.35 }}
                        />

                        <text x="150" y="90" fill="#7a4f1e" fontSize="13" fontWeight="700" letterSpacing="0.22em" textAnchor="middle">
                            PARAMPARA
                        </text>
                    </svg>

                    <svg
                        className="block lg:hidden w-[220px] h-[160px]"
                        viewBox="0 0 220 160"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <path id="paramparaPathMobile" d="M 110 10 C 160 50, 60 100, 110 140" />
                        </defs>
                        <motion.path
                            d="M 110 10 C 160 50, 60 100, 110 140"
                            stroke="#c8a96e"
                            strokeWidth="2.5"
                            strokeDasharray="8 6"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.3, ease: "easeInOut" }}
                        />
                        <motion.polygon
                            points="102,140 118,140 110,152"
                            fill="#c8a96e"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.15, duration: 0.35 }}
                        />
                        <text x="110" y="75" fill="#7a4f1e" fontSize="12" fontWeight="700" letterSpacing="0.22em" textAnchor="middle">
                            PARAMPARA
                        </text>
                    </svg>
                </div>

                {/* Second Section: Yogini Arunadevi - image LEFT, details RIGHT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="bg-white/70 backdrop-blur rounded-2xl border border-black/5 shadow-sm p-6 lg:p-8 max-w-5xl mx-auto"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="relative w-[280px] h-[320px] rounded-xl overflow-hidden shadow-2xl border-4 border-primary flex-shrink-0">
                            <Image
                                src="/assets/arunadevi-1.jpg"
                                alt="Yogini Arunadevi"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                <p className="text-white font-bold text-lg font-primary leading-tight">Yogini Arunadevi</p>
                                <p className="text-primary/90 text-xs tracking-wide uppercase mt-1">Founder & Director, ATRI</p>
                            </div>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-primary font-bold text-2xl lg:text-3xl font-primary">Yogini Arunadevi</h3>
                            <p className="text-gray-500 text-sm mt-1">Carrying tradition into modern life</p>
                            <div className="mt-6 space-y-3">
                                {["Over 35 years of dedicated teaching", "Founded ATRI — Arunayoga Training & Research Institute", "Yoga Alliance USA certified (RYT 200 & 500)", "Treated 10,000+ students across 50+ countries", "Author, TV personality & award-winning yoga guru"].map((point, i) => (
                                    <div key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                        {point}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block border-t-2 border-b-2 border-[#c8a96e]/40 py-6 px-8 max-w-3xl">
                        <p className="text-xl text-gray-600 italic font-light leading-relaxed">
                            &ldquo;The wisdom passed down through generations is not just knowledge — it is a living flame that must be kept burning for the world.&rdquo;
                        </p>
                        <p className="mt-3 text-[#c8a96e] font-semibold text-sm tracking-wide">— Yogini Arunadevi</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
