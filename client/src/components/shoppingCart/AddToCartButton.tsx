import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import { Button, makeStyles } from '@material-ui/core';

import tempProducts from '../../lib/products.json';

const useStyles = makeStyles({
  button: {
    margin: '10px',
  },
});

const AddToCartButton = () => {
  const classes = useStyles();
  const { addItem } = useShoppingCart();

  return (
    <Button
      className={classes.button}
      onClick={() => addItem(tempProducts[0])}
      color='primary'
    >
      Add Banana to Cart
    </Button>
  );
};

export default AddToCartButton;
