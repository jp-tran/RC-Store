import React, { useState } from 'react';

import { useShoppingCart } from 'use-shopping-cart';
import { fetchPostJSON } from '../../utils/api-helpers';

import tempProducts from '../../lib/products.json';

const CartSummary = () => {
  const [loading, setLoading] = useState(false);
  const {
    // formattedTotalPrice,
    // cartCount,
    // clearCart,
    addItem,
    cartDetails,
    redirectToCheckout,
  } = useShoppingCart();

  // useEffect(() => setCartEmpty(!cartCount), [cartCount])

  console.log('cart details');
  console.log(cartDetails);

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetchPostJSON(
      '/api/checkout_sessions/cart',
      cartDetails
    );

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    redirectToCheckout({ sessionId: response.id });
  };

  return (
    <>
      <button
        className='cart-style-background'
        onClick={() => addItem(tempProducts[0])}
      >
        Add Item to Cart
      </button>
      <form onSubmit={handleCheckout}>
        <h2>Cart summary</h2>

        <button
          className='cart-style-background'
          type='submit'
          // disabled={loading}
        >
          Checkout
        </button>
      </form>
    </>
  );
};

export default CartSummary;
