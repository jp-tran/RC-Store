import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    width: '100%',
    position: 'relative',
  },
  image: {
    maxWidth: '100%',
  },
  textContainer: {
    position: 'absolute',
    top: '0',
  },

  text: {
    margin: '0',
    padding: '5px 20px',
    display: 'inline',
    background: 'black',
    color: 'white',
  },
});

export interface FeaturedProductProps {
  productName: string;
  imageSrc: string;
}

const FeaturedProduct: React.FunctionComponent<FeaturedProductProps> = ({
  productName,
  imageSrc,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={imageSrc} className={classes.image} />
      <div className={classes.textContainer}>
        <h2 className={classes.text}>
          {productName}
          <br />
        </h2>
        <h3 className={classes.text}>$49.99 USD</h3>
      </div>
    </div>
  );
};

export default FeaturedProduct;
