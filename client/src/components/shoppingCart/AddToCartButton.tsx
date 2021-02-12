import React from 'react';
import { Product, useShoppingCart } from 'use-shopping-cart';

import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    margin: '10px',
  },
});

const AddToCartButton = ({ item }: { item: Product }) => {
  const classes = useStyles();
  const { addItem } = useShoppingCart();

  return (
    <Button
      className={classes.button}
      onClick={() => addItem(item)}
      color='primary'
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
