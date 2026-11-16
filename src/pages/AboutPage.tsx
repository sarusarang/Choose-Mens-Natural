import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Award, Leaf, Compass, SunMedium, Sparkles } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { StreamlinedSkincareSection } from '../components/sections/StreamlinedSkincareSection';
import { NaturalIngredientsSection } from '../components/sections/NaturalIngredientsSection';
import { MedicalDirectorsSection } from '../components/sections/MedicalDirectorsSection';
import { JoinCommunitySection } from '../components/sections/JoinCommunitySection';

export const AboutPage: React.FC = () => {
  const coreValues = [
    {
      icon: <Award className="w-6 h-6 text-[#fae788]" />,
      title: 'Vedic Authenticity',
      desc: 'Treatments faithfully adhering to the classical Sanskrit shlokas of Charaka Samhita and Ashtanga Hridaya, preserving therapeutic potency across millennia.',
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#fae788]" />,
      title: 'Wild-Forest Botanicals',
      desc: '100% ethically wild-harvested roots, herbs, and barks sourced directly from sacred Western Ghats forests and prepared in bronze Uruli vessels.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#fae788]" />,
      title: 'Dedicated Doctor Supervision',
      desc: 'Direct continuous guidance from senior Ayurvedic medical directors, offering round-the-clock clinical monitoring for mothers, babies, and healing guests.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#fae788]" />,
      title: 'Holistic Tridosha Harmony',
      desc: 'Individualized doshic assessment to restore Vata, Pitta, and Kapha equilibrium through customized therapeutic diets, herbal baths, and medicated thailams.',
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#e4eae2]">
      {/* Reusable Page Hero with Dark Sanctuary Theme, Matching Background & Scalloped Wave */}
      <PageHero
        title="Rooted in Ancient Wisdom"
        highlightTitle="& Sacred Lineage"
        description="Discover Aaramam Ayurveda Sanctuary—where timeless Ashtavaidya traditions, certified clinical care, and Western Ghats botanicals unite to restore enduring vitality, balance, and inner stillness."
        breadcrumbs={[{ label: 'About Us' }]}
        highlights={['Ashtavaidya Lineage', 'Western Ghats Botanicals', '24/7 Clinical Nurture', 'Feroke Center, Kozhikode']}
        bgImage="/images/hero-ayurveda-sanctuary.jpg"
      />

      {/* 1st Section: Streamlined Skincare Split Banner matching exact reference */}
      <StreamlinedSkincareSection />

      {/* Sanctuary Overview Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1b3420]/10 border border-[#1b3420]/20 text-[#1b3420] text-xs font-heading font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#b18137]" />
            <span>Our Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#132415] tracking-tight">
            The Living Spirit of <span className="font-serif italic font-normal text-[#2b4c2f]">Ayurveda</span>
          </h2>
          <p className="text-base sm:text-lg text-[#405643] leading-relaxed">
            At Aaramam, healing is not an isolated procedure; it is a sacred return to nature’s pristine balance. Rooted in Feroke, Kozhikode, our sanctuary bridges ancient Vedic therapies with thoughtful, supportive living spaces for mothers, newborns, and holistic rejuvenation seekers.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {coreValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/85 backdrop-blur-md p-6 sm:p-7 rounded-[28px] border border-[#1b3420]/10 shadow-[0_10px_30px_rgba(20,40,24,0.06)] hover:shadow-[0_16px_36px_rgba(20,40,24,0.12)] transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#112314] flex items-center justify-center shadow-md mb-5 group-hover:scale-105 transition-transform">
                {val.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-[#112314] mb-2.5">
                {val.title}
              </h3>
              <p className="text-sm text-[#48604a] leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Natural Ingredients Section */}
      <NaturalIngredientsSection />

      {/* Medical Directors Leadership Section */}
      <MedicalDirectorsSection />

      {/* Sanctuary Ambiance Showcase */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#dae3d8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-5"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1b3420]/10 border border-[#1b3420]/20 text-[#1b3420] text-xs font-heading font-bold uppercase tracking-wider">
                <SunMedium className="w-3.5 h-3.5 text-[#b18137]" />
                <span>The Sanctuary Space</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#132415] tracking-tight leading-tight">
                Designed for Calm, <br />
                <span className="font-serif italic font-normal text-[#2b4c2f]">Nurtured by Nature</span>
              </h2>
              <p className="text-sm sm:text-base text-[#405643] leading-relaxed">
                Located near the quiet stretch of Mattannur, opposite Airport Road, Aaramam offers a peaceful sanctuary sheltered from the bustle of city life. Every room is furnished with dedicated mother-baby amenities, warm wooden aesthetics, private attached baths with continuous hot herbal decoctions, and high-speed Wi-Fi.
              </p>
              <ul className="space-y-3 pt-2 text-sm text-[#314835]">
                <li className="flex items-center space-x-3">
                  <Sparkles className="w-4 h-4 text-[#b18137] shrink-0" />
                  <span>Tranquil shared living hall with TV, fridge, and basic kitchen amenities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Sparkles className="w-4 h-4 text-[#b18137] shrink-0" />
                  <span>Private cots for mother, newborn, and bystander in calm restful quarters</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Sparkles className="w-4 h-4 text-[#b18137] shrink-0" />
                  <span>Fresh daily Ayurvedic postpartum nutrition (Vata-balancing warm meals)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/60">
                <img
                  src="/images/ayurveda-ritual-portrait.jpg"
                  alt="Aaramam sanctuary traditional Kerala ambiance"
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d11]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-[#0e1d11]/70 backdrop-blur-md border border-[#d4a034]/30">
                  <h4 className="font-heading font-bold text-base sm:text-lg text-[#fae788]">
                    A Sanctuary of Wholeness
                  </h4>
                  <p className="text-xs text-[#cfdcd0] mt-1">
                    Warm wooden architecture, aromatic herbal incense, and compassionate nursing care at Mattannur Center.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Community & Consultation Section */}
      <JoinCommunitySection />
    </div>
  );
};
