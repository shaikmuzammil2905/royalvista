'use client';

import { motion } from 'framer-motion';
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
            About Royal Vista
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
            className="group relative bg-neutral-950/40 border border-neutral-900 hover:border-amber-500/30 p-8 sm:p-12 rounded-2xl transition-all duration-500 flex flex-col items-center text-center backdrop-blur-sm"
          >
            <div className="w-14 h-14 rounded-full bg-neutral-900 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
              <Eye size={24} className="text-amber-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wider mb-4 uppercase">
              Our Vision
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md font-sans font-light">
              {settings.vision}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative bg-neutral-950/40 border border-neutral-900 hover:border-amber-500/30 p-8 sm:p-12 rounded-2xl transition-all duration-500 flex flex-col items-center text-center backdrop-blur-sm"
          >
            <div className="w-14 h-14 rounded-full bg-neutral-900 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
              <Target size={24} className="text-amber-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wider mb-4 uppercase">
              Our Mission
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md font-sans font-light">
              {settings.mission}
            </p>
          </motion.div>
        </div>

        {/* Brand Promise Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-neutral-950 via-neutral-900/80 to-neutral-950 border border-neutral-900 rounded-3xl p-8 sm:p-12 mb-24 overflow-hidden text-center"
        >
          {/* subtle gold ambient shine */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-amber-500/10 rounded-full blur-[80px]" />
          
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold font-sans mb-3 block">
            Our Brand Promise
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wider mb-6 uppercase">
            Visual Masterpieces Built to Last
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl mx-auto italic font-serif font-light">
            "{settings.brandPromise}"
          </p>
        </motion.div>

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
                  <h4 className="text-white text-sm font-medium font-serif uppercase tracking-wider group-hover:text-amber-400 transition-colors">
                    {value}
                  </h4>
                  <p className="text-neutral-500 text-xs mt-0.5 leading-relaxed font-sans font-light">
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
