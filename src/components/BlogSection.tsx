'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Calendar, ArrowRight, X, BookOpen } from 'lucide-react';
import { Blog } from '@/lib/data';

interface BlogProps {
  blogs: Blog[];
}

export default function BlogSection({ blogs }: BlogProps) {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  return (
    <section id="blog" className="relative py-24 bg-neutral-950/20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-medium font-sans">
            Insights & Guides
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-widest mt-2 uppercase">
            Our Studio Blog
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col bg-neutral-950/40 border border-neutral-900 rounded-2xl overflow-hidden hover:border-amber-500/25 transition-all duration-500 backdrop-blur-sm"
            >
              {/* Blog Image */}
              <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
              </div>

              {/* Blog Details */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  {/* Meta items */}
                  <div className="flex items-center gap-4 text-neutral-400 text-[11px] uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-amber-500/80" />
                      <span>{blog.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-amber-500/80" />
                      <span>{blog.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-white text-base sm:text-xl font-serif uppercase tracking-wider mb-3 leading-snug group-hover:text-amber-400 transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-sans font-normal">
                    {blog.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold hover:text-white transition-colors cursor-pointer group/btn mt-auto"
                >
                  <span>Read Article</span>
                  <ArrowRight size={12} className="group-hover/btn:translate-x-1.5 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Read Blog Dialog */}
        <AnimatePresence>
          {selectedBlog && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 overflow-y-auto backdrop-blur-md"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer z-50"
              >
                <X size={20} />
              </button>

              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-neutral-950 border border-neutral-900 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl my-8 max-h-[85vh] flex flex-col"
              >
                {/* Header Image */}
                <div className="relative h-64 sm:h-80 w-full bg-neutral-900 shrink-0">
                  <Image
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                  
                  {/* Floating Date */}
                  <div className="absolute bottom-6 left-8 flex items-center gap-4 text-neutral-400 text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-sm border border-neutral-800 px-4 py-2 rounded-full">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-amber-500" />
                      <span>{selectedBlog.date}</span>
                    </span>
                    <span className="w-1 h-1 rounded-full bg-neutral-700" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-amber-500" />
                      <span>{selectedBlog.readTime}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 overflow-y-auto space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wider leading-snug">
                    {selectedBlog.title}
                  </h2>
                  <div className="w-12 h-[1px] bg-amber-500" />

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans font-light whitespace-pre-line pt-2">
                    {selectedBlog.content}
                  </p>
                  
                  {/* Dummy placeholder for longer reading content so it looks like a full post */}
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-sans font-light whitespace-pre-line pt-4 border-t border-neutral-900">
                    To read the full write-up, download industry-standard color grading workflows, or consult on a customized post-production strategy, feel free to drop an enquiry through our portal. Royal Vista Studio provides customized consultancy for luxury agencies globally.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
