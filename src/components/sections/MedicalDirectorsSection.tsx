import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Stethoscope, CheckCircle2 } from 'lucide-react';

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
  tags: string[];
}

export const MedicalDirectorsSection: React.FC = () => {
  const directors: MedicalDirector[] = [
    {
      id: 'dr-varsha',
      name: 'Dr. Varsha K.P',
      role: 'Medical Director',
      organization: 'BabyMaa • Aaramam Ayurveda',
      qualifications: 'BAMS, MSc Life Science',
      specialtyTitle: 'Holistic Postnatal Recovery & Panchakarma',
      description: 'Expert in classical Prasava Raksha protocols, natural postpartum rejuvenation, and compassionate maternal lactation support with over 7 years of clinical medical excellence.',
      experienceYears: '7+ Years Exp',
      image: '/images/doctor_varsha.jpg',
      instagramUrl: 'https://instagram.com/',
      whatsappMessage: 'Hello Aaramam Ayurveda, I would like to schedule a consultation with Dr. Varsha K.P regarding Ayurvedic postnatal care.',
      tags: ['Postnatal Care', 'Lactation Specialist', 'Panchakarma'],
    },
    {
      id: 'dr-akshayram',
      name: 'Dr. Akshayram K.P',
      role: 'Medical Director',
      organization: 'BabyMaa • Aaramam Ayurveda',
      qualifications: 'BAMS, CMOT, CAHC',
      specialtyTitle: 'Ayurvedic Spine & Joint Specialist (Chiropractic)',
      description: 'Integrates classical Ayurvedic marma therapy with modern spinal alignment and musculoskeletal rehabilitation, offering holistic joint and spinal healing with 7+ years of experience.',
      experienceYears: '7+ Years Exp',
      image: '/images/doctor_akshayram.jpg',
      instagramUrl: 'https://instagram.com/',
      whatsappMessage: 'Hello Aaramam Ayurveda, I would like to schedule a consultation with Dr. Akshayram K.P regarding spine and joint wellness.',
      tags: ['Spine & Joint', 'Marma Therapy', 'Chiropractic'],
    },
  ];

  return (
    <section id="directors" className="py-10 sm:py-12 md:py-14 bg-gradient-to-b from-[#ffffff] via-[#f8faf7] to-[#ffffff] relative overflow-hidden">
      {/* Decorative Subtle Ambient Glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#d4a034]/7 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-[#25462c]/7 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header (Compact & Fit on Screen) */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#d4a034]/40 text-[#122314] text-[11px] font-extrabold uppercase tracking-widest mb-2.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4a034]" />
            <span>Clinical Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#152316] tracking-tight leading-[1.12]"
          >
            Meet Our <span className="font-serif italic text-[#25462c] font-normal">Medical Directors</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-xs sm:text-sm text-[#4a5a4c] leading-relaxed max-w-lg mx-auto"
          >
            Led by experienced Ayurvedic practitioners dedicated to your wellness journey.
          </motion.p>
        </div>

        {/* 2-Column Split Cards (Fit on Screen • Distinct & Unique UI) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          {directors.map((director, index) => {
            const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(director.whatsappMessage)}`;

            return (
              <motion.div
                key={director.id}
                initial={{ opacity: 0, y: 35, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.1, delay: index * 0.16, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="group relative bg-white/95 backdrop-blur-xl rounded-[28px] sm:rounded-[32px] p-3.5 sm:p-4 md:p-5 border-2 border-[#d4a034]/25 hover:border-[#d4a034]/60 shadow-[0_10px_30px_rgba(20,38,22,0.06)] hover:shadow-[0_20px_45px_rgba(20,35,22,0.12)] transition-all duration-400 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between"
              >
                {/* Left Side: Modern Vertical Portrait Container */}
                <div className="relative w-full sm:w-[170px] md:w-[185px] lg:w-[195px] shrink-0 h-[220px] sm:h-auto min-h-[220px] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#eef3ed] shadow-inner border border-[#d4a034]/30">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Inner Rim */}
                  <div className="absolute inset-0 ring-1 ring-black/5 pointer-events-none rounded-[22px] sm:rounded-[26px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Top Floating Stethoscope Pill */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-[#112314]/85 backdrop-blur-md text-[#fae788] border border-[#d4a034]/40 text-[9.5px] font-bold flex items-center space-x-1 shadow-sm">
                    <Stethoscope className="w-3 h-3 text-[#d4a034]" />
                    <span>Ayurveda MD</span>
                  </div>

                  {/* Bottom Experience Badge */}
                  <div className="absolute bottom-2.5 inset-x-2.5 text-center">
                    <span className="inline-block w-full py-1 px-2 rounded-full bg-white/95 backdrop-blur-md text-[#112314] text-[10px] font-extrabold tracking-wide shadow-sm border border-white">
                      {director.experienceYears}
                    </span>
                  </div>
                </div>

                {/* Right Side: Doctor Profile Details */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    {/* Top Row: Role & Verified Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#93661b] bg-[#fbf5e7] px-2.5 py-0.5 rounded-full border border-[#d4a034]/30">
                        {director.role}
                      </span>
                      <div className="flex items-center space-x-1 text-[#25462c] text-[10.5px] font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a034]" />
                        <span>Verified</span>
                      </div>
                    </div>

                    {/* Doctor Name */}
                    <h3 className="mt-2 text-xl sm:text-[22px] font-heading font-extrabold text-[#112314] tracking-tight leading-snug">
                      {director.name}
                    </h3>

                    {/* Degrees & Organization */}
                    <p className="text-[11.5px] font-serif italic text-[#4f6050] font-medium">
                      {director.qualifications} • <span className="not-italic font-sans font-bold text-[#8a601a]">{director.organization}</span>
                    </p>

                    {/* Specialty Headline */}
                    <p className="mt-2 text-[12.5px] font-bold text-[#1a2d1c] leading-snug">
                      {director.specialtyTitle}
                    </p>

                    {/* Clinical Bio */}
                    <p className="mt-1.5 text-xs text-[#526353] leading-relaxed line-clamp-3">
                      {director.description}
                    </p>

                    {/* Clinical Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {director.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#f4f7f3] border border-[#dce6db] text-[#244227]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 sm:gap-2.5">
                    {/* View Profile (Instagram) */}
                    <a
                      href={director.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 sm:px-3.5 rounded-full bg-white hover:bg-[#112314] text-[#112314] hover:text-[#fae788] border border-[#d4a034]/40 hover:border-[#112314] text-[11px] font-bold font-heading flex items-center space-x-1.5 transition-all duration-300 shadow-2xs hover:shadow-sm cursor-pointer group/btn shrink-0"
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
                      className="flex-1 py-2 px-3.5 sm:px-4 rounded-full bg-gradient-to-r from-[#112314] via-[#1a381d] to-[#112314] hover:from-[#1a381d] hover:to-[#244f28] text-[#fae788] hover:text-[#fffbcf] border border-[#d4a034]/50 hover:border-[#fae788]/80 text-[11.5px] font-bold font-heading flex items-center justify-center space-x-1.5 transition-all shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#d4a034]" />
                      <span>Consult Doctor</span>
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
