import AuthWrapper from '~/AuthWrapper';
import { useStore } from '~/store';
import { NextPageWithLayout } from './_app';

const Authed: NextPageWithLayout = () => {
  const { user } = useStore();

  return <p>You are logged in as user with token: {user?.token}</p>;
};

Authed.getLayout = (page) => <AuthWrapper>{page}</AuthWrapper>;

export default Authed;
