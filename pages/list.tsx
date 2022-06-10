import type { NextPage } from 'next';
import { realtimeDB } from '../firebase';
import TableList from '../src/components/TableList';
import { ref, child, get } from 'firebase/database';

import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/lib/table';
import { IDataValue } from '../src/interface/dataInterface';

interface Props {
  reportData: IDataValue;
  // key: React.Key;
  // name: string;
  // age: number;
  // address: string;
}

const ListPage = ({ reportData }: Props) => {
  console.log(reportData, 'test : data in List');
  const dataKeys = Object.keys(reportData);
  console.log(dataKeys, 'test : dataKeys in list Page');

  const dataEntries = Object.entries(reportData);
  console.log(dataEntries, 'test :dataEntries in list Page');

  const dataValues = Object.values(reportData);
  console.log(dataValues, 'test : dataValues in list Page');

  const columns: ColumnsType<Props> = [
    {
      title: 'Offender',
      dataIndex: 'offender',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
          // children: [
          //   {
          //     text: 'Yellow',
          //     value: 'Yellow',
          //   },
          //   {
          //     text: 'Pink',
          //     value: 'Pink',
          //   },
          // ],
        },
        {
          text: 'Category 2',
          value: 'Category 2',
          // children: [
          //   {
          //     text: 'Green',
          //     value: 'Green',
          //   },
          //   {
          //     text: 'Black',
          //     value: 'Black',
          //   },
          // ],
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value: string, record) => record.name.includes(value),
      // width: '30%',
    },
    {
      title: 'Victim',
      dataIndex: 'offender',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
          children: [
            {
              text: 'Yellow',
              value: 'Yellow',
            },
            {
              text: 'Pink',
              value: 'Pink',
            },
          ],
        },
        {
          text: 'Category 2',
          value: 'Category 2',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value: string, record) => record.name.includes(value),
      // width: '30%',
    },
    {
      title: 'Place',
      dataIndex: 'place',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value: string, record) => record.address.startsWith(value),
      filterSearch: true,
      // width: '40%',
    },
    {
      title: 'Level',
      dataIndex: 'level',
      sorter: (a, b) => a.level - b.level,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value: string, record) => record.address.startsWith(value),
      filterSearch: true,
      // width: '40%',
    },
  ];

  //  Key Error
  const dataList: Props[] = dataValues;

  // const dataList: Props[] = [
  //   {
  //     key: '1',
  //     offender: 'John Brown',
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
      테이블 클릭 https://stackoverflow.com/questions/62786115/how-do-i-use-react-router-link-to-from-antd-table-column
      <Table columns={columns} dataSource={dataList} onChange={onChange} />;{/* <TableList /> */}
    </>
  );
};

// https://firebase.google.com/docs/database/web/read-and-write#read_data
// https://ashleemboyer.com/blog/nextjs-firebase-blog-03
export async function getStaticProps({}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/reportDB.json`);
  const reportData = await res.json();

  return {
    props: {
      reportData,
      // ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default ListPage;
