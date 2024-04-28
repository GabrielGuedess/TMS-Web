import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { twMerge } from 'tailwind-merge';

import { Header } from 'components/organisms/Header';
import { Sidebar } from 'components/organisms/Sidebar';

import { type BaseProps } from './types';

const BaseRef: ForwardRefRenderFunction<HTMLElement, BaseProps> = (
  { children, className, ...props },
  ref,
) => (
  <main ref={ref} className={twMerge('w-full', className)} {...props}>
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-athens-gray-50 transition-all dark:bg-dark-950">
        <Header />

        <div className="min-h-full">
          <div className="mx-auto min-h-full max-w-screen-2xl px-4 pb-4 pt-20 sm:p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  </main>
);

export const Base = forwardRef(BaseRef);
