import { render } from '@testing-library/react';

import { CreatePhysicalCustomerOrder } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/PhysicalCustomerOrder/create', () => ({
  createPhysicalCustomerOrder: jest.fn(),
}));

describe('<CreatePhysicalCustomerOrder />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreatePhysicalCustomerOrder />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
