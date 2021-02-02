import React, { ReactNode } from 'react';
import Head from 'next/head';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import customTheme from '../config/theme';
import NavBar from './navbar/NavBar';

import Footer from './footer/Footer';

interface Props {
  children?: ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'RC Store' }: Props) => {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={customTheme}>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <NavBar />
        {children}
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
