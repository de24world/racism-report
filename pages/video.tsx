// import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Typography, Input, Checkbox } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import VideoList from '../src/components/VideoList';
import { IDataProps } from '../src/interface/dataInterface';

interface Props {
  data: IDataProps[];
}

const VideoPage = function ({ data }: Props) {
  const reportData = data;
  const { Title, Paragraph, Text, Link } = Typography;
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  console.log(data, 'data in Video Page');

  // serach & filter
  const [query, setQuery] = useState('');
  const [searchDataKeys, setSearchDataKeys] = useState(['country', 'city']);
  const dataKeys = reportData[0] && Object.keys(reportData[0]);

  function searchData(dataValues: any) {
    return dataValues.filter((dataValue: any) =>
      searchDataKeys.some((dataKey: any) => dataValue[dataKey].toString().toLowerCase().indexOf(query.toLowerCase()) > -1),
    );
  }

  return (
    <>
      <Head>
        <title>Racism Report App | Video</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Title level={2}>
        <VideoCameraOutlined className="pr-4" />
        Video Page
      </Title>
      <Paragraph>해당 페이지는 비디오 페이지입니다. 인종차별과 관련한 많은 영상들을 볼 수 있습니다. 또한 비디오를 검색 및 필터할 수 있습니다.</Paragraph>

      <Input type="text" placeholder="검색할 값을 입력하세요" value={query} onChange={(e) => setQuery(e.target.value)} />

      {dataKeys &&
        dataKeys.map((dataKey, index) => (
          <div key={index}>
            <Checkbox
              checked={searchDataKeys.includes(dataKey)}
              onChange={(e) => {
                const checked = searchDataKeys.includes(dataKey);
                setSearchDataKeys((prev) => (checked ? prev.filter((sc) => sc !== dataKey) : [...prev, dataKey]));
              }}
            >
              {dataKey}
            </Checkbox>
          </div>
        ))}

      <VideoList data={searchData(reportData)} />
    </>
  );
};

export async function getServerSideProps({}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/reportDB.json`);
  const data = await res.json();

  return {
    props: {
      data,
      // ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default VideoPage;
