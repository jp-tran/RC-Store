import React from 'react';
import { useSession } from 'next-auth/client';
import { useQuery } from '@apollo/client';
import MyProducts from '../../components/account/MyProducts';
import Layout from '../../components/Layout';
import GET_MY_LISTINGS from '../../graphql/queries/getMyListings';
import { CustomUser, ProductProps } from '../../types';
import gradients from '../../config/gradients';
import Loading from '../../components/Loading';
import AccessDenied from '../../components/AccessDenied';
import ErrorMessage from '../../components/ErrorMessage';

const MyProductsPage = () => {
  const [session, loading] = useSession();

  let content;

  if (loading) {
    content = <Loading />;
  } else if (!loading && !session) {
    content = <AccessDenied />;
  } else if (session) {
    const customUser: CustomUser = session.user;

    const { loading, data, error } = useQuery(GET_MY_LISTINGS, {
      variables: { sellerID: customUser.id },
    });

    if (loading) {
      content = <Loading />;
    } else if (error) {
      content = <ErrorMessage msg='could not fetch data' />;
    } else {
      const products: ProductProps[] = data.listings;
      content = <MyProducts products={products} />;
    }
  }

  return (
    <Layout title='Account | My Products' gradient={gradients.pink}>
      {content}
    </Layout>
  );
};

export default MyProductsPage;
