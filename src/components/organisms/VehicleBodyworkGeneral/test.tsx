import { render } from '@testing-library/react';

import { VehicleBodyworkGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/VehicleBodywork/create', () => ({
  VehicleBodyworkGeneral: jest.fn(),
}));

describe('<VehicleBodyworkGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <VehicleBodyworkGeneral
        data={{
          getVehicleBodyworkModel: {
            id: '',
            mass: 0,
            axles: 0,
            name: '',
            volume: 0,
            created_by: '',
            updated_by: '',
            __typename: 'VehicleBodyworkModel',
            updated_at: '',
            created_at: '',
          },
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
