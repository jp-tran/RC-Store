import { ThemeProvider } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import Product from '../components/Product';
import customTheme from '../config/theme';

const IndexPage = () => (
  <ThemeProvider theme={customTheme}>
    <Layout title='RC Store'>
      <h1>Hello Next.js 👋</h1>
      <Product />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
