import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  child: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    width: '50%',
    whiteSpace: 'pre-wrap', // Needed to render line breaks
    background: 'white',
  },
  button: {
    alignSelf: 'center',
  },
});

export interface ProductInfoProps {}

const ProductInfo: React.FunctionComponent<ProductInfoProps> = () => {
  const classes = useStyles();
  // Need to encode product description: newlines, styling, etc.
  const sometext: string =
    'Product description\n\nA product with lots of nice feats.';
  return (
    <Container className={classes.child}>
      <div>{sometext}</div>
      <div className={classes.button}>
        <Button color='primary'>Add to cart</Button>
      </div>
    </Container>
  );
};

export default ProductInfo;
