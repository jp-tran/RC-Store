import { useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { useShoppingCart } from 'use-shopping-cart';
import { useMutation } from '@apollo/client';

import {
  Button,
  Container,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';

import NextLink from '../NextLink';
import CREATE_ORDER from '../../graphql/mutations/createOrder';
import { CustomUser, NewOrder, PurchasedProduct } from '../../types';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
    title: {
      marginTop: '3rem',
      marginBottom: '2rem',
      fontFamily: "'Titillium Web', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 600,
    },
  })
);

const CheckoutResult = () => {
  const classes = useStyles();
  const [createOrder] = useMutation(CREATE_ORDER);
  const [session] = useSession();
  const { cartCount, cartDetails, clearCart, totalPrice } = useShoppingCart();

  useEffect(() => {
    if (session) {
      const purchasedProducts: PurchasedProduct[] = [];

      for (const sku in cartDetails) {
        const cartEntry = cartDetails[sku];
        const purchasedProduct: PurchasedProduct = {
          sku,
          name: cartEntry.name,
          price: cartEntry.price,
          currency: cartEntry.currency,
          size: cartEntry.size,
          quantity: cartEntry.quantity,
          image: cartEntry.image,
        };
        purchasedProducts.push(purchasedProduct);
      }

      const customUser: CustomUser = session.user;
      const myNewOrder: NewOrder = {
        purchasedProducts,
        userID: customUser.id as number,
        grandTotal: totalPrice,
      };

      const sendRequest = async () => {
        await createOrder({
          variables: { newOrder: myNewOrder },
        });
        clearCart();
      };

      if (cartCount > 0) {
        sendRequest();
      }
    } else {
      clearCart();
    }
  }, []);

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Typography component='h1' variant='h4' className={classes.title}>
        Thank you for your purchase!
      </Typography>
      <Button
        color='primary'
        size='large'
        variant='contained'
        component={NextLink}
        href='/'
      >
        Continue Shopping
      </Button>
    </Container>
  );
};

export default CheckoutResult;
