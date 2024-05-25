import { render } from '@testing-library/react';

import { DataTableExpenses } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableExpenses />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableExpenses />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
