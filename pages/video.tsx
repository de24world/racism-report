import type { NextPage } from 'next';
import Head from 'next/head';
import { Typography, Input, Checkbox } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import VideoList from '../src/components/VideoList';

const Video: NextPage = (data) => {
  const reportData = data;
  const { Title, Paragraph, Text, Link } = Typography;
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  console.log(data, 'data in Video Page');

  // serach & filter
  // const [query, setQuery] = useState('');
  // const [searchDataKeys, setSearchDataKeys] = useState(['country', 'city']);
  // const dataKeys = reportData[0] && Object.keys(reportData[0]);

  // function search(dataValues) {
  //   return dataValues.filter((dataValue) => searchDataKeys.some((dataKey) => dataValue[dataKey].toString().toLowerCase().indexOf(query.toLowerCase()) > -1));
  // }

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

      <Input placeholder="검색할 값을 입력하세요" />
      <Checkbox onChange={onChange}>나라</Checkbox>
      <Checkbox onChange={onChange}>도시</Checkbox>
      <Checkbox onChange={onChange}>국가코드</Checkbox>
      <Checkbox onChange={onChange}>날짜</Checkbox>
      <Checkbox onChange={onChange}>증거</Checkbox>
      <Checkbox onChange={onChange}>아이디</Checkbox>
      <Checkbox onChange={onChange}>단계</Checkbox>
      <Checkbox onChange={onChange}>가해자</Checkbox>
      <Checkbox onChange={onChange}>피해자</Checkbox>
      {/* <VideoList data={search(reportData)} */}
      <VideoList {...data} />
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

export default Video;
