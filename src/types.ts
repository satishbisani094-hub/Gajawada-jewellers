/**
 * Gajawada Jewellers Types Definition
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  imageUrls?: string[];
  purity: string; // e.g., "22K Gold", "18K Gold", "Certified Diamond (VVS-EF)"
  weight?: string; // e.g., "45 grams", "0.8 Carats"
  price?: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  isFeatured?: boolean;
  isBestseller?: boolean;
}

export interface CollectionCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  count: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatarUrl: string;
  date: string;
}

export interface Inquiry {
  id: string;
  productName?: string;
  productId?: string;
  customerName: string;
  phone: string;
  email?: string;
  message: string;
  date: string;
  status: 'pending' | 'reviewed';
}

export interface LiveRate {
  item: string;
  purity: string;
  rate: number;
  previousRate: number;
  change: number; // e.g., 25, -10
  unit: string;
}

export interface SpecialService {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  iconName: string; // Dynamic icon reference
}
