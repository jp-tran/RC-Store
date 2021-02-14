import { makeStyles } from '@material-ui/core';

import { ProductCardProps } from '../productCatalog/ProductCard';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    height: '600px',
  },
});

const ProductTemplate = ({ product }: { product: ProductCardProps }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ProductImage product={product} />
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductTemplate;
