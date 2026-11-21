import { apiClient } from '../lib/apiClient';
import type {
  AdmissionInquiryPayload,
  AdmissionInquirySubmitResponse,
  SanctuaryContactInfo,
} from '../types/api';

export const contactService = {
  /** Official helpline, Feroke center location, hours, WhatsApp number */
  getContactInfo: async (): Promise<SanctuaryContactInfo> => {
    const { data } = await apiClient.get<SanctuaryContactInfo>('/api/contact/info/');
    return data;
  },

  /**
   * Submit admission/doctor inquiry.
   * Backend returns pre-filled WhatsApp click-to-chat URL in response.whatsapp_url.
   */
  submitAdmissionInquiry: async (
    payload: AdmissionInquiryPayload
  ): Promise<AdmissionInquirySubmitResponse> => {
    const { data } = await apiClient.post<AdmissionInquirySubmitResponse>(
      '/api/contact/inquiries/',
      payload
    );
    return data;
  },
};
