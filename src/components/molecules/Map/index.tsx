'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import { useTheme } from 'next-themes';

import { useEffect, forwardRef, type ForwardRefRenderFunction } from 'react';

import mapboxgl from 'mapbox-gl';
import { twMerge } from 'tailwind-merge';

import { type MapProps } from './types';

const MapRef: ForwardRefRenderFunction<HTMLDivElement, MapProps> = (
  { marker, center, className, ...props },
  ref,
) => {
  const { theme } = useTheme() as { theme: 'dark' | 'light' };

  useEffect(() => {
    const map = new mapboxgl.Map({
      center,
      zoom: 16,
      pitch: 45,
      bearing: -17.6,
      antialias: true,
      container: 'map',
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      style:
        theme === 'light'
          ? 'mapbox://styles/mapbox/light-v11'
          : 'mapbox://styles/mapbox/dark-v11',
    });

    if (marker && typeof document !== 'undefined') {
      const element = document.createElement('div');
      element.className = 'marker';

      new mapboxgl.Marker(element).setLngLat(marker).addTo(map);
    }

    map.on('style.load', () => {
      const { layers } = map.getStyle();

      const labelLayerId = layers.find(
        layer =>
          layer.type === 'symbol' && layer.layout && layer.layout['text-field'],
      )?.id;

      map.setFog({
        'space-color': 'rgb(0, 0, 0)',
      });

      map.addLayer(
        {
          id: 'add-3d-buildings',
          minzoom: 15,
          source: 'composite',
          type: 'fill-extrusion',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          paint: {
            'fill-extrusion-opacity': 0.6,
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height'],
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height'],
            ],
          },
        },
        labelLayerId,
      );
    });
  }, [theme]);

  return (
    <div
      id="map"
      ref={ref}
      className={twMerge('h-[40rem] w-full rounded-sm', className)}
      {...props}
    />
  );
};

export const Map = forwardRef(MapRef);
