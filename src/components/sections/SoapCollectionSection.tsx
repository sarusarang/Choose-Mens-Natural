import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, Sparkles, Clock, Calendar } from 'lucide-react';
import { AYURVEDA_TREATMENTS_COLLECTION } from '../../data/products';
import { useCart } from '../../context/CartContext';
import type { Product } from '../../types/product';

export const SoapCollectionSection: React.FC = () => {
  const { addToCart, openQuickView } = useCart();
  const [activeFilter, setActiveFilter] = useState<'all' | 'abhyanga' | 'shirodhara' | 'kizhi' | 'panchakarma'>('all');

  const filteredTreatments = AYURVEDA_TREATMENTS_COLLECTION.filter((treatment) => {
    if (activeFilter === 'abhyanga') return treatment.id === 'treatment-abhyanga';
    if (activeFilter === 'shirodhara') return treatment.id === 'treatment-shirodhara';
    if (activeFilter === 'kizhi') return treatment.id === 'treatment-kizhi';
    if (activeFilter === 'panchakarma') return treatment.id === 'treatment-panchakarma';
    return true;
  });

  return (
    <section id="services" className="pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto relative">
      <div id="products" className="absolute -top-24 left-0 pointer-events-none" />
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#162b19]/10 border border-[#d4a034]/40 text-[#122314] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4a034]" />
            <span>Classical Ayurvedic Therapies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#162317] tracking-tight leading-[1.14]">
            Authentic Healing Treatments for Vitality &amp; Balance
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] text-[#4a584b] leading-relaxed">
            Prescribed by traditional Ayurvedic physicians and administered with warm medicated herbal thailams, steam poultices, and dosha-balancing botanical formulations.
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
            { id: 'all', label: 'All Treatments' },
            { id: 'abhyanga', label: 'Abhyanga Massage' },
            { id: 'shirodhara', label: 'Shirodhara Stream' },
            { id: 'kizhi', label: 'Herbal Kizhi' },
            { id: 'panchakarma', label: 'Panchakarma Detox' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as 'all' | 'abhyanga' | 'shirodhara' | 'kizhi' | 'panchakarma')}
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

      {/* Modern Stunning Treatment Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {filteredTreatments.map((treatment: Product, index: number) => {
          return (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 45, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.1, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
              className="group bg-white rounded-[26px] overflow-hidden shadow-[0_10px_30px_rgba(20,35,22,0.06)] hover:shadow-[0_20px_45px_rgba(20,35,22,0.14)] border border-[#d4a034]/25 hover:border-[#d4a034]/60 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Edge-to-edge Treatment Image with Zoom & Badges */}
                <div className="relative w-full aspect-[16/11.5] overflow-hidden bg-[#eef3ed]">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient vignette for badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25 pointer-events-none" />

                  {/* Best Seller / Signature Badge */}
                  {treatment.isBestSeller && (
                    <span className="absolute top-2.5 left-2.5 px-3 py-1 bg-[#112314]/90 backdrop-blur-md text-[#fae788] border border-[#d4a034]/40 text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-md flex items-center space-x-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#d4a034]" />
                      <span>Signature</span>
                    </span>
                  )}

                  {/* Duration Pill */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/60 text-[#112314] text-[10px] font-bold shadow-sm flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-[#d4a034]" />
                    <span>{treatment.size}</span>
                  </div>

                  {/* Quick View Button Hover Overlay */}
                  <div className="absolute inset-x-2.5 bottom-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                    <button
                      onClick={() => openQuickView(treatment)}
                      className="w-full py-2.5 bg-[#112314]/92 hover:bg-[#112314] backdrop-blur-md text-[#fae788] border border-[#d4a034]/50 rounded-full text-[11px] font-bold shadow-lg flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#fae788]" />
                      <span>View Treatment Details</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5">
                  {/* Rating & Category Tag */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1 text-[#d4a034] font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#d4a034] text-[#d4a034]" />
                      <span>{treatment.rating}</span>
                      <span className="text-gray-400 font-normal">({treatment.reviewsCount})</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2e5433] bg-[#edf4ed] px-2.5 py-0.5 rounded-full">
                      Ayurvedic Therapy
                    </span>
                  </div>

                  {/* Treatment Title */}
                  <h3
                    onClick={() => openQuickView(treatment)}
                    className="mt-2 text-[16px] sm:text-[17px] font-heading font-extrabold text-[#112314] leading-snug hover:text-[#b18137] cursor-pointer line-clamp-1 transition-colors"
                  >
                    {treatment.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-1.5 text-xs text-[#526353] line-clamp-2 leading-relaxed">
                    {treatment.shortDesc}
                  </p>

                  {/* Key Herbs & Formulations Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {treatment.scentNotes.slice(0, 2).map((herb) => (
                      <span
                        key={herb}
                        className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#f4f7f3] border border-[#dce6db] text-[#244227] font-semibold"
                      >
                        {herb}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Book Session CTA Button */}
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 flex items-center justify-between">
                <div>
                  <span className="text-lg sm:text-xl font-black text-[#112314]">
                    ${treatment.price.toFixed(2)}
                  </span>
                  {treatment.originalPrice && (
                    <span className="ml-1.5 text-xs text-gray-400 line-through">
                      ${treatment.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(treatment, 1)}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#112314] to-[#1e3b22] hover:from-[#1e3b22] hover:to-[#2b5030] text-[#fae788] border border-[#d4a034]/40 hover:border-[#fae788]/70 text-xs font-bold flex items-center space-x-1.5 transition-all shadow-md cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#d4a034]" />
                  <span>Book Session</span>
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
