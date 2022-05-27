// import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import ReactPlayer from 'react-player';
import { Row, Col, Pagination } from 'antd';
import { IData } from '../interface/dataInterface';

interface Props {
  data: IData;
}

function VideoList({ data }: Props): JSX.Element {
  const router = useRouter();
  const { locale } = router;
  //   const { t } = useTranslation('common');

  const [page, setPage] = useState(1);
  const pageChange = (event: React.ChangeEvent, value: number) => {
    setPage(value);
  };

  console.log(data, 'test : data in VideoList');

  return (
    <>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {Object.keys(data).map((dataKey, dataIndex) => (
          <li className="p-1.5" key={dataIndex}>
            dataIndex : {dataIndex} <br />
            dataKey : {dataKey} <br />
            {/* data[dataKey].evidence : {data[dataKey].evidence} */}
            <ReactPlayer url={data[dataKey].evidence} width="100%" height="100%" />
          </li>
        ))}
      </ul>
      <Pagination defaultCurrent={1} total={50} />,
    </>
  );
}

export default VideoList;
