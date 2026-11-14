import type { Product } from '../types/product';

export const HERO_TREATMENTS: Product[] = [
  {
    id: 'treatment-1',
    name: 'Abhyanga Herbal Massage',
    category: 'treatment',
    price: 75.00,
    size: '60 Mins Session',
    image: '/images/treatment_abhyanga_1794639675730.jpg',
    rating: 4.9,
    reviewsCount: 420,
    shortDesc: 'Full-body traditional warm medicinal herbal oil therapy for deep relaxation, vitality, and cellular detox.',
    description: 'Abhyanga is the quintessential Ayurvedic therapy: continuous rhythmic body massage using warm, herb-infused classical medicated oils. Balances Vata and Pitta doshas, enhances lymphatic circulation, and nourishes the tissues (Dhatus).',
    scentNotes: ['Warm Sesame Oil', 'Bala & Ashwagandha', 'Brahmi Infusion'],
    keyIngredients: ['Ksheerabala Thailam', 'Dhanwantharam Thailam', 'Organic Cold-Pressed Sesame'],
    skinType: 'All body types, stress relief, stiffness & fatigue',
    isHeroFeatured: true
  },
  {
    id: 'treatment-2',
    name: 'Shirodhara Warm Oil Therapy',
    category: 'treatment',
    price: 95.00,
    size: '45 Mins Session',
    image: '/images/treatment_shirodhara_1794639618350.jpg',
    rating: 5.0,
    reviewsCount: 610,
    shortDesc: 'Continuous warm medicinal herbal stream over the forehead, balancing doshas and melting away stress.',
    description: 'An ancient therapy where a continuous, rhythmic stream of warm herbalized medicated oil flows gently across the forehead (Ajna chakra). Induces deep mental calm, relieves chronic insomnia, migraines, and calms an overactive nervous system.',
    scentNotes: ['Brahmi Herbal Nectar', 'Kshirabala Taila', 'Sandalwood Essence'],
    keyIngredients: ['Classical Brahmi Medicated Oil', 'Pure Coconut Milk Decoction', 'Vetiver Root Extracts'],
    skinType: 'Insomnia, mental exhaustion, anxiety & hypertension',
    isHeroFeatured: true
  },
  {
    id: 'treatment-3',
    name: 'Herbal Kizhi Poultice',
    category: 'treatment',
    price: 85.00,
    size: '60 Mins Session',
    image: '/images/treatment_kizhi_1794639697200.jpg',
    rating: 4.9,
    reviewsCount: 340,
    shortDesc: 'Warm steamed herbal bolus massage therapy relieving joint stiffness, inflammation, and fatigue.',
    description: 'Herbal Kizhi uses bundles of medicinal leaves, herbal powders, and rock salt sauteed in medicated oils, pressed rhythmically over the entire body. Excellent for arthritis, muscle soreness, back pain, and metabolic stimulation.',
    scentNotes: ['Eucalyptus Leaves', 'Camphor & Moringa', 'Kottamchukkadi'],
    keyIngredients: ['Kottamchukkadi Thailam', 'Castor & Calotropis Leaves', 'Rock Salt Powders'],
    skinType: 'Joint pain, muscular stiffness, sports recovery',
    isHeroFeatured: true
  }
];

export const HERO_PRODUCTS: Product[] = [
  {
    id: 'hero-1',
    name: 'Centella Ampoule Foam Serum',
    category: 'cleanser',
    price: 68.99,
    size: '125 ml / 4.85 FL. OZ Max',
    image: '/images/product-foam.jpg',
    rating: 4.9,
    reviewsCount: 382,
    shortDesc: 'Deep purifying botanical cleansing foam with Centella Asiatica & Chamomile extract.',
    description: 'An ultra-soothing foaming cleanser formulated with high-potency Madagascar Centella Asiatica and restorative herbal infusions. Cleanses away impurities without stripping delicate moisture.',
    scentNotes: ['Crushed Centella Leaves', 'Wild Chamomile', 'Green Vetiver'],
    keyIngredients: ['Organic Centella Asiatica', 'Plant-derived Squalane', 'Chamomile Hydrosol'],
    skinType: 'All skin types, especially sensitive & reactive',
    isHeroFeatured: true
  },
  {
    id: 'hero-2',
    name: 'Quick Calming Pads Serum',
    category: 'treatment',
    price: 27.69,
    size: '25 ml / 1.65 FL. OZ Max',
    image: '/images/product-pads.jpg',
    rating: 4.8,
    reviewsCount: 520,
    shortDesc: 'Biodegradable soothing toner pads infused with concentrated calming botanical essence.',
    description: 'Instant rescue for redness and irritation. Each pad delivers a micro-dose of cooling oat kernel extract, aloe leaf juice, and restorative Centella to balance and tone skin.',
    scentNotes: ['Fresh Aloe Vera', 'White Tea', 'Oat Blossom'],
    keyIngredients: ['Colloidal Oat', 'Wild Mint Hydrosol', 'Aloe Barbadensis'],
    skinType: 'Stressed, irritated, or redness-prone',
    isHeroFeatured: true
  },
  {
    id: 'hero-3',
    name: 'Centella Asiatica Facial Serum',
    category: 'serum',
    price: 68.99,
    size: '55 ml / 1.85 FL. OZ Max',
    image: '/images/product-serum.jpg',
    rating: 5.0,
    reviewsCount: 890,
    shortDesc: 'Cold-pressed restorative botanical nectar for a radiant, revitalized complexion.',
    description: 'Formulated with cold-extracted Centella Asiatica botanicals and golden jojoba oil. Locks in deep barrier moisture while revitalizing skin elasticity and giving a radiant youthful glow.',
    scentNotes: ['Neroli Blossom', 'Golden Jojoba', 'Centella Green Flora'],
    keyIngredients: ['92% Pure Centella Extract', 'Golden Cold-Pressed Jojoba', 'Vitamin E Botanicals'],
    skinType: 'Normal, dry, and mature skin',
    isHeroFeatured: true
  }
];

export const AYURVEDA_TREATMENTS_COLLECTION: Product[] = [
  {
    id: 'treatment-abhyanga',
    name: 'Abhyanga Herbal Body Therapy',
    category: 'treatment',
    price: 75.00,
    originalPrice: 90.00,
    size: '60 Mins Session',
    image: '/images/treatment_abhyanga_1794639675730.jpg',
    rating: 4.9,
    reviewsCount: 420,
    shortDesc: 'Synchronized whole-body warm herbal oil therapy for deep relaxation, vitality, and cellular detox.',
    description: 'Classical whole-body rhythmic massage using warm, herb-infused medicated oils. Relieves muscle tension, pacifies Vata and Pitta doshas, nourishes joints, and enhances lymphatic circulation.',
    scentNotes: ['Bala & Ashwagandha', 'Warm Medicated Sesame', 'Ksheerabala Thailam'],
    keyIngredients: ['Ksheerabala Thailam', 'Dhanwantharam Thailam', 'Cold-Pressed Sesame', 'Brahmi Infusion'],
    skinType: 'Body fatigue, stiffness, stress, and nervous exhaustion',
    isBestSeller: true
  },
  {
    id: 'treatment-shirodhara',
    name: 'Shirodhara Medicated Oil Stream',
    category: 'treatment',
    price: 95.00,
    originalPrice: 115.00,
    size: '45 Mins Session',
    image: '/images/treatment_shirodhara_1794639618350.jpg',
    rating: 5.0,
    reviewsCount: 630,
    shortDesc: 'Continuous warm medicinal herbal stream over the forehead, balancing doshas and melting away mental fatigue.',
    description: 'An ancient meditative therapy where a rhythmic stream of warm herbalized medicated oil flows gently across the third eye chakra. Induces deep mental tranquility, cures chronic insomnia, eases migraines, and calms an overstimulated nervous system.',
    scentNotes: ['Brahmi Decoction', 'Kshirabala Taila', 'Vetiver & Sandalwood'],
    keyIngredients: ['Classical Brahmi Medicated Oil', 'Pure Coconut Milk Decoction', 'Vetiver Root Extracts', 'Wild Ashwagandha'],
    skinType: 'Insomnia, chronic anxiety, burnout, and mental fatigue',
    isBestSeller: true
  },
  {
    id: 'treatment-kizhi',
    name: 'Herbal Kizhi Poultice Therapy',
    category: 'treatment',
    price: 85.00,
    originalPrice: 100.00,
    size: '60 Mins Session',
    image: '/images/treatment_kizhi_1794639697200.jpg',
    rating: 4.9,
    reviewsCount: 345,
    shortDesc: 'Steamed medicinal leaf bolus therapy to relieve joint inflammation, arthritis, and muscular stiffness.',
    description: 'Herbal Kizhi uses bundles of fresh medicinal leaves, therapeutic herbal powders, and mineral salts sauteed in medicated oils, pressed rhythmically over the entire body. Highly effective for pain relief, sciatica, and joint rejuvenation.',
    scentNotes: ['Medicinal Camphor', 'Moringa & Castor Leaves', 'Warm Kottamchukkadi'],
    keyIngredients: ['Kottamchukkadi Thailam', 'Castor & Calotropis Leaves', 'Medicinal Rock Salt', 'Kolakulathadi Churna'],
    skinType: 'Joint stiffness, back pain, muscular aches, and sports recovery'
  },
  {
    id: 'treatment-panchakarma',
    name: 'Panchakarma Deep Detox & Renewal',
    category: 'treatment',
    price: 130.00,
    originalPrice: 155.00,
    size: '90 Mins Session',
    image: '/images/treatment_panchakarma_1794639720577.jpg',
    rating: 5.0,
    reviewsCount: 310,
    shortDesc: 'Comprehensive multi-stage Ayurvedic purification protocol purging deep cellular toxins and restoring Ojas.',
    description: 'The quintessential classical Ayurvedic protocol. Combines Snehana (internal oleation), Swedana (herbal steam therapy), and therapeutic detoxification to eliminate accumulated metabolic toxins (Ama) and rekindle digestive fire (Agni).',
    scentNotes: ['Triphala Decoction', 'Dashamoola Herbs', 'Organic Ghee & Guggulu'],
    keyIngredients: ['Triphala Organic Infusion', 'Dashamoola Herbal Steam', 'Shodana Medicated Oils', 'Pure Forest Honey'],
    skinType: 'Sluggish metabolism, seasonal detox, and immune rebuilding'
  }
];

export const NATURAL_BATH_SOAP_COLLECTION: Product[] = AYURVEDA_TREATMENTS_COLLECTION;

export const ALL_PRODUCTS: Product[] = [...HERO_TREATMENTS, ...HERO_PRODUCTS, ...AYURVEDA_TREATMENTS_COLLECTION];
