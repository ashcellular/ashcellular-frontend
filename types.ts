
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: 'phone' | 'accessory';
  description: string;
  specs?: string[];
  isOffer?: boolean;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  data: string;
  features: string[];
  color: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string;
  type: 'pickup' | 'delivery';
  timestamp: string;
}
