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

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-medium font-sans">
            Our Story & Legacy
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-widest mt-2 uppercase">
            About Royal Vista Studio
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative bg-neutral-950/40 border border-neutral-900 hover:border-amber-500/30 p-8 sm:p-12 rounded-2xl transition-all duration-500 flex flex-col items-start text-left backdrop-blur-sm"
          >
            <div className="w-14 h-14 rounded-full bg-neutral-900 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
              <Eye size={24} className="text-amber-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wider mb-4 uppercase">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-neutral-250 leading-relaxed max-w-md font-sans font-normal">
              {settings.vision}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative bg-neutral-950/40 border border-neutral-900 hover:border-amber-500/30 p-8 sm:p-12 rounded-2xl transition-all duration-500 flex flex-col items-start text-left backdrop-blur-sm"
          >
            <div className="w-14 h-14 rounded-full bg-neutral-900 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
              <Target size={24} className="text-amber-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wider mb-4 uppercase">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-neutral-250 leading-relaxed max-w-md font-sans font-normal">
              {settings.mission}
            </p>
          </motion.div>
        </div>

        {/* Brand Promise & Studio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-24 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-neutral-950 via-neutral-900/40 to-neutral-950 border border-neutral-900 rounded-3xl p-8 sm:p-12 overflow-hidden h-full flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-amber-500/5 rounded-full blur-[60px] pointer-events-none" />
            <span className="text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold font-sans mb-3 block">
              Our Brand Promise
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wider mb-6 uppercase">
              Visual Masterpieces Built to Last
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic font-serif font-light mb-6">
              "{settings.brandPromise}"
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans font-normal border-t border-neutral-900 pt-5">
              Royal Vista Studio features a state-of-the-art production space equipped with the latest cinema setups, editing consoles, and color-grading hardware to translate your creative concepts into high-fidelity reality.
            </p>
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
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Ambient vignette and overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 pointer-events-none" />
            <div className="absolute bottom-6 left-8 pointer-events-none">
              <span className="text-[10px] uppercase tracking-widest text-amber-500 font-semibold block">The Workspace</span>
              <h4 className="text-white text-base font-serif uppercase tracking-wider mt-1">Royal Vista Studio Space</h4>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us & Core Values */}
        <div>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans">
              Our Foundations
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-widest mt-2 uppercase">
              Core Values
            </h3>
            <p className="text-xs text-neutral-500 mt-2 max-w-sm mx-auto">
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
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 bg-neutral-950/20 border border-neutral-900 hover:border-amber-500/20 hover:bg-neutral-950/60 rounded-xl transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-900/60 border border-neutral-800 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-300 shrink-0">
                  {iconMap[value] || <Award size={20} className="text-amber-400" />}
                </div>
                <div>
                  <h4 className="text-white text-base font-semibold font-serif uppercase tracking-wider group-hover:text-amber-400 transition-colors">
                    {value}
                  </h4>
                  <p className="text-neutral-300 text-sm mt-1 leading-relaxed font-sans font-normal">
                    Exquisite craftsmanship delivered with precision and honesty.
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
