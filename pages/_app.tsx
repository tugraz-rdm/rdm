// Your App component

import 'styles/globals.css';

import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Layout } from '#/ui/page-directory/layout';
import { appWithTranslation } from 'next-i18next';
import i18n from '#/i18';
import { useRouter } from 'next/router';

const primaryFont = Inter({
  subsets: ['latin'],
  variable: '--primary-font',
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  if (router.locale) {
    i18n.changeLanguage(router.locale);
  }

  return (
    <main className={`${primaryFont.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
};

export default appWithTranslation(App);
