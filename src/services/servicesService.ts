import { apiClient } from '../lib/apiClient';
import type {
  ServiceCategory,
  ServiceDetail,
  ServiceInquiryPayload,
  ServiceInquiryResponse,
  DirectEnquireResponse,
  ServiceListItem,
  ServiceQueryParams,
} from '../types/api';

export const servicesService = {
  /** Get all active category tabs */
  getCategories: async (): Promise<ServiceCategory[]> => {
    const { data } = await apiClient.get<any>('/api/services/categories/');
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.results)) return data.results;
    return [];
  },

  /** Get packages list with optional filtering */
  getPackages: async (params?: ServiceQueryParams): Promise<ServiceListItem[]> => {
    const { data } = await apiClient.get<any>('/api/services/packages/', {
      params,
    });
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.results)) return data.results;
    return [];
  },

  /** Get complete package details by slug for detailed modal */
  getPackageBySlug: async (slug: string): Promise<ServiceDetail> => {
    const { data } = await apiClient.get<ServiceDetail>(`/api/services/packages/${slug}/`);
    return data;
  },

  /** Submit "Enquire Now" directly on a specific package slug */
  enquireOnPackage: async (
    slug: string,
    payload: Omit<ServiceInquiryPayload, 'service'>
  ): Promise<DirectEnquireResponse> => {
    const { data } = await apiClient.post<DirectEnquireResponse>(
      `/api/services/packages/${slug}/enquire/`,
      payload
    );
    return data;
  },

  /** Submit generic service inquiry */
  submitGeneralInquiry: async (payload: ServiceInquiryPayload): Promise<ServiceInquiryResponse> => {
    const { data } = await apiClient.post<ServiceInquiryResponse>(
      '/api/services/inquiries/',
      payload
    );
    return data;
  },
};
