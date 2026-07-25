'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-neutral-900 z-[10000] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(251,191,36,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
