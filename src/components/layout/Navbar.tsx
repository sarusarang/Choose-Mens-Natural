import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const centerNavItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'History', href: '#history' },
    { label: 'Service', href: '#services' },
  ];

  const mobileNavItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'History', href: '#history' },
    { label: 'Service', href: '#services' },
    { label: 'Contact Us', href: '#contact-us' },
  ];

  return (
    <>
      {/* Modern In-Place Transitioning Header with Centered Nav Items & Right Contact Button */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[0.16,1,0.3,1] ${
          isScrolled
            ? 'py-2.5 md:py-3 bg-[#112314]/90 backdrop-blur-2xl border-b border-[#d4a034]/25 shadow-[0_14px_36px_rgba(10,20,12,0.32)]'
            : 'py-4 md:py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 transition-all duration-500">
          <nav className="relative w-full flex items-center justify-between">
            
            {/* Left: Brand Logo & Typography */}
            <div className="flex items-center shrink-0">
              <Link 
                to="/" 
                className="group relative flex items-center space-x-3 focus:outline-none"
                aria-label="Aaramam Ayurveda & Wellness Home"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="relative flex items-center justify-center"
                >
                  <img
                    src="/aaramam-logo.png"
                    alt="Aaramam Ayurveda Logo"
                    className="h-10 sm:h-11 md:h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(212,160,52,0.35)] transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>

                <div className="flex flex-col tracking-tight select-none">
                  <span className={`font-heading font-black text-base sm:text-lg tracking-wider uppercase transition-colors duration-300 ${
                    isScrolled ? 'text-[#fae788]' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]'
                  }`}>
                    Aaramam
                  </span>
                  <span className={`text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-bold -mt-0.5 transition-colors duration-300 ${
                    isScrolled ? 'text-[#e0b655]/90' : 'text-[#fae788] drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]'
                  }`}>
                    Ayurveda Sanctuary
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation Links (Centered) */}
            <div className="hidden md:flex items-center space-x-7 lg:space-x-9 absolute left-1/2 -translate-x-1/2 font-heading font-semibold text-[15px] lg:text-[16px] tracking-tight">
              {centerNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative py-1 transition-colors duration-300 group ${
                    isScrolled
                      ? 'text-[#e6eee5] hover:text-[#fae788]'
                      : 'text-white/95 hover:text-[#fae788] drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled
                      ? 'bg-gradient-to-r from-[#fae788] via-[#d4a034] to-[#fae788]'
                      : 'bg-gradient-to-r from-[#d4a034] via-[#fae788] to-[#946726]'
                  }`} />
                </a>
              ))}
            </div>

            {/* Right: Contact Button (Replaces wishlist, cart, and profile) */}
            <div className="flex items-center space-x-3 shrink-0">
              <motion.a
                href="#contact-us"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(212,160,52,0.45)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`hidden md:inline-flex items-center justify-center px-5 lg:px-6 py-2 rounded-full font-heading font-bold text-xs lg:text-[13px] tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md ${
                  isScrolled
                    ? 'bg-gradient-to-r from-[#d4a034] via-[#fae788] to-[#b18137] text-[#112314] border border-[#fae788]/60 hover:brightness-105'
                    : 'bg-gradient-to-r from-[#d4a034] via-[#fae788] to-[#b18137] text-[#112314] border border-white/60 hover:brightness-105'
                }`}
              >
                <span>Contact</span>
              </motion.a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden w-10 h-10 rounded-full backdrop-blur-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  isScrolled
                    ? 'bg-[#18311b]/85 border border-[#d4a034]/40 text-[#fae788] shadow-md'
                    : 'bg-white/20 border border-white/40 text-white shadow-sm'
                }`}
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
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-[32px] bg-[#112314]/96 backdrop-blur-2xl border border-[#d4a034]/35 shadow-[0_24px_60px_rgba(0,0,0,0.45)] md:hidden"
          >
            {/* Header info inside drawer */}
            <div className="flex items-center space-x-3 pb-4 mb-4 border-b border-[#d4a034]/20">
              <img
                src="/aaramam-logo.png"
                alt="Aaramam Logo"
                className="h-10 w-auto object-contain filter drop-shadow-[0_2px_6px_rgba(212,160,52,0.4)]"
              />
              <div className="flex flex-col">
                <span className="font-heading font-black text-white text-base tracking-wide uppercase">
                  Aaramam
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#fae788]">
                  Ayurveda Sanctuary
                </span>
              </div>
            </div>

            {/* Mobile Nav Links: Home, About, History, Service, Contact Us */}
            <div className="flex flex-col space-y-1 text-base font-heading font-bold text-[#f5f8f4]">
              {mobileNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3 rounded-2xl hover:bg-white/5 transition-colors group"
                >
                  <span className="group-hover:text-[#fae788] transition-colors">{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#d4a034] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>

            {/* Bottom Consultation CTA */}
            <div className="pt-5 mt-3 border-t border-[#d4a034]/20">
              <a
                href="#contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#d4a034] via-[#fae788] to-[#b18137] text-[#122314] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(212,160,52,0.3)] hover:brightness-105 active:scale-98 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#122314]" />
                <span>Book Ayurveda Consultation</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
