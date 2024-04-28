import { render } from '@testing-library/react';

import { TruckIcon } from '.';

describe('<TruckIcon />', () => {
  it('should render the truck icon correctly', () => {
    const { container } = render(<TruckIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
