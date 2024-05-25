import { render } from '@testing-library/react';

import { DataTablePhysicalCustomerOrders } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTablePhysicalCustomerOrders />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTablePhysicalCustomerOrders />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
