import { render } from '@testing-library/react';

import { DataTableIncidents } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Lottie" />,
}));

jest.mock('ag-grid-react', () => ({
  AgGridReact: () => <div data-testid="Mock AG Grid" />,
}));

describe('<DataTableIncidents />', () => {
  it('should render the heading', () => {
    const { container } = render(<DataTableIncidents />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
