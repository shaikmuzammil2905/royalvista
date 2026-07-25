'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  phone: string;
  whatsapp: string;
}

export default function Navbar({ phone, whatsapp }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname === path || pathname?.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="relative w-12 h-12 md:w-15 md:h-15 overflow-hidden rounded-lg bg-neutral-950 flex items-center justify-center border border-amber-500/30 group-hover:border-amber-500/80 transition-all shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            <Image
              src="/assets/logo.png"
              alt="Royal Vista Logo"
              fill
              unoptimized
              className="object-contain p-1 scale-110 group-hover:scale-125 transition-transform duration-500 z-10"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-base md:text-lg tracking-[0.25em] font-semibold font-serif group-hover:text-amber-400 transition-colors">
              ROYAL VISTA
            </span>
            <span className="text-neutral-500 text-[9px] md:text-[10px] tracking-[0.35em] font-sans -mt-0.5 uppercase">
              STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Linkages */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-xs uppercase tracking-[0.15em] font-sans transition-all hover:text-white relative py-1 ${
                isLinkActive(link.path) ? 'text-amber-400 font-medium' : 'text-neutral-400'
              }`}
            >
              {link.name}
              {isLinkActive(link.path) && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-amber-500 to-yellow-300" />
              )}
            </Link>
          ))}
        </nav>

        {/* Quick Contact Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-neutral-300 hover:text-white transition-all bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full"
          >
            <Phone size={12} className="text-amber-500" />
            <span>Call Now</span>
          </a>
          <a
            href={`https://wa.me/91${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-black hover:text-white transition-all bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-amber-500 font-medium px-4 py-2 rounded-full shadow-[0_4px_15px_rgba(245,158,11,0.2)]"
          >
            <MessageSquare size={12} className="fill-black" />
            <span>Let's Chat</span>
          </a>
        </div>

        {/* Mobile Menu Toggler */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-black/95 backdrop-blur-xl border-t border-neutral-900 z-40 transition-all duration-500 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-between h-full p-8 max-w-md mx-auto">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 items-center pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg uppercase tracking-[0.2em] font-sans transition-all py-1 ${
                  isLinkActive(link.path) ? 'text-amber-400 font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Footer Buttons */}
          <div className="flex flex-col gap-4 pb-12 w-full">
            <a
              href={`tel:${phone}`}
              className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.1em] text-white bg-neutral-900 border border-neutral-800 py-3.5 rounded-full"
            >
              <Phone size={14} className="text-amber-500" />
              <span>Call +91 {phone}</span>
            </a>
            <a
              href={`https://wa.me/91${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.1em] text-black bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 font-semibold py-3.5 rounded-full"
            >
              <MessageSquare size={14} className="fill-black" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
