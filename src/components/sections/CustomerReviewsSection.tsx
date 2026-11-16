import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Sparkles, Quote } from 'lucide-react';

export const CustomerReviewsSection: React.FC = () => {
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
    <section id="feedback" className="pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6 md:pb-6 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto relative">
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

      {/* Modern Stunning Ayurvedic Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        {reviews.map((rev, idx) => (
          <motion.div
            key={rev.name}
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.15, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            className="group relative p-7 sm:p-8 rounded-[32px] bg-white/95 backdrop-blur-xl border-2 border-[#d4a034]/25 hover:border-[#d4a034]/60 shadow-[0_12px_36px_rgba(20,38,22,0.06)] hover:shadow-[0_22px_50px_rgba(20,35,22,0.14)] transition-all duration-400 flex flex-col justify-between"
          >
            {/* Top Row: Stars & Verified Guest Badge */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1 text-[#d4a034]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4a034] text-[#d4a034]" />
                  ))}
                </div>

                <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#112314] text-[#fae788] border border-[#d4a034]/40 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  <CheckCircle className="w-3 h-3 text-[#d4a034]" />
                  <span>Verified Guest</span>
                </div>
              </div>

              {/* Decorative Subtle Quote Icon */}
              <Quote className="w-8 h-8 text-[#d4a034]/25 -mb-2 group-hover:text-[#d4a034]/45 transition-colors" />

              {/* Treatment Pill */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#f4f7f3] border border-[#dbe6da] text-[#244227] text-xs font-semibold mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a034]" />
                <span className="line-clamp-1">{rev.product}</span>
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-[14.5px] text-[#3d4d3f] leading-relaxed font-normal">
                "{rev.text}"
              </p>
            </div>

            {/* Author Profile Footer */}
            <div className="mt-7 pt-5 border-t border-[#d4a034]/20 flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#d4a034]/60 shadow-md ring-2 ring-[#122314]/10 shrink-0">
                <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-[15px] font-heading font-extrabold text-[#112314] leading-snug">
                  {rev.name}
                </h4>
                <p className="text-xs font-medium text-[#657766] mt-0.5">
                  {rev.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
