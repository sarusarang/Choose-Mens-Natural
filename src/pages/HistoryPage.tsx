import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Heart,
  Leaf,
  MapPin,
  GraduationCap,
  Building2,
  HeartHandshake,
  Users,
  Scroll,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Swords,
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface HistoryChapter {
  id: string;
  year: string;
  phase: string;
  location: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  image: string;
  imageCaption: string;
  tags: string[];
  icon: React.ReactNode;
  highlights: string[];
}

export const HistoryPage: React.FC = () => {
  useSEO({
    title: 'Our History & Living Lineage • Aaramam Ayurveda Sanctuary',
    description: 'From Beypore roots in 1993 to Nallur, Feroke — discover the unbroken generational Vaidya lineage and maternal healing wisdom behind Aaramam.',
    image: '/history-banner.jpeg',
    url: 'https://aaramamcare.com/history',
  });

  const [activeChapterId, setActiveChapterId] = useState<string>('chapter-1');

  const chapters: HistoryChapter[] = [
    {
      id: 'chapter-1',
      year: 'Sanctuary',
      phase: 'Dedicated Centre',
      location: 'Nallur, Feroke, Kerala',
      title: 'The Establishment of Aaramam – Nallur, Feroke',
      subtitle: 'Comprehensive Ayurvedic Postnatal Care Centre',
      description:
        'Driven by this vision, the twin sisters established Aaramam Ayurvedic Postnatal Care Centre at Nallur, Feroke, Kerala. Led by Dr. Jishna Jayaraj and Dr. Reshna Jayaraj, Aaramam brings traditional Ayurvedic postnatal therapies into a dedicated maternal and baby wellness environment. Its services include therapeutic massages, herbal baths, herbal applications, traditional fumigation, abdominal binding, Kizhi, Navara Theppu, yoga and meditation, according to individual needs.',
      quote:
        '“An authentic sanctuary offering Kizhi, Navara Theppu, herbal baths, traditional fumigation, and abdominal binding.”',
      image: '/images/treatment_kizhi_1794639697200.jpg',
      imageCaption: 'Aaramam Centre • Authentic Postnatal Therapies & Nurturing Sanctuary',
      tags: ['Kizhi', 'Navara Theppu', 'Herbal Baths', 'Abdominal Binding', 'Fumigation', 'Yoga'],
      icon: <Building2 className="w-5 h-5 text-[#fae788]" />,
      highlights: [
        'Dedicated sanctuary environment for mother & newborn',
        'Therapeutic massages, herbal baths & applications',
        'Traditional fumigation, abdominal binding, Kizhi & Navara Theppu',
      ],
    },
    {
      id: 'chapter-2',
      year: 'Vision',
      phase: 'Clinical Insight',
      location: 'Identifying the Care Gap',
      title: 'Recognising the Need for Dedicated Postnatal Care',
      subtitle: 'Bridging the Critical Void in Traditional Postpartum Support',
      description:
        'Through their clinical experience and interactions with mothers and families, the sisters recognised a significant gap in accessible, authentic traditional Ayurvedic postnatal care. They envisioned a dedicated centre that would bring together traditional therapies, professional medical guidance and comprehensive care for both mothers and newborn babies during the important postpartum period.',
      quote:
        '“Envisioning a sanctuary that unites authentic traditional therapies with clinical medical guidance for mother and child.”',
      image: '/images/treatment_mother_care_1794639745090.jpg',
      imageCaption: 'Maternal & Newborn Wellbeing • The Need for Dedicated Postpartum Support',
      tags: ['Maternal Wellness', 'Newborn Care', 'Postnatal Void', 'Doctor-Led Guidance'],
      icon: <HeartHandshake className="w-5 h-5 text-[#fae788]" />,
      highlights: [
        'Direct clinical observations with postpartum mothers',
        'Recognised lack of authentic traditional care centres',
        'Conceived a 360-degree maternal & infant wellness sanctuary',
      ],
    },
    {
      id: 'chapter-3',
      year: '2024',
      phase: 'Academic Mastery',
      location: 'Nallur, Feroke, Kerala',
      title: 'The Beginning of Dvaya Ayurvedic – 2024',
      subtitle: 'Twin BAMS Doctors Dr. Jishna Jayaraj & Dr. Reshna Jayaraj',
      description:
        "After completing their BAMS graduation, twin sisters Dr. Jishna Jayaraj and Dr. Reshna Jayaraj established Dvaya Ayurvedic at Nallur, Feroke, Kerala, in 2024. Combining professional Ayurvedic education with their family's traditional healing knowledge, they began providing specialised treatments for pregnancy care, postnatal wellness, baby care, varicose veins and cosmetology.",
      quote:
        '“Uniting university medical science (BAMS) with centuries of family herbal mastery at Nallur, Feroke.”',
      image: '/images/doctor_varsha.jpg',
      imageCaption: '2024 • Twin Doctors Dr. Jishna Jayaraj & Dr. Reshna Jayaraj (BAMS)',
      tags: ['BAMS Graduates', 'Dvaya Ayurvedic', 'Pregnancy Care', 'Cosmetology', 'Varicose Veins'],
      icon: <GraduationCap className="w-5 h-5 text-[#fae788]" />,
      highlights: [
        'Founded in 2024 following BAMS graduation',
        'Twin doctors Dr. Jishna Jayaraj & Dr. Reshna Jayaraj',
        'Comprehensive clinical treatments for women & children',
      ],
    },
    {
      id: 'chapter-4',
      year: '1993',
      phase: 'Foundational Roots',
      location: 'Beypore, Kerala',
      title: 'A Legacy of Traditional Ayurveda – Since 1993',
      subtitle: 'Jayarajan Ayurveda Parambariya Vidyasala',
      description:
        "The roots of Aaramam trace back to 1993, when Mr. Jayarajan established Jayarajan Ayurveda Parambariya Vidyasala at Beypore, Kerala. Coming from a family with generations of traditional Ayurvedic knowledge, he dedicated his life to natural healing, traditional therapies and the preparation of herbal medicines. His expertise in treating body pain, eye-related conditions and various health concerns laid a strong foundation for the family's Ayurvedic heritage.",
      quote:
        '“Dedicated to natural healing, traditional therapies, and sacred herbal medicine preparation rooted in Beypore.”',
      image: '/images/ayurveda-herbs-center.jpg',
      imageCaption: '1993 • Classical Bronze Uruli & Traditional Herbal Medicine Crafting',
      tags: ['Beypore, Kerala', 'Herbal Medicine Preparation', 'Parambariya Vidyasala', 'Natural Healing'],
      icon: <Scroll className="w-5 h-5 text-[#fae788]" />,
      highlights: [
        'Founded by Mr. Jayarajan in 1993 at Beypore',
        'Generations of traditional Ayurvedic botanical knowledge',
        'Specialised in natural healing, body pain & eye health',
      ],
    },
    {
      id: 'chapter-5',
      year: 'Heritage',
      phase: 'Family Lineage',
      location: 'Generational Transmission',
      title: 'Generations of Knowledge & Healing',
      subtitle: 'Passed Down from Father & Grandfather to the Twin Sisters',
      description:
        'Ayurveda was more than a profession for the family; it was a tradition passed down through generations. Inspired by their father and grandfather, the twin sisters grew up with an understanding of traditional healing practices and natural therapies. Mr. Jayarajan shared his extensive practical knowledge, treatment methods and therapeutic experience with his daughters, nurturing their passion for preserving authentic Ayurvedic traditions.',
      quote:
        '“Ayurveda was never merely a profession—it was a sacred familial flame nurtured across generations.”',
      image: '/images/ayurveda-ritual-portrait.jpg',
      imageCaption: 'Ancestral Vaidya Wisdom • Sacred Botanical Formulations Passed to Daughters',
      tags: ['Family Lineage', 'Father to Daughters', 'Practical Therapeutics', 'Living Tradition'],
      icon: <Users className="w-5 h-5 text-[#fae788]" />,
      highlights: [
        'Inspired by generations of Vaidya ancestors',
        'Hands-on immersion in practical herbal preparations',
        'A lifelong commitment to preserving authentic traditions',
      ],
    },
  ];

  const scrollToChapter = (id: string) => {
    setActiveChapterId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="w-full max-w-full min-w-0 flex flex-col bg-[#e4eae2] overflow-x-clip">
      {/* Reusable Page Hero with Dark Sanctuary Theme */}
      <PageHero
        title="Generations of Healing &"
        highlightTitle="The Story of Aaramam"
        description="From the founding of Jayarajan Ayurveda Parambariya Vidyasala at Beypore in 1993 to the establishment of Aaramam Ayurvedic Postnatal Care Centre at Nallur, Feroke by twin sisters Dr. Jishna & Dr. Reshna Jayaraj."
        breadcrumbs={[{ label: 'Our History' }]}
        highlights={[
          'Founded 1993 at Beypore',
          'Generational Vaidya Heritage',
          'Dvaya Ayurvedic Established 2024',
          'Aaramam Centre at Nallur, Feroke',
        ]}
        bgImage="/history-banner.jpeg"
      />

      {/* Main Section */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1680px] mx-auto w-full relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto space-y-4 mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1b3420]/10 border border-[#1b3420]/20 text-[#1b3420] text-xs font-heading font-bold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5 text-[#b18137]" />
            <span>Sacred Lineage &amp; Chronology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-heading font-black text-[#132415] tracking-tight leading-tight">
            The Living Tree of Aaramam <br />
            <span className="font-serif italic font-normal text-[#2b4c2f]">
              From Beypore Roots to Nallur, Feroke
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#3f5442] leading-relaxed max-w-2xl mx-auto font-medium">
            Explore the unbroken journey of generational healing, academic mastery, and dedicated maternal sanctuary care.
          </p>
        </motion.div>

        {/* Interactive Visual Node Tree Navigator (Graph) - Native Mobile App Responsive */}
        <div className="mb-14 sm:mb-20 bg-[#0e1d11] text-white rounded-[26px] sm:rounded-[44px] py-9 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 border border-[#d4a034]/35 shadow-[0_25px_60px_rgba(14,29,17,0.45)] relative overflow-hidden">
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4a034]/12 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2b4c2f]/25 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-4 mb-10 sm:mb-14">
            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-[#d4a034]/35 text-xs font-heading font-bold text-[#fae788] uppercase tracking-[0.25em] shadow-sm">
              Interactive Lineage Navigator
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-black text-white tracking-tight leading-tight">
              Milestones of the Aaramam Tree
            </h3>
            <p className="text-sm sm:text-base text-[#a3bfa5] max-w-xl leading-relaxed">
              Click any milestone node below to navigate directly to its detailed chapter in our history.
            </p>
          </div>

          {/* Node Diagram Cards: Balanced Responsive Grid (1 col on mobile, 2 cols on tablet, 3 cols on desktop) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {chapters.map((ch) => {
              const isActive = activeChapterId === ch.id;

              return (
                <motion.button
                  key={ch.id}
                  onClick={() => scrollToChapter(ch.id)}
                  whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 sm:p-7 rounded-[26px] border text-left flex flex-col justify-between group cursor-pointer relative transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-[#1d3d24] via-[#142918] to-[#0c1a10] border-[#fae788] shadow-[0_14px_36px_rgba(250,231,136,0.22),inset_0_1px_0_rgba(255,255,255,0.15)] ring-1 ring-[#fae788]'
                      : 'bg-[#122416]/75 hover:bg-[#162e1c]/90 border-[#d4a034]/25 hover:border-[#d4a034]/60 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)]'
                  }`}
                >
                  {/* Top Row: Year Pill & Icon */}
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-[#0a160d] text-[#fae788] border border-[#d4a034]/40 text-xs font-heading font-black tracking-wider uppercase shadow-xs">
                      {ch.year}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? 'bg-[#fae788] text-[#112314] border-[#fae788] shadow-md scale-105'
                          : 'bg-white/10 text-[#fae788] border-white/15 group-hover:bg-[#fae788]/20 group-hover:border-[#fae788]/60 group-hover:scale-105'
                      }`}
                    >
                      {React.isValidElement(ch.icon)
                        ? React.cloneElement(ch.icon as React.ReactElement<{ className?: string }>, {
                            className: `w-5 h-5 transition-colors ${
                              isActive ? 'text-[#112314]' : 'text-[#fae788]'
                            }`,
                          })
                        : ch.icon}
                    </div>
                  </div>

                  {/* Middle Content: Phase Tag, Standardized-Height Title, and Location */}
                  <div className="space-y-2 mb-4">
                    {ch.phase && (
                      <span className="text-[11px] font-heading font-extrabold uppercase tracking-[0.18em] text-[#d4a034] block">
                        {ch.phase}
                      </span>
                    )}
                    <h4 className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-[#fae788] transition-colors leading-snug line-clamp-2 min-h-[2.85rem] flex items-center">
                      {ch.title}
                    </h4>
                    <div className="flex items-center space-x-1.5 text-xs text-[#9eb6a0] pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#d4a034] shrink-0" />
                      <span className="line-clamp-1">{ch.location}</span>
                    </div>
                  </div>

                  {/* Bottom Action Row: Smooth Explore Indicator */}
                  <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-heading font-semibold text-[#fae788] group-hover:text-white transition-colors flex items-center gap-1.5">
                      <span>{isActive ? 'Current Chapter' : 'Jump to Chapter'}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fae788] animate-pulse" />
                      )}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-[#fae788] text-[#112314]'
                          : 'bg-white/10 text-[#fae788] group-hover:bg-[#fae788] group-hover:text-[#112314]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Animated Botanical Node Tree Timeline (Balanced 2-Sided Architecture) */}
        <div className="relative">
          {/* Central Animated Golden Vine Trunk Spine (Desktop lg+) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-2 bg-gradient-to-b from-[#d4a034] via-[#2b4c2f] to-[#d4a034] rounded-full shadow-[0_0_20px_rgba(212,160,52,0.35)]">
            {/* Animated Golden Pulse Light traveling continuously down the tree spine */}
            <motion.div
              animate={{ y: ['0%', '98%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="w-4 h-4 -left-1 absolute bg-[#fae788] rounded-full shadow-[0_0_16px_#fae788] blur-[0.5px]"
            />
          </div>

          {/* Chapters Stack */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-32">
            {chapters.map((ch, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={ch.id}
                  id={ch.id}
                  className="relative scroll-mt-28"
                  onMouseEnter={() => setActiveChapterId(ch.id)}
                >
                  {/* Central Node Badge on Trunk (Desktop lg+) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-10 z-20 items-center justify-center pointer-events-none">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="relative flex items-center justify-center"
                    >
                      {/* Pulsing halo ring */}
                      <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-[#d4a034]/30 opacity-75" />

                      {/* Ornate Gold Crest Seal */}
                      <div className="w-16 h-16 rounded-full bg-[#112314] border-2 border-[#fae788] flex items-center justify-center shadow-[0_0_25px_rgba(212,160,52,0.5)] transition-transform duration-300">
                        {ch.icon}
                      </div>

                      {/* Year badge floating beneath */}
                      <span className="absolute -bottom-6 px-3 py-0.5 rounded-full bg-[#112314] text-[#fae788] border border-[#d4a034]/50 text-[10.5px] font-heading font-black tracking-wider uppercase shadow-md whitespace-nowrap">
                        {ch.year}
                      </span>
                    </motion.div>
                  </div>

                  {/* Balanced 2-Column Row: Left side & Right side both filled */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    
                    {/* Column 1: Card A */}
                    <div className={`${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: !isEven ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className={`bg-white rounded-[32px] p-6 sm:p-8 md:p-10 border transition-all duration-300 shadow-[0_12px_40px_rgba(20,40,24,0.07)] hover:shadow-[0_20px_50px_rgba(20,40,24,0.13)] ${
                          activeChapterId === ch.id
                            ? 'border-[#d4a034] ring-2 ring-[#d4a034]/30'
                            : 'border-[#1b3420]/10 hover:border-[#d4a034]/50'
                        }`}
                      >
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="px-3.5 py-1 rounded-full bg-[#112314] text-[#fae788] border border-[#d4a034]/40 text-xs font-heading font-black uppercase tracking-wider shadow-2xs">
                            {ch.year}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#1b3420]/10 text-[#1b3420] border border-[#1b3420]/20 text-xs font-heading font-bold uppercase tracking-wider">
                            {ch.phase}
                          </span>
                          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#b18137]/10 text-[#b18137] text-xs font-bold">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span>{ch.location}</span>
                          </span>
                        </div>

                        {/* Heading */}
                        <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#132415] tracking-tight leading-snug">
                          {ch.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-serif italic text-[#b18137] font-normal mt-1 mb-5">
                          {ch.subtitle}
                        </p>

                        {/* Full Narrative Text */}
                        <p className="text-sm sm:text-base text-[#405742] leading-relaxed text-justify sm:text-left">
                          {ch.description}
                        </p>

                        {/* Key Milestones List */}
                        <div className="mt-6 pt-5 border-t border-[#1b3420]/10 space-y-2.5">
                          <span className="text-xs font-heading font-bold text-[#1b3420] uppercase tracking-wider block">
                            Milestone Highlights:
                          </span>
                          <div className="space-y-2 text-xs sm:text-[13px] text-[#334c36]">
                            {ch.highlights.map((hl, hlIdx) => (
                              <div key={hlIdx} className="flex items-start space-x-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#b18137] shrink-0 mt-0.5" />
                                <span className="font-medium leading-snug">{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tag Pills */}
                        <div className="flex flex-wrap gap-2 pt-5 mt-4 border-t border-gray-100">
                          {ch.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 rounded-full bg-[#f1f5ef] hover:bg-[#e4ece2] text-[#243a27] text-xs font-medium border border-[#1b3420]/10 transition-colors"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Column 2: Visual Photographic Heritage Card */}
                    <div className={`${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: !isEven ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white group bg-[#0e1d11]"
                      >
                        {/* High-Resolution Heritage Photography */}
                        <div className="relative h-[360px] sm:h-[420px] md:h-[460px] w-full overflow-hidden">
                          <img
                            src={ch.image}
                            alt={ch.imageCaption}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.92]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d11]/90 via-[#0e1d11]/30 to-transparent" />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1d11]/40 via-transparent to-[#0e1d11]/40" />
                        </div>

                        {/* Top Phase Pill */}
                        <div className="absolute top-5 left-5">
                          <span className="px-3.5 py-1.5 rounded-full bg-[#112314]/90 text-[#fae788] border border-[#d4a034]/40 text-xs font-heading font-black tracking-wider uppercase backdrop-blur-md shadow-md flex items-center space-x-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#fae788]" />
                            <span>{ch.phase}</span>
                          </span>
                        </div>

                        {/* Bottom Quote & Caption Overlay */}
                        <div className="absolute bottom-5 left-5 right-5 p-5 sm:p-6 rounded-2xl bg-[#0e1d11]/85 backdrop-blur-md border border-[#d4a034]/30 text-white space-y-2 shadow-lg">
                          <p className="text-xs sm:text-sm font-serif italic text-[#fae788] leading-relaxed">
                            {ch.quote}
                          </p>
                          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#b8ccba]">
                            <span>{ch.imageCaption}</span>
                            <span className="font-bold text-[#fae788]">{ch.year}</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Aaramam's Legacy of Kalari and Traditional Ayurvedic Healing Section - Mobile App Responsive */}
      <section
        id="kalari-legacy"
        className="py-12 sm:py-18 lg:py-24 px-3 sm:px-6 lg:px-8 xl:px-12 bg-[#0c1a0e] text-white relative overflow-hidden border-t border-[#d4a034]/25 scroll-mt-20"
      >
        {/* Ambient Subtle Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d4a034]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#1d3d24]/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1500px] mx-auto relative z-10 space-y-10 sm:space-y-14 lg:space-y-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4 px-2"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 border border-[#d4a034]/40 text-[#fae788] text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider shadow-xs">
              <Swords className="w-3.5 h-3.5 text-[#fae788]" />
              <span>Ancestral Martial Art &amp; Natural Healing Roots</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight leading-tight">
              Aaramam’s Legacy of Kalari and <br />
              <span className="font-serif italic font-normal text-[#fae788]">
                Traditional Ayurvedic Healing
              </span>
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-[#a3bfa5] leading-relaxed max-w-3xl mx-auto font-medium">
              The harmonious synthesis of martial discipline, trauma recovery, and natural botanical medicine that shaped the healing lineage of the Aaramam family.
            </p>
          </motion.div>

          {/* Narrative Content: Two Rich Story Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
          >
            {/* Left Card: Kalari Discipline & Cultural Heritage */}
            <div className="bg-gradient-to-br from-[#142918] via-[#0f2113] to-[#0a170d] rounded-[28px] sm:rounded-[30px] p-6 sm:p-9 border border-[#d4a034]/30 shadow-xl flex flex-col justify-between space-y-5 sm:space-y-6 hover:border-[#d4a034]/55 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#fae788]/10 border border-[#fae788]/25 text-xs font-heading font-bold uppercase tracking-wider text-[#fae788]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#fae788]" />
                    <span>Discipline &amp; Martial Lineage</span>
                  </div>
                  <span className="text-xs text-[#a3bfa5] font-mono">01</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
                  Upholding the Sanctity of the Kalari Centre
                </h3>
                <p className="text-sm sm:text-[15px] text-[#cfded0] leading-relaxed text-justify sm:text-left">
                  For generations, the Aaramam family has maintained a deep-rooted connection with Kerala’s traditional martial art, <strong className="text-white font-semibold">Kalari</strong>, preserving its discipline, knowledge, and cultural heritage with great dedication. Mr. Jayaraj and his predecessors actively practised Kalari and upheld the sanctity of the traditional Kalari centre.
                </p>
                <p className="text-sm sm:text-[15px] text-[#cfded0] leading-relaxed text-justify sm:text-left">
                  The centre was also enriched by the guidance and training of renowned practitioners such as <strong className="text-[#fae788] font-semibold">Mr. Ashan Kurikkal</strong> and <strong className="text-[#fae788] font-semibold">Mr. Chandukutty Vaidhyar</strong>, who contributed to nurturing the art and its practitioners.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#a3bfa5]">
                  #KeralaKalari
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#a3bfa5]">
                  #MasterGuidance
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#a3bfa5]">
                  #GenerationalDiscipline
                </span>
              </div>
            </div>

            {/* Right Card: Ayurvedic Treatments & Natural Healing */}
            <div className="bg-gradient-to-br from-[#142918] via-[#0f2113] to-[#0a170d] rounded-[28px] sm:rounded-[30px] p-6 sm:p-9 border border-[#d4a034]/30 shadow-xl flex flex-col justify-between space-y-5 sm:space-y-6 hover:border-[#d4a034]/55 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#fae788]/10 border border-[#fae788]/25 text-xs font-heading font-bold uppercase tracking-wider text-[#fae788]">
                    <Sparkles className="w-3.5 h-3.5 text-[#fae788]" />
                    <span>Ayurvedic Healing &amp; Recovery</span>
                  </div>
                  <span className="text-xs text-[#a3bfa5] font-mono">02</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
                  Trauma Care, Muscular Recovery &amp; Physical Well-being
                </h3>
                <p className="text-sm sm:text-[15px] text-[#cfded0] leading-relaxed text-justify sm:text-left">
                  Alongside Kalari training, traditional Ayurvedic treatments were administered to address injuries, wounds, muscular pain, and physical discomfort experienced by trainees. These treatments, rooted in natural healing practices and traditional medicinal knowledge, were widely valued for their effectiveness in promoting recovery, strengthening the body, and maintaining overall physical well-being.
                </p>
                <p className="text-sm sm:text-[15px] text-[#cfded0] leading-relaxed text-justify sm:text-left">
                  This harmonious relationship between Kalari, Ayurveda, discipline, and natural healing formed an important part of the Aaramam family’s heritage — <em className="text-[#fae788] font-serif not-italic font-semibold">a legacy of wellness, knowledge, and care passed down through generations.</em>
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#a3bfa5]">
                  #MarmaHealing
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#a3bfa5]">
                  #MuscularRecovery
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#a3bfa5]">
                  #UnbrokenHeritage
                </span>
              </div>
            </div>
          </motion.div>

          {/* Historical Figures & Kalari Ground Cards */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-heading font-black uppercase tracking-[0.22em] text-[#d4a034] block">
                Historical Guardians of the Art
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">
                The Sanctum, Masters &amp; Traditional Vaidhyars
              </h3>
            </div>

            {/* 3-Column Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1: Kalari */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-[#122416]/90 rounded-[28px] overflow-hidden border border-[#d4a034]/30 hover:border-[#fae788]/70 shadow-xl hover:shadow-[0_20px_45px_rgba(212,160,52,0.2)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#08120a]">
                    <img
                      src="/kalari.jpg.jpeg"
                      alt="Kalari - Traditional Martial Art"
                      onError={(e) => {
                        e.currentTarget.src = '/images/kalari.jpeg';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#122416] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#0a160d]/90 text-[#fae788] border border-[#d4a034]/40 text-[11px] font-heading font-bold uppercase tracking-wider backdrop-blur-md shadow-xs">
                        Sacred Art
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7 space-y-2">
                    <h4 className="text-xl sm:text-2xl font-heading font-black text-white group-hover:text-[#fae788] transition-colors">
                      Kalari
                    </h4>
                    <p className="text-xs font-serif italic text-[#fae788]/90 font-medium">
                      Traditional Martial Art &amp; Sacred Centre
                    </p>
                    <p className="text-xs sm:text-sm text-[#b4ccb6] leading-relaxed pt-1">
                      Preserving the physical discipline, sacred traditions, and cultural heritage of Kerala’s ancient martial system, actively practised by Mr. Jayaraj and his predecessors.
                    </p>
                  </div>
                </div>
                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#fae788] font-heading font-semibold">
                  <span>Ancestral Practice</span>
                  <ShieldCheck className="w-4 h-4 text-[#fae788]" />
                </div>
              </motion.div>

              {/* Card 2: Ashan Kurikkal */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-[#122416]/90 rounded-[28px] overflow-hidden border border-[#d4a034]/30 hover:border-[#fae788]/70 shadow-xl hover:shadow-[0_20px_45px_rgba(212,160,52,0.2)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#08120a]">
                    <img
                      src="/ashaaan%20kelugurukal.jpg.jpeg"
                      alt="Ashan Kurikkal - Kalari Master"
                      onError={(e) => {
                        e.currentTarget.src = '/images/ashan_kurikkal.jpeg';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#122416] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#0a160d]/90 text-[#fae788] border border-[#d4a034]/40 text-[11px] font-heading font-bold uppercase tracking-wider backdrop-blur-md shadow-xs">
                        Kalari Master
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7 space-y-2">
                    <h4 className="text-xl sm:text-2xl font-heading font-black text-white group-hover:text-[#fae788] transition-colors">
                      Ashan Kurikkal
                    </h4>
                    <p className="text-xs font-serif italic text-[#fae788]/90 font-medium">
                      Renowned Practitioner &amp; Master Trainer
                    </p>
                    <p className="text-xs sm:text-sm text-[#b4ccb6] leading-relaxed pt-1">
                      Enriched the centre through revered guidance, rigorous training, and mentorship, nurturing the martial discipline and cultivating the spirit of its practitioners.
                    </p>
                  </div>
                </div>
                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#fae788] font-heading font-semibold">
                  <span>Mentorship &amp; Guidance</span>
                  <Swords className="w-4 h-4 text-[#fae788]" />
                </div>
              </motion.div>

              {/* Card 3: Mr. Chandukutty Vaidhyar */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-[#122416]/90 rounded-[28px] overflow-hidden border border-[#d4a034]/30 hover:border-[#fae788]/70 shadow-xl hover:shadow-[0_20px_45px_rgba(212,160,52,0.2)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#08120a]">
                    <img
                      src="/chandhu%20kutty%20vydhyar.jpg.jpeg"
                      alt="Mr. Chandukutty Vaidhyar - Traditional Ayurvedic Healer"
                      onError={(e) => {
                        e.currentTarget.src = '/images/chandukutty_vaidhyar.jpeg';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#122416] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#0a160d]/90 text-[#fae788] border border-[#d4a034]/40 text-[11px] font-heading font-bold uppercase tracking-wider backdrop-blur-md shadow-xs">
                        Traditional Vaidhyar
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7 space-y-2">
                    <h4 className="text-xl sm:text-2xl font-heading font-black text-white group-hover:text-[#fae788] transition-colors">
                      Mr. Chandukutty Vaidhyar
                    </h4>
                    <p className="text-xs font-serif italic text-[#fae788]/90 font-medium">
                      Traditional Ayurvedic Healer &amp; Practitioner
                    </p>
                    <p className="text-xs sm:text-sm text-[#b4ccb6] leading-relaxed pt-1">
                      Administered classical treatments for wounds, muscular trauma, and physical recovery, anchoring natural healing practices into the daily life of the centre.
                    </p>
                  </div>
                </div>
                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#fae788] font-heading font-semibold">
                  <span>Natural Healing &amp; Care</span>
                  <Sparkles className="w-4 h-4 text-[#fae788]" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders & Tradition Tribute Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#dae3d8]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white/70 bg-[#112314]">
              <img
                src="/images/doctor_varsha.jpg"
                alt="Dr. Jishna Jayaraj & Dr. Reshna Jayaraj - Founders of Aaramam & Dvaya Ayurvedic"
                className="w-full h-[500px] sm:h-[580px] md:h-[620px] lg:h-[640px] xl:h-[680px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d11]/90 via-[#0e1d11]/30 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1 rounded-full bg-[#112314]/90 text-[#fae788] border border-[#d4a034]/40 text-xs font-heading font-black tracking-wider uppercase backdrop-blur-md">
                  Twin Doctor Founders
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-[#0e1d11]/85 backdrop-blur-md border border-[#d4a034]/40 text-white space-y-1">
                <h4 className="font-heading font-bold text-base sm:text-lg text-[#fae788]">
                  Dr. Jishna Jayaraj &amp; Dr. Reshna Jayaraj
                </h4>
                <p className="text-xs text-[#cfded0] leading-relaxed">
                  BAMS Graduates • Founders &amp; Medical Directors of Dvaya Ayurvedic &amp; Aaramam Ayurvedic Postnatal Care Centre, Nallur, Feroke.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b3420]/10 border border-[#1b3420]/20 text-[#1b3420] text-xs font-heading font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#b18137]" />
              <span>Ancestral Heritage Meets Modern Clinical Science</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#132415] tracking-tight leading-tight">
              Honoring Mr. Jayarajan’s Legacy <br />
              <span className="font-serif italic font-normal text-[#2b4c2f]">
                Preserving Authentic Motherhood Healing
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#405643] leading-relaxed">
              From the humble roots in 1993 with Jayarajan Ayurveda Parambariya Vidyasala at Beypore to the state-of-the-art Aaramam Sanctuary in Nallur, Feroke, our commitment remains unbroken: protecting the sacred health of mothers and infants through time-honored Kerala Ayurvedic wisdom.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/80 border border-[#1b3420]/10 shadow-xs space-y-1">
                <div className="flex items-center space-x-2 text-[#112314] font-heading font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#d4a034]" />
                  <span>Authentic Classical Formulations</span>
                </div>
                <p className="text-xs text-[#4c634e] leading-relaxed">
                  Medicated oils and herbal decoctions slow-crafted under the strict traditional methods taught by Mr. Jayarajan.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-[#1b3420]/10 shadow-xs space-y-1">
                <div className="flex items-center space-x-2 text-[#112314] font-heading font-bold text-sm">
                  <Heart className="w-4 h-4 text-[#d4a034]" />
                  <span>Personalised Mother-Baby Rituals</span>
                </div>
                <p className="text-xs text-[#4c634e] leading-relaxed">
                  Individualised Navara Theppu, herbal baths, abdominal binding, and postpartum recovery guided by BAMS physicians.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#112314] hover:bg-[#1b3720] text-[#fae788] border border-[#d4a034]/40 font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <span>Explore Postnatal Services</span>
                <ArrowRight className="w-4 h-4 text-[#fae788]" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
