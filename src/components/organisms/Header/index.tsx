import { Suspense, forwardRef, type ForwardRefRenderFunction } from 'react';

import { twMerge } from 'tailwind-merge';

import { Search } from 'components/molecules/Search';
import { Hamburger } from 'components/atoms/Hamburger';
import { Notification } from 'components/molecules/Notification';
import { CurrentAvatar } from 'components/molecules/CurrentAvatar';
import { CaretArrowDownIcon } from 'components/atoms/CaretArrowDownIcon';
import { DarkModeSwitcher } from 'components/molecules/DarkModeSwitcher';

import { type HeaderProps } from './types';

const HeaderRef: ForwardRefRenderFunction<HTMLElement, HeaderProps> = (
  { className, ...props },
  ref,
) => (
  <header
    className={twMerge(
      'w-full bg-white-lilac-50 rounded-b-lg sm:rounded-none fixed sm:static z-30 py-4 drop-shadow-1 px-4 sm:px-7 transition-all dark:border-shark-950 border-b dark:bg-smoke-950 shadow-default',
      className,
    )}
    ref={ref}
    {...props}
  >
    <div className="relative flex h-8 w-full items-center justify-between sm:h-auto lg:justify-center ">
      <div className="hidden md:flex">
        <Search />
      </div>

      <Hamburger size={22} className="flex text-rock-blue-500 md:hidden" />

      <div className="flex items-center gap-4 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
        <DarkModeSwitcher className="hidden md:flex" />

        <button
          type="button"
          aria-label="notifications"
          className="p-2 text-rock-blue-500 outline-primary-400 transition-all hover:text-primary-400 focus:text-primary-400"
        >
          <Notification />
        </button>

        <button
          type="button"
          aria-label="profile"
          className="flex items-center gap-3 p-[2px] outline-primary-400"
        >
          <Suspense
            fallback={
              <div className="size-10 animate-pulse rounded-full bg-athens-gray-100 transition-all dark:bg-shark-950" />
            }
          >
            <CurrentAvatar />
          </Suspense>

          <CaretArrowDownIcon
            size={20}
            className="hidden text-primary-400 sm:flex"
          />
        </button>
      </div>
    </div>
  </header>
);

export const Header = forwardRef(HeaderRef);
