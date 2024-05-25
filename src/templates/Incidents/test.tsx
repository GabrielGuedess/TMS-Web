import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { Incidents } from '.';

jest.mock('components/organisms/DataTableIncidents', () => ({
  DataTableIncidents: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableIncidents">{children}</div>
  ),
}));

describe('<Incidents />', () => {
  it('should render the Incidents correctly', () => {
    const { container } = render(<Incidents />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
