import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { PhysicalCustomers } from '.';

jest.mock('components/organisms/DataTablePhysicalCustomers', () => ({
  DataTablePhysicalCustomers: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTablePhysicalCustomers">{children}</div>
  ),
}));

describe('<PhysicalCustomers />', () => {
  it('should render the PhysicalCustomers correctly', () => {
    const { container } = render(<PhysicalCustomers />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
