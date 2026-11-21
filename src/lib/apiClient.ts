import axios, { AxiosError } from 'axios';

export const API_BASE_URL: string =
  (import.meta as unknown as { env: Record<string, string> })?.env?.VITE_API_BASE_URL ||
  'https://pv0smzkc-8000.inc1.devtunnels.ms';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 15000,
});

// Response interceptor for consistent error handling and logging
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      console.error(`[API Error ${error.response.status}]:`, error.response.data);
    } else if (error.request) {
      console.warn('[Network Error]: Server unreachable. Using fallback offline state.', API_BASE_URL);
    }
    return Promise.reject(error);
  }
);

/**
 * Resolves media paths returned by Django backend.
 * Handles:
 * 1. URLs with http://localhost:8000 or http://127.0.0.1:8000 when frontend runs against devtunnel/remote
 * 2. Relative paths like /media/...
 * 3. Absolute http/https URLs
 */
export function resolveMediaUrl(
  pathOrUrl: string | null | undefined,
  fallback: string = ''
): string {
  if (!pathOrUrl) return fallback;

  // Rewrite localhost:8000 or 127.0.0.1:8000 to API_BASE_URL if API_BASE_URL is a devtunnel or external URL
  if (
    pathOrUrl.startsWith('http://localhost:8000') ||
    pathOrUrl.startsWith('http://127.0.0.1:8000')
  ) {
    if (!API_BASE_URL.includes('localhost:8000') && !API_BASE_URL.includes('127.0.0.1:8000')) {
      const cleanRelativePath = pathOrUrl.replace(/^http:\/\/(localhost|127\.0\.0\.1):8000/, '');
      return `${API_BASE_URL.replace(/\/$/, '')}${cleanRelativePath}`;
    }
    return pathOrUrl;
  }

  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  const cleanPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${API_BASE_URL.replace(/\/$/, '')}${cleanPath}`;
}
