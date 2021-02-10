import { NextPage } from 'next';
import { CartProvider } from 'use-shopping-cart';

import getStripe from '../utils/get-stripe';
import Layout from '../components/Layout';

// import Cart from '../components/shoppingCart/Cart';
import CartSummary from '../components/shoppingCart/CartSummary';

const CheckoutPage: NextPage = () => {
  return (
    <Layout title='Shopping Cart'>
      <h1>Shopping Cart</h1>
      <CartProvider mode='checkout-session' stripe={getStripe()} currency='usd'>
        <CartSummary />
      </CartProvider>
    </Layout>
  );
};

export default CheckoutPage;
