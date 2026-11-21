import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SanctuarySuspenseLoaderProps {
  title?: string;
  subtitle?: string;
  subMessage?: string;
  fullScreen?: boolean;
}

export const SanctuarySuspenseLoader: React.FC<SanctuarySuspenseLoaderProps> = ({
  title = 'Aaramam',
  subtitle = 'Ayurveda Sanctuary',
  subMessage = 'Dedicated Ayurvedic Motherhood & Postnatal Care',
  fullScreen = true,
}) => {
  return (
    <div
      className={`w-full ${
        fullScreen
          ? 'fixed inset-0 min-h-screen z-[9999]'
          : 'relative min-h-[400px] z-40'
      } bg-[#0e1d11] flex flex-col items-center justify-center p-4 overflow-hidden select-none`}
      role="status"
      aria-label="Loading Aaramam Sanctuary"
    >
      {/* Ambient Radial Golden Sanctuary Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4a034]/20 via-[#0e1d11]/85 to-[#0e1d11] pointer-events-none" />
      <div className="absolute w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full bg-[#1b3820]/40 blur-[90px] pointer-events-none animate-pulse" />

      {/* Central Animated Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xs sm:max-w-sm mx-auto">
        
        {/* Animated Rings with Rotating Golden Accent */}
        <div className="relative flex items-center justify-center mb-6">
          {/* Subtle outer breathing ripple ring */}
          <motion.div
            animate={{ scale: [1, 1.28, 1], opacity: [0.35, 0.08, 0.35] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-28 h-28 sm:w-34 sm:h-34 rounded-full border border-[#d4a034]/35 absolute pointer-events-none"
          />

          {/* Smooth spinning gold accent ring */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-t-[#fae788] border-r-[#d4a034] border-b-transparent border-l-transparent animate-spin" />

          {/* Central Golden Logo Disc */}
          <motion.div
            animate={{ scale: [0.96, 1.04, 0.96] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-b from-[#18341e] to-[#0d1c10] border border-[#d4a034]/70 flex items-center justify-center shadow-[0_0_30px_rgba(212,160,52,0.45)] p-2.5"
          >
            <img
              src="/aaramam-logo.png"
              alt="Aaramam Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(212,160,52,0.65)]"
            />
          </motion.div>

          {/* Floating Sparkle Pin */}
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#112314] border border-[#fae788]/70 flex items-center justify-center shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#fae788] animate-pulse" />
          </div>
        </div>

        {/* Clean, Non-Duplicated Brand Typography */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-1.5 flex flex-col items-center"
        >
          {/* Primary Brand Name */}
          <h1 className="font-brand-title font-bold tracking-[0.24em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#fae788] via-[#f7d666] to-[#d4a034] text-lg sm:text-2xl drop-shadow-[0_2px_12px_rgba(212,160,52,0.4)]">
            {title}
          </h1>

          {/* Brand Tag / Subtitle */}
          {subtitle && (
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#fae788]/90 font-bold -mt-0.5">
              {subtitle}
            </p>
          )}

          {/* Operational Status / Tagline */}
          {subMessage && (
            <p className="text-[11px] sm:text-xs text-[#b8ccba] font-medium tracking-wide pt-1.5 max-w-[280px]">
              {subMessage}
            </p>
          )}
        </motion.div>

        {/* Mobile App Level Animated Progress Bar */}
        <div className="w-40 sm:w-52 h-1 bg-white/10 rounded-full overflow-hidden relative mt-6 shadow-inner">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#fae788] to-transparent rounded-full"
          />
        </div>

      </div>
    </div>
  );
};
