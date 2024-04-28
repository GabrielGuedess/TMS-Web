import { render } from '@testing-library/react';

import { MoonIcon } from '.';

describe('<MoonIcon />', () => {
  it('should render the moon icon correctly', () => {
    const { container } = render(<MoonIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
