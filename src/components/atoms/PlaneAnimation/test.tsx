import { render } from '@testing-library/react';

import { PlaneAnimation } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Lottie" />;
  },
}));

describe('<PlaneAnimation />', () => {
  it('should render the plane animation correctly', () => {
    const { container } = render(<PlaneAnimation />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
