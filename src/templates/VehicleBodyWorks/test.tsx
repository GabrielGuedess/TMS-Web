import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { VehicleBodyWorks } from '.';

jest.mock('components/organisms/DataTableVehicleBodyWorks', () => ({
  DataTableVehicleBodyWorks: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTable Vehicle BodyWorks">{children}</div>
  ),
}));

describe('<VehicleBodyWorks />', () => {
  it('should render the VehicleBodyWorks correctly', () => {
    const { container } = render(<VehicleBodyWorks />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
