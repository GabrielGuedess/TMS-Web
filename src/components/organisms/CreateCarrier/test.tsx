import { render } from '@testing-library/react';

import { CreateCarrier } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Carrier/create', () => ({
  createCarrier: jest.fn(),
}));

describe('<CreateCarrier />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(<CreateCarrier />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
