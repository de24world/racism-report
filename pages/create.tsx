import type { NextPage } from 'next';
import { db, realtimeDB } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getDatabase, ref, child, get } from 'firebase/database';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../src/context/AuthContext';
import CreateForm from '../src/components/CreateForm';

// type Props = {
//   realTimeReportDB: any;
// };

const Create = ({}: Props) => {
  const router = useRouter();
  const { user } = useAuth();

  // const dbRef = ref(getDatabase());
  // get(child(dbRef, `reportDB/`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //     } else {
  //       console.log('No data available');
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  useEffect(() => {
    if (!user) {
      alert('please login at first');
      router.push('/login');
    }
  }, [router, user]);

  return (
    <>
      <CreateForm user={user} />
    </>
  );
};

// https://ashleemboyer.com/blog/nextjs-firebase-blog-02
// https://www.pankajtanwar.in/blog/how-i-built-a-real-time-blog-view-counter-with-nextjs-and-firebase
export async function getStaticProps({}) {
  // const dbRef = ref(getDatabase());
  // get(child(dbRef, `reportDB/`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       const realTimeReportDB = snapshot.val();
  //       // console.log(snapshot.val());
  //     } else {
  //       console.log('No data available');
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return {
    props: {
      // realTimeReportDB,
      // ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Create;
