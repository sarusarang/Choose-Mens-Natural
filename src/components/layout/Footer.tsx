import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, ExternalLink, MapPin, Phone } from 'lucide-react';
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

            {/* Social Media Icons (FB / Insta / Youtube / X / Linkedin / Pintrest) */}
            <div className="pt-2">
              <span className="text-[10.5px] font-bold text-[#fae788] uppercase tracking-wider block mb-2.5">
                Connect With Us
              </span>
              <div className="flex flex-wrap gap-2 text-[#fae788]">
                {/* Facebook (FB) */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105 group"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram (Insta) */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105 group"
                  title="Instagram"
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
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105 group"
                  title="YouTube"
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
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105 group"
                  title="X (Twitter)"
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
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105 group"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.7a1.45 1.45 0 1 0 1.45 1.45A1.45 1.45 0 0 0 7.86 6.7z"/>
                  </svg>
                </a>

                {/* Pinterest (Pintrest) */}
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105 group"
                  title="Pinterest"
                >
                  <svg className="w-4 h-4 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Nav Links Column 1: Navbar Navigation Items */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-bold text-[#fae788] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#9eb6a0]">
              <li><Link to="/" className="hover:text-[#fae788] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#fae788] transition-colors">About</Link></li>
              <li><Link to="/history" className="hover:text-[#fae788] transition-colors">History</Link></li>
              <li><Link to="/services" className="hover:text-[#fae788] transition-colors">Service</Link></li>
              <li><Link to="/feedback" className="hover:text-[#fae788] transition-colors">Feedback</Link></li>
              <li><Link to="/contact" className="hover:text-[#fae788] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Nav Links Column 2: Ayurvedic Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-bold text-[#fae788] uppercase tracking-wider">
              Ayurveda Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#9eb6a0]">
              <li><Link to="/services" className="hover:text-[#fae788] transition-colors">Abhyanga Full Body Massage</Link></li>
              <li><Link to="/services" className="hover:text-[#fae788] transition-colors">Shirodhara Warm Oil Therapy</Link></li>
              <li><Link to="/services" className="hover:text-[#fae788] transition-colors">Panchakarma Deep Cleansing</Link></li>
              <li><Link to="/services" className="hover:text-[#fae788] transition-colors">Herbal Kizhi Poultice Therapy</Link></li>
              <li><Link to="/services" className="hover:text-[#fae788] transition-colors">Postnatal Mother &amp; Baby Care</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-heading font-bold text-[#fae788] uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-[13px] text-[#cfded0]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#d4a034] shrink-0 mt-0.5" />
                <div className="space-y-0.5 leading-snug">
                  <p className="font-bold text-white">Aaramam prasavareksha centre</p>
                  <p className="text-[#a8bea9]">Near Govt Taluk hospital (chantha)</p>
                  <p className="text-[#a8bea9]">Feroke , Kozhikode, Keralam 673631</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#d4a034] shrink-0" />
                <a href="tel:7034641282" className="hover:text-[#fae788] transition-colors font-medium">
                  Contact : 7034641282
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#d4a034] shrink-0" />
                <a href="mailto:aaramcare@gmail.com" className="hover:text-[#fae788] transition-colors font-medium underline underline-offset-2">
                  aaramcare@gmail.com
                </a>
              </div>
            </div>
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
