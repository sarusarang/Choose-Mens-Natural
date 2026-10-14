import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { wishlistCount, cartCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Modern In-Place Transitioning Navbar (Transitions on scroll into liquid glass header) */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[0.16,1,0.3,1] ${
          isScrolled
            ? 'py-3 md:py-3.5 bg-[#96a78f]/85 backdrop-blur-2xl border-b border-white/30 shadow-[0_12px_32px_rgba(20,35,22,0.12)]'
            : 'py-5 md:py-7 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 transition-all duration-500">
          <nav className="w-full flex items-center justify-between">
            
            {/* Left: Brand Icon & Navigation links */}
            <div className="flex items-center space-x-6 lg:space-x-10">
              {/* Custom Clover/Petal Icon Logo */}
              <Link 
                to="/" 
                className="group relative flex items-center justify-center focus:outline-none"
                aria-label="choosemenatural Home"
              >
                <motion.div 
                  whileHover={{ scale: 1.06, rotate: 15 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-colors duration-300 ${
                    isScrolled ? 'bg-[#162317] text-white hover:bg-[#253927]' : 'bg-[#162317] text-white hover:bg-[#253927]'
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-white fill-current transition-transform duration-500 group-hover:rotate-45"
                  >
                    <circle cx="8" cy="8" r="3.2" />
                    <circle cx="16" cy="8" r="3.2" />
                    <circle cx="8" cy="16" r="3.2" />
                    <circle cx="16" cy="16" r="3.2" />
                  </svg>
                </motion.div>
              </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-7 lg:space-x-9 text-[15px] font-bold tracking-tight text-[#152316]">
                <a
                  href="#beauty-space"
                  className="hover:text-[#0b140c] transition-colors relative py-1 group"
                >
                  Beauty Space
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#162418] transition-all duration-300 group-hover:w-full" />
                </a>
                <a
                  href="#contact-us"
                  className="hover:text-[#0b140c] transition-colors relative py-1 group"
                >
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#162418] transition-all duration-300 group-hover:w-full" />
                </a>
                <a
                  href="#products"
                  className="hover:text-[#0b140c] transition-colors relative py-1 group"
                >
                  Product
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#162418] transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            </div>

            {/* Right: Liquid Glass Wishlist, Cart & Profile */}
            <div className="flex items-center space-x-3 md:space-x-4">
              
              {/* Wishlist Button - Circular Liquid Glass Effect (Matches Cart UI) */}
              <motion.button
                whileHover={{ scale: 1.07, y: -2 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="relative w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/35 backdrop-blur-2xl border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.06),inset_0_1.5px_2px_rgba(255,255,255,0.85)] hover:bg-white/50 hover:shadow-[0_12px_28px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.95)] flex items-center justify-center text-[#162418] transition-all duration-300 cursor-pointer"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-[#162418] fill-current" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#162418] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-md border border-white/50">
                    {wishlistCount}
                  </span>
                )}
              </motion.button>

              {/* Cart Button - Circular Liquid Glass Effect */}
              <motion.button
                whileHover={{ scale: 1.07, y: -2 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                onClick={openCart}
                className="relative w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/35 backdrop-blur-2xl border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.06),inset_0_1.5px_2px_rgba(255,255,255,0.85)] hover:bg-white/50 hover:shadow-[0_12px_28px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.95)] flex items-center justify-center text-[#162418] transition-all duration-300 cursor-pointer"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-[#162418]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#233b25] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-md border border-white/50 animate-pulse">
                    {cartCount}
                  </span>
                )}
              </motion.button>

              {/* Profile Avatar */}
              <motion.div
                whileHover={{ scale: 1.06, rotate: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.08)] cursor-pointer"
              >
                <img
                  src="/images/avatar-3.jpg"
                  alt="Customer Profile"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 flex items-center justify-center text-[#162418] shadow-sm cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-[32px] bg-white/95 backdrop-blur-2xl border border-white shadow-[0_24px_50px_rgba(0,0,0,0.15)] md:hidden"
          >
            <div className="flex flex-col space-y-4 text-base font-bold text-[#162418]">
              <a
                href="#beauty-space"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-gray-100"
              >
                <span>Beauty Space</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-gray-100"
              >
                <span>Natural Bath Soaps</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="#ritual"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-gray-100"
              >
                <span>The Cold-Process Ritual</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="#contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

