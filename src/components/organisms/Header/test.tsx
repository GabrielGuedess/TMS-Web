import { render } from '@testing-library/react';

import { Header } from '.';

jest.mock('components/molecules/CurrentAvatar', () => ({
  CurrentAvatar: () => <div data-testid="Mock CurrentAvatar" />,
}));

describe('<Header />', () => {
  it('should render the header correctly', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
