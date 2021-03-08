import { NextPage } from 'next';

import Layout from '../components/Layout';
import gradients from '../config/gradients';
import CheckoutResultNoSSR from '../components/checkoutResult/CheckoutResultNoSSR';

const ResultPage: NextPage = () => {
  return (
    <Layout title='Checkout Result' gradient={gradients.purple}>
      <CheckoutResultNoSSR />
    </Layout>
  );
};

export default ResultPage;
