import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { CompanyVehicles } from '.';

jest.mock('components/organisms/DataTableCompanyVehicles', () => ({
  DataTableCompanyVehicles: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableCompanyVehicles">{children}</div>
  ),
}));

describe('<CompanyVehicles />', () => {
  it('should render the CompanyVehicles correctly', () => {
    const { container } = render(<CompanyVehicles />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
