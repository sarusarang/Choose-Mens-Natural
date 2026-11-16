import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, MessageCircle, MapPin, Clock, Heart } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { POSTNATAL_CARE_PACKAGES, HERO_TREATMENTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { JoinCommunitySection } from '../components/sections/JoinCommunitySection';

export const ServicesPage: React.FC = () => {
  const { openQuickView } = useCart();

  const handleEnquireWhatsApp = (title: string, duration: string) => {
    const text = encodeURIComponent(
      `Hello Aaramam Ayurveda Sanctuary, I am interested in inquiring about the "${title}" (${duration}) at your Feroke Centre. Could you please share more details regarding availability and admission?`
    );
    window.open(`https://wa.me/917034641282?text=${text}`, '_blank');
  };

  return (
    <div className="w-full flex flex-col bg-[#e4eae2]">
      {/* Reusable Page Hero with Dark Sanctuary Theme, Matching Background & Scalloped Wave */}
      <PageHero
        title="Restorative Therapies &"
        highlightTitle="Postnatal Nurture"
        description="Immerse in physician-guided Ayurvedic therapies and our signature postnatal care packages at our peaceful Feroke Sanctuary in Kozhikode."
        breadcrumbs={[{ label: 'Our Services' }]}
        highlights={['Traditional Postnatal Packages', 'Daily Abhyanga & Herbal Baths', 'Private Mother-Baby Rooms', 'Enquire via WhatsApp']}
        bgImage="/images/treatment_mother_care_1794639745090.jpg"
      />

      {/* Signature Postnatal Care Packages Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1720px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1b3420]/10 border border-[#1b3420]/20 text-[#1b3420] text-xs font-heading font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#b18137]" />
            <span>Signature Aaramam Centre Packages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-heading font-black text-[#132415] tracking-tight leading-snug">
            Dedicated postnatal care for mother &amp; Baby <br className="hidden sm:block" />
            <span className="font-serif italic font-normal text-[#2b4c2f]">
              offering traditional Ayurvedic treatments &amp; personalised wellness.
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#3d503f] font-medium leading-relaxed max-w-2xl mx-auto">
            Nurturing Support For A Comfortable Motherhood Journey at Aaramam Prasavareksha Centre, Feroke, Kozhikode.
          </p>
        </motion.div>

        {/* 4 Authentic Postnatal & Wellness Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {POSTNATAL_CARE_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[32px] overflow-hidden border border-[#1b3420]/10 shadow-[0_12px_36px_rgba(20,40,24,0.08)] hover:shadow-[0_20px_48px_rgba(20,40,24,0.14)] transition-all flex flex-col group"
            >
              {/* Card Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#112314]">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#112314]/85 text-[#fae788] border border-[#d4a034]/40 text-xs font-heading font-bold uppercase tracking-wider backdrop-blur-md">
                    {pkg.size}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading font-bold text-lg sm:text-xl leading-tight text-white drop-shadow-md">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#fae788] font-medium mt-1">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-xs sm:text-sm text-[#48604a] leading-relaxed">
                  {pkg.description}
                </p>

                {/* Highlights list */}
                {pkg.inclusions && pkg.inclusions.length > 0 && (
                  <div className="space-y-2.5 pt-3 border-t border-[#1b3420]/10">
                    <span className="text-xs font-heading font-bold text-[#1b3420] uppercase tracking-wider block">
                      What's Included:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-[13px] text-[#354f38]">
                      {pkg.inclusions.map((item: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-[#b18137] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Card CTA: Explore Now! via WhatsApp */}
                <a
                  href={pkg.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-[#112314] via-[#1a3820] to-[#112314] hover:from-[#19361e] hover:to-[#224828] text-[#fae788] border border-[#d4a034]/40 font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all cursor-pointer group-hover:border-[#fae788]"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Explore Now!</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Classical In-Sanctuary Therapies Grid */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#dae3d8]">
        <div className="max-w-[1720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-14"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1b3420]/10 border border-[#1b3420]/20 text-[#1b3420] text-xs font-heading font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#b18137]" />
              <span>Classical In-Sanctuary Rituals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#132415] tracking-tight">
              Rejuvenation &amp; <span className="font-serif italic font-normal text-[#2b4c2f]">Therapeutic Care</span>
            </h2>
            <p className="text-sm sm:text-base text-[#405643] leading-relaxed">
              Classical Panchakarma treatments, herbal steam baths, and synchronized massage therapy administered by experienced therapists under physician supervision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {HERO_TREATMENTS.map((treatment, idx) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/90 backdrop-blur-sm rounded-[28px] overflow-hidden border border-[#1b3420]/10 shadow-[0_10px_30px_rgba(20,40,24,0.06)] hover:shadow-[0_16px_36px_rgba(20,40,24,0.12)] transition-all flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-[#112314]">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#112314]/85 text-[#fae788] text-[10px] font-heading font-bold uppercase tracking-wider backdrop-blur-md">
                      {treatment.size}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#112314] mb-1.5">
                      {treatment.name}
                    </h4>
                    <p className="text-xs text-[#48604a] leading-relaxed line-clamp-3">
                      {treatment.description}
                    </p>
                  </div>

                  <button
                    onClick={() => openQuickView(treatment)}
                    className="w-full py-2.5 px-3 rounded-full bg-[#112314] hover:bg-[#1c3a21] text-[#fae788] text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aaramam Center Amenities & Location Summary */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1500px] mx-auto w-full">
        <div className="bg-[#112314] text-white p-8 sm:p-12 rounded-[36px] shadow-2xl border border-[#d4a034]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a034]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-heading font-bold text-[#fae788] uppercase tracking-[0.2em] block">
                Aaramam Centre Facilities
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white">
                Everything for Mother, Baby &amp; Bystander Comfort
              </h3>
              <p className="text-xs sm:text-sm text-[#cfdcd0] leading-relaxed">
                Furnished room setups with private sleeping spaces, attached hot water baths, common living hall with TV, fridge, high-speed Wi-Fi, laundry amenities, and fresh warm postpartum meals prepared in adherence with classical Vata dosha diet guidelines.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#fae788]">
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-[#d4a034]" />
                  <span>Near Govt Taluk Hospital (Chantha), Feroke, Kozhikode, Keralam 673631</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-[#d4a034]" />
                  <span>24/7 Nursing &amp; Clinical Attendants</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-3">
              <button
                onClick={() => handleEnquireWhatsApp('Aaramam Centre Consultation', 'General Inquiry')}
                className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#d4a034] via-[#fae788] to-[#b18137] text-[#112314] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg hover:brightness-105 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#112314]" />
                <span>Chat with Senior Doctor</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <JoinCommunitySection />
    </div>
  );
};
