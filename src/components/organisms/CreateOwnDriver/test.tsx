import { render } from '@testing-library/react';

import { CreateOwnDriver } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/OwnDriver/create', () => ({
  createOwnDriver: jest.fn(),
}));

describe('<CreateOwnDriver />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateOwnDriver />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
