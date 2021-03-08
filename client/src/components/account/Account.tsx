import React from 'react';

import {
  Container,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CustomUser, Order } from '../../types';
import OrderCard from './OrderCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    greeting: {
      display: 'flex',
      alignItems: 'center',
    },
    greetingText: {
      fontFamily: "'Titillium Web', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 600,
      [theme.breakpoints.up('xs')]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '3rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
      },
    },
    image: {
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      border: '2px solid',
      borderColor: theme.palette.primary.main,
      boxShadow: '0 1px 5px 0px rgba(38,59,94,0.3)',
      '&:hover': {
        borderColor: theme.palette.primary.dark,
        transition: '0.25s ease-in',
      },
      [theme.breakpoints.up('xs')]: {
        marginRight: '1rem',
      },
      [theme.breakpoints.up('md')]: {
        marginRight: '3rem',
      },
    },
    yourOrders: {
      fontFamily: "'Titillium Web', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 600,
      marginTop: '3rem',
      marginBottom: '1rem',
    },
  })
);

const Account = ({ user, orders }: { user: CustomUser; orders: Order[] }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));

  const sortedOrders = orders.slice().sort((a, b) => {
    const dateA = new Date(a.date as string);
    const dateB = new Date(b.date as string);
    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) {
      return -1;
    } else {
      return 0;
    }
  });

  const previousOrders = (
    <>
      <Typography
        align='left'
        component='h2'
        variant={isLaptopScreen ? 'h4' : 'h5'}
        className={classes.yourOrders}
      >
        Your Orders &#x1F4EB;
      </Typography>
      {sortedOrders.map((order, idx) => (
        <OrderCard order={order} key={idx} />
      ))}
    </>
  );

  const noPreviousOrders = (
    <Typography
      component='h3'
      variant={isLaptopScreen ? 'h4' : 'h5'}
      style={{ marginTop: '3rem' }}
    >
      You have no previous orders &#x1F626;
    </Typography>
  );

  return (
    <Container maxWidth='lg' className={classes.container}>
      <div className={classes.greeting}>
        <img
          src={user.image as string}
          alt='profile image'
          className={classes.image}
        />
        <Typography align='left' className={classes.greetingText}>
          {`Hello, ${user.firstName}`}
        </Typography>
      </div>
      {orders.length > 0 ? previousOrders : noPreviousOrders}
    </Container>
  );
};

export default Account;
