import Layout from '../components/Layout';
import ProductCatalog from '../components/productCatalog/ProductCatalog';
import { initializeApollo } from '../lib/apolloClient';
import { ProductProps } from '../types';
import GET_ALL_PRODUCTS from '../graphql/queries/getRCProducts';
import HomePageCover from '../components/HomePageCover';

const IndexPage = ({ products }: { products: ProductProps[] }) => {
  return (
    <Layout title='Recurse Store'>
      <HomePageCover />
      <ProductCatalog productList={products} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_ALL_PRODUCTS,
    variables: { isRecurseCenterMerch: true },
  });

  const products = data.products;

  return {
    props: {
      products,
    },
  };
}

export default IndexPage;
