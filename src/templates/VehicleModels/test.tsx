import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { VehicleModels } from '.';

jest.mock('components/organisms/DataTableVehicleModels', () => ({
  DataTableVehicleModels: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableVehicleModels">{children}</div>
  ),
}));

describe('<VehicleModels />', () => {
  it('should render the VehicleModels correctly', () => {
    const { container } = render(<VehicleModels />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
