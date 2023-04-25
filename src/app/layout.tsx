import { type Metadata } from 'next';

import { StyledComponentsRegistry } from 'lib/registry';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'TMS',
  description:
    'TMS (Transportation Management System) no estilo de uma Dashboard.',
  icons: {
    shortcut: ['/img/icon-512.png'],
    apple: [{ url: '/img/icon-512.png' }],
  },
  manifest: '/manifest.json',
  themeColor: '#1C1C1C',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pt-BR">
    <body>
      <StyledComponentsRegistry>
        <Providers>{children}</Providers>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
