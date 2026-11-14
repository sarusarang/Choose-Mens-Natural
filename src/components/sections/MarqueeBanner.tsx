import React from 'react';
import { motion } from 'framer-motion';

export const MarqueeBanner: React.FC = () => {
  const items = [
    'Extended Shared Nurture Postnatal (28 Days)',
    'Value Shared Wellness Postnatal (21 Days)',
    'Affordable Shared Recovery Postnatal (14 Days)',
    'Value 28 Days of Sustained Care & Privacy',
    'Practical 21 Days of Steady Nurture & Balance',
    'Budget-Friendly 14 Days of Focused Healing & Rest',
    'Mattanur Center, Kannur (Opp. Airport Road)',
    'Authentic Ayurvedic Postnatal Mother & Baby Care',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="py-3.5 sm:py-4 overflow-hidden bg-[#132314] text-[#e3ece2] border-y border-[#d4a034]/20 select-none"
    >
      <div className="flex space-x-8 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 shrink-0">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a034] shadow-[0_0_8px_rgba(212,160,52,0.6)]" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
