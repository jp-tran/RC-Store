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

export interface ProductInfoProps {
  productName: string;
  longDescription?: string;
}

const ProductInfo: React.FunctionComponent<ProductInfoProps> = ({
  productName,
  longDescription,
}) => {
  const classes = useStyles();
  // Need to encode product description: newlines, styling, etc.
  return (
    <Container className={classes.child}>
      <div>
        <h1>{productName}</h1>
        <div>{longDescription}</div>
      </div>
      <div className={classes.button}>
        <Button color='primary'>Add to cart</Button>
      </div>
    </Container>
  );
};

export default ProductInfo;
