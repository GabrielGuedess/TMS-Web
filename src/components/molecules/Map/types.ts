import { type ComponentPropsWithoutRef } from 'react';

import { type LngLatLike } from 'mapbox-gl';

export type MapProps = {
  center: LngLatLike;
  marker?: LngLatLike;
} & ComponentPropsWithoutRef<'div'>;
