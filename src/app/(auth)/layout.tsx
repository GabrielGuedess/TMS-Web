import { type ReactNode } from 'react';

import { Logo } from 'components/atoms/Logo';
import { DarkModeSwitcher } from 'components/molecules/DarkModeSwitcher';

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen w-full flex-col bg-white-lilac-50 transition-all dark:bg-smoke-950">
    <div className="flex size-full flex-1 flex-col p-6 sm:col-span-6 sm:p-9">
      <header className="flex items-center justify-between gap-2">
        <Logo />
        <DarkModeSwitcher />
      </header>

      <div className="flex w-full flex-1 items-center justify-center">
        <main className="flex w-full flex-col items-center">{children}</main>
      </div>
    </div>
  </div>
);

export default Layout;
