import * as React from 'react';

import { Button, makeStyles } from '@material-ui/core';

import { ICartItem } from './CartItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  container: {
    margin: 'auto',
    width: '70%',
  },

  table: {
    minWidth: 700,
    margin: 'auto',
  },

  // Theme from RC
  checkout: {
    width: 'auto',
    margin: '10px',
    border: '1px solid rgba(42,45,45,0.6)',
    color: '#23a050',
    float: 'right',
    borderColor: '#3dc06c',
  },
});

const TAX_RATE = 0.05;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

export interface ShoppingCartProps {
  cartItemList: ICartItem[];
}

function calculateRowPrice(price: number, quantity: number) {
  return quantity * price;
}

function createRow(cartItem: ICartItem) {
  const {
    productId,
    productName,
    imageSrc,
    description,
    price,
    quantity,
  } = cartItem;
  const rowPrice = calculateRowPrice(price, quantity);
  return { imageSrc, productName, price, quantity, rowPrice };
}

function createCartRows(cartItemList: ICartItem[]) {
  return cartItemList.map((cartItem) => createRow(cartItem));
}

function calculateSubtotal(items: number[]) {
  return items.reduce((a, b) => a + b, 0);
}

const ShoppingCart: React.FunctionComponent<ShoppingCartProps> = (props) => {
  const { cartItemList } = props;
  const classes = useStyles();

  let rows = createCartRows(cartItemList);
  let invoiceSubtotal = calculateSubtotal(rows.map(({ rowPrice }) => rowPrice));
  let taxes = invoiceSubtotal * TAX_RATE;
  let total = invoiceSubtotal + taxes;

  return (
    <div>
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} aria-label='cart table'>
          <TableHead>
            {/* <TableRow>
              <TableCell align='center' colSpan={3}>
                Details
              </TableCell>
              <TableCell align='right'>Price</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align='right'>Price</TableCell>
              <TableCell align='right'>Quantity</TableCell>
              <TableCell align='right'>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.productName}>
                <TableCell>{row.productName}</TableCell>
                <TableCell align='right'>{row.price}</TableCell>
                <TableCell align='right'>{row.quantity}</TableCell>
                <TableCell align='right'>{ccyFormat(row.rowPrice)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align='right'>{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align='right'>{`${(TAX_RATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align='right'>{ccyFormat(taxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align='right'>{ccyFormat(total)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button className={classes.checkout}>Checkout</Button>
      </TableContainer>
    </div>
  );
  // TODO: Replace this with a table
  // return (
  //   <div className={classes.container}>
  //     {cartItemList.map((cartItemProps) => {
  //       const {
  //         productId,
  //         productName,
  //         imageSrc,
  //         description,
  //         price,
  //         quantity,
  //       } = cartItemProps;

  //       return (
  //         <CartItem
  //           productId={productId}
  //           productName={productName}
  //           imageSrc={imageSrc}
  //           description={description}
  //           price={price}
  //           quantity={quantity}
  //         />
  //       );
  //     })}
  //   </div>
  // );
};

export default ShoppingCart;
