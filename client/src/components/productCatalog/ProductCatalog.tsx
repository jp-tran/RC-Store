import { createStyles, makeStyles, Theme } from '@material-ui/core';

import FeaturedProduct from './FeaturedProduct';
import { ProductProps } from '../../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: theme.breakpoints.values.xl,
      padding: '20px',
    },
    grid: {
      display: 'grid',
      justifyContent: 'center',
      gridGap: '20px',
      [theme.breakpoints.up('xs')]: {
        gridTemplateColumns: 'minmax(200px, 400px)',
        gridAutoRows: 'minmax(300px, 1fr)',
        gridTemplateAreas: `
        "product1"
        "product2"
        "product3"
        `,
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'minmax(300px, 4fr) minmax(300px, 2fr)',
        gridTemplateRows: 'minmax(300px, 1fr) minmax(300px, 1fr)',
        gridAutoRows: '400px',
        gridTemplateAreas: `
        "product1 product2"
        "product1 product3"
        `,
      },
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
    nonFeaturedProducts: {
      marginTop: '20px',
      display: 'grid',
      gridGap: '20px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gridAutoRows: '400px',
      justifyContent: 'center',
    },
  })
);

const ProductCatalog = ({ productList }: { productList: ProductProps[] }) => {
  const classes = useStyles();

  // Get 3 merch items and corresponding style for featured panel
  const featuredProductsStyle = [
    classes.product1,
    classes.product2,
    classes.product3,
  ];

  const featuredSKUs = [
    'e8a96fa1-cba0-4cd6-8a6a-ba69e5fca0b9',
    '796cd7b2-30ac-4ec4-a66e-3735bdbc029c',
    'e0f1ed68-933f-477c-b5d3-7394a242e6ca',
  ];

  const featuredProducts: ProductProps[] = [
    productList[0],
    productList[1],
    productList[2],
  ];

  const nonFeaturedProducts: ProductProps[] = [];

  for (const prod of productList) {
    if (prod.sku === featuredSKUs[0]) {
      featuredProducts[0] = prod;
    } else if (prod.sku == featuredSKUs[1]) {
      featuredProducts[1] = prod;
    } else if (prod.sku == featuredSKUs[2]) {
      featuredProducts[2] = prod;
    } else {
      nonFeaturedProducts.push(prod);
    }
  }

  return (
    <div className={classes.container} id='RC-merch'>
      <div className={classes.grid}>
        {featuredProducts.map((productProps, idx) => {
          return (
            <FeaturedProduct
              product={productProps}
              productStyle={featuredProductsStyle[idx]}
              key={productProps.sku}
            />
          );
        })}
      </div>
      <div className={classes.nonFeaturedProducts}>
        {nonFeaturedProducts.map((productProps) => {
          return (
            <FeaturedProduct
              product={productProps}
              productStyle=''
              key={productProps.sku}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductCatalog;
