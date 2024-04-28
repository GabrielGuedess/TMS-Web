import { render } from '@testing-library/react';

import { ClockIcon } from '.';

describe('<ClockIcon />', () => {
  it('should render the clock icon correctly', () => {
    const { container } = render(<ClockIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
