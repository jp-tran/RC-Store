import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  makeStyles,
} from '@material-ui/core';
import * as React from 'react';
import { ProductProps } from '../productCatalog/Product';

// also add fields for quantity and price of each product in the cart
export interface ICartItem extends ProductProps {
  price: number; // USD for now
  quantity: number;
}

const useStyles = makeStyles({
  root: {
    width: '300px',
    margin: '10px',
  },
  image: {
    width: '300px',
    height: '300px',
  },
});

const CartItem: React.FunctionComponent<ICartItem> = (props) => {
  const {
    productId,
    productName,
    imageSrc,
    description,
    price,
    quantity,
  } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} key={productId}>
      <CardHeader title={productName} />
      <CardMedia className={classes.image} image={imageSrc} />
      <CardContent>{description}</CardContent>
      <CardContent>Price: $ {price}</CardContent>
      <CardContent>Qty: {quantity}</CardContent>
      <CardActions>
        <Link href={`/products/${productId}`}>
          <a>
            <Button>More information</Button>
          </a>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CartItem;
