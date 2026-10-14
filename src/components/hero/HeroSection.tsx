import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { HERO_PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Navbar } from '../layout/Navbar';

export const HeroSection: React.FC = () => {
  const { addToCart, openQuickView } = useCart();

  const flagshipProduct = HERO_PRODUCTS[2]; // Centella Asiatica Facial Serum

  return (
    <section className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-[#99a992] flex flex-col justify-between">
      {/* Background Model Photography fitted seamlessly inside Hero Banner */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <img
            src="/images/hero-wide.jpg"
            alt="Natural skincare model holding botanical serum"
            className="w-full h-full object-cover object-center"
          />
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
              <h1 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-black tracking-[-0.035em] leading-[1.04] text-white drop-shadow-[0_2px_14px_rgba(20,35,22,0.32)]">
                Flourish in
                <span className="block font-black text-white">Daily Power</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[390px] text-xs sm:text-sm md:text-[15px] text-white/95 font-medium leading-relaxed drop-shadow-[0_1px_8px_rgba(20,35,22,0.25)]"
            >
              Give life to your inner world and flourish in your uniqueness, even if you seem a little strange to those around you, just be yourself and free.
            </motion.p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2 xl:col-span-3" />

          {/* Right Social Proof Floating Pill & Add to Cart */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start lg:items-end justify-start">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start space-y-2 bg-white/20 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-3.5 lg:p-0 rounded-3xl border border-white/30 lg:border-none shadow-sm lg:shadow-none"
            >
              {/* 3 Overlapped Avatars */}
              <div className="flex -space-x-2.5 items-center">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img src="/images/avatar-1.jpg" alt="Customer review" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img src="/images/avatar-2.jpg" alt="Customer review" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img src="/images/avatar-3.jpg" alt="Customer review" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Stat 750K + */}
              <div className="text-left">
                <span className="text-2xl sm:text-[28px] font-black text-white tracking-tight drop-shadow-[0_2px_8px_rgba(20,35,22,0.3)]">
                  750K +
                </span>
                <p className="text-xs sm:text-[13px] font-medium text-white/95 leading-snug drop-shadow-[0_1px_6px_rgba(20,35,22,0.25)]">
                  Ultimate Skin Recovery<br />Refreshing Gel
                </p>
              </div>

              {/* Add to Cart Pill with Liquid Glass Feel & Black Circular Cart Icon */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 14px 30px rgba(0,0,0,0.18)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => addToCart(flagshipProduct, 1)}
                className="mt-1 flex items-center space-x-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-white text-[#162317] font-bold text-xs sm:text-[13px] shadow-[0_8px_24px_rgba(0,0,0,0.1)] group cursor-pointer transition-all"
              >
                <span className="tracking-tight">Add to Cart</span>
                <div className="w-7 h-7 rounded-full bg-[#141d15] flex items-center justify-center text-white group-hover:bg-[#273a29] transition-colors">
                  <ShoppingCart className="w-3.5 h-3.5" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Floating Compact Product Cards Row with Slow Floating Animation & Touch-Snap Carousel on Mobile */}
        <div className="relative z-10 pt-6 sm:pt-8">
          <div className="flex items-end justify-between overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 gap-3 sm:gap-4 snap-x snap-mandatory scrollbar-none">
            
            {/* Left Pair: Card 1 and Card 2 side-by-side */}
            <div className="flex items-end gap-3 sm:gap-4 shrink-0">
              
              {/* Card 1 (Bottom Left 1: Centella Ampoule Foam) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="card-float-1 snap-start shrink-0 w-[165px] sm:w-[185px] md:w-[200px] bg-white/95 backdrop-blur-xl rounded-[22px] p-3 sm:p-3.5 shadow-[0_12px_28px_rgba(20,35,22,0.09)] border border-white flex flex-col justify-between transition-shadow duration-300 transform-gpu will-change-transform"
              >
                {/* Product Image */}
                <div 
                  onClick={() => openQuickView(HERO_PRODUCTS[0])}
                  className="w-full h-24 sm:h-28 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl group"
                >
                  <img
                    src={HERO_PRODUCTS[0].image}
                    alt={HERO_PRODUCTS[0].name}
                    className="h-full object-contain mix-blend-multiply drop-shadow-sm group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Price & Name & Action */}
                <div className="mt-1.5 space-y-0.5">
                  <div className="text-base sm:text-lg font-black text-[#141d15] tracking-tight">
                    ${HERO_PRODUCTS[0].price.toFixed(2)}
                  </div>
                  <h3 
                    onClick={() => openQuickView(HERO_PRODUCTS[0])}
                    className="text-[11px] sm:text-xs font-bold text-[#1a251b] leading-tight line-clamp-1 hover:text-[#3e5640] cursor-pointer"
                  >
                    {HERO_PRODUCTS[0].name}
                  </h3>
                  
                  <div className="pt-1.5 flex items-center justify-between">
                    <span className="text-[9px] text-gray-500 font-medium">
                      {HERO_PRODUCTS[0].size}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => addToCart(HERO_PRODUCTS[0], 1)}
                      className="px-3 py-1 rounded-full bg-[#141d15] hover:bg-[#2b3d2d] text-white text-[10px] font-semibold tracking-wide transition-all cursor-pointer shadow-sm"
                    >
                      Book
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 (Bottom Left 2: Quick Calming Pads) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.58,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="card-float-2 snap-start shrink-0 w-[165px] sm:w-[185px] md:w-[200px] bg-white/95 backdrop-blur-xl rounded-[22px] p-3 sm:p-3.5 shadow-[0_12px_28px_rgba(20,35,22,0.09)] border border-white flex flex-col justify-between transition-shadow duration-300 transform-gpu will-change-transform"
              >
                {/* Product Image */}
                <div 
                  onClick={() => openQuickView(HERO_PRODUCTS[1])}
                  className="w-full h-24 sm:h-28 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl group"
                >
                  <img
                    src={HERO_PRODUCTS[1].image}
                    alt={HERO_PRODUCTS[1].name}
                    className="h-full object-contain mix-blend-multiply drop-shadow-sm group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Price & Name & Action */}
                <div className="mt-1.5 space-y-0.5">
                  <div className="text-base sm:text-lg font-black text-[#141d15] tracking-tight">
                    ${HERO_PRODUCTS[1].price.toFixed(2)}
                  </div>
                  <h3 
                    onClick={() => openQuickView(HERO_PRODUCTS[1])}
                    className="text-[11px] sm:text-xs font-bold text-[#1a251b] leading-tight line-clamp-1 hover:text-[#3e5640] cursor-pointer"
                  >
                    {HERO_PRODUCTS[1].name}
                  </h3>
                  
                  <div className="pt-1.5 flex items-center justify-between">
                    <span className="text-[9px] text-gray-500 font-medium">
                      {HERO_PRODUCTS[1].size}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => addToCart(HERO_PRODUCTS[1], 1)}
                      className="px-3 py-1 rounded-full bg-[#141d15] hover:bg-[#2b3d2d] text-white text-[10px] font-semibold tracking-wide transition-all cursor-pointer shadow-sm"
                    >
                      Book
                    </motion.button>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Card: Card 3 (Bottom Right: Centella Asiatica Facial Serum) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.72,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="card-float-3 snap-start shrink-0 w-[165px] sm:w-[185px] md:w-[200px] bg-white/95 backdrop-blur-xl rounded-[22px] p-3 sm:p-3.5 shadow-[0_12px_28px_rgba(20,35,22,0.09)] border border-white flex flex-col justify-between transition-shadow duration-300 ml-auto transform-gpu will-change-transform"
            >
              {/* Product Image */}
              <div 
                onClick={() => openQuickView(HERO_PRODUCTS[2])}
                className="w-full h-24 sm:h-28 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl group"
              >
                <img
                  src={HERO_PRODUCTS[2].image}
                  alt={HERO_PRODUCTS[2].name}
                  className="h-full object-contain mix-blend-multiply drop-shadow-sm group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Price & Name & Action */}
              <div className="mt-1.5 space-y-0.5">
                <div className="text-base sm:text-lg font-black text-[#141d15] tracking-tight">
                  ${HERO_PRODUCTS[2].price.toFixed(2)}
                </div>
                <h3 
                  onClick={() => openQuickView(HERO_PRODUCTS[2])}
                  className="text-[11px] sm:text-xs font-bold text-[#1a251b] leading-tight line-clamp-1 hover:text-[#3e5640] cursor-pointer"
                >
                  {HERO_PRODUCTS[2].name}
                </h3>
                
                <div className="pt-1.5 flex items-center justify-between">
                  <span className="text-[9px] text-gray-500 font-medium">
                    {HERO_PRODUCTS[2].size}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => addToCart(HERO_PRODUCTS[2], 1)}
                    className="px-3 py-1 rounded-full bg-[#141d15] hover:bg-[#2b3d2d] text-white text-[10px] font-semibold tracking-wide transition-all cursor-pointer shadow-sm"
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
