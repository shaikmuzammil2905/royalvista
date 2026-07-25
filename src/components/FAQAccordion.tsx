'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ } from '@/lib/data';

interface FAQProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Extract categories
  const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category)))];

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category.toLowerCase() === activeCategory.toLowerCase());

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-medium font-sans">
            Have Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-widest mt-2 uppercase">
            Frequently Asked
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenId(null); // Close active questions
              }}
              className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-amber-500 text-black font-semibold shadow-[0_4px_12px_rgba(245,158,11,0.15)]'
                  : 'bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-neutral-950/40 border border-neutral-900/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-neutral-800"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors cursor-pointer"
                >
                  <span className="text-white text-sm sm:text-base font-serif uppercase tracking-wide font-medium pr-4">
                    {faq.question}
                  </span>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-850 flex items-center justify-center text-amber-400 group-hover:border-amber-500 transition-colors">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Answer Content Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans border-t border-neutral-900/40 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
