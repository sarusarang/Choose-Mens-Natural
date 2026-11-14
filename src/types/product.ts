export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  category: 'soap' | 'serum' | 'cleanser' | 'treatment';
  price: number;
  originalPrice?: number;
  size: string;
  image: string;
  rating: number;
  reviewsCount: number;
  shortDesc: string;
  description: string;
  scentNotes: string[];
  keyIngredients: string[];
  skinType: string;
  isHeroFeatured?: boolean;
  isBestSeller?: boolean;
  inclusions?: string[];
  location?: string;
  whatsappUrl?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
