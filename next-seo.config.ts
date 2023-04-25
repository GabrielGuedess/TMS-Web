import { type DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://github.com/GabrielGuedess/TMS-Web',
    site_name: 'TMS',
    title: 'TMS',
  },
  twitter: {
    handle: '@GabrielRGuedess',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;
