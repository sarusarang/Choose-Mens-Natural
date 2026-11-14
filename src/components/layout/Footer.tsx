import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Mail, ExternalLink, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f1d11] text-[#cfdcce] border-t border-[#d4a034]/25 pt-12 sm:pt-14 pb-5 sm:pb-6">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-10 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center p-1 rounded-2xl bg-[#162b19] border border-[#d4a034]/40 shadow-[0_4px_16px_rgba(212,160,52,0.2)] group-hover:border-[#fae788]/70 transition-all duration-300">
                <img
                  src="/aaramam-logo.png"
                  alt="Aaramam Logo"
                  className="h-10 w-auto object-contain filter drop-shadow-[0_2px_6px_rgba(212,160,52,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-black text-white tracking-wide uppercase">
                  Aaramam
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#fae788]">
                  Ayurveda Sanctuary
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#9eb6a0] max-w-sm leading-relaxed">
              Authentic Ayurvedic healing, holistic wellness treatments, traditional medicinal therapies, and handcrafted botanical formulations rooted in centuries of ancestral wisdom.
            </p>

            <div className="flex flex-col space-y-2 pt-1 text-xs text-[#b8d0ba]">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4a034] shrink-0" />
                <span>Ayurvedic Wellness Retreat &amp; Healing Sanctuary</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#d4a034] shrink-0" />
                <span>Consultation: +91 98765 43210</span>
              </div>
            </div>

            <div className="flex space-x-3 pt-2 text-[#fae788]">
              <a href="#home" aria-label="Website" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4 text-[#fae788]" />
              </a>
              <a href="#contact-us" aria-label="Email" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4 text-[#fae788]" />
              </a>
            </div>
          </div>

          {/* Nav Links Column 1: Navbar Navigation Items */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-bold text-[#fae788] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#9eb6a0]">
              <li><a href="#home" className="hover:text-[#fae788] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#fae788] transition-colors">About</a></li>
              <li><a href="#history" className="hover:text-[#fae788] transition-colors">History</a></li>
              <li><a href="#services" className="hover:text-[#fae788] transition-colors">Service</a></li>
              <li><a href="#contact-us" className="hover:text-[#fae788] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Nav Links Column 2: Ayurvedic Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-bold text-[#fae788] uppercase tracking-wider">
              Ayurveda Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#9eb6a0]">
              <li><a href="#services" className="hover:text-[#fae788] transition-colors">Abhyanga Full Body Massage</a></li>
              <li><a href="#services" className="hover:text-[#fae788] transition-colors">Shirodhara Warm Oil Therapy</a></li>
              <li><a href="#services" className="hover:text-[#fae788] transition-colors">Panchakarma Deep Cleansing</a></li>
              <li><a href="#services" className="hover:text-[#fae788] transition-colors">Herbal Kizhi Poultice Therapy</a></li>
              <li><a href="#services" className="hover:text-[#fae788] transition-colors">Postnatal Mother &amp; Baby Care</a></li>
            </ul>
          </div>

          {/* Nav Links Column 3: Sanctuary Rituals */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-bold text-[#fae788] uppercase tracking-wider">
              Sanctuary
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#9eb6a0]">
              <li><a href="#about" className="hover:text-[#fae788] transition-colors">Ethical Herbal Sourcing</a></li>
              <li><a href="#history" className="hover:text-[#fae788] transition-colors">Ancestral Heritage &amp; Lineage</a></li>
              <li><a href="#contact-us" className="hover:text-[#fae788] transition-colors">Doctor Consultation Booking</a></li>
              <li><a href="#about" className="hover:text-[#fae788] transition-colors">Medicinal Plant Garden</a></li>
              <li><a href="#contact-us" className="hover:text-[#fae788] transition-colors">Concierge &amp; Enquiries</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7d967f] gap-3">
          <p>© 2026 Aaramam Ayurveda Sanctuary. All rights reserved.</p>

          <div className="flex items-center space-x-1.5">
            <span>powered by</span>
            <a
              href="https://extechnology.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fae788] hover:text-[#fbef91] font-medium underline underline-offset-4 decoration-[#d4a034]/50 hover:decoration-[#fae788] transition-colors inline-flex items-center space-x-1"
            >
              <span>ex technology</span>
              <ExternalLink className="w-3 h-3 text-[#d4a034]" />
            </a>
          </div>

          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#d4a034] fill-current inline mx-0.5" />
            <span>from pure botanical extracts &amp; Ayurvedic wisdom</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
