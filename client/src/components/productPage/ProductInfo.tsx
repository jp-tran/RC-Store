import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

import StyledButton from './StyledButton';
import AddToCartButton from '../shoppingCart/AddToCartButton';

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

const ProductInfo: React.FunctionComponent<ProductInfoProps> = ({
  name,
  sku,
  price,
  currency,
  longDescription,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.child}>
      <div className={classes.textContainer}>
        <h1>{name}</h1>
        <div>{longDescription}</div>
      </div>
      <div className={classes.buttonContainer}>
        <AddToCartButton
          item={{
            name,
            sku,
            price,
            currency,
          }}
        />
      </div>
    </Container>
  );
};

export default ProductInfo;
