import { render } from '@testing-library/react';

import { CreateVehicleType } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/VehicleType/create', () => ({
  createVehicleType: jest.fn(),
}));

describe('<CreateVehicleType />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateVehicleType />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
