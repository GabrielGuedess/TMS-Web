import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { LegalContracts } from '.';

jest.mock('components/organisms/DataTableLegalContracts', () => ({
  DataTableLegalContracts: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableLegalContracts">{children}</div>
  ),
}));

describe('<LegalContracts />', () => {
  it('should render the LegalContracts correctly', () => {
    const { container } = render(<LegalContracts />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
