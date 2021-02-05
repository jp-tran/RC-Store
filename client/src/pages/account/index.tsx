import { useSession } from 'next-auth/client';

import Layout from '../../components/Layout';
import Account from '../../components/account/Account';

const AccountPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && !session) {
    return <p>Access Denied</p>;
  }

  if (session) {
    return (
      <Layout title='Your Account | RC Store'>
        <Account session={session} />
      </Layout>
    );
  }
};

export default AccountPage;
