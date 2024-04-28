import { forwardRef, type ForwardRefRenderFunction } from 'react';

import Lottie from 'lottie-react';

import searchError from 'assets/lottie/search-error.json';

import { type CustomErrorProps } from './types';

const CustomErrorRef: ForwardRefRenderFunction<
  HTMLDivElement,
  CustomErrorProps
> = ({ noRowsMessageFunc, ...props }, ref) => {
  const text = noRowsMessageFunc();

  return (
    <div
      className="flex h-[38.563rem] w-full flex-col items-center justify-center md:h-[35.5rem]"
      {...props}
      ref={ref}
    >
      <Lottie className="w-60" animationData={searchError} loop autoPlay />

      <span className="text-base text-comet-500 transition-all dark:text-dark-300">
        {text}
      </span>
    </div>
  );
};

export const CustomError = forwardRef(CustomErrorRef);
