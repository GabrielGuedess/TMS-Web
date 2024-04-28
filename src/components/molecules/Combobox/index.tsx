import { useState } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as Popover from '@radix-ui/react-popover';

import { WarningIcon } from 'components/atoms/WarningIcon';

import { type ComboBoxProps } from './types';

export const ComboBox = ({
  label,
  value,
  values,
  search,
  setValue,
  className,
  setSearch,
  placeholder,
  emptyMessage,
  errorMessage,
  isInvalid = false,
  isLoading = false,
  placeholderCommand,
  ...props
}: ComboBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen} {...props}>
      <Popover.Trigger
        className={twMerge(
          clsx(
            'group relative flex items-center justify-between rounded-lg border-2 border-zumthor-100 bg-white-lilac-50 p-3 text-sm font-medium text-comet-500 transition-all hover:bg-porcelain-50 focus:border-primary-300 focus:outline-none data-[state="open"]:border-primary-300 dark:border-shark-950 dark:bg-shark-950 dark:text-dark-300 dark:hover:opacity-60 dark:focus:border-primary-400 dark:data-[state="open"]:border-primary-400',
            {
              'border-danger-500 text-red-500 dark:border-danger-500':
                isInvalid,
              'focus:border-primary-300 dark:focus:border-primary-400 dark:data-[state="open"]:border-primary-400 data-[state="open"]:border-primary-300 focus:placeholder:opacity-100':
                !isInvalid,
            },
          ),
          className,
        )}
      >
        {value?.description || placeholder}

        {!!label && (
          <label
            className={clsx(
              'pointer-events-none absolute left-4 top-[-47%] z-10 translate-y-1/2 px-[3px] text-sm text-comet-400 transition-all before:absolute before:inset-0 before:-z-10 before:block before:w-full before:bg-white-lilac-50 before:transition-all group-focus:text-primary-300 group-data-[state="open"]:text-primary-400 dark:text-dark-300 before:dark:bg-smoke-950',
            )}
          >
            {label}
          </label>
        )}

        {isInvalid && !!errorMessage && (
          <div className="absolute bottom-[calc(calc(50%+0.3rem)*-1)] -ml-3 flex items-center text-danger-500">
            <WarningIcon size={16} />

            <span className="ml-[0.4rem] text-sm">{errorMessage}</span>
          </div>
        )}
      </Popover.Trigger>

      <Popover.Content
        align="center"
        sideOffset={10}
        className="z-30 max-h-48 min-w-[var(--radix-popover-trigger-width)] animate-slideDownAndFade overflow-auto rounded-md bg-white-lilac-50 shadow-md dark:bg-shark-950"
      >
        <div className="flex flex-col">
          <label
            aria-label="Search Combo"
            className="flex items-center gap-3 border-b  px-3 py-1 transition-all dark:bg-shark-950"
          >
            <svg
              fill="none"
              aria-hidden="true"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-comet-500 transition-all"
            >
              <path
                strokeWidth="2"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>

            <input
              value={search}
              placeholder={placeholderCommand}
              onChange={event => setSearch(event.target.value)}
              className="h-9 w-full bg-transparent text-comet-500 outline-none transition-all dark:text-dark-300"
            />
          </label>

          {!isLoading && values && values.length === 0 && (
            <div className="flex items-center justify-center gap-2 p-2 text-comet-500 transition-all dark:text-dark-300">
              <WarningIcon size={20} className="text-primary-400" />

              {emptyMessage}
            </div>
          )}

          {isLoading && (
            <div className="flex items-center justify-center gap-2 p-2 text-comet-500 transition-all dark:text-dark-300">
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 22 22"
                aria-label="Loading"
                className="animate-spin"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  d="M14.4375 3.4375C15.8767 4.10872 17.0942 5.17707 17.9468 6.51682C18.7993 7.85658 19.2515 9.41198 19.25 11C19.25 13.188 18.3808 15.2865 16.8336 16.8336C15.2865 18.3808 13.188 19.25 11 19.25C8.81197 19.25 6.71355 18.3808 5.16637 16.8336C3.6192 15.2865 2.75 13.188 2.75 11C2.74851 9.41198 3.20066 7.85658 4.05323 6.51682C4.9058 5.17707 6.12331 4.10872 7.5625 3.4375"
                />
              </svg>
            </div>
          )}

          {!isLoading && (
            <div
              className={clsx('pt-2', {
                hidden: values?.length === 0,
              })}
            >
              {values
                ?.filter(item =>
                  item.description
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase()),
                )
                ?.map(currentValue => (
                  <button
                    onClick={() => {
                      setValue(currentValue);
                      setIsOpen(false);
                    }}
                    type="button"
                    key={currentValue.id}
                    className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-comet-500 outline-none hover:bg-primary-400/[.08] hover:text-primary-400 focus:bg-primary-400/[.08] focus:text-primary-400 dark:text-dark-300"
                  >
                    {currentValue.description}
                  </button>
                ))}
            </div>
          )}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};
