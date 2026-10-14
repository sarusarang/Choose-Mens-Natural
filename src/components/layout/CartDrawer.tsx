import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, closeCart, updateQuantity, removeFromCart, subtotal } = useCart();

  const freeShippingThreshold = 75;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-[#fafbf9] shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ShoppingBag className="w-5 h-5 text-[#213223]" />
                    <h2 className="text-lg font-bold text-[#1a251b] tracking-tight">
                      Your Botanical Cart ({cart.reduce((s, i) => s + i.quantity, 0)})
                    </h2>
                  </div>
                  <button
                    onClick={closeCart}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                    aria-label="Close cart"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Free Shipping Meter */}
                <div className="mt-4 p-3 rounded-2xl bg-[#edf3ec] border border-[#d6e3d5]">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#243926] mb-1.5">
                    {remainingForFreeShipping === 0 ? (
                      <span className="flex items-center text-emerald-800">
                        <Sparkles className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                        You've unlocked Free Botanical Shipping!
                      </span>
                    ) : (
                      <span>
                        Add <span className="font-bold">${remainingForFreeShipping.toFixed(2)}</span> more for Free Shipping
                      </span>
                    )}
                    <span>{Math.round(progressToFreeShipping)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#dbe8db] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressToFreeShipping}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="h-full bg-[#3c593f] rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#edf3ec] flex items-center justify-center mb-4">
                      <ShoppingBag className="w-8 h-8 text-[#5f7862]" />
                    </div>
                    <h3 className="text-base font-bold text-[#1b251c]">Your cart is empty</h3>
                    <p className="text-sm text-gray-500 mt-1 max-w-xs">
                      Explore our handcrafted natural bath soaps and restorative facial serums.
                    </p>
                    <button
                      onClick={closeCart}
                      className="mt-6 px-6 py-2.5 rounded-full bg-[#1e2c1f] text-white text-xs font-semibold hover:bg-[#344b36] transition-all"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      layout
                      key={item.product.id}
                      className="flex space-x-4 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm"
                    >
                      {/* Product Thumbnail */}
                      <div className="w-20 h-20 rounded-xl bg-[#f4f7f3] p-1.5 flex items-center justify-center shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Info & Quantity */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-[#19241a] line-clamp-1">
                              {item.product.name}
                            </h4>
                            <p className="text-[11px] text-gray-500">{item.product.size}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          {/* Quantity adjust */}
                          <div className="flex items-center space-x-2 border border-gray-200 rounded-full px-2 py-0.5 bg-gray-50">
                            <button
                              onClick={() => updateQuantity(item.product.id, -1)}
                              className="text-gray-600 hover:text-black p-0.5"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, 1)}
                              className="text-gray-600 hover:text-black p-0.5"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-sm font-extrabold text-[#19241a]">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer Checkout Summary */}
              {cart.length > 0 && (
                <div className="p-6 bg-white border-t border-gray-100 space-y-4">
                  <div className="space-y-1.5 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-semibold text-gray-900">
                        {remainingForFreeShipping === 0 ? 'FREE' : '$4.95'}
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-extrabold text-[#19241a] pt-2 border-t border-gray-100">
                      <span>Total</span>
                      <span>
                        ${(subtotal + (remainingForFreeShipping === 0 ? 0 : 4.95)).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      alert('Thank you for choosing choosemenatural Soaps! Simulating secure checkout...');
                      closeCart();
                    }}
                    className="w-full py-3.5 rounded-full bg-[#1b271d] hover:bg-[#2f4432] text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[11px] text-gray-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>256-Bit SSL Encrypted â€¢ 30-Day Happiness Guarantee</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

