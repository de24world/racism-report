import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import ResponsiveLayout from '../src/components/ResponsiveLayout';
import { AuthContextProvider } from '../src/context/AuthContext';

const noAuthRequired = ['/', '/login', '/signup'];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthContextProvider>
        <ResponsiveLayout>
          <Component {...pageProps} />
        </ResponsiveLayout>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
