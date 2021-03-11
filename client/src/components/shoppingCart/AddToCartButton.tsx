import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import {
  Button,
  createStyles,
  makeStyles,
  Snackbar,
  Theme,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { ProductProps } from '../../types';
import NextLink from '../NextLink';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: '10px',
    },
    snackbar: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
    snackbarButton: {
      color: theme.palette.secondary.dark,
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
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

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

    setSnackbarIsOpen(true);
  };

  const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarIsOpen(false);
  };

  return (
    <>
      <Button
        className={classes.button}
        onClick={handleClick}
        color='primary'
        size='large'
        variant='contained'
      >
        Add to Cart
      </Button>
      <Snackbar
        ContentProps={{
          classes: {
            root: classes.snackbar,
          },
        }}
        open={snackbarIsOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        message='Added to cart!'
        action={
          <>
            <Button
              className={classes.snackbarButton}
              size='small'
              onClick={handleClose}
              component={NextLink}
              href='/shoppingcart'
            >
              VIEW CART
            </Button>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={handleClose}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          </>
        }
      />
    </>
  );
};

export default AddToCartButton;
