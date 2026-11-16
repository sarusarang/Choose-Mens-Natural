import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { CustomerReviewsSection } from '../components/sections/CustomerReviewsSection';
import { SanctuaryReelsCollageSection } from '../components/sections/SanctuaryReelsCollageSection';

export const FeedbackPage: React.FC = () => {
  const ratingMetrics = [
    { label: 'Overall Guest Satisfaction', val: '5.0 / 5.0', sub: 'Based on 750+ sanctuary stays' },
    { label: 'Doctor Attentiveness', val: '99.4%', sub: 'Round-the-clock medical care' },
    { label: 'Therapeutic Results', val: '98.8%', sub: 'Postpartum recovery & pain relief' },
    { label: 'Sanctuary Cleanliness & Ambiance', val: '100%', sub: 'Hygiene & warm living quarters' },
  ];

  return (
    <div className="w-full flex flex-col bg-[#e4eae2]">
      {/* Reusable Page Hero with Dark Sanctuary Theme, Matching Background & Scalloped Wave */}
      <PageHero
        title="Cherished Words from"
        highlightTitle="Our Guests"
        description="Explore authentic reflections from mothers, holistic wellness travelers, and families whose vitality, strength, and inner peace were restored through classical Ayurveda at Aaramam."
        breadcrumbs={[{ label: 'Guest Feedback' }]}
        highlights={['750+ Verified Mothers & Guests', 'Postnatal Recovery Stories', 'Doctor Attentiveness', 'Feroke & Worldwide']}
        bgImage="/images/treatment_shirodhara_1794639618350.jpg"
      />

      {/* Sanctuary Rating Metrics Banner */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ratingMetrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/90 backdrop-blur-md p-6 rounded-[28px] border border-[#1b3420]/10 shadow-[0_10px_30px_rgba(20,40,24,0.06)] text-center space-y-2"
            >
              <div className="flex items-center justify-center space-x-1 text-[#d4a034]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#d4a034] text-[#d4a034]" />
                ))}
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#112314]">
                {item.val}
              </h3>
              <h4 className="text-xs font-heading font-bold text-[#1b3420] uppercase tracking-wider">
                {item.label}
              </h4>
              <p className="text-xs text-[#526d55]">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <CustomerReviewsSection />

      {/* Instagram Image & Video Reel Collage Section */}
      <SanctuaryReelsCollageSection />
    </div>
  );
};
