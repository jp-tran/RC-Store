import { makeStyles } from '@material-ui/core';

import ProductCard from './ProductCard';
import FeaturedProduct from './FeaturedProduct';
import { ProductProps } from '../../types';

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: '4fr 2fr',
    gridTemplateAreas: `
    "product1 product2"
    "product1 product3"
    "catalog catalog"
    `,
    placeItems: 'center center',
    background: 'white',
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

const ProductCatalog = ({ productList }: { productList: ProductProps[] }) => {
  const classes = useStyles();

  interface FeaturedProductAndStyle {
    productProps: ProductProps;
    style: string;
  }

  // Get top 3 products and corresponding style
  const featuredProducts: FeaturedProductAndStyle[] = [
    { productProps: productList[0], style: classes.product1 },
    { productProps: productList[1], style: classes.product2 },
    { productProps: productList[2], style: classes.product3 },
  ];
  return (
    <div className={classes.grid}>
      {featuredProducts.map(({ productProps, style }) => {
        return (
          <div className={style}>
            <FeaturedProduct product={productProps} />
          </div>
        );
      })}
      <div className={classes.container}>
        {productList.map((productProps) => {
          return <ProductCard product={productProps} />;
        })}
      </div>
    </div>
  );
};

export default ProductCatalog;
