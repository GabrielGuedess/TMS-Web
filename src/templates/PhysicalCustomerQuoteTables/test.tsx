import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { PhysicalCustomerQuoteTables } from '.';

jest.mock('components/organisms/DataTablePhysicalCustomerQuoteTables', () => ({
  DataTablePhysicalCustomerQuoteTables: ({
    children,
  }: {
    children: ReactNode;
  }) => (
    <div data-testid="Mock DataTablePhysicalCustomerQuoteTables">
      {children}
    </div>
  ),
}));

describe('<PhysicalCustomerQuoteTables />', () => {
  it('should render the PhysicalCustomerQuoteTables correctly', () => {
    const { container } = render(<PhysicalCustomerQuoteTables />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
