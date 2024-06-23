import { render } from '@testing-library/react';

import { DataTableLegalContracts } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableLegalContracts />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableLegalContracts />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
