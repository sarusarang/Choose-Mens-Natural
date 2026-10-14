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
      id: 'glow',
      title: 'Botanical Radiance',
      subtitle: 'Pure plant nectar for dewy morning glow',
      image: '/images/hero-model.jpg',
      badge: '01 â€¢ Radiant Skin',
    },
    {
      id: 'lavender',
      title: 'Cold-Pressed Soap',
      subtitle: 'Wild lavender & soothing chamomile bar',
      image: '/images/product-lavender-bar.jpg',
      badge: '02 â€¢ Artisanal Soap',
    },
    {
      id: 'matcha',
      title: 'Ceremonial Matcha',
      subtitle: 'Antioxidant detox & clarifying ritual',
      image: '/images/product-matcha-bar.jpg',
      badge: '03 â€¢ Organic Detox',
    },
    {
      id: 'cleanser',
      title: 'Restorative Care',
      subtitle: 'Gentle honey & wild flora cleanser',
      image: '/images/category-facewashes.jpg',
      badge: '04 â€¢ Pure Cleanse',
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
    <section id="community" className="py-6 sm:py-8 md:py-10 bg-[#ffffff] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Composition Container */}
        <div className="max-w-[1140px] mx-auto relative">
          
          {/* 4 Separate Animated Capsule Columns According to Website */}
          <div className="flex md:grid md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-end justify-center overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-none snap-x px-2">
            {capsules.map((capsule, index) => (
              <motion.div
                key={capsule.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative w-[130px] xs:w-[150px] sm:w-[180px] md:w-full shrink-0 md:shrink h-[230px] xs:h-[260px] sm:h-[330px] md:h-[390px] lg:h-[440px] rounded-[36px] xs:rounded-[44px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[90px] overflow-hidden bg-[#f0eae1] shadow-[0_6px_20px_rgba(20,35,22,0.06)] hover:shadow-[0_16px_36px_rgba(20,35,22,0.14)] transition-all duration-500 cursor-pointer snap-center"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />

                {/* Top Floating Badge on Hover */}
                <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-10 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-medium tracking-wide">
                    <Sparkles className="w-2.5 h-2.5 text-emerald-300" />
                    <span>{capsule.badge}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Beige Stadium Card Overlapping the Bottom of the 4 Capsules */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 -mt-14 sm:-mt-20 md:-mt-24 lg:-mt-28 max-w-[94%] sm:max-w-[540px] md:max-w-[600px] lg:max-w-[650px] mx-auto bg-[#eee8df] rounded-[34px] sm:rounded-[52px] md:rounded-[60px] p-5 sm:p-7 md:p-9 text-center shadow-[0_16px_45px_rgba(20,35,22,0.12)] border border-[#e2dacf]/70"
          >
            {/* Title */}
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[36px] text-[#111c13] tracking-tight leading-tight">
              Join the Community
            </h2>

            {/* Subtitle */}
            <p className="text-[11.5px] sm:text-xs md:text-[13px] text-[#555d56] leading-relaxed max-w-[460px] mx-auto mt-1.5 sm:mt-2">
              Join our community and be the first to receive exclusive offers, expert skincare tips, and early access to exciting new product launchesâ€”delivered straight to your inbox.
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
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-black text-white text-xs sm:text-sm font-medium shadow-md"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>You're in! Welcome to the choosemenatural community.</span>
                  </motion.div>
                ) : (
                  <form
                    key="form"
                    onSubmit={handleSubmit}
                    className="bg-black rounded-full p-1 sm:p-1.5 pl-4 sm:pl-5 flex items-center justify-between w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] mx-auto shadow-md transition-all focus-within:shadow-xl focus-within:ring-2 focus-within:ring-black/20"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      className="bg-transparent text-white placeholder-neutral-400 text-xs sm:text-sm font-sans focus:outline-none flex-1 min-w-0 pr-2"
                    />
                    <button
                      type="submit"
                      className="bg-white hover:bg-neutral-100 active:scale-95 text-black font-semibold font-heading text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-200 cursor-pointer shrink-0"
                    >
                      Subscribe
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

