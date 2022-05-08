import type { NextPage } from 'next';
import { db } from '../firebase';
import TableList from '../src/components/TableList';
import { collection, getDocs } from 'firebase/firestore';

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

export async function getStaticProps({}) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/reportDB.json`);
  // const data = await res.json();

  // const data = await db;

  const querySnapshot = await getDocs(collection(db, 'reports'));
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

export default ListPage;
