import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { Senders } from '.';

jest.mock('components/organisms/DataTableSenders', () => ({
  DataTableSenders: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableSenders">{children}</div>
  ),
}));

describe('<Senders />', () => {
  it('should render the Senders correctly', () => {
    const { container } = render(<Senders />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
