'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Briefcase, Calendar, User, Eye } from 'lucide-react';
import { PortfolioItem } from '@/lib/data';

interface PortfolioProps {
  portfolio: PortfolioItem[];
}

export default function PortfolioGrid({ portfolio }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    'All',
    'Weddings',
    'Corporate',
    'Commercial Ads',
    'Reels',
    'YouTube',
    'Documentaries',
    'Podcasts',
    'Brand Content'
  ];

  const filteredItems = activeCategory === 'All'
    ? portfolio
    : portfolio.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="portfolio" className="relative py-24 bg-neutral-950/20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-medium font-sans">
            Visual Showcases
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-widest mt-2 uppercase">
            Featured Works
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold shadow-[0_4px_15px_rgba(245,158,11,0.2)]'
                  : 'bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Items Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 aspect-[4/3]"
                onClick={() => setSelectedItem(item)}
              >
                {/* Thumbnail Image */}
                <Image
                  src={item.thumbnailUrl}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Vignette Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 z-1" />

                {/* Hover Play/View Icon */}
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-amber-500/90 flex items-center justify-center text-black shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-500">
                    {item.mediaType === 'video' ? <Play size={20} className="fill-black ml-0.5" /> : <Eye size={20} />}
                  </div>
                </div>

                {/* Bottom Details Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-amber-500/20">
                    {item.category}
                  </span>
                  <h3 className="text-white text-base font-serif tracking-wide mt-3 uppercase truncate">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Premium Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 overflow-y-auto backdrop-blur-md"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer z-50"
              >
                <X size={20} />
              </button>

              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-neutral-950 border border-neutral-900 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col lg:flex-row my-8"
              >
                {/* Media Container */}
                <div className="relative w-full lg:w-3/5 bg-black aspect-video lg:aspect-auto flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
                  {selectedItem.mediaType === 'video' ? (
                    <video
                      src={selectedItem.mediaUrl}
                      poster={selectedItem.thumbnailUrl}
                      controls
                      autoPlay
                      playsInline
                      onCanPlay={(e) => e.currentTarget.play().catch(err => console.log("Video Autoplay Error:", err))}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Image
                      src={selectedItem.mediaUrl}
                      alt={selectedItem.title}
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  )}
                </div>

                {/* Info Container */}
                <div className="w-full lg:w-2/5 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-900">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold bg-amber-500/10 px-3 py-1.5 rounded border border-amber-500/20">
                        {selectedItem.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wider mt-4 leading-snug">
                        {selectedItem.title}
                      </h2>
                    </div>

                    <p className="text-neutral-400 text-sm leading-relaxed font-sans font-light">
                      {selectedItem.description}
                    </p>

                    {/* Metadata specs */}
                    <div className="border-t border-neutral-900 pt-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-amber-500">
                          <User size={14} />
                        </div>
                        <div>
                          <span className="text-neutral-600 text-[10px] uppercase tracking-wider block">Client</span>
                          <span className="text-white text-xs font-semibold">{selectedItem.client}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-amber-500">
                          <Calendar size={14} />
                        </div>
                        <div>
                          <span className="text-neutral-600 text-[10px] uppercase tracking-wider block">Project Year</span>
                          <span className="text-white text-xs font-semibold">{selectedItem.year}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-amber-500">
                          <Briefcase size={14} />
                        </div>
                        <div>
                          <span className="text-neutral-600 text-[10px] uppercase tracking-wider block">Medium Type</span>
                          <span className="text-white text-xs font-semibold uppercase">{selectedItem.mediaType} Showcase</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call-to-action */}
                  <div className="mt-8 border-t border-neutral-900 pt-6">
                    <button
                      onClick={() => {
                        setSelectedItem(null);
                        const contactEl = document.getElementById('contact');
                        if (contactEl) {
                          const offset = 80;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = contactEl.getBoundingClientRect().top;
                          window.scrollTo({
                            top: elementRect - bodyRect - offset,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className="w-full py-3.5 bg-neutral-900 hover:bg-amber-500 text-neutral-300 hover:text-black font-semibold text-xs uppercase tracking-widest rounded-xl transition-all border border-neutral-800 hover:border-amber-400 cursor-pointer"
                    >
                      Enquire About Similar Project
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
