import * as React from 'react';

import { makeStyles } from '@material-ui/core';

import CartItem, { ICartItem } from './CartItem';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export interface ShoppingCartProps {
  cartItemList: ICartItem[];
}

const ShoppingCart: React.FunctionComponent<ShoppingCartProps> = (props) => {
  const { cartItemList } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {cartItemList.map((cartItemProps) => {
        const {
          productId,
          productName,
          imageSrc,
          description,
          price,
          quantity,
        } = cartItemProps;

        return (
          <CartItem
            productId={productId}
            productName={productName}
            imageSrc={imageSrc}
            description={description}
            price={price}
            quantity={quantity}
          />
        );
      })}
    </div>
  );
};

export default ShoppingCart;
