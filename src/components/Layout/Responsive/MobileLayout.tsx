import React, { useState } from 'react';
import { Layout, Button, Divider, Drawer } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuOutlined } from '@ant-design/icons';
import Bottom from '../../Bottom';
import MobileNavigation from '../../Navigation/MobileNavigation';

type Props = {
  children: any;
};

function MobileLayout({ children }: Props) {
  const { Header, Content, Footer } = Layout;

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
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Button className="" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
        </Header>
        <Drawer visible={isVisible} onClose={closeDrawer} placement="left" width="80%" title="My Drawer">
          <MobileNavigation />
          {/* <p>Menu Item #1</p>
          <Divider />
          <p>Menu Item #2</p>
          <Divider />
          <p>Menu Item #3</p>
          <Divider />
          <p>Menu Item #4</p>
          <Divider />
          <p>Menu Item #5</p>
          <Divider />
          <p>Menu Item #6</p>
          <Divider />
          <p>Menu Item #7</p> */}
        </Drawer>

        <Content>
          <main>{children}</main>
        </Content>

        <Footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'yellow', textAlign: 'center' }}>
          <Bottom />
        </Footer>
      </Layout>
    </>
  );
}

export default MobileLayout;
