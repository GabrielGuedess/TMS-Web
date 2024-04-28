import { render } from '@testing-library/react';

import { Stars } from '.';

jest.mock('@react-three/fiber', () => ({
  useFrame: () => ({}),
  Canvas: () => <div data-testid="Mock Canvas" />,
}));

jest.mock('@react-three/drei', () => ({
  Points: () => <div data-testid="Mock Points" />,
  PointMaterial: () => <div data-testid="Mock PointMaterial" />,
}));

describe('<Stars />', () => {
  it('should render the stars correctly', () => {
    const { container } = render(<Stars />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
