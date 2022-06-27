import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { realtimeDB } from '../firebase';
import TableList from '../src/components/TableList';
import { getDatabase, ref, child, get, onValue } from 'firebase/database';

import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/lib/table';
import { IData, IDataValue } from '../src/interface/dataInterface';
import { Countries } from '../shared/model/country';
import { FilterColumnsPeople } from '../shared/model/filterList';

interface Props {
  postList: IDataValue[];
  // key: React.Key;
  // name: string;
  // age: number;
  // address: string;
}

const ListPage = ({ postList }: Props) => {
  const router = useRouter();
  console.log(postList, 'postList in list Page');
  console.log(FilterColumnsPeople, 'FilterColumnsPeople');

  // const columns: ColumnsType<Props> = [
  const columns = [
    {
      title: 'Offender',
      dataIndex: 'offender',
      filters: FilterColumnsPeople,
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value: any, record: any) => record.offender.includes(value),
      // width: '30%',
    },
    {
      title: 'Victim',
      dataIndex: 'victim',
      filters: FilterColumnsPeople,
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value: any, record) => record.victim.includes(value),
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
      title: 'occur Date',
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
    {
      title: 'submit Time',
      dataIndex: 'submitTime',
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
  const dataList = postList;
  // const dataList: Props[] = postList;

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
      - Filter 완성 <br />
      - Pagination <br />
      - 모든 colums 한 곳에 몰아넣기 <br />
      - List 완성 <br />
      <br />
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={dataList}
        onChange={onChange}
        onRow={(record) => ({
          // onClick: (e) => console.log(record.id, ' record.id'),
          onClick: (e) => router.push(`/video/${record.id}`),
        })}
      />
      ;{/* <TableList /> */}
    </>
  );
};

export async function getStaticProps({}) {
  const dbRef = ref(getDatabase());
  const data = await get(child(dbRef, `posts/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val(), 'snapshot.val() in list page??');
        return snapshot.val();
      } else {
        console.log('No data available in list pagex');
      }
    })
    .catch((error) => {
      console.error(error);
    });

  const postList = Object.values(data);

  return {
    props: {
      postList,
      // ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default ListPage;
