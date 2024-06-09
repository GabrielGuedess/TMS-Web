import { render } from '@testing-library/react';

import { CreateVehicleBrand } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/VehicleBrand/create', () => ({
  createVehicleBrand: jest.fn(),
}));

describe('<CreateVehicleBrand />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateVehicleBrand />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
