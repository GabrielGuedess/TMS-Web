'use client';

import { useTheme } from 'next-themes';

import { twMerge } from 'tailwind-merge';
import * as Switch from '@radix-ui/react-switch';

import { SunIcon } from 'components/atoms/SunIcon';
import { MoonIcon } from 'components/atoms/MoonIcon';

import { type DarkModeSwitcherProps } from './types';

export const DarkModeSwitcher = ({
  className,
  ...props
}: DarkModeSwitcherProps) => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme ?? 'system' : theme;

  return (
    <Switch.Root
      onCheckedChange={() =>
        setTheme(currentTheme === 'light' ? 'dark' : 'light')
      }
      className={twMerge(
        'relative m-0 block h-[1.875rem] w-14 rounded-full bg-porcelain-50 outline-primary-400 transition-all dark:bg-shark-950',
        className,
      )}
      aria-label="switch"
      checked={currentTheme === 'dark'}
      aria-checked={currentTheme === 'dark'}
      {...props}
    >
      <Switch.Thumb>
        <div className="absolute left-[3px] top-1/2 flex size-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white-lilac-50 shadow-switcher duration-75 ease-linear dark:!right-[3px] dark:!translate-x-full dark:bg-smoke-950 dark:shadow-none">
          <SunIcon
            size={16}
            className="text-rock-blue-500 transition-all dark:hidden"
          />

          <MoonIcon
            size={16}
            className="hidden text-rock-blue-500 transition-all dark:inline-block"
          />
        </div>
      </Switch.Thumb>
    </Switch.Root>
  );
};
