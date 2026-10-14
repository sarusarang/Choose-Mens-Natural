import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export const BotanicalIngredientsSection: React.FC = () => {
  const ingredients = [
    {
      name: 'Madagascar Centella Asiatica',
      badge: 'Barrier Repair',
      desc: 'Legendary botanical renowned for stimulating collagen synthesis, calming active redness, and speeding epidermal cellular repair.',
      color: 'from-[#426046] to-[#253928]'
    },
    {
      name: 'Japanese Ceremonial Uji Matcha',
      badge: 'Antioxidant Defense',
      desc: 'Packed with epigallocatechin gallate (EGCG) polyphenols to neutralize free radicals, refine pores, and rejuvenate dull skin.',
      color: 'from-[#507246] to-[#2c4524]'
    },
    {
      name: 'French Alpine Wild Lavender',
      badge: 'Stress Relief & Calming',
      desc: 'Steam-distilled at peak bloom in Provence. Provides natural antiseptic properties while inducing restorative parasympathetic relaxation.',
      color: 'from-[#655d78] to-[#393448]'
    },
    {
      name: 'Raw Unrefined Ghana Shea Butter',
      badge: 'Deep Lipid Nourishment',
      desc: 'Hand-harvested by women-led cooperatives in West Africa. Abundant in stearic and oleic fatty acids that deeply hydrate without clogging.',
      color: 'from-[#736545] to-[#453a22]'
    }
  ];

  return (
    <section id="beauty-space" className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading and Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#dbe6d9] text-[#243a26] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Wild Harvested &amp; Pure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#152316] tracking-tight leading-[1.12]">
            Formulated with Earth's Most Potent Botanicals
          </h2>

          <p className="text-sm sm:text-base text-[#465447] leading-relaxed">
            Every bar of soap and droplet of serum is born from regenerative, pesticide-free agriculture. We strictly reject palm oil, petroleum derivatives, artificial sulfates, and synthetic perfumes.
          </p>

          <div className="pt-2">
            <a
              href="#products"
              className="inline-flex items-center space-x-2 text-sm font-bold text-[#1b2b1d] group hover:text-[#38593b] transition-colors"
            >
              <span>Explore All Botanical Formulations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: 2x2 Grid of Botanical Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ingredients.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-[28px] bg-white border border-white/90 shadow-[0_12px_28px_rgba(20,35,21,0.06)] flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#edf4ec] text-[#2b442e] tracking-wider uppercase inline-block mb-3">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold text-[#152216] mb-2 leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#4d5c4e] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-semibold">
                <span>100% Certified Organic</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
