import { render } from '@testing-library/react';

import { ResetPasswordForm } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

describe('<ResetPasswordForm />', () => {
  it('should render the reset password form correctly', () => {
    const { container } = render(<ResetPasswordForm />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
