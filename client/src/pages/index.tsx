import Layout from '../components/Layout';
import ProductCatalog from '../components/productCatalog/ProductCatalog';
import { ProductProps } from '../components/productCatalog/Product';
import getProducts from '../lib/products';

const IndexPage: React.FunctionComponent<{ products: ProductProps[] }> = ({
  products,
}) => (
  <Layout title='RC Store'>
    <h1>Home</h1>
    <ProductCatalog productList={products} />
  </Layout>
);

export async function getStaticProps() {
  const products = getProducts();
  return {
    props: {
      products,
    },
  };
}

export default IndexPage;
