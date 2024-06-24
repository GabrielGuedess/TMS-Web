import { type GetLegalContractModelQuery } from 'graphql/generated';

import { render } from '@testing-library/react';

import { ContractGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/LegalClient/create', () => ({
  contractGeneral: jest.fn(),
}));

const contractGeneral = {} as GetLegalContractModelQuery;

describe('<ContractGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<ContractGeneral data={contractGeneral} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
