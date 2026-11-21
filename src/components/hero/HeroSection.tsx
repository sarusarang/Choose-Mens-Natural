import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CountUp } from '../common/CountUp';
import { HERO_TREATMENTS } from '../../data/products';
import type { Product } from '../../types/product';
import { useHeroBanner, useServicePackages } from '../../hooks/useAaramamApi';
import { resolveMediaUrl } from '../../lib/apiClient';
import { mapServiceListItemToProduct } from '../../lib/adapters';
import { HeroSkeletonLoader } from './HeroSkeletonLoader';

interface HeroTreatmentCardProps {
  treatment: Product;
  index: number;
  floatClass: string;
}

const HeroTreatmentCard: React.FC<HeroTreatmentCardProps> = ({
  treatment,
  index,
  floatClass,
}) => {
  const navigate = useNavigate();
  const fallbackImage = HERO_TREATMENTS[index]?.image || '/images/treatment_mother_care_1794639745090.jpg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.1,
        delay: 0.45 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      onClick={() => navigate('/services')}
      role="link"
      tabIndex={0}
      className={`${floatClass} shrink-0 flex-1 min-w-0 sm:flex-initial sm:w-[200px] md:w-[220px] bg-white/95 backdrop-blur-xl rounded-[22px] p-2.5 sm:p-3 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white flex flex-col justify-between transition-all duration-300 transform-gpu will-change-transform cursor-pointer`}
    >
      <Link
        to="/services"
        onClick={(e) => e.stopPropagation()}
        className="w-full h-22 sm:h-26 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl group relative bg-[#f2f6f1]"
      >
        <img
          src={treatment.image}
          alt={treatment.name}
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />
      </Link>

      <div className="mt-2 space-y-1">
        <Link
          to="/services"
          onClick={(e) => e.stopPropagation()}
          className="text-[11.5px] sm:text-xs font-bold font-heading text-[#1a251b] leading-tight line-clamp-1 hover:text-[#b18137] cursor-pointer block"
          title={treatment.name}
        >
          {treatment.name}
        </Link>
        <p className="text-[9.5px] text-[#556956] line-clamp-1 leading-snug">
          {treatment.subtitle}
        </p>

        {/* Clean, Non-Squeezed Footer with Pin & Explore Button to Service Page */}
        <div className="pt-2.5 mt-1 border-t border-gray-100 flex items-center justify-between gap-1.5">
          <div className="flex items-center space-x-1 min-w-0 pr-1 text-[#637664]">
            <MapPin className="w-2.5 h-2.5 text-[#d4a034] shrink-0" />
            <span
              className="text-[10px] font-semibold truncate"
              title={treatment.location}
            >
              {treatment.location ? treatment.location.split(',')[0].trim() : 'Feroke'}
            </span>
          </div>
          <Link
            to="/services"
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#112314] to-[#1e3b22] hover:from-[#1e3b22] hover:to-[#2b5030] text-[#fae788] text-[10px] sm:text-[10.5px] font-bold tracking-wide transition-all cursor-pointer shadow-sm flex items-center space-x-1 hover:shadow-md hover:scale-105 active:scale-95 group/btn"
          >
            <span>Explore</span>
            <ArrowRight className="w-3 h-3 text-[#fae788] group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const HeroSection: React.FC = () => {
  const { data: bannerData, isLoading: isBannerLoading, isError: isBannerError } = useHeroBanner();
  // Fetch packages from live services API
  const { data: packagesData } = useServicePackages();

  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  // Pre-load the active banner image when bannerData arrives to avoid any flash of unstyled content
  useEffect(() => {
    if (bannerData?.image_url || bannerData?.image) {
      const url = resolveMediaUrl(bannerData.image_url || bannerData.image);
      const img = new Image();
      img.src = url;
      img.onload = () => setHeroImageLoaded(true);
      img.onerror = () => setHeroImageLoaded(true);
    } else if (isBannerError) {
      setHeroImageLoaded(true);
    }
  }, [bannerData, isBannerError]);

  // Show full branded sanctuary suspense loader while banner is fetching on initial load or reload
  const showHeroLoader = isBannerLoading || (!heroImageLoaded && Boolean(bannerData?.image_url || bannerData?.image));

  // Map backend packages directly from API; fallback to HERO_TREATMENTS only if API is empty/offline
  const treatments: Product[] = React.useMemo<Product[]>(() => {
    const rawList = Array.isArray(packagesData)
      ? packagesData
      : (packagesData as any)?.results || [];
    if (rawList.length > 0) {
      return rawList.slice(0, 4).map(mapServiceListItemToProduct);
    }
    return HERO_TREATMENTS;
  }, [packagesData]);

  // Dynamic hero content with sanctuary fallbacks - format title into two lines
  const { titleLine1, titleLine2 } = React.useMemo(() => {
    const rawTitle = (bannerData?.title || 'Motherhood Begins with Love and Care.').trim();

    // Check for explicit newline
    if (rawTitle.includes('\n')) {
      const parts = rawTitle.split('\n');
      return { titleLine1: parts[0].trim(), titleLine2: parts.slice(1).join(' ').trim() };
    }

    // Check for " with " keyword
    if (rawTitle.includes(' with ')) {
      const idx = rawTitle.indexOf(' with ');
      return {
        titleLine1: rawTitle.slice(0, idx).trim(),
        titleLine2: rawTitle.slice(idx + 1).trim(),
      };
    }

    // Check for " and " keyword
    if (rawTitle.includes(' and ')) {
      const idx = rawTitle.indexOf(' and ');
      return {
        titleLine1: rawTitle.slice(0, idx).trim(),
        titleLine2: rawTitle.slice(idx + 1).trim(),
      };
    }

    // Fallback: split words in half
    const words = rawTitle.split(/\s+/);
    if (words.length <= 2) {
      return { titleLine1: words[0] || '', titleLine2: words.slice(1).join(' ') };
    }
    const mid = Math.ceil(words.length / 2);
    return {
      titleLine1: words.slice(0, mid).join(' '),
      titleLine2: words.slice(mid).join(' '),
    };
  }, [bannerData?.title]);

  const heroDescription =
    bannerData?.description ||
    'Providing Gentle Ayurvedic Care, Comfort And Nurturing Support For Every New Mother And Baby.';

  const heroImage = bannerData
    ? resolveMediaUrl(bannerData.image_url || bannerData.image, '/new-hero-new.webp')
    : '/new-hero-new.webp';

  const statNumber = bannerData?.stat_number ? parseInt(bannerData.stat_number, 10) || 100 : 100;
  const statLabel = bannerData?.stat_label || 'Rejuvenated Guests\nClassical Ayurvedic Care';

  // If loading or image is downloading, display ONLY the dedicated Skeleton Loader
  if (showHeroLoader) {
    return (
      <section id="home" className="relative w-full max-w-full min-w-full min-h-screen lg:h-screen overflow-hidden bg-[#0e1d11]">
        <HeroSkeletonLoader />
      </section>
    );
  }

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-full min-w-full min-h-screen lg:h-screen overflow-hidden bg-[#0e1d11] flex flex-col justify-between"
    >
      {/* Background Model Photography fitted seamlessly inside Hero Banner */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full">
          {heroImage && (
            <img
              src={heroImage}
              alt="Authentic Ayurvedic postnatal healing sanctuary"
              className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05]"
            />
          )}

          {/* Deepened Sanctuary Scrim: Decreased background intensity for prominent text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1d11]/70 via-transparent to-[#0e1d11]/55 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d11]/90 via-transparent to-[#0e1d11]/45 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4a034]/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Hero Body Content Container */}
      <div className="relative z-10 w-full max-w-full min-w-0 flex-1 flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 pt-20 sm:pt-24 md:pt-28 pb-6 md:pb-8">
        
        {/* Top/Mid Row: Headline and Right Social Proof Badge */}
        <div className="w-full max-w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start my-auto lg:my-0">
          
          {/* Headline & Description */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-3 md:space-y-4 text-left flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-full text-left"
            >
              <h1 className="text-[28px] xs:text-[34px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[62px] font-black tracking-[-0.035em] leading-[1.1] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)] text-left">
                <span className="block whitespace-normal sm:whitespace-nowrap">
                  {titleLine1}
                </span>
                {titleLine2 && (
                  <span className="block whitespace-normal sm:whitespace-nowrap font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fae788] to-[#d4a034]">
                    {titleLine2}
                  </span>
                )}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[460px] text-xs sm:text-sm md:text-[15px] text-white/90 font-medium leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] text-left"
            >
              {heroDescription}
            </motion.p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1 xl:col-span-2" />

          {/* Right Social Proof Floating Pill & Book Treatment CTA */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-4 flex-col items-end justify-start">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start space-y-2 bg-transparent p-0 rounded-none border-none shadow-none"
            >
              {/* 3 Overlapped Avatars */}
              <div className="flex -space-x-2.5 items-center">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#d4a034]/70 overflow-hidden shadow-sm">
                  <img src="/images/avatar-1.jpg" alt="Ayurveda guest review" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#d4a034]/70 overflow-hidden shadow-sm">
                  <img src="/images/avatar-2.jpg" alt="Ayurveda guest review" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#d4a034]/70 overflow-hidden shadow-sm">
                  <img src="/images/avatar-3.jpg" alt="Ayurveda guest review" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Stat 100+ with Animated Count Up */}
              <div className="text-left">
                <span className="text-2xl sm:text-[28px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fae788] to-[#d4a034] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] inline-block">
                  <CountUp end={statNumber} duration={2.0} suffix="+" />
                </span>
                <p className="text-xs sm:text-[13px] font-medium text-white/95 leading-snug drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] whitespace-pre-line">
                  {statLabel}
                </p>
              </div>

              {/* Book Treatment Pill */}
              <motion.a
                href="https://wa.me/917034641282?text=Hello%20Aaramam%20Ayurveda%2C%20I%20would%20like%20to%20enquire%20about%20your%20Ayurvedic%20postnatal%20care%20packages."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 14px 30px rgba(212,160,52,0.3)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="mt-1 flex items-center space-x-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-white via-[#fffef7] to-[#fae788] text-[#112314] font-bold text-xs sm:text-[13px] shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-[#d4a034]/40 group cursor-pointer transition-all"
              >
                <span className="tracking-tight font-heading font-bold">Enquire Now</span>
                <div className="w-7 h-7 rounded-full bg-[#112314] flex items-center justify-center text-[#fae788] group-hover:bg-[#203c23] transition-colors">
                  <Calendar className="w-3.5 h-3.5 text-[#fae788]" />
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Floating Compact Treatment Cards Row */}
        <div className="relative z-10 w-full max-w-full min-w-0 pt-3 sm:pt-6">
          {/* Mobile Swipe Hint */}
          <div className="lg:hidden flex items-center justify-between mb-2 px-0.5 text-[11px] font-heading text-white/80 select-none">
            <span className="text-[#fae788] font-bold">
              Signature Care Programs
            </span>
            <span className="text-[10px] text-white/60 tracking-wider">Swipe →</span>
          </div>

          <div className="w-full max-w-full flex items-end justify-start lg:justify-between overflow-x-auto lg:overflow-visible pb-3 sm:pb-0 gap-4 snap-x snap-mandatory no-scrollbar touch-momentum">
            
            {/* Left Pair: Treatments 1 & 2 */}
            <div className="flex items-end gap-2.5 sm:gap-4 shrink-0 w-full sm:w-auto lg:w-auto snap-start">
              {treatments.slice(0, 2).map((item: Product, idx: number) => (
                <HeroTreatmentCard
                  key={item.id || `treatment-${idx}`}
                  treatment={item}
                  index={idx}
                  floatClass={idx === 0 ? 'card-float-1' : 'card-float-2'}
                />
              ))}
            </div>

            {/* Right Pair: Treatments 3 & 4 */}
            <div className="flex items-end gap-2.5 sm:gap-4 shrink-0 w-full sm:w-auto lg:w-auto lg:ml-auto snap-start">
              {treatments.slice(2, 4).map((item: Product, idx: number) => (
                <HeroTreatmentCard
                  key={item.id || `treatment-${idx + 2}`}
                  treatment={item}
                  index={idx + 2}
                  floatClass={idx === 0 ? 'card-float-3' : 'card-float-1'}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
};
