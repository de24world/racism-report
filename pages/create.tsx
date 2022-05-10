import type { NextPage } from 'next';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../src/context/AuthContext';
import CreateForm from '../src/components/CreateForm';

const Create: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      alert('please login at first');
      router.push('/login');
    }
  }, [router, user]);

  return (
    <>
      <CreateForm />
    </>
  );
};

// https://ashleemboyer.com/blog/nextjs-firebase-blog-02
export async function getStaticProps({}) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/reportDB.json`);
  // const data = await res.json();

  // const data = await db;

  const querySnapshot = await getDocs(collection(db, 'testDB'));

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

  const database = JSON.stringify(querySnapshot);

  return {
    props: {
      database,
      // ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Create;
