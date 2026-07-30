"use client";

import { motion } from "framer-motion";
import { PlayCircle, ExternalLink, Star, Quote, CheckCircle2 } from "lucide-react";
import { getReviewSchema } from "@/data/schemas";

const testimonials = [
  {
    id: "paralysis-recovery",
    title: "Paralysis Recovery Story",
    author: "K. Ramesh Rao",
    role: "Therapeutic Patient",
    rating: 5,
    quote:
      "I came to Arunayoga after suffering from paralysis and had difficulty walking and performing daily activities. Through consistent therapeutic yoga sessions and expert guidance, I gradually regained strength, confidence, and mobility. The instructors were patient, knowledgeable, and supportive throughout my recovery. Today I feel healthier, stronger, and much more independent. I sincerely recommend Arunayoga to anyone looking for authentic therapeutic yoga.",
    youtubeUrl: "https://www.youtube.com/watch?v=CWdc-P2AcRU",
    hasVideo: true,
  },
  {
    id: "teacher-training-grad",
    title: "200-Hour RYT Graduate Experience",
    author: "Rajesh Varma",
    role: "Certified Yoga Instructor",
    rating: 5,
    quote:
      "Completing my 200-hour RYT Teacher Training at Arunayoga was a truly life-changing experience. Yogini Arunadevi's deep knowledge of Hatha Yoga and therapeutic alignment is unmatched. It is genuinely the best yoga center in hyderabad for anyone serious about mastering traditional yoga. The structured curriculum helped me launch my yoga teaching career with total confidence.",
    hasVideo: false,
  },
  {
    id: "panchakarma-wellness",
    title: "Therapeutic Healing & Stress Relief",
    author: "Priya Sharma",
    role: "Wellness & Therapy Student",
    rating: 5,
    quote:
      "I traveled from Mumbai specifically to undergo therapeutic yoga and stress relief therapy at Arunayoga. Having visited multiple retreats, I can confidently say this is the best yoga center in india for authentic, root-cause healing. The combination of customized Pranayama, Shirodhara, and alignment corrected my chronic back pain and anxiety within weeks.",
    hasVideo: false,
  },
  {
    id: "medical-research",
    title: "Scientific Approach to Yoga Therapy",
    author: "Dr. Anita Reddy",
    role: "Healthcare Professional & Yoga Student",
    rating: 5,
    quote:
      "As a medical professional, I was looking for a scientifically grounded yoga academy. Arunayoga (ATRI) stands out as the best training and research institute for therapeutic yoga. Their evidence-based approach to spinal care, paralysis rehabilitation, and breathwork bridges ancient yogic wisdom with modern physiological understanding seamlessly.",
    hasVideo: false,
  },
  {
    id: "mobility-posture",
    title: "Mobility & Posture Recovery Story",
    author: "Sunitha Rao",
    role: "Therapeutic Patient",
    rating: 5,
    quote:
      "After joining Arunayoga's therapeutic yoga program, I experienced significant improvements in flexibility, posture, and confidence. The personalized guidance and structured sessions made a remarkable difference in my recovery. I truly appreciate the dedication of the instructors and highly recommend Arunayoga.",
    youtubeUrl: "https://www.youtube.com/watch?v=_LRu5KXZ6Sc",
    hasVideo: true,
  },
  {
    id: "daily-practitioner",
    title: "Daily Practice & Holisitic Health",
    author: "Suresh Kumar",
    role: "Corporate Executive & Daily Batch Student",
    rating: 5,
    quote:
      "I have been attending morning Hatha Yoga classes in Banjara Hills for over 2 years now. The peaceful environment, experienced teachers, and holistic focus make Arunayoga the best yoga center in hyderabad for daily wellness. It's not just a yoga class—it's the best training and research institute for lifelong physical and mental balance.",
    hasVideo: false,
  },
];

export default function Testimonials() {
  const reviewSchema = getReviewSchema(
    testimonials.map((t) => ({
      author: `${t.author} (${t.role})`,
      reviewBody: t.quote,
      ratingValue: t.rating,
    }))
  );

  return (
    <section className="py-20 bg-brand-dark-grey text-white relative overflow-hidden font-primary">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
            Student Stories & Real Feedback
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold font-primary mb-4 text-white">
            What Our Students & Patients Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
            Discover why students and patients rate Arunayoga as the premier yoga training & therapeutic research institute in Hyderabad and across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:bg-white/10 hover:border-primary/40 transition-all shadow-xl backdrop-blur-xs"
            >
              <div>
                {/* Header & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/70 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3 h-3 text-primary" /> Verified Feedback
                  </span>
                </div>

                <h3 className="text-lg font-bold font-primary text-white mb-3">
                  {testimonial.title}
                </h3>

                {/* Quote */}
                <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 font-primary relative pl-4 border-l-2 border-primary">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              {/* Footer Author & Action */}
              <div className="pt-4 border-t border-white/10">
                <div className="mb-3">
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-primary font-medium">
                    {testimonial.role}
                  </p>
                </div>

                {testimonial.hasVideo && testimonial.youtubeUrl ? (
                  <a
                    href={testimonial.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-all w-full shadow-sm group"
                  >
                    <PlayCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Watch Video Story on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@ArunaYogaOfficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors bg-white/5 hover:bg-primary/20 px-6 py-3 rounded-full border border-primary/30"
          >
            <PlayCircle className="w-4 h-4" /> Watch More Student Stories & Reviews on Official YouTube <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
