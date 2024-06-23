import { type GetOrderProcessingOneQuery } from 'graphql/generated';

import { render } from '@testing-library/react';

import { OrderProcessingGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Expense/create', () => ({
  orderProcessingGeneral: jest.fn(),
}));

const data = {} as GetOrderProcessingOneQuery;

describe('<OrderProcessingGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<OrderProcessingGeneral data={data} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
