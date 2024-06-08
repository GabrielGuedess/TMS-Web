import { render } from '@testing-library/react';

import { CreateLegalClientQuoteTable } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/LegalClientQuoteTable/create', () => ({
  createLegalClientQuoteTable: jest.fn(),
}));

describe('<CreateLegalClientQuoteTable />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateLegalClientQuoteTable />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
