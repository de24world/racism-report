import type { NextPage } from 'next';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../src/context/AuthContext';

const Create: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      alert('please login at first');
      router.push('/login');
    }
  }, [router, user]);

  return <>Create Page</>;
};

export default Create;
