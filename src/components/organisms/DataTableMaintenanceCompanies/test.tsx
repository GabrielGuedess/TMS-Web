import { render } from '@testing-library/react';

import { DataTableMaintenanceCompanies } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableMaintenanceCompanies />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableMaintenanceCompanies />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
