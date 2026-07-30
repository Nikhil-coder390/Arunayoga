"use client";

import { motion } from "framer-motion";
import { PlayCircle, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import { getReviewSchema } from "@/data/schemas";

const writtenTestimonials = [
  {
    id: "paralysis-recovery",
    title: "Paralysis Recovery Testimonial",
    author: "Therapeutic Patient",
    rating: 5,
    quote:
      "I came to Arunayoga after suffering from paralysis and had difficulty walking and performing daily activities. Through consistent therapeutic yoga sessions and expert guidance, I gradually regained strength, confidence, and mobility. The instructors were patient, knowledgeable, and supportive throughout my recovery. Today I feel healthier, stronger, and much more independent. I sincerely recommend Arunayoga to anyone looking for authentic therapeutic yoga.",
    youtubeUrl: "https://www.youtube.com/watch?v=CWdc-P2AcRU",
    thumbnail: "/assets/community-1.jpeg",
  },
  {
    id: "mobility-posture",
    title: "Mobility & Posture Recovery Testimonial",
    author: "Therapeutic Patient",
    rating: 5,
    quote:
      "After joining Arunayoga's therapeutic yoga program, I experienced significant improvements in flexibility, posture, and confidence. The personalized guidance and structured sessions made a remarkable difference in my recovery. I truly appreciate the dedication of the instructors and highly recommend Arunayoga.",
    youtubeUrl: "https://www.youtube.com/watch?v=_LRu5KXZ6Sc",
    thumbnail: "/assets/community-2.jpg",
  },
];

export default function Testimonials() {
  const reviewSchema = getReviewSchema(
    writtenTestimonials.map((t) => ({
      author: t.author,
      reviewBody: t.quote,
      ratingValue: t.rating,
    }))
  );

  return (
    <section className="py-20 bg-brand-dark-grey text-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
            Student Stories & Patient Recovery
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-primary mb-3">
            Real Recovery Stories & Testimonials
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Discover how authentic therapeutic yoga at Arunayoga Hyderabad transforms lives and restores mobility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {writtenTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:bg-white/10 transition-all shadow-lg"
            >
              <div>
                {/* Header & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold font-primary text-white">
                    {testimonial.title}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-200 text-base leading-relaxed mb-6 font-primary italic border-l-2 border-primary pl-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              {/* YouTube Action Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/70 font-semibold uppercase tracking-wider">
                  Verified Video Story
                </span>
                <a
                  href={testimonial.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-full text-xs transition-all shadow-sm group"
                >
                  <PlayCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Watch Full Story on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/results?search_query=arunayoga+testimonials"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/90 hover:text-white underline underline-offset-4"
          >
            Watch More Recovery Videos on YouTube <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
