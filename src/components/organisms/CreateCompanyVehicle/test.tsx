import { render } from '@testing-library/react';

import { CreateCompanyVehicle } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/CompanyVehicle/create', () => ({
  createCompanyVehicle: jest.fn(),
}));

describe('<CreateCompanyVehicle />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateCompanyVehicle />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
