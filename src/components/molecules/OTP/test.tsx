import { render } from '@testing-library/react';

import { OTP } from '.';

const onChange = jest.fn();

describe('<OTP />', () => {
  it('should render the OTP correctly', () => {
    const { container } = render(<OTP onChange={onChange} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
