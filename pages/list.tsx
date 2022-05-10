import type { NextPage } from 'next';
import { realtimeDB } from '../firebase';
import TableList from '../src/components/TableList';
import { ref, child, get } from 'firebase/database';

interface Props {
  database: any;
}

const ListPage = ({ database }: Props) => {
  console.log(database, 'test : database');
  return (
    <>
      List Page
      <TableList />
    </>
  );
};

// https://firebase.google.com/docs/database/web/read-and-write#read_data
// https://ashleemboyer.com/blog/nextjs-firebase-blog-03
export async function getStaticProps({}) {
  const data = await res.json();
  // const dbRef = ref(realtimeDB);
  // get(child(dbRef, `reportDB`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val(), 'snapshot.val() in realtimeDB!!!');
  //     } else {
  //       console.log('No data available in realTimeDB');
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // const database = JSON.stringify(dbRef);
  return {
    props: {
      database,
      // ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default ListPage;
