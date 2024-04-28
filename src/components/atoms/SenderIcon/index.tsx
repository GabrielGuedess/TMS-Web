import {
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import { type SenderIconProps } from './types';

const SenderIconRef: ForwardRefRenderFunction<
  ElementRef<'svg'>,
  SenderIconProps
> = ({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5898 7.67999H14.8298V11.93"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.8299 7.67999L9.16992 13.34"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51"
    />
  </svg>
);

export const SenderIcon = forwardRef(SenderIconRef);
