import { render } from '@testing-library/react';

import { ClockCircleIcon } from '.';

describe('<ClockCircleIcon />', () => {
  it('should render the clock circle icon correctly', () => {
    const { container } = render(<ClockCircleIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
