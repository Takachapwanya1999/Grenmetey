export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: Address;
  role: 'customer' | 'partner' | 'admin';
  createdAt: Date;
  isVerified: boolean;
}

export interface Partner extends User {
  role: 'partner';
  businessName: string;
  businessRegistrationNumber: string;
  taxNumber: string;
  businessAddress: Address;
  contactPerson: string;
  website?: string;
  description: string;
  certificates: Certificate[];
  contractStatus: 'pending' | 'active' | 'suspended' | 'terminated';
  contractSignedAt?: Date;
  commissionRate: number;
}

export interface Certificate {
  id: string;
  name: string;
  issuingAuthority: string;
  certificateNumber: string;
  issueDate: Date;
  expiryDate: Date;
  documentUrl: string;
  isVerified: boolean;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  subcategory: string;
  price: number;
  originalPrice?: number;
  currency: string;
  stock: number;
  images: string[];
  partnerId: string;
  partnerName: string;
  specifications: ProductSpecification[];
  certifications: string[];
  origin: string;
  harvestDate?: Date;
  expiryDate?: Date;
  organicCertified: boolean;
  ratings: ProductRating[];
  averageRating: number;
  totalReviews: number;
  tags: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  subcategories: ProductSubcategory[];
}

export interface ProductSubcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface ProductSpecification {
  name: string;
  value: string;
  unit?: string;
}

export interface ProductRating {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  review: string;
  createdAt: Date;
  helpful: number;
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  selectedOptions?: { [key: string]: string };
}

export interface Cart {
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: OrderStatus;
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  createdAt: Date;
  estimatedDelivery: Date;
  trackingNumber?: string;
}

export type OrderStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'processing' 
  | 'shipped' 
  | 'delivered' 
  | 'cancelled' 
  | 'refunded';

export interface SearchFilters {
  category?: string;
  subcategory?: string;
  priceRange?: [number, number];
  rating?: number;
  organic?: boolean;
  inStock?: boolean;
  location?: string;
  sortBy?: 'name' | 'price' | 'rating' | 'newest' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  message: string;
  category: 'technical' | 'billing' | 'general' | 'partnership' | 'product';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  responses: SupportResponse[];
}

export interface SupportResponse {
  id: string;
  ticketId: string;
  message: string;
  isFromSupport: boolean;
  createdAt: Date;
  attachments?: string[];
}
