import { render } from '@testing-library/react';

import { CalendarIcon } from '.';

describe('<CalendarIcon />', () => {
  it('should render the calendar icon correctly', () => {
    const { container } = render(<CalendarIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
