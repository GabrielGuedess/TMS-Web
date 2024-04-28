import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { Recipients } from '.';

jest.mock('components/organisms/DataTableRecipients', () => ({
  DataTableRecipients: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableRecipients">{children}</div>
  ),
}));

describe('<Recipients />', () => {
  it('should render the Recipients correctly', () => {
    const { container } = render(<Recipients />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
