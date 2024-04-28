import { type ReactNode } from 'react';

import { render } from '@testing-library/react';

import { Overview } from '.';

jest.mock('components/molecules/MapOne', () => ({
  MapOne: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock MapOne">{children}</div>
  ),
}));

jest.mock('components/molecules/ChartOne', () => ({
  ChartOne: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock ChartOne">{children}</div>
  ),
}));

jest.mock('components/molecules/ChartThree', () => ({
  ChartThree: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock ChartThree">{children}</div>
  ),
}));

describe('<Overview />', () => {
  it('should render the overview correctly', () => {
    const { container } = render(<Overview />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
