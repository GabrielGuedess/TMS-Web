import { render } from '@testing-library/react';

import { CreatePhysicalCustomerQuoteTable } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/PhysicalCustomerQuoteTable/create', () => ({
  createPhysicalCustomerQuoteTable: jest.fn(),
}));

describe('<CreatePhysicalCustomerQuoteTable />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreatePhysicalCustomerQuoteTable />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
