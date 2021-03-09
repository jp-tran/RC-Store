import React from 'react';
import { useSession } from 'next-auth/client';
import { useQuery } from '@apollo/client';
import MyProducts from '../../components/account/MyProducts';
import Layout from '../../components/Layout';
import GET_MY_LISTINGS from '../../graphql/queries/getMyListings';
import { CustomUser, ProductProps } from '../../types';
import gradients from '../../config/gradients';

const MyProductsPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && !session) {
    return <p>Access Denied</p>;
  }

  if (session) {
    const customUser: CustomUser = session.user;

    const { loading, data, error } = useQuery(GET_MY_LISTINGS, {
      variables: { sellerID: customUser.id },
    });

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) return <p>Error fetching data</p>;

    const products: ProductProps[] = data.listings;

    return (
      <Layout title='Account | My Products' gradient={gradients.pink}>
        <MyProducts products={products} />
      </Layout>
    );
  }
};

export default MyProductsPage;
