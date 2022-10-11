import { siteUrl } from '@/lib/constants';
import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: 'Project Template | %s',
  defaultTitle: 'Project Template',
  description: 'description',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Project Template',
    images: [{ url: `${siteUrl}/assets/banner.jpg` }],
    site_name: siteUrl,
    defaultImageWidth: 1200,
    defaultImageHeight: 628,
  },
  twitter: {
    handle: '@talohanax',
    cardType: 'summary_large_image',
  },
};
