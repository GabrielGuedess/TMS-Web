import { render } from '@testing-library/react';

import { CreateVehicleModel } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/VehicleModel/create', () => ({
  createVehicleModel: jest.fn(),
}));

describe('<CreateVehicleModel />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateVehicleModel />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
