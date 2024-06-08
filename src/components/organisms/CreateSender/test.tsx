import { render } from '@testing-library/react';

import { CreateSender } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Sender/create', () => ({
  createSender: jest.fn(),
}));

describe('<CreateSender />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateSender />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
