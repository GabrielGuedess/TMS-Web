import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { Users } from '.';

jest.mock('components/organisms/DataTableUsers', () => ({
  DataTableUsers: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableUsers">{children}</div>
  ),
}));

describe('<Users />', () => {
  it('should render the users correctly', () => {
    const { container } = render(<Users />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
