'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { forwardRef, type ForwardRefRenderFunction } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { type SideButtonProps } from './types';

const SideButtonRef: ForwardRefRenderFunction<
  HTMLAnchorElement,
  SideButtonProps
> = (
  { href, title, className, icon: Icon, isSubButton, isOpen = true, ...props },
  ref,
) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={twMerge(
        clsx(
          'flex w-auto items-center gap-9 rounded-xl p-3 outline-primary-400 transition-all ',
          {
            'lg:w-64 lg:rounded lg:px-6 lg:py-2': isOpen,
            'bg-primary-400/90 text-white-lilac-50': isActive,
            'text-comet-500 dark:text-dark-300 hover:bg-primary-400/90 hover:text-white-lilac-50 focus:bg-primary-400/90 focus:text-white-lilac-50 dark:hover:text-white-lilac-50':
              !isActive,
          },
        ),
        className,
      )}
      ref={ref}
      href={href}
      {...props}
    >
      {isSubButton ? (
        <div className="flex size-[1.375rem] items-center justify-center">
          <div
            className={clsx('size-[0.625rem] rounded-full border-[1px]', {
              'border-white': isActive,
              '!border-gray-500': !isActive,
            })}
          />
        </div>
      ) : (
        Icon && <Icon size={24} />
      )}

      <span
        className={clsx('hidden text-[0.938rem] font-light lg:flex', {
          '!hidden': !isOpen,
        })}
      >
        {title}
      </span>
    </Link>
  );
};

export const SideButton = forwardRef(SideButtonRef);
