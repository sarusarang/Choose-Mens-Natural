import React from 'react';
import { Heart, Globe, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-8 bg-[#172218] text-[#cfdcce] border-t border-[#2a3c2c]/40 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-[#273a29] flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                  <circle cx="8" cy="8" r="3.2" />
                  <circle cx="16" cy="8" r="3.2" />
                  <circle cx="8" cy="16" r="3.2" />
                  <circle cx="16" cy="16" r="3.2" />
                </svg>
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                chooseme<span className="text-[#8cb08f] ml-0.5 font-medium">natural</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#9eb6a0] max-w-sm leading-relaxed">
              Handcrafting artisanal cold-processed bath soaps, pure organic plant saponins, and restorative facial serums for conscious self-care rituals.
            </p>

            <div className="flex space-x-3 pt-2 text-[#b0c8b2]">
              <a href="#" aria-label="Website" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#contact-us" aria-label="Email" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Natural Soaps
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#9eb6a0]">
              <li><a href="#products" className="hover:text-white transition-colors">Matcha &amp; Eucalyptus Bar</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Wild Lavender &amp; Oat Milk</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">French Pink Clay Polish</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Baby-Mild Calendula Honey</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Artisan Curing Rack Bundles</a></li>
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Skincare Ritual
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#9eb6a0]">
              <li><a href="#beauty-space" className="hover:text-white transition-colors">Centella Ampoule Foam</a></li>
              <li><a href="#beauty-space" className="hover:text-white transition-colors">Quick Calming Pads Serum</a></li>
              <li><a href="#beauty-space" className="hover:text-white transition-colors">Centella Asiatica Nectar</a></li>
              <li><a href="#ritual" className="hover:text-white transition-colors">Cold-Process Chemistry</a></li>
              <li><a href="#contact-us" className="hover:text-white transition-colors">Plantable Seed Paper</a></li>
            </ul>
          </div>

          {/* Nav Links Column 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Sanctuary
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#9eb6a0]">
              <li><a href="#contact-us" className="hover:text-white transition-colors">Our Ethical Philosophy</a></li>
              <li><a href="#contact-us" className="hover:text-white transition-colors">Shipping &amp; Eco Returns</a></li>
              <li><a href="#contact-us" className="hover:text-white transition-colors">Wholesale &amp; Spa Accounts</a></li>
              <li><a href="#contact-us" className="hover:text-white transition-colors">Ingredient Glossary</a></li>
              <li><a href="#contact-us" className="hover:text-white transition-colors">Contact Concierge</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7d967f] gap-4">
          <p>© 2026 choosemenatural Inc. All rights reserved.</p>

          <div className="flex items-center space-x-1.5">
            <span>powered by</span>
            <a
              href="https://extechnology.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-4 decoration-emerald-500/40 hover:decoration-emerald-400 transition-colors inline-flex items-center space-x-1"
            >
              <span>ex technology</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center space-x-1">
            <span>Handmade with</span>
            <Heart className="w-3.5 h-3.5 text-emerald-400 fill-current inline mx-0.5" />
            <span>from pure botanical extracts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
