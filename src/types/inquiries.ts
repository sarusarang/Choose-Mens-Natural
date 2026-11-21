// ============================================================================
// AARAMAM INQUIRIES & CONTACT TYPES
// ============================================================================

export interface SanctuaryContactInfo {
  center_name: string;
  tagline: string;
  hero_description: string;
  address_line1: string;
  address_line2: string;
  pincode: string;
  helpline_phone: string;
  whatsapp_number: string;
  whatsapp_digits: string;
  email: string;
  opening_hours: string;
  nursing_hours: string;
  visiting_center_title: string;
  visiting_center_location: string;
  visiting_center_description: string;
  google_maps_url: string;
  facebook_url?: string;
  instagram_url?: string;
  youtube_url?: string;
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

export interface PackageInquiryPayload {
  name: string;
  phone_number: string;
  email?: string;
  message?: string;
}

export interface GuestFeedbackPayload {
  name: string;
  email?: string;
  phone_number?: string;
  treatment_taken?: string;
  rating: number; // 1 to 5
  feedback: string;
}
