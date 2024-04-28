import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { Carriers } from '.';

jest.mock('components/organisms/DataTableCarriers', () => ({
  DataTableCarriers: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableCarriers">{children}</div>
  ),
}));

describe('<Carriers />', () => {
  it('should render the Carriers correctly', () => {
    const { container } = render(<Carriers />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
