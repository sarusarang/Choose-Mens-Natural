import { apiClient } from '../lib/apiClient';
import type {
  AdmissionInquiryPayload,
  AdmissionInquirySubmitResponse,
  GuestFeedbackPayload,
  PackageInquiryPayload,
  SanctuaryContactInfo,
} from '../types/inquiries';

export const inquiryService = {
  // 1. Fetch Contact Info
  getContactInfo: async (): Promise<SanctuaryContactInfo> => {
    const { data } = await apiClient.get<SanctuaryContactInfo>('/api/contact/info/');
    return data;
  },

  // 2. Submit Admission / Doctor Consultation Inquiry
  submitAdmissionInquiry: async (
    payload: AdmissionInquiryPayload
  ): Promise<AdmissionInquirySubmitResponse> => {
    const { data } = await apiClient.post<AdmissionInquirySubmitResponse>(
      '/api/contact/inquiries/',
      payload
    );
    return data;
  },

  // 3. Submit Package Inquiry
  submitPackageInquiry: async (slug: string, payload: PackageInquiryPayload) => {
    const { data } = await apiClient.post(
      `/api/services/packages/${slug}/enquire/`,
      payload
    );
    return data;
  },

  // 4. Submit Guest Feedback
  submitGuestFeedback: async (payload: GuestFeedbackPayload) => {
    const { data } = await apiClient.post('/api/feedback/submissions/', payload);
    return data;
  },
};
