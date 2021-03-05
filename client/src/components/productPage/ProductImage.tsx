import { makeStyles } from '@material-ui/core';
import { ProductProps } from '../../types';

const useStyles = makeStyles({
  imageContainer: {
    width: '100%',
    maxWidth: '500px',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export interface ProductImageProps {
  name: string;
  price: number;
  image?: string;
}

const ProductImage = ({ product }: { product: ProductProps }) => {
  const classes = useStyles();
  const { image } = product;

  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} src={image} />
    </div>
  );
};

export default ProductImage;
