import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { useSEO } from '../hooks/useSEO';
import { useSanctuaryContactInfo } from '../hooks/useAaramamApi';
import { AdmissionInquiryForm } from '../components/AdmissionInquiryForm';

export const ContactPage: React.FC = () => {
  useSEO({
    title: 'Consultation & Sanctuary Desk • Aaramam Ayurveda Feroke',
    description:
      'Get in touch with senior Ayurvedic physicians at Aaramam Feroke, Kozhikode. Enquire about postnatal stay, mother-baby suites, and doctor appointments.',
    image: '/images/hero-wide.jpg',
    url: 'https://aaramamcare.com/contact',
  });

  const { data: contactInfo } = useSanctuaryContactInfo();

  const addressLine1 =
    contactInfo?.address_line1 || 'Near Govt Taluk Hospital (Chantha)';
  const addressLine2 =
    contactInfo?.address_line2 || 'Feroke, Kozhikode, Keralam 673631';
  const helplinePhone = contactInfo?.helpline_phone || '+91 70346 41282';
  const helplineEmail = contactInfo?.email || 'aaramcare@gmail.com';
  const sanctuaryHours =
    contactInfo?.opening_hours || 'Monday – Sunday: 8:00 AM – 8:00 PM';
  const nursingHours =
    contactInfo?.nursing_hours || '24/7 In-House Postnatal Nursing';
  const centerName = contactInfo?.center_name || 'Aaramam Prasavareksha Centre';
  const googleMapsUrl =
    contactInfo?.google_maps_url ||
    'https://maps.google.com/?q=Govt+Taluk+Hospital+Feroke+Kozhikode';

  const contactCards = [
    {
      icon: <MapPin className="w-6 h-6 text-[#fae788]" />,
      title: 'Sanctuary Address',
      line1: addressLine1,
      line2: addressLine2,
      badge: centerName,
    },
    {
      icon: <Phone className="w-6 h-6 text-[#fae788]" />,
      title: 'Consultation Helpline',
      line1: helplinePhone,
      line2: helplineEmail,
      badge: 'Direct Doctor Support',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#fae788]" />,
      title: 'Sanctuary Hours',
      line1: sanctuaryHours,
      line2: nursingHours,
      badge: 'Open All 7 Days',
    },
  ];

  return (
    <div className="w-full max-w-full min-w-0 flex flex-col bg-[#e4eae2]">
      {/* Reusable Page Hero with Dark Sanctuary Theme, Matching Background & Scalloped Wave */}
      <PageHero
        title="Connect with Our"
        highlightTitle="Sanctuary Doctors"
        description={
          contactInfo?.hero_description ||
          'Whether planning your postnatal stay, booking a restorative therapy, or seeking holistic health guidance, our medical directors and compassionate team at Feroke, Kozhikode are here for you.'
        }
        breadcrumbs={[{ label: 'Contact Us' }]}
        highlights={[
          'Feroke, Kozhikode',
          'Direct Doctor Helpline',
          helplinePhone,
          helplineEmail,
        ]}
        bgImage="/images/hero-wide.jpg"
      />

      {/* 3 Contact Info Cards */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {contactCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-[32px] border border-[#1b3420]/10 shadow-[0_12px_36px_rgba(20,40,24,0.06)] hover:shadow-[0_18px_44px_rgba(20,40,24,0.12)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#112314] flex items-center justify-center shadow-md mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-[#112314] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm font-medium text-[#2d4231]">{card.line1}</p>
                <p className="text-xs text-[#526d55] mt-0.5">{card.line2}</p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#1b3420]/10">
                <span className="text-[11px] font-heading font-bold text-[#b18137] uppercase tracking-wider">
                  {card.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultation Booking Form & Sanctuary Directions Map */}
      <section className="pt-14 sm:pt-18 pb-18 sm:pb-24 px-4 sm:px-6 lg:px-12 bg-[#dae3d8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Robust Zod + React Hook Form Connected to Django REST API */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <AdmissionInquiryForm />
          </motion.div>

          {/* Right: Feroke Sanctuary Map & Arrival Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#112314] text-white p-7 sm:p-8 rounded-[36px] border border-[#d4a034]/30 shadow-xl space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#fae788]">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    {contactInfo?.visiting_center_title || 'Visiting Feroke Centre'}
                  </h4>
                  <p className="text-xs text-[#fae788]">
                    {contactInfo?.visiting_center_location || 'Kozhikode, Keralam'}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#cfded0] leading-relaxed">
                <p>
                  Conveniently situated near Govt Taluk Hospital (Chantha), Feroke, Kozhikode, Keralam 673631.
                </p>
                <p>
                  {contactInfo?.visiting_center_description ||
                    'Our centre provides dedicated postnatal mother & baby recovery, traditional Ayurvedic therapies, and personalised assistance.'}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-[#fae788] border border-[#d4a034]/40 font-heading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Helpline quick card */}
            <div className="bg-white/95 p-6 rounded-[28px] border border-[#1b3420]/10 shadow-sm space-y-2">
              <h5 className="text-xs font-bold text-[#112314] font-heading uppercase tracking-wider">
                Emergency &amp; Admissions Hotline
              </h5>
              <p className="text-xs text-[#48604a]">
                For immediate room reservations or birth date admissions:
              </p>
              <a
                href={`tel:${helplinePhone.replace(/[^0-9+]/g, '')}`}
                className="text-lg font-black text-[#112314] hover:text-[#b18137] transition-colors block"
              >
                {helplinePhone}
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
