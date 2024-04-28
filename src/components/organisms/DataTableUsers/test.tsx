import { render } from '@testing-library/react';

import { DataTableUsers } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableUsers />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableUsers />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
