import { render } from '@testing-library/react';

import { CarrierGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Carrier/create', () => ({
  CarrierGeneral: jest.fn(),
}));

describe('<CarrierGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <CarrierGeneral
        data={{
          getCarrierCompanyModel: {
            id: '',
            rntrc: '',
            created_by: '',
            updated_by: '',
            legalPersonId: '',
            __typename: 'CarrierCompanyModel',
            LegalPerson: {
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
