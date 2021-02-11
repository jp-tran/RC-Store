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
  productName: string;
  price: string;
  imageSrc: string;
  longDescription?: string;
}

const ProductTemplate: React.FunctionComponent<ProductTemplateProps> = (
  props
) => {
  const { productName, price, imageSrc, longDescription } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ProductImage
        productName={productName}
        price={price}
        imageSrc={imageSrc}
      />
      <ProductInfo
        productName={productName}
        longDescription={longDescription}
      />
    </div>
  );
};

export default ProductTemplate;
