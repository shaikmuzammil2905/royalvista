'use client';

import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';
import { Service } from '@/lib/data';

interface ContactSectionProps {
  services: Service[];
  phone: string;
  whatsapp: string;
  email: string;
}

export default function ContactSection({ services, phone, whatsapp, email }: ContactSectionProps) {
  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-medium font-sans">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-widest mt-2 uppercase">
            Contact Us
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Info Details & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-white text-xl font-serif uppercase tracking-wider mb-2">
                  Get In Touch
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm font-sans leading-relaxed font-light">
                  Have a premium project, documentary, commercial advertisement or wedding film in mind? Fill out the form or contact us directly.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-amber-500/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-neutral-600 text-[9px] uppercase tracking-widest block font-medium">Call Us</span>
                    <span className="text-white text-sm font-sans font-medium group-hover:text-amber-400 transition-colors">+91 {phone}</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/91${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-amber-500/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors shrink-0">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <span className="text-neutral-600 text-[9px] uppercase tracking-widest block font-medium">WhatsApp Chat</span>
                    <span className="text-white text-sm font-sans font-medium group-hover:text-amber-400 transition-colors">+91 {whatsapp}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-amber-500/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-neutral-600 text-[9px] uppercase tracking-widest block font-medium">Email Us</span>
                    <span className="text-white text-sm font-sans font-medium group-hover:text-amber-400 transition-colors break-all">{email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-neutral-650 text-[9px] uppercase tracking-widest block font-semibold text-amber-500/80">Location</span>
                    <span className="text-white text-sm font-sans font-medium">Bangalore Karnataka 560094</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map - Styled Luxury Black & White */}
            <div className="h-44 sm:h-52 w-full rounded-2xl overflow-hidden border border-neutral-900 relative">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.054378772591!2d77.57218637507963!3d13.032223887289568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179e3e7f41a9%3A0xe10834f8286f0a3c!2sSanjay+Nagar%2C+Bengaluru%2C+Karnataka+560094!5e0!3m2!1sen!2sin!4v1721915000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale invert contrast-[1.25]"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form wrapper */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ContactForm services={services} whatsappNumber={whatsapp} />
          </div>
        </div>

      </div>
    </section>
  );
}
