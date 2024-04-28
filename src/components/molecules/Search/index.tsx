import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { twMerge } from 'tailwind-merge';

import { SearchIcon } from 'components/atoms/SearchIcon';

import { type SearchProps } from './types';

const SearchRef: ForwardRefRenderFunction<HTMLInputElement, SearchProps> = (
  { className, ...props },
  ref,
) => (
  <div className="flex h-11 items-center gap-3">
    <input
      className={twMerge(
        'w-64 rounded-lg bg-porcelain-50 dark:bg-shark-950 px-5 py-3 dark:placeholder:text-white-lilac-50 text-sm text-port-gore-950 outline-primary-400 placeholder:text-port-gore-950/80 transition-all',
        className,
      )}
      ref={ref}
      placeholder="Pesquisar..."
      {...props}
    />

    <button
      type="button"
      aria-label="search"
      className="flex aspect-square h-full items-center justify-center rounded-lg text-rock-blue-500 outline-primary-400 transition-all hover:text-primary-400 focus:text-primary-400"
    >
      <SearchIcon />
    </button>
  </div>
);

export const Search = forwardRef(SearchRef);
