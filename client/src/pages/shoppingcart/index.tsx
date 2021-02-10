import Layout from '../../components/Layout';
import { ICartItem } from '../../components/shoppingCart/CartItem';
import ShoppingCart from '../../components/shoppingCart/ShoppingCart';
import getCartItems from '../../lib/cartitems';

const ShoppingCartPage: React.FunctionComponent<{ cartItems: ICartItem[] }> = ({
  cartItems,
}) => (
  <Layout title='Shopping Cart'>
    <h1>Shopping Cart</h1>
    <ShoppingCart cartItemList={cartItems} />
  </Layout>
);

export async function getStaticProps() {
  const cartItems = getCartItems();
  return {
    props: {
      cartItems,
    },
  };
}

export default ShoppingCartPage;
