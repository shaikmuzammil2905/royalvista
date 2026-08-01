'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, Target, Compass, Award, Shield, Cpu, Users, Star, Flame, RefreshCw, Zap } from 'lucide-react';
import { Settings } from '@/lib/data';

interface AboutProps {
  settings: Settings;
}

export default function AboutSection({ settings }: AboutProps) {
  // Map core values to matching luxury icons
  const iconMap: { [key: string]: React.ReactNode } = {
    "Excellence": <Award size={20} className="text-amber-400" />,
    "Creativity": <Star size={20} className="text-amber-400" />,
    "Innovation": <Cpu size={20} className="text-amber-400" />,
    "Client First": <Users size={20} className="text-amber-400" />,
    "Integrity": <Shield size={20} className="text-amber-400" />,
    "Quality Without Compromise": <Compass size={20} className="text-amber-400" />,
    "Passion": <Flame size={20} className="text-amber-400" />,
    "Commitment": <Zap size={20} className="text-amber-400" />,
    "Continuous Growth": <RefreshCw size={20} className="text-amber-400" />
  };

  const valueDescriptions: { [key: string]: string } = {
    "Excellence": "Uncompromising commitment to top-tier quality and artistic precision in every visual project we deliver.",
    "Creativity": "Innovative visual concepts and bespoke storytelling tailored to elevate your brand identity.",
    "Innovation": "Utilizing cutting-edge 3D animation, AI tools, and post-production technologies to redefine visuals.",
    "Client First": "Dedicated partnership and transparent communication centered on realizing your unique creative vision.",
    "Integrity": "Honest workflows, realistic timelines, and reliable delivery adhering to absolute professional standards.",
    "Quality Without Compromise": "Rigorously crafted frame-by-frame visual perfection without shortcuts, ensuring lasting impressions.",
    "Passion": "Genuine artistic drive and enthusiasm infused into every animation, color grade, and frame edit.",
    "Commitment": "Relentless focus on exceeding client expectations and meeting production deadlines every single time.",
    "Continuous Growth": "Constant evolution of techniques, software expertise, and visual trends to remain ahead of industry standards."
  };

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Brand Promise & Studio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-24 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-neutral-950 via-neutral-900/40 to-neutral-950 border border-neutral-900 rounded-3xl p-5 sm:p-8 lg:p-12 overflow-hidden h-full flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-amber-500/5 rounded-full blur-[60px] pointer-events-none" />
            <span className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold font-sans mb-2 block">
              Our Brand Promise
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-serif text-white tracking-wider mb-4 sm:mb-6 uppercase">
              Visual Masterpieces Built to Last
            </h3>
            <p className="text-[11px] sm:text-sm lg:text-base text-neutral-300 leading-relaxed italic font-serif font-light mb-4 sm:mb-6">
              "{settings.brandPromise}"
            </p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.01,
                  },
                },
              }}
              className="text-[10px] sm:text-xs lg:text-sm text-neutral-400 leading-relaxed font-sans font-light border-t border-neutral-900 pt-4 sm:pt-5"
            >
              {"Our state-of-the-art production space is equipped with the latest cinema setups, editing consoles, and color-grading hardware to translate your creative concepts into high-fidelity reality.".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 5 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Right: Studio Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-neutral-900 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group bg-neutral-950 min-h-[250px] sm:min-h-[350px]"
          >
            <Image
              src="/assets/studio.png"
              alt="Our Creative Studio Space"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Ambient vignette and overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90 pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 pointer-events-none">
              <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-amber-500 font-semibold block">The Workspace</span>
              <h4 className="text-[11px] sm:text-sm md:text-base text-white font-serif uppercase tracking-wider mt-0.5">Royal Vista Studio Space</h4>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us & Core Values */}
        <div>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold font-sans block">
              Our Foundations
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-widest mt-2 uppercase">
              Core Values
            </h3>
            <p className="text-sm text-neutral-300 mt-2 max-w-lg mx-auto font-sans font-normal">
              Nine rules of excellence that govern everything we create at Royal Vista Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {settings.coreValues.map((value, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 sm:p-7 bg-neutral-900/50 border border-neutral-800/80 hover:border-amber-500/50 hover:bg-neutral-900/90 rounded-2xl transition-all duration-300 flex items-start gap-4 shadow-lg hover:shadow-[0_10px_30px_rgba(245,158,11,0.08)]"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-400 transition-all duration-300 shrink-0 mt-0.5 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                  {iconMap[value] || <Award size={22} className="text-amber-400" />}
                </div>
                <div>
                  <h4 className="text-white text-base sm:text-lg font-semibold font-serif uppercase tracking-wider group-hover:text-amber-400 transition-colors">
                    {value}
                  </h4>
                  <p className="text-neutral-200 text-xs sm:text-sm mt-2 leading-relaxed font-sans font-normal opacity-90">
                    {valueDescriptions[value] || "Exquisite craftsmanship delivered with precision and honesty."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
