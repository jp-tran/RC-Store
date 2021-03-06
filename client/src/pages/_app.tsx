import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
import { Elements } from '@stripe/react-stripe-js';
import { ThemeProvider } from '@material-ui/core/styles';

import getStripe from '../utils/get-stripe';
import CartProvider from '../components/shoppingCart/CartProvider';
import customTheme from '../config/theme';
import { useApollo } from '../lib/apolloClient';
import SearchBarContextProvider from '../contexts/SearchBarContextProvider';

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider session={pageProps.session}>
        <Elements stripe={getStripe()}>
          <CartProvider>
            <ThemeProvider theme={customTheme}>
              <SearchBarContextProvider>
                <Component {...pageProps} />
              </SearchBarContextProvider>
            </ThemeProvider>
          </CartProvider>
        </Elements>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
