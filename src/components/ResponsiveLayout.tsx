import React from 'react';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import { Layout } from 'antd';
import MobileHeader from './Header/MobileHeader';
import DesktopHeader from './Header/DesktopHeader';
import Bottom from './Bottom';

type Props = {
  children: any;
};

function ResponsiveLayout({ children }: Props) {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const { Content, Footer } = Layout;

  return (
    <>
      <Head>
        <title>Racism Report App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Layout>
        {isMobile ? <MobileHeader /> : <DesktopHeader />}

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

export default ResponsiveLayout;
