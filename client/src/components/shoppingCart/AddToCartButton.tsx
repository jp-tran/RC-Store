import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import { Button, createStyles, makeStyles } from '@material-ui/core';
import { ProductProps } from '../../types';

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: '10px',
    },
  })
);

const AddToCartButton = ({
  item,
  selectedSize,
}: {
  item: ProductProps[];
  selectedSize: string;
}) => {
  const classes = useStyles();
  const { addItem, cartDetails, incrementItem } = useShoppingCart();

  const handleClick = () => {
    // search for the variation that matches the selected size
    let selectedItem = item[0];
    for (const variation of item) {
      if (variation.size === selectedSize) {
        selectedItem = variation;
        break;
      }
    }

    if (cartDetails.hasOwnProperty(selectedItem.sku)) {
      incrementItem(selectedItem.sku);
    } else {
      addItem(selectedItem);
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
