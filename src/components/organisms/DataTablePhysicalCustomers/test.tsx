import { render } from '@testing-library/react';

import { DataTablePhysicalCustomers } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTablePhysicalCustomers />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTablePhysicalCustomers />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
