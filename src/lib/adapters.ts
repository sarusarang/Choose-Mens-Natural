import type { ServiceListItem, ServiceDetail } from '../types/api';
import type { Product } from '../types/product';
import { resolveMediaUrl } from './apiClient';

/**
 * Maps a backend ServiceListItem into a frontend Product for use in
 * existing product components, drawers, and modal views.
 */
export function mapServiceListItemToProduct(item: ServiceListItem): Product {
  const itemAny = item as unknown as { image_url?: string };
  const primaryImg =
    itemAny.image_url ||
    (item.gallery && item.gallery.length > 0 ? item.gallery[0] : null) ||
    item.image ||
    (item.images && item.images.length > 0 ? item.images[0].image_url || item.images[0].image : null) ||
    '/images/treatment_mother_care_1794639745090.jpg';

  const cleanPrice = parseFloat(String(item.price || '0').replace(/[^0-9.]/g, '')) || 0;

  return {
    id: item.slug || String(item.id),
    name: item.title,
    subtitle: item.subtitle || item.doctor_guidance,
    category: 'treatment',
    price: cleanPrice,
    size: item.duration_tag || '28 Days Care',
    image: resolveMediaUrl(primaryImg, '/images/treatment_mother_care_1794639745090.jpg'),
    rating: item.rating || 5.0,
    reviewsCount: item.review_count || 50,
    shortDesc: item.short_description || '',
    description: item.short_description || '',
    scentNotes: [],
    keyIngredients: item.inclusions || [],
    skinType: item.doctor_guidance || 'Physician-Guided Sanctuary Care',
    isHeroFeatured: item.is_featured,
    isBestSeller:
      item.badge_tag?.toLowerCase().includes('signature') ||
      item.badge_tag?.toLowerCase().includes('best') ||
      item.is_featured,
    inclusions: item.inclusions || [],
    location: item.location || 'Feroke, Kozhikode',
    whatsappUrl: item.whatsapp_url,
  };
}

/**
 * Maps a full ServiceDetail into a frontend Product with extended inclusions & therapies
 */
export function mapServiceDetailToProduct(detail: ServiceDetail): Product {
  const base = mapServiceListItemToProduct(detail as unknown as ServiceListItem);
  return {
    ...base,
    description: detail.detailed_description || base.description,
    keyIngredients: detail.inclusions_list?.length ? detail.inclusions_list : base.keyIngredients,
    location: detail.heritage_location || base.location,
  };
}
