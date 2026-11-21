import { apiClient } from '../lib/apiClient';
import type { HeroBanner } from '../types/api';

export const uiService = {
  /** Get the current active hero banner */
  getActiveHeroBanner: async (): Promise<HeroBanner> => {
    const { data } = await apiClient.get<HeroBanner>('/api/ui/banner/');
    return data;
  },
};
