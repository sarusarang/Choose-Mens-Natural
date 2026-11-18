import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const YourRitualSection: React.FC = () => {
  return (
    <section id="history" className="py-12 sm:py-16 md:py-20 bg-[#ffffff] relative overflow-hidden">
      <div id="ritual" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Mobile Header Block (Appears first on mobile for natural reading order) */}
        <div className="lg:hidden mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111c13] tracking-tight leading-[1.1]">
              Your Dosha, <br />
              <span className="text-[#25462c]">Your Sacred Ritual</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#556356] leading-relaxed mt-3 max-w-md">
              Prescribed by traditional Ayurvedic lineage to cleanse accumulated toxins (Ama), awaken vitality, and harmonize Vata, Pitta, and Kapha — for radiant balance that begins from within.
            </p>

            <div className="mt-4">
              <a
                href="#services"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#112314] to-[#1e3b22] active:scale-95 text-[#fae788] border border-[#d4a034]/50 font-heading font-bold text-xs px-6 py-2.5 rounded-full shadow-md"
              >
                <span>Explore Sacred Rituals</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d4a034]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Main 3-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          
          {/* ========================================================
              LEFT COLUMN: Cards 01 (Abhyanga) and 02 (Herbal Kizhi)
             ======================================================== */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-5 sm:gap-6 order-2 lg:order-1">
            
            {/* Card 01: Abhyanga Snehana */}
            <motion.a
              href="#services"
              initial={{ opacity: 0, x: -40, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.15, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
              className="group cursor-pointer bg-white rounded-[26px] sm:rounded-[32px] p-3.5 sm:p-4 border border-[#d4a034]/25 hover:border-[#d4a034]/60 shadow-[0_4px_22px_rgba(20,35,22,0.04)] hover:shadow-[0_14px_34px_rgba(20,35,22,0.12)] transition-all duration-400 active:scale-[0.98] block"
            >
              {/* Header: Label & Arrow Pill */}
              <div className="flex items-center justify-between px-1 mb-2.5">
                <span className="font-heading font-bold text-sm sm:text-[15px] text-[#141f15] tracking-tight group-hover:text-[#b18137] transition-colors">
                  Abhyanga Snehana
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f3f6f3] group-hover:bg-[#112314] flex items-center justify-center transition-colors duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#141f15] group-hover:text-[#fae788] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Inner Image with Bold 01 */}
              <div className="w-full aspect-[4/3] rounded-[18px] sm:rounded-[24px] overflow-hidden relative bg-[#eef3ed]">
                <img
                  src="/explore-1.webp"
                  alt="Abhyanga Warm Herbal Oleation Ritual"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 sm:bottom-3.5 left-3 sm:left-4 font-heading font-black text-3xl sm:text-4xl text-white tracking-tighter drop-shadow-md select-none">
                  01
                </span>
              </div>
            </motion.a>

            {/* Card 02: Herbal Kizhi Swedana */}
            <motion.a
              href="#services"
              initial={{ opacity: 0, x: -40, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.15, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
              className="group cursor-pointer bg-white rounded-[26px] sm:rounded-[32px] p-3.5 sm:p-4 border border-[#d4a034]/25 hover:border-[#d4a034]/60 shadow-[0_4px_22px_rgba(20,35,22,0.04)] hover:shadow-[0_14px_34px_rgba(20,35,22,0.12)] transition-all duration-400 active:scale-[0.98] block"
            >
              {/* Header: Label & Arrow Pill */}
              <div className="flex items-center justify-between px-1 mb-2.5">
                <span className="font-heading font-bold text-sm sm:text-[15px] text-[#141f15] tracking-tight group-hover:text-[#b18137] transition-colors">
                  Herbal Swedana
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f3f6f3] group-hover:bg-[#112314] flex items-center justify-center transition-colors duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#141f15] group-hover:text-[#fae788] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Inner Image with Bold 02 */}
              <div className="w-full aspect-[4/3] rounded-[18px] sm:rounded-[24px] overflow-hidden relative bg-[#eef3ed]">
                <img
                  src="/explore-2.webp"
                  alt="Herbal Kizhi Steamed Poultice Fomentation"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 sm:bottom-3.5 left-3 sm:left-4 font-heading font-black text-3xl sm:text-4xl text-white tracking-tighter drop-shadow-md select-none">
                  02
                </span>
              </div>
            </motion.a>

          </div>

          {/* ========================================================
              MIDDLE COLUMN: Tall Centerpiece Model ("Sacred Mind & Body Equilibrium")
             ======================================================== */}
          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 45, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            className="lg:col-span-5 relative rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] overflow-hidden group cursor-pointer shadow-[0_10px_35px_rgba(20,35,22,0.08)] hover:shadow-[0_22px_50px_rgba(20,35,22,0.18)] border border-[#d4a034]/25 hover:border-[#d4a034]/60 transition-all duration-500 flex flex-col justify-end min-h-[440px] sm:min-h-[500px] lg:min-h-0 lg:h-full order-3 lg:order-2 active:scale-[0.99] block"
          >
            {/* Model Image */}
            <img
              src="/explore-4.webp"
              alt="Serene Ayurvedic wellness ritual model with sacred thailam oil"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-800 ease-out"
            />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d11]/95 via-[#0e1d11]/40 to-transparent pointer-events-none" />

            {/* Top-Right Floating Circle Arrow Button */}
            <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-10">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#112314] shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-[#112314] group-hover:text-[#fae788] group-hover:border group-hover:border-[#d4a034]/50 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Bottom Content Overlay */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 text-white">
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-white tracking-tight leading-[1.08]">
                Sacred Mind &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fae788] to-[#d4a034]">Body Harmony</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/90 max-w-xs mt-2.5 sm:mt-3 leading-relaxed font-normal">
                Restore your natural doshic harmony through classical herbal oleation and grounding Ayurvedic therapies.
              </p>
            </div>
          </motion.a>

          {/* ========================================================
              RIGHT COLUMN: Heading & Explore (Top, Desktop only) + Card 03 Shirodhara (Bottom)
             ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 order-2 lg:order-3">
            
            {/* Top Block: Title, Subtitle, Explore Button (Desktop only, rendered above on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 35, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.15, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block pt-1 sm:pt-2"
            >
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-[#111c13] tracking-tight leading-[1.08]">
                Your Dosha, <br />
                <span className="text-[#25462c]">Your Sacred Ritual</span>
              </h2>

              <p className="text-xs sm:text-sm md:text-[14.5px] text-[#556356] leading-relaxed mt-3 sm:mt-4 max-w-md">
                Prescribed by traditional Ayurvedic lineage to cleanse accumulated toxins (Ama), awaken vitality, and harmonize Vata, Pitta, and Kapha — for radiant balance that begins from within.
              </p>

              <div className="mt-5 sm:mt-6">
                <a
                  href="#services"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#112314] to-[#1e3b22] hover:from-[#1e3b22] hover:to-[#2b5030] active:scale-95 text-[#fae788] border border-[#d4a034]/50 hover:border-[#fae788]/70 font-heading font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <span>Explore Sacred Rituals</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d4a034] group-hover:text-[#fae788] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Bottom Block: Card 03 Shirodhara Bliss */}
            <motion.a
              href="#services"
              initial={{ opacity: 0, x: 40, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.15, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
              className="group cursor-pointer bg-white rounded-[26px] sm:rounded-[32px] p-3.5 sm:p-4 border border-[#d4a034]/25 hover:border-[#d4a034]/60 shadow-[0_4px_22px_rgba(20,35,22,0.04)] hover:shadow-[0_14px_34px_rgba(20,35,22,0.12)] transition-all duration-400 active:scale-[0.98] block"
            >
              {/* Header: Label & Arrow Pill */}
              <div className="flex items-center justify-between px-1 mb-2.5">
                <span className="font-heading font-bold text-sm sm:text-[15px] text-[#141f15] tracking-tight group-hover:text-[#b18137] transition-colors">
                  Shirodhara Bliss
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f3f6f3] group-hover:bg-[#112314] flex items-center justify-center transition-colors duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#141f15] group-hover:text-[#fae788] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Inner Image with Bold 03 */}
              <div className="w-full aspect-[4/3] rounded-[18px] sm:rounded-[24px] overflow-hidden relative bg-[#eef3ed]">
                <img
                  src="/explore-3.webp"
                  alt="Shirodhara Continuous Medicated Oil Stream"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 sm:bottom-3.5 left-3 sm:left-4 font-heading font-black text-3xl sm:text-4xl text-white tracking-tighter drop-shadow-md select-none">
                  03
                </span>
              </div>
            </motion.a>

          </div>

        </div>

      </div>
    </section>
  );
};
