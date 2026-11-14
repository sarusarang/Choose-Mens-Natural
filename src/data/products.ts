import type { Product } from '../types/product';

export const POSTNATAL_CARE_PACKAGES: Product[] = [
  {
    id: 'postnatal-28days',
    name: 'Extended Shared Nurture Postnatal',
    subtitle: 'Value 28 Days of Sustained Care & Privacy',
    category: 'treatment',
    price: 0,
    size: '28 Days Care',
    image: '/images/treatment_mother_care_1794639745090.jpg',
    rating: 5.0,
    reviewsCount: 480,
    shortDesc: '28-day Ayurvedic postnatal care in a shared furnished room with private sleeping space, daily warm oil massages, herbal baths, Vata diet, lactation support, 24/7 nursing & basic amenities for mother, baby & bystander.',
    description: '28-day Ayurvedic postnatal care in a shared furnished room with private sleeping space, daily warm oil massages, herbal baths, Vata diet, lactation support, 24/7 nursing & basic amenities for mother, baby & bystander. Shared hall/living area with privacy in rooms. At Mattanur Center (Opp. Airport Road, Vayanthod, Mattannur, Kannur).',
    inclusions: [
      'Shared room setup: Private cot for mother/baby + bystander space, attached bath with hot water, shared hall with TV, Wi-Fi, basic kitchen access, fridge, and laundry facilities.',
      'Capacity for one mother + one bystander in shared configuration, with meals and laundry services.',
      'Daily Abhyanga (warm oil full-body massage) to nourish'
    ],
    location: 'Mattanur Center (Opp. Airport Road, Vayanthod, Mattannur, Kannur)',
    scentNotes: ['28 Days Sustained Care', 'Mattanur Center, Kannur', '24/7 Nursing Support'],
    keyIngredients: ['Daily Abhyanga Massage', 'Herbal Baths & Vata Diet', 'Lactation Guidance', 'Shared Furnished Room'],
    skinType: 'Mother & newborn post-delivery restoration & deep rejuvenation',
    isBestSeller: true,
    isHeroFeatured: true,
    whatsappUrl: 'https://wa.me/919876543210?text=Hello%20Aaramam%20Ayurveda%2C%20I%20would%20like%20to%20enquire%20about%20the%20Extended%20Shared%20Nurture%20Postnatal%20(28%20Days)%20package.'
  },
  {
    id: 'postnatal-21days',
    name: 'Value Shared Wellness Postnatal',
    subtitle: 'Practical 21 Days of Steady Nurture & Balance',
    category: 'treatment',
    price: 0,
    size: '21 Days Care',
    image: '/images/postnatal_21days.jpg',
    rating: 4.9,
    reviewsCount: 395,
    shortDesc: '21-day Ayurvedic postnatal care in a shared furnished room with private sleeping space, daily warm oil massages, herbal baths, dosha diet, lactation guidance, 24/7 nursing & basic amenities for mother, baby & bystander.',
    description: '21-day Ayurvedic postnatal care in a shared furnished room with private sleeping space, daily warm oil massages, herbal baths, dosha diet, lactation guidance, 24/7 nursing & basic amenities for mother, baby & bystander. Shared hall/living area with privacy in rooms. At Mattanur Center (Opp. Airport Road, Vayanthod, Mattannur, Kannur).',
    inclusions: [
      'Shared room setup: Private cot for mother/baby + bystander space, attached bath with hot water, shared hall with TV, Wi-Fi, basic kitchen access, fridge, and laundry facilities.',
      'Capacity for one mother + one bystander in shared configuration, with meals and laundry services.',
      'Daily Abhyanga (warm oil full-body massage) to nourish'
    ],
    location: 'Mattanur Center (Opp. Airport Road, Vayanthod, Mattannur, Kannur)',
    scentNotes: ['21 Days Steady Nurture', 'Mattanur Center, Kannur', 'Lactation Care'],
    keyIngredients: ['Daily Warm Oil Massages', 'Dosha Balancing Diet', '24/7 Nursing Care', 'Attached Hot Water Bath'],
    skinType: 'Postnatal mothers seeking steady recovery, nourishment & bonding',
    isBestSeller: true,
    isHeroFeatured: true,
    whatsappUrl: 'https://wa.me/919876543210?text=Hello%20Aaramam%20Ayurveda%2C%20I%20would%20like%20to%20enquire%20about%20the%20Value%20Shared%20Wellness%20Postnatal%20(21%20Days)%20package.'
  },
  {
    id: 'postnatal-14days',
    name: 'Affordable Shared Recovery Postnatal',
    subtitle: 'Budget-Friendly 14 Days of Focused Healing & Rest',
    category: 'treatment',
    price: 0,
    size: '14 Days Care',
    image: '/images/postnatal_14days.jpg',
    rating: 4.9,
    reviewsCount: 310,
    shortDesc: '14-day Ayurvedic postnatal care in a shared furnished room with private sleeping space, daily warm oil massages, herbal baths, Vata diet, lactation support, 24/7 nursing & basic amenities for mother, baby & bystander.',
    description: '14-day Ayurvedic postnatal care in a shared furnished room with private sleeping space, daily warm oil massages, herbal baths, Vata diet, lactation support, 24/7 nursing & basic amenities for mother, baby & bystander. Shared hall/living area with privacy in rooms. At Mattanur Center (Opp. Airport Road, Vayanthod, Mattannur, Kannur).',
    inclusions: [
      'Shared room setup: Private cot for mother/baby + bystander space, attached bath with hot water, shared hall with TV, Wi-Fi, basic kitchen access, fridge, and laundry facilities.',
      'Capacity for one mother + one bystander in shared configuration, with meals and laundry services.',
      'Daily Abhyanga (warm oil full-body massage) to nourish'
    ],
    location: 'Mattanur Center (Opp. Airport Road, Vayanthod, Mattannur, Kannur)',
    scentNotes: ['14 Days Focused Healing', 'Mattanur Center, Kannur', 'Budget-Friendly'],
    keyIngredients: ['Daily Abhyanga Massage', 'Herbal Baths & Vata Diet', 'Private Sleeping Space', 'Meals & Laundry Included'],
    skinType: 'Essential postnatal recovery, immediate maternal healing & care',
    isBestSeller: false,
    isHeroFeatured: true,
    whatsappUrl: 'https://wa.me/919876543210?text=Hello%20Aaramam%20Ayurveda%2C%20I%20would%20like%20to%20enquire%20about%20the%20Affordable%20Shared%20Recovery%20Postnatal%20(14%20Days)%20package.'
  }
];

export const HERO_TREATMENTS: Product[] = POSTNATAL_CARE_PACKAGES;
export const HERO_PRODUCTS: Product[] = POSTNATAL_CARE_PACKAGES;
export const AYURVEDA_TREATMENTS_COLLECTION: Product[] = POSTNATAL_CARE_PACKAGES;
export const NATURAL_BATH_SOAP_COLLECTION: Product[] = POSTNATAL_CARE_PACKAGES;
export const ALL_PRODUCTS: Product[] = POSTNATAL_CARE_PACKAGES;
