import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Stethoscope, Bed, Baby, Utensils, Bath, Coffee } from 'lucide-react';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const NaturalIngredientsSection: React.FC = () => {
  const features: FeatureCard[] = [
    {
      id: 'doctor',
      title: 'All time Doctor',
      description: '24/7 Doctor Available for observation and execution of all treatment and Care.',
      icon: Stethoscope,
    },
    {
      id: 'rooms',
      title: 'Comfortable Private Rooms',
      description: 'Spacious, hygienic and peaceful rooms for mothers to relax and recover.',
      icon: Bed,
    },
    {
      id: 'baby-care',
      title: 'Dedicated Baby Care Facilities',
      description: 'A safe and comfortable environment for newborn care and mother-baby bonding.',
      icon: Baby,
    },
    {
      id: 'food',
      title: 'Nutritious Traditional Food',
      description: 'Freshly prepared, wholesome meals inspired by traditional Kerala postnatal dietary practices.',
      icon: Utensils,
    },
    {
      id: 'bathing',
      title: 'Hygienic Bathing Facilities',
      description: 'Clean and comfortable bathing spaces with facilities for traditional herbal bathing.',
      icon: Bath,
    },
    {
      id: 'relaxation',
      title: 'Relaxation & Recreation Space',
      description: 'A calm environment with comfortable seating and relaxing spaces for mothers and families.',
      icon: Coffee,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#f5f8f4] via-[#ecf3eb] to-[#f4f7f3]">
      <div id="ingredients" className="absolute -top-24 left-0 pointer-events-none" />
      <div id="amenities" className="absolute -top-24 left-0 pointer-events-none" />
      <div id="beauty-space" className="absolute -top-24 left-0 pointer-events-none" />
      
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
          {/* Pill Badge: Why people chose us. */}
          <div className="flex justify-center md:justify-start mb-3 sm:mb-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#d4a034]/40 text-[#122314] text-xs font-extrabold uppercase tracking-widest shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4a034]" />
              <span>Why People Choose Us</span>
            </motion.div>
          </div>

          {/* Title Row with Aligned Action Button */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#131d14] tracking-tight leading-[1.1] text-center md:text-left"
            >
              Premium Amenities at <span className="font-serif italic text-[#25462c] font-normal tracking-normal">AaramCare</span>
            </motion.h2>

            {/* Explore Amenities Button - Aligned with Title */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="self-center md:self-center shrink-0"
            >
              <a
                href="#services"
                className="inline-flex items-center space-x-2.5 px-6 py-2.5 rounded-full border border-[#d4a034]/50 hover:border-[#112314] bg-white hover:bg-[#112314] text-[#112314] hover:text-[#fae788] text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md group cursor-pointer backdrop-blur-md"
              >
                <span>Explore Amenities</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#d4a034] group-hover:text-[#fae788]" />
              </a>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3.5 sm:mt-4 text-sm sm:text-base text-[#465747] leading-relaxed max-w-2xl text-center md:text-left"
          >
            Experience exceptional comfort with private rooms, dedicated baby care, nutritious meals, hygienic facilities and personalised assistance throughout your postnatal stay at AaramCare.
          </motion.p>
        </div>

        {/* =========================================================================
            DESKTOP WIDE VIEWPORT (1024px+): 6 Connected SVG Nodes to Central Vessel
           ========================================================================= */}
        <div className="hidden lg:block relative w-full max-w-[1200px] mx-auto h-[660px]">
          
          {/* Unified SVG Layer with 6 Curved Vector Connectors */}
          <motion.svg
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 1200 660"
          >
            <defs>
              <linearGradient id="amenityConnectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4a034" />
                <stop offset="50%" stopColor="#3a613e" />
                <stop offset="100%" stopColor="#d4a034" />
              </linearGradient>
            </defs>

            {/* CURVE 1: Top-Left Card (340, 75) -> Center Ring Left-Top (465, 210) */}
            <path
              d="M 340 75 C 390 75, 420 210, 465 210"
              fill="none"
              stroke="#3a613e"
              strokeWidth="2.2"
            />
            <circle r="4" fill="#d4a034">
              <animateMotion
                path="M 340 75 C 390 75, 420 210, 465 210"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* CURVE 2: Mid-Left Card (340, 330) -> Center Ring Left-Mid (420, 330) */}
            <path
              d="M 340 330 L 420 330"
              fill="none"
              stroke="#3a613e"
              strokeWidth="2.2"
            />
            <circle r="4" fill="#d4a034">
              <animateMotion
                path="M 340 330 L 420 330"
                dur="3.6s"
                repeatCount="indefinite"
              />
            </circle>

            {/* CURVE 3: Bottom-Left Card (340, 590) -> Center Ring Left-Bottom (465, 450) */}
            <path
              d="M 340 590 C 390 590, 420 450, 465 450"
              fill="none"
              stroke="#3a613e"
              strokeWidth="2.2"
            />
            <circle r="4" fill="#d4a034">
              <animateMotion
                path="M 340 590 C 390 590, 420 450, 465 450"
                dur="4.4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* CURVE 4: Top-Right Card (860, 75) -> Center Ring Right-Top (735, 210) */}
            <path
              d="M 860 75 C 810 75, 780 210, 735 210"
              fill="none"
              stroke="#3a613e"
              strokeWidth="2.2"
            />
            <circle r="4" fill="#d4a034">
              <animateMotion
                path="M 860 75 C 810 75, 780 210, 735 210"
                dur="4.2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* CURVE 5: Mid-Right Card (860, 330) -> Center Ring Right-Mid (780, 330) */}
            <path
              d="M 860 330 L 780 330"
              fill="none"
              stroke="#3a613e"
              strokeWidth="2.2"
            />
            <circle r="4" fill="#d4a034">
              <animateMotion
                path="M 860 330 L 780 330"
                dur="3.8s"
                repeatCount="indefinite"
              />
            </circle>

            {/* CURVE 6: Bottom-Right Card (860, 590) -> Center Ring Right-Bottom (735, 450) */}
            <path
              d="M 860 590 C 810 590, 780 450, 735 450"
              fill="none"
              stroke="#3a613e"
              strokeWidth="2.2"
            />
            <circle r="4" fill="#d4a034">
              <animateMotion
                path="M 860 590 C 810 590, 780 450, 735 450"
                dur="4.6s"
                repeatCount="indefinite"
              />
            </circle>

            {/* 6 Outer Card Connecting Nodes */}
            <circle cx="340" cy="75" r="9" fill="#112314" stroke="white" strokeWidth="2.5" />
            <circle cx="340" cy="75" r="4" fill="#d4a034" />

            <circle cx="340" cy="330" r="9" fill="#112314" stroke="white" strokeWidth="2.5" />
            <circle cx="340" cy="330" r="4" fill="#d4a034" />

            <circle cx="340" cy="590" r="9" fill="#112314" stroke="white" strokeWidth="2.5" />
            <circle cx="340" cy="590" r="4" fill="#d4a034" />

            <circle cx="860" cy="75" r="9" fill="#112314" stroke="white" strokeWidth="2.5" />
            <circle cx="860" cy="75" r="4" fill="#d4a034" />

            <circle cx="860" cy="330" r="9" fill="#112314" stroke="white" strokeWidth="2.5" />
            <circle cx="860" cy="330" r="4" fill="#d4a034" />

            <circle cx="860" cy="590" r="9" fill="#112314" stroke="white" strokeWidth="2.5" />
            <circle cx="860" cy="590" r="4" fill="#d4a034" />

            {/* 6 Central Ring Inner Nodes */}
            <circle cx="465" cy="210" r="9" fill="white" stroke="#3a613e" strokeWidth="2.5" />
            <circle cx="465" cy="210" r="4" fill="#d4a034" />

            <circle cx="420" cy="330" r="9" fill="white" stroke="#3a613e" strokeWidth="2.5" />
            <circle cx="420" cy="330" r="4" fill="#d4a034" />

            <circle cx="465" cy="450" r="9" fill="white" stroke="#3a613e" strokeWidth="2.5" />
            <circle cx="465" cy="450" r="4" fill="#d4a034" />

            <circle cx="735" cy="210" r="9" fill="white" stroke="#3a613e" strokeWidth="2.5" />
            <circle cx="735" cy="210" r="4" fill="#d4a034" />

            <circle cx="780" cy="330" r="9" fill="white" stroke="#3a613e" strokeWidth="2.5" />
            <circle cx="780" cy="330" r="4" fill="#d4a034" />

            <circle cx="735" cy="450" r="9" fill="white" stroke="#3a613e" strokeWidth="2.5" />
            <circle cx="735" cy="450" r="4" fill="#d4a034" />
          </motion.svg>

          {/* =========================================
              CENTERPIECE: Orbit Rings & Central Sanctuary Image
             ========================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] flex items-center justify-center z-10"
          >
            {/* Outer Concentric Frosted Orbit Ring with Gold Accent */}
            <div className="absolute inset-0 rounded-full border border-[#d4a034]/30 bg-gradient-to-tr from-[#98ba9b]/15 via-transparent to-[#d4a034]/15 backdrop-blur-[2px] shadow-[0_10px_40px_rgba(40,70,45,0.08)]" />

            {/* Inner Concentric Fine Ring */}
            <div className="absolute inset-5 rounded-full border border-white/60 pointer-events-none" />

            {/* Central Circular Sanctuary Vessel Photo */}
            <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-[6px] border-white shadow-[0_22px_60px_rgba(20,40,22,0.22)] bg-[#eae5dc] z-20 group">
              <img
                src="/images/ayurveda-herbs-center.jpg"
                alt="Classical Ayurvedic postnatal sanctuary amenities and medicinal botanicals"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/20 pointer-events-none" />
            </div>

            {/* Floating Botanical Elements around Orbit */}
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 right-10 w-10 h-10 pointer-events-none z-30 drop-shadow-md"
            >
              <svg viewBox="0 0 40 40" className="w-full h-full fill-[#49704c]">
                <path d="M5,35 Q15,5 35,5 Q35,25 5,35 Z" />
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0], rotate: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 right-12 w-12 h-12 pointer-events-none z-30 drop-shadow-md"
            >
              <svg viewBox="0 0 40 40" className="w-full h-full fill-[#3f6341]">
                <path d="M10,30 Q20,2 38,10 Q32,34 10,30 Z" />
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -left-6 -translate-y-1/2 w-9 h-9 pointer-events-none z-30 drop-shadow-md"
            >
              <svg viewBox="0 0 40 40" className="w-full h-full fill-[#527754]">
                <path d="M35,35 Q25,5 5,5 Q5,25 35,35 Z" />
              </svg>
            </motion.div>

            {/* Golden Herbal Droplets */}
            <motion.div
              animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 left-10 w-9 h-9 rounded-full bg-gradient-to-tr from-[#d4a034] via-[#fae788] to-white shadow-[0_8px_20px_rgba(212,160,52,0.4)] backdrop-blur-sm pointer-events-none z-30 border border-white/60 flex items-center justify-center"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-white/90 absolute top-1.5 left-1.5 blur-[0.5px]" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute top-16 -right-6 w-7 h-7 rounded-full bg-gradient-to-tr from-[#d4a034] via-[#fae788] to-white shadow-[0_6px_16px_rgba(212,160,52,0.35)] backdrop-blur-sm pointer-events-none z-30 border border-white/60 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-white/90 absolute top-1 left-1 blur-[0.5px]" />
            </motion.div>

            {/* Jasmine Flowers */}
            <motion.div
              animate={{ rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 -left-16 w-10 h-10 pointer-events-none z-30 drop-shadow-sm opacity-90"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="12" fill="#fae788" />
                <ellipse cx="50" cy="22" rx="10" ry="20" fill="#ffffff" />
                <ellipse cx="50" cy="78" rx="10" ry="20" fill="#ffffff" />
                <ellipse cx="22" cy="50" rx="20" ry="10" fill="#ffffff" />
                <ellipse cx="78" cy="50" rx="20" ry="10" fill="#ffffff" />
              </svg>
            </motion.div>

            <motion.div
              animate={{ rotate: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -bottom-8 right-24 w-10 h-10 pointer-events-none z-30 drop-shadow-sm opacity-90"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="10" fill="#fae788" />
                <ellipse cx="50" cy="24" rx="9" ry="18" fill="#ffffff" />
                <ellipse cx="50" cy="76" rx="9" ry="18" fill="#ffffff" />
                <ellipse cx="24" cy="50" rx="18" ry="9" fill="#ffffff" />
                <ellipse cx="76" cy="50" rx="18" ry="9" fill="#ffffff" />
              </svg>
            </motion.div>

            {/* Sparkles */}
            <div className="absolute top-8 left-2 text-[#d4a034] animate-pulse">
              <Sparkles className="w-4 h-4 fill-current opacity-85" />
            </div>
            <div className="absolute bottom-12 right-2 text-[#d4a034] animate-pulse delay-500">
              <Sparkles className="w-3.5 h-3.5 fill-current opacity-75" />
            </div>
          </motion.div>

          {/* ====================================================================
              6 CARDS: 3 LEFT & 3 RIGHT BALANCED NODES
             ==================================================================== */}

          {/* 1. TOP-LEFT: All time Doctor (left: 0, top: 25px, width: 340px) */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: -10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="absolute left-0 top-[25px] z-10 w-[340px] p-3.5 pr-5 rounded-[26px] bg-white border-2 border-[#d4a034]/35 hover:border-[#d4a034]/70 shadow-[0_12px_32px_rgba(20,38,22,0.08)] hover:shadow-[0_18px_40px_rgba(20,38,22,0.14)] flex items-center space-x-3.5 transition-all duration-300"
          >
            <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#122314] to-[#25462c] text-[#fae788] border border-[#d4a034]/40 p-0.5 shadow-md flex items-center justify-center shrink-0">
              <Stethoscope className="w-5.5 h-5.5 text-[#fae788]" />
            </div>
            <div>
              <h3 className="text-[16px] font-heading font-extrabold text-[#112314] tracking-tight">
                {features[0].title}
              </h3>
              <p className="mt-1 text-xs text-[#4d5f4e] leading-snug">
                {features[0].description}
              </p>
              <div className="w-8 h-[2.5px] bg-gradient-to-r from-[#d4a034] to-[#fae788] mt-2 rounded-full" />
            </div>
          </motion.div>

          {/* 2. MID-LEFT: Comfortable Private Rooms (left: 0, top: 285px, width: 340px) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="absolute left-0 top-[285px] z-10 w-[340px] p-3.5 pr-5 rounded-[26px] bg-white border-2 border-[#d4a034]/35 hover:border-[#d4a034]/70 shadow-[0_12px_32px_rgba(20,38,22,0.08)] hover:shadow-[0_18px_40px_rgba(20,38,22,0.14)] flex items-center space-x-3.5 transition-all duration-300"
          >
            <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#122314] to-[#25462c] text-[#fae788] border border-[#d4a034]/40 p-0.5 shadow-md flex items-center justify-center shrink-0">
              <Bed className="w-5.5 h-5.5 text-[#fae788]" />
            </div>
            <div>
              <h3 className="text-[16px] font-heading font-extrabold text-[#112314] tracking-tight">
                {features[1].title}
              </h3>
              <p className="mt-1 text-xs text-[#4d5f4e] leading-snug">
                {features[1].description}
              </p>
              <div className="w-8 h-[2.5px] bg-gradient-to-r from-[#d4a034] to-[#fae788] mt-2 rounded-full" />
            </div>
          </motion.div>

          {/* 3. BOTTOM-LEFT: Dedicated Baby Care Facilities (left: 0, top: 545px, width: 340px) */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="absolute left-0 top-[545px] z-10 w-[340px] p-3.5 pr-5 rounded-[26px] bg-white border-2 border-[#d4a034]/35 hover:border-[#d4a034]/70 shadow-[0_12px_32px_rgba(20,38,22,0.08)] hover:shadow-[0_18px_40px_rgba(20,38,22,0.14)] flex items-center space-x-3.5 transition-all duration-300"
          >
            <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#122314] to-[#25462c] text-[#fae788] border border-[#d4a034]/40 p-0.5 shadow-md flex items-center justify-center shrink-0">
              <Baby className="w-5.5 h-5.5 text-[#fae788]" />
            </div>
            <div>
              <h3 className="text-[16px] font-heading font-extrabold text-[#112314] tracking-tight">
                {features[2].title}
              </h3>
              <p className="mt-1 text-xs text-[#4d5f4e] leading-snug">
                {features[2].description}
              </p>
              <div className="w-8 h-[2.5px] bg-gradient-to-r from-[#d4a034] to-[#fae788] mt-2 rounded-full" />
            </div>
          </motion.div>

          {/* 4. TOP-RIGHT: Nutritious Traditional Food (right: 0, top: 25px, width: 340px) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="absolute right-0 top-[25px] z-10 w-[340px] p-3.5 pr-5 rounded-[26px] bg-white border-2 border-[#d4a034]/35 hover:border-[#d4a034]/70 shadow-[0_12px_32px_rgba(20,38,22,0.08)] hover:shadow-[0_18px_40px_rgba(20,38,22,0.14)] flex items-center space-x-3.5 transition-all duration-300"
          >
            <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#122314] to-[#25462c] text-[#fae788] border border-[#d4a034]/40 p-0.5 shadow-md flex items-center justify-center shrink-0">
              <Utensils className="w-5.5 h-5.5 text-[#fae788]" />
            </div>
            <div>
              <h3 className="text-[16px] font-heading font-extrabold text-[#112314] tracking-tight">
                {features[3].title}
              </h3>
              <p className="mt-1 text-xs text-[#4d5f4e] leading-snug">
                {features[3].description}
              </p>
              <div className="w-8 h-[2.5px] bg-gradient-to-r from-[#d4a034] to-[#fae788] mt-2 rounded-full" />
            </div>
          </motion.div>

          {/* 5. MID-RIGHT: Hygienic Bathing Facilities (right: 0, top: 285px, width: 340px) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="absolute right-0 top-[285px] z-10 w-[340px] p-3.5 pr-5 rounded-[26px] bg-white border-2 border-[#d4a034]/35 hover:border-[#d4a034]/70 shadow-[0_12px_32px_rgba(20,38,22,0.08)] hover:shadow-[0_18px_40px_rgba(20,38,22,0.14)] flex items-center space-x-3.5 transition-all duration-300"
          >
            <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#122314] to-[#25462c] text-[#fae788] border border-[#d4a034]/40 p-0.5 shadow-md flex items-center justify-center shrink-0">
              <Bath className="w-5.5 h-5.5 text-[#fae788]" />
            </div>
            <div>
              <h3 className="text-[16px] font-heading font-extrabold text-[#112314] tracking-tight">
                {features[4].title}
              </h3>
              <p className="mt-1 text-xs text-[#4d5f4e] leading-snug">
                {features[4].description}
              </p>
              <div className="w-8 h-[2.5px] bg-gradient-to-r from-[#d4a034] to-[#fae788] mt-2 rounded-full" />
            </div>
          </motion.div>

          {/* 6. BOTTOM-RIGHT: Relaxation & Recreation Space (right: 0, top: 545px, width: 340px) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="absolute right-0 top-[545px] z-10 w-[340px] p-3.5 pr-5 rounded-[26px] bg-white border-2 border-[#d4a034]/35 hover:border-[#d4a034]/70 shadow-[0_12px_32px_rgba(20,38,22,0.08)] hover:shadow-[0_18px_40px_rgba(20,38,22,0.14)] flex items-center space-x-3.5 transition-all duration-300"
          >
            <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#122314] to-[#25462c] text-[#fae788] border border-[#d4a034]/40 p-0.5 shadow-md flex items-center justify-center shrink-0">
              <Coffee className="w-5.5 h-5.5 text-[#fae788]" />
            </div>
            <div>
              <h3 className="text-[16px] font-heading font-extrabold text-[#112314] tracking-tight">
                {features[5].title}
              </h3>
              <p className="mt-1 text-xs text-[#4d5f4e] leading-snug">
                {features[5].description}
              </p>
              <div className="w-8 h-[2.5px] bg-gradient-to-r from-[#d4a034] to-[#fae788] mt-2 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET VIEWPORT (<1024px): Responsive 6-Item Grid
           ========================================================================= */}
        <div className="lg:hidden flex flex-col items-center space-y-6">
          
          {/* Centered Circular Vessel with 6 Concentric Frosted Orbit Nodes */}
          <div className="relative w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] flex items-center justify-center my-2">
            
            {/* Concentric Frosted Glass Rings */}
            <div className="absolute inset-0 rounded-full border border-[#d4a034]/35 bg-[#dce8db]/20 backdrop-blur-xs shadow-lg" />
            <div className="absolute inset-4 rounded-full border border-white/60" />

            {/* 6 Connected Nodes on the Ring in Mobile View */}
            <div className="absolute left-2 top-[20%] w-4 h-4 rounded-full bg-white border-2 border-[#3a613e] flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a034]" />
            </div>
            <div className="absolute left-0 top-[50%] -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#3a613e] flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a034]" />
            </div>
            <div className="absolute left-2 top-[80%] w-4 h-4 rounded-full bg-white border-2 border-[#3a613e] flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a034]" />
            </div>

            <div className="absolute right-2 top-[20%] w-4 h-4 rounded-full bg-white border-2 border-[#3a613e] flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a034]" />
            </div>
            <div className="absolute right-0 top-[50%] -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#3a613e] flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a034]" />
            </div>
            <div className="absolute right-2 top-[80%] w-4 h-4 rounded-full bg-white border-2 border-[#3a613e] flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a034]" />
            </div>

            {/* Inner Circular Photo with White Border */}
            <div
              className="relative w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full overflow-hidden border-[5px] border-white shadow-[0_16px_40px_rgba(20,38,22,0.18)] bg-[#eae5dc] z-10"
            >
              <img
                src="/images/ayurveda-herbs-center.jpg"
                alt="Classical Ayurvedic amenities"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Golden Droplet */}
            <div className="absolute bottom-2 left-6 w-8 h-8 rounded-full bg-gradient-to-tr from-[#d4a034] via-[#fae788] to-white shadow-md border border-white/70 flex items-center justify-center z-20">
              <div className="w-2 h-2 rounded-full bg-white absolute top-1 left-1" />
            </div>

            {/* Floating Jasmine Flower */}
            <div className="absolute top-4 right-8 w-8 h-8 pointer-events-none z-20 drop-shadow-sm">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="12" fill="#fae788" />
                <ellipse cx="50" cy="22" rx="10" ry="20" fill="#ffffff" />
                <ellipse cx="50" cy="78" rx="10" ry="20" fill="#ffffff" />
                <ellipse cx="22" cy="50" rx="20" ry="10" fill="#ffffff" />
                <ellipse cx="78" cy="50" rx="20" ry="10" fill="#ffffff" />
              </svg>
            </div>
          </div>

          {/* 6 Amenities Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 w-full">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-4 rounded-[26px] bg-white border-2 border-[#d4a034]/35 shadow-[0_8px_24px_rgba(20,35,22,0.06)] flex items-center space-x-3.5"
                >
                  {/* Icon Bulb */}
                  <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#122314] to-[#25462c] text-[#fae788] border border-[#d4a034]/40 p-0.5 shadow-md flex items-center justify-center shrink-0">
                    <Icon className="w-5.5 h-5.5 text-[#fae788]" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-heading font-extrabold text-[#112314] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#4d5f4e] leading-snug">
                      {item.description}
                    </p>
                    <div className="w-6 h-[2.5px] bg-gradient-to-r from-[#d4a034] to-[#fae788] mt-1.5 rounded-full" />
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
