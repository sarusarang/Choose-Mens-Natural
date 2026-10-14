import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    'Handcrafted Cold-Processed Soap Bars',
    'Certified Organic Botanicals',
    'Rich Natural Glycerin Moisture',
    '100% Biodegradable & Zero Plastic',
    'Madagascar Centella & Uji Matcha',
    'Clean, Sulfate-Free Daily Cleansing',
    'Cruelty-Free & Vegan Formulation',
  ];

  return (
    <div className="py-3.5 sm:py-4 overflow-hidden bg-[#243425] text-[#d6e3d5] border-y border-[#344836]/40 select-none">
      <div className="flex space-x-8 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 shrink-0">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#82a384]" />
          </div>
        ))}
      </div>
    </div>
  );
};
