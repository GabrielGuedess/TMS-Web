import { render } from '@testing-library/react';

import { DataTableLegalClientOrders } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableLegalClientOrders />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableLegalClientOrders />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
