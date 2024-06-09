import { render } from '@testing-library/react';

import { CreateMaintenanceCompany } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/MaintenanceCompany/create', () => ({
  createMaintenanceCompany: jest.fn(),
}));

describe('<CreateMaintenanceCompany />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateMaintenanceCompany />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
