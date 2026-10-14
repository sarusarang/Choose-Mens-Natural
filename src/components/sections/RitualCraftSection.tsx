import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Leaf, Shield, Award, Sparkles } from 'lucide-react';

export const RitualCraftSection: React.FC = () => {
  const steps = [
    {
      icon: Leaf,
      title: 'Solar-Infused Botanical Oils',
      desc: 'Cold-pressed extra virgin olive oil and unrefined Ghana shea butter infused with whole chamomile and centella flowers.',
    },
    {
      icon: Droplet,
      title: 'Gentle Low-Temp Saponification',
      desc: 'Hand-blended below 105°F to preserve delicate plant antioxidants, fat-soluble vitamins, and vital amino acids.',
    },
    {
      icon: Shield,
      title: 'Natural Glycerin Retention',
      desc: 'Unlike industrial soap factories that strip glycerin for cosmetics, 100% of nourishing plant glycerin stays in every bar.',
    },
    {
      icon: Award,
      title: '6-Week Wooden Rack Curing',
      desc: 'Slowly cured in cedarwood curing racks for optimal pH balance, resulting in a dense, creamy, long-lasting lather.',
    },
  ];

  return (
    <section id="ritual" className="py-16 md:py-24 bg-[#dbe4da]/60 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/80 text-[#213322] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Cold-Process Difference</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#152316] tracking-tight"
          >
            Why Your Skin Craves Natural Soap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-[#475748]"
          >
            Commercial body washes and synthetic detergent bars compromise your skin's acid mantle. Our artisan bath bars nourish and restore it with every lather.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="bg-white/85 backdrop-blur-md rounded-[26px] p-6 border border-white shadow-[0_10px_25px_rgba(20,35,21,0.05)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#edf3ed] text-[#2b412d] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#172218] mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4e5c4f] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-[11px] font-bold text-[#354f37]">
                  <span>Step 0{idx + 1} of Ritual</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
