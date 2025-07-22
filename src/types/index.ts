
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category:  'Ready-to-Wear';
  description: string;
  sizes: string[];
  availability: boolean;
  rating: number;
  reviews: Review[];
  isPopular?: boolean;
  isNew?: boolean;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}

export interface FilterState {
  category:  'Ready-to-Wear';
  priceRange: [number, number];
  sortBy: 'popularity' | 'price-low' | 'price-high' | 'newest';
}

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
}

export type Theme = 'light' | 'dark';
