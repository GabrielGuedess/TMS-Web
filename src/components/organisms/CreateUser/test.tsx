import { render } from '@testing-library/react';

import { CreateUser } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/user/create', () => ({
  createUser: jest.fn(),
}));

describe('<CreateUser />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateUser />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
