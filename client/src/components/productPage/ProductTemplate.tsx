import { makeStyles } from '@material-ui/core';

import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    height: '600px',
  },
});

export interface ProductTemplateProps {
  name: string;
  sku: string;
  price: number;
  currency: string;
  image?: string;
  longDescription?: string;
}

const ProductTemplate: React.FunctionComponent<ProductTemplateProps> = (
  props
) => {
  const { name, sku, price, currency, image, longDescription } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ProductImage name={name} price={price} image={image} />
      <ProductInfo
        name={name}
        sku={sku}
        price={price}
        currency={currency}
        longDescription={longDescription}
      />
    </div>
  );
};

export default ProductTemplate;
