import Layout from '../components/Layout';
import ProductCatalog from '../components/productCatalog/ProductCatalog';
import { ProductCardProps } from '../components/productCatalog/ProductCard';
import products from '../lib/products.json';

const IndexPage: React.FunctionComponent<{ products: ProductCardProps[] }> = ({
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
