'use client';

import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as Accordion from '@radix-ui/react-accordion';

import { ChevronDown } from 'components/atoms/ChevronDown';

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
      <Accordion.Trigger asChild>
        <button
          className={twMerge(
            clsx(
              'flex w-auto items-center gap-9 rounded-xl p-3 outline-primary-400 transition-all [&[data-state=open]>div>svg]:rotate-180',
              'text-comet-500 dark:text-dark-300',
              'hover:bg-primary-400/90 hover:text-white-lilac-50 dark:hover:text-white-lilac-50',
              {
                'lg:w-64 lg:rounded lg:px-6 lg:py-2': isNavbarOpen,
                'bg-primary-400/90': isDropdownOpen && !isNavbarOpen,
              },
            ),
          )}
          type="button"
        >
          <Icon size={24} />

          <div
            className={clsx(
              'flex-1 items-center justify-between text-[0.938rem] font-light lg:flex',
              {
                'lg:hidden': !isNavbarOpen,
              },
            )}
          >
            <span>{title}</span>

            <ChevronDown className="hidden size-4 shrink-0 transition-transform duration-200 lg:flex" />
          </div>
        </button>
      </Accordion.Trigger>

      <Accordion.Content
        className={clsx(
          'min-w-min overflow-hidden data-[state="open"]:mt-2 data-[state="open"]:flex data-[state="closed"]:animate-accordion-up data-[state="open"]:animate-accordion-down data-[state="open"]:flex-col data-[state="open"]:gap-2',
          {
            hidden: !isNavbarOpen,
          },
        )}
      >
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
};
