import { DefaultSeo } from 'next-seo';
import { type AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/global';
import { theme } from 'styles/theme';

import SEO from '../../next-seo.config';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Boilerplate</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#06092B" />
      <meta
        name="description"
        content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
      />
    </Head>
    <GlobalStyles />
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
