'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Separate typing count helper component
function TypewriterStat({ text, label }: { text: string; label: string }) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 150); // type a character every 150ms

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex flex-col items-center p-6 bg-neutral-950/40 border border-neutral-900 rounded-2xl">
      <div className="text-3xl sm:text-5xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 flex items-center min-h-[40px] sm:min-h-[50px] md:min-h-[60px]">
        <span>{typedText}</span>
        {typedText.length < text.length && (
          <span className="w-1.5 h-6 sm:h-9 bg-amber-400 ml-1 animate-pulse" />
        )}
      </div>
      <div className="text-neutral-500 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium mt-3 text-center">
        {label}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const skills = [
    { name: "Video Editing", value: 95 },
    { name: "Adobe Premiere Pro", value: 95 },
    { name: "Adobe Photoshop", value: 95 },
    { name: "Wondershare Filmora", value: 95 },
    { name: "Adobe After Effects", value: 85 },
    { name: "Adobe Illustrator", value: 85 },
    { name: "Motion Graphics", value: 85 },
    { name: "Branding", value: 85 },
    { name: "Colour Grading", value: 85 }
  ];

  return (
    <section id="skills" className="relative py-24 bg-neutral-950/20 overflow-hidden">
      {/* Background ambient gold circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-medium font-sans">
            Craftsmanship & Mastery
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-widest mt-2 uppercase">
            Skills & Expertise
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Dynamic Counter Ticker */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <TypewriterStat text="4+" label="Years Active Experience" />
          <TypewriterStat text="150+" label="Luxury Projects Delivered" />
          <TypewriterStat text="95%" label="Client Retention Rate" />
          <TypewriterStat text="30+" label="Elite Brands Partnered" />
        </div>

        {/* Skills Progress Bars Grid */}
        <div className="bg-neutral-950/45 border border-neutral-900 rounded-3xl p-8 sm:p-12">
          <div className="text-center sm:text-left mb-10 border-b border-neutral-900 pb-6">
            <h3 className="text-lg sm:text-xl font-serif text-white uppercase tracking-wider">
              Technical Capabilities
            </h3>
            <p className="text-neutral-500 text-xs mt-1">
              Refined tool proficiency and digital disciplines driving each project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs uppercase tracking-wider font-sans">
                  <span className="text-neutral-300 font-medium">{skill.name}</span>
                  <span className="text-amber-400 font-semibold">{skill.value}%</span>
                </div>
                
                {/* Visual Bar Animation */}
                <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.08, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-300 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
