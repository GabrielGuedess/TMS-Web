import { render } from '@testing-library/react';

import { DataTableVehicleModels } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableVehicleModels />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableVehicleModels />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
