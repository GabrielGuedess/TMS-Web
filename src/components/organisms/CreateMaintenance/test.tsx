import { render } from '@testing-library/react';

import { CreateMaintenance } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Maintenance/create', () => ({
  createMaintenance: jest.fn(),
}));

describe('<CreateMaintenance />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateMaintenance />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
