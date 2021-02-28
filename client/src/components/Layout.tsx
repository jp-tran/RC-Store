import React, { ReactNode } from 'react';
import Head from 'next/head';

import { CssBaseline } from '@material-ui/core';

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
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <NavBar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
