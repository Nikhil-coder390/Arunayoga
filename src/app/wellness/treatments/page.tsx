"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, Droplets, Eye, Brain, Activity, Heart, Wind, Flower2 } from "lucide-react";
import treatmentsImage from "@/assets/IMG_0872.jpg";

const treatments = [
    {
        title: "Ayurvedic Body Massage – Abhyanga/Udvartana",
        description: "An ancient Indian Ayurvedic massage therapy for healing and detoxifying Body, Mind, and Spirit. Performed using herbal oils and powders.",
        benefits: [
            "Rejuvenates the whole body",
            "Cleans your body (detoxify)",
            "Prevents stiffness of muscles",
            "Releases fatigue",
            "Corrects digestion, blood pressure & improves sleep"
        ],
        icon: Leaf,
        color: "text-brand-green bg-brand-green/10",
        border: "border-brand-green"
    },
    {
        title: "Healing Marma Point Massage",
        description: "Awakens 'energy points' throughout the body. Helps to release stress on cellular and subtle levels when our biorhythm is out of balance.",
        benefits: [
            "Helps to relax the nervous system",
            "Relieves stress, anxiety, depression",
            "Deeply relaxes mind and body",
            "Stimulates the flow of prana (72,000 nadis)",
            "Improves sensitivity of the five senses"
        ],
        icon: Activity,
        color: "text-brand-light-blue bg-brand-light-blue/10",
        border: "border-brand-light-blue"
    },
    {
        title: "Lower Back Treatment - Kati Vasti",
        description: "Specialized therapy using warm herbal oil poured over the lumbar sacral area and retained inside a dough dam. Combined with a spinal massage.",
        benefits: [
            "Increases circulation, nourishes muscles and nerves",
            "Pacifies Vata, relieving pain and tension",
            "Restores flexibility",
            "Relieves chronic lower backaches and spasms"
        ],
        icon: Heart,
        color: "text-primary bg-primary/10",
        border: "border-primary"
    },
    {
        title: "Upper Back Treatment - Greeva Vasti",
        description: "Similar to Kati Vasti, but focused on relieving and nourishing the upper back and cervical area.",
        benefits: [
            "Relieves upper back and neck tension",
            "Strengthens bone tissue in cervical area",
            "Melts spinal rigidity"
        ],
        icon: Brain,
        color: "text-brand-blue bg-brand-blue/10",
        border: "border-brand-blue"
    },
    {
        title: "Knee Support & Rejuvenation - Janu Vasti",
        description: "Your knee is bathed in warm medicated oils or herbal decoctions, promoting joint strength by improving circulation.",
        benefits: [
            "Relief of knee joint pain",
            "Alleviates Osteoarthritis of the knee joint"
        ],
        icon: Droplets,
        color: "text-secondary bg-secondary/10",
        border: "border-secondary"
    },
    {
        title: "Digestion Improvement - Nabhi Vasti",
        description: "Balances the Nabhi Marma (navel center) where energy pathways converge using warm medicated ghee and steam towels.",
        benefits: [
            "Strengthens digestion and absorption",
            "Relieves irritable bowel, flatulence, constipation",
            "Facilitates release of deeply seated emotions"
        ],
        icon: Wind,
        color: "text-accent bg-accent/10",
        border: "border-accent"
    },
    {
        title: "Eye Relaxation - Netra Vasti",
        description: "Nourishing ghee eye bath therapy. Highly recommended for people constantly reading or exposed to screens.",
        benefits: [
            "Refreshes tired, sore, dry, and itchy eyes",
            "Eases wrinkles and dark circles",
            "Improves vision & relieves twitches",
            "Preventive therapy for Diabetes/Hypertension patients"
        ],
        icon: Eye,
        color: "text-brand-green-2 bg-brand-green-2/10",
        border: "border-brand-green-2"
    },
    {
        title: "Navarakidi",
        description: "Ancient Ayurvedic ritual using organic ingredients like milk and rice for radiant skin, pain relief, and deep relaxation.",
        benefits: [
            "Radiant skin",
            "Relief from body pains",
            "Improved blood circulation",
            "Profound Relaxation"
        ],
        icon: Flower2,
        color: "text-brand-dark-grey bg-brand-dark-grey/10",
        border: "border-brand-dark-grey"
    }
];

export default function TreatmentsPage() {
    return (
        <>
            <main className="pt-20 bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <section className="relative min-h-[50vh] flex items-center bg-brand-dark-grey text-white overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={treatmentsImage}
                            alt="Ayurvedic Treatments"
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-grey/90 to-transparent z-0" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block flex items-center gap-2">
                                <Leaf className="w-4 h-4" />
                                Holistic Healing
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold font-primary mb-6 text-white">
                                Ayurvedic Treatments
                            </h1>
                            <p className="text-xl text-gray-200 leading-relaxed">
                                Arunayoga helps you in prevention and cure with natural therapies that include:
                                Ayurveda, Detoxification, Stress-relief, Panchakarma, Traditional Herbal Medicine,
                                Aroma Therapy, Acupressure and Homeopathy.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Shirodhara Highlight */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-brand-blue/5 rounded-3xl p-8 lg:p-12 border border-brand-blue/10">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="md:w-1/2"
                            >
                                <h2 className="text-h3 font-primary text-brand-dark-grey font-bold mb-4">
                                    Shirodhara Treatment
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Experience the ancient Ayurvedic ritual to rest and calm the mind. A steady flow of warm oil
                                    onto the forehead stimulates the pituitary gland, or "third-eye." This treatment is profoundly
                                    relaxing and nourishing, improving mental clarity and comprehension.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Relieves stress, anxiety, depression, and insomnia",
                                        "Reduces migraine headaches and hair loss",
                                        "Rejuvenates the face and softens worry lines",
                                        "Balances Vata Dosha and 'Praan Vaayu'"
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-1.5 flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg">
                                    Book Shirodhara
                                </Button>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="md:w-1/2 relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src="/assets/ayurvedic-treatment-1.jpg"
                                    alt="Shirodhara Treatment"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Treatment Grid */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold font-primary text-brand-dark-grey mb-4">
                                Discover Our Healing Therapies
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Ancient ayurvedic techniques to balance your body, mind, and spirit.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {treatments.map((treatment, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (idx % 3) * 0.1 }}
                                    className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border-t-4 ${treatment.border}`}
                                >
                                    <div className={`w-14 h-14 ${treatment.color} rounded-xl flex items-center justify-center mb-6`}>
                                        <treatment.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold font-primary text-brand-dark-grey mb-3">
                                        {treatment.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {treatment.description}
                                    </p>
                                    <h4 className="font-semibold text-gray-800 text-sm mb-3 uppercase tracking-wider">Benefits:</h4>
                                    <ul className="space-y-2">
                                        {treatment.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-1.5 flex-shrink-0" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Wellness Packages CTA */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-brand-green/10 rounded-3xl p-10 flex flex-col items-center text-center border border-brand-green/20">
                                <Leaf className="w-12 h-12 text-brand-green mb-4" />
                                <h3 className="text-2xl font-bold font-primary text-brand-dark-grey mb-3">
                                    Ayurvedic Detox
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Purify Body, Mind & Heart with our specialized 1, 3, or 5-day detox programs.
                                </p>
                                <Link href="/wellness/detox" className="mt-auto">
                                    <Button className="bg-brand-green hover:bg-brand-green/90 text-white w-full">
                                        Know More
                                    </Button>
                                </Link>
                            </div>

                            <div className="bg-brand-light-blue/10 rounded-3xl p-10 flex flex-col items-center text-center border border-brand-light-blue/20">
                                <Brain className="w-12 h-12 text-brand-light-blue mb-4" />
                                <h3 className="text-2xl font-bold font-primary text-brand-dark-grey mb-3">
                                    Ayurvedic Stress-Relief
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Become peaceful in mind & heart. Treat anxiety, insomnia, and fatigue naturally.
                                </p>
                                <Link href="/wellness/stress-relief" className="mt-auto">
                                    <Button className="bg-brand-light-blue hover:bg-brand-light-blue/90 text-white w-full">
                                        Know More
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
