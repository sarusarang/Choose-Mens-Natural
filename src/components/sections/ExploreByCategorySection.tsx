import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

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
      id: 'abhyanga',
      name: 'Abhyanga Body Massage',
      subtitle: 'Synchronized warm herbal oil therapies',
      priceFrom: 'From $75.00',
      image: '/images/treatment_abhyanga_1794639675730.jpg',
    },
    {
      id: 'shirodhara',
      name: 'Shirodhara Mind Tranquility',
      subtitle: 'Continuous medicated warm oil stream',
      priceFrom: 'From $95.00',
      image: '/images/treatment_shirodhara_1794639618350.jpg',
    },
    {
      id: 'kizhi',
      name: 'Herbal Kizhi Poultice',
      subtitle: 'Steamed medicinal leaf bolus therapy',
      priceFrom: 'From $85.00',
      image: '/images/treatment_kizhi_1794639697200.jpg',
    },
    {
      id: 'mother-care',
      name: 'Prasava Raksha Mother Care',
      subtitle: 'Nurturing traditional postnatal wellness',
      priceFrom: 'From $80.00',
      image: '/images/treatment_mother_care_1794639745090.jpg',
    },
  ];

  const heroCategory: CategoryItem = {
    id: 'panchakarma',
    name: 'Panchakarma Detox',
    subtitle: 'Comprehensive 5-stage cellular purification & metabolic restoration',
    priceFrom: 'From $130.00',
    image: '/images/treatment_panchakarma_1794639720577.jpg',
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
              className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#162b19]/10 border border-[#d4a034]/40 mb-2.5 text-[#122314] text-[11px] font-bold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4a034]" />
              <span>Sacred Healing Disciplines</span>
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
                Explore Treatment Categories
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 -bottom-1 w-full h-[2.5px] bg-gradient-to-r from-[#d4a034] via-[#fae788] to-transparent origin-left rounded-full"
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
              href="#services"
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-[#d4a034]/40 hover:border-[#112314] bg-white hover:bg-[#112314] text-[#112314] hover:text-[#fae788] text-xs sm:text-sm font-bold transition-all duration-300 shadow-xs hover:shadow-md group cursor-pointer active:scale-95"
            >
              <span className="font-heading">View All Treatments</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#d4a034] group-hover:text-[#fae788]" />
            </a>
          </motion.div>
        </div>

        {/* Asymmetric Category Grid: Left 2x2 Grid + Right Tall Card with 100% Height Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          
          {/* Left Column: 4 Categories in a 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3.5 sm:gap-6">
            {smallCategories.map((item, index) => (
              <motion.a
                key={item.id}
                href="#services"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.1, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                className="group cursor-pointer flex flex-col justify-between p-1 rounded-[22px] transition-all duration-300 active:scale-[0.98]"
              >
                <div>
                  {/* Category Image - Squircle with Smooth Rounded Corners & Gold Border */}
                  <div className="w-full h-[140px] xs:h-[160px] sm:h-[210px] lg:h-[200px] xl:h-[235px] rounded-[18px] sm:rounded-[26px] overflow-hidden bg-[#eef3ed] shadow-[0_4px_16px_rgba(20,35,22,0.06)] group-hover:shadow-[0_12px_28px_rgba(20,35,22,0.14)] border border-[#d4a034]/20 group-hover:border-[#d4a034]/50 transition-all duration-500 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
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
                      <h3 className="text-[14px] sm:text-[17px] font-bold font-heading text-[#141f15] tracking-tight group-hover:text-[#b18137] group-hover:translate-x-0.5 transition-all duration-300 flex items-center gap-1 line-clamp-1">
                        <span>{item.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[#d4a034] shrink-0" />
                      </h3>
                    </motion.div>

                    <p className="text-[11px] sm:text-[13px] text-[#556956] mt-0.5 leading-snug line-clamp-1 group-hover:text-[#384b39] transition-colors duration-200">
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
                  className="text-xs sm:text-[15px] font-black font-heading text-[#112314] mt-1.5 sm:mt-2 tracking-tight"
                >
                  {item.priceFrom}
                </motion.p>
              </motion.a>
            ))}
          </div>

          {/* Right Column: Hero Category Card (Panchakarma Detox) - 100% Height Aligned with Left Column */}
          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 45, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.25, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            className="lg:col-span-5 relative rounded-[22px] sm:rounded-[30px] lg:rounded-[32px] overflow-hidden group cursor-pointer shadow-[0_6px_22px_rgba(20,35,22,0.08)] hover:shadow-[0_20px_42px_rgba(20,35,22,0.18)] border border-[#d4a034]/25 hover:border-[#d4a034]/60 transition-all duration-500 flex flex-col justify-end min-h-[280px] sm:min-h-[350px] lg:min-h-0 lg:h-full w-full active:scale-[0.99]"
          >
            {/* Background Full-Bleed Product Image */}
            <img
              src={heroCategory.image}
              alt={heroCategory.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

            {/* Top Pill Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#112314]/85 backdrop-blur-md text-[#fae788] text-[10.5px] sm:text-[11px] font-bold font-heading tracking-wider uppercase border border-[#d4a034]/40 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#d4a034]" />
                <span>Signature Discipline</span>
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
                  <h3 className="text-2xl sm:text-[27px] lg:text-[30px] font-bold font-heading tracking-tight text-white leading-tight group-hover:text-[#fae788] group-hover:translate-x-0.5 transition-all duration-300">
                    {heroCategory.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-[#fae788] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-xs sm:text-[13px] text-white/85 mt-1 font-medium max-w-sm leading-snug">
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
                <span className="text-base sm:text-[18px] lg:text-[20px] font-black font-heading text-[#fae788] tracking-tight">
                  {heroCategory.priceFrom}
                </span>
              </motion.div>
            </div>
          </motion.a>

        </div>

      </div>
    </section>
  );
};
