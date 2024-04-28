import { render } from '@testing-library/react';

import { ForgotPasswordForm } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

describe('<ForgotPasswordForm />', () => {
  it('should render the forgot password form correctly', () => {
    const { container } = render(<ForgotPasswordForm />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
