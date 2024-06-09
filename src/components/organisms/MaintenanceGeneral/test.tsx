import { render } from '@testing-library/react';

import { MaintenanceGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Maintenance/create', () => ({
  MaintenanceGeneral: jest.fn(),
}));

describe('<MaintenanceGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <MaintenanceGeneral
        data={{
          getMaintenance: {
            id: '',
            created_by: '',
            updated_by: '',
            vehicle_id: '',
            finished_at: '',
            maintenance_company_id: '',
            type_of_maintenance_id: '',
            __typename: 'MaintenanceModel',
            MaintenanceCompany: {
              LegalPerson: { id: '', cnpj: '', __typename: 'LegalPersonModel' },
            },
            TypeOfMaintenance: {
              id: '',
              typeMaintenance: '',
              __typename: 'TypeOfMaintenanceModel',
            },
            Vehicle: {
              id: '',
              plate: '',
              __typename: 'VehicleCarModel',
              VehicleModel: {
                id: '',
                name: '',
                __typename: 'VehicleModelReferences',
              },
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
