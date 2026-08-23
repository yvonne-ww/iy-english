import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.iy-english.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Add auth token if available
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const api = {
  // Words
  getWords: (page = 1, limit = 20) => apiClient.get(`/words?page=${page}&limit=${limit}`),
  getWord: (id: string) => apiClient.get(`/words/${id}`),
  createWord: (data: any) => apiClient.post('/words', data),
  updateWord: (id: string, data: any) => apiClient.put(`/words/${id}`, data),
  deleteWord: (id: string) => apiClient.delete(`/words/${id}`),

  // Wordbooks
  getWordbooks: () => apiClient.get('/wordbooks'),
  getWordbook: (id: string) => apiClient.get(`/wordbooks/${id}`),
  createWordbook: (data: any) => apiClient.post('/wordbooks', data),
  updateWordbook: (id: string, data: any) => apiClient.put(`/wordbooks/${id}`, data),
  deleteWordbook: (id: string) => apiClient.delete(`/wordbooks/${id}`),

  // Progress
  getProgress: (userId: string) => apiClient.get(`/progress/${userId}`),
  updateProgress: (userId: string, data: any) => apiClient.put(`/progress/${userId}`, data),

  // Practice
  getPracticeHistory: (userId: string) => apiClient.get(`/practice/${userId}`),
  createPracticeRecord: (data: any) => apiClient.post('/practice', data),
};

export default apiClient;
