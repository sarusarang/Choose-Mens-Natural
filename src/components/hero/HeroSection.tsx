import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { HERO_TREATMENTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Navbar } from '../layout/Navbar';

export const HeroSection: React.FC = () => {
  const { addToCart, openQuickView } = useCart();

  const treatment1 = HERO_TREATMENTS[0]; // Abhyanga Herbal Massage
  const treatment2 = HERO_TREATMENTS[1]; // Shirodhara Oil Therapy
  const treatment3 = HERO_TREATMENTS[2]; // Herbal Kizhi Poultice

  return (
    <section id="home" className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-[#0e1d11] flex flex-col justify-between">
      {/* Background Model Photography fitted seamlessly inside Hero Banner with Navbar Greenish Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <img
            src="/images/hero-ayurveda-sanctuary.jpg"
            alt="Authentic Ayurvedic healing sanctuary model holding traditional herbal oil elixir"
            className="w-full h-full object-cover object-center"
          />

          {/* Deep Sanctuary Green Vignettes for Supreme Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1d11]/80 via-transparent to-[#0e1d11]/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d11] via-transparent to-[#0e1d11]/50 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4a034]/15 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Integrated Top Navigation */}
      <Navbar />

      {/* Hero Body Content Container (Reduced left/right gaps & comfortable top clearance) */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 pt-20 sm:pt-24 md:pt-28 pb-6 md:pb-8">
        
        {/* Top/Mid Row: Headline and Right Social Proof Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          
          {/* Left Headline & Description (Smooth, Slow, Stunning Entrance) */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-3 md:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-black tracking-[-0.035em] leading-[1.04] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)]">
                Flourish in
                <span className="block font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fae788] to-[#d4a034]">Sacred Healing</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[410px] text-xs sm:text-sm md:text-[15px] text-white/90 font-medium leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
            >
              Awaken your inner vitality through classical Ayurvedic treatments, warm medicated herbal thailams, and restorative healing rituals customized to your unique dosha constitution.
            </motion.p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2 xl:col-span-3" />

          {/* Right Social Proof Floating Pill & Book Treatment CTA */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start lg:items-end justify-start">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start space-y-2 bg-[#122314]/70 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-3.5 lg:p-0 rounded-3xl border border-[#d4a034]/25 lg:border-none shadow-md lg:shadow-none"
            >
              {/* 3 Overlapped Avatars */}
              <div className="flex -space-x-2.5 items-center">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#d4a034]/70 overflow-hidden shadow-sm">
                  <img src="/images/avatar-1.jpg" alt="Ayurveda guest review" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#d4a034]/70 overflow-hidden shadow-sm">
                  <img src="/images/avatar-2.jpg" alt="Ayurveda guest review" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#d4a034]/70 overflow-hidden shadow-sm">
                  <img src="/images/avatar-3.jpg" alt="Ayurveda guest review" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Stat 50K + */}
              <div className="text-left">
                <span className="text-2xl sm:text-[28px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fae788] to-[#d4a034] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                  50K +
                </span>
                <p className="text-xs sm:text-[13px] font-medium text-white/95 leading-snug drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
                  Rejuvenated Guests<br />Classical Ayurvedic Care
                </p>
              </div>

              {/* Book Treatment Pill with Liquid Glass Feel & Gold Accent */}
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, boxShadow: '0 14px 30px rgba(212,160,52,0.3)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="mt-1 flex items-center space-x-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-white via-[#fffef7] to-[#fae788] text-[#112314] font-bold text-xs sm:text-[13px] shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-[#d4a034]/40 group cursor-pointer transition-all"
              >
                <span className="tracking-tight font-heading font-bold">Book Treatment</span>
                <div className="w-7 h-7 rounded-full bg-[#112314] flex items-center justify-center text-[#fae788] group-hover:bg-[#203c23] transition-colors">
                  <Calendar className="w-3.5 h-3.5 text-[#fae788]" />
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Floating Compact Treatment Cards Row with Slow Floating Animation & Touch-Snap Carousel on Mobile */}
        <div className="relative z-10 pt-6 sm:pt-8">
          <div className="flex items-end justify-between overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 gap-3 sm:gap-4 snap-x snap-mandatory scrollbar-none">
            
            {/* Left Pair: Card 1 and Card 2 side-by-side */}
            <div className="flex items-end gap-3 sm:gap-4 shrink-0">
              
              {/* Card 1 (Bottom Left 1: Abhyanga Herbal Massage) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="card-float-1 snap-start shrink-0 w-[165px] sm:w-[185px] md:w-[200px] bg-white/95 backdrop-blur-xl rounded-[22px] p-3 sm:p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white flex flex-col justify-between transition-shadow duration-300 transform-gpu will-change-transform"
              >
                {/* Treatment Image */}
                <div 
                  onClick={() => openQuickView(treatment1)}
                  className="w-full h-24 sm:h-28 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl group relative bg-[#f2f6f1]"
                >
                  <img
                    src={treatment1.image}
                    alt={treatment1.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-full bg-[#112314]/85 backdrop-blur-md text-[#fae788] text-[9px] font-bold">
                    60 Min
                  </div>
                </div>

                {/* Price & Name & Action */}
                <div className="mt-1.5 space-y-0.5">
                  <div className="text-base sm:text-lg font-black text-[#112314] tracking-tight">
                    ${treatment1.price.toFixed(2)}
                  </div>
                  <h3 
                    onClick={() => openQuickView(treatment1)}
                    className="text-[11px] sm:text-xs font-bold text-[#1a251b] leading-tight line-clamp-1 hover:text-[#b18137] cursor-pointer"
                  >
                    {treatment1.name}
                  </h3>
                  
                  <div className="pt-1.5 flex items-center justify-between">
                    <span className="text-[9px] text-gray-500 font-medium">
                      {treatment1.size}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => addToCart(treatment1, 1)}
                      className="px-3 py-1 rounded-full bg-[#112314] hover:bg-[#203c23] hover:text-[#fae788] text-white text-[10px] font-semibold tracking-wide transition-all cursor-pointer shadow-sm"
                    >
                      Book
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 (Bottom Left 2: Shirodhara Oil Therapy) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.58,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="card-float-2 snap-start shrink-0 w-[165px] sm:w-[185px] md:w-[200px] bg-white/95 backdrop-blur-xl rounded-[22px] p-3 sm:p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white flex flex-col justify-between transition-shadow duration-300 transform-gpu will-change-transform"
              >
                {/* Treatment Image */}
                <div 
                  onClick={() => openQuickView(treatment2)}
                  className="w-full h-24 sm:h-28 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl group relative bg-[#f2f6f1]"
                >
                  <img
                    src={treatment2.image}
                    alt={treatment2.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-full bg-[#112314]/85 backdrop-blur-md text-[#fae788] text-[9px] font-bold">
                    45 Min
                  </div>
                </div>

                {/* Price & Name & Action */}
                <div className="mt-1.5 space-y-0.5">
                  <div className="text-base sm:text-lg font-black text-[#112314] tracking-tight">
                    ${treatment2.price.toFixed(2)}
                  </div>
                  <h3 
                    onClick={() => openQuickView(treatment2)}
                    className="text-[11px] sm:text-xs font-bold text-[#1a251b] leading-tight line-clamp-1 hover:text-[#b18137] cursor-pointer"
                  >
                    {treatment2.name}
                  </h3>
                  
                  <div className="pt-1.5 flex items-center justify-between">
                    <span className="text-[9px] text-gray-500 font-medium">
                      {treatment2.size}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => addToCart(treatment2, 1)}
                      className="px-3 py-1 rounded-full bg-[#112314] hover:bg-[#203c23] hover:text-[#fae788] text-white text-[10px] font-semibold tracking-wide transition-all cursor-pointer shadow-sm"
                    >
                      Book
                    </motion.button>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Card: Card 3 (Bottom Right: Herbal Kizhi Poultice) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.72,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="card-float-3 snap-start shrink-0 w-[165px] sm:w-[185px] md:w-[200px] bg-white/95 backdrop-blur-xl rounded-[22px] p-3 sm:p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white flex flex-col justify-between transition-shadow duration-300 ml-auto transform-gpu will-change-transform"
            >
              {/* Treatment Image */}
              <div 
                onClick={() => openQuickView(treatment3)}
                className="w-full h-24 sm:h-28 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl group relative bg-[#f2f6f1]"
              >
                <img
                  src={treatment3.image}
                  alt={treatment3.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-full bg-[#112314]/85 backdrop-blur-md text-[#fae788] text-[9px] font-bold">
                  60 Min
                </div>
              </div>

              {/* Price & Name & Action */}
              <div className="mt-1.5 space-y-0.5">
                <div className="text-base sm:text-lg font-black text-[#112314] tracking-tight">
                  ${treatment3.price.toFixed(2)}
                </div>
                <h3 
                  onClick={() => openQuickView(treatment3)}
                  className="text-[11px] sm:text-xs font-bold text-[#1a251b] leading-tight line-clamp-1 hover:text-[#b18137] cursor-pointer"
                >
                  {treatment3.name}
                </h3>
                
                <div className="pt-1.5 flex items-center justify-between">
                  <span className="text-[9px] text-gray-500 font-medium">
                    {treatment3.size}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => addToCart(treatment3, 1)}
                    className="px-3 py-1 rounded-full bg-[#112314] hover:bg-[#203c23] hover:text-[#fae788] text-white text-[10px] font-semibold tracking-wide transition-all cursor-pointer shadow-sm"
                  >
                    Book
                  </motion.button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
