import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { ProductProps } from '../../types';
import MyProductCard from './MyProductCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      maxWidth: theme.breakpoints.values.lg,
      paddingLeft: 12,
      paddingRight: 12,
    },
    title: {
      fontFamily: "'Titillium Web', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 600,
      margin: '2rem auto',
    },
  })
);

const MyProducts = ({ products }: { products: ProductProps[] }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant='h4' component='h2'>
        My Products &#x1F4E6;
      </Typography>
      {products.map((product) => (
        <MyProductCard product={product} key={product.sku} />
      ))}
    </div>
  );
};

export default MyProducts;
