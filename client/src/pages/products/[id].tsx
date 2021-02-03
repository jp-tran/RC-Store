import { ProductProps } from '../../components/productCatalog/Product';

import Layout from '../../components/Layout';
import {
  getAllProductPaths,
  ProductPath,
  getProductData,
} from '../../lib/products';

export interface ProductPageProps {
  productProps: ProductProps;
}

const ProductPage: React.FunctionComponent<ProductPageProps> = ({
  productProps,
}) => {
  return <Layout>Hi!</Layout>;
};

export async function getStaticPaths(): Promise<{
  paths: ProductPath[];
  fallback: boolean;
}> {
  const paths: ProductPath[] = getAllProductPaths();
  // Returns an array that looks like this:
  // paths =
  // [
  //   {
  //     params: {
  //       id: '1'
  //     }
  //   },
  //   {
  //     params: {
  //       id: '2'
  //     }
  //   }
  // ]
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: ProductPath): Promise<{ props: { productProps: ProductProps } }> {
  const productProps = getProductData(params.id);
  return {
    props: {
      productProps,
    },
  };
}

export default ProductPage;
