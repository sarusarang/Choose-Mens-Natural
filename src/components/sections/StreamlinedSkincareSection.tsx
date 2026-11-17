import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export const StreamlinedSkincareSection: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-[#e4eae2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Authentic Ayurvedic Mother-Baby Care Photography with Heritage Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden min-h-[460px] sm:min-h-[500px] md:min-h-[540px] shadow-[0_16px_40px_rgba(20,40,24,0.1)] border border-[#1b3420]/15 flex flex-col justify-end p-6 sm:p-10 group"
          >
            {/* Background High-Resolution Visual of Mother & Baby Care */}
            <img
              src="/images/treatment_mother_care_1794639745090.jpg"
              alt="Aaramam authentic Ayurvedic postnatal mother and baby care"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />

            {/* Subtle Gradient Overlay for High Visual Distinction */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

            {/* Floating Luxury Badges */}
            <div className="relative z-10 space-y-4">
              {/* Badge 1: 30+ Years Heritage */}
              <div className="flex items-center space-x-3.5 bg-[#0e1d11]/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-[#d4a034]/35 shadow-lg max-w-sm">
                <div className="w-10 h-10 rounded-full bg-[#162b19] border border-[#fae788]/60 flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5 text-[#fae788]" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-white text-base sm:text-lg tracking-tight leading-none">
                    30+ YEARS
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#cfded0] mt-1 font-medium">
                    of traditional Ayurvedic family lineage &amp; healing wisdom
                  </p>
                </div>
              </div>

              {/* Badge 2: 100% Authentic Postnatal Care */}
              <div className="flex items-center space-x-3.5 bg-[#0e1d11]/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-[#d4a034]/35 shadow-lg max-w-sm">
                <div className="w-10 h-10 rounded-full bg-[#162b19] border border-[#fae788]/60 flex items-center justify-center shrink-0 shadow-sm">
                  <Heart className="w-5 h-5 text-[#fae788]" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-white text-base sm:text-lg tracking-tight leading-none">
                    100% DEDICATED
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#cfded0] mt-1 font-medium">
                    holistic postnatal mother &amp; baby recovery care
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Authentic Ayurvedic Care Card with 6-Node Classical Treatment Mandala */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[32px] sm:rounded-[36px] min-h-[460px] sm:min-h-[500px] md:min-h-[540px] p-8 sm:p-10 md:p-12 bg-[#d8e5da] border border-[#1b3420]/15 shadow-[0_16px_40px_rgba(20,40,24,0.08)] flex flex-col justify-between items-center text-center overflow-hidden"
          >
            {/* Subtle Warm Botanical Ambient Lighting matching site theme */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#fae788]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#112314]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Heading: AUTHENTIC POSTNATAL CARE */}
            <div className="pt-2 sm:pt-4 space-y-1 relative z-10">
              <h3 className="font-heading font-black text-xl sm:text-2xl md:text-[25px] tracking-[0.14em] uppercase text-[#112314] leading-snug">
                AUTHENTIC POSTNATAL CARE <br />
                <span className="font-bold tracking-[0.12em] text-[#1e3c23]">&amp; GENTLE CARE FOR MOTHER &amp; BABY</span>
              </h3>
            </div>

            {/* Middle Graphic: Connected 6-Pillar Treatment Ring + Annotations */}
            <div className="my-auto py-6 sm:py-8 flex items-center justify-center relative w-full max-w-sm sm:max-w-md z-10">
              <div className="relative flex items-center justify-center">
                
                {/* 6-Node Classical Treatment Ring SVG */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-36 h-36 sm:w-44 sm:h-44 text-[#112314] shrink-0 drop-shadow-[0_2px_8px_rgba(17,35,20,0.15)]"
                >
                  <defs>
                    <mask id="scallopRingHole">
                      <rect width="200" height="200" fill="white" />
                      <circle cx="100" cy="100" r="28" fill="black" />
                    </mask>
                  </defs>

                  <g mask="url(#scallopRingHole)">
                    {/* Connecting bridges between the 6 nodes */}
                    <line x1="146" y1="100" x2="123" y2="140" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
                    <line x1="123" y1="140" x2="77" y2="140" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
                    <line x1="77" y1="140" x2="54" y2="100" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
                    <line x1="54" y1="100" x2="77" y2="60" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
                    <line x1="77" y1="60" x2="123" y2="60" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
                    <line x1="123" y1="60" x2="146" y2="100" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />

                    {/* 6 Circular Nodes representing the 6 Ayurvedic Prasava Raksha Pillars */}
                    <circle cx="146" cy="100" r="19" fill="currentColor" />
                    <circle cx="123" cy="140" r="19" fill="currentColor" />
                    <circle cx="77" cy="140" r="19" fill="currentColor" />
                    <circle cx="54" cy="100" r="19" fill="currentColor" />
                    <circle cx="77" cy="60" r="19" fill="currentColor" />
                    <circle cx="123" cy="60" r="19" fill="currentColor" />
                  </g>
                </svg>

                {/* Desktop Right Side Annotations */}
                <div className="hidden sm:flex absolute left-[88%] sm:left-[92%] top-0 bottom-0 flex-col justify-between py-4 sm:py-5 pl-4 sm:pl-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-xs sm:text-sm font-sans font-medium text-[#112314] tracking-tight">
                      Doctor-guided process
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs sm:text-sm font-sans font-medium text-[#112314] tracking-tight">
                      Pure natural therapies
                    </span>
                  </div>
                </div>

              </div>

              {/* Mobile Annotations Pills (Centered, No Overflow) */}
              <div className="sm:hidden flex flex-wrap items-center justify-center gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-white/80 text-[#112314] text-[11px] font-medium border border-[#1b3420]/10 shadow-xs">
                  Doctor-guided process
                </span>
                <span className="px-3 py-1 rounded-full bg-white/80 text-[#112314] text-[11px] font-medium border border-[#1b3420]/10 shadow-xs">
                  Pure natural therapies
                </span>
              </div>
            </div>

            {/* Bottom Brand Wordmark: AARAMAM AYURVEDA SANCTUARY */}
            <div className="pb-2 sm:pb-4 text-center relative z-10 flex flex-col items-center">
              <div className="flex items-center space-x-2.5">
                <img
                  src="/aaramam-logo.png"
                  alt="Aaramam Logo"
                  className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-sm"
                />
                <span className="font-heading font-black text-2xl sm:text-3xl tracking-[0.22em] text-[#112314] uppercase">
                  AARAMAM
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-[0.26em] text-[#7a591e] mt-1">
                Ayurveda Sanctuary
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
