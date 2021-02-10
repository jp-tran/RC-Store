import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

import StyledButton from './StyledButton';

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
      <div className={classes.textContainer}>
        <h1>{productName}</h1>
        <div>{longDescription}</div>
      </div>
      <div className={classes.buttonContainer}>
        <StyledButton>Add to cart</StyledButton>
      </div>
    </Container>
  );
};

export default ProductInfo;
