import type { NextPage } from 'next';
import TableList from '../src/components/TableList';

const List: NextPage = () => {
  return (
    <>
      List Page
      <TableList />
    </>
  );
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

export default List;
