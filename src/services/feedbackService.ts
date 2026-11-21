import { apiClient } from '../lib/apiClient';
import type {
  FeedbackCategory,
  FeedbackStat,
  GuestFeedbackPayload,
  GuestFeedbackResponse,
  SanctuaryStory,
  SanctuaryStoryQueryParams,
  Testimonial,
  TestimonialQueryParams,
} from '../types/api';

export const feedbackService = {
  /** 5.0/5.0, 99.4% satisfaction metric cards */
  getStats: async (): Promise<FeedbackStat[]> => {
    const { data } = await apiClient.get<FeedbackStat[]>('/api/feedback/stats/');
    return data;
  },

  /** Feedback filter categories */
  getCategories: async (): Promise<FeedbackCategory[]> => {
    const { data } = await apiClient.get<FeedbackCategory[]>('/api/feedback/categories/');
    return data;
  },

  /** Guest reviews and testimonials */
  getTestimonials: async (params?: TestimonialQueryParams): Promise<Testimonial[]> => {
    const { data } = await apiClient.get<any>('/api/feedback/testimonials/', {
      params,
    });
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.results)) return data.results;
    return [];
  },

  /** Instagram Sanctuary Reels and Healing Stories */
  getStories: async (params?: SanctuaryStoryQueryParams): Promise<SanctuaryStory[]> => {
    const { data } = await apiClient.get<any>('/api/feedback/stories/', {
      params,
    });
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.results)) return data.results;
    return [];
  },

  /** Submit public guest review */
  submitFeedback: async (payload: GuestFeedbackPayload): Promise<GuestFeedbackResponse> => {
    const { data } = await apiClient.post<GuestFeedbackResponse>(
      '/api/feedback/submissions/',
      payload
    );
    return data;
  },
};
