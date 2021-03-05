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
