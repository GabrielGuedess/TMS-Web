import { render } from '@testing-library/react';

import { CreateRecipient } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Recipient/create', () => ({
  createRecipient: jest.fn(),
}));

describe('<CreateRecipient />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateRecipient />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
