import { render } from '@testing-library/react';

import { OwnDriverGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/OwnDriver/create', () => ({
  OwnDriverGeneral: jest.fn(),
}));

describe('<OwnDriverGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <OwnDriverGeneral
        data={{
          getOwnDriver: {
            id: '',
            cnh: '',
            created_by: '',
            updated_by: '',
            cnh_category: '',
            cnh_expiration: '',
            course_mopp: false,
            natural_person_id: '',
            company_vehicle: false,
            __typename: 'OwnDriverModel',
            NaturalPerson: {
              id: '',
              cpf: '',
              name: '',
              __typename: 'NaturalPersonModel',
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
