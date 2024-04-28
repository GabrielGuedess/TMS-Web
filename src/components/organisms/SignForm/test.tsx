import { render } from '@testing-library/react';

import { SignForm } from '.';

jest.mock('next-auth/react', () => ({
  signIn: () => ({ url: '/' }),
}));

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
  useSearchParams: () => [new URLSearchParams({ revalidate: '1' })],
}));

describe('<SignForm />', () => {
  it('should render the sign form correctly', () => {
    const { container } = render(<SignForm />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
