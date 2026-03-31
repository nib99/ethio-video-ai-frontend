// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
// For production, set NEXT_PUBLIC_API_URL in your .env and Vercel environment variables

// Types
export interface VideoGeneration {
  id: string;
  title: string;
  prompt: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  duration?: string;
  url?: string;
  thumbnail?: string;
  createdAt: string;
  creditsUsed: number;
}

export interface AnalyticsData {
  totalVideos: number;
  totalMinutes: number;
  thisMonthVideos: number;
  avgProcessingTime: string;
  creditsUsed: number;
  creditsRemaining: number;
  recentGenerations: VideoGeneration[];
}

export interface CreditBalance {
  balance: number;
  monthlyUsage: number;
  lastUpdated: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  plan: string;
}

// Helper to get auth token from Clerk (for server components)
async function getAuthToken() {
  const { getToken } = await import('@clerk/nextjs/server');
  return getToken({ template: 'supabase' }) || ''; // Change template if needed
}

// Base fetch wrapper with auth + error handling
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = await getAuthToken();

  const res = await fetch(`\( {API_BASE_URL} \){endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      ...options.headers,
    },
    cache: 'no-store',        // or 'force-cache' depending on your needs
    next: { revalidate: 60 }, // optional ISR
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || `API Error: ${res.status}`);
  }

  return res.json();
}

// ==================== API Functions ====================

// Get current user's credit balance
export async function getCreditBalance(): Promise<CreditBalance> {
  return apiFetch<CreditBalance>('/user/credits');
}

// Get analytics data
export async function getAnalytics(): Promise<AnalyticsData> {
  return apiFetch<AnalyticsData>('/analytics');
}

// Generate a new video
export async function generateVideo(prompt: string, options?: { 
  language?: string; 
  style?: string; 
}) {
  return apiFetch<{ jobId: string; message: string }>('/generate', {
    method: 'POST',
    body: JSON.stringify({ prompt, ...options }),
  });
}

// Get list of user's generated videos
export async function getUserVideos(limit = 10): Promise<VideoGeneration[]> {
  return apiFetch<VideoGeneration[]>(`/videos?limit=${limit}`);
}

// Get single video by ID
export async function getVideoById(id: string): Promise<VideoGeneration> {
  return apiFetch<VideoGeneration>(`/videos/${id}`);
}

// Get user profile
export async function getUserProfile(): Promise<UserProfile> {
  return apiFetch<UserProfile>('/user/profile');
}

// Cancel a processing job
export async function cancelGeneration(jobId: string) {
  return apiFetch<{ success: boolean }>(`/generate/${jobId}/cancel`, {
    method: 'POST',
  });
}

export default {
  getCreditBalance,
  getAnalytics,
  generateVideo,
  getUserVideos,
  getVideoById,
  getUserProfile,
  cancelGeneration,
};
