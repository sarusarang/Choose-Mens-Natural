import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  /** Main title text */
  title: string;
  /** Highlighted segment of title styled in radiant gold gradient */
  highlightTitle?: string;
  /** Descriptive paragraph strictly centered */
  description: string;
  /** Array of feature / trust bubbles displayed below description */
  highlights?: string[];
  /** Background image path matching the page */
  bgImage: string;
  /** Fill color for the bottom wavy divider (matches section below, defaults to #e4eae2) */
  bottomWaveColor?: string;
  /** Optional breadcrumbs */
  breadcrumbs?: BreadcrumbItem[];
  /** Optional custom container min-height class */
  minHeightClass?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  highlightTitle,
  description,
  highlights = [],
  bgImage,
  bottomWaveColor = '#e4eae2',
  breadcrumbs,
  minHeightClass = 'min-h-[500px] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[610px]',
}) => {
  return (
    <section className={`relative w-full ${minHeightClass} bg-[#0a160d] text-white flex flex-col justify-center items-center overflow-x-clip`}>
      {/* Background Photography Clearly Visible with Cinematic Sanctuary Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.05]"
          />

          {/* Clean, Minimal Inset: Background photography remains clearly visible across the entire banner */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/50 pointer-events-none" />

          {/* Subtle Ambient Radial Gold Glow in Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4a034]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Subtle Ambient Radial Gold Glow in Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4a034]/12 rounded-full blur-[120px] pointer-events-none" />
        </motion.div>
      </div>

      {/* Main Centered Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-22 md:pb-24 flex flex-col items-center text-center">
        
        {/* Breadcrumbs (Retained above title) */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Breadcrumb"
            className="flex items-center space-x-2 text-xs text-[#9eb6a0] mb-4 sm:mb-5 font-sans"
          >
            <Link to="/" className="hover:text-[#fae788] transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-[#d4a034]/60" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-[#fae788] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#fae788] font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Strictly Centered Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1 sm:space-y-2 max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-heading font-black tracking-[-0.03em] leading-[1.12] text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]">
            {title}{' '}
            {highlightTitle && (
              <span className="block sm:inline font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fae788] to-[#d4a034] drop-shadow-[0_2px_20px_rgba(212,160,52,0.6)]">
                {highlightTitle}
              </span>
            )}
          </h1>
        </motion.div>

        {/* Strictly Centered Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-5 max-w-2xl sm:max-w-3xl text-sm sm:text-base md:text-lg text-white/95 leading-relaxed font-sans font-medium drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]"
        >
          {description}
        </motion.p>

        {/* Bottom Feature Bubbles */}
        {highlights && highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl"
          >
            {highlights.map((item, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-[#0a160d]/80 border border-[#d4a034]/40 text-[11px] sm:text-xs text-[#fae788] backdrop-blur-md shadow-md font-medium"
              >
                {item}
              </span>
            ))}
          </motion.div>
        )}
      </div>

      {/* Undulating Wavy Scallop Divider at the Bottom (Seamless transition to the section below, overlapping bottom by 4px to eliminate subpixel seam) */}
      <div 
        className="absolute -bottom-1 sm:-bottom-1.5 inset-x-0 w-full leading-none pointer-events-none z-20"
        style={{ color: bottomWaveColor }}
      >
        <svg
          viewBox="0 0 1440 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-14 md:h-16 lg:h-20 fill-current block"
        >
          <path
            d="M 0,65 C 52.4,65 91.6,15 144.0,15 C 196.4,15 235.6,65 288.0,65 C 340.4,65 379.6,15 432.0,15 C 484.4,15 523.6,65 576.0,65 C 628.4,65 667.6,15 720.0,15 C 772.4,15 811.6,65 864.0,65 C 916.4,65 955.6,15 1008.0,15 C 1060.4,15 1099.6,65 1152.0,65 C 1204.4,65 1243.6,15 1296.0,15 C 1348.4,15 1387.6,65 1440.0,65 L 1440,85 L 0,85 Z"
          />
        </svg>
      </div>
    </section>
  );
};
