'use client';

import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as Accordion from '@radix-ui/react-accordion';

import { type DropdownSideProps } from './types';

export const DropdownSide = ({
  title,
  subPath,
  children,
  icon: Icon,
  isNavbarOpen,
}: DropdownSideProps) => {
  const pathName = usePathname();

  const isDropdownOpen = pathName.includes(subPath);

  return (
    <Accordion.Item value={subPath} className="min-w-min">
      <Accordion.Trigger>
        <div
          className={twMerge(
            clsx(
              'flex w-auto items-center gap-9 rounded-xl p-3 outline-primary-400 transition-all',
              'text-comet-500 dark:text-dark-300',
              'hover:bg-primary-400/90 hover:text-white-lilac-50 focus:bg-primary-400/90 focus:text-white-lilac-50 dark:hover:text-white-lilac-50',
              {
                'lg:w-64 lg:rounded lg:px-6 lg:py-2': isNavbarOpen,
                'bg-primary-400/90': isDropdownOpen && !isNavbarOpen,
              },
            ),
          )}
        >
          <Icon size={24} />

          <div
            className={clsx('text-[0.938rem] font-light lg:flex', {
              'lg:hidden': !isNavbarOpen,
            })}
          >
            <span>{title}</span>
          </div>
        </div>
      </Accordion.Trigger>

      <Accordion.Content
        className={clsx('mt-4 flex min-w-min flex-col gap-2', {
          hidden: !isNavbarOpen,
        })}
      >
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
};
