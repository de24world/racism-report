import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import ResponsiveLayout from '../src/components/Layout/ResponsiveLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResponsiveLayout>
        <Component {...pageProps} />
      </ResponsiveLayout>
    </>
  );
}

export default MyApp;
