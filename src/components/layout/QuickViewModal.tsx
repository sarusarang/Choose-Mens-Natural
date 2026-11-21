import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Star, 
  Heart, 
  CheckCircle2, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Sparkles, 
  Stethoscope, 
  Utensils, 
  Baby, 
  ShieldCheck, 
  Phone,
  Bed,
  Bath,
  Send,
  Loader2
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useServicePackageDetail, useEnquireOnPackage } from '../../hooks/useAaramamApi';
import { resolveMediaUrl } from '../../lib/apiClient';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, isInWishlist, toggleWishlist } = useCart();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [enquirerName, setEnquirerName] = useState('');
  const [enquirerPhone, setEnquirerPhone] = useState('');
  const [enquirerMessage, setEnquirerMessage] = useState('');

  // Fetch package details from backend if slug/id exists
  const packageSlug = quickViewProduct?.id || '';
  const { data: detailData } = useServicePackageDetail(packageSlug);
  const { mutate: submitEnquiry, isPending: isEnquirySubmitting } =
    useEnquireOnPackage(packageSlug);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWished = isInWishlist(product.id);

  const displayImage = detailData?.image
    ? resolveMediaUrl(detailData.image, product.image)
    : product.image;

  const displayTitle = detailData?.title || product.name;
  const displaySubtitle = detailData?.subtitle || product.subtitle;
  const displayDesc = detailData?.detailed_description || detailData?.short_description || product.description;
  const displayLocation = detailData?.heritage_location || detailData?.location || product.location || 'Feroke, Kozhikode';
  const displayDuration = detailData?.duration_tag || product.size;
  const displayInclusions = detailData?.inclusions_list?.length
    ? detailData.inclusions_list
    : detailData?.inclusions?.length
    ? detailData.inclusions.map((i) => i.text)
    : product.inclusions || [];

  const displayTherapies = detailData?.therapies_list?.length
    ? detailData.therapies_list
    : detailData?.therapies?.length
    ? detailData.therapies.map((t) => t.name)
    : product.keyIngredients?.length
    ? product.keyIngredients
    : ['Daily Abhyanga Massage', 'Herbal Baths & Vata Diet', 'Lactation Guidance', 'Private Mother-Baby Space'];

  const whatsappUrl =
    detailData?.whatsapp_url ||
    product.whatsappUrl ||
    `https://wa.me/917034641282?text=${encodeURIComponent(
      `Hello Aaramam Ayurveda Sanctuary, I am interested in inquiring about the "${displayTitle}" (${displayDuration}) package at your Feroke Centre. Could you please share more details regarding availability and admission?`
    )}`;

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquirerName || !enquirerPhone) return;
    submitEnquiry(
      {
        name: enquirerName,
        phone_number: enquirerPhone,
        message: enquirerMessage || `Inquiry for ${displayTitle}`,
      },
      {
        onSuccess: () => {
          // Redirect to WhatsApp
          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        },
      }
    );
  };

  const defaultPillars = [
    { icon: Stethoscope, title: 'Doctor-Led Care', desc: 'Daily BAMS physician observation' },
    { icon: Utensils, title: 'Pathya Ahara', desc: 'Warm Vata postpartum diet' },
    { icon: Baby, title: 'Mother & Baby', desc: 'Gentle massage & Vethu bath' },
    { icon: Bed, title: 'Bystander Stay', desc: 'Family stay included' },
  ];

  const sanctuaryFeatures = [
    { icon: ShieldCheck, title: 'Doctor Supervised', desc: '24/7 BAMS Observation' },
    { icon: Utensils, title: 'Postpartum Diet', desc: 'Fresh Vata-Balancing Meals' },
    { icon: Bed, title: 'Private AC Suite', desc: 'Bystander Stay Included' },
    { icon: Bath, title: 'Attached Hot Bath', desc: 'Herbal Water Facilities' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4 md:p-5">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickView}
          className="fixed inset-0 bg-black/65 backdrop-blur-md"
        />

        {/* Modal Window with Native Mobile Bottom-Sheet Feel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl lg:max-w-[1180px] xl:max-w-[1220px] bg-white rounded-t-[32px] sm:rounded-[36px] shadow-2xl overflow-hidden z-10 border-2 border-[#d4a034]/35 max-h-[92vh] md:h-[630px] lg:h-[660px] flex flex-col md:flex-row mt-auto sm:mt-0"
        >
          {/* Mobile Sheet Drag Indicator */}
          <div className="w-12 h-1 bg-[#112314]/20 rounded-full mx-auto mt-2.5 mb-0.5 md:hidden shrink-0" />

          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-3.5 right-3.5 z-30 w-9 h-9 rounded-full bg-white/95 hover:bg-white flex items-center justify-center text-gray-700 shadow-md transition-all cursor-pointer border border-gray-200 hover:rotate-90 duration-300"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left Column: Visual Showcase, Herbal Therapies & Sanctuary Features */}
          <div className="md:w-5/12 bg-[#f4f7f3] p-5 sm:p-6 lg:p-7 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#1b3420]/10 shrink-0 overflow-y-auto">
            <div className="space-y-3.5">
              {/* Product Image Frame */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] max-h-[240px] md:max-h-[255px] rounded-2xl overflow-hidden shadow-sm bg-[#112314]">
                <img
                  src={displayImage}
                  alt={displayTitle}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Floating Category Pill */}
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#112314]/90 backdrop-blur-md text-[#fae788] border border-[#d4a034]/40 text-[9.5px] font-extrabold rounded-full tracking-wider uppercase shadow-md flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-[#d4a034]" />
                  <span>Ayurvedic Postnatal</span>
                </span>

                {/* Duration / Tag Pill */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-white/95 backdrop-blur-md text-[#112314] text-[10px] font-bold rounded-full shadow-md flex items-center space-x-1 border border-white/70">
                  <Clock className="w-3 h-3 text-[#d4a034]" />
                  <span>{displayDuration}</span>
                </div>
              </div>

              {/* Key Herbal Elements / Botanical Therapies Card */}
              <div className="p-3 rounded-2xl bg-white/90 border border-[#dce6dc] shadow-2xs space-y-1.5">
                <div className="flex items-center justify-between text-[10.5px] font-extrabold text-[#112314] uppercase tracking-wider">
                  <span className="flex items-center space-x-1.5">
                    <Sparkles className="w-3 h-3 text-[#d4a034]" />
                    <span>Therapeutic Care &amp; Formulations</span>
                  </span>
                  <span className="text-[9.5px] text-[#8b6521] font-bold">Ayurvedic</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {displayTherapies.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-[#edf4ed] text-[#244227] border border-[#d3e3d3] flex items-center space-x-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#d4a034]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Sanctuary Guarantee 4-Feature Grid */}
              <div className="grid grid-cols-2 gap-1.5">
                {sanctuaryFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-white/95 border border-[#dce6dc] flex items-center space-x-2"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#112314] text-[#fae788] flex items-center justify-center shrink-0">
                        <Icon className="w-3 h-3 text-[#fae788]" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-[10px] font-heading font-bold text-[#112314] truncate leading-tight">
                          {feat.title}
                        </h5>
                        <p className="text-[9px] text-[#5c6e5e] truncate">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 30+ Years Generational Vaidya Heritage Seal */}
              <div className="p-2.5 rounded-2xl bg-gradient-to-r from-[#112314] via-[#1a381d] to-[#112314] text-[#fae788] border border-[#d4a034]/40 flex items-center space-x-2.5 shadow-xs">
                <div className="w-7 h-7 rounded-full bg-[#d4a034]/20 border border-[#d4a034]/60 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#fae788]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10.5px] font-heading font-black text-white leading-tight">
                    30+ Years Generational Vaidya Heritage
                  </p>
                  <p className="text-[9px] text-[#cfdcd0] truncate mt-0.5">
                    Aaramam Centre • Near Govt Taluk Hospital, Feroke
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Doctor Desk Contact Bar */}
            <div className="mt-3 pt-2.5 border-t border-[#1b3420]/10 flex items-center justify-between text-xs text-[#48604a]">
              <span className="font-medium text-[11px]">Direct Doctor Desk:</span>
              <a
                href="tel:917034641282"
                className="font-bold text-[#112314] hover:text-[#d4a034] flex items-center space-x-1.5 transition-colors text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4a034]" />
                <span>+91 70346 41282</span>
              </a>
            </div>
          </div>

          {/* Right Column: Detailed Package Information + PINNED Bottom Action Footer */}
          <div className="md:w-7/12 flex flex-col justify-between bg-white overflow-hidden">
            
            {/* Scrollable Details Area */}
            <div className="p-5 sm:p-6 md:p-7 lg:p-8 overflow-y-auto flex-1 space-y-4 pr-6">
              
              {/* Rating & Prasava Raksha Tag */}
              <div className="flex items-center justify-between text-xs pr-10">
                <div className="flex items-center space-x-1.5 text-[#d4a034] font-bold">
                  <Star className="w-3.5 h-3.5 fill-[#d4a034] text-[#d4a034]" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400 font-normal">({product.reviewsCount} verified stays)</span>
                </div>
                <span className="bg-[#edf4ed] text-[#2e5433] px-2.5 py-0.5 rounded-full font-bold uppercase text-[9.5px] tracking-wider border border-[#d7e6d7]">
                  Prasava Raksha
                </span>
              </div>

              {/* Title, Subtitle & Location */}
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-black text-[#122314] tracking-tight leading-snug">
                  {displayTitle}
                </h3>
                {displaySubtitle && (
                  <p className="mt-0.5 text-xs font-bold text-[#8b6521]">
                    {displaySubtitle}
                  </p>
                )}
                <div className="mt-1 flex items-center space-x-1 text-[11px] text-[#526a54]">
                  <MapPin className="w-3.5 h-3.5 text-[#d4a034] shrink-0" />
                  <span>Aaramam Sanctuary • {displayLocation}</span>
                </div>
              </div>

              {/* Package Description */}
              <p className="text-xs text-[#465b49] leading-relaxed">
                {displayDesc}
              </p>

              {/* 4 Key Pillar Grid Cards */}
              <div className="grid grid-cols-2 gap-2 pt-0.5">
                {defaultPillars.map((pillar, pIdx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pIdx}
                      className="p-2 sm:p-2.5 rounded-xl bg-[#f7f9f6] border border-[#e1ece1] flex items-center space-x-2"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#112314] text-[#fae788] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#fae788]" />
                      </div>
                      <div>
                        <h4 className="text-[10.5px] font-heading font-bold text-[#112314] leading-tight">
                          {pillar.title}
                        </h4>
                        <p className="text-[9.5px] text-[#556957] leading-snug">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Package Inclusions Detailed List */}
              {displayInclusions.length > 0 && (
                <div className="pt-2.5 border-t border-gray-100">
                  <span className="text-[10px] font-extrabold text-[#112314] uppercase tracking-wider block mb-2">
                    What's Included in this Sanctuary Package:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#354f38]">
                    {displayInclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5 bg-[#f9faf8] p-1.5 sm:p-2 rounded-xl border border-gray-100 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a034] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* In-Modal Direct Enquiry Form Toggle */}
              {showEnquiryForm && (
                <div className="p-4 rounded-2xl bg-[#f5f8f5] border border-[#1b3420]/15 space-y-3">
                  <h5 className="text-xs font-bold text-[#112314] font-heading uppercase tracking-wider">
                    Quick Admission Inquiry for {displayTitle}
                  </h5>
                  <form onSubmit={handleEnquirySubmit} className="space-y-2.5">
                    <input
                      required
                      type="text"
                      placeholder="Your Full Name *"
                      value={enquirerName}
                      onChange={(e) => setEnquirerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#112314]"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Phone / WhatsApp Number *"
                      value={enquirerPhone}
                      onChange={(e) => setEnquirerPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#112314]"
                    />
                    <textarea
                      rows={2}
                      placeholder="Health requirements or delivery date (Optional)"
                      value={enquirerMessage}
                      onChange={(e) => setEnquirerMessage(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#112314]"
                    />
                    <button
                      type="submit"
                      disabled={isEnquirySubmitting}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#112314] hover:bg-[#1a381d] text-[#fae788] text-xs font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer disabled:opacity-60"
                    >
                      {isEnquirySubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Connecting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send &amp; Open WhatsApp Chat</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* PINNED Bottom Action Footer (Always 100% visible on screen!) */}
            <div className="p-4 sm:px-6 sm:py-4 bg-white border-t border-gray-100 flex items-center space-x-2 sm:space-x-3 shrink-0 shadow-[0_-4px_16px_rgba(0,0,0,0.04)] z-20">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 sm:px-6 rounded-full bg-gradient-to-r from-[#112314] via-[#1a381d] to-[#112314] hover:from-[#1a381d] hover:to-[#244f28] text-[#fae788] hover:text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all border border-[#d4a034]/50 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Enquire via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setShowEnquiryForm(!showEnquiryForm)}
                className="px-3.5 py-3 rounded-full border border-[#1b3420]/20 text-[#112314] hover:bg-[#f4f7f3] text-xs font-bold font-heading transition-colors cursor-pointer shrink-0"
              >
                {showEnquiryForm ? 'Hide Form' : 'Quick Form'}
              </button>

              {/* Wishlist toggle */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3 rounded-full border transition-colors cursor-pointer shrink-0 ${
                  isWished
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'border-gray-200 text-gray-500 hover:text-black hover:border-gray-400 bg-white'
                }`}
                aria-label="Save to wishlist"
                title="Save package"
              >
                <Heart className={`w-4 h-4 ${isWished ? 'fill-current' : ''}`} />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
