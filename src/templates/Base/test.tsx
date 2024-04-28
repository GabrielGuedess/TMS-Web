import { render } from '@testing-library/react';

import { Base } from '.';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

jest.mock('components/organisms/Header', () => ({
  Header: () => <div data-testid="Mock Header" />,
}));

describe('<Base />', () => {
  it('should render the base correctly', () => {
    const { container } = render(
      <Base>
        <h1>Test</h1>
      </Base>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
