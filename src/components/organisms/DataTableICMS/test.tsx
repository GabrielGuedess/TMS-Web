import { render } from '@testing-library/react';

import { DataTableICMS } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableICMS />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableICMS />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
