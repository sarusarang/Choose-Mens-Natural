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

  const centerNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Our History', href: '/history' },
    { label: 'Service & Packages', href: '/services' },
    { label: 'Insights', href: '/feedback' },
  ];

  const mobileNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Our History', href: '/history' },
    { label: 'Service & Packages', href: '/services' },
    { label: 'Insights', href: '/feedback' },
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
      {/* Modern Floating Island Header with Silky Deceleration Scroll Animation */}
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        <div
          className={`pointer-events-auto mx-auto transition-all duration-700 ease-[0.16,1,0.3,1] ${
            isScrolled
              ? 'mt-2.5 sm:mt-3.5 md:mt-4 w-[calc(100%-1.25rem)] sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-3.5rem)] max-w-[1440px] px-5 sm:px-7 md:px-9 py-3 sm:py-3.5 rounded-full bg-[#0e1d11]/92 backdrop-blur-2xl border border-[#d4a034]/40 shadow-[0_18px_45px_rgba(10,20,12,0.5),inset_0_1px_0_rgba(250,231,136,0.22)]'
              : 'mt-0 w-full max-w-full px-5 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 md:py-7 rounded-none bg-transparent border-0 border-transparent shadow-none'
          }`}
        >
          <nav className="relative w-full flex items-center justify-between">
            
            {/* Left: Brand Logo & Typography */}
            <div className="flex items-center shrink-0">
              <Link 
                to="/" 
                className="group relative flex items-center space-x-3 sm:space-x-3.5 focus:outline-none"
                aria-label="Aaramam Ayurveda & Wellness Home"
              >
                <div className="relative flex items-center justify-center">
                  <img
                    src="/aaramam-logo.png"
                    alt="Aaramam Ayurveda Logo"
                    className={`w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(212,160,52,0.35)] transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105 ${
                      isScrolled ? 'h-10 sm:h-11 md:h-11' : 'h-11 sm:h-12 md:h-13'
                    }`}
                  />
                </div>

                <div className="flex flex-col tracking-tight select-none">
                  <span className={`font-brand-title font-bold tracking-[0.20em] uppercase transition-all duration-700 ease-[0.16,1,0.3,1] text-transparent bg-clip-text bg-gradient-to-r from-[#fae788] via-[#e2b03d] to-[#fae788] drop-shadow-[0_2px_10px_rgba(212,160,52,0.35)] ${
                    isScrolled ? 'text-lg sm:text-xl md:text-[21px]' : 'text-xl sm:text-2xl md:text-[23px]'
                  }`}>
                    Aaramam
                  </span>
                  <span className={`uppercase tracking-[0.24em] font-bold -mt-0.5 transition-all duration-700 ease-[0.16,1,0.3,1] ${
                    isScrolled
                      ? 'text-[8px] sm:text-[9px] text-[#e0b655]/90'
                      : 'text-[9px] sm:text-[10px] text-[#fae788] drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]'
                  }`}>
                    Ayurveda Sanctuary
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation Links (Refined lighter weight & cohesive spacing) */}
            <div className="hidden md:flex items-center space-x-1 sm:space-x-1.5 absolute left-1/2 -translate-x-1/2 font-heading font-normal text-[13.5px] lg:text-[14.5px] tracking-normal">
              {centerNavItems.map((item) => {
                const active = isCurrentActive(item.href);
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`relative px-3 sm:px-3.5 py-1.5 rounded-full transition-all duration-500 ease-[0.16,1,0.3,1] ${
                      active
                        ? 'text-[#fae788] bg-white/10 font-medium border border-[#d4a034]/40 shadow-xs drop-shadow-[0_2px_10px_rgba(250,231,136,0.35)]'
                        : isScrolled
                        ? 'text-[#e6eee5] hover:text-[#fae788] hover:bg-white/5 font-normal'
                        : 'text-white/95 hover:text-[#fae788] hover:bg-white/10 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] font-normal'
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
                  className={`hidden md:inline-flex items-center justify-center rounded-full font-heading font-bold uppercase transition-all duration-700 ease-[0.16,1,0.3,1] cursor-pointer shadow-md bg-gradient-to-r from-[#d4a034] via-[#fae788] to-[#b18137] text-[#112314] hover:brightness-105 ${
                    isScrolled
                      ? 'px-5 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-[13px] tracking-wider border border-[#fae788]/60 shadow-[0_4px_16px_rgba(212,160,52,0.35)]'
                      : 'px-6 lg:px-7 py-2.5 sm:py-3 text-xs lg:text-[13px] tracking-wider border border-white/60 shadow-md'
                  }`}
                >
                  <span>Contact</span>
                </motion.div>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden rounded-full backdrop-blur-xl flex items-center justify-center transition-all duration-700 ease-[0.16,1,0.3,1] cursor-pointer ${
                  isScrolled
                    ? 'w-10 h-10 bg-[#18311b]/85 border border-[#d4a034]/40 text-[#fae788] shadow-md'
                    : 'w-11 h-11 bg-white/20 border border-white/40 text-white shadow-sm'
                }`}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu & Frosted Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden pointer-events-auto"
            />

            {/* Mobile Sheet Window */}
            <motion.div
              initial={{ opacity: 0, y: -25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-3.5 top-20 max-h-[calc(100vh-6.5rem)] overflow-y-auto z-50 p-5 sm:p-6 rounded-[32px] bg-[#0e1d11]/98 backdrop-blur-2xl border border-[#d4a034]/40 shadow-[0_24px_60px_rgba(0,0,0,0.65)] md:hidden pointer-events-auto"
            >
              {/* Header info inside drawer */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#d4a034]/25">
                <div className="flex items-center space-x-3">
                  <img
                    src="/aaramam-logo.png"
                    alt="Aaramam Logo"
                    className="h-9 w-auto object-contain filter drop-shadow-[0_2px_6px_rgba(212,160,52,0.4)]"
                  />
                  <div className="flex flex-col">
                    <span className="font-brand-title font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fae788] via-[#e2b03d] to-[#fae788] text-lg tracking-[0.20em] uppercase leading-none">
                      Aaramam
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.22em] font-bold text-[#fae788] mt-1">
                      Ayurveda Sanctuary
                    </span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#fae788] flex items-center justify-center border border-[#d4a034]/30 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Nav Links: Home, History, Service, Insights, Contact Us */}
              <div className="flex flex-col space-y-1 text-sm font-heading font-medium text-[#f5f8f4]">
                {mobileNavItems.map((item) => {
                  const active = isCurrentActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3.5 rounded-2xl transition-all group ${
                        active
                          ? 'bg-[#fae788]/15 text-[#fae788] border border-[#d4a034]/40 font-bold shadow-xs'
                          : 'hover:bg-white/5 text-[#e5ede4]'
                      }`}
                    >
                      <span className="group-hover:text-[#fae788] transition-colors">{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#d4a034] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  );
                })}
              </div>

              {/* Quick Call & Location Quick Action Row */}
              <div className="grid grid-cols-2 gap-2 mt-3.5 pt-3.5 border-t border-[#d4a034]/20">
                <a
                  href="tel:+917034641282"
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-heading font-semibold hover:bg-white/10 transition-colors"
                >
                  <span className="text-[#fae788]">📞</span>
                  <span>Call Doctor</span>
                </a>
                <a
                  href="https://wa.me/917034641282?text=Hello%20Aaramam%20Ayurveda%20Sanctuary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-white text-xs font-heading font-semibold hover:bg-[#25D366]/25 transition-colors"
                >
                  <span className="text-[#25D366]">💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Bottom Consultation CTA */}
              <div className="pt-3 mt-3">
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
          </>
        )}
      </AnimatePresence>
    </>
  );
};
