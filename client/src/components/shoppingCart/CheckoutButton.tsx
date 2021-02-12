import React, { useState, useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import { Button, makeStyles } from '@material-ui/core';

import { fetchPostJSON } from '../../utils/api-helpers';

const useStyles = makeStyles({
  // Theme from RC
  checkoutButton: {
    width: 'auto',
    margin: '10px',
    border: '1px solid rgba(42,45,45,0.6)',
    color: '#23a050',
    borderColor: '#3dc06c',
  },
});

const CheckoutButton = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);

  const { cartCount, cartDetails, redirectToCheckout } = useShoppingCart();

  useEffect(() => {
    setCartEmpty(!cartCount);
  }, [cartCount]);

  const handleCheckout = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
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
    <Button
      className={classes.checkoutButton}
      disabled={cartEmpty || loading}
      onClick={handleCheckout}
    >
      Checkout
    </Button>
  );
};

export default CheckoutButton;
