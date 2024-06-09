import { render } from '@testing-library/react';

import { ExpenseGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Expense/create', () => ({
  ExpenseGeneral: jest.fn(),
}));

describe('<ExpenseGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <ExpenseGeneral
        data={{
          getFreightExpense: {
            id: '',
            value: 0,
            expenseName: '',
            legalClientOrderId: '',
            physicalCustomerOrderId: '',
            __typename: 'FreightExpenseModel',
            LegalClientOrder: {
              id: '',
              order: '',
              __typename: 'LegalClientOrderModel',
            },
            PhysicalCustomerOrder: {
              id: '',
              order: '',
              __typename: 'PhysicalCustomerOrderModel',
            },
          },
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
