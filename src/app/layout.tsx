import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { readDb } from "@/lib/db";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingControls from "@/components/FloatingControls";
import Preloader from "@/components/Preloader";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Royal Vista Studio | Luxury Cinematic Video Production & Creative Agency",
  description: "Crafting Timeless Stories. Creating Lasting Impressions. Royal Vista Studio delivers world-class video editing, motion graphics, and luxury brand storytelling.",
  metadataBase: new URL("https://www.royalvistastudio.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Royal Vista Studio | Luxury Cinematic Video Production",
    description: "India's premier studio for cinematic storytelling, high-end video editing, color grading, and visual effects.",
    url: "https://www.royalvistastudio.in",
    siteName: "Royal Vista Studio",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Royal Vista Studio Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Vista Studio | Cinematic Video Production",
    description: "Crafting timeless visual stories with excellence and exceptional craftsmanship.",
    images: ["/assets/logo.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const db = await readDb();
  const { settings } = db;

  // Schema.org JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Royal Vista Studio",
    "image": "https://www.royalvistastudio.in/assets/logo.png",
    "url": "https://www.royalvistastudio.in/",
    "telephone": "9448275947",
    "email": "royalvistastudio@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560094",
      "addressCountry": "IN"
    },
    "description": "To become India's most trusted premium creative studio, recognized for delivering world-class photography, cinematography, video editing, branding, and digital experiences.",
    "priceRange": "$$$",
    "openingHours": "Mo-Sa 09:00-21:00"
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-amber-400 selection:text-black">
        <Preloader />
        <ScrollProgress />
        <Navbar phone={settings.phone} whatsapp={settings.whatsapp} />
        
        {/* Main Content wrapper with top padding to clear the fixed navbar */}
        <main className="flex-grow pt-[72px] bg-black">
          {children}
        </main>

        <Footer
          businessName={settings.businessName}
          tagline={settings.tagline}
          phone={settings.phone}
          email={settings.email}
        />
        <FloatingControls phone={settings.phone} whatsapp={settings.whatsapp} />
      </body>
    </html>
  );
}
