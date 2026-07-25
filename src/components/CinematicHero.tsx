'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

interface HeroProps {
  tagline: string;
  phone: string;
}

function TypewriterStatMini({ text, label, delay = 0 }: { text: string; label: string; delay?: number }) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    const startTimeout = setTimeout(() => {
      let index = 0;
      intervalId = setInterval(() => {
        setTypedText(text.slice(0, index + 1));
        index++;
        if (index >= text.length) {
          clearInterval(intervalId);
        }
      }, 150);
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, delay]);

  return (
    <div>
      <div className="text-2xl lg:text-3xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-300 flex items-center min-h-[36px]">
        <span>{typedText}</span>
        {typedText.length < text.length && (
          <span className="w-1 h-5 bg-amber-400 ml-1 animate-pulse" />
        )}
      </div>
      <div className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1 font-sans font-medium">
        {label}
      </div>
    </div>
  );
}

export default function CinematicHero({ tagline, phone }: HeroProps) {
  // Split tagline for word-by-word reveal
  const titleWords = "ROYAL VISTA STUDIO".split(" ");
  
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      // Direct redirect if not on homepage
      window.location.href = '/contact';
    }
  };

  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById('portfolio');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      // Direct redirect if not on homepage
      window.location.href = '/portfolio';
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background - Premium Cinematic Loop */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 scale-105"
        >
          <source
            src="https://player.vimeo.com/external/370331493.sd.mp4?s=75d738d1d8ef34f192b0c1692257d9760773d1f1&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        {/* Luxury dark gold gradients overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 z-1" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/90 z-1" />
      </div>

      {/* Left Side Floating Stats (Mockup Match & Typewriter) */}
      <div className="absolute left-6 lg:left-12 xl:left-24 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-black/60 backdrop-blur-md border border-neutral-900 hover:border-amber-500/30 p-5 rounded-2xl w-36 text-left shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-all duration-300 group"
        >
          <TypewriterStatMini text="150+" label="Projects Delivered" delay={1.2} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-black/60 backdrop-blur-md border border-neutral-900 hover:border-amber-500/30 p-5 rounded-2xl w-36 text-left shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-all duration-300 group"
        >
          <TypewriterStatMini text="100+" label="Clients Worldwide" delay={1.8} />
        </motion.div>
      </div>

      {/* Right Side Floating Stats (Mockup Match & Typewriter) */}
      <div className="absolute right-6 lg:right-12 xl:right-24 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-10">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-black/60 backdrop-blur-md border border-neutral-900 hover:border-amber-500/30 p-5 rounded-2xl w-36 text-left shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-all duration-300 group"
        >
          <TypewriterStatMini text="98%" label="Client Satisfaction" delay={1.5} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-black/60 backdrop-blur-md border border-neutral-900 hover:border-amber-500/30 p-5 rounded-2xl w-36 text-left shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-all duration-300 group"
        >
          <TypewriterStatMini text="5+" label="Years Excellence" delay={2.1} />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-left flex flex-col items-start md:text-center md:items-center w-full">
        {/* Experience badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-amber-500/30 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-amber-400 font-medium font-sans">
            4+ Years of Visual Excellence
          </span>
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl sm:text-6xl md:text-8xl font-serif text-white tracking-[0.15em] sm:tracking-[0.2em] font-light leading-tight sm:leading-none mb-6 text-left md:text-center">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
              className="inline-block mr-4 sm:mr-6"
            >
              {word === 'VISTA' ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 font-normal">
                  VISTA
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="text-neutral-300 text-xs sm:text-lg md:text-xl font-sans tracking-[0.1em] sm:tracking-[0.15em] max-w-2xl mb-10 font-normal leading-relaxed text-left md:text-center"
        >
          {tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleScrollToContact}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-amber-500 text-black font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4.5 rounded-full shadow-[0_10px_25px_rgba(245,158,11,0.25)] hover:shadow-[0_10px_30px_rgba(245,158,11,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Book A Session</span>
            <ArrowRight size={14} />
          </button>
          <button
            onClick={handleScrollToPortfolio}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black/40 backdrop-blur-md hover:bg-neutral-900 border border-neutral-800 text-white font-medium text-xs uppercase tracking-[0.2em] px-8 py-4.5 rounded-full transition-all cursor-pointer"
          >
            <Play size={12} className="text-amber-500 fill-amber-500" />
            <span>Explore Works</span>
          </button>
        </motion.div>

        {/* Mobile Stats - visible only on mobile, left aligned */}
        <div className="grid grid-cols-2 gap-4 mt-12 md:hidden w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-neutral-950/60 backdrop-blur-md border border-neutral-900 p-4 rounded-xl text-left"
          >
            <TypewriterStatMini text="150+" label="Projects Delivered" delay={1.8} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="bg-neutral-950/60 backdrop-blur-md border border-neutral-900 p-4 rounded-xl text-left"
          >
            <TypewriterStatMini text="100+" label="Clients Worldwide" delay={2.1} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="bg-neutral-950/60 backdrop-blur-md border border-neutral-900 p-4 rounded-xl text-left"
          >
            <TypewriterStatMini text="98%" label="Client Satisfaction" delay={2.4} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="bg-neutral-950/60 backdrop-blur-md border border-neutral-900 p-4 rounded-xl text-left"
          >
            <TypewriterStatMini text="5+" label="Years Excellence" delay={2.7} />
          </motion.div>
        </div>
      </div>

      {/* Mouse scroll down animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none hidden sm:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-sans">
            Scroll Down
          </span>
          <div className="w-5 h-8 border border-neutral-700 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-1.5 rounded-full bg-amber-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
