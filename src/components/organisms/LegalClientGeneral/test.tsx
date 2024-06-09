import { render } from '@testing-library/react';

import { LegalClientGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/LegalClient/create', () => ({
  LegalClientGeneral: jest.fn(),
}));

describe('<LegalClientGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <LegalClientGeneral
        data={{
          getLegalClientModel: {
            id: '',
            branch: '',
            created_by: '',
            updated_by: '',
            legal_person_id: '',
            __typename: 'LegalClientModel',
            LegalPerson: {
              id: '',
              cnpj: '',
              fantasy_name: '',
              __typename: 'LegalPersonModel',
            },
            updated_at: '',
            created_at: '',
          },
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
