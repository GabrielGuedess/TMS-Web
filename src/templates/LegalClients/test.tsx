import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { LegalClients } from '.';

jest.mock('components/organisms/DataTableLegalClients', () => ({
  DataTableLegalClients: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableLegalClients">{children}</div>
  ),
}));

describe('<LegalClients />', () => {
  it('should render the LegalClients correctly', () => {
    const { container } = render(<LegalClients />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
