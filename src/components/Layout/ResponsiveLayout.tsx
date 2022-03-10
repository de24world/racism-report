import React from 'react';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';

import MobileLayout from './Responsive/MobileLayout';
import DesktopLayout from './Responsive/DesktopLayout';

type Props = {
  children: any;
};

function ResponsiveLayout({ children }: Props) {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <>
      <Head>
        <title>Racism Report App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      {isMobile ? <MobileLayout> {children} </MobileLayout> : <DesktopLayout> {children} </DesktopLayout>}
    </>
  );
}

export default ResponsiveLayout;
