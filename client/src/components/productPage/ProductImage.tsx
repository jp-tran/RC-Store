import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  child: {
    width: '50%',
    height: '50%',
  },
});

export interface ProductImageProps {}

const ProductImage: React.FunctionComponent<ProductImageProps> = () => {
  const classes = useStyles();

  return <div className={classes.child}>Image comes here!</div>;
};

export default ProductImage;
