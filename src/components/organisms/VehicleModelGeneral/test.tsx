import { render } from '@testing-library/react';

import { VehicleModelGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/VehicleModel/create', () => ({
  VehicleModelGeneral: jest.fn(),
}));

describe('<VehicleModelGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <VehicleModelGeneral
        data={{
          getVehicleModel: {
            id: '',
            axles: 0,
            name: '',
            weight: 0,
            type_id: '',
            brand_id: '',
            created_by: '',
            updated_by: '',
            capacity_max: 0,
            capacity_per_axle: 0,
            __typename: 'VehicleModelGraphql',
            VehicleType: { id: '', name: '', __typename: 'VehicleTypeModel' },
            VehicleBrand: {
              id: '',
              name: '',
              __typename: 'VehicleBrandReferences',
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
