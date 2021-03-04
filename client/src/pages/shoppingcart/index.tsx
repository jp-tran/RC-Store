import { NextPage } from 'next';
import { useShoppingCart } from 'use-shopping-cart';
import Layout from '../../components/Layout';
import CartSummaryNoSSR from '../../components/shoppingCart/CartSummaryNoSSR';
import EmptyCartMessage from '../../components/shoppingCart/EmptyCartMessage';

const ShoppingCartPage: NextPage = () => {
  const { cartCount } = useShoppingCart();

  return (
    <Layout title='Shopping Cart'>
      {cartCount ? <CartSummaryNoSSR /> : <EmptyCartMessage />}
    </Layout>
  );
};

export default ShoppingCartPage;
