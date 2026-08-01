'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Eye, Layers, Video, Sparkles, Image as ImageIcon } from 'lucide-react';
import { PortfolioItem } from '@/lib/data';

interface PortfolioProps {
  portfolio: PortfolioItem[];
}

export default function PortfolioGrid({ portfolio }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>('3D Models');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { name: '3D Models', icon: Layers },
    { name: 'Motion Graphics', icon: Sparkles },
    { name: 'Video Editing', icon: Video },
    { name: 'Photoshop', icon: ImageIcon },
  ];

  // Get available subcategories for active main category
  const subCategories = ['All', ...Array.from(new Set(
    portfolio
      .filter(item => item.category === activeCategory && item.subCategory)
      .map(item => item.subCategory as string)
  ))];

  // Filter items based on category and subCategory
  const filteredItems = portfolio.filter(item => {
    if (item.category !== activeCategory) return false;
    if (activeSubCategory !== 'All' && item.subCategory !== activeSubCategory) return false;
    return true;
  });

  return (
    <section id="portfolio" className="relative py-24 bg-black overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold font-sans block mb-2">
            Creative Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-widest uppercase">
            Featured Works
          </h2>
          <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Main Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setActiveSubCategory('All');
                }}
                className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-2xl text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold shadow-[0_4px_20px_rgba(245,158,11,0.3)] scale-105'
                    : 'bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-amber-500/40'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-black' : 'text-amber-400'} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Sub-Category Pills (for Video Editing and Photoshop) */}
        {subCategories.length > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto"
          >
            {subCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubCategory(sub)}
                className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                  activeSubCategory === sub
                    ? 'bg-neutral-200 text-black font-semibold'
                    : 'bg-neutral-900/50 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {sub}
              </button>
            ))}
          </motion.div>
        )}

        {/* Portfolio Items Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-950/90 shadow-xl hover:border-amber-500/50 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] transition-all duration-300 flex flex-col"
                onClick={() => setSelectedItem(item)}
              >
                {/* Media Container */}
                <div className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Hover Icon Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-black shadow-[0_0_20px_rgba(245,158,11,0.5)] transform scale-75 group-hover:scale-100 transition-all duration-300">
                      {item.mediaType === 'drive_video' || item.mediaType === 'video' ? (
                        <Play size={22} className="fill-black ml-1" />
                      ) : (
                        <Eye size={22} />
                      )}
                    </div>
                  </div>

                  {/* Category & Subcategory Badge */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md border border-amber-500/30 shadow-md">
                      {item.subCategory ? item.subCategory : item.category}
                    </span>
                  </div>
                </div>

                {/* Card Title & Info */}
                <div className="p-5 flex flex-col justify-between bg-neutral-950 border-t border-neutral-900">
                  <h3 className="text-white text-base sm:text-lg font-serif font-medium tracking-wide uppercase group-hover:text-amber-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-neutral-400 text-xs mt-1.5 line-clamp-2 leading-relaxed font-sans font-normal">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Animated Popup / Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-xl"
              onClick={() => setSelectedItem(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="fixed top-5 right-5 p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-amber-400 transition-all cursor-pointer z-[100000] shadow-2xl"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-neutral-950 border border-neutral-800 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Media Section */}
                <div className="relative w-full bg-black min-h-[350px] sm:min-h-[500px] max-h-[75vh] flex items-center justify-center overflow-hidden">
                  {selectedItem.mediaType === 'drive_video' ? (
                    <iframe
                      src={selectedItem.mediaUrl}
                      allow="autoplay; fullscreen"
                      className="w-full h-full min-h-[350px] sm:min-h-[500px] border-0 rounded-t-3xl"
                    />
                  ) : selectedItem.mediaType === 'video' ? (
                    <video
                      src={selectedItem.mediaUrl}
                      poster={selectedItem.thumbnailUrl}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full max-h-[75vh] object-contain"
                    />
                  ) : (
                    <div className="relative w-full h-full min-h-[350px] sm:min-h-[500px] max-h-[75vh] flex items-center justify-center p-2">
                      <Image
                        src={selectedItem.mediaUrl}
                        alt={selectedItem.title}
                        fill
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Content Section (Metadata client/year removed) */}
                <div className="p-6 sm:p-8 bg-gradient-to-b from-neutral-950 to-black border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/30">
                        {selectedItem.category}
                      </span>
                      {selectedItem.subCategory && (
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-300 bg-neutral-900 px-3 py-1 rounded border border-neutral-800">
                          {selectedItem.subCategory}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider">
                      {selectedItem.title}
                    </h2>
                    {selectedItem.description && (
                      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
                        {selectedItem.description}
                      </p>
                    )}
                  </div>

                  {/* Enquiry Action Button */}
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
                    className="shrink-0 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold text-xs uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
