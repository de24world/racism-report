import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: any;
};

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Racism Report App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
