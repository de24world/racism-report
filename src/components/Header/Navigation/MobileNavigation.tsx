import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
  HomeOutlined,
  VideoCameraOutlined,
  OrderedListOutlined,
  BarChartOutlined,
  MailOutlined,
  UserAddOutlined,
  LoginOutlined,
  LogoutOutlined,
  PlusSquareOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useAuth } from '../../../context/AuthContext';

interface MobileNavigationProps {
  closeDrawer: any;
}

function MobileNavigation({ closeDrawer }: MobileNavigationProps) {
  const { SubMenu } = Menu;
  const { user, logout } = useAuth();

  const [current, setCurrent] = useState('');

  const handleClick = () => {
    setCurrent(current);
    closeDrawer();
  };

  return (
    <Menu style={{ position: 'absolute', left: 0 }} onClick={handleClick} mode="inline">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="list" icon={<OrderedListOutlined />}>
        <Link href="/list">
          <a>List</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="video" icon={<VideoCameraOutlined />}>
        <Link href="/video">
          <a>Video</a>
        </Link>
      </Menu.Item>

      <Menu.Item key="chart" icon={<BarChartOutlined />}>
        <Link href="/chart">
          <a>Chart</a>
        </Link>
      </Menu.Item>

      <Menu.Item key="contact" icon={<MailOutlined />} title="Contacnt">
        <Link href="/contact">
          <a target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </Link>
      </Menu.Item>

      {user ? (
        <>
          <Menu.Item key="Logout" icon={<LogoutOutlined />}>
            <Button type="text" onClick={logout}>
              Logout
            </Button>
          </Menu.Item>
          <Menu.Item key="Create" icon={<PlusSquareOutlined />}>
            <Link href="/create">
              <a>Create</a>
            </Link>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item key="login" icon={<LoginOutlined />}>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="register" icon={<UserAddOutlined />}>
            <Link href="/signup">
              <a>Register</a>
            </Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
}

export default MobileNavigation;
