import { render } from '@testing-library/react';

import { DashboardIcon } from 'components/atoms/DashboardIcon';

import { SideButton } from '.';

describe('<SideButton />', () => {
  it('should render the side button correctly', () => {
    const { container } = render(
      <SideButton href="/" title="Test" icon={DashboardIcon} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
