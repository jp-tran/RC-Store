import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import PrintObject from '../components/shoppingCart/PrintObject';
import ClearCart from '../components/shoppingCart/ClearCart';

import { fetchGetJSON } from '../utils/api-helpers';
import useSWR from 'swr';
import Container from '@material-ui/core/Container';

const ResultPage: NextPage = () => {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load</div>;

  return (
    <Layout title='Checkout Payment Result'>
      <Container maxWidth='lg'>
        <h1>Checkout Payment Result</h1>
        <h3>Status: {data?.payment_intent?.status ?? 'loading...'}</h3>
        <h3>Thank you for your purchase!</h3>
        {/* <PrintObject content={data ?? 'loading...'} /> */}
        <ClearCart />
      </Container>
    </Layout>
  );
};

export default ResultPage;
