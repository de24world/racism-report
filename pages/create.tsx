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

export async function getStaticProps({}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/reportDB.json`);
  const data = await res.json();

  return {
    props: {
      data,
      // ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Create;
