import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import { getDatabase, ref, child, get, onValue } from 'firebase/database';

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
  const findPost = posts.find((post) => post.id == id);
  // console.log(findPost, 'findPost??');

  //firebase.google.com/docs/database/web/read-and-write
  // const db = getDatabase();
  // const starCountRef = ref(db, 'posts/');
  // onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
  //   console.log(data, 'data???');
  // });

  // https://firebase.google.com/docs/reference/node/firebase.database.DataSnapshot#foreach
  const dbRef = ref(getDatabase());
  get(child(dbRef, `posts/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.key, 'snapshot.key??');
        // console.log(snapshot.val(), 'snapshot.val()??');
        snapshot.forEach((childSnapshot) => {
          // console.log(childSnapshot.key, 'test : childSnapshot.key');
          // console.log(childSnapshot.val(), 'test : childSnapshot.val()');
          console.log(childSnapshot.val().id, 'test : childSnapshot.val().id');
        });
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });

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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/posts.json`);

  const data = await res.json();

  const posts = Object.values(data);

  return {
    props: {
      posts,
    },
  };
};

// export const getStaticPaths = async () => {
//   return {
//     paths: [{ params: { id: '1655017009079' } }, { params: { id: '1655017106681' } }, { params: { id: '1655074611202' } }],
//     fallback: 'blocking',
//   };
// };

// export const getStaticProps = async () => {
//   const dbRef = ref(getDatabase());
//   const data = await get(child(dbRef, `posts/`))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         // console.log(snapshot.key, 'snapshot.key??');
//         console.log(snapshot.val(), 'snapshot.val() in video/[id]??');
//         return snapshot.val();
//       } else {
//         console.log('No data available in video/index');
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//   const posts = Object.values(data);

// return {
//   props: {
//     posts,
//   },
// };
// };

export default ListPage;
