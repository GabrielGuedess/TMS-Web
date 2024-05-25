import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { MaintenanceCompanies } from '.';

jest.mock('components/organisms/DataTableMaintenanceCompanies', () => ({
  DataTableMaintenanceCompanies: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableMaintenanceCompanies">{children}</div>
  ),
}));

describe('<MaintenanceCompanies />', () => {
  it('should render the MaintenanceCompanies correctly', () => {
    const { container } = render(<MaintenanceCompanies />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
