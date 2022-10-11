import { Layout } from '@/components/layout/layout';
import '@/styles/globals.css';
import { defaultSEO } from '@/utils/next-seo.config';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
