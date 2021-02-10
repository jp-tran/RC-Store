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
  description: string;
}

const ProductTemplate: React.FunctionComponent<ProductTemplateProps> = (
  props
) => {
  const { productName, price, imageSrc, description } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ProductImage
        productName={productName}
        price={price}
        imageSrc={imageSrc}
      />
      <ProductInfo productName={productName} description={description} />
    </div>
  );
};

export default ProductTemplate;
