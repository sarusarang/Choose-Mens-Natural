import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, Check, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToCart, isInWishlist, toggleWishlist } = useCart();
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWished = isInWishlist(product.id);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickView}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white rounded-[32px] shadow-2xl overflow-hidden z-10 border border-gray-100 max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-gray-700 shadow-md transition-all"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left Column: Image with soft background */}
          <div className="md:w-1/2 bg-[#f3f6f2] p-8 flex items-center justify-center relative">
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              src={product.image}
              alt={product.name}
              className="max-h-[320px] w-auto object-contain drop-shadow-xl"
            />
            {product.isBestSeller && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#1a251b] text-white text-[11px] font-bold rounded-full tracking-wider uppercase">
                Artisan Best Seller
              </span>
            )}
          </div>

          {/* Right Column: Details */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              {/* Rating & Size */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1 text-amber-500 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400">({product.reviewsCount} reviews)</span>
                </div>
                <span className="bg-gray-100 px-2.5 py-0.5 rounded-full font-medium">
                  {product.size}
                </span>
              </div>

              {/* Title & Price */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#141e15] tracking-tight">
                  {product.name}
                </h3>
                <div className="mt-1 flex items-baseline space-x-2">
                  <span className="text-2xl font-black text-[#1d2b1e]">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#48564a] leading-relaxed">
                {product.description}
              </p>

              {/* Scent Notes */}
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                  Aromatherapeutic Notes
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.scentNotes.map((note) => (
                    <span
                      key={note}
                      className="px-2.5 py-1 bg-[#edf3ec] text-[#2b422e] text-xs font-semibold rounded-full"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Ingredients */}
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                  Key Active Botanicals
                </span>
                <ul className="text-xs text-gray-600 space-y-1">
                  {product.keyIngredients.map((item) => (
                    <li key={item} className="flex items-center space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions: Quantity & Add to Cart */}
            <div className="pt-6 border-t border-gray-100 mt-6 space-y-3">
              <div className="flex items-center space-x-3">
                {/* Quantity */}
                <div className="flex items-center border border-gray-200 rounded-full px-3 py-1.5 bg-gray-50">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="text-gray-600 hover:text-black p-1"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-bold w-6 text-center">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="text-gray-600 hover:text-black p-1"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    addToCart(product, qty);
                    closeQuickView();
                  }}
                  className="flex-1 py-3 px-6 rounded-full bg-[#172318] hover:bg-[#2b3e2d] text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart • ${(product.price * qty).toFixed(2)}</span>
                </motion.button>

                {/* Wishlist toggle */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3 rounded-full border transition-colors ${
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
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
