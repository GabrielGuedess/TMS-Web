import { render } from '@testing-library/react';

import { VehicleBrandGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/VehicleBrand/create', () => ({
  VehicleBrandGeneral: jest.fn(),
}));

describe('<VehicleBrandGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <VehicleBrandGeneral
        data={{
          getVehicleBrand: {
            id: '',
            name: '',
            created_by: '',
            updated_by: '',
            __typename: 'VehicleBrandModel',
            VehicleModels: {
              id: '',
              name: '',

              __typename: 'VehicleModelGraphql',
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
