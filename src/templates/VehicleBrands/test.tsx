import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { VehicleBrands } from '.';

jest.mock('components/organisms/DataTableVehicleBrands', () => ({
  DataTableVehicleBrands: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableVehicleBrands">{children}</div>
  ),
}));

describe('<VehicleBrands />', () => {
  it('should render the VehicleBrands correctly', () => {
    const { container } = render(<VehicleBrands />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
