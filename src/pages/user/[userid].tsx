import { useRouter } from 'next/router';

const User = () => {
  const router = useRouter();
  const { userid } = router.query;

  return <p>User page with id: {userid}</p>;
};

export default User;
