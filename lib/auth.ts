import { jwtDecode } from 'jwt-decode';

export interface DecodedToken {
  sub: string; // User ID
  email: string;
  role: string;
  exp: number;
  iat: number;
}

export function setToken(token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
}

export function getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
}

export function removeToken() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
}

export function getDecodedToken(): DecodedToken | null {
  const token = getToken();
  if (!token) return null;
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
}

export function isAuthenticated(): boolean {
  const decoded = getDecodedToken();
  if (!decoded) return false;
  
  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
}
