import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import Layout from '../components/Layout';
import SearchResults from '../components/productCatalog/SearchResults';
import gradients from '../config/gradients';
import GET_SEARCHED_PRODUCTS from '../graphql/queries/getSearchedProducts';
import { ProductProps } from '../types';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const SearchPage = () => {
  const router = useRouter();

  const { loading, data, error } = useQuery(GET_SEARCHED_PRODUCTS, {
    variables: { query: router.query.query },
  });

  let content;

  if (loading) {
    content = <Loading />;
  } else if (error) {
    content = <ErrorMessage msg='could not fetch data' />;
  } else {
    const products: ProductProps[] = data.products;
    content = <SearchResults productList={products} />;
  }

  return (
    <Layout title='Search Results' gradient={gradients.green}>
      {content}
    </Layout>
  );
};

export default SearchPage;
