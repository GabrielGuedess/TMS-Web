import { type GetLegalClientQuoteTableQuery } from 'graphql/generated';

import { render } from '@testing-library/react';

import { OverviewLegalClientQuoteTable } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/LegalClientQuoteTable/create', () => ({
  overviewLegalClientQuoteTable: jest.fn(),
}));

const data = {} as GetLegalClientQuoteTableQuery;

describe('<OverviewLegalClientQuoteTable />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<OverviewLegalClientQuoteTable data={data} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
