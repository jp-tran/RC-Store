import React, { ReactNode } from 'react';
import Head from 'next/head';
import gradients from '../config/gradients';

import { createStyles, CssBaseline, makeStyles } from '@material-ui/core';

import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';

interface StyleProps {
  gradient: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    contentContainer: (styleProps: StyleProps) => ({
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -100,
        width: '100%',
        height: '90vh',
        background: styleProps.gradient,
      },
    }),
  })
);

interface Props {
  children?: ReactNode;
  title?: string;
  gradient?: string;
}

const Layout = ({
  children,
  title = 'Recurse Store',
  gradient = gradients.blue,
}: Props) => {
  const styleProps: StyleProps = { gradient };
  const classes = useStyles(styleProps);
  return (
    <div className={classes.container}>
      <CssBaseline />
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <NavBar />
      <div className={classes.contentContainer}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
