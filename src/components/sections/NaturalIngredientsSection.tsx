import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Droplets, Sparkles, Recycle } from 'lucide-react';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const NaturalIngredientsSection: React.FC = () => {
  const features: FeatureCard[] = [
    {
      id: 'radiant-glow',
      title: 'Radiant Glow',
      description: 'choosemenatural formulas nourish your skin for a fresh look all day.',
      icon: Leaf,
    },
    {
      id: 'natural-care',
      title: 'Natural Care',
      description: 'Made with natural ingredients, free from harsh chemicals.',
      icon: Droplets,
    },
    {
      id: 'gentle-skin',
      title: 'Gentle on Skin',
      description: 'Dermatologist-tested formulas, safe for all skins.',
      icon: Sparkles,
    },
    {
      id: 'eco-friendly',
      title: 'Eco-Friendly',
      description: 'Sustainable packaging crafted from recycled materials.',
      icon: Recycle,
    },
  ];

  return (
    <section id="ingredients" className="py-20 sm:py-24 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#f5f8f4] via-[#ecf3eb] to-[#f4f7f3]">
      
      {/* Decorative Atmospheric Blurred Botanical Elements in Periphery */}
      <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-[#82a984]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-16 w-96 h-96 rounded-full bg-[#8fb391]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 left-1/3 w-96 h-96 rounded-full bg-[#d0e0cf]/40 blur-3xl pointer-events-none" />

      {/* Floating Out-of-focus Green Leaves at background edges */}
      <div className="absolute top-16 left-6 w-32 h-32 opacity-35 blur-[2px] pointer-events-none transform -rotate-45 select-none hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#3a583c]">
          <path d="M10,90 Q40,10 90,10 Q90,60 10,90 Z" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-8 w-36 h-36 opacity-30 blur-[3px] pointer-events-none transform rotate-12 select-none hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#2c472e]">
          <path d="M20,80 Q50,0 80,20 Q80,70 20,80 Z" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          {/* Pill Badge: PURE BY NATURE */}
          <div className="flex justify-center md:justify-start mb-3 sm:mb-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#c4d8c3] text-[#345136] text-xs font-extrabold uppercase tracking-widest shadow-sm"
            >
              <Leaf className="w-3.5 h-3.5 text-[#4e7451]" />
              <span>Pure By Nature</span>
            </motion.div>
          </div>

          {/* Title Row with Perfectly Aligned View All Button */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#131d14] tracking-tight leading-[1.08] text-center md:text-left"
            >
              Our <span className="font-serif italic text-[#486e4b] font-normal tracking-normal">Natural</span> Ingredients
            </motion.h2>

            {/* View All Ingredients Button - Aligned with the Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="self-center md:self-center shrink-0"
            >
              <a
                href="#products"
                className="inline-flex items-center space-x-2.5 px-6 py-2.5 rounded-full border border-gray-400/80 hover:border-[#1b2b1d] bg-white/90 hover:bg-[#1b2b1d] text-[#1b2b1d] hover:text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md group cursor-pointer backdrop-blur-md"
              >
                <span>View All Ingredients</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-3.5 sm:mt-4 text-sm sm:text-base text-[#465747] leading-relaxed max-w-xl text-center md:text-left"
          >
            Thoughtfully chosen from nature's finest. Each ingredient works in harmony to nourish, protect and bring out your natural glow.
          </motion.p>
        </div>

        {/* =========================================================================
            DESKTOP WIDE VIEWPORT (1024px+): Perfectly Connected SVG Nodes (Zero Gap)
           ========================================================================= */}
        <div className="hidden lg:block relative w-full max-w-[1200px] mx-auto h-[520px]">
          
          {/* Unified SVG Layer with Exact Shared Vector Coordinates */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 1200 520"
          >
            <defs>
              <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a6e4d" />
                <stop offset="50%" stopColor="#67916a" />
                <stop offset="100%" stopColor="#4a6e4d" />
              </linearGradient>
            </defs>

            {/* CURVE 1: Top-Left Card (330, 115) -> Center Ring Left-Top (440, 180) */}
            <path
              d="M 330 115 C 375 115, 395 180, 440 180"
              fill="none"
              stroke="#527754"
              strokeWidth="2.2"
            />
            <circle r="3.5" fill="#2d4a2f">
              <animateMotion
                path="M 330 115 C 375 115, 395 180, 440 180"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* CURVE 2: Bottom-Left Card (330, 405) -> Center Ring Left-Bottom (440, 340) */}
            <path
              d="M 330 405 C 375 405, 395 340, 440 340"
              fill="none"
              stroke="#527754"
              strokeWidth="2.2"
            />
            <circle r="3.5" fill="#2d4a2f">
              <animateMotion
                path="M 330 405 C 375 405, 395 340, 440 340"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* CURVE 3: Top-Right Card (870, 115) -> Center Ring Right-Top (760, 180) */}
            <path
              d="M 870 115 C 825 115, 805 180, 760 180"
              fill="none"
              stroke="#527754"
              strokeWidth="2.2"
            />
            <circle r="3.5" fill="#2d4a2f">
              <animateMotion
                path="M 870 115 C 825 115, 805 180, 760 180"
                dur="4.2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* CURVE 4: Bottom-Right Card (870, 405) -> Center Ring Right-Bottom (760, 340) */}
            <path
              d="M 870 405 C 825 405, 805 340, 760 340"
              fill="none"
              stroke="#527754"
              strokeWidth="2.2"
            />
            <circle r="3.5" fill="#2d4a2f">
              <animateMotion
                path="M 870 405 C 825 405, 805 340, 760 340"
                dur="4.8s"
                repeatCount="indefinite"
              />
            </circle>

            {/* 4 Card Outer Nodes (Rendered in SVG at exact origin: ZERO GAP) */}
            {/* Top-Left Card Outer Node */}
            <circle cx="330" cy="115" r="9" fill="#527754" stroke="white" strokeWidth="2.5" />
            <circle cx="330" cy="115" r="4" fill="white" />

            {/* Bottom-Left Card Outer Node */}
            <circle cx="330" cy="405" r="9" fill="#527754" stroke="white" strokeWidth="2.5" />
            <circle cx="330" cy="405" r="4" fill="white" />

            {/* Top-Right Card Outer Node */}
            <circle cx="870" cy="115" r="9" fill="#527754" stroke="white" strokeWidth="2.5" />
            <circle cx="870" cy="115" r="4" fill="white" />

            {/* Bottom-Right Card Outer Node */}
            <circle cx="870" cy="405" r="9" fill="#527754" stroke="white" strokeWidth="2.5" />
            <circle cx="870" cy="405" r="4" fill="white" />

            {/* 4 Central Ring Inner Nodes (Rendered in SVG at exact endpoint: ZERO GAP) */}
            {/* Inner Ring Node Left-Top */}
            <circle cx="440" cy="180" r="9" fill="white" stroke="#527754" strokeWidth="2.5" />
            <circle cx="440" cy="180" r="4" fill="#527754" />

            {/* Inner Ring Node Left-Bottom */}
            <circle cx="440" cy="340" r="9" fill="white" stroke="#527754" strokeWidth="2.5" />
            <circle cx="440" cy="340" r="4" fill="#527754" />

            {/* Inner Ring Node Right-Top */}
            <circle cx="760" cy="180" r="9" fill="white" stroke="#527754" strokeWidth="2.5" />
            <circle cx="760" cy="180" r="4" fill="#527754" />

            {/* Inner Ring Node Right-Bottom */}
            <circle cx="760" cy="340" r="9" fill="white" stroke="#527754" strokeWidth="2.5" />
            <circle cx="760" cy="340" r="4" fill="#527754" />
          </svg>

          {/* =========================================
              CENTERPIECE: Orbit Rings & Product Bottle
             ========================================= */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] flex items-center justify-center z-10">
            
            {/* Outer Concentric Frosted Orbit Ring */}
            <div className="absolute inset-0 rounded-full border border-[#89ac8c]/35 bg-gradient-to-tr from-[#98ba9b]/15 via-transparent to-[#98ba9b]/25 backdrop-blur-[2px] shadow-[0_10px_40px_rgba(40,70,45,0.06)]" />

            {/* Inner Concentric Fine Ring */}
            <div className="absolute inset-5 rounded-full border border-white/60 pointer-events-none" />

            {/* Central Circular Product Photo */}
            <div
              className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-[6px] border-white shadow-[0_22px_60px_rgba(20,40,22,0.18)] bg-[#eae5dc] z-20 group"
            >
              <img
                src="/images/natural-ingredients-center.jpg"
                alt="Natural botanical essence bottle"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/25 pointer-events-none" />
            </div>

            {/* Floating Botanical Jasmine Petals and Green Leaves around Orbit */}
            {/* Green Leaf 1 (Top-Right) */}
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 right-10 w-10 h-10 pointer-events-none z-30 drop-shadow-md"
            >
              <svg viewBox="0 0 40 40" className="w-full h-full fill-[#49704c]">
                <path d="M5,35 Q15,5 35,5 Q35,25 5,35 Z" />
              </svg>
            </motion.div>

            {/* Green Leaf 2 (Bottom-Right) */}
            <motion.div
              animate={{ y: [0, 7, 0], rotate: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 right-12 w-12 h-12 pointer-events-none z-30 drop-shadow-md"
            >
              <svg viewBox="0 0 40 40" className="w-full h-full fill-[#3f6341]">
                <path d="M10,30 Q20,2 38,10 Q32,34 10,30 Z" />
              </svg>
            </motion.div>

            {/* Green Leaf 3 (Left) */}
            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -left-6 -translate-y-1/2 w-9 h-9 pointer-events-none z-30 drop-shadow-md"
            >
              <svg viewBox="0 0 40 40" className="w-full h-full fill-[#527754]">
                <path d="M35,35 Q25,5 5,5 Q5,25 35,35 Z" />
              </svg>
            </motion.div>

            {/* Golden Oil Droplet 1 (Bottom Left) */}
            <motion.div
              animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 left-10 w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400/80 via-yellow-200/90 to-white/90 shadow-[0_8px_20px_rgba(215,160,50,0.35)] backdrop-blur-sm pointer-events-none z-30 border border-white/60 flex items-center justify-center"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-white/90 absolute top-1.5 left-1.5 blur-[0.5px]" />
            </motion.div>

            {/* Golden Oil Droplet 2 (Top Right) */}
            <motion.div
              animate={{ y: [0, 6, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute top-16 -right-6 w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400/75 via-yellow-200/85 to-white/90 shadow-[0_6px_16px_rgba(215,160,50,0.3)] backdrop-blur-sm pointer-events-none z-30 border border-white/60 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-white/90 absolute top-1 left-1 blur-[0.5px]" />
            </motion.div>

            {/* White Jasmine Flower 1 (Left Orbit) */}
            <motion.div
              animate={{ rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 -left-16 w-10 h-10 pointer-events-none z-30 drop-shadow-sm opacity-90"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="12" fill="#fde68a" />
                <ellipse cx="50" cy="22" rx="10" ry="20" fill="#ffffff" />
                <ellipse cx="50" cy="78" rx="10" ry="20" fill="#ffffff" />
                <ellipse cx="22" cy="50" rx="20" ry="10" fill="#ffffff" />
                <ellipse cx="78" cy="50" rx="20" ry="10" fill="#ffffff" />
              </svg>
            </motion.div>

            {/* White Jasmine Flower 2 (Bottom Right Orbit) */}
            <motion.div
              animate={{ rotate: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -bottom-8 right-24 w-10 h-10 pointer-events-none z-30 drop-shadow-sm opacity-90"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="10" fill="#fde68a" />
                <ellipse cx="50" cy="24" rx="9" ry="18" fill="#ffffff" />
                <ellipse cx="50" cy="76" rx="9" ry="18" fill="#ffffff" />
                <ellipse cx="24" cy="50" rx="18" ry="9" fill="#ffffff" />
                <ellipse cx="76" cy="50" rx="18" ry="9" fill="#ffffff" />
              </svg>
            </motion.div>

            {/* Sparkle Twinkles */}
            <div className="absolute top-8 left-2 text-[#7ca07e] animate-pulse">
              <Sparkles className="w-4 h-4 fill-current opacity-80" />
            </div>
            <div className="absolute bottom-12 right-2 text-[#7ca07e] animate-pulse delay-500">
              <Sparkles className="w-3.5 h-3.5 fill-current opacity-70" />
            </div>
          </div>

          {/* ====================================================================
              4 CARDS: HIGHLIGHTED UI BY DEFAULT (NO HOVER DEPENDENCY)
             ==================================================================== */}
          {/* 1. TOP-LEFT CARD: Radiant Glow (left: 0, top: 65px, width: 330px) */}
          <div
            className="absolute left-0 top-[65px] z-10 w-[330px] p-3.5 pr-5 rounded-[28px] bg-white border-2 border-[#527754]/40 shadow-[0_12px_32px_rgba(20,38,22,0.08)] flex items-center space-x-3.5"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#e4efe4] to-[#c7dfc8] p-0.5 shadow-inner border border-white/90 flex items-center justify-center shrink-0">
              <Leaf className="w-6 h-6 text-[#2f4e32]" />
            </div>

            <div>
              <h3 className="text-[17px] font-bold text-[#141f15] tracking-tight">
                Radiant Glow
              </h3>
              <p className="mt-1 text-xs text-[#4d5f4e] leading-snug">
                choosemenatural formulas nourish your skin for a fresh look all day.
              </p>
              <div className="w-8 h-[2px] bg-[#527754]/30 mt-2 rounded-full" />
            </div>
          </div>

          {/* 2. BOTTOM-LEFT CARD: Gentle on Skin (left: 0, top: 355px, width: 330px) */}
          <div
            className="absolute left-0 top-[355px] z-10 w-[330px] p-3.5 pr-5 rounded-[28px] bg-white border-2 border-[#527754]/40 shadow-[0_12px_32px_rgba(20,38,22,0.08)] flex items-center space-x-3.5"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#e4efe4] to-[#c7dfc8] p-0.5 shadow-inner border border-white/90 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#2f4e32]" />
            </div>

            <div>
              <h3 className="text-[17px] font-bold text-[#141f15] tracking-tight">
                Gentle on Skin
              </h3>
              <p className="mt-1 text-xs text-[#4d5f4e] leading-snug">
                Dermatologist-tested formulas, safe for all skins.
              </p>
              <div className="w-8 h-[2px] bg-[#527754]/30 mt-2 rounded-full" />
            </div>
          </div>

          {/* 3. TOP-RIGHT CARD: Natural Care (right: 0, top: 65px, width: 330px) */}
          <div
            className="absolute right-0 top-[65px] z-10 w-[330px] p-3.5 pr-5 rounded-[28px] bg-white border-2 border-[#527754]/40 shadow-[0_12px_32px_rgba(20,38,22,0.08)] flex items-center space-x-3.5"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#e4efe4] to-[#c7dfc8] p-0.5 shadow-inner border border-white/90 flex items-center justify-center shrink-0">
              <Droplets className="w-6 h-6 text-[#2f4e32]" />
            </div>

            <div>
              <h3 className="text-[17px] font-bold text-[#141f15] tracking-tight">
                Natural Care
              </h3>
              <p className="mt-1 text-xs text-[#4d5f4e] leading-snug">
                Made with natural ingredients, free from harsh chemicals.
              </p>
              <div className="w-8 h-[2px] bg-[#527754]/30 mt-2 rounded-full" />
            </div>
          </div>

          {/* 4. BOTTOM-RIGHT CARD: Eco-Friendly (right: 0, top: 355px, width: 330px) */}
          <div
            className="absolute right-0 top-[355px] z-10 w-[330px] p-3.5 pr-5 rounded-[28px] bg-white border-2 border-[#527754]/40 shadow-[0_12px_32px_rgba(20,38,22,0.08)] flex items-center space-x-3.5"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#e4efe4] to-[#c7dfc8] p-0.5 shadow-inner border border-white/90 flex items-center justify-center shrink-0">
              <Recycle className="w-6 h-6 text-[#2f4e32]" />
            </div>

            <div>
              <h3 className="text-[17px] font-bold text-[#141f15] tracking-tight">
                Eco-Friendly
              </h3>
              <p className="mt-1 text-xs text-[#4d5f4e] leading-snug">
                Sustainable packaging crafted from recycled materials.
              </p>
              <div className="w-8 h-[2px] bg-[#527754]/30 mt-2 rounded-full" />
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET VIEWPORT (<1024px): Mobile App-Level Responsive Elegance
           ========================================================================= */}
        <div className="lg:hidden flex flex-col items-center space-y-6">
          
          {/* Centered Circular Bottle with Concentric Frosted Rings */}
          <div className="relative w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] flex items-center justify-center my-2">
            
            {/* Concentric Frosted Glass Rings */}
            <div className="absolute inset-0 rounded-full border border-[#89ac8c]/40 bg-[#dce8db]/20 backdrop-blur-xs shadow-lg" />
            <div className="absolute inset-4 rounded-full border border-white/60" />

            {/* 4 Connected Nodes on the Ring in Mobile View */}
            <div className="absolute left-2 top-[32%] w-4 h-4 rounded-full bg-white border-2 border-[#527754] flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#527754]" />
            </div>
            <div className="absolute left-2 top-[68%] w-4 h-4 rounded-full bg-white border-2 border-[#527754] flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#527754]" />
            </div>
            <div className="absolute right-2 top-[32%] w-4 h-4 rounded-full bg-white border-2 border-[#527754] flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#527754]" />
            </div>
            <div className="absolute right-2 top-[68%] w-4 h-4 rounded-full bg-white border-2 border-[#527754] flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#527754]" />
            </div>

            {/* Inner Circular Photo with White Border */}
            <div
              className="relative w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full overflow-hidden border-[5px] border-white shadow-[0_16px_40px_rgba(20,38,22,0.18)] bg-[#eae5dc] z-10"
            >
              <img
                src="/images/natural-ingredients-center.jpg"
                alt="Natural botanical essence bottle"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Golden Oil Droplet */}
            <div className="absolute bottom-2 left-6 w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-200 to-white shadow-md border border-white/70 flex items-center justify-center z-20">
              <div className="w-2 h-2 rounded-full bg-white absolute top-1 left-1" />
            </div>

            {/* Floating Jasmine Flower */}
            <div className="absolute top-4 right-8 w-8 h-8 pointer-events-none z-20 drop-shadow-sm">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="12" fill="#fde68a" />
                <ellipse cx="50" cy="22" rx="10" ry="20" fill="#ffffff" />
                <ellipse cx="50" cy="78" rx="10" ry="20" fill="#ffffff" />
                <ellipse cx="22" cy="50" rx="20" ry="10" fill="#ffffff" />
                <ellipse cx="78" cy="50" rx="20" ry="10" fill="#ffffff" />
              </svg>
            </div>
          </div>

          {/* 4 Frosted Pill Cards Responsive Grid (Highlighted by default) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-4 rounded-[26px] bg-white border-2 border-[#527754]/35 shadow-[0_8px_24px_rgba(20,35,22,0.06)] flex items-center space-x-3.5"
                >
                  {/* 3D Glass Icon Bulb */}
                  <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#e4efe4] to-[#c7dfc8] p-0.5 shadow-inner border border-white/90 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#2f4e32]" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#141f15] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#4d5f4e] leading-snug">
                      {item.description}
                    </p>
                    <div className="w-6 h-[2px] bg-[#527754]/30 mt-1.5 rounded-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

