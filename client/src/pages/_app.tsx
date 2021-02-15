import { useEffect } from 'react';
import { Provider as AuthProvider } from 'next-auth/client';
import { Elements } from '@stripe/react-stripe-js';
import { ThemeProvider } from '@material-ui/core/styles';

import getStripe from '../utils/get-stripe';
import CartProvider from '../components/shoppingCart/CartProvider';
import customTheme from '../config/theme';

import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <AuthProvider session={pageProps.session}>
      <Elements stripe={getStripe()}>
        <CartProvider>
          <ThemeProvider theme={customTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </CartProvider>
      </Elements>
    </AuthProvider>
  );
};

export default App;
