import { render } from '@testing-library/react';

import { CreateExpense } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Expense/create', () => ({
  createExpense: jest.fn(),
}));

describe('<CreateExpense />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateExpense />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
