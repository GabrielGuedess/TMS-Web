import { render } from '@testing-library/react';

import { CompanyVehicleGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/CompanyVehicle/create', () => ({
  CompanyVehicleGeneral: jest.fn(),
}));

describe('<CompanyVehicleGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <CompanyVehicleGeneral
        data={{
          getCompanyVehicle: {
            id: '',
            created_by: '',
            updated_by: '',
            vehicle_id: '',
            carrier_company_id: '',
            __typename: 'CompanyVehicleIModel',
            Vehicle: { id: '', plate: '', __typename: 'VehicleCarModel' },
            CarrierCompany: {
              id: '',
              rntrc: '',
              __typename: 'CarrierCompanyModel',
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
