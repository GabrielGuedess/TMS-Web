import { render } from '@testing-library/react';

import { DataTableCompanyVehicles } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableCompanyVehicles />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableCompanyVehicles />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
