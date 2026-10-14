import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const YourRitualSection: React.FC = () => {
  return (
    <section id="ritual" className="py-12 sm:py-16 md:py-20 bg-[#ffffff] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Main 3-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          
          {/* ========================================================
              LEFT COLUMN: Cards 01 (Glow) and 02 (Blend)
             ======================================================== */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-5 sm:gap-6 order-2 lg:order-1">
            
            {/* Card 01: Glow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer bg-white rounded-[26px] sm:rounded-[32px] p-3.5 sm:p-4 border border-[#e8ece7] shadow-[0_4px_22px_rgba(20,35,22,0.04)] hover:shadow-[0_12px_32px_rgba(20,35,22,0.1)] transition-all duration-400 active:scale-[0.98]"
            >
              {/* Header: Label & Arrow Pill */}
              <div className="flex items-center justify-between px-1 mb-2.5">
                <span className="font-heading font-bold text-sm sm:text-[15px] text-[#141f15] tracking-tight">
                  Glow
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f3f6f3] group-hover:bg-[#141f15] flex items-center justify-center transition-colors duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#141f15] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Inner Image with Bold 01 */}
              <div className="w-full aspect-[4/3] rounded-[18px] sm:rounded-[24px] overflow-hidden relative bg-[#f0eae1]">
                <img
                  src="/images/product-matcha-bar.jpg"
                  alt="Glow Ritual Matcha Bar"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 sm:bottom-3.5 left-3 sm:left-4 font-heading font-black text-3xl sm:text-4xl text-white tracking-tighter drop-shadow-md select-none">
                  01
                </span>
              </div>
            </motion.div>

            {/* Card 02: Blend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer bg-white rounded-[26px] sm:rounded-[32px] p-3.5 sm:p-4 border border-[#e8ece7] shadow-[0_4px_22px_rgba(20,35,22,0.04)] hover:shadow-[0_12px_32px_rgba(20,35,22,0.1)] transition-all duration-400 active:scale-[0.98]"
            >
              {/* Header: Label & Arrow Pill */}
              <div className="flex items-center justify-between px-1 mb-2.5">
                <span className="font-heading font-bold text-sm sm:text-[15px] text-[#141f15] tracking-tight">
                  Blend
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f3f6f3] group-hover:bg-[#141f15] flex items-center justify-center transition-colors duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#141f15] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Inner Image with Bold 02 */}
              <div className="w-full aspect-[4/3] rounded-[18px] sm:rounded-[24px] overflow-hidden relative bg-[#f0eae1]">
                <img
                  src="/images/product-lavender-bar.jpg"
                  alt="Lavender Soap Blend"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 sm:bottom-3.5 left-3 sm:left-4 font-heading font-black text-3xl sm:text-4xl text-white tracking-tighter drop-shadow-md select-none">
                  02
                </span>
              </div>
            </motion.div>

          </div>

          {/* ========================================================
              MIDDLE COLUMN: Tall Hero Model Card ("Fresh Looking Skin")
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="lg:col-span-5 relative rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] overflow-hidden group cursor-pointer shadow-[0_10px_35px_rgba(20,35,22,0.08)] hover:shadow-[0_20px_48px_rgba(20,35,22,0.16)] transition-all duration-500 flex flex-col justify-end min-h-[440px] sm:min-h-[500px] lg:min-h-0 lg:h-full order-3 lg:order-2 active:scale-[0.99]"
          >
            {/* Model Image */}
            <img
              src="/images/hero-model.jpg"
              alt="Fresh Looking Radiant Skin"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-800 ease-out"
            />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            {/* Top-Right Floating Circle Arrow Button */}
            <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-10">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#141f15] shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-[#141f15] group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Bottom Content Overlay */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 text-white">
              <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-white tracking-tight leading-[1.08]">
                Fresh <br />
                Looking Skin
              </h3>
              <p className="text-xs sm:text-sm text-white/90 max-w-xs mt-2.5 sm:mt-3 leading-relaxed font-normal">
                Restore your glow with clean, hydrating formulas for a radiant finish.
              </p>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: Heading & Shop Now (Top) + Card 03 Calm (Bottom)
             ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 order-1 lg:order-3">
            
            {/* Top Block: Title, Subtitle, Shop Now Button */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1 sm:pt-2"
            >
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] text-[#111c13] tracking-tight leading-[1.08]">
                Your Skin, <br />
                Your Ritual
              </h2>

              <p className="text-xs sm:text-sm md:text-[14.5px] text-[#556356] leading-relaxed mt-3 sm:mt-4 max-w-md">
                Elevate your routine with essentials designed to renew, revive, and rescue — for skin that feels as good as it looks.
              </p>

              <div className="mt-5 sm:mt-6">
                <a
                  href="#products"
                  className="inline-flex items-center space-x-2 bg-black hover:bg-[#1d2a1f] active:scale-95 text-white font-heading font-semibold text-xs sm:text-sm px-7 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <span>Shop Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Bottom Block: Card 03 Calm */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer bg-white rounded-[26px] sm:rounded-[32px] p-3.5 sm:p-4 border border-[#e8ece7] shadow-[0_4px_22px_rgba(20,35,22,0.04)] hover:shadow-[0_12px_32px_rgba(20,35,22,0.1)] transition-all duration-400 active:scale-[0.98]"
            >
              {/* Header: Label & Arrow Pill */}
              <div className="flex items-center justify-between px-1 mb-2.5">
                <span className="font-heading font-bold text-sm sm:text-[15px] text-[#141f15] tracking-tight">
                  Calm
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f3f6f3] group-hover:bg-[#141f15] flex items-center justify-center transition-colors duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#141f15] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Inner Image with Bold 03 */}
              <div className="w-full aspect-[4/3] rounded-[18px] sm:rounded-[24px] overflow-hidden relative bg-[#f0eae1]">
                <img
                  src="/images/product-serum.jpg"
                  alt="Centella Botanical Serum Calm"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 sm:bottom-3.5 left-3 sm:left-4 font-heading font-black text-3xl sm:text-4xl text-white tracking-tighter drop-shadow-md select-none">
                  03
                </span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
