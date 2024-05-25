import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { LegalClientOrders } from '.';

jest.mock('components/organisms/DataTableLegalClientOrders', () => ({
  DataTableLegalClientOrders: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableLegalClientOrders">{children}</div>
  ),
}));

describe('<LegalClientOrders />', () => {
  it('should render the LegalClientOrders correctly', () => {
    const { container } = render(<LegalClientOrders />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
