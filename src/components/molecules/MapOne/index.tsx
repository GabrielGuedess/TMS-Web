'use client';

import dynamic from 'next/dynamic';

import React, { forwardRef, type ForwardRefRenderFunction } from 'react';

import { twMerge } from 'tailwind-merge';
import { brMill } from '@react-jvectormap/brazil';
import { type IVectorMap } from '@react-jvectormap/core/dist/types';

import { type MapOneProps } from './types';

const VectorMap = dynamic(
  () => import('@react-jvectormap/core').then(module => module.VectorMap),
  { ssr: false },
);

const brazil: IVectorMap = {
  name: brMill.name,
  content: {
    insets: [],
    paths: brMill.content.paths,
    width: brMill.content.width,
    height: brMill.content.height,
    projection: { type: '', centralMeridian: 0 },
  },
};

const MapOneRef: ForwardRefRenderFunction<HTMLDivElement, MapOneProps> = (
  { className, ...props },
  ref,
) => (
  <div
    className={twMerge(
      'col-span-12 flex flex-col gap-8 rounded border border-zumthor-100 bg-white-lilac-50 px-7 py-6 shadow-default transition-all dark:border-shark-950 dark:bg-smoke-950 xl:col-span-7',
      className,
    )}
    ref={ref}
    {...props}
  >
    <h4 className="mb-2 text-xl font-semibold text-shark-900 dark:text-white-lilac-50">
      Região dos Usuários
    </h4>

    <div className="mapOne h-96">
      <VectorMap
        regionStyle={{
          initial: {
            fill: '#d1d1d1',
          },
          selected: {
            fill: '#FFFB00',
          },
          hover: {
            fillOpacity: 1,
            fill: '#f5834e',
          },
        }}
        map={brazil}
        backgroundColor="transparent"
      />
    </div>
  </div>
);

export const MapOne = forwardRef(MapOneRef);
