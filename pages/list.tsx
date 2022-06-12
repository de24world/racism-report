import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { realtimeDB } from '../firebase';
import TableList from '../src/components/TableList';
import { ref, child, get } from 'firebase/database';

import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/lib/table';
import { IData, IDataValue } from '../src/interface/dataInterface';
import { Countries } from '../shared/model/country';
import { FilterColumnsPeople } from '../shared/model/list';

interface Props {
  reportData: IDataValue;
  // key: React.Key;
  // name: string;
  // age: number;
  // address: string;
}

const ListPage = ({ reportData }: Props) => {
  const router = useRouter();

  console.log(reportData, 'test : data in List');
  const dataKeys = Object.keys(reportData);
  // console.log(dataKeys, 'test : dataKeys in list Page');

  const dataEntries = Object.entries(reportData);
  // console.log(dataEntries, 'test :dataEntries in list Page');

  const dataValues = Object.values(reportData);
  console.log(dataValues, 'test : dataValues in list Page');

  const columns: ColumnsType<Props> = [
    {
      title: 'Offender',
      dataIndex: 'offender',
      filters: FilterColumnsPeople,
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value: string, record) => record.offender.includes(value),
      // width: '30%',
    },
    {
      title: 'Victim',
      dataIndex: 'victim',
      filters: FilterColumnsPeople,
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value: string, record) => record.victim.includes(value),
      // width: '30%',
    },
    {
      title: 'Place',
      dataIndex: 'place',
      filters: [
        {
          text: 'United States of America (the)',
          value: 'United States of America (the)',
        },
      ],
      onFilter: (value: string, record) => record.place.includes(value),
      filterSearch: true,
      // width: '40%',
    },
    {
      title: 'Level',
      dataIndex: 'level',
      filters: [
        {
          text: '1',
          value: '1',
        },
        {
          text: '2',
          value: '2',
        },
        {
          text: '3',
          value: '31',
        },
      ],
      onFilter: (value: string, record) => record.level.includes(value),
      filterSearch: true,
      sorter: (a, b) => a.level - b.level,
    },
    {
      title: 'Date',
      dataIndex: 'occurDate',
      filters: [
        {
          text: 'United States of America (the)',
          value: 'United States of America (the)',
        },
      ],
      onFilter: (value: string, record) => record.occurDate.includes(value),
      // filterSearch: true,
      // width: '40%',
    },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   filters: [
    //     {
    //       text: 'London',
    //       value: 'London',
    //     },
    //     {
    //       text: 'New York',
    //       value: 'New York',
    //     },
    //   ],
    //   onFilter: (value: string, record) => record.address.startsWith(value),
    //   filterSearch: true,
    //   // width: '40%',
    // },
  ];

  //  Key Error
  const dataList: Props[] = dataValues;

  // const dataList: IData[] = [
  //   {
  //     key: dataKeys,
  //     offender: dataValues,
  //     victim: 'John Brown',
  //     place: '',
  //     date: '',
  //     level: 32,
  //     address: 'New York No. 1 Lake Park',
  //   },
  //   {
  //     key: '2',
  //     offender: 'Jim Green',
  //     // name: 'Jim Green',
  //     level: 42,
  //     address: 'London No. 1 Lake Park',
  //   },
  //   {
  //     key: '3',
  //     offender: 'Joe Black',
  //     level: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //   },
  //   {
  //     key: '4',
  //     offender: 'Jim Red',
  //     level: 32,
  //     address: 'London No. 2 Lake Park',
  //   },
  // ];

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <>
      List Page <br />
      Todo <br />
      - 테이블 클릭 https://stackoverflow.com/questions/62786115/how-do-i-use-react-router-link-to-from-antd-table-column <br />
      - List 완성 <br />
      - Filter 완성 <br />
      - key 문제 해결 <br />
      - Pagination <br />
      - 모든 colums 한 곳에 몰아넣기
      <br />
      <Table
        columns={columns}
        dataSource={dataList}
        onChange={onChange}
        onRow={(i) => ({
          onClick: (e) => router.push(`/video/${dataKeys}`),
        })}
      />
      ;{/* <TableList /> */}
    </>
  );
};

// https://firebase.google.com/docs/database/web/read-and-write#read_data
// https://ashleemboyer.com/blog/nextjs-firebase-blog-03
export async function getStaticProps({}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/posts.json`);
  const reportData = await res.json();

  return {
    props: {
      reportData,
      // ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default ListPage;
