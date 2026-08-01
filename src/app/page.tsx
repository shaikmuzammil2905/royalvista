import { readDb } from '@/lib/db';
import Link from 'next/link';
import { ArrowRight, Star, Sparkles, Briefcase, PhoneCall } from 'lucide-react';
import CinematicHero from '@/components/CinematicHero';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const db = await readDb();
  const { settings } = db;

  const quickNav = [
    {
      title: "Portfolio Showcase",
      desc: "Explore 3D Models, Motion Graphics, Video Editing, and Photoshop works with interactive animated popups.",
      href: "/portfolio",
      badge: "Visual Gallery",
      icon: <Briefcase size={22} className="text-amber-400" />
    },
    {
      title: "Our Foundations & Values",
      desc: "Discover our 9 core values of excellence, studio workspace, and brand promise.",
      href: "/about",
      badge: "Brand Identity",
      icon: <Star size={22} className="text-amber-400" />
    },
    {
      title: "Services & Disciplines",
      desc: "Explore our 14 luxury post-production, editing, and color-grading solutions.",
      href: "/services",
      badge: "Expertise",
      icon: <Sparkles size={22} className="text-amber-400" />
    },
    {
      title: "Studio Booking & Contact",
      desc: "Connect directly with Royal Vista Studio for custom quotes and project bookings.",
      href: "/contact",
      badge: "Get in Touch",
      icon: <PhoneCall size={22} className="text-amber-400" />
    }
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* 1. Cinematic Hero Block (Full Screen) */}
      <div className="-mt-[72px]">
        <CinematicHero tagline={settings.tagline} phone={settings.phone} />
      </div>

      {/* 2. Page Navigation Directory (Each Section Dedicated Page) */}
      <section className="relative py-10 sm:py-24 bg-black border-t border-neutral-900/60 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold font-sans block mb-1.5">
              Curated Experience
            </span>
            <h2 className="text-2xl sm:text-5xl font-serif text-white tracking-widest uppercase">
              Explore Royal Vista Studio
            </h2>
            <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {quickNav.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className="group relative bg-neutral-950/80 border border-neutral-800/80 hover:border-amber-500/50 p-6 sm:p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between hover:bg-neutral-900/90 shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                      {nav.icon}
                    </div>
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-amber-400 bg-black/60 px-2.5 py-1 rounded border border-amber-500/20">
                      {nav.badge}
                    </span>
                  </div>

                  <h3 className="text-white text-base sm:text-xl font-serif font-medium uppercase tracking-wider mb-2 group-hover:text-amber-400 transition-colors">
                    {nav.title}
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans font-normal opacity-90">
                    {nav.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-amber-400 font-semibold uppercase tracking-widest group-hover:text-amber-300">
                  <span>Open Page</span>
                  <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Global Call-to-Action Section */}
      <section className="relative py-10 sm:py-20 bg-neutral-950/20 border-t border-neutral-900/60 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4 sm:space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold">
            Ready to Create?
          </span>
          <h3 className="text-xl sm:text-4xl font-serif text-white tracking-wider uppercase">
            Let's Collaborate On Your Next Project
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto font-sans font-normal leading-relaxed">
            Whether it is an elegant wedding film, a high-impact commercial advertisement, 3D modeling, or branding visual assets, our studio is ready to deliver excellence.
          </p>
          <div className="pt-2 sm:pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-amber-500 text-black font-semibold text-xs uppercase tracking-[0.2em] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_6px_20px_rgba(245,158,11,0.2)] transition-all cursor-pointer hover:scale-102"
            >
              <span>Consultation Form</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
