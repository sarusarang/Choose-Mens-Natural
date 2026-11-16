import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'History', href: '/history' },
    { label: 'Service', href: '/services' },
    { label: 'Feedback', href: '/feedback' },
  ];

  const mobileNavItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'History', href: '/history' },
    { label: 'Service', href: '/services' },
    { label: 'Feedback', href: '/feedback' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const isCurrentActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Modern In-Place Transitioning Header with Centered Nav Items & Right Contact Button */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[0.16,1,0.3,1] ${
          isScrolled
            ? 'py-2.5 md:py-3 bg-[#0e1d11]/92 backdrop-blur-2xl shadow-[0_14px_36px_rgba(10,20,12,0.35)]'
            : 'py-4 md:py-6 bg-gradient-to-b from-[#0a170d]/70 via-[#0a170d]/30 to-transparent'
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
                  <span className="font-brand-title font-bold text-lg sm:text-xl md:text-[22px] tracking-[0.20em] uppercase transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-[#fae788] via-[#e2b03d] to-[#fae788] drop-shadow-[0_2px_10px_rgba(212,160,52,0.35)]">
                    Aaramam
                  </span>
                  <span className={`text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.24em] font-bold -mt-0.5 transition-colors duration-300 ${
                    isScrolled ? 'text-[#e0b655]/90' : 'text-[#fae788] drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]'
                  }`}>
                    Ayurveda Sanctuary
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation Links (Centered, Clean No Underline) */}
            <div className="hidden md:flex items-center space-x-5 lg:space-x-8 absolute left-1/2 -translate-x-1/2 font-heading font-semibold text-[14.5px] lg:text-[15.5px] tracking-tight">
              {centerNavItems.map((item) => {
                const active = isCurrentActive(item.href);
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`relative py-1 transition-colors duration-300 ${
                      active
                        ? 'text-[#fae788] font-bold drop-shadow-[0_2px_10px_rgba(250,231,136,0.4)]'
                        : isScrolled
                        ? 'text-[#e6eee5] hover:text-[#fae788]'
                        : 'text-white/95 hover:text-[#fae788] drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right: Contact Button */}
            <div className="flex items-center space-x-3 shrink-0">
              <Link to="/contact">
                <motion.div
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
                </motion.div>
              </Link>

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
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-[32px] bg-[#112314]/96 backdrop-blur-2xl border border-[#d4a034]/35 shadow-[0_24px_60px_rgba(0,0,0,0.5)] md:hidden"
          >
            {/* Header info inside drawer */}
            <div className="flex items-center space-x-3 pb-4 mb-4 border-b border-[#d4a034]/20">
              <img
                src="/aaramam-logo.png"
                alt="Aaramam Logo"
                className="h-10 w-auto object-contain filter drop-shadow-[0_2px_6px_rgba(212,160,52,0.4)]"
              />
              <div className="flex flex-col">
                <span className="font-brand-title font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fae788] via-[#e2b03d] to-[#fae788] text-lg tracking-[0.20em] uppercase">
                  Aaramam
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] font-bold text-[#fae788]">
                  Ayurveda Sanctuary
                </span>
              </div>
            </div>

            {/* Mobile Nav Links: Home, About, History, Service, Feedback, Contact Us */}
            <div className="flex flex-col space-y-1 text-base font-heading font-bold text-[#f5f8f4]">
              {mobileNavItems.map((item) => {
                const active = isCurrentActive(item.href);
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 px-3 rounded-2xl transition-colors group ${
                      active ? 'bg-white/10 text-[#fae788]' : 'hover:bg-white/5'
                    }`}
                  >
                    <span className="group-hover:text-[#fae788] transition-colors">{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#d4a034] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Consultation CTA */}
            <div className="pt-5 mt-3 border-t border-[#d4a034]/20">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#d4a034] via-[#fae788] to-[#b18137] text-[#122314] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(212,160,52,0.3)] hover:brightness-105 active:scale-98 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#122314]" />
                <span>Book Ayurveda Consultation</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
