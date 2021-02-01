import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default Post;

/* import { useRouter } from 'next/router';

export interface ProductPageProps {}

const ProductPage: React.FunctionComponent<ProductPageProps> = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
};

export default ProductPage; */
