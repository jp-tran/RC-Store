import { useSession } from 'next-auth/client';
import { useQuery } from '@apollo/client';

import { CustomUser } from '../../types';
import GET_MY_ORDERS from '../../graphql/queries/getMyOrders';
import Layout from '../../components/Layout';
import Account from '../../components/account/Account';
import gradients from '../../config/gradients';

const AccountPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && !session) {
    return <p>Access Denied</p>;
  }

  if (session) {
    const customUser: CustomUser = session.user;

    const { data, loading, error } = useQuery(GET_MY_ORDERS, {
      variables: { userID: customUser.id },
    });

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error...</p>;

    return (
      <Layout title='Account | Recurse Store' gradient={gradients.orange}>
        <Account user={customUser} orders={data.orders} />
      </Layout>
    );
  }
};

export default AccountPage;
