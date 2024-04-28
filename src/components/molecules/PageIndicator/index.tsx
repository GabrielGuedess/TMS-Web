import { forwardRef, type ForwardRefRenderFunction } from 'react';

import clsx from 'clsx';

import { type PageIndicatorProps } from './types';

const PageIndicatorRef: ForwardRefRenderFunction<
  HTMLDivElement,
  PageIndicatorProps
> = (
  {
    length,
    activeIndex,
    onChangeIndex,
    hasEdited = false,
    isLoading = false,
    onChangeWithEdited,
    ...props
  },
  ref,
) => (
  <div ref={ref} className="flex gap-2" {...props}>
    <button
      onClick={() =>
        !(activeIndex === 0) &&
        !isLoading &&
        (hasEdited ? onChangeWithEdited() : onChangeIndex(activeIndex - 1))
      }
      className={clsx(
        'flex h-9 items-center justify-center rounded-md bg-dark-500/[.08] px-[0.745rem] text-[0.938rem] leading-none text-gray-900 outline-primary-400 transition-all dark:bg-shark-950 dark:text-dark-300',
        {
          'opacity-50 cursor-not-allowed': activeIndex === 0 || isLoading,
          'cursor-pointer hover:bg-darkGray/[0.16]':
            !(activeIndex === 0) && !isLoading,
        },
      )}
      type="button"
      disabled={activeIndex === 0}
    >
      Previous
    </button>

    {activeIndex > 2 && (
      <div className="hidden md:flex">
        <button
          onClick={() =>
            !isLoading && hasEdited ? onChangeWithEdited() : onChangeIndex(0)
          }
          className={clsx(
            'flex h-9 items-center justify-center rounded-md px-[1.1rem] text-[0.938rem] leading-none outline-primary-400 transition-all',
            {
              'cursor-not-allowed opacity-50': isLoading,
              'text-shark-950 dark:text-dark-300':
                !(activeIndex === 0) && !isLoading,
            },
          )}
          type="button"
          aria-label="First Page"
        >
          1
        </button>

        <span
          className={clsx(
            'flex items-end text-gray-900 transition-all dark:text-dark-300',
            {
              'opacity-50': isLoading,
            },
          )}
        >
          ...
        </span>
      </div>
    )}

    {Array.from({ length }).map(
      (_, index) =>
        index + 2 >= activeIndex &&
        index - 2 <= activeIndex && (
          <button
            onClick={() =>
              !isLoading && hasEdited
                ? onChangeWithEdited()
                : onChangeIndex(index)
            }
            className={clsx(
              'flex size-9 items-center justify-center rounded-md text-[0.938rem] leading-none outline-primary-400 transition-all',
              {
                'cursor-not-allowed opacity-50': isLoading,
                'bg-primary-400 text-white': index === activeIndex,
                'text-shark-950 dark:text-dark-300':
                  !(index === activeIndex) && !isLoading,
              },
            )}
            key={index}
            type="button"
            aria-label={`Button ${index + 1}`}
          >
            <span
              aria-label={`Current Page${
                index === activeIndex ? ' Active' : ''
              }`}
              className="absolute"
            >
              {index + 1}
            </span>
          </button>
        ),
    )}

    {activeIndex < length - 2 && (
      <div className="hidden md:flex">
        <span
          className={clsx(
            'flex items-end text-gray-900 transition-all dark:text-dark-300',
            {
              'opacity-50': isLoading,
            },
          )}
        >
          ...
        </span>

        <button
          onClick={() =>
            !isLoading && hasEdited
              ? onChangeWithEdited()
              : onChangeIndex(length - 1)
          }
          className={clsx(
            'flex h-9 items-center justify-center rounded-md px-[1.1rem] text-[0.938rem] leading-none outline-primary-400 transition-all',
            {
              'cursor-not-allowed opacity-50': isLoading,
              'bg-primary-400 text-white': length === activeIndex,
              'text-gray-900 dark:text-dark-300':
                !(length === activeIndex) && !isLoading,
            },
          )}
          type="button"
          disabled={isLoading}
          aria-label="Last Page"
        >
          {length}
        </button>
      </div>
    )}

    <button
      onClick={() =>
        !(activeIndex === length) && !isLoading && hasEdited
          ? onChangeWithEdited()
          : onChangeIndex(activeIndex + 1)
      }
      className={clsx(
        'flex h-9 items-center justify-center rounded-md bg-dark-500/[.08] px-[0.745rem] text-[0.938rem] leading-none text-gray-900 outline-primary-400 transition-all dark:bg-shark-950 dark:text-dark-300',
        {
          'opacity-50 cursor-not-allowed':
            activeIndex === length - 1 || isLoading,
          'cursor-pointer hover:bg-darkGray/[0.16]':
            !(activeIndex === length - 1) && !isLoading,
        },
      )}
      type="button"
      disabled={activeIndex === length || isLoading}
    >
      Next
    </button>
  </div>
);

export const PageIndicator = forwardRef(PageIndicatorRef);
