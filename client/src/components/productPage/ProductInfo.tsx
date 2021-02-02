import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  child: {
    width: '50%',
    background: 'white',
  },
});

export interface ProductInfoProps {}

const ProductInfo: React.FunctionComponent<ProductInfoProps> = () => {
  const classes = useStyles();

  return <div className={classes.child}>Information comes here!</div>;
};

export default ProductInfo;
