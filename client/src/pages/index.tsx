import Layout from '../components/Layout';
import ProductCatalog from '../components/productCatalog/ProductCatalog';
import products from '../lib/products.json';
import { ProductProps } from '../types';

const IndexPage: React.FunctionComponent<{ products: ProductProps[] }> = ({
  products,
}) => (
  <Layout title='RC Store'>
    <h1>Home</h1>
    <ProductCatalog productList={products} />
  </Layout>
);

export async function getStaticProps() {
  return {
    props: {
      products,
    },
  };
}

export default IndexPage;
