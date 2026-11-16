import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface CommunityCapsule {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
}

export const JoinCommunitySection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const capsules: CommunityCapsule[] = [
    {
      id: 'capsule-1',
      title: 'Ayurvedic Postnatal Care',
      subtitle: 'Sacred warm herbal thailam & postpartum recovery',
      image: '/cta-1.jpeg',
      badge: '01 • Postnatal Care',
    },
    {
      id: 'capsule-2',
      title: 'Mother & Baby Nurture',
      subtitle: 'Continuous warm herbal care for mother and newborn',
      image: '/cta-2.jpeg',
      badge: '02 • Mother & Baby',
    },
    {
      id: 'capsule-3',
      title: 'Restorative Therapies',
      subtitle: 'Traditional Ayurvedic postpartum wellness',
      image: '/cta-3.jpeg',
      badge: '03 • Restorative Care',
    },
    {
      id: 'capsule-4',
      title: 'Sanctuary Healing',
      subtitle: 'Classical healing & maternal rejuvenation',
      image: '/cta-4.jpeg',
      badge: '04 • Healing Sanctuary',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="contact-us" className="py-6 sm:py-8 md:py-10 bg-[#ffffff] relative overflow-hidden">
      <div id="community" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Composition Container */}
        <div className="max-w-[1140px] mx-auto relative">
          
          {/* 4 Separate Animated Capsule Columns: Temple Sanctuary Windows */}
          <div className="flex md:grid md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-end justify-center overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-none snap-x px-2">
            {capsules.map((capsule, index) => (
              <motion.div
                key={capsule.id}
                initial={{ opacity: 0, y: 55, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 1.15,
                  delay: index * 0.16,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                className="group relative w-[130px] xs:w-[150px] sm:w-[180px] md:w-full shrink-0 md:shrink h-[230px] xs:h-[260px] sm:h-[330px] md:h-[390px] lg:h-[440px] rounded-[36px] xs:rounded-[44px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[90px] overflow-hidden bg-[#eef3ed] shadow-[0_6px_20px_rgba(20,35,22,0.06)] hover:shadow-[0_18px_38px_rgba(20,35,22,0.16)] border border-[#d4a034]/20 hover:border-[#d4a034]/50 transition-all duration-500 cursor-pointer snap-center"
              >
                {/* Capsule Image */}
                <img
                  src={capsule.image}
                  alt={capsule.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Subtle Luxury Inner Shadow & Rim */}
                <div className="absolute inset-0 rounded-[36px] xs:rounded-[44px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[90px] ring-1 ring-black/8 pointer-events-none" />
                
                {/* Soft Bottom Gradient for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />

                {/* Top Floating Badge on Hover */}
                <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-10 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#112314]/85 backdrop-blur-md text-[#fae788] border border-[#d4a034]/40 text-[10px] font-bold tracking-wide shadow-md">
                    <Sparkles className="w-2.5 h-2.5 text-[#d4a034]" />
                    <span>{capsule.badge}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Beige Stadium Card Overlapping the Bottom of the 4 Capsules */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 45 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.25, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 -mt-14 sm:-mt-20 md:-mt-24 lg:-mt-28 max-w-[94%] sm:max-w-[540px] md:max-w-[600px] lg:max-w-[650px] mx-auto bg-[#eee8df] rounded-[34px] sm:rounded-[52px] md:rounded-[60px] p-5 sm:p-7 md:p-9 text-center shadow-[0_16px_45px_rgba(20,35,22,0.12)] border border-[#d4a034]/30"
          >
            {/* Title */}
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-[36px] text-[#111c13] tracking-tight leading-tight">
              Begin Your Healing Journey
            </h2>

            {/* Subtitle */}
            <p className="text-[11.5px] sm:text-xs md:text-[13px] text-[#555d56] leading-relaxed max-w-[460px] mx-auto mt-1.5 sm:mt-2">
              Receive personalized Ayurvedic wellness wisdom, seasonal dosha lifestyle guidance, and exclusive clinic consultation privileges delivered straight to your inbox.
            </p>

            {/* Newsletter Subscription Bar */}
            <div className="mt-3.5 sm:mt-4 md:mt-5">
              <AnimatePresence mode="wait">
                {isSubscribed ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#112314] text-[#fae788] border border-[#d4a034]/50 text-xs sm:text-sm font-medium shadow-md"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#d4a034] shrink-0" />
                    <span>Thank you! Our care team will connect with you shortly.</span>
                  </motion.div>
                ) : (
                  <form
                    key="form"
                    onSubmit={handleSubmit}
                    className="bg-[#112314] rounded-full p-1 sm:p-1.5 pl-4 sm:pl-5 flex items-center justify-between w-full max-w-[320px] sm:max-w-[360px] md:max-w-[410px] mx-auto shadow-md border border-[#d4a034]/40 transition-all focus-within:shadow-xl focus-within:border-[#fae788]/70"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="bg-transparent text-white placeholder-neutral-400 text-xs sm:text-sm font-sans focus:outline-none flex-1 min-w-0 pr-2"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#d4a034] via-[#fae788] to-[#b18137] hover:brightness-105 active:scale-95 text-[#112314] font-bold font-heading text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-200 cursor-pointer shrink-0 shadow-sm"
                    >
                      Enquire
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
