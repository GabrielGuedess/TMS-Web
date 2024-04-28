import { render } from '@testing-library/react';

import { ProfileIcon } from '.';

describe('<ProfileIcon />', () => {
  it('should render the profile icon correctly', () => {
    const { container } = render(<ProfileIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
