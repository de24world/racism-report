import React, { useState } from 'react';
import { Layout, Button, Drawer, Menu, Dropdown } from 'antd';
import { MenuOutlined, TranslationOutlined } from '@ant-design/icons';
import MobileNavigation from './Navigation/MobileNavigation';

function MobileHeader() {
  const { Header } = Layout;
  const menu = (
    <Menu theme="dark">
      <Menu.Item key="english">
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          English
        </a>
      </Menu.Item>
      <Menu.Item key="korean">
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Korean
        </a>
      </Menu.Item>
    </Menu>
  );

  // The drawer is invisible by default
  const [isVisible, setIsVisible] = useState(false);

  // trigger this function to open the drawer
  const showDrawer = () => {
    setIsVisible(true);
  };

  // close the drawer
  const closeDrawer = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Button style={{ color: 'white', position: 'absolute', left: 15, top: 15 }} onClick={showDrawer}>
          <MenuOutlined style={{ fontSize: 20 }} />
        </Button>
        <Dropdown overlay={menu} placement="bottomRight">
          <a className="absolute right-5 text-white" onClick={(e) => e.preventDefault()}>
            <TranslationOutlined />
            Language
          </a>
        </Dropdown>
      </Header>

      <Drawer visible={isVisible} onClose={closeDrawer} placement="left" width="80%" title="My Drawer">
        <MobileNavigation />
      </Drawer>
    </>
  );
}

export default MobileHeader;
