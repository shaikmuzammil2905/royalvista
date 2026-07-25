'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Service } from '@/lib/data';

interface ContactFormProps {
  services: Service[];
  whatsappNumber: string;
}

export default function ContactForm({ services, whatsappNumber }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus('error');
      setErrorMessage('Name and Phone number are required fields.');
      return;
    }

    setStatus('submitting');
    try {
      // 1. Submit to local API database
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();
      
      if (!response.ok) {
        throw new Error(resData.error || 'Failed to submit enquiry.');
      }

      setStatus('success');

      // 2. Format details and redirect to WhatsApp
      const formattedService = formData.service || 'General Inquiry';
      const formattedMessage = formData.message || 'No additional message.';
      
      const textMessage = `*NEW ENQUIRY - ROYAL VISTA STUDIO*\n` +
                          `------------------------------------\n` +
                          `*Name:* ${formData.name}\n` +
                          `*Phone:* ${formData.phone}\n` +
                          `*Email:* ${formData.email || 'N/A'}\n` +
                          `*Service:* ${formattedService}\n` +
                          `*Message:* ${formattedMessage}\n` +
                          `------------------------------------\n` +
                          `Submitted via website.`;

      const encodedText = encodeURIComponent(textMessage);
      const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodedText}`;
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      // Redirect user to WhatsApp in a new tab/window after a short delay
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);

    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full bg-neutral-950/60 backdrop-blur-md border border-neutral-900 rounded-2xl p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <h3 className="text-white text-xl font-semibold mb-6 font-serif tracking-wider border-l-4 border-amber-500 pl-3">
        Send an Enquiry
      </h3>

      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
          <CheckCircle2 size={56} className="text-amber-500 mb-4 animate-bounce" />
          <h4 className="text-white text-lg font-medium mb-2 font-serif">Enquiry Submitted!</h4>
          <p className="text-sm text-neutral-400 max-w-sm mb-6">
            Your details have been saved in our system. You are now being redirected to WhatsApp to send this message to the business owner.
          </p>
          <div className="w-8 h-8 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 text-sm">
          {status === 'error' && (
            <div className="flex items-center gap-3 bg-red-950/30 border border-red-900/50 p-4 rounded-xl text-red-400">
              <AlertCircle size={18} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-neutral-400 uppercase tracking-wider text-[11px] font-medium">
                Full Name <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/80 transition-all font-sans"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-neutral-400 uppercase tracking-wider text-[11px] font-medium">
                Phone Number <span className="text-amber-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9448275947"
                className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/80 transition-all font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-neutral-400 uppercase tracking-wider text-[11px] font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. johndoe@gmail.com"
                className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/80 transition-all font-sans"
              />
            </div>

            {/* Services */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="text-neutral-400 uppercase tracking-wider text-[11px] font-medium">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/80 transition-all font-sans appearance-none cursor-pointer"
              >
                <option value="" className="bg-neutral-950">Select a Service</option>
                {services.map((svc) => (
                  <option key={svc.id} value={svc.title} className="bg-neutral-950">
                    {svc.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-neutral-400 uppercase tracking-wider text-[11px] font-medium">
              Project Description / Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project requirements..."
              className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/80 transition-all font-sans resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full mt-2 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-amber-500 text-black font-semibold uppercase tracking-[0.15em] rounded-xl flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all shadow-[0_4px_20px_rgba(245,158,11,0.2)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Redirecting...</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Submit Details</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
