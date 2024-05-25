import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { Expenses } from '.';

jest.mock('components/organisms/DataTableExpenses', () => ({
  DataTableExpenses: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableExpenses">{children}</div>
  ),
}));

describe('<Expenses />', () => {
  it('should render the Expenses correctly', () => {
    const { container } = render(<Expenses />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
