import { gql } from '@apollo/client';
import Layout from '../components/Layout';
import ProductCatalog from '../components/productCatalog/ProductCatalog';
import { initializeApollo } from '../lib/apolloClient';
import { ProductProps } from '../types';

const GET_ALL_PRODUCTS = gql`
  query Products($isRecurseCenterMerch: Boolean) {
    products(isRecurseCenterMerch: $isRecurseCenterMerch) {
      sku
      name
      price
      currency
      image
      description
      longDescription
    }
  }
`;

const IndexPage = ({ products }: { products: ProductProps[] }) => {
  return (
    <Layout title='RC Store'>
      <h1>Home</h1>
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
