'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-neutral-300 py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Navigation back */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 hover:text-white transition-colors">
          <ArrowLeft size={14} />
          <span>Back To Home</span>
        </Link>

        {/* Header */}
        <div className="border-b border-neutral-900 pb-6">
          <h1 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-wider mb-2">
            Terms & Conditions
          </h1>
          <p className="text-neutral-500 text-xs uppercase tracking-widest">
            Last Updated: July 25, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm leading-relaxed text-neutral-400 font-light">
          <p>
            Welcome to Royal Vista Studio! These terms and conditions outline the rules and regulations for the use of Royal Vista Studio's Website, located at https://www.royalvistastudio.in/.
          </p>
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Royal Vista Studio if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-lg font-serif text-white uppercase tracking-wider mt-8 font-semibold">
            1. Intellectual Property Rights
          </h2>
          <p>
            Other than the content you own, under these Terms, Royal Vista Studio and/or its licensors own all the intellectual property rights and materials contained in this Website. All rights are reserved. You are granted a limited license only for purposes of viewing the material contained on this Website.
          </p>

          <h2 className="text-lg font-serif text-white uppercase tracking-wider mt-8 font-semibold">
            2. Restrictions
          </h2>
          <p>
            You are specifically restricted from all of the following:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Publishing any website material in any other media without prior attribution</li>
            <li>Selling, sublicensing, and/or otherwise commercializing any website material</li>
            <li>Publicly performing and/or showing any website material</li>
            <li>Using this website in any way that is or may be damaging to this website</li>
            <li>Using this website in any way that impacts user access to this website</li>
            <li>Using this website contrary to applicable laws and regulations</li>
          </ul>

          <h2 className="text-lg font-serif text-white uppercase tracking-wider mt-8 font-semibold">
            3. No Warranties
          </h2>
          <p>
            This Website is provided "as is," with all faults, and Royal Vista Studio expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website.
          </p>

          <h2 className="text-lg font-serif text-white uppercase tracking-wider mt-8 font-semibold">
            4. Limitation of Liability
          </h2>
          <p>
            In no event shall Royal Vista Studio, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.
          </p>

          <h2 className="text-lg font-serif text-white uppercase tracking-wider mt-8 font-semibold">
            5. Variation of Terms
          </h2>
          <p>
            Royal Vista Studio is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
          </p>
        </div>

      </div>
    </div>
  );
}
