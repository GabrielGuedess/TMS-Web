import { render } from '@testing-library/react';

import { DataTableLegalClients } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableLegalClients />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableLegalClients />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
