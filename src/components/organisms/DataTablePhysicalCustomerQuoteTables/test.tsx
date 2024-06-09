import { render } from '@testing-library/react';

import { DataTablePhysicalCustomerQuoteTables } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTablePhysicalCustomerQuoteTables />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTablePhysicalCustomerQuoteTables />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
