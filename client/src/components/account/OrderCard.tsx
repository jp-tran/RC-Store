import {
  Card,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { formatCurrencyString } from 'use-shopping-cart';

import { Order } from '../../types';
import formatDate from '../../utils/format-date';
import PurchasedItem from './PurchasedItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    orderCard: {
      width: '100%',
      maxWidth: theme.breakpoints.values.lg,
      margin: '1rem auto',
      borderRadius: 0,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 1px 5px 0px rgba(38,59,94,0.3)',
      '&:hover,&:focus-within': {
        boxShadow: '0 2px 15px 5px rgba(38,59,94,0.3)',
        transition: '0.25s ease-out',
      },
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem',
      background: '#F6F6F6',
    },
    headerText: {
      display: 'flex',
      flexDirection: 'column',
    },
    headerTextRight: {
      alignItems: 'flex-end',
    },
  })
);

const OrderCard = ({ order }: { order: Order }) => {
  const classes = useStyles();

  return (
    <Card className={classes.orderCard} raised={false}>
      <div className={classes.header}>
        <Typography className={classes.headerText}>
          <span>
            <strong>Order Placed</strong>
          </span>
          <span>{`${formatDate(order.date as string)}`}</span>
        </Typography>
        <Typography
          className={`${classes.headerText} ${classes.headerTextRight}`}
        >
          <span>
            <strong>Grand Total</strong>
          </span>
          <span>{`${formatCurrencyString({
            value: order.grandTotal as number,
            currency: 'USD',
          })}`}</span>
        </Typography>
      </div>
      {order!.purchasedProducts!.map((item) => (
        <PurchasedItem item={item} key={item.sku} />
      ))}
    </Card>
  );
};

export default OrderCard;
