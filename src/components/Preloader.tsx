'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      const timeout = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timeout);
    } else {
      window.addEventListener('load', handleLoad);
      const fallback = setTimeout(() => setLoading(false), 2000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="relative flex items-center justify-center">
            {/* Spinning Golden Cinematic Lens Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
              className="w-20 h-20 rounded-full border-2 border-t-amber-500 border-b-amber-500/20 border-l-amber-500 border-r-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
            />
            
            {/* Pulsing Brand Logo Image */}
            <motion.div
              animate={{ scale: [0.92, 1.08, 0.92] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="absolute w-10 h-10 flex items-center justify-center select-none"
            >
              <img
                src="/assets/logo.png"
                alt="Royal Vista Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 flex flex-col items-center"
          >
            <span className="text-white text-[11px] tracking-[0.4em] uppercase font-serif font-medium">
              ROYAL VISTA
            </span>
            <span className="text-neutral-500 text-[8px] tracking-[0.3em] uppercase font-sans mt-1">
              STUDIO
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
