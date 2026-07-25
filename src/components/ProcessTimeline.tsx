'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Film, Sliders, MessageSquare, ShieldCheck, Briefcase, Sparkles } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      phase: "01",
      title: "Concept & Vision",
      icon: <Lightbulb size={22} className="text-amber-400" />,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-storyboard-designer-drawing-sketches-on-paper-40013-large.mp4",
      description: "We begin by understanding your brand, goals, and audience. Our team develops the creative concept, writes the script, defines the storytelling approach, and prepares visual mood boards to establish a premium cinematic direction."
    },
    {
      phase: "02",
      title: "Pre-Production Planning",
      icon: <Briefcase size={22} className="text-amber-400" />,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cinematographer-preparing-his-camera-gear-40292-large.mp4",
      description: "Every detail is carefully planned before filming. We finalize locations, shot lists, production schedules, equipment, talent, styling, and creative direction to ensure a seamless production day."
    },
    {
      phase: "03",
      title: "Production & Shoot",
      icon: <Film size={22} className="text-amber-400" />,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cameraman-filming-with-a-professional-camera-34444-large.mp4",
      description: "Using professional cinema cameras, drones, lighting, and audio equipment, our crew captures visually stunning footage with meticulous attention to composition, movement, lighting, and storytelling."
    },
    {
      phase: "04",
      title: "Editing & Storytelling",
      icon: <Sliders size={22} className="text-amber-400" />,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-video-editor-working-on-a-computer-40751-large.mp4",
      description: "Our editors organize the footage, craft the narrative, refine pacing, synchronize audio, select music, and create a polished cinematic edit that keeps viewers engaged."
    },
    {
      phase: "05",
      title: "Color Grading & Visual Effects",
      icon: <Sparkles size={22} className="text-amber-400" />,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-color-grading-a-video-in-a-studio-40752-large.mp4",
      description: "We enhance every frame with professional color grading, cinematic LUTs, skin-tone refinement, motion graphics, and visual effects to achieve a luxury visual experience."
    },
    {
      phase: "06",
      title: "Review & Refinement",
      icon: <MessageSquare size={22} className="text-amber-400" />,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-corporate-team-discussing-video-details-in-front-of-screen-40758-large.mp4",
      description: "You receive a preview version for review. Based on your feedback, we implement precise refinements and ensure every detail meets your expectations before final approval."
    },
    {
      phase: "07",
      title: "Final Delivery",
      icon: <ShieldCheck size={22} className="text-amber-400" />,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-pressing-keys-on-a-glowing-editing-keyboard-40756-large.mp4",
      description: "Once approved, we export the project in high-resolution formats optimized for web, social media, television, or cinema, ensuring exceptional quality across every platform."
    }
  ];

  return (
    <section id="process" className="relative py-24 bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-medium font-sans">
            Our Method
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-widest mt-2 uppercase">
            Creative Process
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Process Grid Content */}
        <div className="max-w-6xl mx-auto space-y-24 lg:space-y-36">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={step.phase} 
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
              >
                {/* Text Details side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col justify-center space-y-4 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-900 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-amber-500 font-medium block">
                        Phase {step.phase}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider font-semibold mt-0.5">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans font-normal pt-2">
                    {step.description}
                  </p>
                </motion.div>

                {/* Video/Visual side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`relative aspect-video w-full rounded-3xl overflow-hidden border border-neutral-900 bg-neutral-950/60 shadow-[0_20px_40px_rgba(0,0,0,0.7)] ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain bg-neutral-950 opacity-90"
                  >
                    <source src={step.videoUrl} type="video/mp4" />
                  </video>
                  {/* Lens vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
