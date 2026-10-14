import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const CustomerReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Dr. Clara Vance',
      role: 'Dermatology Resident & Holistic Skincare Advocate',
      avatar: '/images/avatar-1.jpg',
      rating: 5,
      product: 'Matcha & Eucalyptus Cold-Process Soap Bar',
      text: 'Switching from bottled body wash filled with sodium laureth sulfate to this artisanal cold-process matcha bar was life-changing for my winter eczema. The creamy lather leaves skin deeply moisturized without any tight, itchy residue.'
    },
    {
      name: 'Marcus K.',
      role: 'Verified Customer â€¢ London, UK',
      avatar: '/images/avatar-2.jpg',
      rating: 5,
      product: 'Centella Asiatica Facial Serum',
      text: 'The Centella nectar soothes redness like magic. I use it immediately after taking a hot bath with the lavender oat bar. My skin feels plumper, calmer, and has an effortless glass-skin glow all day.'
    },
    {
      name: 'Elena Rostova',
      role: 'Esthetician & Spa Owner',
      avatar: '/images/avatar-3.jpg',
      rating: 5,
      product: 'Wild Lavender & Oat Calming Bath Soap Bar',
      text: 'The subtle aromatherapeutic lavender and silky oat milk makes evening bath time feel like a 5-star Kyoto bathhouse ritual. My whole family has switched to choosemenatural cold-process bars exclusively.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#dce7db] text-[#243a26] text-xs font-bold uppercase tracking-wider mb-3"
        >
          <Quote className="w-3.5 h-3.5" />
          <span>750,000+ Happy Skin Stories</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[#152316] tracking-tight"
        >
          Loved by Sensitive Skin Purists
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-sm sm:text-base text-[#465648]"
        >
          Read unfiltered experiences from our growing community of conscious bathers and skincare enthusiasts worldwide.
        </motion.p>
      </div>

      {/* Reviews Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        {reviews.map((rev, idx) => (
          <motion.div
            key={rev.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -6 }}
            className="p-7 rounded-[30px] bg-white border border-white/80 shadow-[0_12px_30px_rgba(20,35,22,0.06)] flex flex-col justify-between"
          >
            <div>
              {/* Stars & Verified */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="flex items-center space-x-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified Buyer</span>
                </div>
              </div>

              {/* Product tag */}
              <p className="text-xs font-bold text-[#2d4230] mb-3">
                Purchased: <span className="underline">{rev.product}</span>
              </p>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-[#465548] leading-relaxed italic">
                "{rev.text}"
              </p>
            </div>

            {/* Author */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#142115] leading-snug">{rev.name}</h4>
                <p className="text-[11px] text-gray-500">{rev.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

