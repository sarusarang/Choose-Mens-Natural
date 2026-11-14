import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, CheckCircle2, MessageCircle, MapPin, Clock, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, isInWishlist, toggleWishlist } = useCart();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWished = isInWishlist(product.id);
  const whatsappUrl = product.whatsappUrl || 'https://wa.me/919876543210';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickView}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white rounded-[32px] shadow-2xl overflow-hidden z-10 border-2 border-[#d4a034]/30 max-h-[92vh] flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-gray-700 shadow-md transition-all cursor-pointer border border-gray-200"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left Column: Image with soft background */}
          <div className="md:w-1/2 bg-[#f3f6f2] p-6 sm:p-8 flex items-center justify-center relative min-h-[260px] md:min-h-[420px]">
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-2xl shadow-lg border border-white"
            />
            <span className="absolute top-4 left-4 px-3 py-1 bg-[#112314]/90 backdrop-blur-md text-[#fae788] border border-[#d4a034]/40 text-[10px] font-extrabold rounded-full tracking-wider uppercase shadow-md flex items-center space-x-1">
              <Sparkles className="w-2.5 h-2.5 text-[#d4a034]" />
              <span>Ayurvedic Postnatal</span>
            </span>

            <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-md text-[#112314] text-xs font-bold rounded-full shadow-md flex items-center space-x-1 border border-white/70">
              <Clock className="w-3.5 h-3.5 text-[#d4a034]" />
              <span>{product.size}</span>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
            <div className="space-y-4">
              {/* Rating & Category */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1 text-[#d4a034] font-bold">
                  <Star className="w-3.5 h-3.5 fill-[#d4a034] text-[#d4a034]" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400">({product.reviewsCount} reviews)</span>
                </div>
                <span className="bg-[#edf4ed] text-[#2e5433] px-2.5 py-0.5 rounded-full font-bold uppercase text-[10px] tracking-wider">
                  Prasava Raksha
                </span>
              </div>

              {/* Title & Subtitle (No Price) */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#141e15] tracking-tight leading-snug">
                  {product.name}
                </h3>
                {product.subtitle && (
                  <p className="mt-1 text-xs font-bold text-[#8b6521]">
                    {product.subtitle}
                  </p>
                )}
                <div className="mt-2 flex items-center space-x-1.5 text-xs text-[#556957]">
                  <MapPin className="w-3.5 h-3.5 text-[#d4a034] shrink-0" />
                  <span>Mattanur Center (Opp. Airport Road, Kannur)</span>
                </div>
              </div>

              {/* Full Description */}
              <p className="text-xs sm:text-sm text-[#48564a] leading-relaxed">
                {product.description}
              </p>

              {/* Package Inclusions */}
              {product.inclusions && (
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-[11px] font-extrabold text-[#112314] uppercase tracking-wider block mb-2">
                    Package Inclusions
                  </span>
                  <ul className="text-xs text-[#48564a] space-y-2">
                    {product.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a034] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Actions: Enquire Now WhatsApp Button */}
            <div className="pt-6 border-t border-gray-100 mt-6 flex items-center space-x-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-full bg-gradient-to-r from-[#112314] via-[#1a381d] to-[#112314] hover:from-[#1a381d] hover:to-[#244f28] text-[#fae788] hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg transition-all border border-[#d4a034]/40 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#d4a034]" />
                <span>Enquire via WhatsApp</span>
              </a>

              {/* Wishlist toggle */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3 rounded-full border transition-colors cursor-pointer ${
                  isWished
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'border-gray-200 text-gray-500 hover:text-black hover:border-gray-400'
                }`}
                aria-label="Save to wishlist"
              >
                <Heart className={`w-4 h-4 ${isWished ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
