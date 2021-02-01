import { useRouter } from 'next/router';

import Layout from '../../components/Layout';

export interface ProductPageProps {}

const ProductPage: React.FunctionComponent<ProductPageProps> = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Layout>Post: {id}</Layout>;
};

export default ProductPage;
