'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '@/lib/data';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsProps) {
  
  // Render golden stars representing rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-800'}
      />
    ));
  };

  return (
    <section id="testimonials" className="relative py-24 bg-neutral-950/20 overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-medium font-sans">
            Client Words
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-widest mt-2 uppercase">
            Testimonials
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-neutral-950/40 border border-neutral-900 hover:border-amber-500/20 p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-amber-500/20 absolute top-6 right-6">
                  <Quote size={40} />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {renderStars(test.rating)}
                </div>

                {/* Testimonial Review */}
                <p className="text-neutral-300 text-sm leading-relaxed italic mb-8 font-sans font-light">
                  "{test.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-neutral-900 pt-6 mt-4">
                <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-serif">
                  {test.name}
                </h4>
                <p className="text-neutral-500 text-xs font-sans mt-0.5">
                  {test.role} at <span className="text-amber-500/80">{test.company}</span>
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
