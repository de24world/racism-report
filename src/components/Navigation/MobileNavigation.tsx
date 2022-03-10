import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  TranslationOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  OrderedListOutlined,
  BarChartOutlined,
  MailOutlined,
  KeyOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

type Props = {};

function MobileNavigation({}: Props) {
  const [current, setCurrent] = useState('');
  const { SubMenu } = Menu;

  const handleClick = () => {
    setCurrent(current);
  };

  return (
    <Menu onClick={handleClick} mode="inline">
      <SubMenu key="SubMenu1" icon={<TranslationOutlined />} title="Language">
        <Menu.Item key="setting:1">English</Menu.Item>
        <Menu.Item key="setting:2">Korean</Menu.Item>
      </SubMenu>

      <Menu.Item icon={<HomeOutlined />}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item icon={<OrderedListOutlined />}>
        <Link href="/list">
          <a>List</a>
        </Link>
      </Menu.Item>
      <Menu.Item icon={<VideoCameraOutlined />}>
        <Link href="/video">
          <a>Video</a>
        </Link>
      </Menu.Item>

      <SubMenu key="SubMenu2" icon={<BarChartOutlined />} title="Chart">
        <Menu.ItemGroup title="Where">
          <Menu.Item key="setting:1">Country</Menu.Item>
          <Menu.Item key="setting:2">City</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Who">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

      <Menu.Item key="alipay" icon={<MailOutlined />} title="Contacnt">
        <Link href="/contact">
          <a target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </Link>
      </Menu.Item>

      <Menu.Item icon={<KeyOutlined />}>
        {/* <Link href="/video"> */}
        <a>Login</a>
        {/* </Link> */}
      </Menu.Item>

      <Menu.Item icon={<UserAddOutlined />}>
        {/* <Link href="/video"> */}
        <a>Register</a>
        {/* </Link> */}
      </Menu.Item>
    </Menu>
  );
}

export default MobileNavigation;
