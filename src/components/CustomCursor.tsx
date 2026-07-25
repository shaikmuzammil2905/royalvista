'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  
  const mainCursor = useRef<HTMLDivElement>(null);
  const trailingCursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is touch-enabled
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
      
      // Direct styles update for smoother frame updates (bypassing state delays)
      if (mainCursor.current && trailingCursor.current) {
        mainCursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        
        // Inner lagging motion using Web Animations API or standard styles
        trailingCursor.current.animate(
          [
            { transform: `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)` }
          ],
          { duration: 400, fill: 'forwards' }
        );
      }
    };

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);
    
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    // Event listeners
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Hover effects on interactive elements
    const addHoverListeners = () => {
      const clickables = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .interactive-card');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    addHoverListeners();

    // Re-bind hover listeners since the DOM might change
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
    };
  }, [isMobile]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={mainCursor}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 bg-amber-400 mix-blend-difference transition-transform duration-200 ${
          clicked ? 'scale-75' : linkHovered ? 'scale-150' : 'scale-100'
        }`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      {/* Outer Circle */}
      <div
        ref={trailingCursor}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border border-amber-400/50 mix-blend-difference ${
          clicked ? 'scale-90 bg-amber-400/10' : linkHovered ? 'scale-150 border-amber-400 bg-amber-400/20' : 'scale-100'
        }`}
        style={{ transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)` }}
      />
    </>
  );
}
