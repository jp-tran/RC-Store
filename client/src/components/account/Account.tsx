import React from 'react';
import { Session } from 'next-auth/client';

import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
      display: 'flex',
      alignItems: 'center',
    },
    image: {
      borderRadius: '50%',
      width: '200px',
      height: '200px',
      marginRight: '3rem',
    },
  })
);

const Account = ({ session }: { session: Session }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container maxWidth='xl' className={classes.container}>
      {isLaptopScreen && (
        <img
          src={session.user.image as string}
          alt='profile image'
          className={classes.image}
        />
      )}
      <Typography align='left' variant='h2'>
        {`Hello, ${session.user.name}`}
      </Typography>
    </Container>
  );
};

export default Account;
