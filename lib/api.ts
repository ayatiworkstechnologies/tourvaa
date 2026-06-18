// Server-side fetching utilities for the public frontend

const API_BASE_URL = "http://127.0.0.1:8000/api/client";

export type Tour = {
  id: number;
  tour_code: string;
  title: string;
  subtitle?: string;
  slug: string;
  duration_days?: number; // fallback
  number_of_days?: number; // actual backend field
  number_of_hours?: number;
  price_start_per_person: number;
  currency: string;
  country_name: string;
  city_name: string;
  category_name: string;
  start_location?: string;
  finish_location?: string;
  short_description?: string;
  long_description?: string;
  banner_image?: string;
  status: string;
  
  // Synthesized fields for the frontend components
  rating?: number;
  reviews?: number;
};

export async function fetchTours(params: Record<string, string> = {}): Promise<Tour[]> {
  const searchParams = new URLSearchParams(params);
  const url = `${API_BASE_URL}/tours?${searchParams.toString()}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!res.ok) {
      console.error("Failed to fetch tours:", res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    return data.items || data.data || [];
  } catch (error) {
    console.error("Error fetching tours:", error);
    return [];
  }
}

export async function getTourById(id: string | number): Promise<Tour | null> {
  const url = `${API_BASE_URL}/tours/${id}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.error(`Error fetching tour ${id}:`, error);
    return null;
  }
}
