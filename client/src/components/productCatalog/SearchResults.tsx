import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import ProductCard from './ProductCard';
import { ProductProps } from '../../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchedProducts: {
      width: '100%',
      maxWidth: theme.breakpoints.values.xl,
      padding: '20px',
      display: 'grid',
      gridGap: '20px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridAutoRows: '400px',
      justifyContent: 'center',
    },
    noMatches: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    },
  })
);

const SearchResults = ({ productList }: { productList: ProductProps[] }) => {
  const classes = useStyles();

  if (productList.length == 0) {
    return (
      <div className={classes.noMatches}>
        <Typography component='h1' variant='h4'>
          No products match your search &#x1F914;
        </Typography>
      </div>
    );
  }

  const displayedItemNames = new Set(); // set of unique product names
  const displayedProducts: ProductProps[] = []; // only display products with unique names

  for (const prod of productList) {
    if (!displayedItemNames.has(prod.name)) {
      displayedProducts.push(prod);
      displayedItemNames.add(prod.name);
    }
  }

  return (
    <div className={classes.searchedProducts}>
      {displayedProducts.map((product) => {
        return (
          <ProductCard product={product} productStyle='' key={product.sku} />
        );
      })}
    </div>
  );
};

export default SearchResults;
