import Layout from '../components/Layout';
import ProductCatalog from '../components/ProductCatalog';
import productList from '../components/getProducts';

const IndexPage = () => (
  <Layout title='RC Store'>
    <h1>Home</h1>
    <ProductCatalog productList={productList} />
  </Layout>
);

export default IndexPage;
