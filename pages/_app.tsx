// Your App component

import 'styles/globals.css';

import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Layout } from '#/ui/page-directory/layout';

const primaryFont = Inter({
  subsets: ['latin'],
  variable: '--primary-font',
});

export default function App({ Component, pageProps }: AppProps) {

  return (
    <main className={`${primaryFont.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>

    </main>
  );
}
