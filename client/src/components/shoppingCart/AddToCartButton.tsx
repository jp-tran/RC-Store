import React from 'react';
import { Product, useShoppingCart } from 'use-shopping-cart';

import { Button, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: '10px',
    },
  })
);

const AddToCartButton = ({ item }: { item: Product }) => {
  const classes = useStyles();
  const { addItem, cartDetails, incrementItem } = useShoppingCart();

  const handleClick = () => {
    if (cartDetails.hasOwnProperty(item.sku)) {
      incrementItem(item.sku);
    } else {
      addItem(item);
    }
  };

  return (
    <Button
      className={classes.button}
      onClick={handleClick}
      color='primary'
      size='large'
      variant='contained'
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
