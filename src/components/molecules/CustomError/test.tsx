import { render } from '@testing-library/react';

import { CustomError } from '.';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Lottie" />;
  },
}));

describe('<CustomError />', () => {
  it('should render the custom error', () => {
    const { container } = render(
      <CustomError noRowsMessageFunc={() => 'Error'} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
