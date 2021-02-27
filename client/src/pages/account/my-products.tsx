import React from 'react';
import MyProducts from '../../components/account/MyProducts';
import Layout from '../../components/Layout';

const MyProductsPage = () => {
  return (
    <Layout title='Account | My Products'>
      <MyProducts />
    </Layout>
  );
};

export default MyProductsPage;
