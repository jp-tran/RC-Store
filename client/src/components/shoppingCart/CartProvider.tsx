import React, { ReactNode } from 'react';
import { CartProvider as CartProv } from 'use-shopping-cart';
import getStripe from '../../utils/get-stripe';

const CartProvider = ({ children }: { children: ReactNode }) => (
  <CartProv mode='checkout-session' stripe={getStripe()} currency='usd'>
    <>{children}</>
  </CartProv>
);

export default CartProvider;
