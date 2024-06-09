import { render } from '@testing-library/react';

import { MaintenanceCompanyGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/MaintenanceCompany/create', () => ({
  MaintenanceCompanyGeneral: jest.fn(),
}));

describe('<MaintenanceCompanyGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <MaintenanceCompanyGeneral
        data={{
          getMaintenanceCompanyModel: {
            id: '',
            created_by: '',
            updated_by: '',
            legal_person_id: '',
            specialty_maintenance: '',
            __typename: 'MaintenanceCompanyModel',
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
