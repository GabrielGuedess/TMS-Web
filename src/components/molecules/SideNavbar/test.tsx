import { render } from '@testing-library/react';

import { SideNavbar } from '.';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('<SideNavbar />', () => {
  it('should render the side navbar correctly', () => {
    const { container } = render(<SideNavbar />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
