import { render } from '@testing-library/react';

import { InputOTP } from '.';

describe('<InputOTP />', () => {
  it('should render the input OTP correctly', () => {
    const { container } = render(<InputOTP />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
