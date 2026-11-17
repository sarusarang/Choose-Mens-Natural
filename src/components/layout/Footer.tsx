import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0e1d11] text-[#cfdcce] border-t border-[#d4a034]/25 pt-12 sm:pt-16 pb-0 overflow-hidden select-none w-full">
      
      {/* Soft, gentle ambient glow spanning the full footer so it blends seamlessly into both the upper section and hands */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[750px] bg-[#d4a034]/06 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#d4a034]/04 rounded-full blur-[140px] pointer-events-none" />

      {/* =========================================================================
          TOP ROW: Brand Profile & Clean Categorized Links (No Newsletter)
          Constrained inside max-w-[1440px] with proper gaps and bigger legible typography
         ========================================================================= */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 pb-8 sm:pb-10">
          
          {/* Brand Info (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            <Link to="/" className="inline-flex items-center space-x-3.5 group">
              <div className="flex items-center justify-center p-2 rounded-2xl bg-[#142817] border border-[#d4a034]/40 shadow-[0_4px_20px_rgba(212,160,52,0.2)] group-hover:border-[#fae788]/80 transition-all duration-300">
                <img
                  src="/aaramam-logo.png"
                  alt="Aaramam Logo"
                  className="h-10 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(212,160,52,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-brand-title text-2xl sm:text-[30px] font-bold text-white tracking-wider leading-none">
                  Aaramam
                </span>
                <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.26em] font-semibold text-[#fae788] mt-1.5">
                  Ayurveda Sanctuary
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-[14.5px] text-[#a4bba6] max-w-md leading-relaxed">
              Dedicated maternal sanctuary upholding the pure traditions of Kerala Ayurveda. Preserving maternal strength, authentic postnatal care rituals, and newborn wellness guided by senior BAMS physicians.
            </p>

            {/* Social Media Links with Luxury Rounded Outline Icons */}
            <div className="pt-1">
              <span className="text-[11px] sm:text-xs font-bold text-[#fae788] uppercase tracking-[0.22em] block mb-3">
                Connect With Us
              </span>
              <div className="flex flex-wrap gap-2.5 text-[#fae788]">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current group-hover:text-white transition-colors" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917034641282"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
                  title="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.07-.999-.074-.532-.209-1.282-.676-2.096-1.49-.838-.838-1.344-1.638-1.574-2.193-.217-.525-.011-1.015.228-1.253.181-.182.404-.32.61-.32.062 0 .121.004.175.013.161.025.297.086.417.375.147.355.503 1.226.547 1.316.044.09.073.195.015.31-.059.115-.088.187-.176.29-.088.103-.186.23-.266.309-.09.088-.184.184-.079.364.105.18.468.772 1.005 1.249.692.616 1.275.807 1.455.897.18.09.285.076.39-.044.106-.12.45-.526.57-.706.12-.18.24-.15.405-.09.165.06 1.05.495 1.23.585.18.09.3.135.345.21.045.075.045.435-.099.84z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4a034]/20 border border-[#d4a034]/30 hover:border-[#fae788] flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.7a1.45 1.45 0 1 0 1.45 1.45A1.45 1.45 0 0 0 7.86 6.7z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Navigation Links (2 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-3.5"
          >
            <h4 className="text-xs sm:text-[13px] font-heading font-extrabold text-[#fae788] uppercase tracking-[0.22em] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-[14px] sm:text-[15px] text-[#b6ccb8]">
              <li><Link to="/" className="hover:text-[#fae788] transition-colors block py-0.5 font-medium">Home</Link></li>
              <li><Link to="/history" className="hover:text-[#fae788] transition-colors block py-0.5 font-medium">Our History</Link></li>
              <li><Link to="/services" className="hover:text-[#fae788] transition-colors block py-0.5 font-medium">Service &amp; Packages</Link></li>
              <li><Link to="/feedback" className="hover:text-[#fae788] transition-colors block py-0.5 font-medium">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-[#fae788] transition-colors block py-0.5 font-medium">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Sacred Disciplines (2 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-3.5"
          >
            <h4 className="text-xs sm:text-[13px] font-heading font-extrabold text-[#fae788] uppercase tracking-[0.22em] mb-4">
              Sanctuary Care
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-[14px] sm:text-[15px] text-[#b6ccb8]">
              <li><Link to="/services#packages" className="hover:text-[#fae788] transition-colors block py-0.5 font-medium">Prasava Raksha</Link></li>
              <li><Link to="/services#packages" className="hover:text-[#fae788] transition-colors block py-0.5 font-medium">Postnatal Therapies</Link></li>
              <li><Link to="/services#packages" className="hover:text-[#fae788] transition-colors block py-0.5 font-medium">Wellness Therapies</Link></li>
              <li><Link to="/services#packages" className="hover:text-[#fae788] transition-colors block py-0.5 font-medium">Beauty &amp; Skin Care</Link></li>
              <li><Link to="/services#packages" className="hover:text-[#fae788] transition-colors block py-0.5 font-medium">Doctor Consultations</Link></li>
            </ul>
          </motion.div>

          {/* Column 4: Sanctuary Desk & Contacts (3 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-3.5"
          >
            <h4 className="text-xs sm:text-[13px] font-heading font-extrabold text-[#fae788] uppercase tracking-[0.22em] mb-4">
              Sanctuary Desk
            </h4>
            <div className="space-y-3 sm:space-y-3.5 text-[13.5px] sm:text-[14.5px] text-[#cfded0]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#d4a034] shrink-0 mt-1" />
                <div className="space-y-0.5 leading-snug">
                  <p className="font-bold text-white text-[14px] sm:text-[15px]">Aaramam prasavareksha centre</p>
                  <p className="text-[#a8bea9]">Near Govt Taluk hospital (chantha)</p>
                  <p className="text-[#a8bea9]">Feroke , Kozhikode, Keralam 673631</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 pt-0.5">
                <Phone className="w-4 h-4 text-[#d4a034] shrink-0" />
                <a href="tel:7034641282" className="hover:text-[#fae788] transition-colors font-medium">
                  Direct Line: +91 7034641282
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#d4a034] shrink-0" />
                <a href="mailto:aaramcare@gmail.com" className="hover:text-[#fae788] transition-colors font-medium underline underline-offset-2">
                  aaramcare@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* =========================================================================
          CENTER ARTWORK STAGE: FULL BLEED (Edge-to-Edge)
          - Delicate, soft ambient lighting (No harsh yellow spot)
          - Perfect balanced gap: hands frame the middle content
          - Big text fully seeing properly across the bottom
         ========================================================================= */}
      <div className="relative w-full h-[260px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[440px] xl:h-[480px] flex items-center justify-center overflow-hidden mt-1 mb-0">
        
        {/* Left Hand: Anchored to the left edge, balanced width (38-40%) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-[35%] -translate-y-1/2 w-[40%] sm:w-[39%] md:w-[38%] lg:w-[37%] xl:w-[35%] max-w-[580px] pointer-events-none z-10"
        >
          <motion.img
            animate={{
              x: [0, 8, 0],
              y: [0, -6, 0],
              rotate: [0, -0.5, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            src="/hand-01.png"
            alt="Sacred healing hand"
            className="w-full h-auto object-contain filter drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]"
          />
        </motion.div>

        {/* Right Hand: Anchored to the right edge, balanced width (38-40%) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 top-[35%] -translate-y-1/2 w-[40%] sm:w-[39%] md:w-[38%] lg:w-[37%] xl:w-[35%] max-w-[580px] pointer-events-none z-10"
        >
          <motion.img
            animate={{
              x: [0, -8, 0],
              y: [0, 6, 0],
              rotate: [0, 0.5, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            src="/hand-02.png"
            alt="Nurturing hand"
            className="w-full h-auto object-contain filter drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]"
          />
        </motion.div>

        {/* Center Connection: Subtle delicate golden spark framed by fingertips */}
        <div className="absolute top-[35%] -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center px-2 max-w-[260px] sm:max-w-[320px] pointer-events-none space-y-2">
          
          {/* Subtle Delicate Golden Spark */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.7, 0.95, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative flex items-center justify-center w-6 h-6 mb-0.5"
          >
            <div className="absolute w-12 h-12 rounded-full bg-[#d4a034]/15 blur-md pointer-events-none" />
            <div className="w-2 h-2 rounded-full bg-[#fae788] shadow-[0_0_12px_rgba(250,231,136,0.8)]" />
            <Sparkles className="absolute w-3.5 h-3.5 text-[#fae788] animate-pulse" />
          </motion.div>

          {/* Central Elegant Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-1"
          >
            <span className="text-xs sm:text-[13px] font-heading font-extrabold text-[#fae788] tracking-[0.25em] uppercase block drop-shadow-[0_2px_10px_rgba(212,160,52,0.5)]">
              © 2026 Aaramam
            </span>
            <p className="text-[11px] sm:text-xs text-[#b0c8b2] font-serif italic max-w-[240px] sm:max-w-[280px] leading-snug drop-shadow-sm">
              Nurturing Motherhood. Preserving Generational Ayurvedic Care.
            </p>
          </motion.div>
        </div>

        {/* =========================================================================
            MASSIVE GOLDEN FADING WATERMARK TITLE ("AARAMAM")
            - Positioned cleanly across the bottom
            - Sized responsively so all 7 letters (A-A-R-A-M-A-M) are 100% visible
            - Rich golden gradient clearly visible and fading elegantly
           ========================================================================= */}
        <div className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 inset-x-0 w-full pointer-events-none select-none flex justify-center items-end z-0 px-2 sm:px-4">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-brand-title font-bold text-[13.2vw] sm:text-[12.5vw] md:text-[12vw] lg:text-[11.5vw] xl:text-[170px] 2xl:text-[200px] tracking-[0.05em] sm:tracking-[0.07em] leading-[0.8] text-center bg-gradient-to-b from-[#d4a034]/80 via-[#fae788]/45 to-[#d4a034]/12 bg-clip-text text-transparent w-full drop-shadow-[0_4px_35px_rgba(212,160,52,0.28)] translate-y-[2%]"
          >
            AARAMAM
          </motion.h1>
        </div>

      </div>

    </footer>
  );
};