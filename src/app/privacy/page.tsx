'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-neutral-500 text-xs uppercase tracking-widest">
            Last Updated: July 25, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm leading-relaxed text-neutral-400 font-light">
          <p>
            At Royal Vista Studio, accessible from https://www.royalvistastudio.in/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Royal Vista Studio and how we use it.
          </p>

          <h2 className="text-lg font-serif text-white uppercase tracking-wider mt-8 font-semibold">
            1. Consent
          </h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h2 className="text-lg font-serif text-white uppercase tracking-wider mt-8 font-semibold">
            2. Information We Collect
          </h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly or submit an enquiry form, we may receive additional information about you such as your name, email address, phone number, the service category you are interested in, and the contents of the message you send us.
          </p>

          <h2 className="text-lg font-serif text-white uppercase tracking-wider mt-8 font-semibold">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, to process enquiries, quotes, or customer service updates</li>
            <li>Send you emails for project confirmations</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 className="text-lg font-serif text-white uppercase tracking-wider mt-8 font-semibold">
            4. Log Files
          </h2>
          <p>
            Royal Vista Studio follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>

          <h2 className="text-lg font-serif text-white uppercase tracking-wider mt-8 font-semibold">
            5. Contact Information
          </h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at royalvistastudio@gmail.com.
          </p>
        </div>

      </div>
    </div>
  );
}
