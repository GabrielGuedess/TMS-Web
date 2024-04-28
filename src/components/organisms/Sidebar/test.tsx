import { render } from '@testing-library/react';

import { Sidebar } from '.';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('<Sidebar />', () => {
  it('should render the sidebar correctly', () => {
    const { container } = render(<Sidebar />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
