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
      title: "The Legacy",
      desc: "Discover our mission, core values, and creative brand promise.",
      href: "/about",
      icon: <Star size={20} className="text-amber-400" />
    },
    {
      title: "The Expertise",
      desc: "Explore our 14 premium video editing and branding solutions.",
      href: "/services",
      icon: <Sparkles size={20} className="text-amber-400" />
    },
    {
      title: "The Showcase",
      desc: "Browse wedding films, documentaries, and commercials.",
      href: "/portfolio",
      icon: <Briefcase size={20} className="text-amber-400" />
    },
    {
      title: "The Studio",
      desc: "Connect for custom bookings and instant quotes.",
      href: "/contact",
      icon: <PhoneCall size={20} className="text-amber-400" />
    }
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* 1. Cinematic Hero Block (Full Screen) */}
      {/* Note: top padding is offset in layout, but we pull hero up to fit full viewport */}
      <div className="-mt-[72px]">
        <CinematicHero tagline={settings.tagline} phone={settings.phone} />
      </div>

      {/* 2. Premium Quick Navigation Directory */}
      <section className="relative py-24 bg-black border-t border-neutral-900/60 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-medium font-sans">
              Curated Experience
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-widest mt-2 uppercase">
              Explore Our Agency
            </h2>
            <div className="w-12 h-[1px] bg-amber-500 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickNav.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className="group relative bg-neutral-950/40 border border-neutral-900/60 hover:border-amber-500/20 p-8 rounded-2xl transition-all duration-500 flex flex-col justify-between hover:bg-neutral-950/80 shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 transition-colors">
                    {nav.icon}
                  </div>
                  <h3 className="text-white text-lg font-serif uppercase tracking-wider mb-2 group-hover:text-amber-400 transition-colors">
                    {nav.title}
                  </h3>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-6 font-light font-sans">
                    {nav.desc}
                  </p>
                </div>
                
                <span className="inline-flex items-center gap-1.5 text-xs text-amber-500 uppercase tracking-widest font-semibold group-hover:text-white transition-colors">
                  <span>Enter</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Global Call-to-Action Section */}
      <section className="relative py-20 bg-neutral-950/20 border-t border-neutral-900/60 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold">
            Ready to Create?
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif text-white tracking-wider uppercase">
            Let's Collaborate On Your Next Project
          </h3>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto font-sans font-light">
            Whether it is an elegant wedding film, a high-impact commercial advertisement, or branding visual assets, our studio is ready to deliver excellence.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-amber-500 text-black font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-[0_6px_20px_rgba(245,158,11,0.2)] transition-all cursor-pointer hover:scale-102"
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
