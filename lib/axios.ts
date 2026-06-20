import axios from 'axios';
import { getToken, removeToken } from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handler
    if (error.response?.status === 401) {
      // Handle unauthorized error, e.g., redirect to login or clear token
      if (typeof window !== 'undefined') {
        removeToken();
        // Optional: Redirect to login
        // window.location.href = '/login'; 
      }
    }
    return Promise.reject(error);
  }
);
