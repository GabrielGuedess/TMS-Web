import { render } from '@testing-library/react';

import { DataTableVehicleBrands } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableVehicleBrands />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableVehicleBrands />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
