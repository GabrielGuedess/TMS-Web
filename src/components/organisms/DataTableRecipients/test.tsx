import { render } from '@testing-library/react';

import { DataTableRecipients } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableRecipients />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableRecipients />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
