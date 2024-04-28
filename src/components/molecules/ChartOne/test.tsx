import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { ChartOne } from '.';

jest.mock('components/atoms/ApexChart', () => ({
  ApexChart: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock ApexChart">{children}</div>
  ),
}));

describe('<ChartOne />', () => {
  it('should render the chart one correctly', () => {
    const { container } = render(<ChartOne />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
