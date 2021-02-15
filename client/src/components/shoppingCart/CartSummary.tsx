import { useShoppingCart } from 'use-shopping-cart';

import {
  Button,
  Container,
  Divider,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import IncrementIcon from '@material-ui/icons/Add';
import DecrementIcon from '@material-ui/icons/Remove';

import CheckoutButton from './CheckoutButton';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '768px',
  },
  itemSummary: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cartSummary: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  quantity: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '-6px',
  },
  itemActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    borderRadius: '50%',
    border: '1px solid #3c89c3',
    height: '24px',
    width: '24px',
    margin: '5px',
  },
  removeButton: {
    height: '24px',
    margin: '0.5rem 1rem 0.5rem 1rem',
  },
});

const CartSummary = () => {
  const classes = useStyles();

  const {
    cartDetails,
    clearCart,
    decrementItem,
    incrementItem,
    formattedTotalPrice,
    removeItem,
  } = useShoppingCart();

  const cart = [];

  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku];

    // all of your basic product data still exists (i.e. name, image, price)
    cart.push(
      <div
        style={{ width: '100%', maxWidth: '768px', marginBottom: '1rem' }}
        key={cartEntry.sku}
      >
        <div className={`${classes.subContainer} ${classes.itemSummary}`}>
          <div className={classes.leftBlock}>
            <Typography>{cartEntry.name}</Typography>
            <div className={classes.itemActions}>
              <div className={classes.quantity}>
                <IconButton
                  className={classes.iconButton}
                  color='secondary'
                  onClick={() => decrementItem(cartEntry.sku)}
                  aria-label={`Remove one ${cartEntry.name} from your cart`}
                >
                  <DecrementIcon />
                </IconButton>
                <p>{cartEntry.quantity}</p>
                <IconButton
                  className={classes.iconButton}
                  color='secondary'
                  onClick={() => incrementItem(cartEntry.sku)}
                  aria-label={`Add one ${cartEntry.name} to your cart`}
                >
                  <IncrementIcon />
                </IconButton>
              </div>

              <Button
                className={classes.removeButton}
                variant='outlined'
                color='secondary'
                onClick={() => removeItem(cartEntry.sku)}
                aria-label={`Remove all ${cartEntry.name} from your cart`}
              >
                Remove
              </Button>
            </div>
          </div>
          <Typography>{cartEntry.formattedValue}</Typography>
        </div>
        <Divider />
      </div>
    );
  }

  return (
    <Container className={classes.container}>
      <Typography
        className={classes.subContainer}
        component='h1'
        variant='h3'
        style={{ margin: '2rem 0' }}
      >
        Shopping Cart
      </Typography>
      {cart}
      <div className={`${classes.subContainer} ${classes.cartSummary}`}>
        <Typography>{`Total: ${formattedTotalPrice}`}</Typography>
        <div>
          <Button onClick={() => clearCart()}>Clear Cart</Button>
          <CheckoutButton />
        </div>
      </div>
    </Container>
  );
};

export default CartSummary;
