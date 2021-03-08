import Link from 'next/link';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { formatCurrencyString } from 'use-shopping-cart';
import { PurchasedProduct } from '../../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      margin: '0.5rem 1rem',
    },
    image: {
      height: '100px',
      width: '100px',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto 10px',
    },
    productLink: {
      textDecoration: 'none',
      color: theme.palette.secondary.main,
      '&:hover, &:focus': {
        textDecoration: 'underline',
        outline: 'none',
        color: theme.palette.secondary.dark,
      },
    },
    priceText: {
      color: theme.palette.primary.main,
    },
  })
);

const PurchasedItem = ({ item }: { item: PurchasedProduct }) => {
  const classes = useStyles();
  const sizeText = item.size === 'NA' ? '' : `— ${item.size}`;
  return (
    <div className={classes.container}>
      <img src={item.image} alt={item.name} className={classes.image} />
      <div className={classes.content}>
        <Typography>
          <Link href={`/products/${item.sku}`}>
            <a className={classes.productLink}>{`${item.name} ${sizeText}`}</a>
          </Link>
        </Typography>
        <Typography className={classes.priceText}>
          {`${formatCurrencyString({
            value: item.price,
            currency: item.currency ? item.currency : 'USD',
          })}`}
        </Typography>
        <Typography>{`Quantity: ${item.quantity}`}</Typography>
      </div>
    </div>
  );
};

export default PurchasedItem;
