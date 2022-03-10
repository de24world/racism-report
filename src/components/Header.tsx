import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, VideoCameraOutlined, OrderedListOutlined, BarChartOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

type Props = {};

function Header({}: Props) {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const [current, setCurrent] = useState('');
  const { SubMenu } = Menu;

  const handleClick = () => {
    setCurrent(current);
  };

  return isMobile ? (
    <Menu onClick={handleClick} style={{ width: 256 }} mode="inline">
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.ItemGroup key="g1" title="Item 1">
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">List</Menu.Item>
          <Menu.Item key="2">Video</Menu.Item>
          <Menu.Item key="2">Chart</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Item 2">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  ) : (
    // Desktop
    <Menu theme="dark" mode="horizontal" onClick={handleClick} selectedKeys={[current]}>
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

      <SubMenu key="SubMenu" icon={<BarChartOutlined />} title="Chart">
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
    </Menu>
  );
}

export default Header;
