import { render } from '@testing-library/react';

import { CreateContract } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/LegalClient/create', () => ({
  createContract: jest.fn(),
}));

describe('<CreateContract />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateContract />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
