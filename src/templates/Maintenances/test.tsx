import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { Maintenances } from '.';

jest.mock('components/organisms/DataTableMaintenances', () => ({
  DataTableMaintenances: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock DataTableMaintenances">{children}</div>
  ),
}));

describe('<Maintenances />', () => {
  it('should render the Maintenances correctly', () => {
    const { container } = render(<Maintenances />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
