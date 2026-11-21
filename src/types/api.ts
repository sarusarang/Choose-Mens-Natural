// ============================================================================
// Aaramam Ayurveda Sanctuary — TypeScript API Definitions
// ============================================================================

// ============================================================================
// 1. UI & HERO BANNER
// ============================================================================
export interface HeroBanner {
  id: number;
  title: string;
  description: string;
  image: string | null;
  image_url: string | null;
  stat_number: string;
  stat_label: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// 2. SERVICES & PACKAGES
// ============================================================================
export interface ServiceCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  order: number;
  services_count: number;
}

export interface ServiceImage {
  id: number;
  image: string;
  image_url: string | null;
  caption: string;
  alt_text: string;
  is_primary: boolean;
  order: number;
}

export interface ServiceTherapy {
  id: number;
  name: string;
  order: number;
}

export interface ServiceAmenity {
  id: number;
  title: string;
  subtext: string;
  icon: string;
  order: number;
}

export interface ServiceCarePillar {
  id: number;
  title: string;
  subtext: string;
  icon: string;
  order: number;
}

export interface ServiceInclusion {
  id: number;
  text: string;
  order: number;
}

/** Card representation in lists and grids */
export interface ServiceListItem {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  doctor_guidance: string;
  category: number | null;
  category_name: string | null;
  category_slug: string | null;
  badge_tag: string;
  duration_tag: string;
  image_overlay_badge: string;
  image: string | null;
  image_url?: string | null;
  images: ServiceImage[];
  gallery: string[];
  rating: number;
  review_count: number;
  short_description: string;
  inclusions: string[];
  location: string;
  price: string;
  is_featured: boolean;
  order: number;
  whatsapp_url: string;
}

/** Full representation for "View Package Details" modal & detail pages */
export interface ServiceDetail extends Omit<ServiceListItem, 'category' | 'inclusions'> {
  category: ServiceCategory | null;
  detailed_description: string;
  recommended_for: string;
  heritage_title: string;
  heritage_location: string;
  therapies: ServiceTherapy[];
  therapies_list: string[];
  amenities: ServiceAmenity[];
  care_pillars: ServiceCarePillar[];
  inclusions: ServiceInclusion[];
  inclusions_list: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ServiceQueryParams {
  category?: string | number; // slug or ID
  duration?: string;          // e.g. "28 Days"
  badge?: string;             // e.g. "Signature Care"
  featured?: boolean;
  search?: string;
  ordering?:
    | 'order'
    | '-order'
    | 'rating'
    | '-rating'
    | 'review_count'
    | '-review_count'
    | 'created_at'
    | '-created_at';
}

export interface ServiceInquiryPayload {
  service?: number; // Service package ID (optional if using direct /enquire/ action)
  name: string;
  phone_number: string;
  email?: string;
  message?: string;
}

export interface ServiceInquiryResponse {
  id: number;
  service: number;
  service_title: string;
  name: string;
  phone_number: string;
  email: string;
  message: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  created_at: string;
}

export interface DirectEnquireResponse {
  message: string;
  data: ServiceInquiryResponse;
}

// ============================================================================
// 3. GUEST FEEDBACK & TESTIMONIALS
// ============================================================================
export interface FeedbackStat {
  id: number;
  title: string;
  value: string;
  subtext: string;
  stars: number;
  order: number;
}

export interface FeedbackCategory {
  id: number;
  name: string;
  slug: string;
  order: number;
  testimonials_count: number;
}

export interface Testimonial {
  id: number;
  author_name: string;
  author_title: string;
  avatar: string | null;
  rating: number;
  is_verified_guest: boolean;
  treatment_tag: string;
  quote: string;
  category: number | null;
  category_name: string | null;
  category_slug: string | null;
  is_featured: boolean;
  order: number;
  created_at: string;
}

export interface TestimonialQueryParams {
  category?: string | number; // slug or ID
  treatment?: string;
  verified?: boolean;
  featured?: boolean;
  search?: string;
  ordering?: 'order' | '-order' | 'rating' | '-rating' | 'created_at' | '-created_at';
}

export interface SanctuaryStoryComment {
  user: string;
  text: string;
  time: string;
}

export interface SanctuaryStory {
  id: number;
  media_type: 'story' | 'reel' | 'photo';
  account_handle: string;
  badge_tag: string;
  title: string;
  caption: string;
  location_or_audio: string;
  image: string | null;
  video_url: string;
  instagram_post_url: string;
  likes_count: number;
  comments_count: number;
  time_ago_text: string;
  order: number;
  created_at: string;
  comments?: SanctuaryStoryComment[];
}

export interface SanctuaryStoryQueryParams {
  media_type?: 'all' | 'story' | 'reel' | 'photo';
  badge?: string;
  search?: string;
  ordering?: 'order' | '-order' | 'likes_count' | '-likes_count' | 'created_at' | '-created_at';
}

export interface GuestFeedbackPayload {
  name: string;
  phone_number?: string;
  email?: string;
  treatment_taken?: string;
  rating: number; // 1 to 5
  feedback: string; // min 10 characters
}

export interface GuestFeedbackResponse {
  id: number;
  name: string;
  phone_number: string;
  email: string;
  treatment_taken: string;
  rating: number;
  feedback: string;
  created_at: string;
}

// ============================================================================
// 4. CONTACT & ADMISSION ENQUIRIES
// ============================================================================
export interface SanctuaryContactInfo {
  id: number;
  center_name: string;
  tagline: string;
  hero_description: string;
  address_line1: string;
  address_line2: string;
  pincode: string;
  helpline_phone: string;
  whatsapp_number: string;
  email: string;
  opening_hours: string;
  nursing_hours: string;
  visiting_center_title: string;
  visiting_center_location: string;
  visiting_center_description: string;
  google_maps_url: string;
  facebook_url: string;
  instagram_url: string;
  youtube_url: string;
  twitter_url: string;
  linkedin_url: string;
  pinterest_url: string;
  updated_at: string;
}

export type AdmissionProgramType =
  | 'postnatal'
  | 'shirodhara'
  | 'panchakarma'
  | 'kizhi'
  | 'doctor_consultation'
  | 'general';

export type BystanderAccommodationType =
  | '1_bystander'
  | '2_bystanders'
  | 'no_bystander'
  | 'day_care';

export interface AdmissionInquiryPayload {
  name: string;
  phone_number: string;
  email?: string; // Optional: triggers instant client email receipt
  program: AdmissionProgramType;
  bystander_accommodation: BystanderAccommodationType;
  requirements_or_due_date?: string;
}

export interface AdmissionInquiryResponse {
  id: number;
  name: string;
  phone_number: string;
  email: string | null;
  program: AdmissionProgramType;
  program_display: string;
  bystander_accommodation: BystanderAccommodationType;
  bystander_accommodation_display: string;
  requirements_or_due_date: string;
  status: 'new' | 'contacted' | 'scheduled' | 'admitted' | 'closed';
  whatsapp_url: string;
  created_at: string;
}

export interface AdmissionInquirySubmitResponse {
  message: string;
  whatsapp_url: string;
  data: AdmissionInquiryResponse;
}

// ============================================================================
// 5. DRF VALIDATION & ERROR RESPONSES
// ============================================================================
export type DRFValidationErrors<T = Record<string, unknown>> = {
  [K in keyof T]?: string[];
} & {
  detail?: string;
  non_field_errors?: string[];
};
