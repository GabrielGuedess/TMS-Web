import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { LegalClientQuoteTables } from '.';

jest.mock('components/organisms/DataTableLegalClientQuoteTables', () => ({
  DataTableLegalClientQuoteTables: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableLegalClientQuoteTables">{children}</div>
  ),
}));

describe('<LegalClientQuoteTables />', () => {
  it('should render the LegalClientQuoteTables correctly', () => {
    const { container } = render(<LegalClientQuoteTables />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
