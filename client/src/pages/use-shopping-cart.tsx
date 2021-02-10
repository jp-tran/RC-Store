import { NextPage } from 'next';
import Layout from '../components/Layout';

import Cart from '../components/Cart';
import CartSummary from '../components/CartSummary';
import Products from '../components/Products';

const CheckoutPage: NextPage = () => {
  return (
    <Layout title='Shopping Cart'>
      <div className='page-container'>
        <h1>Shopping Cart</h1>
        <Cart>
          <CartSummary />
          <Products />
        </Cart>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
