import { render } from '@testing-library/react';

import { CreateOrderProcessing } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Expense/create', () => ({
  createOrderProcessing: jest.fn(),
}));

describe('<CreateOrderProcessing />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateOrderProcessing />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
