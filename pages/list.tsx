import type { NextPage } from 'next';
import { realtimeDB } from '../firebase';
import TableList from '../src/components/TableList';
import { ref, child, get } from 'firebase/database';

import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/lib/table';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const ListPage = ({ reportData }: DataType) => {
  // console.log(reportData, 'test : data in List');

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
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
      width: '30%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
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
      width: '40%',
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <>
      List Page <br />
      테이블 클릭 https://stackoverflow.com/questions/62786115/how-do-i-use-react-router-link-to-from-antd-table-column
      <Table columns={columns} dataSource={data} onChange={onChange} />;{/* <TableList /> */}
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
