export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  thumbnailUrl: string;
  description: string;
  client: string;
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
}

export interface Settings {
  businessName: string;
  tagline: string;
  experience: string;
  website: string;
  phone: string;
  whatsapp: string;
  email: string;
  vision: string;
  mission: string;
  coreValues: string[];
  brandPromise: string;
}

export const defaultSettings: Settings = {
  businessName: "Royal Vista Studio",
  tagline: "Crafting Timeless Stories. Creating Lasting Impressions.",
  experience: "4+ Years",
  website: "https://www.royalvistastudio.in/",
  phone: "9448275947",
  whatsapp: "9448275947",
  email: "royalvistastudio@gmail.com",
  vision: "To become India's most trusted premium creative studio, recognized for delivering world-class photography, cinematography, AI-powered visual storytelling, branding, and digital experiences that preserve life's most meaningful moments and elevate every brand with elegance, innovation, and excellence.",
  mission: "Create timeless visual masterpieces through creativity, cutting-edge technology, and exceptional craftsmanship while providing every client with a seamless, personalized, premium experience.",
  coreValues: [
    "Excellence",
    "Creativity",
    "Innovation",
    "Client First",
    "Integrity",
    "Quality Without Compromise",
    "Passion",
    "Commitment",
    "Continuous Growth"
  ],
  brandPromise: "Royal Vista Studio delivers luxury creative experiences that combine cinematic storytelling, innovative technology, and exceptional craftsmanship—creating visuals that inspire, connect, and stand the test of time."
};

export const defaultServices: Service[] = [
  {
    id: "video-editing",
    title: "Video Editing",
    description: "High-end cinematic post-production turning raw footage into compelling narrative masterpieces.",
    iconName: "Video",
    details: ["Multi-cam syncing", "Pacing & rhythm adjustment", "Sound design integration", "Dynamic transitions"]
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    description: "Bespoke 2D/3D kinetic animations that bring static concepts to vibrant, moving life.",
    iconName: "Sparkles",
    details: ["Title sequences", "Infographic animation", "Logo stings", "UI walk-throughs"]
  },
  {
    id: "colour-grading",
    title: "Colour Grading",
    description: "Premium color correction and stylistic grading that defines the mood, tone, and cinematic vibe.",
    iconName: "Palette",
    details: ["Shot matching", "Lut creation", "Mood setting", "Skin tone correction"]
  },
  {
    id: "color-correction",
    title: "Color Correction",
    description: "Ensuring natural, uniform color accuracy across all camera sensors and lighting environments.",
    iconName: "Sliders",
    details: ["White balance tuning", "Exposure normalization", "Contrast adjustment", "Noise reduction"]
  },
  {
    id: "commercial-advertisements",
    title: "Commercial Advertisements",
    description: "High-impact visual commercials tailored to elevate brands and drive target conversions.",
    iconName: "Tv",
    details: ["Brand storyboards", "Product showcase", "Call-to-actions", "High fidelity exports"]
  },
  {
    id: "wedding-films",
    title: "Wedding Films",
    description: "Elegant, emotional, and timeless cinematic coverage preserving the magic of your special day.",
    iconName: "Heart",
    details: ["Teaser packages", "Feature-length films", "Drone photography", "Audio highlights"]
  },
  {
    id: "corporate-videos",
    title: "Corporate Videos",
    description: "Professional internal communications, brand showcases, and premium executive interviews.",
    iconName: "Briefcase",
    details: ["Executive interviews", "Office walkthroughs", "Annual reports", "Training material"]
  },
  {
    id: "social-media-reels",
    title: "Social Media Reels",
    description: "Snappy, high-retention vertical short-form videos optimized for Instagram and YouTube Shorts.",
    iconName: "Smartphone",
    details: ["Hook optimization", "Auto captions", "Trending audio sync", "Visual hooks"]
  },
  {
    id: "youtube-editing",
    title: "YouTube Editing",
    description: "Engaging edit styles that optimize click-through, viewer retention, and channel growth.",
    iconName: "Youtube",
    details: ["Retention editing", "Thumbnail layout support", "Intro hooks", "Pattern interrupts"]
  },
  {
    id: "documentaries",
    title: "Documentaries",
    description: "Intimate and visually raw storytelling focused on deep human stories and authentic themes.",
    iconName: "Film",
    details: ["Story research", "Interviews", "B-roll integration", "Archival footages"]
  },
  {
    id: "podcast-editing",
    title: "Podcast Editing",
    description: "Multicamera video switching, pristine audio denoising, and highly engaging social clips.",
    iconName: "Mic",
    details: ["Audio cleanup", "Dynamic switching", "Highlight clips", "Show notes support"]
  },
  {
    id: "visual-effects",
    title: "Visual Effects",
    description: "Seamless compositing, rotoscoping, and digital enhancements that bridge reality and imagination.",
    iconName: "Wand2",
    details: ["Green screen removal", "Clean plate painting", "VFX integration", "Object replacement"]
  },
  {
    id: "luxury-brand-content",
    title: "Luxury Brand Content",
    description: "Exquisite visual assets created specifically for high-end fashion, hospitality, and luxury brands.",
    iconName: "Crown",
    details: ["Aesthetic cinematography", "Premium styling", "Ambient audio mapping", "Slow-motion detail shots"]
  },
  {
    id: "premium-brochure-design",
    title: "Premium Brochure Design",
    description: "Stunning physical & digital layouts crafted to present your brand's services in a luxury print.",
    iconName: "FileText",
    details: ["Typography curation", "Grid layout alignment", "High-res print files", "Interactive PDF format"]
  }
];

export const defaultPortfolio: PortfolioItem[] = [
  // WEDDINGS (1-9)
  {
    id: "port-1",
    title: "The Palace Garden Union",
    category: "Weddings",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-having-their-first-dance-40899-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800",
    description: "A luxury wedding film capturing an exquisite palace celebration with cinematic grading and slow-motion storytelling.",
    client: "Ananya & Rahul",
    year: "2025"
  },
  {
    id: "port-2",
    title: "Timeless Whispers",
    category: "Weddings",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-in-a-forest-40901-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
    description: "An elegant walkthrough of love, capturing silent glances and natural emotions in a deep forest backdrop.",
    client: "Meera & Vikram",
    year: "2025"
  },
  {
    id: "port-3",
    title: "The Royal Reception Film",
    category: "Weddings",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-groom-waiting-for-his-bride-40897-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    description: "A grand palace reception trailer spotlighting classic styling, dynamic camera swoops, and high-fidelity soundscapes.",
    client: "Rohan & Sneha",
    year: "2025"
  },
  {
    id: "port-4",
    title: "Sacred Promises & Vows",
    category: "Weddings",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-putting-on-the-wedding-rings-40896-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800",
    description: "Capturing the close-up elegance of exchanging wedding bands and swearing eternal loyalty.",
    client: "Aditya & Priya",
    year: "2024"
  },
  {
    id: "port-5",
    title: "Elegance in Motion",
    category: "Weddings",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-holding-a-bouquet-40893-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
    description: "A gorgeous, stylized portrait focusing on the bride's details, from embroidered fabrics to custom jewelry.",
    client: "Kavya & Arjun",
    year: "2025"
  },
  {
    id: "port-6",
    title: "The Heritage Sangeet Film",
    category: "Weddings",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-groom-adjusting-his-bowtie-40892-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&q=80&w=800&fp-x=0.4&fp-y=0.3&crop=focalpoint",
    description: "Energetic and rhythm-driven visual cut highlighting the joyful dance performances and luxury heritage set layouts.",
    client: "Tanya & Kabir",
    year: "2025"
  },
  {
    id: "port-7",
    title: "Palace Romance Chronicles",
    category: "Weddings",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-newlyweds-kissing-under-a-veil-40898-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800&fp-x=0.3&fp-y=0.2&crop=focalpoint",
    description: "Luxury slow-motion veil shots capturing intimate couple portraits amidst ancient arches and warm lighting.",
    client: "Nisha & Dev",
    year: "2024"
  },
  {
    id: "port-8",
    title: "Golden Hours of Union",
    category: "Weddings",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-toasting-champagne-40900-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&q=80&w=800",
    description: "A sunset toast celebrating true love, complete with warm custom color grading LUTs and ambient noise tracks.",
    client: "Diya & Karan",
    year: "2025"
  },
  {
    id: "port-9",
    title: "A Cinematic Love Story",
    category: "Weddings",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-happy-bride-laughing-40895-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800&fp-x=0.5&fp-y=0.4&crop=focalpoint",
    description: "Focusing on raw laughter and authentic expressions, turning fleeting moments into timeless memories.",
    client: "Sonia & Kabir",
    year: "2025"
  },

  // CORPORATE (10-18)
  {
    id: "port-10",
    title: "Global Executive Keynote",
    category: "Corporate",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-group-of-creative-people-working-together-in-an-office-40432-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "Polished corporate storytelling showcasing team cohesion and modern architectural work environments.",
    client: "Apex Corp",
    year: "2025"
  },
  {
    id: "port-11",
    title: "Innovation Summit Highlights",
    category: "Corporate",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-businessman-presenting-a-project-to-his-team-40430-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    description: "Capturing presenter gestures, tech slide pacing, and focused panel discussions in high fidelity.",
    client: "Intellect Group",
    year: "2025"
  },
  {
    id: "port-12",
    title: "Elysian Headquarters Tour",
    category: "Corporate",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-businesswoman-talking-to-a-colleague-in-an-office-40431-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    description: "A slow glide office tour demonstrating sleek interior layouts and dynamic corporate interaction slots.",
    client: "Elysian Inc",
    year: "2024"
  },
  {
    id: "port-13",
    title: "Annual Brand Keynote",
    category: "Corporate",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-in-a-modern-office-40427-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    description: "Spotlighting individual contribution and focus, using warm lighting and professional depth of field.",
    client: "Matrix Global",
    year: "2025"
  },
  {
    id: "port-14",
    title: "Collaborative Synergy",
    category: "Corporate",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-brainstorming-session-in-a-corporate-meeting-40426-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    description: "Highlighting creative brainstorming sessions, whiteboards, and interactive leadership.",
    client: "Synergy Tech",
    year: "2025"
  },
  {
    id: "port-15",
    title: "Leadership Panel Review",
    category: "Corporate",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-shaking-hands-after-a-successful-business-deal-40429-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    description: "Capturing the final handshake sealing premium partnerships and corporate milestone expansions.",
    client: "Pinnacle Capital",
    year: "2025"
  },
  {
    id: "port-16",
    title: "The Corporate Mindset",
    category: "Corporate",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-office-hallway-with-people-walking-40425-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    description: "B-roll package detailing workflow continuity, corridor transits, and clean industrial architectural structures.",
    client: "Zenith Holdings",
    year: "2024"
  },
  {
    id: "port-17",
    title: "Strategic Visions Report",
    category: "Corporate",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-presenting-financial-charts-on-a-screen-40433-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Dynamic reporting visuals with animated graphs overlays, showing metrics and brand targets.",
    client: "Foresight Advisory",
    year: "2025"
  },
  {
    id: "port-18",
    title: "Enterprise Impact Film",
    category: "Corporate",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-corporate-workers-clapping-at-a-presentation-40434-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    description: "Showcasing general applause and team celebration during corporate achievements announcements.",
    client: "Quantum Partners",
    year: "2026"
  },

  // COMMERCIAL ADS (19-27)
  {
    id: "port-19",
    title: "The Midnight Brew Ad",
    category: "Commercial Ads",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-hot-coffee-into-a-cup-40871-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
    description: "Rich, atmospheric coffee pouring commercial edited with custom speed ramps and ASMR sound details.",
    client: "Aura Coffee",
    year: "2025"
  },
  {
    id: "port-20",
    title: "Exquisite Culinary Art",
    category: "Commercial Ads",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-slicing-fresh-red-tomatoes-on-a-wooden-board-40870-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800",
    description: "Close-up commercial illustrating organic food preparation, chef maneuvers, and high fidelity color grades.",
    client: "Saffron Bistro",
    year: "2025"
  },
  {
    id: "port-21",
    title: "Slow-Simmered Luxury",
    category: "Commercial Ads",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-stirring-a-pot-of-delicious-soup-40869-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800",
    description: "Commercial reel detailing high-end kitchen appliances and steam dynamics in slow-motion capture.",
    client: "Verdant Kitchens",
    year: "2025"
  },
  {
    id: "port-22",
    title: "The Gourmet Burger Promo",
    category: "Commercial Ads",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-burger-with-melting-cheese-40868-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    description: "Decadent close-ups of gourmet cheese melting, highlighting texture and professional lighting setups.",
    client: "Bite & Barrel",
    year: "2025"
  },
  {
    id: "port-23",
    title: "Essence of Olive Gold",
    category: "Commercial Ads",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-olive-oil-on-a-fresh-salad-40867-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
    description: "Commercial promoting organic cold-pressed oil, showing high-contrast streams over fresh salad layers.",
    client: "Tuscan Farms",
    year: "2024"
  },
  {
    id: "port-24",
    title: "Fine Dining Masterclass",
    category: "Commercial Ads",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-chef-plating-a-gourmet-dish-40866-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    description: "Luxury restaurant promo capturing the delicate finishing touches of high-end plated courses.",
    client: "L'Etoile Michelin",
    year: "2025"
  },
  {
    id: "port-25",
    title: "Splash of Summer Nectar",
    category: "Commercial Ads",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-fresh-fruits-splashing-into-water-40873-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800",
    description: "High-speed water splash commercial showcasing fruit freshness and vivid color grading.",
    client: "PurePress Juices",
    year: "2025"
  },
  {
    id: "port-26",
    title: "Decadent Chocolate Glaze",
    category: "Commercial Ads",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-chocolate-syrup-pouring-over-pancakes-40874-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800",
    description: "Mouthwatering commercial showing premium chocolate pouring slowly over artisan dessert stacks.",
    client: "Cacao Delights",
    year: "2025"
  },
  {
    id: "port-27",
    title: "The Vintage Vineyard Ad",
    category: "Commercial Ads",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-red-wine-into-a-glass-40872-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
    description: "Sophisticated red wine pouring visual featuring rich color contrast, deep shadows, and slow-mo drops.",
    client: "Marquis Reserve",
    year: "2024"
  },

  // REELS (28-36)
  {
    id: "port-28",
    title: "Bespoke Summer Couture",
    category: "Reels",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-studio-40268-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
    description: "Vertical fashion edit featuring rhythmic cuts, custom LUT profiles, and dynamic text overlays.",
    client: "Zara & Co",
    year: "2025"
  },
  {
    id: "port-29",
    title: "Urban Strides Campaign",
    category: "Reels",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-down-a-city-street-40269-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
    description: "Fast-paced street transit Reel optimized for high retention with trending audio synchronizations.",
    client: "Nomad Streetwear",
    year: "2025"
  },
  {
    id: "port-30",
    title: "Kinetic Street Dance",
    category: "Reels",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-dancer-performing-hip-hop-in-the-street-40270-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    description: "High-energy vertical clip capturing street dance with micro-second adjustments and zoom effects.",
    client: "Vibe Records",
    year: "2025"
  },
  {
    id: "port-31",
    title: "Skate Culture Showcase",
    category: "Reels",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-man-skateboarding-at-a-park-40271-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&q=80&w=800",
    description: "Action-cam Reel featuring slow-mo flips, speed ramps, and high-contrast night aesthetics.",
    client: "Grip Skates",
    year: "2024"
  },
  {
    id: "port-32",
    title: "Endurance & Power Training",
    category: "Reels",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-exercising-in-a-modern-gym-40272-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    description: "A motivational workout Reel with high-contrast shadows, rapid tracking shots, and heavy sound design.",
    client: "Pulse Gyms",
    year: "2025"
  },
  {
    id: "port-33",
    title: "Aero-Sprint Athletics",
    category: "Reels",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-runner-sprinting-on-a-running-track-40273-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800",
    description: "Vertical fitness hook demonstrating proper running stance under sunrise golden-hour backlights.",
    client: "Aerofit Apparel",
    year: "2025"
  },
  {
    id: "port-34",
    title: "Gravel Road Cycling",
    category: "Reels",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-cyclist-riding-a-bike-on-a-road-40274-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80&w=800",
    description: "POV cycling Reel detailing frame movement and gravel dust spray, captured in high frame rates.",
    client: "Rove Bikes",
    year: "2025"
  },
  {
    id: "port-35",
    title: "Riding Ocean Giants",
    category: "Reels",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-surfer-riding-a-wave-in-the-ocean-40275-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=800",
    description: "Stunning action surfing sequence cropped for vertical viewports, showing water spray textures.",
    client: "Swell Surfers",
    year: "2025"
  },
  {
    id: "port-36",
    title: "Peak Ascent Chronicles",
    category: "Reels",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-hiker-reaching-the-top-of-a-mountain-40276-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    description: "Epic mountaintop victory loop, emphasizing landscape horizons and majestic sunlight flares.",
    client: "Summit Gears",
    year: "2025"
  },

  // YOUTUBE (37-45)
  {
    id: "port-37",
    title: "Next-Gen Tech Unboxing",
    category: "YouTube",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-unboxing-a-new-technological-gadget-40502-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800",
    description: "YouTube-style unboxing video highlighting cardboard tears, close-up lens detail, and zoom cuts.",
    client: "TechBytes Channel",
    year: "2025"
  },
  {
    id: "port-38",
    title: "Ultra-Low Latency Gaming",
    category: "YouTube",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-person-playing-a-video-game-with-a-controller-40503-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800",
    description: "Highly engaged gaming edit, integrating overlay stats, facecam syncing, and audio balance.",
    client: "GamerPro Streams",
    year: "2025"
  },
  {
    id: "port-39",
    title: "The Podcaster's Setup Tour",
    category: "YouTube",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-streamer-talking-into-a-microphone-40504-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
    description: "A gorgeous desk setup walkthrough highlighting cable routing, microphone arms, and lighting.",
    client: "The Creators Guild",
    year: "2025"
  },
  {
    id: "port-40",
    title: "Dynamic RGB Studio Setup",
    category: "YouTube",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-setup-of-a-gaming-pc-with-rgb-lights-40505-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800",
    description: "Clean B-roll showcasing pulsing gaming setups, mechanical keyboards, and glowing ambient rigs.",
    client: "RigCraft Vlogs",
    year: "2025"
  },
  {
    id: "port-41",
    title: "Kinetic Keyboards Review",
    category: "YouTube",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-mechanical-keyboard-40506-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=800",
    description: "Review segment showcasing macro keystrokes, RGB colors, and high-fidelity key click audio.",
    client: "KeebNation",
    year: "2025"
  },
  {
    id: "port-42",
    title: "Mobile Gaming Revolution",
    category: "YouTube",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-playing-a-game-40507-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    description: "Close-up mobile gameplay review detailing responsive controls, screen brightness, and frame rates.",
    client: "Android Central",
    year: "2025"
  },
  {
    id: "port-43",
    title: "Focused Playthrough Sessions",
    category: "YouTube",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-gamer-wearing-headphones-concentrated-on-screen-40508-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    description: "A professional esports player profile film focusing on intense reaction loops and headphone details.",
    client: "Elite Esports",
    year: "2025"
  },
  {
    id: "port-44",
    title: "Cinematic Daily Vlogs",
    category: "YouTube",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-man-recording-a-video-vlog-40509-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&q=80&w=800",
    description: "Vlog editing style utilizing quick transitions, sound FX, zoom cuts, and auto-captioning details.",
    client: "Aryan Vlogs",
    year: "2025"
  },
  {
    id: "port-45",
    title: "The Optic Lens Review",
    category: "YouTube",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-reviewer-showing-camera-lens-to-audience-40510-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?auto=format&fit=crop&q=80&w=800",
    description: "Review segment displaying camera glass reflections, apertures, and depth of field capabilities.",
    client: "LensLab",
    year: "2025"
  },

  // DOCUMENTARIES (46-54)
  {
    id: "port-46",
    title: "Savanna Majesty: Lion Kings",
    category: "Documentaries",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-lion-in-the-wild-40915-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800",
    description: "A raw look at a wild lion in its natural savanna habitat, capturing close-up textures and breath details.",
    client: "WildEarth Channel",
    year: "2025"
  },
  {
    id: "port-47",
    title: "Gentle Giants Caravan",
    category: "Documentaries",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-herd-of-elephants-walking-in-the-savanna-40916-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=800",
    description: "Documentary tracking elephant migration patterns, detailing group hierarchy and dust cloud effects.",
    client: "Greenway Preservation",
    year: "2025"
  },
  {
    id: "port-48",
    title: "Avian Reflections Lake",
    category: "Documentaries",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-birds-flying-over-a-beautiful-lake-40917-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
    description: "Slow-motion bird flight tracking across a misty lake, using desaturated colors and ambient forest noises.",
    client: "Ecostudies Foundation",
    year: "2025"
  },
  {
    id: "port-49",
    title: "Green Turtles Ocean Run",
    category: "Documentaries",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-green-sea-turtle-swimming-underwater-40918-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?auto=format&fit=crop&q=80&w=800",
    description: "Crystal clear underwater footage tracking green sea turtles navigating shallow coral reefs.",
    client: "Oceanic Trust",
    year: "2024"
  },
  {
    id: "port-50",
    title: "The Hidden Forest Camouflage",
    category: "Documentaries",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-chameleon-on-a-branch-40919-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80&w=800",
    description: "Macro documentary tracking chameleon adaptation, skin color changes, and eye shifts.",
    client: "National Geographic UK",
    year: "2025"
  },
  {
    id: "port-51",
    title: "Corals Reef Undercurrents",
    category: "Documentaries",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-swimming-school-of-colorful-fish-40920-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800",
    description: "Dynamic schools of fish moving in unison, illustrating marine collective behaviors.",
    client: "Marine Blue Society",
    year: "2025"
  },
  {
    id: "port-52",
    title: "Canopy Perspectives",
    category: "Documentaries",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-forest-trees-from-below-40921-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    description: "A wide-angle look pointing straight up at forest canopies during heavy wind currents.",
    client: "Forestry Reserve",
    year: "2024"
  },
  {
    id: "port-53",
    title: "High Falls Cataract",
    category: "Documentaries",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-waterfall-flowing-into-a-river-40922-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
    description: "Tracking a powerful jungle waterfall falling into rocky streams with mist reflections.",
    client: "Tropic Exploration",
    year: "2025"
  },
  {
    id: "port-54",
    title: "Horizon Sunset Shadows",
    category: "Documentaries",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-sunset-over-the-ocean-40923-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    description: "Time-lapse sunset footage tracking orange-to-indigo color gradients fading into dark waves.",
    client: "Cinematic Earth",
    year: "2025"
  },

  // PODCASTS (55-63)
  {
    id: "port-55",
    title: "Mindset Blueprint Dialogues",
    category: "Podcasts",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-and-woman-recording-a-podcast-40345-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800",
    description: "Multi-camera podcast edit displaying dynamic switching between speaker screens.",
    client: "Dr. Alistair Vance",
    year: "2025"
  },
  {
    id: "port-56",
    title: "Analogue Studio Deck Settings",
    category: "Podcasts",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-sound-board-in-a-recording-studio-40346-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
    description: "B-roll sequence of mixing desk faders adjusting automatically to mic feedback limits.",
    client: "Frequency Studios",
    year: "2025"
  },
  {
    id: "port-57",
    title: "Primal Sound Mic Review",
    category: "Podcasts",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-microphone-in-front-of-a-host-40347-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
    description: "Macro shots of studio condenser microphones displaying grills, pop filters, and warm backlights.",
    client: "Primal Audio",
    year: "2025"
  },
  {
    id: "port-58",
    title: "Studio Acoustics Guide",
    category: "Podcasts",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-headphones-lying-on-a-table-40348-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    description: "A gorgeous setup shot with leather headphones lying on wood finishes, depicting study atmospheres.",
    client: "Soundscape Labs",
    year: "2025"
  },
  {
    id: "port-59",
    title: "Mastering Mix Consoles",
    category: "Podcasts",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-person-adjusting-microphone-settings-40349-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=800",
    description: "Close-up of a sound engineer adjusting high-frequency dials and decibel meters during live sessions.",
    client: "Acoustic Craft",
    year: "2025"
  },
  {
    id: "port-60",
    title: "Voices of Leadership Focus",
    category: "Podcasts",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-podcaster-speaking-40350-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
    description: "Close-up profile detailing mouth movements and mic proximity, demonstrating dialogue clarity.",
    client: "Sovereign Mind",
    year: "2025"
  },
  {
    id: "port-61",
    title: "Fidelity Waveform Analysis",
    category: "Podcasts",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-audio-waveforms-on-a-computer-screen-40351-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    description: "Screen capture illustrating stereo audio waveforms rendering and compression limits.",
    client: "Fidelity Audios",
    year: "2025"
  },
  {
    id: "port-62",
    title: "The Vocal Dynamics Session",
    category: "Podcasts",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-podcasting-setup-with-glowing-mic-40352-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800",
    description: "Wide shot showing glowing microphone halos in a dark vocal recording booth.",
    client: "Vox Studio",
    year: "2025"
  },
  {
    id: "port-63",
    title: "Studio Laughs & Insights",
    category: "Podcasts",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-group-of-hosts-laughing-during-show-40353-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    description: "Highlighting natural host interactions, laughing frames, and dynamic multi-angle camera crops.",
    client: "Chatterbox Podcast",
    year: "2025"
  },

  // BRAND CONTENT (64-72)
  {
    id: "port-64",
    title: "Vivid Brand Logo Sign",
    category: "Brand Content",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-glowing-neon-sign-with-brand-logo-40672-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    description: "A dark glowing neon brand logo promo capturing glass reflections and soft focus gradients.",
    client: "Lumina Labs",
    year: "2025"
  },
  {
    id: "port-65",
    title: "Vial of Elegance Perfume",
    category: "Brand Content",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-model-showcasing-luxury-perfume-bottle-40673-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
    description: "High-end perfume commercial highlighting bottle curves, liquid dispersion, and model expressions.",
    client: "Elegancia Paris",
    year: "2025"
  },
  {
    id: "port-66",
    title: "Apex Supercar Night Run",
    category: "Brand Content",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-sports-car-driving-at-night-40674-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    description: "A fast-moving tracking shot of a luxury sports car cruising under neon city nightlights.",
    client: "Apex Motors",
    year: "2025"
  },
  {
    id: "port-67",
    title: "Fine Gear Horology",
    category: "Brand Content",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-exquisite-watch-gears-moving-in-slow-motion-40675-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    description: "Macro commercial illustrating rotating luxury chronometer dials and mechanical gears.",
    client: "Chronos Horology",
    year: "2025"
  },
  {
    id: "port-68",
    title: "Art of Luxury Cosmetology",
    category: "Brand Content",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-high-end-makeup-products-on-display-40676-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800",
    description: "Cinematic commercial for a premium skincare line, focusing on glass drop dynamics and highlights.",
    client: "L'Aura Skin",
    year: "2025"
  },
  {
    id: "port-69",
    title: "Behind Couture Showrooms",
    category: "Brand Content",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-boutique-with-hanging-clothes-40677-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    description: "A slow drone walkthrough of a minimalist fashion boutique display, using neutral colors.",
    client: "Maison Blanc",
    year: "2025"
  },
  {
    id: "port-70",
    title: "Saddle Stitch Detail Bag",
    category: "Brand Content",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-designer-handbag-detail-shot-40678-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800",
    description: "Product commercial detailing genuine leather grains, buckle reflections, and gold stitch threads.",
    client: "Aurum Leather",
    year: "2025"
  },
  {
    id: "port-71",
    title: "Elysian Suites Lobby Showcase",
    category: "Brand Content",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-hotel-lobby-interior-40679-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    description: "Cinematic architectural walkthrough of a five-star hotel lobby, using warm lighting sweeps.",
    client: "Elysian Hotels",
    year: "2025"
  },
  {
    id: "port-72",
    title: "Domaine d'Or Champagne Pour",
    category: "Brand Content",
    mediaType: "video",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-expensive-champagne-into-flute-40680-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    description: "Luxury wine advertising illustrating golden bubbles pouring slowly into glass flutes.",
    client: "Domaine d'Or",
    year: "2025"
  }
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Sanjana Mehta",
    role: "Marketing Director",
    company: "Elysium Hotels",
    rating: 5,
    review: "Royal Vista Studio exceeded all our expectations. The promotional video they crafted captured the luxury aesthetic of our brand perfectly. Truly world-class visual artists!"
  },
  {
    id: "test-2",
    name: "Kunal Kapoor",
    role: "Founder",
    company: "Bespoke Threads",
    rating: 5,
    review: "Working with them for our commercial ads was seamless. Their motion graphics and color grading added a cinematic depth that immediately set our campaign apart. Incredibly professional."
  },
  {
    id: "test-3",
    name: "Dr. Alistair Vance",
    role: "Podcast Host",
    company: "Elevated Minds",
    rating: 5,
    review: "Their podcast editing and reels delivery increased our social media engagement by 200%. The speed of delivery and exceptional quality is unmatched."
  }
];

export const defaultFAQs: FAQ[] = [
  {
    id: "faq-1",
    question: "What is your standard turnaround time for a project?",
    answer: "Typically, social media reels and short commercial ads are delivered within 3-5 business days. Larger projects like corporate videos, documentaries, or full wedding films range from 2 to 4 weeks depending on the complexity of the editing and feedback cycles.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Do you offer sound design and color grading separately?",
    answer: "Yes, we offer individual color grading, color correction, sound design, and motion graphics services. You can select exactly the expertise your project requires.",
    category: "Services"
  },
  {
    id: "faq-3",
    question: "How do we collaborate on the editing revisions?",
    answer: "We use professional review platforms (like Frame.io) where you can leave timestamped comments directly on the video. This makes revisions precise, fast, and easy for both sides.",
    category: "Process"
  },
  {
    id: "faq-4",
    question: "Can you edit footage shot in log format (S-Log, C-Log, D-Log)?",
    answer: "Absolutely! We specialize in color-grading flat log profiles from all major camera brands (Sony, Canon, RED, ARRI, DJI) to deliver rich, luxury-grade final outputs.",
    category: "Technical"
  }
];

export const defaultBlogs: Blog[] = [
  {
    id: "blog-1",
    title: "The Art of Cinematic Color Grading: Setting the Emotional Tone",
    excerpt: "Discover how color grading defines the psychological atmosphere of film and how luxury brands use specific palettes to convey premium status.",
    content: "Color is the silent storyteller of cinema. It hits the viewer's subconscious long benefits they process the dialogue or the plot. In this article, we dive deep into the differences between color correction (making colors accurate) and color grading (making colors tell a story). We explore why high-end brands favor charcoal, gold, and muted pastel palettes to inspire prestige, trust, and luxury.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    date: "July 12, 2026",
    readTime: "5 min read"
  },
  {
    id: "blog-2",
    title: "Unlocking Maximum Engagement: Editing for Social Media Reels",
    excerpt: "Learn the scientific hook methods and pattern interrupt pacing formulas that keep viewers watching past the critical 3-second mark.",
    content: "With attention spans shrinking to record lows, the first 3 seconds of your vertical reel determine its success. We walk through our studio's signature techniques: auto-caption animation styles, trending audio sync grids, dynamic zooming, and the 'pacing hook' that drives a 90%+ retention rate on Instagram and YouTube Shorts.",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800",
    date: "June 28, 2026",
    readTime: "4 min read"
  }
];
