import { render } from '@testing-library/react';

import { DataTableMaintenances } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableMaintenances />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableMaintenances />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
