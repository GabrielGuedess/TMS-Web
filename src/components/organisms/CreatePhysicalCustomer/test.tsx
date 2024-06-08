import { render } from '@testing-library/react';

import { CreatePhysicalCustomer } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/PhysicalCustomer/create', () => ({
  createPhysicalCustomer: jest.fn(),
}));

describe('<CreatePhysicalCustomer />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreatePhysicalCustomer />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
