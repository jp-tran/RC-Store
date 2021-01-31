import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Button, CssBaseline } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Footer from './footer/Footer';

interface Props {
  children?: ReactNode;
  title?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: 'blue',
      [theme.breakpoints.down('lg')]: {
        backgroundColor: 'red',
      },
    },
  })
);

const Layout = ({ children, title = 'RC Store' }: Props) => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header>
        <nav>
          <Link href='/'>
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href='/sign-in'>
            <Button variant='contained' className={classes.button}>
              Sign In
            </Button>
          </Link>{' '}
        </nav>
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
