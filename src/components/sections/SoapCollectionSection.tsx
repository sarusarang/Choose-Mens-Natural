import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Eye, Heart, Sparkles } from 'lucide-react';
import { NATURAL_BATH_SOAP_COLLECTION } from '../../data/products';
import { useCart } from '../../context/CartContext';
import type { Product } from '../../types/product';

export const SoapCollectionSection: React.FC = () => {
  const { addToCart, openQuickView, isInWishlist, toggleWishlist } = useCart();
  const [activeFilter, setActiveFilter] = useState<'all' | 'calm' | 'detox' | 'gentle'>('all');

  const filteredProducts = NATURAL_BATH_SOAP_COLLECTION.filter((soap) => {
    if (activeFilter === 'calm') return soap.id === 'soap-2';
    if (activeFilter === 'detox') return soap.id === 'soap-1' || soap.id === 'soap-3';
    if (activeFilter === 'gentle') return soap.id === 'soap-4';
    return true;
  });

  return (
    <section id="products" className="pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d6e3d4] text-[#283f2a] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Crafted Cold-Process Soap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#162317] tracking-tight leading-[1.14]">
            Pure Botanical Bath Bars for Radiant Skin
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] text-[#4a584b] leading-relaxed">
            Slow-cured for six weeks to retain natural organic glycerin, active plant saponins, and unrefined nourishing butters.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2"
        >
          {[
            { id: 'all', label: 'All Bars' },
            { id: 'detox', label: 'Detox & Matcha' },
            { id: 'calm', label: 'Calming Lavender' },
            { id: 'gentle', label: 'Baby-Mild Honey' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as 'all' | 'calm' | 'detox' | 'gentle')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#1b271d] text-white shadow-md'
                  : 'bg-white/80 hover:bg-white text-[#2a3a2c] border border-gray-200/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Product Cards Grid - Increased Height & Edge-to-Edge Image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {filteredProducts.map((product: Product, index: number) => {
          const isWished = isInWishlist(product.id);

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-[24px] overflow-hidden shadow-[0_8px_24px_rgba(25,38,26,0.06)] hover:shadow-[0_16px_36px_rgba(25,38,26,0.12)] border border-white flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Edge-to-edge image container with increased, comfortable height (aspect-[16/11.5]) */}
                <div className="relative w-full aspect-[16/11.5] overflow-hidden bg-[#e8ede7]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Badges */}
                  {product.isBestSeller && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-[#1a251b] text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-md">
                      Best Seller
                    </span>
                  )}

                  {/* Wishlist Button - Liquid Glass Effect */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      isWished
                        ? 'bg-rose-50 text-rose-600 shadow-md'
                        : 'bg-white/85 hover:bg-white text-gray-700 shadow-md backdrop-blur-md'
                    }`}
                    aria-label="Add to Wishlist"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isWished ? 'fill-current' : ''}`} />
                  </button>

                  {/* Quick View Button Hover Overlay */}
                  <div className="absolute inset-x-2.5 bottom-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                    <button
                      onClick={() => openQuickView(product)}
                      className="w-full py-2 bg-white/95 backdrop-blur-md rounded-full text-[#19241a] text-[11px] font-bold shadow-md hover:bg-white flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Card Content with spacious, refined vertical spacing */}
                <div className="p-4 sm:p-4.5">
                  {/* Scent notes & Rating */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1 text-amber-500 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{product.rating}</span>
                      <span className="text-gray-400">({product.reviewsCount})</span>
                    </div>
                    <span className="font-medium text-gray-400 text-xs">{product.size}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => openQuickView(product)}
                    className="mt-1.5 text-[15px] sm:text-base font-bold text-[#141f15] leading-snug hover:text-[#374e3a] cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  {/* Scent tags */}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {product.scentNotes.slice(0, 2).map((scent) => (
                      <span
                        key={scent}
                        className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#eef3ed] text-[#334b35] font-semibold"
                      >
                        {scent}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Add to Cart button */}
              <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5 pt-0 flex items-center justify-between">
                <div>
                  <span className="text-base sm:text-lg font-black text-[#141d15]">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="ml-1 text-[11px] text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(product, 1)}
                  className="px-3.5 py-2 rounded-full bg-[#162317] hover:bg-[#2c402d] text-white text-[11px] font-bold flex items-center space-x-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

