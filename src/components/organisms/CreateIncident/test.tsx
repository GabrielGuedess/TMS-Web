import { render } from '@testing-library/react';

import { CreateIncident } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Incident/create', () => ({
  createIncident: jest.fn(),
}));

describe('<CreateIncident />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateIncident />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
