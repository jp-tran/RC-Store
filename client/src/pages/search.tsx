import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import Layout from '../components/Layout';
import SearchResults from '../components/productCatalog/SearchResults';
import gradients from '../config/gradients';
import GET_SEARCHED_PRODUCTS from '../graphql/queries/getSearchedProducts';
import { ProductProps } from '../types';

const SearchPage = () => {
  const router = useRouter();

  const { loading, data, error } = useQuery(GET_SEARCHED_PRODUCTS, {
    variables: { query: router.query.query },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occured</p>;
  }

  const products: ProductProps[] = data.products;

  return (
    <Layout title='Search Results' gradient={gradients.green}>
      <SearchResults productList={products} />
    </Layout>
  );
};

export default SearchPage;
