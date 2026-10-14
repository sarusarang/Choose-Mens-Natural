import type { Product } from '../types/product';

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

export const NATURAL_BATH_SOAP_COLLECTION: Product[] = [
  {
    id: 'soap-1',
    name: 'Matcha & Eucalyptus Cold-Process Soap Bar',
    category: 'soap',
    price: 22.50,
    originalPrice: 28.00,
    size: '140g e / 5.0 oz',
    image: '/images/product-matcha-bar.jpg',
    rating: 4.9,
    reviewsCount: 412,
    shortDesc: 'Artisanal cold-processed cleansing bar rich in antioxidant Japanese Uji matcha and invigorating eucalyptus.',
    description: 'Handcrafted in small batches and cured for six weeks. This invigorating bath soap combines organic ceremonial matcha, eucalyptus essential oil, unrefined shea butter, and extra virgin olive oil for a dense, silky lather that detoxifies and restores tired skin.',
    scentNotes: ['Wild Blue Eucalyptus', 'Ceremonial Matcha Tea', 'Crisp Pine Needle'],
    keyIngredients: ['Organic Ceremonial Matcha', 'Eucalyptus Globulus Leaf Oil', 'Fair-Trade Shea Butter', 'Saponified Olive Oil'],
    skinType: 'Ideal for normal, combination, and post-workout skin',
    isBestSeller: true
  },
  {
    id: 'soap-2',
    name: 'Wild Lavender & Oat Calming Bath Soap Bar',
    category: 'soap',
    price: 24.00,
    size: '140g e / 5.0 oz',
    image: '/images/product-lavender-bar.jpg',
    rating: 5.0,
    reviewsCount: 630,
    shortDesc: 'Ultra-gentle soothing soap with French alpine lavender, colloidal oat milk, and chamomile botanicals.',
    description: 'Formulated specifically for delicate, sensitive bath rituals. Enriched with whole colloidal oat grain and creamy coconut milk to create a cushiony lather that relieves dryness and calms the senses before rest.',
    scentNotes: ['French Alpine Lavender', 'Creamy Warm Oat', 'Roman Chamomile'],
    keyIngredients: ['Whole Colloidal Oat', 'Wild French Lavender Oil', 'Coconut Milk Cream', 'Raw Sweet Almond Oil'],
    skinType: 'Sensitive, dry, and eczema-prone skin',
    isBestSeller: true
  },
  {
    id: 'soap-3',
    name: 'French Pink Clay & Rosehip Polish Bar',
    category: 'soap',
    price: 22.00,
    size: '135g e / 4.8 oz',
    image: '/images/product-matcha-bar.jpg',
    rating: 4.8,
    reviewsCount: 245,
    shortDesc: 'Mineral-dense exfoliating clay bar for smooth, luminous, polished body skin.',
    description: 'Soft French montmorillonite pink clay draws out impurities while organic rosehip seed oil supplies essential fatty acids for silky, radiant suppleness.',
    scentNotes: ['Damask Rose Petals', 'Pink Grapefruit', 'Bergamot Peel'],
    keyIngredients: ['French Pink Kaolin Clay', 'Wild Rosehip Seed Oil', 'Saponified Coconut Oil', 'Cocoa Butter'],
    skinType: 'Dull, uneven, and combination skin'
  },
  {
    id: 'soap-4',
    name: 'Golden Honey & Calendula Baby-Mild Bar',
    category: 'soap',
    price: 26.00,
    size: '145g e / 5.1 oz',
    image: '/images/product-lavender-bar.jpg',
    rating: 4.9,
    reviewsCount: 310,
    shortDesc: 'Fragrance-free raw honey bath bar steeped in organic solar-infused calendula petals.',
    description: 'A 100% natural, unscented artisan bar formulated with raw wildflower honey and triple-infused calendula blossoms. Deeply hydrating for even the most sensitive skin barriers.',
    scentNotes: ['Raw Wildflower Nectar (Natural)', 'Sun-Drenched Calendula'],
    keyIngredients: ['Raw Wildflower Honey', 'Solar Calendula Petals', 'Cold-Pressed Avocado Oil', 'Castor Seed Oil'],
    skinType: 'Extra sensitive, baby-safe, allergy-prone'
  }
];

export const ALL_PRODUCTS: Product[] = [...HERO_PRODUCTS, ...NATURAL_BATH_SOAP_COLLECTION];
