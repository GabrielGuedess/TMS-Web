import { render } from '@testing-library/react';

import { DataTableCarriers } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableCarriers />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableCarriers />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
