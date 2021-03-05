import { useState } from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

import AddToCartButton from '../shoppingCart/AddToCartButton';
import { ProductProps } from '../../types';
import { formatCurrencyString } from 'use-shopping-cart';
import availableProductSizes from '../../utils/available-product-sizes';
import DropDownSelect from './DropDownSelect';

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
    buttonContainer: {
      marginTop: '1.5em',
      display: 'flex',
      [theme.breakpoints.up('xs')]: {
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      },
      [theme.breakpoints.up('md')]: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'flex-end',
      },
    },
  })
);

const ProductInfo = ({ product }: { product: ProductProps[] }) => {
  const classes = useStyles();
  const { name, price, currency, longDescription } = product[0];

  const defaultSizes = ['XS', 'S', 'M', 'L', 'XL'];
  const availableSizes = availableProductSizes(defaultSizes, product);

  const displaySizeSelect = availableSizes.length > 0;

  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);

  return (
    <div className={classes.child}>
      <div>
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
        {displaySizeSelect && (
          <DropDownSelect
            label='Size'
            options={availableSizes}
            selectedOption={selectedSize}
            setSelectedOption={setSelectedSize}
            width='60px'
          />
        )}
        <AddToCartButton item={product} selectedSize={selectedSize} />
      </div>
    </div>
  );
};

export default ProductInfo;
