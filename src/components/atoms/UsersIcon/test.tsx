import { render } from '@testing-library/react';

import { UsersIcon } from '.';

describe('<UsersIcon />', () => {
  it('should render the users icon correctly', () => {
    const { container } = render(<UsersIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
