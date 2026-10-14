import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flower2, Send, CheckCircle2, ShieldCheck, RefreshCw } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="contact-us" className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="rounded-[36px] md:rounded-[44px] bg-[#1e2d20] text-white p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
        
        {/* Soft Background Botanical Bloom decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#2e4732]/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#345239]/40 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Promise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#2f4933] text-[#b3d4b6] text-xs font-bold uppercase tracking-wider">
              <Flower2 className="w-3.5 h-3.5" />
              <span>Plantable Seed Paper Packaging</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Every Soap Bar Gives Life to Wildflowers
            </h2>

            <p className="text-sm sm:text-base text-[#c4d6c6] leading-relaxed max-w-xl">
              Our paper bands are embedded with non-GMO chamomile and lavender seeds. After unwrapping your artisanal soap bar, plant the label in soil, water gently, and watch pollinator-friendly blossoms sprout.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center space-x-2 text-[#d2e3d3]">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Plastic Bottles</span>
              </div>
              <div className="flex items-center space-x-2 text-[#d2e3d3]">
                <RefreshCw className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Carbon Neutral</span>
              </div>
              <div className="flex items-center space-x-2 text-[#d2e3d3]">
                <Flower2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Supports Pollinators</span>
              </div>
            </div>
          </motion.div>

          {/* Right Newsletter Signup Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-[32px] border border-white/15"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Join the Botanical Bath Club
            </h3>
            <p className="text-xs sm:text-sm text-[#bed0c0] mb-6">
              Subscribe to receive exclusive batch releases, soap-curing notes, and <span className="text-white font-bold">15% off</span> your first order.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-4 rounded-2xl bg-[#2e4732] border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-center space-x-2"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Welcome to choosemenatural! Check your inbox for your 15% discount code.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-5 py-3.5 rounded-full bg-white/15 border border-white/20 text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8bb48f] focus:bg-white/20 transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-white text-[#162418] font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg hover:bg-[#edf5ee] transition-all cursor-pointer"
                >
                  <span>Claim 15% Off Your Ritual</span>
                  <Send className="w-3.5 h-3.5" />
                </motion.button>
              </form>
            )}
            
            <p className="text-[10px] text-white/40 text-center mt-4">
              We respect your sanctuary. No spam ever. Unsubscribe anytime.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

