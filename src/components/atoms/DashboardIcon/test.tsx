import { render } from '@testing-library/react';

import { DashboardIcon } from '.';

describe('<DashboardIcon />', () => {
  it('should render the dashboard icon correctly', () => {
    const { container } = render(<DashboardIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
