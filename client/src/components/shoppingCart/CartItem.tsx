import { ProductCardProps } from '../productCatalog/ProductCard';

// also add fields for quantity and price of each product in the cart
export interface ICartItem extends ProductCardProps {
  price: number; // USD for now
  quantity: number;
}
