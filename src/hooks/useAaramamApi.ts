import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { uiService } from '../services/uiService';
import { servicesService } from '../services/servicesService';
import { feedbackService } from '../services/feedbackService';
import { contactService } from '../services/contactService';
import type {
  ServiceQueryParams,
  ServiceInquiryPayload,
  TestimonialQueryParams,
  SanctuaryStoryQueryParams,
  GuestFeedbackPayload,
  AdmissionInquiryPayload,
} from '../types/api';

// ============================================================================
// UI HOOKS
// ============================================================================
export const useHeroBanner = () => {
  return useQuery({
    queryKey: ['hero-banner'],
    queryFn: uiService.getActiveHeroBanner,
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 1,
  });
};

// ============================================================================
// SERVICES HOOKS
// ============================================================================
export const useServiceCategories = () => {
  return useQuery({
    queryKey: ['service-categories'],
    queryFn: servicesService.getCategories,
    staleTime: 1000 * 60 * 15,
    retry: 1,
  });
};

export const useServicePackages = (params?: ServiceQueryParams) => {
  return useQuery({
    queryKey: ['service-packages', params],
    queryFn: () => servicesService.getPackages(params),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useServicePackageDetail = (slug: string) => {
  return useQuery({
    queryKey: ['service-package', slug],
    queryFn: () => servicesService.getPackageBySlug(slug),
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
};

export const useEnquireOnPackage = (slug: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: Omit<ServiceInquiryPayload, 'service'>) =>
      servicesService.enquireOnPackage(slug, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['service-package', slug] });
    },
  });
};

export const useSubmitGeneralInquiry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: ServiceInquiryPayload) =>
      servicesService.submitGeneralInquiry(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['service-packages'] });
    },
  });
};

// ============================================================================
// FEEDBACK HOOKS
// ============================================================================
export const useSatisfactionStats = () => {
  return useQuery({
    queryKey: ['feedback-stats'],
    queryFn: feedbackService.getStats,
    staleTime: 1000 * 60 * 15,
    retry: 1,
  });
};

export const useFeedbackCategories = () => {
  return useQuery({
    queryKey: ['feedback-categories'],
    queryFn: feedbackService.getCategories,
    staleTime: 1000 * 60 * 15,
    retry: 1,
  });
};

export const useTestimonials = (params?: TestimonialQueryParams) => {
  return useQuery({
    queryKey: ['testimonials', params],
    queryFn: () => feedbackService.getTestimonials(params),
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
};

export const useSanctuaryStories = (params?: SanctuaryStoryQueryParams) => {
  return useQuery({
    queryKey: ['sanctuary-stories', params],
    queryFn: () => feedbackService.getStories(params),
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
};

export const useSubmitFeedback = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: GuestFeedbackPayload) => feedbackService.submitFeedback(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      queryClient.invalidateQueries({ queryKey: ['feedback-stats'] });
    },
  });
};

// ============================================================================
// CONTACT & ADMISSIONS HOOKS
// ============================================================================
export const useSanctuaryContactInfo = () => {
  return useQuery({
    queryKey: ['sanctuary-contact-info'],
    queryFn: contactService.getContactInfo,
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 1,
  });
};

export const useSubmitAdmissionInquiry = () => {
  return useMutation({
    mutationFn: (payload: AdmissionInquiryPayload) =>
      contactService.submitAdmissionInquiry(payload),
    onSuccess: (response) => {
      // Auto-redirect user directly to official WhatsApp chat with doctor desk
      if (response.whatsapp_url) {
        window.open(response.whatsapp_url, '_blank', 'noopener,noreferrer');
      }
    },
  });
};
