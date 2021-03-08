// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Example } from 'path/to/types';

import { Product } from 'use-shopping-cart';

export interface Example {
  id: number;
  name: string;
}

export interface ProductProps extends Product {
  longDescription?: string;
  remainingQuantity?: number;
  size?: string;
}

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'NA';

export interface PurchasedProduct {
  sku: string;
  name: string;
  price: number;
  currency?: string;
  size?: Size;
  quantity: number;
  image?: string;
}

export interface NewOrder {
  purchasedProducts: PurchasedProduct[];
  userID: number;
  grandTotal: number;
}

export interface Order {
  id?: number;
  userID?: number;
  grandTotal?: number;
  date?: string;
  purchasedProducts?: PurchasedProduct[];
}

export interface CustomUser {
  [key: string]: any;
  id?: number;
  name?: string | null;
  firstName?: string;
  lastName?: string;
  email?: string | null;
  image?: string | null;
  slug?: string;
}
