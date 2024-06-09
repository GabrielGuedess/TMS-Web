import { render } from '@testing-library/react';

import { CreateVehicleBodywork } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/VehicleBodywork/create', () => ({
  createVehicleBodywork: jest.fn(),
}));

describe('<CreateVehicleBodywork />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateVehicleBodywork />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
