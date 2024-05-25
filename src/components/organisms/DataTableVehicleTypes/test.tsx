import { render } from '@testing-library/react';

import { DataTableVehicleTypes } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableVehicleTypes />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableVehicleTypes />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
