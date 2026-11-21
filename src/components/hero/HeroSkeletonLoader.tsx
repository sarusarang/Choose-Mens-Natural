import React from 'react';
import { motion } from 'framer-motion';

export const HeroSkeletonLoader: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-screen lg:h-screen bg-[#0e1d11] overflow-hidden flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 pt-20 sm:pt-24 md:pt-28 pb-6 md:pb-8 select-none"
      aria-label="Loading hero content"
    >
      {/* Ambient sanctuary background lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4a034]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#1b3820]/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Shimmer sweep effect */}
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none -skew-x-12"
      />

      {/* Top / Mid Row: Headline Skeleton + Right Social Proof */}
      <div className="w-full max-w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start my-auto lg:my-0 relative z-10">
        
        {/* Left Column: Title & Description Skeletons */}
        <div className="lg:col-span-7 xl:col-span-6 space-y-4 text-left flex flex-col items-start">
          {/* Headline 2-Line Skeletons */}
          <div className="space-y-3 w-full">
            <div className="w-4/5 sm:w-3/4 max-w-lg h-10 sm:h-12 md:h-14 rounded-2xl bg-white/15 animate-pulse" />
            <div className="w-3/5 sm:w-1/2 max-w-md h-10 sm:h-12 md:h-14 rounded-2xl bg-gradient-to-r from-white/20 to-[#fae788]/20 animate-pulse" />
          </div>

          {/* Description Paragraph Skeletons */}
          <div className="space-y-2 w-full max-w-[460px] pt-2">
            <div className="w-full h-3.5 sm:h-4 rounded-lg bg-white/10 animate-pulse" />
            <div className="w-4/5 h-3.5 sm:h-4 rounded-lg bg-white/10 animate-pulse" />
          </div>
        </div>

        {/* Spacer for desktop layout balance */}
        <div className="hidden lg:block lg:col-span-1 xl:col-span-2" />

        {/* Right Floating Social Proof Pill Skeleton (desktop) */}
        <div className="hidden lg:flex lg:col-span-4 xl:col-span-4 flex-col items-end justify-start space-y-3">
          <div className="w-56 h-16 rounded-2xl bg-white/10 border border-white/15 p-3 flex items-center justify-between animate-pulse">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-[#0e1d11]" />
              <div className="w-8 h-8 rounded-full bg-white/25 border-2 border-[#0e1d11]" />
              <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-[#0e1d11]" />
            </div>
            <div className="space-y-1.5 text-right">
              <div className="w-12 h-4 rounded bg-[#fae788]/30 ml-auto" />
              <div className="w-24 h-2.5 rounded bg-white/15 ml-auto" />
            </div>
          </div>
          <div className="w-36 h-10 rounded-full bg-[#fae788]/20 border border-[#fae788]/30 animate-pulse" />
        </div>
      </div>

      {/* Bottom Row: 4 Skeleton Treatment Cards Matching Live Card Theme */}
      <div className="relative z-10 w-full max-w-full min-w-0 pt-3 sm:pt-6">
        <div className="w-full max-w-full flex items-end justify-start lg:justify-between overflow-x-auto lg:overflow-visible pb-3 sm:pb-0 gap-4 snap-x snap-mandatory no-scrollbar">
          
          {/* Pair 1: Skeletons 1 & 2 */}
          <div className="flex items-end gap-2.5 sm:gap-4 shrink-0 w-full sm:w-auto lg:w-auto snap-start">
            {[0, 1].map((idx) => (
              <div
                key={`skeleton-card-left-${idx}`}
                className="shrink-0 flex-1 min-w-0 sm:flex-initial sm:w-[200px] md:w-[220px] bg-white/95 backdrop-blur-xl rounded-[22px] p-2.5 sm:p-3 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white flex flex-col justify-between"
              >
                {/* Image Placeholder */}
                <div className="w-full h-22 sm:h-26 rounded-xl bg-gray-200 overflow-hidden relative animate-pulse flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-300" />
                </div>

                {/* Content Placeholder */}
                <div className="mt-2 space-y-1.5">
                  <div className="w-4/5 h-3.5 rounded bg-gray-300 animate-pulse" />
                  <div className="w-3/5 h-2.5 rounded bg-gray-200 animate-pulse" />

                  {/* Footer Placeholder */}
                  <div className="pt-2.5 mt-1 border-t border-gray-100 flex items-center justify-between">
                    <div className="w-12 h-3 rounded bg-gray-200 animate-pulse" />
                    <div className="w-16 h-6 rounded-full bg-gray-300 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pair 2: Skeletons 3 & 4 */}
          <div className="flex items-end gap-2.5 sm:gap-4 shrink-0 w-full sm:w-auto lg:w-auto lg:ml-auto snap-start">
            {[2, 3].map((idx) => (
              <div
                key={`skeleton-card-right-${idx}`}
                className="shrink-0 flex-1 min-w-0 sm:flex-initial sm:w-[200px] md:w-[220px] bg-white/95 backdrop-blur-xl rounded-[22px] p-2.5 sm:p-3 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white flex flex-col justify-between"
              >
                {/* Image Placeholder */}
                <div className="w-full h-22 sm:h-26 rounded-xl bg-gray-200 overflow-hidden relative animate-pulse flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-300" />
                </div>

                {/* Content Placeholder */}
                <div className="mt-2 space-y-1.5">
                  <div className="w-4/5 h-3.5 rounded bg-gray-300 animate-pulse" />
                  <div className="w-3/5 h-2.5 rounded bg-gray-200 animate-pulse" />

                  {/* Footer Placeholder */}
                  <div className="pt-2.5 mt-1 border-t border-gray-100 flex items-center justify-between">
                    <div className="w-12 h-3 rounded bg-gray-200 animate-pulse" />
                    <div className="w-16 h-6 rounded-full bg-gray-300 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
