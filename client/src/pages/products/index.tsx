import { ThemeProvider } from '@material-ui/core/styles';

import Layout from '../../components/Layout';
import ProductCatalog from '../../components/ProductCatalog';
import productList from '../../components/getProducts';
import customTheme from '../../config/theme';

const ProductsPage = () => (
  /* Make the theme provider part go inside Layout */
  <ThemeProvider theme={customTheme}>
    <Layout title='RC Store'>
      <h1>Products</h1>
      <ProductCatalog productList={productList} />
    </Layout>
  </ThemeProvider>
);

export default ProductsPage;
