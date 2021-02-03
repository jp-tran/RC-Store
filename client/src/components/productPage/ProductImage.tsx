import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  child: {
    width: '50%',
    background: '#5f3dc4',
    position: 'relative',
  },

  textContainer: {
    marginTop: '20px',
  },

  text: {
    margin: '50px 0 0 50px',
    padding: '5px 20px',
    display: 'inline',
    background: '#7048e8',
    color: 'white',
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  image: {
    position: 'absolute',
    top: '0',
    maxHeight: '100%',
    maxWidth: '100%',
  },
});

export interface ProductImageProps {
  productName: string;
  imageSrc: string;
}

const ProductImage: React.FunctionComponent<ProductImageProps> = ({
  productName,
  imageSrc,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.child}>
      <div className={classes.textContainer}>
        <h2 className={classes.text}>
          {productName}
          <br />
        </h2>
        <h3 className={classes.text}>$49.99 USD</h3>
      </div>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={imageSrc} />
      </div>
    </div>
  );
};

export default ProductImage;
