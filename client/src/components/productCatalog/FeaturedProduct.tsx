import Link from 'next/link';

import { createStyles, makeStyles, Theme } from '@material-ui/core';

import { ProductProps } from '../../types';
import { formatCurrencyString } from 'use-shopping-cart';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      background: 'white',
      boxShadow: '0 1px 5px 0px rgba(38,59,94,0.3)',
      border: '2px solid white',
      '&:hover,&:focus-within': {
        borderColor: theme.palette.primary.main,
        boxShadow: '0 2px 15px 5px rgba(38,59,94,0.3)',
        transition: '0.25s ease-out',
      },
    },
    link: {
      '&:focus': {
        outline: 'none',
      },
    },
    image: {
      maxWidth: '100%',
    },
    textContainer: {
      position: 'absolute',
      top: '0',
    },

    text: {
      margin: '0',
      padding: '5px 20px',
      background: 'black',
      color: 'white',
    },
  })
);

export interface FeaturedProductProps {
  name: string;
  sku: string;
  price: number;
  image?: string;
}

const FeaturedProduct = ({
  product,
  productStyle,
}: {
  product: ProductProps;
  productStyle: string;
}) => {
  const classes = useStyles();

  const { name, sku, image, price, currency } = product;

  return (
    <div className={`${classes.container} ${productStyle}`}>
      <Link href={`/products/${sku}`}>
        <a className={classes.link}>
          <img src={image} className={classes.image} alt={name} />
        </a>
      </Link>

      <div className={classes.textContainer}>
        <h2 className={classes.text}>
          {name}
          <br />
        </h2>
        <h3 className={classes.text}>
          {formatCurrencyString({ value: price, currency })}
        </h3>
      </div>
    </div>
  );
};

export default FeaturedProduct;
