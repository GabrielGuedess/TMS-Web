import { render } from '@testing-library/react';

import { DataTableSenders } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableSenders />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableSenders />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
