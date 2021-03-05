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

const ProductImage = ({ product }: { product: ProductProps[] }) => {
  const classes = useStyles();
  const { image, name } = product[0];

  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} src={image} alt={name} />
    </div>
  );
};

export default ProductImage;
