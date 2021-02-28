import React from 'react';
import { useSession } from 'next-auth/client';
import { useQuery } from '@apollo/client';
import MyProducts from '../../components/account/MyProducts';
import Layout from '../../components/Layout';
import GET_MY_PRODUCTS from '../../graphql/queries/getMyProducts';
import { ProductProps } from '../../types';

const MyProductsPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && !session) {
    return <p>Access Denied</p>;
  }

  if (session) {
    const { loading, data } = useQuery(GET_MY_PRODUCTS, {
      variables: { sellerID: 1 },
    });

    if (loading) {
      return <p>Loading...</p>;
    }

    const products: ProductProps[] = data.products;

    return (
      <Layout title='Account | My Products'>
        <MyProducts products={products} />
      </Layout>
    );
  }
};

export default MyProductsPage;
