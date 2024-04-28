import { render } from '@testing-library/react';

import { Map } from '.';

jest.mock('mapbox-gl', () => ({
  Marker: jest.fn(() => ({
    setLngLat: jest.fn(() => ({
      addTo: jest.fn(),
    })),
  })),
  Map: jest.fn(() => ({
    on: jest.fn(),
    addLayer: jest.fn(),
    otherMethods: jest.fn(),
    getStyle: () => ({ layers: {} }),
  })),
}));

describe('<Map />', () => {
  it('should render the map correctly', () => {
    const { container } = render(
      <Map
        center={[-46.527_312_8, -23.467_588_2]}
        marker={[-46.527_312_8, -23.467_588_2]}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
