import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import { ref, child, get } from 'firebase/database';

import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/lib/table';
import Detail from '../../src/components/Detail';

interface Props {
  post: any;
}

const ListPage = ({ post }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(post, 'post??');
  return (
    <>
      Dynamic ID Page <br />
      <p>id: {id}</p>
      <Detail post={post} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/reportDB/${context.params.id}.json`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default ListPage;
