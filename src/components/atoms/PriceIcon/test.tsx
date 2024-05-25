import { render } from '@testing-library/react';

import { PriceIcon } from '.';

describe('<PriceIcon />', () => {
  it('should render the heading', () => {
    const { container } = render(<PriceIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
