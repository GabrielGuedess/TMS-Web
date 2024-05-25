import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { PhysicalCustomerOrders } from '.';

jest.mock('components/organisms/DataTablePhysicalCustomerOrders', () => ({
  DataTablePhysicalCustomerOrders: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTablePhysicalCustomerOrders">{children}</div>
  ),
}));

describe('<PhysicalCustomerOrders />', () => {
  it('should render the PhysicalCustomerOrders correctly', () => {
    const { container } = render(<PhysicalCustomerOrders />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
