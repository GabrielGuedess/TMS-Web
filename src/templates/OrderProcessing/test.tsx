import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { OrderProcessing } from '.';

jest.mock('components/organisms/DataTableOrderProcessing', () => ({
  DataTableOrderProcessing: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableOrderProcessing">{children}</div>
  ),
}));

describe('<OrderProcessing />', () => {
  it('should render the OrderProcessing correctly', () => {
    const { container } = render(<OrderProcessing />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
