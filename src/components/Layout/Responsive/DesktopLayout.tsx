import React from 'react';
import { Layout } from 'antd';
import Bottom from '../../Bottom';
import DesktopNavigation from '../../Navigation/DesktopNavigation';

type Props = {
  children: any;
};

function DesktopLayout({ children }: Props) {
  const { Header, Content, Footer } = Layout;

  return (
    <>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <DesktopNavigation />
        </Header>

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

export default DesktopLayout;
