import { render } from '@testing-library/react';

import { Notification } from '.';

describe('<Notification />', () => {
  it('should render the notification correctly', () => {
    const { container } = render(<Notification />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
