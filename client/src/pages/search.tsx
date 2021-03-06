import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import gradients from '../config/gradients';

const SearchPage = () => {
  const router = useRouter();

  return (
    <Layout title='Search Result | Recurse Store' gradient={gradients.green}>
      {router.query.query}
    </Layout>
  );
};

export default SearchPage;
