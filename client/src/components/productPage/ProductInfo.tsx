import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

import AddToCartButton from '../shoppingCart/AddToCartButton';
import { ProductProps } from '../../types';
import { formatCurrencyString } from 'use-shopping-cart';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    child: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px',
      whiteSpace: 'pre-wrap', // Needed to render line breaks
      background: 'white',
      maxWidth: theme.breakpoints.values.lg,
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: '80%',
      },
      [theme.breakpoints.up('md')]: {
        width: '60%',
      },
    },
    productName: {
      fontFamily: "'Titillium Web', 'Helvetica', 'Arial', sans-serif",
    },
    price: {
      color: theme.palette.primary.main,
      fontWeight: 500,
      marginBottom: '1rem',
    },
    textContainer: {
      // padding: '20px',
      // fontSize: '1.5em',
      // overflow: 'scroll',
    },
    buttonContainer: {
      marginTop: '1.5em',
      [theme.breakpoints.up('xs')]: {
        alignSelf: 'center',
      },
      [theme.breakpoints.up('md')]: {
        alignSelf: 'flex-start',
      },
    },
  })
);

export interface ProductInfoProps {
  name: string;
  sku: string;
  price: number;
  currency: string;
  longDescription?: string;
}

const ProductInfo = ({ product }: { product: ProductProps }) => {
  const classes = useStyles();
  const { name, price, currency, longDescription } = product;
  return (
    <div className={classes.child}>
      <div className={classes.textContainer}>
        <Typography className={classes.productName} component='h1' variant='h3'>
          {name}
        </Typography>
        <Typography className={classes.price} component='p' variant='h5'>
          {formatCurrencyString({ value: price, currency })}
        </Typography>
        <Typography component='p' variant='body1'>
          {longDescription}
        </Typography>
      </div>
      <div className={classes.buttonContainer}>
        <AddToCartButton item={product} />
      </div>
    </div>
  );
};

export default ProductInfo;
