import { ThemeProvider } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import ProductCatalog from '../components/ProductCatalog';
import productList from '../components/getProducts';
import customTheme from '../config/theme';

const IndexPage = () => (
  <ThemeProvider theme={customTheme}>
    <Layout title='RC Store'>
      <h1>Home</h1>
      <ProductCatalog productList={productList} />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
