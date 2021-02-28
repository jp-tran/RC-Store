import { gql } from '@apollo/client';
import Layout from '../../components/Layout';
import ProductTemplate from '../../components/productPage/ProductTemplate';
import { initializeApollo } from '../../lib/apolloClient';
import { ProductProps } from '../../types';

const GET_PRODUCT = gql`
  query Product($sku: String!) {
    product(sku: $sku) {
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

const ProductPage = ({ product }: { product: ProductProps }) => {
  return (
    <Layout title={product.name}>
      <ProductTemplate product={product} />
    </Layout>
  );
};

interface ProductPath {
  params: { sku: string };
}

export async function getServerSideProps({ params }: ProductPath) {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_PRODUCT,
    variables: { sku: params.sku },
  });

  const product = data.product;

  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
