import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

import AddToCartButton from '../shoppingCart/AddToCartButton';
import { ProductProps } from '../../types';

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
  textContainer: {
    padding: '20px',
    fontSize: '1.5em',
    overflow: 'scroll',
  },
  buttonContainer: {
    marginTop: '1.5em',
    alignSelf: 'center',
  },
});

export interface ProductInfoProps {
  name: string;
  sku: string;
  price: number;
  currency: string;
  longDescription?: string;
}

const ProductInfo = ({ product }: { product: ProductProps }) => {
  const classes = useStyles();
  const { name, longDescription } = product;
  return (
    <Container className={classes.child}>
      <div className={classes.textContainer}>
        <h1>{name}</h1>
        <div>{longDescription}</div>
      </div>
      <div className={classes.buttonContainer}>
        <AddToCartButton item={product} />
      </div>
    </Container>
  );
};

export default ProductInfo;
