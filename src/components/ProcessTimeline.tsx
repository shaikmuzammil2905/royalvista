'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Film, Sliders, MessageSquare, ShieldCheck } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      phase: "01",
      title: "Concept & Vision",
      icon: <Lightbulb size={22} className="text-amber-400" />,
      description: "We align on your goals, write down stories, draft scripts, and build visual mood boards to set a luxury art direction."
    },
    {
      phase: "02",
      title: "Production & Shoot",
      icon: <Film size={22} className="text-amber-400" />,
      description: "Equipped with state-of-the-art camera systems, lights, and drones, we capture raw footage with precise aesthetic styling."
    },
    {
      phase: "03",
      title: "Post-Production Edit",
      icon: <Sliders size={22} className="text-amber-400" />,
      description: "We assemble shots, structure pacing and emotional narrative, synchronize multi-cams, and apply sound designs."
    },
    {
      phase: "04",
      title: "Color Grading & FX",
      icon: <MessageSquare size={22} className="text-amber-400" />,
      description: "Our artists grade color profiles to luxury cinematic standards and overlay kinetic motion graphics/VFX details."
    },
    {
      phase: "05",
      title: "Review & Delivery",
      icon: <ShieldCheck size={22} className="text-amber-400" />,
      description: "You review the drafts, request micro-revisions, and receive high-fidelity, production-ready cinematic masterfiles."
    }
  ];

  return (
    <section id="process" className="relative py-24 bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-medium font-sans">
            Our Method
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-widest mt-2 uppercase">
            Creative Process
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[1px] bg-neutral-900 md:-translate-x-1/2 z-0" />

          {/* Timeline Cards */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={step.phase} className="relative flex flex-col md:flex-row md:items-center z-10">
                  
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-neutral-950 border border-amber-500 flex items-center justify-center -translate-x-1/2 z-20">
                    <span className="text-amber-400 text-xs font-serif font-bold">{step.phase}</span>
                  </div>

                  {/* Spacer / Left Item */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right ${isEven ? 'order-1' : 'order-1 md:order-2 md:pl-12'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-neutral-950/40 border border-neutral-900 hover:border-amber-500/20 p-8 rounded-2xl transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 md:ml-auto md:mr-0">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-serif text-white uppercase tracking-wider mb-2">
                          {step.title}
                        </h3>
                        <p className="text-neutral-500 text-xs leading-relaxed font-sans font-light">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Spacer / Right Item */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 ${isEven ? 'order-2' : 'order-1 md:order-1 md:pr-12 md:text-right md:pl-0'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-neutral-950/40 border border-neutral-900 hover:border-amber-500/20 p-8 rounded-2xl transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 md:mr-auto md:ml-0">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-serif text-white uppercase tracking-wider mb-2">
                          {step.title}
                        </h3>
                        <p className="text-neutral-500 text-xs leading-relaxed font-sans font-light">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
