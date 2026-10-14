import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  priceFrom: string;
  image: string;
}

export const ExploreByCategorySection: React.FC = () => {
  const smallCategories: CategoryItem[] = [
    {
      id: 'shampoos',
      name: 'Shampoos & Conditioners',
      subtitle: 'Nourishment for every strand',
      priceFrom: 'From $132.00',
      image: '/images/category-shampoos.jpg',
    },
    {
      id: 'perfumes',
      name: 'Perfumes',
      subtitle: 'Fragrance that defines you',
      priceFrom: 'From $150.00',
      image: '/images/category-perfumes.jpg',
    },
    {
      id: 'spakits',
      name: 'Spa Kits',
      subtitle: 'Relax, Restore, Rejuvenate',
      priceFrom: 'From $109.00',
      image: '/images/category-spakits.jpg',
    },
    {
      id: 'sunscreens',
      name: 'Sunscreens',
      subtitle: 'Protect, glow, repeat daily',
      priceFrom: 'From $79.00',
      image: '/images/category-sunscreens.jpg',
    },
  ];

  const heroCategory: CategoryItem = {
    id: 'facewashes',
    name: 'Facewashes',
    subtitle: 'Refresh your skin daily',
    priceFrom: 'From $119.00',
    image: '/images/category-facewashes.jpg',
  };

  return (
    <section id="categories" className="py-12 sm:py-16 md:py-20 bg-[#ffffff] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header: Styled Title on Left, View All Pill on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 md:mb-12 gap-4">
          <div>
            {/* Elegant Botanical Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#eef4ee] border border-[#d6e5d7] mb-2.5 text-[#2d5236] text-[11px] font-bold uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#356d43] animate-pulse" />
              <span>Curated Botanical Rituals</span>
            </motion.div>

            {/* Main Section Title with Luxury Font Styling */}
            <motion.h2
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold font-heading text-[#141e15] tracking-tight leading-[1.08] relative group"
            >
              <span className="relative inline-block">
                Explore By Category
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[#2e5939] via-[#85a88c] to-transparent origin-left rounded-full"
                />
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#products"
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-gray-300 hover:border-[#121c13] bg-white hover:bg-[#121c13] text-[#121c13] hover:text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-xs hover:shadow-md group cursor-pointer active:scale-95"
            >
              <span className="font-heading">View All</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Asymmetric Category Grid: Left 2x2 Grid + Right Tall Card with 100% Height Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          
          {/* Left Column: 4 Categories in a 2x2 Grid (Mobile App 2-Column Responsive) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3.5 sm:gap-6">
            {smallCategories.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer flex flex-col justify-between p-1 rounded-[22px] transition-all duration-300 active:scale-[0.98]"
              >
                <div>
                  {/* Category Image - Compact Squircle with Smooth Rounded Corners */}
                  <div className="w-full h-[140px] xs:h-[160px] sm:h-[210px] lg:h-[200px] xl:h-[235px] rounded-[18px] sm:rounded-[26px] overflow-hidden bg-[#f0eae1] shadow-[0_4px_16px_rgba(20,35,22,0.06)] group-hover:shadow-[0_12px_24px_rgba(20,35,22,0.12)] transition-shadow duration-500 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 rounded-[18px] sm:rounded-[26px] ring-1 ring-black/5 pointer-events-none" />
                  </div>

                  {/* Category Info with Styled Title */}
                  <div className="pt-2.5 sm:pt-3.5">
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
                      className="flex items-center justify-between gap-1.5"
                    >
                      <h3 className="text-[14px] sm:text-[17px] font-semibold font-heading text-[#141f15] tracking-tight group-hover:text-[#284f31] group-hover:translate-x-0.5 transition-all duration-300 flex items-center gap-1 line-clamp-1">
                        <span>{item.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[#284f31] shrink-0" />
                      </h3>
                    </motion.div>

                    <p className="text-[11px] sm:text-[13px] text-[#707c70] mt-0.5 leading-snug line-clamp-1 group-hover:text-[#556356] transition-colors duration-200">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                  className="text-xs sm:text-[15px] font-bold font-heading text-[#141f15] mt-1.5 sm:mt-2 tracking-tight"
                >
                  {item.priceFrom}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Hero Category Card (Facewashes) - 100% Height Aligned with Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="lg:col-span-5 relative rounded-[22px] sm:rounded-[30px] lg:rounded-[32px] overflow-hidden group cursor-pointer shadow-[0_6px_22px_rgba(20,35,22,0.08)] hover:shadow-[0_18px_38px_rgba(20,35,22,0.15)] transition-all duration-500 flex flex-col justify-end min-h-[280px] sm:min-h-[350px] lg:min-h-0 lg:h-full w-full active:scale-[0.99]"
          >
            {/* Background Full-Bleed Product Image */}
            <img
              src={heroCategory.image}
              alt={heroCategory.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            {/* Top Pill Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10.5px] sm:text-[11px] font-semibold font-heading tracking-wider uppercase border border-white/30 shadow-sm">
                Featured Botanical
              </span>
            </div>

            {/* Bottom Caption Overlay with Styled Font */}
            <div className="relative z-10 p-5 sm:p-7 flex items-end justify-between gap-4 text-white">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-[27px] lg:text-[30px] font-bold font-heading tracking-tight text-white leading-tight group-hover:translate-x-0.5 transition-transform duration-300">
                    {heroCategory.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-xs sm:text-[13px] text-white/85 mt-1 font-medium">
                  {heroCategory.subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 text-right"
              >
                <span className="text-base sm:text-[18px] lg:text-[19px] font-bold font-heading text-white tracking-tight">
                  {heroCategory.priceFrom}
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
