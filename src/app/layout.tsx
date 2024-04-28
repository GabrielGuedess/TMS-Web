import { type Viewport, type Metadata } from 'next';
import { Public_Sans as PublicSans } from 'next/font/google';

import { type ReactNode } from 'react';

import 'styles/global.css';

import { Providers } from './providers';

export const dynamic = 'force-dynamic';

const publicSans = PublicSans({
  display: 'swap',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#F3F4F8',
};

export const metadata: Metadata = {
  title: 'TMS Wolves',
  manifest: '/manifest.json',
  icons: {
    shortcut: ['/img/icon-512.png'],
    apple: [{ url: '/img/icon-512.png' }],
  },
  description:
    'TMS (Transportation Management System) no estilo de uma Dashboard. Desenvolvido com Next.js, TypeScript, GraphQL, etc.',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="pt-BR" className={publicSans.className}>
    <body className="flex min-h-screen flex-col bg-athens-gray-50 transition-colors dark:bg-dark-950">
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
