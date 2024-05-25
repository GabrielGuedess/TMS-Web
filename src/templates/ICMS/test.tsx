import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { ICMS } from '.';

jest.mock('components/organisms/DataTableICMS', () => ({
  DataTableICMS: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableICMS">{children}</div>
  ),
}));

describe('<ICMS />', () => {
  it('should render the ICMS correctly', () => {
    const { container } = render(<ICMS />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
