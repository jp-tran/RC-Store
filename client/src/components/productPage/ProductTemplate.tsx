import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { ProductProps } from '../../types';

import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      width: '100%',
      flexGrow: 1,
      background: 'white',
      [theme.breakpoints.up('xs')]: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
    },
  })
);

/**
 * @param product - an array of different variations of one product (e.g. different colors/sizes)
 */
const ProductTemplate = ({ product }: { product: ProductProps[] }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ProductImage product={product} />
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductTemplate;
