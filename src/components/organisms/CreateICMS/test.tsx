import { render } from '@testing-library/react';

import { CreateICMS } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/ICMS/create', () => ({
  createICMS: jest.fn(),
}));

describe('<CreateICMS />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateICMS />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
