import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { POSTNATAL_CARE_PACKAGES } from '../../data/products';
import type { Product } from '../../types/product';

export const SoapCollectionSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredTreatments = POSTNATAL_CARE_PACKAGES.filter((treatment) => {
    if (activeFilter === 'all') return true;
    return treatment.id === activeFilter;
  });

  return (
    <section id="services" className="pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto relative">
      <div id="products" className="absolute -top-24 left-0 pointer-events-none" />
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl sm:max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#162b19]/10 border border-[#d4a034]/40 text-[#122314] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4a034]" />
            <span>Authentic Postnatal Mother &amp; Baby Care</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#162317] tracking-tight leading-[1.18]">
            Dedicated postnatal care for mother &amp; Baby <br className="hidden sm:block" />
            <span className="font-serif italic font-normal text-[#2b4c2f]">
              offering traditional Ayurvedic treatments &amp; personalised wellness.
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#3d503f] font-medium leading-relaxed">
            Nurturing Support For A Comfortable Motherhood Journey.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-2"
        >
          {[
            { id: 'all', label: 'All Services' },
            { id: 'ayurvedic-postnatal-care', label: 'Postnatal Care' },
            { id: 'ayurvedic-postnatal-therapies', label: 'Postnatal Therapies' },
            { id: 'ayurvedic-wellness-therapies', label: 'Wellness Therapies' },
            { id: 'beauty-and-skin-care', label: 'Beauty & Skin Care' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#112314] text-[#fae788] border border-[#d4a034]/60 shadow-md'
                  : 'bg-white/80 hover:bg-white text-[#2a3a2c] border border-gray-200/80 hover:border-[#d4a034]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* 4 Authentic Ayurvedic Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5 lg:gap-4.5 xl:gap-5">
        {filteredTreatments.map((treatment: Product, index: number) => {
          return (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 45, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.1, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
              className="group bg-white rounded-[28px] overflow-hidden shadow-[0_12px_32px_rgba(20,35,22,0.06)] hover:shadow-[0_24px_50px_rgba(20,35,22,0.14)] border-2 border-[#d4a034]/25 hover:border-[#d4a034]/60 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Edge-to-edge Package Image with Zoom & Badges */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-[#eef3ed]">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient vignette for badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

                  {/* Best Seller / Signature Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#112314]/90 backdrop-blur-md text-[#fae788] border border-[#d4a034]/40 text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-md flex items-center space-x-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#d4a034]" />
                    <span>{treatment.isBestSeller ? 'Signature Care' : 'Ayurvedic Care'}</span>
                  </span>

                  {/* Duration Pill */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/60 text-[#112314] text-[10.5px] font-bold shadow-sm flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-[#d4a034]" />
                    <span>{treatment.size}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  {/* Rating & Postnatal Category Tag */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1 text-[#d4a034] font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#d4a034] text-[#d4a034]" />
                      <span>{treatment.rating}</span>
                      <span className="text-gray-400 font-normal">({treatment.reviewsCount})</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2e5433] bg-[#edf4ed] px-2.5 py-0.5 rounded-full">
                      Postnatal Care
                    </span>
                  </div>

                  {/* Package Title */}
                  <h3 className="mt-2.5 text-[18px] sm:text-[19px] font-heading font-extrabold text-[#112314] leading-snug">
                    {treatment.name}
                  </h3>

                  {/* Subtitle / Tagline */}
                  <p className="mt-1 text-xs font-semibold text-[#8b6521]">
                    {treatment.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="mt-2 text-xs sm:text-[13px] text-[#4d5e4f] line-clamp-3 leading-relaxed font-normal">
                    {treatment.shortDesc}
                  </p>

                  {/* Location Info */}
                  <div className="mt-4 flex items-center space-x-1.5 text-[11px] text-[#637664] bg-[#f7f9f6] px-3 py-1.5 rounded-xl border border-[#e4ede3]">
                    <MapPin className="w-3.5 h-3.5 text-[#d4a034] shrink-0" />
                    <span className="truncate">Near Govt Taluk Hospital, Feroke, Kozhikode</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action (Explore Now! Arrow Button connecting to Service Page) */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <Link
                  to="/services#packages"
                  className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#112314] via-[#1a381d] to-[#112314] hover:from-[#1a381d] hover:to-[#244f28] text-[#fae788] hover:text-[#fffbcf] border border-[#d4a034]/50 hover:border-[#fae788]/80 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-xl cursor-pointer group"
                >
                  <span>Explore Now!</span>
                  <ArrowRight className="w-4 h-4 text-[#fae788] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
