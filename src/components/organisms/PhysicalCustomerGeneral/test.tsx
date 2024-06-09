import { render } from '@testing-library/react';

import { PhysicalCustomerGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/PhysicalCustomer/create', () => ({
  PhysicalCustomerGeneral: jest.fn(),
}));

describe('<PhysicalCustomerGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <PhysicalCustomerGeneral
        data={{
          getPhysicalCustomer: {
            id: '',
            branch: '',
            created_by: '',
            updated_by: '',
            natural_person_id: '',
            __typename: 'PhysicalCustomerModel',
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
