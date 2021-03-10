import { useSession } from 'next-auth/client';
import { useQuery } from '@apollo/client';

import { CustomUser } from '../../types';
import GET_MY_ORDERS from '../../graphql/queries/getMyOrders';
import Layout from '../../components/Layout';
import Account from '../../components/account/Account';
import gradients from '../../config/gradients';
import Loading from '../../components/Loading';
import AccessDenied from '../../components/AccessDenied';
import ErrorMessage from '../../components/ErrorMessage';

const AccountPage = () => {
  const [session, loading] = useSession();

  let content;

  if (loading) {
    content = <Loading />;
  } else if (!loading && !session) {
    content = <AccessDenied />;
  } else if (session) {
    const customUser: CustomUser = session.user;

    const { data, loading, error } = useQuery(GET_MY_ORDERS, {
      variables: { userID: customUser.id },
    });

    if (loading) {
      content = <Loading />;
    } else if (error) {
      content = <ErrorMessage msg='could not fetch data' />;
    } else {
      content = <Account user={customUser} orders={data.orders} />;
    }
  }

  return (
    <Layout title='Account | Recurse Store' gradient={gradients.orange}>
      {content}
    </Layout>
  );
};

export default AccountPage;
