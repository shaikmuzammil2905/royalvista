'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Service } from '@/lib/data';

interface ServicesProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesProps) {
  
  // Render lucide icon dynamically based on name
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent size={24} className="text-amber-400" />;
    }
    return <Icons.HelpCircle size={24} className="text-amber-400" />;
  };

  return (
    <section id="services" className="relative py-10 sm:py-24 bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-medium font-sans">
            Creative Disciplines
          </span>
          <h2 className="text-2xl sm:text-5xl font-serif text-white tracking-widest mt-2 uppercase">
            Premium Services
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((svc, index) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="group relative bg-neutral-950/40 border border-neutral-900/60 hover:border-amber-500/30 p-8 rounded-2xl transition-all duration-500 flex flex-col justify-between backdrop-blur-sm"
            >
              {/* Gold borders on hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded" />
              
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all duration-300">
                  {renderIcon(svc.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-serif text-white uppercase tracking-wider mb-3 group-hover:text-amber-400 transition-colors">
                  {svc.title}
                </h3>

                {/* Service Description */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-sans font-normal">
                  {svc.description}
                </p>
              </div>

              {/* Service details lists */}
              <div className="border-t border-neutral-900 pt-5 mt-4">
                <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-400 font-sans group-hover:text-neutral-300 transition-colors">
                  {svc.details && svc.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 font-normal">
                      <span className="w-1 h-1 rounded-full bg-amber-500/60 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
