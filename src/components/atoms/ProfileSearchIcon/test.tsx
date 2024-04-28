import { render } from '@testing-library/react';

import { ProfileSearchIcon } from '.';

describe('<ProfileSearchIcon />', () => {
  it('should render the profile search icon correctly', () => {
    const { container } = render(<ProfileSearchIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
