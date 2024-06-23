import { render } from '@testing-library/react';

import { DataTableOrderProcessing } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableOrderProcessing />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableOrderProcessing />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
