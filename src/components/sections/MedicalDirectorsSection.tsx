import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Stethoscope, CheckCircle2, Check } from 'lucide-react';

interface MedicalDirector {
  id: string;
  name: string;
  role: string;
  organization: string;
  qualifications: string;
  specialtyTitle: string;
  description: string;
  experienceYears: string;
  image: string;
  instagramUrl: string;
  whatsappMessage: string;
  highlights: string[];
}

export const MedicalDirectorsSection: React.FC = () => {
  const directors: MedicalDirector[] = [
    {
      id: 'dr-jishna',
      name: 'Dr. Mrs. Jishna Jayaraj',
      role: 'Founder & Medical Director',
      organization: 'Aaramam Ayurveda',
      qualifications: 'BAMS',
      specialtyTitle: 'Postnatal Care & Maternal Wellness',
      description: 'Dedicated Ayurvedic practitioner specialising in authentic Kerala postnatal recovery, nurturing mothers with personalised therapies and holistic physical and mental wellness after childbirth.',
      experienceYears: 'Founder • BAMS',
      image: '/Dr%20Jishna.jpg.jpeg',
      instagramUrl: 'https://instagram.com/',
      whatsappMessage: 'Hello Aaramam Ayurveda, I would like to schedule a consultation with Dr. Mrs. Jishna Jayaraj regarding Ayurvedic postnatal care.',
      highlights: [
        'Traditional Kerala Postnatal Therapies',
        'Holistic Maternal Wellness & Recovery Support',
        'Personalised Herbal Formulations & Nurture',
      ],
    },
    {
      id: 'dr-reshna',
      name: 'Dr. Reshna Jayaraj',
      role: 'Founder & Medical Director',
      organization: 'Aaramam Ayurveda',
      qualifications: 'BAMS',
      specialtyTitle: 'Postnatal Care & Ayurvedic Cosmetology',
      description: 'Passionate Ayurvedic physician combining classical postnatal recovery with specialized Ayurvedic cosmetology, dedicated to restoring maternal vitality, strength, and natural radiance.',
      experienceYears: 'Cosmetology • BAMS',
      image: '/Dr%20Reshna.jpg.jpeg',
      instagramUrl: 'https://instagram.com/',
      whatsappMessage: 'Hello Aaramam Ayurveda, I would like to schedule a consultation with Dr. Reshna Jayaraj regarding Ayurvedic postnatal care and cosmetology.',
      highlights: [
        'Restorative Postnatal Massages & Therapies',
        'Ayurvedic Cosmetology & Natural Skin Radiance',
        'Compassionate Mother & Baby Recovery Guidance',
      ],
    },
  ];

  return (
    <section id="directors" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#fbfdfa] via-[#f5f8f3] to-[#fbfdfa] relative overflow-hidden">
      {/* Decorative Subtle Ambient Glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#d4a034]/8 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-[#25462c]/8 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#d4a034]/40 text-[#122314] text-[11px] font-extrabold uppercase tracking-widest mb-3 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4a034]" />
            <span>Clinical Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#152316] tracking-tight leading-[1.15]"
          >
            Meet Our <span className="font-serif italic text-[#25462c] font-normal">Medical Directors</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-xs sm:text-sm md:text-base text-[#4a5a4c] font-medium leading-relaxed max-w-xl mx-auto"
          >
            Guided by dedicated twin BAMS practitioners offering compassionate, physician-supervised Ayurvedic postnatal care at Feroke.
          </motion.p>
        </div>

        {/* 2-Column Clean & Neat Cards Grid matching Home theme */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-6.5 items-stretch">
          {directors.map((director, index) => {
            const whatsappLink = `https://wa.me/917034641282?text=${encodeURIComponent(director.whatsappMessage)}`;

            return (
              <motion.div
                key={director.id}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="group relative bg-white rounded-[30px] p-5 sm:p-6 lg:p-7 border-2 border-[#d4a034]/25 hover:border-[#d4a034]/55 shadow-[0_12px_32px_rgba(20,38,22,0.06)] hover:shadow-[0_20px_46px_rgba(20,35,22,0.12)] transition-all duration-300 flex flex-col sm:flex-row gap-5 sm:gap-6 justify-between"
              >
                {/* Left Side: Modern Vertical Portrait Container */}
                <div className="relative w-full sm:w-[190px] md:w-[210px] shrink-0 h-[240px] sm:h-auto min-h-[240px] rounded-[24px] overflow-hidden bg-[#eef3ed] shadow-inner border border-[#d4a034]/30">
                  <img
                    src={director.image}
                    alt={director.name}
                    onError={(e) => {
                      e.currentTarget.src = director.id === 'dr-jishna' ? '/images/dr_jishna.jpeg' : '/images/dr_reshna.jpeg';
                    }}
                    className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Inner Rim */}
                  <div className="absolute inset-0 ring-1 ring-black/5 pointer-events-none rounded-[24px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#112314]/90 backdrop-blur-md text-[#fae788] border border-[#d4a034]/40 text-[10px] font-bold flex items-center space-x-1.5 shadow-sm">
                    <Stethoscope className="w-3 h-3 text-[#d4a034]" />
                    <span>Ayurveda MD</span>
                  </div>

                  {/* Bottom Experience Badge */}
                  <div className="absolute bottom-3 inset-x-3 text-center">
                    <span className="inline-block w-full py-1.5 px-2 rounded-full bg-white/95 backdrop-blur-md text-[#112314] text-[10.5px] font-extrabold tracking-wide shadow-sm border border-white">
                      {director.experienceYears}
                    </span>
                  </div>
                </div>

                {/* Right Side: Doctor Profile Details */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    {/* Top Row: Role & Verified Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#93661b] bg-[#fbf5e7] px-3 py-1 rounded-full border border-[#d4a034]/30">
                        {director.role}
                      </span>
                      <div className="flex items-center space-x-1 text-[#25462c] text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a034]" />
                        <span>Verified</span>
                      </div>
                    </div>

                    {/* Doctor Name */}
                    <h3 className="text-xl sm:text-[22px] font-heading font-black text-[#112314] tracking-tight leading-snug">
                      {director.name}
                    </h3>

                    {/* Degrees & Specialty */}
                    <p className="text-xs font-semibold text-[#8a601a] mt-0.5">
                      {director.qualifications} • <span className="text-[#3b533f] font-medium">{director.specialtyTitle}</span>
                    </p>

                    {/* Shortened, Neat Bio Description */}
                    <p className="mt-2.5 text-xs sm:text-[13px] text-[#485c4b] leading-relaxed text-left">
                      {director.description}
                    </p>

                    {/* Key Clinical Focus - Bulleted with Gold Checkmarks */}
                    <div className="mt-3.5 pt-3 border-t border-[#1b3420]/10 space-y-1.5">
                      <span className="text-[10.5px] font-extrabold text-[#112314] uppercase tracking-wider block">
                        Key Clinical Focus:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#354f38]">
                        {director.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-center space-x-2">
                            <Check className="w-3.5 h-3.5 text-[#d4a034] shrink-0" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center gap-2.5">
                    {/* View Profile (Instagram) */}
                    <a
                      href={director.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3.5 sm:px-4 rounded-full bg-white hover:bg-[#112314] text-[#112314] hover:text-[#fae788] border border-[#d4a034]/40 hover:border-[#112314] text-xs font-bold font-heading flex items-center space-x-1.5 transition-all duration-300 shadow-2xs hover:shadow-sm cursor-pointer group/btn shrink-0"
                      title="View Instagram Profile"
                    >
                      <svg className="w-3.5 h-3.5 text-[#d4a034] group-hover/btn:text-[#fae788] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                      <span>Profile</span>
                    </a>

                    {/* Consult Doctor via WhatsApp */}
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#112314] via-[#1a381d] to-[#112314] hover:from-[#1a381d] hover:to-[#244f28] text-[#fae788] hover:text-[#fffbcf] border border-[#d4a034]/50 hover:border-[#fae788]/80 text-xs font-bold font-heading flex items-center justify-center space-x-2 transition-all shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#d4a034]" />
                      <span>Consult Now!</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
