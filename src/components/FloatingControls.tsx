'use client';

import { Phone, MessageSquare } from 'lucide-react';

interface FloatingControlsProps {
  phone: string;
  whatsapp: string;
}

export default function FloatingControls({ phone, whatsapp }: FloatingControlsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Floating Call Button */}
      <a
        href={`tel:${phone}`}
        className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 text-amber-500 shadow-xl flex items-center justify-center active:scale-90 transition-transform"
        aria-label="Call Business"
      >
        <Phone size={20} />
      </a>
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/91${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-xl flex items-center justify-center active:scale-90 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={20} className="fill-black" />
      </a>
    </div>
  );
}
