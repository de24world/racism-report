import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../src/context/AuthContext';

import Login from '../src/components/Login';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();

  // useEffect(() => {
  //   if (user) {
  //     alert('already loggedin');
  //     router.push('/');
  //   }
  // }, [router, user]);

  return (
    <>
      Login Page
      {user ? <h2>{user.email} already logged in</h2> : <Login />}
    </>
  );
};

export default LoginPage;
