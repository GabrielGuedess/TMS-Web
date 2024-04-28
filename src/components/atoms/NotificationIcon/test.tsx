import { render } from '@testing-library/react';

import { NotificationIcon } from '.';

describe('<NotificationIcon />', () => {
  it('should render the notification icon correctly', () => {
    const { container } = render(<NotificationIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
