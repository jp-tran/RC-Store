import Layout from '../../components/Layout';
import ProductCatalog from '../../components/ProductCatalog';
import productList from '../../components/getProducts';

const ProductsPage = () => (
  <Layout title='RC Store'>
    <h1>Products</h1>
    <ProductCatalog productList={productList} />
  </Layout>
);

export default ProductsPage;
