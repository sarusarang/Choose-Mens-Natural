import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

interface CustomerReviewsSectionProps {
  showFeedbackButton?: boolean;
}

export const CustomerReviewsSection: React.FC<CustomerReviewsSectionProps> = ({
  showFeedbackButton = true,
}) => {
  const reviews = [
    {
      name: 'Dr. Clara Vance',
      role: 'Integrative Medicine & Holistic Physician',
      avatar: '/images/avatar-1.jpg',
      rating: 5,
      product: 'Abhyanga Herbal Body Therapy',
      text: 'Experiencing the synchronized Abhyanga with warm Dhanwantharam thailam completely relieved my chronic lower back stiffness and nervous fatigue. The classical rhythmic strokes and authentic herbal decoctions are truly world-class.'
    },
    {
      name: 'Marcus K.',
      role: 'Verified Sanctuary Guest • London, UK',
      avatar: '/images/avatar-2.jpg',
      rating: 5,
      product: 'Shirodhara Medicated Oil Stream',
      text: 'Shirodhara here is transcendent. After months of chronic insomnia and mental burnout, a single 45-minute continuous warm oil stream session brought immediate mental stillness and the deepest sleep I have had in years.'
    },
    {
      name: 'Elena Rostova',
      role: 'Holistic Spa & Wellness Director',
      avatar: '/images/avatar-3.jpg',
      rating: 5,
      product: 'Herbal Kizhi & Panchakarma Detox',
      text: 'The Herbal Kizhi poultice fomentation and Panchakarma protocols follow authentic Kerala Ayurvedic traditions with meticulous precision. My joint inflammation resolved, and my bodily vitality feels completely renewed.'
    }
  ];

  return (
    <section id="feedback" className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto relative">
      <div id="reviews" className="absolute -top-24 left-0 pointer-events-none" />
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#d4a034]/40 text-[#122314] text-xs font-extrabold uppercase tracking-widest mb-3.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4a034]" />
          <span>Sacred Healing Journeys</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[#152316] tracking-tight leading-[1.12]"
        >
          Loved by <span className="font-serif italic text-[#25462c] font-normal">Wellness Seekers</span> Worldwide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3.5 text-sm sm:text-base text-[#465648] leading-relaxed max-w-xl mx-auto"
        >
          Read authentic healing experiences from guests who restored balance, vitality, and deep peace through classical Ayurvedic treatments at Aaramam Sanctuary.
        </motion.p>
      </div>

      {/* Modern Stunning Ayurvedic Testimonial Cards (Overlapping Avatar & Flanking Quotes) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 md:gap-y-0 md:gap-x-7 mt-16 sm:mt-20">
        {reviews.map((rev, idx) => (
          <motion.div
            key={rev.name}
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.0, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            className="group relative flex flex-col justify-between rounded-[36px] bg-gradient-to-b from-[#18341d] to-[#0f2113] p-7 sm:p-8 pt-16 sm:pt-20 border border-[#d4a034]/35 hover:border-[#fae788]/60 shadow-[0_18px_45px_rgba(14,29,17,0.22)] hover:shadow-[0_26px_60px_rgba(14,29,17,0.36)] transition-all duration-500 text-center"
          >
            {/* Ambient Background Gold Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-[#d4a034]/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-[#d4a034]/20 transition-all duration-700" />

            {/* Top Overlapping Avatar & Flanking Quotation Marks */}
            <div className="absolute -top-14 sm:-top-16 left-0 right-0 flex items-center justify-center pointer-events-none z-20">
              
              {/* Left Quotation Mark */}
              <div className="mr-3 sm:mr-4 text-white/85 group-hover:text-[#fae788] transition-all duration-400 group-hover:-translate-x-1 drop-shadow-sm">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Central Circular Avatar */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#18341d] ring-4 ring-[#d4a034]/40 group-hover:ring-[#fae788] shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-105 pointer-events-auto bg-[#18341d] shrink-0">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Right Quotation Mark (mirrored horizontally) */}
              <div className="ml-3 sm:ml-4 text-white/85 group-hover:text-[#fae788] transition-all duration-400 group-hover:translate-x-1 drop-shadow-sm">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current transform scale-x-[-1]" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

            </div>

            {/* Top Info: Stars & Treatment Badge */}
            <div className="relative z-10 flex flex-col items-center space-y-2.5 mb-4">
              {/* Star Rating */}
              <div className="flex items-center space-x-1 text-[#fae788]">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#fae788] text-[#fae788] drop-shadow-xs" />
                ))}
              </div>

              {/* Treatment Pill */}
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#d4a034]/35 text-[#fae788] text-[11px] font-semibold tracking-wide shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fae788] animate-pulse" />
                <span className="line-clamp-1">{rev.product}</span>
              </div>
            </div>

            {/* Testimonial Quote Body */}
            <div className="relative z-10 flex-1 flex items-center justify-center my-3 px-1 sm:px-2">
              <p className="text-[13.5px] sm:text-[14.5px] text-[#e3ece2] leading-relaxed font-normal italic">
                "{rev.text}"
              </p>
            </div>

            {/* Reviewer Identity Footer */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex flex-col items-center justify-center space-y-1">
              <h4 className="text-base sm:text-[17px] font-heading font-extrabold text-white tracking-wide group-hover:text-[#fae788] transition-colors">
                {rev.name}
              </h4>
              <div className="flex items-center space-x-1.5 text-xs text-[#9eb5a0] font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[#fae788]" />
                <span>{rev.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Button: Link to Feedback Page */}
      {showFeedbackButton && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 flex justify-center"
        >
          <Link
            to="/feedback"
            className="inline-flex items-center space-x-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#112314] hover:bg-[#18341c] text-[#fae788] border border-[#d4a034]/40 hover:border-[#fae788] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_10px_25px_rgba(17,35,20,0.18)] hover:shadow-[0_16px_35px_rgba(17,35,20,0.28)] hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <span>View All Guest Feedback</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#d4a034] group-hover:text-[#fae788]" />
          </Link>
        </motion.div>
      )}
    </section>
  );
};
