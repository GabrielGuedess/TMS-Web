import { render } from '@testing-library/react';

import { DashboardIcon } from 'components/atoms/DashboardIcon';

import { CardDataStats } from '.';

describe('<CardDataStats />', () => {
  it('should render the card data stats correctly', () => {
    const { container } = render(
      <CardDataStats rate="12" total="123" title="Test" icon={DashboardIcon} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
