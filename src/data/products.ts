import type { Product } from '../types/product';

export const POSTNATAL_CARE_PACKAGES: Product[] = [
  {
    id: 'ayurvedic-postnatal-care',
    name: 'Ayurvedic Postnatal Care',
    subtitle: 'Nurturing Mothers with Personalised Attention',
    category: 'treatment',
    price: 0,
    size: 'Personalised Care',
    image: '/images/service-postnatal-care.jpeg',
    rating: 5.0,
    reviewsCount: 480,
    shortDesc: 'We provide traditional Ayurvedic postnatal care, nurturing mothers with personalised attention, comfort, strength restoration and holistic wellness after childbirth.',
    description: 'We provide traditional Ayurvedic postnatal care, nurturing mothers with personalised attention, comfort, strength restoration and holistic wellness after childbirth.',
    inclusions: [
      'Personalised attention & continuous nursing care',
      'Comfort & strength restoration therapies',
      'Holistic maternal wellness after childbirth',
      'Near Govt Taluk Hospital (Chantha), Feroke, Kozhikode'
    ],
    location: 'Feroke, Kozhikode, Keralam 673631',
    scentNotes: ['Postnatal Care', 'Strength Restoration', 'Holistic Wellness'],
    keyIngredients: ['Daily Abhyanga Massage', 'Herbal Baths & Vata Diet', 'Lactation Guidance', 'Private Mother-Baby Space'],
    skinType: 'New mothers seeking strength restoration, comfort & holistic recovery',
    isBestSeller: true,
    isHeroFeatured: true,
    whatsappUrl: 'https://wa.me/917034641282?text=Hello%20Aaramam%20Ayurveda%2C%20I%20would%20like%20to%20explore%20your%20Ayurvedic%20Postnatal%20Care%20services.'
  },
  {
    id: 'ayurvedic-postnatal-therapies',
    name: 'Ayurvedic Postnatal Therapies',
    subtitle: 'Restorative Massages & Personalised Care',
    category: 'treatment',
    price: 0,
    size: 'Restorative Therapies',
    image: '/images/service-postnatal-therapies.jpeg',
    rating: 4.9,
    reviewsCount: 395,
    shortDesc: "We provide traditional Ayurvedic postnatal therapies, massages and personalised care to restore mothers' strength, comfort, relaxation and overall wellness.",
    description: "We provide traditional Ayurvedic postnatal therapies, massages and personalised care to restore mothers' strength, comfort, relaxation and overall wellness.",
    inclusions: [
      "Traditional Ayurvedic postnatal massages & therapies",
      "Restore mothers' strength, comfort and relaxation",
      "Overall physical & emotional wellness support",
      "Customized herbal decoctions & warm oils"
    ],
    location: 'Feroke, Kozhikode, Keralam 673631',
    scentNotes: ['Postnatal Therapies', 'Relaxation & Comfort', 'Warm Herbal Oils'],
    keyIngredients: ['Warm Medicated Oil Massage', 'Pelvic Healing Herbs', 'Deep Relaxation Rituals', 'Doctor Supervision'],
    skinType: 'Postnatal mothers seeking strength revival, comfort and deep relaxation',
    isBestSeller: true,
    isHeroFeatured: true,
    whatsappUrl: 'https://wa.me/917034641282?text=Hello%20Aaramam%20Ayurveda%2C%20I%20would%20like%20to%20explore%20your%20Ayurvedic%20Postnatal%20Therapies.'
  },
  {
    id: 'ayurvedic-wellness-therapies',
    name: 'Ayurvedic Wellness Therapies',
    subtitle: 'Guided by Experienced Ayurvedic Doctors',
    category: 'treatment',
    price: 0,
    size: 'Doctor-Led Wellness',
    image: '/images/service-wellness-therapies.jpeg',
    rating: 4.9,
    reviewsCount: 345,
    shortDesc: 'We offer traditional Kerala Ayurvedic therapies, promoting maternal wellness, relaxation and balanced recovery through personalised care guided by experienced Ayurvedic doctors.',
    description: 'We offer traditional Kerala Ayurvedic therapies, promoting maternal wellness, relaxation and balanced recovery through personalised care guided by experienced Ayurvedic doctors.',
    inclusions: [
      'Traditional Kerala Ayurvedic therapies & Shirodhara',
      'Maternal wellness, relaxation & balanced recovery',
      'Personalised care guided by senior Ayurvedic doctors',
      'Herbal Kizhi and classical rejuvenating protocols'
    ],
    location: 'Feroke, Kozhikode, Keralam 673631',
    scentNotes: ['Doctor-Led Therapies', 'Kerala Ayurveda', 'Balanced Recovery'],
    keyIngredients: ['Shirodhara Oil Stream', 'Herbal Kizhi Poultices', 'Physician Assessment', 'Tridosha Balancing'],
    skinType: 'Mothers & wellness seekers seeking balanced recovery and inner calmness',
    isBestSeller: false,
    isHeroFeatured: true,
    whatsappUrl: 'https://wa.me/917034641282?text=Hello%20Aaramam%20Ayurveda%2C%20I%20would%20like%20to%20explore%20your%20Ayurvedic%20Wellness%20Therapies.'
  },
  {
    id: 'beauty-and-skin-care',
    name: 'Beauty & Skin Care',
    subtitle: 'Restore Natural Radiance & Vitality',
    category: 'treatment',
    price: 0,
    size: 'Herbal Radiance',
    image: '/images/service-beauty-skincare.jpeg',
    rating: 5.0,
    reviewsCount: 310,
    shortDesc: 'We provide traditional Ayurvedic beauty and herbal skincare therapies, helping mothers restore natural radiance, relaxation and wellness after childbirth.',
    description: 'We provide traditional Ayurvedic beauty and herbal skincare therapies, helping mothers restore natural radiance, relaxation and wellness after childbirth.',
    inclusions: [
      'Traditional Ayurvedic beauty and herbal skincare therapies',
      'Restores natural radiance, glow and hydration',
      'Gentle post-delivery skin rejuvenation protocols',
      'Pure wild-harvested botanicals & saffron elixirs'
    ],
    location: 'Feroke, Kozhikode, Keralam 673631',
    scentNotes: ['Herbal Skincare', 'Natural Radiance', 'Post-Delivery Glow'],
    keyIngredients: ['Wild Turmeric (Kasturi Manjal)', 'Saffron (Kumkumadi)', 'Herbal Face Lepam', 'Nourishing Floral Extracts'],
    skinType: 'New mothers seeking to restore skin radiance, tone and gentle glow',
    isBestSeller: false,
    isHeroFeatured: true,
    whatsappUrl: 'https://wa.me/917034641282?text=Hello%20Aaramam%20Ayurveda%2C%20I%20would%20like%20to%20explore%20your%20Beauty%20%26%20Skin%20Care%20services.'
  }
];

export const HERO_TREATMENTS: Product[] = POSTNATAL_CARE_PACKAGES;
export const HERO_PRODUCTS: Product[] = POSTNATAL_CARE_PACKAGES;
export const AYURVEDA_TREATMENTS_COLLECTION: Product[] = POSTNATAL_CARE_PACKAGES;
export const NATURAL_BATH_SOAP_COLLECTION: Product[] = POSTNATAL_CARE_PACKAGES;
export const ALL_PRODUCTS: Product[] = POSTNATAL_CARE_PACKAGES;
