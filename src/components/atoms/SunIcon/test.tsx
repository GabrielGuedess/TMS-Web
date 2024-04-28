import { render } from '@testing-library/react';

import { SunIcon } from '.';

describe('<SunIcon />', () => {
  it('should render the sun icon correctly', () => {
    const { container } = render(<SunIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
