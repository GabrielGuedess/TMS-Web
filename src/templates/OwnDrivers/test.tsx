import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { OwnDrivers } from '.';

jest.mock('components/organisms/DataTableOwnDrivers', () => ({
  DataTableOwnDrivers: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableOwnDrivers">{children}</div>
  ),
}));

describe('<OwnDrivers />', () => {
  it('should render the OwnDrivers correctly', () => {
    const { container } = render(<OwnDrivers />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
