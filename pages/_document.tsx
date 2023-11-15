import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" />
        <link
          href="/favicon/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link rel="icon" sizes="16x16" type="image/png" />
        <link color="#000000" rel="mask-icon" />
      </Head>
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
