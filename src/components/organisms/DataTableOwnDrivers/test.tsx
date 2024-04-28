import { render } from '@testing-library/react';

import { DataTableOwnDrivers } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableOwnDrivers />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableOwnDrivers />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
