import {
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import { type FileIconProps } from './types';

const FileIconRef: ForwardRefRenderFunction<
  ElementRef<'svg'>,
  FileIconProps
> = ({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    fill="none"
    width={size}
    height={size}
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="none" stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <path d="M9 17l0 -5" />
    <path d="M12 17l0 -1" />
    <path d="M15 17l0 -3" />
  </svg>
);

export const FileIcon = forwardRef(FileIconRef);
