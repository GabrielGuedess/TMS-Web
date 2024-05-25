import { render } from '@testing-library/react';

import { DataTableLegalClientQuoteTables } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableLegalClientQuoteTables />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableLegalClientQuoteTables />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
