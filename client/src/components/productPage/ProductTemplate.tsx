import { makeStyles } from '@material-ui/core';

import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
  },
});

export interface ProductTemplateProps {}

const ProductTemplate: React.FunctionComponent<ProductTemplateProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ProductImage />
      <ProductInfo />
    </div>
  );
};

export default ProductTemplate;
