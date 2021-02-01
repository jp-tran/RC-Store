import * as React from 'react';

import { makeStyles } from '@material-ui/core';

import Product, { ProductProps } from './Product';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export interface ProductCatalogProps {
  productList: ProductProps[];
}

const ProductCatalog: React.FunctionComponent<ProductCatalogProps> = (
  props
) => {
  const { productList } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {productList.map((productProps) => {
        const { productId, productName, imageSrc, description } = productProps;

        return (
          <Product
            key={productId}
            productName={productName}
            imageSrc={imageSrc}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default ProductCatalog;
