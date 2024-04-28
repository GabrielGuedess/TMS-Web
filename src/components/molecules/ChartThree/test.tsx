import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { ChartThree } from '.';

jest.mock('components/atoms/ApexChart', () => ({
  ApexChart: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock ApexChart">{children}</div>
  ),
}));

describe('<ChartThree />', () => {
  it('should render the chart three correctly', () => {
    const { container } = render(<ChartThree />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
