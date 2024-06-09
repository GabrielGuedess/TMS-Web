import { render } from '@testing-library/react';

import { VehicleTypeGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/VehicleType/create', () => ({
  VehicleTypeGeneral: jest.fn(),
}));

describe('<VehicleTypeGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <VehicleTypeGeneral
        data={{
          getVehicleType: {
            id: '',
            name: '',
            BodyWorks: [],
            created_by: '',
            updated_by: '',
            bodyWork: false,
            __typename: 'VehicleTypeModel',
            updated_at: '',
            created_at: '',
          },
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
