import Layout from '../../components/Layout';
import ProductCatalog from '../../components/productCatalog/ProductCatalog';
import products from '../../lib/products.json';
import { ProductProps } from '../../types';

const ProductsPage: React.FunctionComponent<{
  products: ProductProps[];
}> = ({ products }) => (
  <Layout title='Products | Recurse Store'>
    <h1>Products</h1>
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

export default ProductsPage;
