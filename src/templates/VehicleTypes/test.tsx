import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { VehicleTypes } from '.';

jest.mock('components/organisms/DataTableVehicleTypes', () => ({
  DataTableVehicleTypes: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableVehicleTypes">{children}</div>
  ),
}));

describe('<VehicleTypes />', () => {
  it('should render the VehicleTypes correctly', () => {
    const { container } = render(<VehicleTypes />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
