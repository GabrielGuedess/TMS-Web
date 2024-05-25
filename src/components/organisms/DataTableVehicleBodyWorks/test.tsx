import { render } from '@testing-library/react';

import { DataTableVehicleBodyWorks } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableVehicleBodyWorks />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableVehicleBodyWorks />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
