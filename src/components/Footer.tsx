'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
}

export default function Footer({ businessName, tagline, phone, email }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Process', href: '/process' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-black border-t border-neutral-900 pt-20 pb-10 text-neutral-400 font-sans overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-neutral-950 flex items-center justify-center border border-amber-500/30">
              <span className="text-amber-400 font-bold text-sm font-serif">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm tracking-[0.2em] font-medium font-serif">{businessName}</span>
              <span className="text-neutral-500 text-[8px] tracking-[0.3em] -mt-0.5">STUDIO</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-neutral-500 italic">
            "{tagline}"
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-neutral-950 flex items-center justify-center border border-neutral-900 text-neutral-500 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-neutral-950 flex items-center justify-center border border-neutral-900 text-neutral-500 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-300"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                <polygon points="9.7 15 9.7 9 15 12 9.7 15" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xs uppercase tracking-[0.2em] font-medium mb-6 font-serif border-l-2 border-amber-500 pl-3">
            Navigation
          </h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-amber-400 transition-colors duration-200 text-neutral-500 hover:pl-1"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-5">
          <h4 className="text-white text-xs uppercase tracking-[0.2em] font-medium mb-1 font-serif border-l-2 border-amber-500 pl-3">
            Connect With Us
          </h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-amber-500 shrink-0" />
              <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                +91 {phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-amber-500 shrink-0" />
              <a href={`mailto:${email}`} className="hover:text-white transition-colors break-all">
                {email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-amber-500 shrink-0 mt-1" />
              <span className="text-neutral-500">
                Hubli-Dharwad, Karnataka, India
              </span>
            </li>
          </ul>
        </div>

        {/* Experience Stats */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xs uppercase tracking-[0.2em] font-medium mb-2 font-serif border-l-2 border-amber-500 pl-3">
            A Studio of Excellence
          </h4>
          <div className="bg-neutral-950 border border-neutral-900 p-5 rounded-lg">
            <span className="text-amber-400 text-3xl font-bold font-serif leading-none">4+ Years</span>
            <p className="text-xs uppercase tracking-wider text-neutral-400 mt-2">Professional Craftsmanship</p>
            <p className="text-[11px] text-neutral-600 mt-1 leading-normal">
              Preserving life's most meaningful moments and elevating brands with elegance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
        <div>
          © {currentYear} {businessName}. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-amber-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-amber-400 transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/admin" className="hover:text-amber-400 transition-colors font-medium text-amber-500/60">
            Admin Panel
          </Link>
        </div>
        <button
          onClick={handleScrollToTop}
          className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-900 text-neutral-500 hover:text-amber-400 hover:border-amber-500/50 flex items-center justify-center transition-all shadow-md group"
          aria-label="Back to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
