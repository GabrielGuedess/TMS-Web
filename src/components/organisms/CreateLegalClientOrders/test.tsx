import { render } from '@testing-library/react';

import { CreateLegalClientOrder } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/LegalClientOrder/create', () => ({
  createLegalClientOrder: jest.fn(),
}));

describe('<CreateLegalClientOrder />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateLegalClientOrder />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
