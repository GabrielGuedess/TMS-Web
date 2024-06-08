import { render } from '@testing-library/react';

import { CreateLegalClient } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/LegalClient/create', () => ({
  createLegalClient: jest.fn(),
}));

describe('<CreateLegalClient />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateLegalClient />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
