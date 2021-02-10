import React, { ReactNode } from 'react';
import { CartProvider } from 'use-shopping-cart';
import getStripe from '../../utils/get-stripe';

const Cart = ({ children }: { children: ReactNode }) => (
  <CartProvider mode='checkout-session' stripe={getStripe()} currency='usd'>
    <>{children}</>
  </CartProvider>
);

export default Cart;
