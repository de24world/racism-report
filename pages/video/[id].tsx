import { useRouter } from 'next/router';
// import { GetServerSideProps, GetS } from 'next';

import { ref, child, get } from 'firebase/database';

import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/lib/table';
import Detail from '../../src/components/Detail';

interface Props {
  posts: any;
}

const ListPage = ({ posts }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // console.log(popostst, 'post??');
  const postVideoValue = Object.values(posts);
  // console.log(postVideoValue, 'postVideoValue??');
  const findPost = postVideoValue.find((post) => post.id == id);
  // console.log(findPost, 'findPost??');

  return (
    <>
      Dynamic ID Page <br />
      <p>Firebase key: {id}</p>
      {/* This is for Key */}
      {/* <Detail post={post} /> */}
      <Detail post={findPost} />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1655017009079' } }, { params: { id: '1655017106681' } }, { params: { id: '1655074611202' } }],
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/posts.json`);
  // This is for key
  // const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/posts/${context.params.id}.json`);

  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default ListPage;
