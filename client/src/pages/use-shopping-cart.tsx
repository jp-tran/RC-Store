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
      <CartProvider
        mode='client-only'
        stripe={getStripe()}
        // The URL to which Stripe should send customers when payment is complete.
        successUrl='http://localhost:3000/result?session_id={CHECKOUT_SESSION_ID}'
        // The URL to which Stripe should send customers when payment is canceled.
        cancelUrl='http://localhost:3000/use-shopping-cart'
        currency='USD'
        // https://stripe.com/docs/payments/checkout/client#collect-shipping-address
        allowedCountries={['US', 'GB', 'CA']}
        // https://stripe.com/docs/payments/checkout/client#collect-billing-address
        billingAddressCollection={true}
      >
        <CartSummary />
        {/* <p>Stuff</p> */}
      </CartProvider>
    </Layout>
  );
};

export default CheckoutPage;
