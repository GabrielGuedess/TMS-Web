'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { forwardRef, type ForwardRefRenderFunction } from 'react';

import clsx from 'clsx';

import { type TabsProps } from './types';

const TabsRef: ForwardRefRenderFunction<HTMLDivElement, TabsProps> = (
  { tabs, ...props },
  ref,
) => {
  const pathname = usePathname();

  const lastPathname = pathname.split('/').at(-1);

  return (
    <div ref={ref} className="flex" {...props}>
      <div className="no-scrollbar flex overflow-x-auto">
        {tabs.map(tab => (
          <Link
            className={clsx(
              'flex items-center justify-center gap-2 text-nowrap p-5 outline-none transition-all',
              {
                'text-primary-400': tab.href === lastPathname,
                'hover:text-primary-400 focus:text-primary-400':
                  tab.href !== lastPathname,
              },
            )}
            key={tab.title}
            href={tab.href}
          >
            {tab.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Tabs = forwardRef(TabsRef);
