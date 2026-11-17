import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Sparkles, Navigation, Share2 } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { useSEO } from '../hooks/useSEO';

export const ContactPage: React.FC = () => {
  useSEO({
    title: 'Consultation & Sanctuary Desk • Aaramam Ayurveda Feroke',
    description: 'Get in touch with senior Ayurvedic physicians at Aaramam Feroke, Kozhikode. Enquire about postnatal stay, mother-baby suites, and doctor appointments.',
    image: '/images/hero-wide.jpg',
    url: 'https://aaramamcare.com/contact',
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Ayurvedic Postnatal Care',
    bystander: '1 Bystander Included',
    notes: '',
  });

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Aaramam Sanctuary Team,\n\nI would like to inquire about consultation and admission at your Feroke Centre (Kozhikode).\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested In: ${formData.service}\nBystander: ${formData.bystander}\nNotes: ${formData.notes || 'None'}\n\nPlease share availability details.`
    );
    window.open(`https://wa.me/917034641282?text=${text}`, '_blank');
  };

  const contactCards = [
    {
      icon: <MapPin className="w-6 h-6 text-[#fae788]" />,
      title: 'Sanctuary Address',
      line1: 'Near Govt Taluk Hospital (Chantha)',
      line2: 'Feroke, Kozhikode, Keralam 673631',
      badge: 'Aaramam Prasavareksha Centre',
    },
    {
      icon: <Phone className="w-6 h-6 text-[#fae788]" />,
      title: 'Consultation Helpline',
      line1: '+91 70346 41282',
      line2: 'aaramcare@gmail.com',
      badge: 'Direct Doctor Support',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#fae788]" />,
      title: 'Sanctuary Hours',
      line1: 'Monday – Sunday: 8:00 AM – 8:00 PM',
      line2: '24/7 In-House Postnatal Nursing',
      badge: 'Open All 7 Days',
    },
  ];

  return (
    <div className="w-full max-w-full min-w-0 flex flex-col bg-[#e4eae2]">
      {/* Reusable Page Hero with Dark Sanctuary Theme, Matching Background & Scalloped Wave */}
      <PageHero
        title="Connect with Our"
        highlightTitle="Sanctuary Doctors"
        description="Whether planning your postnatal stay, booking a restorative therapy, or seeking holistic health guidance, our medical directors and compassionate team at Feroke, Kozhikode are here for you."
        breadcrumbs={[{ label: 'Contact Us' }]}
        highlights={['Feroke, Kozhikode', 'Direct Doctor Helpline', '+91 70346 41282', 'aaramcare@gmail.com']}
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
                <p className="text-sm font-medium text-[#2d4231]">
                  {card.line1}
                </p>
                <p className="text-xs text-[#526d55] mt-0.5">
                  {card.line2}
                </p>
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
          
          {/* Left: Interactive Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[36px] border border-[#1b3420]/10 shadow-[0_16px_40px_rgba(20,40,24,0.08)]"
          >
            <div className="space-y-3 mb-8">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1b3420]/10 border border-[#1b3420]/20 text-[#1b3420] text-xs font-heading font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#b18137]" />
                <span>Quick WhatsApp Consultation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#132415] tracking-tight">
                Send an Admission or <br />
                <span className="font-serif italic font-normal text-[#2b4c2f]">Therapy Inquiry</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#405643] leading-relaxed">
                Fill out the brief details below to immediately connect with our senior doctor desk via official WhatsApp.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSend} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-heading font-bold text-[#1b3420] uppercase tracking-wider block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Menon"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f4f7f3] border border-[#1b3420]/15 text-sm text-[#112314] focus:outline-none focus:border-[#b18137] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-heading font-bold text-[#1b3420] uppercase tracking-wider block">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f4f7f3] border border-[#1b3420]/15 text-sm text-[#112314] focus:outline-none focus:border-[#b18137] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-heading font-bold text-[#1b3420] uppercase tracking-wider block">
                    Program / Treatment
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f4f7f3] border border-[#1b3420]/15 text-sm text-[#112314] focus:outline-none focus:border-[#b18137] transition-colors"
                  >
                    <option value="Ayurvedic Postnatal Care">Ayurvedic Postnatal Care</option>
                    <option value="Ayurvedic Postnatal Therapies">Ayurvedic Postnatal Therapies</option>
                    <option value="Ayurvedic Wellness Therapies">Ayurvedic Wellness Therapies</option>
                    <option value="Beauty & Skin Care">Beauty &amp; Skin Care</option>
                    <option value="Abhyanga Synchronized Herbal Massage">Abhyanga Synchronized Herbal Massage</option>
                    <option value="Shirodhara Continuous Medicated Oil Stream">Shirodhara Continuous Medicated Oil Stream</option>
                    <option value="Herbal Kizhi Poultice Therapy">Herbal Kizhi Poultice Therapy</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-heading font-bold text-[#1b3420] uppercase tracking-wider block">
                    Bystander Accommodation
                  </label>
                  <select
                    value={formData.bystander}
                    onChange={(e) => setFormData({ ...formData, bystander: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f4f7f3] border border-[#1b3420]/15 text-sm text-[#112314] focus:outline-none focus:border-[#b18137] transition-colors"
                  >
                    <option value="1 Bystander Included (Mother + Baby + Bystander)">1 Bystander Included (Mother + Baby + Bystander)</option>
                    <option value="Mother + Baby Only (No Bystander)">Mother + Baby Only (No Bystander)</option>
                    <option value="Single Individual Therapy (Outpatient)">Single Individual Therapy (Outpatient)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-heading font-bold text-[#1b3420] uppercase tracking-wider block">
                  Any Specific Requirements or Due Date
                </label>
                <textarea
                  rows={3}
                  placeholder="Expected delivery date, chronic pains, dietary preferences, or questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#f4f7f3] border border-[#1b3420]/15 text-sm text-[#112314] focus:outline-none focus:border-[#b18137] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#112314] via-[#1a3820] to-[#112314] text-[#fae788] border border-[#d4a034]/40 font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg hover:brightness-105 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Connect with Doctor on WhatsApp</span>
              </button>
            </form>
          </motion.div>

          {/* Right: Mattannur Sanctuary Map & Arrival Details */}
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
                    Visiting Feroke Centre
                  </h4>
                  <p className="text-xs text-[#fae788]">Kozhikode, Keralam</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#cfded0] leading-relaxed">
                <p>
                  Conveniently situated near Govt Taluk Hospital (Chantha), Feroke, Kozhikode, Keralam 673631.
                </p>
                <p>
                  Our centre provides dedicated postnatal mother &amp; baby recovery, traditional Ayurvedic therapies, and personalised assistance.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Govt+Taluk+Hospital+Feroke+Kozhikode+Kerala+673631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#d4a034]/20 border border-[#d4a034]/40 text-[#fae788] text-xs font-heading font-bold uppercase tracking-wider transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Doctor Phone Card */}
            <div className="bg-white p-6 rounded-[28px] border border-[#1b3420]/10 shadow-md flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#112314] flex items-center justify-center text-[#fae788] shrink-0">
                <Phone className="w-5 h-5 text-[#fae788]" />
              </div>
              <div>
                <h5 className="font-heading font-bold text-sm text-[#112314]">
                  Immediate Postnatal &amp; Doctor Desk
                </h5>
                <a
                  href="tel:7034641282"
                  className="text-base font-bold text-[#b18137] hover:underline"
                >
                  +91 70346 41282
                </a>
                <p className="text-[11px] text-[#526d55]">Contact : 7034641282 • aaramcare@gmail.com</p>
              </div>
            </div>

            {/* Social Media Channels Card */}
            <div className="bg-white p-6 rounded-[28px] border border-[#1b3420]/10 shadow-md space-y-3.5">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#112314] flex items-center justify-center text-[#fae788] shrink-0 shadow-2xs">
                  <Share2 className="w-5 h-5 text-[#fae788]" />
                </div>
                <div>
                  <h5 className="font-heading font-bold text-sm text-[#112314]">
                    Connect on Social Media
                  </h5>
                  <p className="text-[11px] text-[#526d55]">Follow our daily sanctuary rituals &amp; mother care</p>
                </div>
              </div>

              {/* 6 Social Media Vector Icons: FB / Insta / Youtube / X / Linkedin / Pintrest */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="w-10 h-10 rounded-full bg-[#112314] hover:bg-[#1b3820] text-[#fae788] border border-[#d4a034]/40 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="w-10 h-10 rounded-full bg-[#112314] hover:bg-[#1b3820] text-[#fae788] border border-[#d4a034]/40 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 group"
                >
                  <svg className="w-4 h-4 fill-none stroke-current group-hover:text-white transition-colors" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                  className="w-10 h-10 rounded-full bg-[#112314] hover:bg-[#1b3820] text-[#fae788] border border-[#d4a034]/40 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  title="X (Twitter)"
                  className="w-10 h-10 rounded-full bg-[#112314] hover:bg-[#1b3820] text-[#fae788] border border-[#d4a034]/40 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 group"
                >
                  <svg className="w-3.5 h-3.5 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="w-10 h-10 rounded-full bg-[#112314] hover:bg-[#1b3820] text-[#fae788] border border-[#d4a034]/40 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.7a1.45 1.45 0 1 0 1.45 1.45A1.45 1.45 0 0 0 7.86 6.7z"/>
                  </svg>
                </a>

                {/* Pinterest */}
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  title="Pinterest"
                  className="w-10 h-10 rounded-full bg-[#112314] hover:bg-[#1b3820] text-[#fae788] border border-[#d4a034]/40 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
