import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { HERO_TREATMENTS } from '../../data/products';
import { useCart } from '../../context/CartContext';

export const HeroSection: React.FC = () => {
  const { openQuickView } = useCart();

  const treatment1 = HERO_TREATMENTS[0]; // Ayurvedic Postnatal Care
  const treatment2 = HERO_TREATMENTS[1]; // Ayurvedic Postnatal Therapies
  const treatment3 = HERO_TREATMENTS[2]; // Ayurvedic Wellness Therapies
  const treatment4 = HERO_TREATMENTS[3]; // Beauty & Skin Care

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
            className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05]"
          />

          {/* Deepened Sanctuary Scrim: Decreased background intensity for prominent text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1d11]/70 via-transparent to-[#0e1d11]/55 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d11]/90 via-transparent to-[#0e1d11]/45 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4a034]/10 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Hero Body Content Container (Reduced left/right gaps & comfortable top clearance) */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 pt-20 sm:pt-24 md:pt-28 pb-6 md:pb-8">
        
        {/* Top/Mid Row: Headline and Right Social Proof Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          
          {/* Left Headline & Description (Smooth, Slow, Stunning Entrance) */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-3 md:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[62px] font-black tracking-[-0.035em] leading-[1.08] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)]">
                <span className="block whitespace-nowrap">Motherhood Begins</span>
                <span className="block whitespace-nowrap font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fae788] to-[#d4a034]">
                  with Love and Care.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[460px] text-xs sm:text-sm md:text-[15px] text-white/90 font-medium leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
            >
              Providing Gentle Ayurvedic Care, Comfort And Nurturing Support For Every New Mother And Baby.
            </motion.p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1 xl:col-span-2" />

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
                href="https://wa.me/917034641282?text=Hello%20Aaramam%20Ayurveda%2C%20I%20would%20like%20to%20enquire%20about%20your%20Ayurvedic%20postnatal%20care%20packages."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 14px 30px rgba(212,160,52,0.3)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="mt-1 flex items-center space-x-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-white via-[#fffef7] to-[#fae788] text-[#112314] font-bold text-xs sm:text-[13px] shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-[#d4a034]/40 group cursor-pointer transition-all"
              >
                <span className="tracking-tight font-heading font-bold">Enquire Now</span>
                <div className="w-7 h-7 rounded-full bg-[#112314] flex items-center justify-center text-[#fae788] group-hover:bg-[#203c23] transition-colors">
                  <Calendar className="w-3.5 h-3.5 text-[#fae788]" />
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Floating Compact Treatment Cards Row with Touch-Snap Carousel on Mobile & Balanced Layout on Desktop */}
        <div className="relative z-10 pt-4 sm:pt-6">
          <div className="flex items-end justify-between overflow-x-auto lg:overflow-visible pb-2 sm:pb-0 gap-3 sm:gap-4 snap-x snap-mandatory scrollbar-none">
            
            {/* Left Pair: Card 1 (Ayurvedic Postnatal Care) and Card 2 (Ayurvedic Postnatal Therapies) */}
            <div className="flex items-end gap-3 sm:gap-4 shrink-0">
              
              {/* Card 1: Ayurvedic Postnatal Care */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="card-float-1 snap-start shrink-0 w-[165px] sm:w-[185px] md:w-[205px] bg-white/95 backdrop-blur-xl rounded-[22px] p-2.5 sm:p-3 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white flex flex-col justify-between transition-shadow duration-300 transform-gpu will-change-transform"
              >
                {/* Treatment Image */}
                <div 
                  onClick={() => openQuickView(treatment1)}
                  className="w-full h-22 sm:h-26 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl group relative bg-[#f2f6f1]"
                >
                  <img
                    src={treatment1.image}
                    alt={treatment1.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-full bg-[#112314]/90 backdrop-blur-md text-[#fae788] text-[9px] font-bold border border-[#d4a034]/40">
                    Postnatal Care
                  </div>
                </div>

                {/* Name & Action */}
                <div className="mt-2 space-y-1">
                  <h3 
                    onClick={() => openQuickView(treatment1)}
                    className="text-[11.5px] sm:text-xs font-bold font-heading text-[#1a251b] leading-tight line-clamp-1 hover:text-[#b18137] cursor-pointer"
                    title={treatment1.name}
                  >
                    {treatment1.name}
                  </h3>
                  <p className="text-[9.5px] text-[#556956] line-clamp-1 leading-snug">
                    {treatment1.subtitle}
                  </p>
                  
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[9px] text-[#718272] font-semibold">
                      Feroke
                    </span>
                    <a
                      href={treatment1.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#112314] to-[#1e3b22] hover:from-[#1e3b22] hover:to-[#2b5030] text-[#fae788] text-[10px] font-bold tracking-wide transition-all cursor-pointer shadow-sm flex items-center space-x-1"
                    >
                      <span>Explore Now!</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Ayurvedic Postnatal Therapies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.55,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="card-float-2 snap-start shrink-0 w-[165px] sm:w-[185px] md:w-[205px] bg-white/95 backdrop-blur-xl rounded-[22px] p-2.5 sm:p-3 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white flex flex-col justify-between transition-shadow duration-300 transform-gpu will-change-transform"
              >
                {/* Treatment Image */}
                <div 
                  onClick={() => openQuickView(treatment2)}
                  className="w-full h-22 sm:h-26 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl group relative bg-[#f2f6f1]"
                >
                  <img
                    src={treatment2.image}
                    alt={treatment2.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-full bg-[#112314]/90 backdrop-blur-md text-[#fae788] text-[9px] font-bold border border-[#d4a034]/40">
                    Therapies
                  </div>
                </div>

                {/* Name & Action */}
                <div className="mt-2 space-y-1">
                  <h3 
                    onClick={() => openQuickView(treatment2)}
                    className="text-[11.5px] sm:text-xs font-bold font-heading text-[#1a251b] leading-tight line-clamp-1 hover:text-[#b18137] cursor-pointer"
                    title={treatment2.name}
                  >
                    {treatment2.name}
                  </h3>
                  <p className="text-[9.5px] text-[#556956] line-clamp-1 leading-snug">
                    {treatment2.subtitle}
                  </p>
                  
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[9px] text-[#718272] font-semibold">
                      Feroke
                    </span>
                    <a
                      href={treatment2.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#112314] to-[#1e3b22] hover:from-[#1e3b22] hover:to-[#2b5030] text-[#fae788] text-[10px] font-bold tracking-wide transition-all cursor-pointer shadow-sm flex items-center space-x-1"
                    >
                      <span>Explore Now!</span>
                    </a>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Pair: Card 3 (Ayurvedic Wellness Therapies) and Card 4 (Beauty & Skin Care) */}
            <div className="flex items-end gap-3 sm:gap-4 shrink-0 lg:ml-auto">
              
              {/* Card 3: Ayurvedic Wellness Therapies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.65,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="card-float-3 snap-start shrink-0 w-[165px] sm:w-[185px] md:w-[205px] bg-white/95 backdrop-blur-xl rounded-[22px] p-2.5 sm:p-3 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white flex flex-col justify-between transition-shadow duration-300 transform-gpu will-change-transform"
              >
                {/* Treatment Image */}
                <div 
                  onClick={() => openQuickView(treatment3)}
                  className="w-full h-22 sm:h-26 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl group relative bg-[#f2f6f1]"
                >
                  <img
                    src={treatment3.image}
                    alt={treatment3.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-full bg-[#112314]/90 backdrop-blur-md text-[#fae788] text-[9px] font-bold border border-[#d4a034]/40">
                    Wellness
                  </div>
                </div>

                {/* Name & Action */}
                <div className="mt-2 space-y-1">
                  <h3 
                    onClick={() => openQuickView(treatment3)}
                    className="text-[11.5px] sm:text-xs font-bold font-heading text-[#1a251b] leading-tight line-clamp-1 hover:text-[#b18137] cursor-pointer"
                    title={treatment3.name}
                  >
                    {treatment3.name}
                  </h3>
                  <p className="text-[9.5px] text-[#556956] line-clamp-1 leading-snug">
                    {treatment3.subtitle}
                  </p>
                  
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[9px] text-[#718272] font-semibold">
                      Feroke
                    </span>
                    <a
                      href={treatment3.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#112314] to-[#1e3b22] hover:from-[#1e3b22] hover:to-[#2b5030] text-[#fae788] text-[10px] font-bold tracking-wide transition-all cursor-pointer shadow-sm flex items-center space-x-1"
                    >
                      <span>Explore Now!</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Beauty & Skin Care */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.75,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="card-float-1 snap-start shrink-0 w-[165px] sm:w-[185px] md:w-[205px] bg-white/95 backdrop-blur-xl rounded-[22px] p-2.5 sm:p-3 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white flex flex-col justify-between transition-shadow duration-300 transform-gpu will-change-transform"
              >
                {/* Treatment Image */}
                <div 
                  onClick={() => openQuickView(treatment4)}
                  className="w-full h-22 sm:h-26 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl group relative bg-[#f2f6f1]"
                >
                  <img
                    src={treatment4.image}
                    alt={treatment4.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-full bg-[#112314]/90 backdrop-blur-md text-[#fae788] text-[9px] font-bold border border-[#d4a034]/40">
                    Skin Care
                  </div>
                </div>

                {/* Name & Action */}
                <div className="mt-2 space-y-1">
                  <h3 
                    onClick={() => openQuickView(treatment4)}
                    className="text-[11.5px] sm:text-xs font-bold font-heading text-[#1a251b] leading-tight line-clamp-1 hover:text-[#b18137] cursor-pointer"
                    title={treatment4.name}
                  >
                    {treatment4.name}
                  </h3>
                  <p className="text-[9.5px] text-[#556956] line-clamp-1 leading-snug">
                    {treatment4.subtitle}
                  </p>
                  
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[9px] text-[#718272] font-semibold">
                      Feroke
                    </span>
                    <a
                      href={treatment4.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#112314] to-[#1e3b22] hover:from-[#1e3b22] hover:to-[#2b5030] text-[#fae788] text-[10px] font-bold tracking-wide transition-all cursor-pointer shadow-sm flex items-center space-x-1"
                    >
                      <span>Explore Now!</span>
                    </a>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
