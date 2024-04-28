import WithPWA from 'next-pwa';

import { withSentryConfig } from '@sentry/nextjs';
import WithBundleAnalyzer from '@next/bundle-analyzer';

const withPWA = WithPWA({
  dest: 'public',
  disable: !(process.env.NODE_ENV === 'production'),
});

const withBundleAnalyzer = WithBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer(
  withPWA({
    swcMinify: true,
    reactStrictMode: true,
    transpilePackages: ['three'],
    experimental: {
      typedRoutes: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
      ],
    },
  }),
);

export default withSentryConfig(
  nextConfig,
  {
    org: 'ruk',
    silent: true,
    project: 'wolves-web',
  },
  {
    disableLogger: true,
    hideSourceMaps: true,
    transpileClientSDK: true,
    tunnelRoute: '/monitoring',
    widenClientFileUpload: true,
    automaticVercelMonitors: true,
  },
);
