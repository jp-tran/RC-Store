import { NextPage } from 'next';
import Layout from '../../components/Layout';
import CartSummary from '../../components/shoppingCart/CartSummary';

const ShoppingCartPage: NextPage = () => (
  <Layout title='Shopping Cart'>
    <CartSummary />
  </Layout>
);

export default ShoppingCartPage;
