import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show after scrolling down past the initial hero view
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '917034641282';
  const defaultMessage = encodeURIComponent(
    'Hello Aaramam Ayurveda Sanctuary, I would like to enquire about your treatments and care programs.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 30 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 sm:bottom-6 md:bottom-7 right-3.5 sm:right-6 md:right-8 z-50 flex items-center select-none"
          title="Chat with us on WhatsApp"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative flex items-center cursor-pointer"
          >
            {/* Animated Slide-out Action Button (revealed on hover) */}
            <div className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-[0.16,1,0.3,1] mr-3">
              <div className="flex items-center space-x-3 px-4 py-2.5 rounded-full bg-[#112314]/95 text-white border border-[#d4a034]/40 shadow-[0_12px_36px_rgba(10,20,12,0.45)] backdrop-blur-xl group-hover:border-[#fae788] transition-all">
                {/* Live Online Pulse Indicator */}
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
                </span>

                {/* Button Label & Action Text */}
                <div className="flex flex-col text-left pr-1 whitespace-nowrap">
                  <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#d4a034]">
                    Sanctuary Desk
                  </span>
                  <span className="text-xs sm:text-[13px] font-heading font-bold text-[#f5f8f4] flex items-center gap-1.5">
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#fae788] group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>

            {/* Floating WhatsApp Circle Icon */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_10px_28px_rgba(37,211,102,0.45)] group-hover:shadow-[0_14px_38px_rgba(37,211,102,0.65)] group-hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/50 shrink-0">
              {/* Subtle Outer Pulse Ripple Ring */}
              <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-10" />

              {/* Official WhatsApp Vector Logo */}
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-sm"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
