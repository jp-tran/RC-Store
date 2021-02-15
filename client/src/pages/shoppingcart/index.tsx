import { NextPage } from 'next';
import Layout from '../../components/Layout';
import CartSummaryNoSSR from '../../components/shoppingCart/CartSummaryNoSSR';

const ShoppingCartPage: NextPage = () => (
  <Layout title='Shopping Cart'>
    <CartSummaryNoSSR />
  </Layout>
);

export default ShoppingCartPage;
