import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import CssBaseline from '@material-ui/core/CssBaseline';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'RC Store' }: Props) => (
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
          <a>Sign In</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm the footer</span>
    </footer>
  </div>
);

export default Layout;
