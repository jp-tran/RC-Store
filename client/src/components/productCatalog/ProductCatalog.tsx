import * as React from 'react';

import { makeStyles } from '@material-ui/core';

import Product, { ProductProps } from './Product';
import ProductImage from '../productPage/ProductImage';

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateAreas: `
    "product1 product2"
    "product1 product3"
    "catalog catalog"
    `,
  },
  product1: {
    gridArea: 'product1',
  },
  product2: {
    gridArea: 'product2',
  },
  product3: {
    gridArea: 'product3',
  },
  container: {
    gridArea: 'catalog',
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

  interface FeaturedProduct {
    productProps: ProductProps;
    style: string;
  }

  // Get top 3 products and corresponding style
  const featuredProducts: FeaturedProduct[] = [
    { productProps: productList[0], style: classes.product1 },
    { productProps: productList[1], style: classes.product2 },
    { productProps: productList[2], style: classes.product3 },
  ];
  return (
    <div className={classes.grid}>
      {featuredProducts.map(({ productProps, style }) => {
        return (
          <div className={style}>
            <ProductImage
              productName={productProps.productName}
              imageSrc={productProps.imageSrc}
            />
          </div>
        );
      })}
      <div className={classes.container}>
        {productList.map((productProps) => {
          const {
            productId,
            productName,
            imageSrc,
            description,
          } = productProps;

          return (
            <Product
              productId={productId}
              productName={productName}
              imageSrc={imageSrc}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductCatalog;
