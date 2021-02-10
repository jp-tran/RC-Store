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
  textContainer: {
    padding: '20px',
    fontSize: '1.5em',
    overflow: 'scroll',
  },
  buttonContainer: {
    marginTop: '1.5em',
    alignSelf: 'center',
  },
  button: {
    background: 'black',
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
    color: 'white',
    fontSize: '1.5em',
    transition: 'transform(.2s)',
    '&:hover': {
      backgroundColor: 'white',
      border: 'solid black',
      color: 'black',
      transform: 'scale(1.1)',
    },
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
        <Button className={classes.button}>Add to cart</Button>
      </div>
    </Container>
  );
};

export default ProductInfo;
