// import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, Fragment } from 'react';
import { Typography, Input, Checkbox } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import VideoList from '../../src/components/VideoList';
import { IDataValue } from '../../src/interface/dataInterface';
import { getDatabase, ref, child, get, onValue } from 'firebase/database';

interface Props {
  data: IDataValue;
  videoPosts: IDataValue[];
}

const VideoPage = function ({ data, videoPosts }: Props) {
  const reportData = data;
  const { Title, Paragraph, Text, Link } = Typography;

  console.log(videoPosts, 'videoPosts in Video Page');

  // serach & filter
  const [query, setQuery] = useState('');
  const [searchDataKeys, setSearchDataKeys] = useState(['country']);
  // const dataKeys = reportData[0] && Object.keys(reportData[0]);
  // console.log(dataKeys, 'test : dateKeys??');

  // function searchData(dataValues: any) {
  //   console.log(dataValues, 'test : dataValeus');
  //   return dataValues.filter((dataValue: any) =>
  //     searchDataKeys.some((dataKey: any) => dataValue[dataKey].toString().toLowerCase().indexOf(query.toLowerCase()) > -1),
  //   );
  // }

  // const dataKeys = Object.keys(data);
  // console.log(dataKeys, 'test : dataKeys in video Page');

  // const dataEntries = Object.entries(data);
  // console.log(dataEntries, 'test :dataEntries in video Page');

  return (
    <>
      <Head>
        <title>Racism Report App | Video</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Title level={2}>
        <VideoCameraOutlined className="pr-4" />
        Video Page / 해야할 것 : 카드로 만들기, 검색 및 필터, 페이지 넘기기
      </Title>
      <Paragraph>해당 페이지는 비디오 페이지입니다. 인종차별과 관련한 많은 영상들을 볼 수 있습니다. 또한 비디오를 검색 및 필터할 수 있습니다.</Paragraph>

      <Input type="text" placeholder="검색할 값을 입력하세요" value={query} onChange={(e) => setQuery(e.target.value)} />
      {/* <Input type="text" placeholder="검색할 값을 입력하세요" value={query} onChange={(e) => setQuery(e.target.value)} /> */}

      <div className="md:flex flex-row">
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {Object.keys(data).map((createdKey, dataIndex) => (
            <li className="p-1.5" key={dataIndex}>
              dataIndex : {dataIndex} <br />
              createdKey : {createdKey} <br />
              {/* data[dataKey].evidence : {data[dataKey].evidence} */}
            </li>
          ))}
        </ul>
        {/* {dataKeys &&
          dataKeys.map((dataKey, index) => (
            <Fragment key={index}>
              <Checkbox
                checked={searchDataKeys.includes(dataKey)}
                onChange={(e) => {
                  const checked = searchDataKeys.includes(dataKey);
                  setSearchDataKeys((prev) => (checked ? prev.filter((sc) => sc !== dataKey) : [...prev, dataKey]));
                }}
              >
                <Title level={5}>{dataKey}</Title>
              </Checkbox>
            </Fragment>
          ))} */}
      </div>

      {/* <VideoList data={reportData} /> */}

      {/* <VideoList data={searchData(reportData)} /> */}
    </>
  );
};

export async function getStaticProps({}) {
  const dbRef = ref(getDatabase());
  const data = await get(child(dbRef, `posts/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.key, 'snapshot.key??');
        console.log(snapshot.val(), 'snapshot.val() in video/index??');
        return snapshot.val();
      } else {
        console.log('No data available in video/index');
      }
    })
    .catch((error) => {
      console.error(error);
    });

  const videoPosts = Object.values(data);

  // const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/posts.json`);
  // const data = await res.json();

  return {
    props: {
      data,
      videoPosts,
      // ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default VideoPage;
