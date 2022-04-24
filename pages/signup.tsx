import type { NextPage } from 'next';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../src/context/AuthContext';

import Register from '../src/components/Register';

const SignupPage: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      alert('already registered');
      router.push('/');
    }
  }, [router, user]);

  return (
    <>
      Signup Page
      {!user && <Register />}
    </>
  );
};

export default SignupPage;
