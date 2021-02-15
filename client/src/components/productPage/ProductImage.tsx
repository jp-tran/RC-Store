import { makeStyles } from '@material-ui/core';
import { ProductProps } from '../../types';

const useStyles = makeStyles({
  child: {
    width: '50%',
    background: 'white',
    position: 'relative',
    zIndex: -2,
  },

  textContainer: {
    marginTop: '20px',
  },

  text: {
    margin: '50px 0 0 50px',
    padding: '5px 20px',
    display: 'inline',
    background: 'black',
    color: 'white',
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  image: {
    position: 'absolute',
    zIndex: -1,
    top: '0',
    maxHeight: '100%',
    maxWidth: '100%',
  },
});

export interface ProductImageProps {
  name: string;
  price: number;
  image?: string;
}

const ProductImage = ({ product }: { product: ProductProps }) => {
  const classes = useStyles();
  const { name, price, image } = product;

  return (
    <div className={classes.child}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={image} />
      </div>
      <div className={classes.textContainer}>
        <h2 className={classes.text}>
          {name}
          <br />
        </h2>
        <h3 className={classes.text}>${price.toString()}</h3>
      </div>
    </div>
  );
};

export default ProductImage;
